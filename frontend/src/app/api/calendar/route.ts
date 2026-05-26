/**
 * Calendar API Route - Create Events
 * @author Nejib Aloui <nejib20@gmail.com>
 */

import { NextRequest, NextResponse } from 'next/server';
import { createCalendarEvent } from '@/lib/google-calendar';
import { sendBookingConfirmationEmail } from '@/lib/email';
import { bookingFormSchema, validateData } from '@/lib/validation';
import { isRateLimited, getClientIdentifier, getRateLimitHeaders } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * POST /api/calendar - Create a calendar event
 */
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientId = getClientIdentifier(request);
    const rateLimit = isRateLimited(`calendar:${clientId}`, { max: 5, window: 3600000 }); // 5 per hour

    if (rateLimit.limited) {
      return NextResponse.json(
        { error: 'Trop de tentatives. Veuillez réessayer plus tard.' },
        {
          status: 429,
          headers: getRateLimitHeaders(rateLimit.remaining, rateLimit.resetTime),
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = validateData(bookingFormSchema, body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Données invalides', errors: validation.errors },
        { status: 400 }
      );
    }

    const data = validation.data;

    // Check honeypot
    if (data.website) {
      console.warn('Spam attempt detected:', clientId);
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    // Create calendar event
    const startDateTime = new Date(`${data.date}T${data.time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + parseInt(data.duration) * 60000);

    const eventId = await createCalendarEvent({
      summary: `RDV ${data.name}${data.company ? ` (${data.company})` : ''}`,
      description: `
Rendez-vous avec ${data.name}
${data.company ? `Entreprise: ${data.company}\n` : ''}
Email: ${data.email}
Téléphone: ${data.phone}
Type: ${data.meetingType === 'office' ? 'Bureau' : data.meetingType === 'video' ? 'Visio' : 'Téléphone'}

${data.notes ? `Notes:\n${data.notes}` : ''}
      `.trim(),
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Europe/Paris',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Europe/Paris',
      },
      attendees: [
        {
          email: data.email,
          displayName: data.name,
        },
      ],
      location: data.meetingType === 'office' ? '131 Boulevard Pereire, 75017 Paris' : undefined,
    });

    // Send confirmation email
    try {
      await sendBookingConfirmationEmail({
        name: data.name,
        email: data.email,
        date: new Date(data.date).toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        time: data.time,
        duration: `${data.duration} minutes`,
      });
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError);
      // Continue even if email fails
    }

    return NextResponse.json(
      {
        success: true,
        eventId,
        message: 'Rendez-vous créé avec succès',
      },
      {
        status: 201,
        headers: getRateLimitHeaders(rateLimit.remaining - 1, rateLimit.resetTime),
      }
    );
  } catch (error) {
    console.error('Error creating calendar event:', error);

    return NextResponse.json(
      {
        error: 'Erreur lors de la création du rendez-vous',
        message: error instanceof Error ? error.message : 'Unknown error',
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
