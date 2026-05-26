# 🚀 Guide de Démarrage Rapide - Intégrations EOLIYA

**Pour:** Développeurs et équipe technique
**Temps estimé:** 30 minutes
**Auteur:** Nejib Aloui <nejib20@gmail.com>

---

## ⚡ Installation Express (5 minutes)

```bash
# 1. Aller dans le dossier frontend
cd /Users/Nejib/eoliya-website/frontend

# 2. Installer les dépendances
npm install

# 3. Créer le fichier d'environnement
cp .env.example .env.local

# 4. Lancer le serveur
npm run dev
```

✅ Le site est accessible sur **http://localhost:3000**

---

## 🔑 Configuration Minimale (10 minutes)

### Option 1: Sans intégrations (pour tester l'interface)

Aucune configuration requise ! Les composants afficheront des erreurs mais l'interface sera fonctionnelle.

### Option 2: Avec Chatbot uniquement (le plus simple)

```env
# Dans .env.local
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
```

**Obtenir une clé:**
1. Aller sur [platform.openai.com](https://platform.openai.com/)
2. Sign up / Log in
3. API Keys > Create new secret key
4. Copier la clé dans `.env.local`

✅ **Coût:** ~$0.05-0.10 par conversation
✅ **Setup time:** 5 minutes

### Option 3: Avec Emails uniquement

```env
# Dans .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=contact@eoliya.com
CONTACT_EMAIL=contact@eoliya.com
```

**Obtenir une clé:**
1. Aller sur [resend.com](https://resend.com/)
2. Sign up
3. API Keys > Create API Key
4. Copier la clé dans `.env.local`

⚠️ **Note:** Les emails depuis `contact@eoliya.com` ne fonctionneront que si le domaine est vérifié dans Resend.

En développement, utiliser:
```env
RESEND_FROM_EMAIL=onboarding@resend.dev
```

✅ **Coût:** Gratuit (100 emails/jour)
✅ **Setup time:** 5 minutes

---

## 🧪 Tester les Intégrations (5 minutes)

```bash
# Lancer le serveur
npm run dev

# Ouvrir la page de démo
open http://localhost:3000/demo-integrations
```

Cette page permet de tester:
- ✅ Formulaire de contact
- ✅ Réservation de rendez-vous (si Google Calendar configuré)
- ✅ Chatbot (si OpenAI configuré)

---

## 🎨 Utiliser les Composants

### Formulaire de Contact

```tsx
import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Contactez-nous</h1>
      <ContactForm
        onSuccess={() => alert('Message envoyé!')}
        className="max-w-2xl mx-auto"
      />
    </div>
  );
}
```

### Chatbot Widget

```tsx
// Dans app/layout.tsx
import ChatWidget from '@/components/chat/ChatWidget';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <ChatWidget /> {/* Apparaît sur toutes les pages */}
      </body>
    </html>
  );
}
```

### Réservation de Rendez-vous

```tsx
import CalendarBooking from '@/components/booking/CalendarBooking';

export default function BookingPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Prendre rendez-vous</h1>
      <CalendarBooking
        onSuccess={() => console.log('RDV confirmé!')}
        className="max-w-3xl mx-auto"
      />
    </div>
  );
}
```

---

## 📊 État des Intégrations

| Intégration | Status | Difficulté | Temps Setup | Coût |
|-------------|--------|------------|-------------|------|
| **OpenAI Chatbot** | ✅ Prêt | ⭐ Facile | 5 min | ~50€/mois |
| **Resend Email** | ✅ Prêt | ⭐ Facile | 5 min | Gratuit |
| **Google Calendar** | ✅ Prêt | ⭐⭐⭐ Moyen | 20 min | Gratuit |

---

## 🔐 Google Calendar (Configuration Complète - 20 minutes)

### Étape 1: Google Cloud Console (10 min)

1. **Créer un projet**
   - Aller sur [console.cloud.google.com](https://console.cloud.google.com/)
   - Nouveau projet → "EOLIYA Website"

2. **Activer l'API**
   - APIs & Services → Library
   - Rechercher "Google Calendar API"
   - Activer

3. **Créer les credentials**
   - APIs & Services → Credentials
   - Create Credentials → OAuth 2.0 Client ID
   - Application type: Web application
   - Redirect URIs:
     - `http://localhost:3000/api/calendar/callback`
     - `https://eoliya.com/api/calendar/callback` (prod)

4. **Récupérer les credentials**
   - Copier le Client ID
   - Copier le Client Secret

### Étape 2: Obtenir le Refresh Token (10 min)

```bash
# 1. Ajouter les credentials dans .env.local
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxx

# 2. Lancer le script
npm run setup-google

# 3. Suivre les instructions
# - Ouvrir l'URL affichée
# - Se connecter avec le compte Google EOLIYA
# - Autoriser l'accès au calendrier
# - Copier le code d'autorisation
# - Coller dans le terminal

# 4. Le script affiche le refresh token
# Copier dans .env.local
GOOGLE_REFRESH_TOKEN=1//xxx
```

### Étape 3: Configuration finale

```env
# Dans .env.local
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxx
GOOGLE_REFRESH_TOKEN=1//xxx
GOOGLE_CALENDAR_ID=primary
GOOGLE_REDIRECT_URI=http://localhost:3000/api/calendar/callback
```

✅ **C'est tout !** Le système de réservation est opérationnel.

---

## 🚨 Problèmes Courants

### "Module not found" après npm install

```bash
# Solution: Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Chatbot ne répond pas

```bash
# Vérifier la clé OpenAI
echo $OPENAI_API_KEY  # Doit commencer par "sk-proj-" ou "sk-"

# Vérifier les logs du serveur
# Chercher des erreurs dans le terminal où tourne "npm run dev"
```

### Emails non reçus

```bash
# 1. Vérifier que la clé Resend est valide
# 2. En dev, utiliser RESEND_FROM_EMAIL=onboarding@resend.dev
# 3. Vérifier les logs du serveur
# 4. Vérifier le spam de votre boîte email
```

### Google Calendar "Invalid credentials"

```bash
# Régénérer le refresh token
npm run setup-google

# S'assurer que le redirect URI correspond exactement
# entre .env.local et Google Cloud Console
```

### Rate limit atteint

Le rate limit se réinitialise automatiquement:
- Contact: 3 req/heure
- Calendar: 5 req/heure (création), 20/min (lecture)
- Chat: 20 req/minute

Attendre la fin de la période ou modifier dans `.env.local`:
```env
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW=60000
```

---

## 📚 Documentation Complète

Pour aller plus loin:

- **Guide détaillé:** [/docs/specs/INTEGRATIONS.md](docs/specs/INTEGRATIONS.md)
- **README technique:** [/frontend/README.INTEGRATIONS.md](frontend/README.INTEGRATIONS.md)
- **Résumé:** [/INTEGRATIONS_SUMMARY.md](INTEGRATIONS_SUMMARY.md)

---

## ✅ Checklist Rapide

### Avant de commencer
- [ ] Node.js 18+ installé
- [ ] npm 9+ installé
- [ ] Git configuré
- [ ] Éditeur de code prêt

### Configuration Minimale
- [ ] `npm install` terminé sans erreur
- [ ] `.env.local` créé depuis `.env.example`
- [ ] Serveur démarre avec `npm run dev`
- [ ] Page d'accueil accessible

### Configuration OpenAI (optionnel)
- [ ] Compte OpenAI créé
- [ ] API Key générée
- [ ] `OPENAI_API_KEY` dans `.env.local`
- [ ] Chatbot répond aux messages

### Configuration Resend (optionnel)
- [ ] Compte Resend créé
- [ ] API Key générée
- [ ] `RESEND_API_KEY` dans `.env.local`
- [ ] Email de test reçu

### Configuration Google Calendar (optionnel)
- [ ] Projet Google Cloud créé
- [ ] Calendar API activée
- [ ] OAuth credentials créés
- [ ] Refresh token obtenu
- [ ] Créneaux disponibles affichés

### Tests
- [ ] Page `/demo-integrations` affiche tout
- [ ] Formulaire de contact fonctionne
- [ ] Chatbot répond correctement
- [ ] Réservation crée un événement

---

## 🎯 Prochaines Étapes

1. **Personnaliser** - Adapter les couleurs, textes, system prompt
2. **Intégrer** - Ajouter les composants dans vos pages
3. **Tester** - Valider en conditions réelles
4. **Monitorer** - Configurer Vercel Analytics / Sentry
5. **Déployer** - Configurer les env vars en production

---

## 💬 Besoin d'aide ?

**Nejib Aloui**
- Email: nejib20@gmail.com
- Téléphone: 01 34 22 30 12

**EOLIYA INGENIERIE**
- Site: www.eoliya.com
- Adresse: 131 Boulevard Pereire, 75017 Paris

---

**🎉 Bon développement !**

*Développé avec Next.js 14, TypeScript, Tailwind CSS et ❤️*
