/**
 * Calendar Slots API Route - Get Available Slots
 * @author Nejib Aloui <nejib20@gmail.com>
 */

import { NextRequest, NextResponse } from 'next/server';
import { getAvailableSlots } from '@/lib/google-calendar';
import { isRateLimited, getClientIdentifier, getRateLimitHeaders } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/calendar/slots - Get available time slots
 * Query params: startDate, endDate, duration
 */
export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const clientId = getClientIdentifier(request);
    const rateLimit = isRateLimited(`calendar-slots:${clientId}`, { max: 20, window: 60000 });

    if (rateLimit.limited) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer plus tard.' },
        {
          status: 429,
          headers: getRateLimitHeaders(rateLimit.remaining, rateLimit.resetTime),
        }
      );
    }

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const startDateParam = searchParams.get('startDate');
    const endDateParam = searchParams.get('endDate');
    const durationParam = searchParams.get('duration');

    // Validate parameters
    if (!startDateParam || !endDateParam) {
      return NextResponse.json(
        { error: 'Les paramètres startDate et endDate sont requis' },
        { status: 400 }
      );
    }

    const startDate = new Date(startDateParam);
    const endDate = new Date(endDateParam);
    const duration = durationParam ? parseInt(durationParam, 10) : 60;

    // Validate dates
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return NextResponse.json({ error: 'Format de date invalide' }, { status: 400 });
    }

    if (startDate >= endDate) {
      return NextResponse.json(
        { error: 'La date de début doit être antérieure à la date de fin' },
        { status: 400 }
      );
    }

    const now = new Date();
    if (startDate < now) {
      return NextResponse.json(
        { error: 'La date de début doit être dans le futur' },
        { status: 400 }
      );
    }

    // Validate duration
    if (![30, 60, 90, 120].includes(duration)) {
      return NextResponse.json({ error: 'Durée invalide (30, 60, 90 ou 120 minutes)' }, { status: 400 });
    }

    // Get available slots
    const slots = await getAvailableSlots(startDate, endDate, duration);

    return NextResponse.json(
      {
        success: true,
        slots,
        count: slots.length,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        duration,
      },
      {
        status: 200,
        headers: {
          ...getRateLimitHeaders(rateLimit.remaining - 1, rateLimit.resetTime),
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching available slots:', error);

    return NextResponse.json(
      {
        error: 'Erreur lors de la récupération des créneaux disponibles',
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
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
