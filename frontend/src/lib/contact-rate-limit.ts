/**
 * Rate limiting DURABLE pour le formulaire de contact (Upstash Redis) avec
 * fallback mémoire (dev / Upstash absent). 3 soumissions / heure / IP par défaut.
 * @author Nejib Aloui <nejib20@gmail.com>
 */
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export interface RateLimitResult {
  limited: boolean;
  remaining: number;
  limit: number;
  resetTime: number; // epoch ms
  pending?: Promise<unknown>;
}

const MAX = parseInt(process.env.RATE_LIMIT_MAX || '3', 10);
const WINDOW_MS = 60 * 60 * 1000; // 1 h

const hasUpstash =
  !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

const ratelimit = hasUpstash
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(MAX, '1 h'),
      prefix: 'eoliya:contact',
      analytics: true,
      timeout: 1500, // fail-open si Redis ne répond pas en 1,5 s
    })
  : null;

// --- Fallback mémoire (best-effort, dev local uniquement) ---
const memoryStore = new Map<string, { count: number; resetTime: number }>();
function memoryLimit(identifier: string): RateLimitResult {
  const now = Date.now();
  const entry = memoryStore.get(identifier);
  if (entry && now > entry.resetTime) memoryStore.delete(identifier);
  const current = memoryStore.get(identifier) ?? { count: 0, resetTime: now + WINDOW_MS };
  current.count += 1;
  memoryStore.set(identifier, current);
  return {
    limited: current.count > MAX,
    remaining: Math.max(0, MAX - current.count),
    limit: MAX,
    resetTime: current.resetTime,
  };
}

export async function checkRateLimit(identifier: string): Promise<RateLimitResult> {
  if (!ratelimit) {
    if (process.env.NODE_ENV === 'production') {
      console.warn('[contact-rate-limit] Upstash non configuré — fallback mémoire non fiable en serverless.');
    }
    return memoryLimit(identifier);
  }
  const { success, limit, remaining, reset, pending } = await ratelimit.limit(identifier);
  return { limited: !success, remaining, limit, resetTime: reset, pending };
}

export function getContactRateLimitHeaders(r: RateLimitResult): Record<string, string> {
  return {
    'X-RateLimit-Limit': String(r.limit),
    'X-RateLimit-Remaining': String(Math.max(0, r.remaining)),
    'X-RateLimit-Reset': String(Math.ceil(r.resetTime / 1000)),
    ...(r.limited
      ? { 'Retry-After': String(Math.max(0, Math.ceil((r.resetTime - Date.now()) / 1000))) }
      : {}),
  };
}
