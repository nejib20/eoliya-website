/**
 * Vérification serveur Cloudflare Turnstile (siteverify).
 * @author Nejib Aloui <nejib20@gmail.com>
 */
import { randomUUID } from 'node:crypto';

const SITEVERIFY = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

interface SiteverifyResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

export interface TurnstileResult {
  ok: boolean;
  codes: string[];
  action?: string;
  hostname?: string;
}

/** True si la vérification Turnstile est configurée côté serveur. */
export const turnstileConfigured = !!process.env.TURNSTILE_SECRET_KEY;

export async function verifyTurnstile(
  token: string | undefined,
  remoteip?: string
): Promise<TurnstileResult> {
  if (!token) return { ok: false, codes: ['missing-input-response'] };

  const body = new URLSearchParams();
  body.append('secret', process.env.TURNSTILE_SECRET_KEY as string);
  body.append('response', token);
  if (remoteip && remoteip !== '127.0.0.1') body.append('remoteip', remoteip);
  body.append('idempotency_key', randomUUID());

  let data: SiteverifyResponse;
  try {
    const res = await fetch(SITEVERIFY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    data = (await res.json()) as SiteverifyResponse;
  } catch {
    return { ok: false, codes: ['internal-error'] };
  }

  return {
    ok: data.success === true,
    codes: data['error-codes'] ?? [],
    action: data.action,
    hostname: data.hostname,
  };
}
