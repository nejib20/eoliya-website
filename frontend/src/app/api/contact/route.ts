/**
 * Contact Form API Route
 * @author Nejib Aloui <nejib20@gmail.com>
 */

import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import { contactFormSchema, validateData } from '@/lib/validation';
import { isRateLimited, getClientIdentifier, getRateLimitHeaders } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * POST /api/contact - Send contact form email
 */
export async function POST(request: NextRequest) {
  try {
    // Rate limiting - 3 submissions per hour per IP
    const clientId = getClientIdentifier(request);
    const rateLimit = isRateLimited(`contact:${clientId}`, { max: 3, window: 3600000 });

    if (rateLimit.limited) {
      return NextResponse.json(
        {
          error: 'Trop de soumissions. Veuillez réessayer dans une heure.',
        },
        {
          status: 429,
          headers: getRateLimitHeaders(rateLimit.remaining, rateLimit.resetTime),
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = validateData(contactFormSchema, body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: 'Données invalides',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const data = validation.data;

    // Check honeypot field
    if (data.website) {
      console.warn('Spam attempt detected from:', clientId);
      // Return success to not alert spammer
      return NextResponse.json(
        {
          success: true,
          message: 'Message envoyé avec succès',
        },
        { status: 200 }
      );
    }

    // Send email
    const emailId = await sendContactEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      subject: data.subject,
      message: data.message,
    });

    console.log('Contact email sent:', { emailId, from: data.email, subject: data.subject });

    return NextResponse.json(
      {
        success: true,
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
        emailId,
      },
      {
        status: 200,
        headers: getRateLimitHeaders(rateLimit.remaining - 1, rateLimit.resetTime),
      }
    );
  } catch (error) {
    console.error('Error sending contact email:', error);

    return NextResponse.json(
      {
        error: 'Erreur lors de l\'envoi du message',
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.',
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS - CORS preflight
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
