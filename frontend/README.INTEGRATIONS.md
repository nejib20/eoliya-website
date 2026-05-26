# Intégrations API - EOLIYA INGENIERIE

**Auteur:** Nejib Aloui <nejib20@gmail.com>
**Version:** 1.0.0
**Dernière mise à jour:** 2026-05-26

---

## 🚀 Démarrage rapide

### 1. Installation des dépendances

```bash
npm install
```

Les dépendances suivantes seront installées:
- `googleapis` - Google Calendar API
- `openai` - GPT-4 Chatbot
- `resend` - Service d'emails
- `zod` - Validation de schémas
- `ai` - Helpers IA

### 2. Configuration des variables d'environnement

```bash
# Copier le template
cp .env.example .env.local

# Éditer le fichier .env.local avec vos clés API
nano .env.local
```

### 3. Configuration Google Calendar (optionnel)

```bash
# Lancer le script de configuration
npm run setup-google

# Suivre les instructions pour obtenir le refresh token
```

---

## 📦 Intégrations disponibles

### ✅ 1. Google Calendar API

**Fonctionnalité:** Système de réservation de rendez-vous en ligne

**Fichiers:**
- `/src/lib/google-calendar.ts` - Client API
- `/src/app/api/calendar/route.ts` - Créer événement
- `/src/app/api/calendar/slots/route.ts` - Récupérer créneaux
- `/src/components/booking/CalendarBooking.tsx` - Interface utilisateur

**Utilisation:**

```tsx
import CalendarBooking from '@/components/booking/CalendarBooking';

<CalendarBooking
  onSuccess={() => console.log('RDV confirmé!')}
  className="max-w-2xl"
/>
```

**Configuration requise:**
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `GOOGLE_CALENDAR_ID`

### ✅ 2. Chatbot GPT-4

**Fonctionnalité:** Assistant virtuel intelligent spécialisé en ingénierie

**Fichiers:**
- `/src/lib/openai.ts` - Client OpenAI
- `/src/app/api/chat/route.ts` - API streaming
- `/src/components/chat/ChatWidget.tsx` - Widget flottant
- `/src/components/chat/ChatMessage.tsx` - Composant message

**Utilisation:**

```tsx
import ChatWidget from '@/components/chat/ChatWidget';

// Dans le layout
<ChatWidget />
```

**Configuration requise:**
- `OPENAI_API_KEY`

**Personnalisation:**
Le system prompt peut être modifié dans `/src/lib/openai.ts`

### ✅ 3. Formulaire de contact (Resend)

**Fonctionnalité:** Envoi d'emails transactionnels

**Fichiers:**
- `/src/lib/email.ts` - Service email
- `/src/app/api/contact/route.ts` - API endpoint
- `/src/components/forms/ContactForm.tsx` - Formulaire

**Utilisation:**

```tsx
import ContactForm from '@/components/forms/ContactForm';

<ContactForm
  onSuccess={() => alert('Message envoyé!')}
  className="max-w-2xl"
/>
```

**Configuration requise:**
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `CONTACT_EMAIL`

---

## 🔐 Sécurité

### Rate Limiting

Chaque endpoint est protégé par rate limiting:

| Endpoint | Limite |
|----------|--------|
| `/api/contact` | 3 req/heure |
| `/api/calendar` | 5 req/heure |
| `/api/calendar/slots` | 20 req/minute |
| `/api/chat` | 20 req/minute |

### Protection anti-spam

Tous les formulaires incluent:
- ✅ Honeypot invisible
- ✅ Validation Zod côté serveur
- ✅ Rate limiting par IP
- ✅ Content moderation (chat)

### Variables sensibles

⚠️ **JAMAIS** commit ces fichiers:
- `.env.local`
- `.env.production`
- Tout fichier contenant des clés API

✅ Toujours commit:
- `.env.example` (template sans valeurs réelles)

---

## 🧪 Tests

### Tester le formulaire de contact

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Message de test",
    "acceptPrivacy": true
  }'
```

### Tester le chatbot

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "content": "Bonjour"}
    ]
  }'
```

### Tester les créneaux disponibles

```bash
curl "http://localhost:3000/api/calendar/slots?startDate=2026-06-15T00:00:00Z&endDate=2026-06-15T23:59:59Z&duration=60"
```

---

## 📊 Monitoring

### Logs recommandés

En production, monitorer:
- Nombre de requêtes par endpoint
- Taux d'erreur
- Latence moyenne
- Coût API (OpenAI, Google)

**Services recommandés:**
- [Vercel Analytics](https://vercel.com/analytics) - Gratuit
- [Sentry](https://sentry.io/) - Error tracking
- [LogRocket](https://logrocket.com/) - Session replay

### Coûts estimés

**OpenAI GPT-4 Turbo:**
- Input: $10 / 1M tokens
- Output: $30 / 1M tokens
- Estimation: ~$0.05-0.10 par conversation
- **Budget mensuel suggéré:** 50-100€

**Google Calendar API:**
- Gratuit jusqu'à 1M requêtes/jour

**Resend:**
- Free tier: 100 emails/jour
- Paid: 50,000 emails/mois = 20$/mois

---

## 🐛 Dépannage

### Erreur: "Google Calendar not found"

```bash
# Vérifier le Calendar ID
echo $GOOGLE_CALENDAR_ID

# Lister vos calendriers
npm run setup-google
```

### Erreur: "OpenAI rate limit"

```bash
# Vérifier votre tier OpenAI
# https://platform.openai.com/account/limits

# Upgrade si nécessaire
```

### Erreur: "Resend domain not verified"

```bash
# Vérifier les DNS dans Resend Dashboard
# https://resend.com/domains

# Attendre propagation DNS (jusqu'à 48h)
```

### Erreur: "Rate limit exceeded"

Le rate limit se réinitialise automatiquement après la fenêtre configurée.

---

## 📚 Documentation complète

Pour la documentation détaillée:
- [Guide complet des intégrations](/docs/specs/INTEGRATIONS.md)
- [Scripts utilitaires](/scripts/README.md)

---

## 🤝 Support

**Email:** nejib20@gmail.com
**Téléphone:** 01 34 22 30 12
**Site:** www.eoliya.com

---

**© 2026 EOLIYA INGENIERIE - Tous droits réservés**
