/**
 * Rate Limiting Utility (en mémoire) — utilisé par les routes internes
 * (chat, calendar). Le formulaire de contact utilise le limiteur durable
 * dédié dans `contact-rate-limit.ts`.
 * @author Nejib Aloui <nejib20@gmail.com>
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

interface RateLimitConfig {
  max: number;
  window: number;
}

const DEFAULT_CONFIG: RateLimitConfig = {
  max: parseInt(process.env.RATE_LIMIT_MAX || '10', 10),
  window: parseInt(process.env.RATE_LIMIT_WINDOW || '60000', 10),
};

export function isRateLimited(
  identifier: string,
  config: RateLimitConfig = DEFAULT_CONFIG
): { limited: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  if (entry && now > entry.resetTime) {
    rateLimitStore.delete(identifier);
  }

  const current = rateLimitStore.get(identifier) || {
    count: 0,
    resetTime: now + config.window,
  };

  current.count += 1;
  rateLimitStore.set(identifier, current);

  const remaining = Math.max(0, config.max - current.count);
  const limited = current.count > config.max;

  return { limited, remaining, resetTime: current.resetTime };
}

export function resetRateLimit(identifier: string): void {
  rateLimitStore.delete(identifier);
}

export function getRateLimitHeaders(
  remaining: number,
  resetTime: number
): Record<string, string> {
  return {
    'X-RateLimit-Limit': String(DEFAULT_CONFIG.max),
    'X-RateLimit-Remaining': String(remaining),
    'X-RateLimit-Reset': String(resetTime),
  };
}

if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
      if (now > entry.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }, 60000);
}

/** IP client via en-têtes Vercel (anti-spoof). */
export function getClientIdentifier(request: Request): string {
  const ip =
    request.headers.get('x-vercel-forwarded-for') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown';
  return ip.trim();
}
