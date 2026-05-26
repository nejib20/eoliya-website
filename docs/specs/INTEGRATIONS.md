# Guide des Intégrations - EOLIYA INGENIERIE

Documentation complète des intégrations API pour le site web EOLIYA.

**Auteur:** Nejib Aloui <nejib20@gmail.com>
**Date:** 2026-05-26
**Version:** 1.0.0

---

## Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Google Calendar API](#google-calendar-api)
3. [OpenAI GPT-4 Chatbot](#openai-gpt-4-chatbot)
4. [Resend Email Service](#resend-email-service)
5. [Variables d'environnement](#variables-denvironnement)
6. [Sécurité et Rate Limiting](#sécurité-et-rate-limiting)
7. [Troubleshooting](#troubleshooting)

---

## Vue d'ensemble

Le site EOLIYA intègre trois services externes principaux:

- **Google Calendar** - Réservation de rendez-vous
- **OpenAI GPT-4** - Assistant virtuel intelligent
- **Resend** - Envoi d'emails transactionnels

Toutes les intégrations incluent:
- ✅ Validation des données avec Zod
- ✅ Rate limiting pour prévenir les abus
- ✅ Protection anti-spam (honeypot)
- ✅ Gestion d'erreurs robuste
- ✅ TypeScript strict

---

## Google Calendar API

### 📋 Configuration

#### 1. Créer un projet Google Cloud

1. Aller sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créer un nouveau projet: "EOLIYA Website"
3. Activer l'API Google Calendar

#### 2. Créer les credentials OAuth 2.0

```bash
# Dans Google Cloud Console
APIs & Services > Credentials > Create Credentials > OAuth 2.0 Client ID

Type: Web application
Nom: EOLIYA Calendar Integration
Redirect URIs:
  - http://localhost:3000/api/calendar/callback (dev)
  - https://eoliya.com/api/calendar/callback (prod)
```

#### 3. Obtenir le Refresh Token

```bash
# Installer la CLI Google
npm install -g googleapis

# Générer le refresh token
node scripts/get-google-refresh-token.js
```

**Script:** `/scripts/get-google-refresh-token.js`

```javascript
const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'http://localhost:3000/api/calendar/callback'
);

const scopes = ['https://www.googleapis.com/auth/calendar'];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});

console.log('Authorize this app by visiting:', url);
// Après autorisation, récupérer le code et échanger contre un refresh token
```

### 🔧 Variables d'environnement

```env
# Google Calendar
GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_CALENDAR_ID=primary
GOOGLE_REFRESH_TOKEN=your_refresh_token
GOOGLE_REDIRECT_URI=https://eoliya.com/api/calendar/callback
```

### 📦 API Endpoints

#### POST `/api/calendar`

Créer un événement dans le calendrier.

**Request Body:**
```json
{
  "name": "Jean Dupont",
  "email": "jean@exemple.com",
  "phone": "0123456789",
  "company": "Acme Corp",
  "date": "2026-06-15",
  "time": "14:00",
  "duration": "60",
  "meetingType": "office",
  "notes": "Discussion sur projet LED"
}
```

**Response (201):**
```json
{
  "success": true,
  "eventId": "abc123xyz",
  "message": "Rendez-vous créé avec succès"
}
```

**Rate Limit:** 5 requêtes/heure par IP

#### GET `/api/calendar/slots`

Récupérer les créneaux disponibles.

**Query Params:**
- `startDate` (required): ISO 8601 date
- `endDate` (required): ISO 8601 date
- `duration` (optional): 30, 60, 90 ou 120 minutes (défaut: 60)

**Example:**
```bash
GET /api/calendar/slots?startDate=2026-06-15T00:00:00Z&endDate=2026-06-15T23:59:59Z&duration=60
```

**Response (200):**
```json
{
  "success": true,
  "slots": [
    {
      "start": "2026-06-15T09:00:00Z",
      "end": "2026-06-15T10:00:00Z",
      "available": true
    },
    {
      "start": "2026-06-15T10:30:00Z",
      "end": "2026-06-15T11:30:00Z",
      "available": true
    }
  ],
  "count": 12
}
```

**Rate Limit:** 20 requêtes/minute par IP

### 🎨 Composant React

```tsx
import CalendarBooking from '@/components/booking/CalendarBooking';

export default function BookingPage() {
  return (
    <CalendarBooking
      onSuccess={() => console.log('Rendez-vous réservé!')}
      className="max-w-2xl mx-auto"
    />
  );
}
```

### 🔍 Fonctionnement

1. L'utilisateur sélectionne une date et une durée
2. Le composant récupère les créneaux disponibles via `/api/calendar/slots`
3. L'utilisateur choisit un créneau et remplit ses informations
4. Validation côté client et serveur
5. Création de l'événement Google Calendar
6. Envoi d'un email de confirmation
7. L'utilisateur et EOLIYA reçoivent une invitation Google Calendar

---

## OpenAI GPT-4 Chatbot

### 📋 Configuration

#### 1. Créer une clé API OpenAI

1. Aller sur [platform.openai.com](https://platform.openai.com/)
2. Account > API Keys > Create new secret key
3. Copier la clé (elle ne sera affichée qu'une fois!)

#### 2. Configurer les limites d'utilisation

```bash
# Dans OpenAI Dashboard
Settings > Usage Limits

Recommended:
- Hard limit: 100$ / mois
- Email alert: 80$ / mois
```

### 🔧 Variables d'environnement

```env
# OpenAI
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
```

### 📦 API Endpoint

#### POST `/api/chat`

Stream une conversation avec GPT-4.

**Request Body:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "Quels sont les avantages du relamping LED?"
    }
  ]
}
```

**Response (Stream):**
```
data: {"content":"Les"}
data: {"content":" principaux"}
data: {"content":" avantages"}
...
data: [DONE]
```

**Rate Limit:** 20 messages/minute par IP

### 🎨 Composant React

```tsx
import ChatWidget from '@/components/chat/ChatWidget';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <ChatWidget />
    </>
  );
}
```

Le widget apparaît en bas à droite de toutes les pages.

### 🤖 System Prompt

L'assistant est configuré pour être expert en:
- Ingénierie TCE (Tous Corps d'État)
- Relamping LED et éclairage
- Efficacité énergétique
- Normes (RT2012, RE2020, EN 12464)

**Personnalisation du prompt:** `/frontend/src/lib/openai.ts`

### 🔍 Fonctionnalités

- **Streaming en temps réel** - Réponse progressive pour meilleure UX
- **Modération de contenu** - Filtrage automatique via OpenAI Moderation API
- **Historique de conversation** - Contexte maintenu dans le client
- **Protection anti-spam** - Rate limiting par IP

---

## Resend Email Service

### 📋 Configuration

#### 1. Créer un compte Resend

1. Aller sur [resend.com](https://resend.com/)
2. Sign up et vérifier l'email
3. Settings > API Keys > Create API Key

#### 2. Configurer le domaine

```bash
# Dans Resend Dashboard
Domains > Add Domain

Domain: eoliya.com

# Ajouter les enregistrements DNS:
TXT  @  v=spf1 include:resend.com ~all
CNAME resend._domainkey  resend._domainkey.resend.com
```

Attendre la vérification DNS (~30 minutes).

### 🔧 Variables d'environnement

```env
# Resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=contact@eoliya.com
CONTACT_EMAIL=contact@eoliya.com
```

### 📦 API Endpoint

#### POST `/api/contact`

Envoyer un message depuis le formulaire de contact.

**Request Body:**
```json
{
  "name": "Jean Dupont",
  "email": "jean@exemple.com",
  "phone": "0123456789",
  "company": "Acme Corp",
  "subject": "Demande de devis",
  "message": "Je souhaite un devis pour relamping LED...",
  "acceptPrivacy": true,
  "website": ""
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Message envoyé avec succès",
  "emailId": "abc123"
}
```

**Rate Limit:** 3 soumissions/heure par IP

### 🎨 Composant React

```tsx
import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <ContactForm
      onSuccess={() => alert('Message envoyé!')}
      className="max-w-2xl mx-auto"
    />
  );
}
```

### 📧 Types d'emails

Le service gère 3 types d'emails:

1. **Contact Form** - Depuis formulaire de contact
2. **Booking Confirmation** - Confirmation de rendez-vous
3. **Welcome Email** - Email de bienvenue (newsletter)

**Templates:** `/frontend/src/lib/email.ts`

### 🎨 Personnalisation des templates

Les emails utilisent:
- Design responsive
- Couleurs de la charte EOLIYA (#0066CC, #FF8C00)
- Logo et informations entreprise
- CTA clairs

---

## Variables d'environnement

### 📄 Fichier `.env.local`

Créer à la racine du projet frontend:

```env
# ========================================
# EOLIYA INGENIERIE - Environment Variables
# ========================================

# Google Calendar API
GOOGLE_CLIENT_ID=123456789-xxxxxxxxxxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-xxxxxxxxxxxxxxxxxxxxx
GOOGLE_CALENDAR_ID=primary
GOOGLE_REFRESH_TOKEN=1//xxxxxxxxxxxxxxxxxxxxx
GOOGLE_REDIRECT_URI=https://eoliya.com/api/calendar/callback

# OpenAI API
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Resend Email Service
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=contact@eoliya.com
CONTACT_EMAIL=contact@eoliya.com

# Rate Limiting
RATE_LIMIT_MAX=10
RATE_LIMIT_WINDOW=60000

# App Config
NEXT_PUBLIC_SITE_URL=https://www.eoliya.com
NODE_ENV=production
```

### 🔒 Sécurité

- ⚠️ **JAMAIS** commit le fichier `.env.local` dans Git
- ✅ Ajouter `.env.local` dans `.gitignore`
- ✅ Utiliser un gestionnaire de secrets en production (Vercel Secrets, AWS Secrets Manager)
- ✅ Rotation régulière des clés API (tous les 6 mois)

### 📦 Production (Vercel)

```bash
# Ajouter les variables dans Vercel Dashboard
vercel env add GOOGLE_CLIENT_ID
vercel env add GOOGLE_CLIENT_SECRET
# ... etc pour toutes les variables
```

---

## Sécurité et Rate Limiting

### 🛡️ Mesures de sécurité

#### 1. Rate Limiting

Implémenté via `/frontend/src/lib/rate-limit.ts`

**Limites par endpoint:**
- `/api/contact` - 3 requêtes/heure
- `/api/calendar` - 5 requêtes/heure
- `/api/calendar/slots` - 20 requêtes/minute
- `/api/chat` - 20 messages/minute

**Headers retournés:**
```
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 7
X-RateLimit-Reset: 1717689600000
```

#### 2. Honeypot Anti-Spam

Tous les formulaires incluent un champ invisible `website`:

```tsx
<input
  type="text"
  name="website"
  className="hidden"
  tabIndex={-1}
  autoComplete="off"
/>
```

Si ce champ est rempli, la requête est silencieusement rejetée (fake success).

#### 3. Validation stricte

Validation en 2 étapes:
1. **Client-side** - Feedback immédiat
2. **Server-side** - Sécurité réelle avec Zod

**Schémas:** `/frontend/src/lib/validation.ts`

#### 4. Content Moderation

Les messages du chatbot sont analysés par OpenAI Moderation API:

```typescript
const isFlagged = await moderateContent(userMessage);
if (isFlagged) {
  return error('Contenu inapproprié détecté');
}
```

### 🔐 Headers de sécurité

Configurer dans `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};
```

---

## Troubleshooting

### 🔍 Google Calendar

#### Erreur: "Calendar not found"

```bash
# Vérifier le Calendar ID
GOOGLE_CALENDAR_ID=primary  # ou votre calendar ID spécifique

# Lister vos calendriers
const calendar = google.calendar({ version: 'v3', auth });
const list = await calendar.calendarList.list();
console.log(list.data.items);
```

#### Erreur: "Invalid credentials"

```bash
# Régénérer le refresh token
node scripts/get-google-refresh-token.js

# Vérifier les scopes
SCOPES = ['https://www.googleapis.com/auth/calendar']
```

#### Erreur: "Quota exceeded"

- Google Calendar API: 1,000,000 requêtes/jour
- FreeBusy queries: 1,000 requêtes/100 secondes

**Solution:** Implémenter un cache pour les créneaux disponibles.

### 🔍 OpenAI

#### Erreur: "Rate limit reached"

```bash
# Tier limits OpenAI (Free tier)
- 3 RPM (requests per minute)
- 200 RPD (requests per day)

# Upgrade vers Tier 1:
- 500 RPM
- 10,000 RPD
```

**Solution:** Implémenter une file d'attente côté serveur.

#### Erreur: "Invalid API key"

```bash
# Vérifier la clé
echo $OPENAI_API_KEY

# La clé doit commencer par "sk-proj-" (project key)
# ou "sk-" (legacy key)
```

#### Coûts GPT-4

```
GPT-4 Turbo (gpt-4-turbo-preview):
- Input: $10 / 1M tokens
- Output: $30 / 1M tokens

Estimation par conversation (20 messages):
~$0.05 - $0.10

Budget mensuel recommandé: 50-100€
```

### 🔍 Resend

#### Erreur: "Domain not verified"

```bash
# Vérifier les DNS
dig TXT eoliya.com
dig CNAME resend._domainkey.eoliya.com

# Attendre la propagation DNS (jusqu'à 48h)
```

#### Erreur: "Rate limit exceeded"

```
Resend Limits (Free tier):
- 100 emails/jour
- 3,000 emails/mois

Paid plan:
- 50,000 emails/mois: 20$/mois
```

#### Email en spam

**Checklist:**
- ✅ SPF record configuré
- ✅ DKIM record configuré
- ✅ DMARC record configuré (optionnel mais recommandé)
- ✅ Domain verified dans Resend
- ✅ Contenu pas trop "spammy" (éviter CAPS, trop d'emojis)

```bash
# Ajouter DMARC
TXT  _dmarc.eoliya.com  v=DMARC1; p=none; rua=mailto:dmarc@eoliya.com
```

### 🔍 Rate Limiting

#### Tester le rate limit

```bash
# Envoyer plusieurs requêtes rapidement
for i in {1..15}; do
  curl -X POST http://localhost:3000/api/chat \
    -H "Content-Type: application/json" \
    -d '{"messages":[{"role":"user","content":"Test"}]}' \
    -w "\nStatus: %{http_code}\n"
done

# Observer les headers
X-RateLimit-Remaining: 0
Status: 429
```

#### Réinitialiser le rate limit

Le rate limit se réinitialise automatiquement après la fenêtre de temps.

Pour forcer une réinitialisation en dev:

```typescript
import { resetRateLimit } from '@/lib/rate-limit';
resetRateLimit('chat:127.0.0.1');
```

### 🔍 Logs et Monitoring

#### Activer les logs détaillés

```env
# .env.local
NODE_ENV=development
DEBUG=*
```

#### Logs recommandés

```typescript
// Dans chaque API route
console.log('[API] Request:', {
  method: request.method,
  url: request.url,
  ip: getClientIdentifier(request),
  timestamp: new Date().toISOString(),
});

console.log('[API] Response:', {
  status: response.status,
  duration: Date.now() - startTime,
});
```

#### Monitoring en production

**Recommandations:**
- [Vercel Analytics](https://vercel.com/analytics) - Gratuit
- [Sentry](https://sentry.io/) - Error tracking
- [LogRocket](https://logrocket.com/) - Session replay
- [Grafana Cloud](https://grafana.com/) - Logs et metrics

---

## 📚 Ressources

### Documentation officielle

- [Google Calendar API](https://developers.google.com/calendar)
- [OpenAI API](https://platform.openai.com/docs)
- [Resend](https://resend.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Zod Validation](https://zod.dev/)

### Support EOLIYA

- **Email:** nejib20@gmail.com
- **Téléphone:** 01 34 22 30 12
- **Documentation:** `/docs/specs/`

---

**© 2026 EOLIYA INGENIERIE - Tous droits réservés**
