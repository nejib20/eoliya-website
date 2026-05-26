/**
 * Email Service using Resend
 * @author Nejib Aloui <nejib20@gmail.com>
 */

import { Resend } from 'resend';

let resendClient: Resend | null = null;

/**
 * Get Resend client instance
 */
export function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error('Resend API key not configured');
    }

    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

/**
 * Email template for contact form
 */
interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

function generateContactEmailHTML(data: ContactEmailData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouveau message de contact</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #0066CC 0%, #0052A3 100%);
      color: #ffffff;
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }
    .content {
      padding: 30px;
    }
    .field {
      margin-bottom: 20px;
    }
    .field-label {
      font-weight: 600;
      color: #0066CC;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .field-value {
      font-size: 16px;
      color: #333;
      padding: 10px;
      background-color: #f8f9fa;
      border-radius: 4px;
      border-left: 3px solid #0066CC;
    }
    .message-content {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 4px;
      border-left: 3px solid #FF8C00;
      white-space: pre-wrap;
      font-size: 15px;
      line-height: 1.6;
    }
    .footer {
      background-color: #f8f9fa;
      padding: 20px 30px;
      text-align: center;
      border-top: 1px solid #e9ecef;
    }
    .footer p {
      margin: 5px 0;
      font-size: 13px;
      color: #6c757d;
    }
    .footer a {
      color: #0066CC;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📧 Nouveau message de contact</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Nom complet</div>
        <div class="field-value">${data.name}</div>
      </div>

      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value">
          <a href="mailto:${data.email}" style="color: #0066CC; text-decoration: none;">${data.email}</a>
        </div>
      </div>

      ${data.phone ? `
      <div class="field">
        <div class="field-label">Téléphone</div>
        <div class="field-value">
          <a href="tel:${data.phone}" style="color: #0066CC; text-decoration: none;">${data.phone}</a>
        </div>
      </div>
      ` : ''}

      ${data.company ? `
      <div class="field">
        <div class="field-label">Entreprise</div>
        <div class="field-value">${data.company}</div>
      </div>
      ` : ''}

      <div class="field">
        <div class="field-label">Sujet</div>
        <div class="field-value">${data.subject}</div>
      </div>

      <div class="field">
        <div class="field-label">Message</div>
        <div class="message-content">${data.message}</div>
      </div>
    </div>
    <div class="footer">
      <p><strong>EOLIYA INGENIERIE</strong></p>
      <p>131 Boulevard Pereire, 75017 Paris</p>
      <p>Tél: <a href="tel:0134223012">01 34 22 30 12</a> | Email: <a href="mailto:contact@eoliya.com">contact@eoliya.com</a></p>
      <p><a href="https://www.eoliya.com">www.eoliya.com</a></p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Generate plain text version
 */
function generateContactEmailText(data: ContactEmailData): string {
  return `
Nouveau message de contact - EOLIYA INGENIERIE

Nom: ${data.name}
Email: ${data.email}
${data.phone ? `Téléphone: ${data.phone}` : ''}
${data.company ? `Entreprise: ${data.company}` : ''}
Sujet: ${data.subject}

Message:
${data.message}

---
EOLIYA INGENIERIE
131 Boulevard Pereire, 75017 Paris
Tél: 01 34 22 30 12
Email: contact@eoliya.com
Web: www.eoliya.com
  `.trim();
}

/**
 * Send contact form email
 */
export async function sendContactEmail(data: ContactEmailData): Promise<string> {
  try {
    const resend = getResendClient();
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'contact@eoliya.com';
    const toEmail = process.env.CONTACT_EMAIL || 'contact@eoliya.com';

    const response = await resend.emails.send({
      from: `EOLIYA Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: data.email,
      subject: `[Contact Web] ${data.subject}`,
      html: generateContactEmailHTML(data),
      text: generateContactEmailText(data),
      tags: [
        { name: 'category', value: 'contact-form' },
        { name: 'source', value: 'website' },
      ],
    });

    if (!response.data?.id) {
      throw new Error('Failed to send email');
    }

    return response.data.id;
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw new Error('Failed to send email');
  }
}

/**
 * Send booking confirmation email
 */
interface BookingEmailData {
  name: string;
  email: string;
  date: string;
  time: string;
  duration: string;
  meetingLink?: string;
}

export async function sendBookingConfirmationEmail(data: BookingEmailData): Promise<string> {
  try {
    const resend = getResendClient();
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'contact@eoliya.com';

    const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #0066CC 0%, #0052A3 100%); color: white; padding: 30px; text-align: center; }
    .content { padding: 30px; background: white; }
    .button { display: inline-block; padding: 12px 30px; background: #FF8C00; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
    .details { background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ Rendez-vous confirmé</h1>
    </div>
    <div class="content">
      <p>Bonjour ${data.name},</p>
      <p>Votre rendez-vous avec EOLIYA INGENIERIE a bien été confirmé.</p>

      <div class="details">
        <strong>📅 Date:</strong> ${data.date}<br>
        <strong>🕐 Heure:</strong> ${data.time}<br>
        <strong>⏱️ Durée:</strong> ${data.duration}<br>
        <strong>📍 Lieu:</strong> 131 Boulevard Pereire, 75017 Paris
      </div>

      ${data.meetingLink ? `
      <p>Un lien de visioconférence a été créé pour ce rendez-vous:</p>
      <a href="${data.meetingLink}" class="button">Rejoindre la visioconférence</a>
      ` : ''}

      <p>Nous sommes impatients de vous rencontrer et de discuter de votre projet.</p>

      <p>Si vous avez besoin de modifier ce rendez-vous, contactez-nous:<br>
      📞 <a href="tel:0134223012">01 34 22 30 12</a><br>
      ✉️ <a href="mailto:contact@eoliya.com">contact@eoliya.com</a></p>

      <p>Cordialement,<br>
      <strong>L'équipe EOLIYA INGENIERIE</strong></p>
    </div>
  </div>
</body>
</html>
    `;

    const response = await resend.emails.send({
      from: `EOLIYA <${fromEmail}>`,
      to: [data.email],
      subject: `Confirmation de rendez-vous - ${data.date} à ${data.time}`,
      html,
    });

    if (!response.data?.id) {
      throw new Error('Failed to send booking confirmation');
    }

    return response.data.id;
  } catch (error) {
    console.error('Error sending booking confirmation:', error);
    throw new Error('Failed to send booking confirmation');
  }
}

/**
 * Send welcome email to new subscribers
 */
export async function sendWelcomeEmail(email: string, name: string): Promise<string> {
  try {
    const resend = getResendClient();
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'contact@eoliya.com';

    const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; background: white; }
    .header { background: linear-gradient(135deg, #0066CC 0%, #0052A3 100%); color: white; padding: 40px; text-align: center; }
    .content { padding: 30px; }
    .cta { text-align: center; margin: 30px 0; }
    .button { display: inline-block; padding: 15px 40px; background: #FF8C00; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Bienvenue chez EOLIYA INGENIERIE 🎉</h1>
    </div>
    <div class="content">
      <p>Bonjour ${name},</p>

      <p>Merci de votre intérêt pour EOLIYA INGENIERIE, votre partenaire en ingénierie TCE et solutions d'éclairage LED.</p>

      <p><strong>Nous sommes experts en:</strong></p>
      <ul>
        <li>Études techniques et conseil en ingénierie</li>
        <li>Relamping LED et économies d'énergie</li>
        <li>Luminaires professionnels</li>
        <li>Audits énergétiques</li>
      </ul>

      <div class="cta">
        <a href="https://www.eoliya.com/contact" class="button">Prendre rendez-vous</a>
      </div>

      <p>Besoin d'un conseil? Notre équipe est à votre disposition:</p>
      <p>📞 <a href="tel:0134223012">01 34 22 30 12</a><br>
      ✉️ <a href="mailto:contact@eoliya.com">contact@eoliya.com</a></p>

      <p>À très bientôt,<br>
      <strong>L'équipe EOLIYA INGENIERIE</strong></p>
    </div>
  </div>
</body>
</html>
    `;

    const response = await resend.emails.send({
      from: `EOLIYA <${fromEmail}>`,
      to: [email],
      subject: 'Bienvenue chez EOLIYA INGENIERIE',
      html,
    });

    if (!response.data?.id) {
      throw new Error('Failed to send welcome email');
    }

    return response.data.id;
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw new Error('Failed to send welcome email');
  }
}
