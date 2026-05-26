/**
 * Google Calendar API Integration
 * @author Nejib Aloui <nejib20@gmail.com>
 */

import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

interface CalendarEvent {
  summary: string;
  description?: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees?: Array<{
    email: string;
    displayName?: string;
  }>;
  location?: string;
  reminders?: {
    useDefault: boolean;
    overrides?: Array<{
      method: 'email' | 'popup';
      minutes: number;
    }>;
  };
}

interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

/**
 * Initialize Google Calendar client
 */
export function getCalendarClient() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/calendar/callback';

  if (!clientId || !clientSecret) {
    throw new Error('Google Calendar credentials not configured');
  }

  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUri
  );

  // Set refresh token if available
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  if (refreshToken) {
    oauth2Client.setCredentials({
      refresh_token: refreshToken,
    });
  }

  return google.calendar({ version: 'v3', auth: oauth2Client });
}

/**
 * Create a calendar event
 */
export async function createCalendarEvent(event: CalendarEvent): Promise<string> {
  try {
    const calendar = getCalendarClient();
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';

    const response = await calendar.events.insert({
      calendarId,
      requestBody: {
        summary: event.summary,
        description: event.description,
        start: event.start,
        end: event.end,
        attendees: event.attendees,
        location: event.location || '131 Boulevard Pereire, 75017 Paris',
        reminders: event.reminders || {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 }, // 1 day before
            { method: 'popup', minutes: 30 }, // 30 minutes before
          ],
        },
        conferenceData: {
          createRequest: {
            requestId: `eoliya-${Date.now()}`,
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
      },
      conferenceDataVersion: 1,
      sendUpdates: 'all',
    });

    if (!response.data.id) {
      throw new Error('Failed to create calendar event');
    }

    return response.data.id;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw new Error('Failed to create calendar event');
  }
}

/**
 * Get available time slots for booking
 */
export async function getAvailableSlots(
  startDate: Date,
  endDate: Date,
  duration: number = 60 // Duration in minutes
): Promise<TimeSlot[]> {
  try {
    const calendar = getCalendarClient();
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';

    // Get busy times
    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: startDate.toISOString(),
        timeMax: endDate.toISOString(),
        items: [{ id: calendarId }],
        timeZone: 'Europe/Paris',
      },
    });

    const busySlots = response.data.calendars?.[calendarId]?.busy || [];

    // Generate time slots (9h-18h, weekdays only)
    const slots: TimeSlot[] = [];
    const current = new Date(startDate);

    while (current < endDate) {
      const day = current.getDay();
      const hour = current.getHours();

      // Skip weekends and outside business hours
      if (day !== 0 && day !== 6 && hour >= 9 && hour < 18) {
        const slotStart = new Date(current);
        const slotEnd = new Date(current.getTime() + duration * 60000);

        // Check if slot is available
        const isAvailable = !busySlots.some((busy) => {
          const busyStart = new Date(busy.start || '');
          const busyEnd = new Date(busy.end || '');
          return (
            (slotStart >= busyStart && slotStart < busyEnd) ||
            (slotEnd > busyStart && slotEnd <= busyEnd) ||
            (slotStart <= busyStart && slotEnd >= busyEnd)
          );
        });

        if (isAvailable) {
          slots.push({
            start: slotStart.toISOString(),
            end: slotEnd.toISOString(),
            available: true,
          });
        }
      }

      // Move to next slot (30 minutes)
      current.setMinutes(current.getMinutes() + 30);
    }

    return slots;
  } catch (error) {
    console.error('Error fetching available slots:', error);
    throw new Error('Failed to fetch available slots');
  }
}

/**
 * Get event details
 */
export async function getCalendarEvent(eventId: string) {
  try {
    const calendar = getCalendarClient();
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';

    const response = await calendar.events.get({
      calendarId,
      eventId,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching calendar event:', error);
    throw new Error('Failed to fetch calendar event');
  }
}

/**
 * Cancel a calendar event
 */
export async function cancelCalendarEvent(eventId: string): Promise<void> {
  try {
    const calendar = getCalendarClient();
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';

    await calendar.events.delete({
      calendarId,
      eventId,
      sendUpdates: 'all',
    });
  } catch (error) {
    console.error('Error canceling calendar event:', error);
    throw new Error('Failed to cancel calendar event');
  }
}
