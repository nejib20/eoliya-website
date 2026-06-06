/**
 * Émission du jeton time-trap (HMAC). Renvoie une chaîne vide si la couche
 * n'est pas configurée (FORM_TS_SECRET absent) — le formulaire reste fonctionnel.
 * @author Nejib Aloui <nejib20@gmail.com>
 */
import { NextResponse } from 'next/server';
import { issueFormToken } from '@/lib/formToken';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(
    { formToken: issueFormToken() },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
