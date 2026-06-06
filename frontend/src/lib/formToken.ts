/**
 * Time-trap : jeton HMAC signé (timestamp), anti-soumission instantanée.
 * Dégradation gracieuse : si FORM_TS_SECRET est absent, la couche est désactivée.
 * @author Nejib Aloui <nejib20@gmail.com>
 */
import { createHmac, timingSafeEqual } from 'node:crypto';

const MIN_MS = 3_000; // < 3 s = bot
const MAX_MS = 1_800_000; // > 30 min = jeton périmé

export const timeTrapConfigured = !!process.env.FORM_TS_SECRET;

function secret(): string {
  return process.env.FORM_TS_SECRET as string;
}

/** Émet un jeton signé. Renvoie '' si la couche n'est pas configurée. */
export function issueFormToken(): string {
  if (!timeTrapConfigured) return '';
  const ts = Date.now().toString();
  const sig = createHmac('sha256', secret()).update(ts).digest('base64url');
  return `${ts}.${sig}`;
}

export type DwellResult = 'ok' | 'too_fast' | 'expired' | 'invalid' | 'skip';

export function verifyFormToken(token: string | undefined): DwellResult {
  if (!timeTrapConfigured) return 'skip';
  if (!token || !token.includes('.')) return 'invalid';
  const [ts, sig] = token.split('.');
  if (!ts || !sig || !/^\d+$/.test(ts)) return 'invalid';

  const expected = createHmac('sha256', secret()).update(ts).digest('base64url');
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return 'invalid';

  const elapsed = Date.now() - Number(ts);
  if (elapsed < MIN_MS) return 'too_fast';
  if (elapsed > MAX_MS) return 'expired';
  return 'ok';
}
