# Scripts Utilitaires - EOLIYA INGENIERIE

**Auteur:** Nejib Aloui <nejib20@gmail.com>

Scripts d'aide pour la configuration des intégrations.

---

## 📁 Scripts disponibles

### `get-google-refresh-token.js`

Génère un refresh token pour l'API Google Calendar.

**Prérequis:**
1. Avoir créé un projet sur [Google Cloud Console](https://console.cloud.google.com/)
2. Avoir activé l'API Google Calendar
3. Avoir créé des credentials OAuth 2.0
4. Avoir configuré `GOOGLE_CLIENT_ID` et `GOOGLE_CLIENT_SECRET` dans `.env.local`

**Utilisation:**

```bash
# Installation des dépendances (si nécessaire)
cd frontend
npm install

# Exécution du script
node scripts/get-google-refresh-token.js
```

**Étapes:**
1. Le script affiche une URL d'autorisation
2. Cliquer sur l'URL et se connecter avec le compte Google
3. Autoriser l'accès au calendrier
4. Copier le code d'autorisation depuis l'URL de redirection
5. Coller le code dans le terminal
6. Le script affiche le refresh token à ajouter dans `.env.local`

**Variables générées:**
```env
GOOGLE_REFRESH_TOKEN=1//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 🔧 Dépendances

Ces scripts nécessitent:
- Node.js >= 18.0.0
- googleapis (installé via npm)
- dotenv (installé via npm)

---

## 🔐 Sécurité

⚠️ **IMPORTANT:**
- Ne jamais commit les tokens générés dans Git
- Garder le fichier `.env.local` privé
- Renouveler les tokens tous les 6 mois
- Ne jamais partager les credentials

---

## 🐛 Troubleshooting

### Erreur: "Client ID not set"

```bash
# Vérifier que .env.local existe et contient:
GOOGLE_CLIENT_ID=votre_client_id
GOOGLE_CLIENT_SECRET=votre_client_secret
```

### Erreur: "Invalid redirect URI"

Le redirect URI doit correspondre exactement à celui configuré dans Google Cloud Console.

```bash
# Dans Google Cloud Console > Credentials > OAuth 2.0 Client IDs
# Ajouter:
http://localhost:3000/api/calendar/callback

# Puis dans .env.local:
GOOGLE_REDIRECT_URI=http://localhost:3000/api/calendar/callback
```

### Erreur: "Invalid authorization code"

Le code d'autorisation expire après quelques minutes. Recommencer le processus depuis le début.

---

## 📚 Documentation

Pour plus d'informations, consulter:
- [Documentation complète des intégrations](/docs/specs/INTEGRATIONS.md)
- [Google Calendar API Documentation](https://developers.google.com/calendar)

---

**© 2026 EOLIYA INGENIERIE**
