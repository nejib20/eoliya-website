/**
 * Contact Form API Route — défense en profondeur.
 * Ordre des couches : Origin → honeypot → time-trap → rate-limit → Turnstile → zod → envoi.
 * Chaque couche externe (Turnstile, time-trap, Upstash) s'active uniquement si configurée.
 * @author Nejib Aloui <nejib20@gmail.com>
 */
import { NextRequest, NextResponse } from 'next/server';
import { waitUntil } from '@vercel/functions';
import { sendContactEmail } from '@/lib/email';
import { contactFormSchema, validateData } from '@/lib/validation';
import { getClientIdentifier } from '@/lib/rate-limit';
import { checkRateLimit, getContactRateLimitHeaders as getRateLimitHeaders } from '@/lib/contact-rate-limit';
import { verifyTurnstile, turnstileConfigured } from '@/lib/verifyTurnstile';
import { verifyFormToken } from '@/lib/formToken';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ALLOWED_HOST = 'eoliya.com';
const ALLOWED_HOSTS = new Set(['eoliya.com', 'www.eoliya.com']);
const isProd = process.env.NODE_ENV === 'production';

/** Hostname exact (anti-bypass de suffixe non ancré, ex. « noteoliya.com »). */
function hostOf(value: string | undefined | null): string | null {
  if (!value) return null;
  try {
    return new URL(value).hostname.toLowerCase().replace(/\.$/, '');
  } catch {
    // value peut déjà être un hostname nu (cas du hostname Turnstile)
    return value.toLowerCase().replace(/\.$/, '');
  }
}

// 200 factice : ne pas signaler aux bots qu'ils ont été détectés
function fakeOk() {
  return NextResponse.json(
    { success: true, message: 'Votre message a été envoyé avec succès.' },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  try {
    // 0. Anti-CSRF : un POST de ce formulaire est forcément same-origin.
    //    Comparaison EXACTE du hostname (pas de endsWith, qui accepterait « noteoliya.com »).
    const origin = request.headers.get('origin');
    if (isProd && origin) {
      const oh = hostOf(origin);
      if (!oh || !ALLOWED_HOSTS.has(oh)) {
        return NextResponse.json({ error: 'Origine invalide' }, { status: 403 });
      }
    }
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return NextResponse.json({ error: 'Type de contenu invalide' }, { status: 415 });
    }

    const body = await request.json();
    const clientId = getClientIdentifier(request);

    // 1. Honeypot — 200 factice
    if (body.website) {
      console.warn('[contact] honeypot déclenché:', clientId);
      return fakeOk();
    }

    // 2. Time-trap (HMAC) — appliqué seulement si FORM_TS_SECRET configuré
    const dwell = verifyFormToken(body.formToken);
    if (dwell === 'too_fast') {
      console.warn('[contact] time-trap too_fast:', clientId);
      return fakeOk();
    }
    if (dwell === 'expired' || dwell === 'invalid') {
      return NextResponse.json(
        { error: 'Session expirée. Veuillez recharger la page et réessayer.' },
        { status: 400 }
      );
    }

    // 3. Rate-limit durable (Upstash si configuré, sinon mémoire)
    const rl = await checkRateLimit(`contact:${clientId}`);
    if (rl.pending) waitUntil(rl.pending);
    if (rl.limited) {
      return NextResponse.json(
        { error: 'Trop de soumissions. Veuillez réessayer dans une heure.' },
        { status: 429, headers: getRateLimitHeaders(rl) }
      );
    }

    // 4. Turnstile — appliqué seulement si TURNSTILE_SECRET_KEY configuré
    if (turnstileConfigured) {
      const ts = await verifyTurnstile(body.turnstileToken, clientId);
      const actionOk = !ts.action || ts.action === 'contact';
      const tsHost = hostOf(ts.hostname);
      const hostOk = !isProd || !tsHost || ALLOWED_HOSTS.has(tsHost);
      if (!ts.ok || !actionOk || !hostOk) {
        console.warn('[contact] turnstile échec:', clientId, ts.codes.join(','));
        return NextResponse.json(
          { error: 'Vérification anti-bot échouée. Veuillez réessayer.' },
          { status: 400, headers: getRateLimitHeaders(rl) }
        );
      }
    }

    // 5. Validation zod
    const validation = validateData(contactFormSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Données invalides', errors: validation.errors },
        { status: 400, headers: getRateLimitHeaders(rl) }
      );
    }
    const data = validation.data;

    // 6. Envoi
    const emailId = await sendContactEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      subject: data.subject,
      message: data.message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
        emailId,
      },
      { status: 200, headers: getRateLimitHeaders(rl) }
    );
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      {
        error: "Erreur lors de l'envoi du message",
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.',
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': `https://${ALLOWED_HOST}`,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
