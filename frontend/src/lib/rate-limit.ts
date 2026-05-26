/**
 * Rate Limiting Utility
 * @author Nejib Aloui <nejib20@gmail.com>
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Rate limit configuration
 */
interface RateLimitConfig {
  max: number; // Maximum requests
  window: number; // Time window in milliseconds
}

/**
 * Default rate limit: 10 requests per minute
 */
const DEFAULT_CONFIG: RateLimitConfig = {
  max: parseInt(process.env.RATE_LIMIT_MAX || '10', 10),
  window: parseInt(process.env.RATE_LIMIT_WINDOW || '60000', 10),
};

/**
 * Check if request is rate limited
 */
export function isRateLimited(
  identifier: string,
  config: RateLimitConfig = DEFAULT_CONFIG
): { limited: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  // Clean up expired entries
  if (entry && now > entry.resetTime) {
    rateLimitStore.delete(identifier);
  }

  // Get or create entry
  const current = rateLimitStore.get(identifier) || {
    count: 0,
    resetTime: now + config.window,
  };

  // Increment count
  current.count += 1;
  rateLimitStore.set(identifier, current);

  const remaining = Math.max(0, config.max - current.count);
  const limited = current.count > config.max;

  return {
    limited,
    remaining,
    resetTime: current.resetTime,
  };
}

/**
 * Reset rate limit for identifier
 */
export function resetRateLimit(identifier: string): void {
  rateLimitStore.delete(identifier);
}

/**
 * Get rate limit headers
 */
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

/**
 * Clean up expired entries periodically
 */
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
      if (now > entry.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }, 60000); // Clean up every minute
}

/**
 * Get client identifier from request
 */
export function getClientIdentifier(request: Request): string {
  // Try to get IP from various headers
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  const ip = cfConnectingIp || realIp || forwardedFor?.split(',')[0] || 'unknown';

  return ip.trim();
}
