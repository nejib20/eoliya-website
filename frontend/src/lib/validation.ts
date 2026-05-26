/**
 * Form Validation Schemas
 * @author Nejib Aloui <nejib20@gmail.com>
 */

import { z } from 'zod';

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom contient des caractères invalides'),

  email: z
    .string()
    .email('Adresse email invalide')
    .min(5, 'Email trop court')
    .max(100, 'Email trop long')
    .toLowerCase(),

  phone: z
    .string()
    .regex(/^(\+33|0)[1-9](\d{2}){4}$/, 'Numéro de téléphone invalide (format: 0123456789 ou +33123456789)')
    .optional()
    .or(z.literal('')),

  company: z
    .string()
    .max(100, 'Le nom de l\'entreprise ne peut pas dépasser 100 caractères')
    .optional()
    .or(z.literal('')),

  subject: z
    .string()
    .min(5, 'Le sujet doit contenir au moins 5 caractères')
    .max(200, 'Le sujet ne peut pas dépasser 200 caractères'),

  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(2000, 'Le message ne peut pas dépasser 2000 caractères'),

  // Honeypot field for spam protection
  website: z.string().max(0, 'Spam detected').optional(),

  // Privacy policy acceptance
  acceptPrivacy: z
    .boolean()
    .refine((val) => val === true, 'Vous devez accepter la politique de confidentialité'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Booking form validation schema
 */
export const bookingFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),

  email: z
    .string()
    .email('Adresse email invalide')
    .min(5, 'Email trop court')
    .max(100, 'Email trop long')
    .toLowerCase(),

  phone: z
    .string()
    .regex(/^(\+33|0)[1-9](\d{2}){4}$/, 'Numéro de téléphone invalide'),

  company: z
    .string()
    .max(100, 'Le nom de l\'entreprise ne peut pas dépasser 100 caractères')
    .optional(),

  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Format de date invalide (YYYY-MM-DD)')
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'La date doit être dans le futur'),

  time: z
    .string()
    .regex(/^\d{2}:\d{2}$/, 'Format d\'heure invalide (HH:MM)')
    .refine((time) => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours >= 9 && hours < 18 && minutes % 30 === 0;
    }, 'L\'heure doit être entre 9h et 18h, par tranches de 30 minutes'),

  duration: z
    .enum(['30', '60', '90', '120'], {
      errorMap: () => ({ message: 'Durée invalide' }),
    }),

  meetingType: z.enum(['office', 'video', 'phone'], {
    errorMap: () => ({ message: 'Type de rendez-vous invalide' }),
  }),

  notes: z
    .string()
    .max(500, 'Les notes ne peuvent pas dépasser 500 caractères')
    .optional(),

  // Honeypot
  website: z.string().max(0, 'Spam detected').optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

/**
 * Newsletter subscription validation
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Adresse email invalide')
    .min(5, 'Email trop court')
    .max(100, 'Email trop long')
    .toLowerCase(),

  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères')
    .optional(),

  acceptMarketing: z
    .boolean()
    .refine((val) => val === true, 'Vous devez accepter de recevoir nos communications'),

  // Honeypot
  website: z.string().max(0, 'Spam detected').optional(),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

/**
 * Chat message validation
 */
export const chatMessageSchema = z.object({
  message: z
    .string()
    .min(1, 'Le message ne peut pas être vide')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères')
    .trim(),

  conversationId: z.string().uuid('ID de conversation invalide').optional(),
});

export type ChatMessageData = z.infer<typeof chatMessageSchema>;

/**
 * Safe parse with custom error formatting
 */
export function validateData<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: Record<string, string> } {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Record<string, string> = {};
  result.error.errors.forEach((error) => {
    const path = error.path.join('.');
    errors[path] = error.message;
  });

  return { success: false, errors };
}
