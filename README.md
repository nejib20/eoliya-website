# EOLIYA INGENIERIE - Site Web Professionnel

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![Strapi](https://img.shields.io/badge/Strapi-v5-blueviolet?logo=strapi)](https://strapi.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?logo=postgresql)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Site web corporate professionnel pour **EOLIYA INGENIERIE**, bureau d'études spécialisé en ingénierie TCE (Tous Corps d'État), relamping LED et luminaires sur mesure.

**Adresse:** 131 Boulevard Pereire, 75017 Paris
**Téléphone:** 01 34 22 30 12
**Email:** contact@eoliya.com
**Site:** www.eoliya.com

---

## Table des Matières

- [À Propos](#à-propos)
- [Services EOLIYA](#services-eoliya)
- [Stack Technique](#stack-technique)
- [Architecture](#architecture)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Déploiement](#déploiement)
- [Documentation](#documentation)
- [Tests](#tests)
- [Contribution](#contribution)
- [Auteur](#auteur)
- [Licence](#licence)

---

## À Propos

EOLIYA INGENIERIE est un bureau d'études technique spécialisé dans les domaines suivants:

- **Études techniques TCE:** conception, dimensionnement, plans d'exécution
- **Relamping LED:** remplacement de l'éclairage traditionnel par des solutions LED économiques
- **Luminaires professionnels:** sélection, installation, maintenance d'éclairages industriels
- **Efficacité énergétique:** audits, optimisation, réduction de consommation
- **Conseil en ingénierie:** AMO, pilotage de projets, coordination technique

Ce site web a été conçu pour présenter les services, projets et expertises d'EOLIYA INGENIERIE avec une architecture moderne, performante et optimisée pour le SEO.

---

## Services EOLIYA

### 1. Conseil et Pilotage TCE
Accompagnement de projets d'ingénierie du bâtiment: études techniques, coordination, suivi de chantier, assistance à maîtrise d'ouvrage.

### 2. Multi-services & Relamping LED
Dépannage électrique, remise aux normes (NF C 15-100), remplacement d'éclairage par des solutions LED économiques (économies jusqu'à 70%).

### 3. Luminaires sur Mesure
Conception et fabrication de luminaires professionnels personnalisés pour l'industrie et le tertiaire.

---

## Stack Technique

### Frontend
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5.3](https://www.typescriptlang.org/) (mode strict)
- **UI:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations:** [Framer Motion 11](https://www.framer.com/motion/)
- **Icônes:** [Lucide React](https://lucide.dev/)
- **Validation:** [Zod 3.22](https://zod.dev/)

### Backend
- **CMS:** [Strapi v5.46](https://strapi.io/)
- **Database:** [PostgreSQL 16](https://www.postgresql.org/)
- **ORM:** Strapi Query Engine

### Intégrations Tierces
- **Chatbot IA:** [OpenAI GPT-4](https://openai.com/) (assistant virtuel personnalisé)
- **Prise de RDV:** [Google Calendar API](https://developers.google.com/calendar) (OAuth 2.0)
- **Email:** [Resend](https://resend.com/) (emails transactionnels)
- **Analytics:** Google Analytics 4

### DevOps & Infrastructure
- **Conteneurisation:** Docker + Docker Compose
- **CI/CD:** GitHub Actions (tests, lint, build, deploy)
- **Hébergement Frontend:** [Vercel](https://vercel.com/)
- **Hébergement Backend:** [Railway](https://railway.app/)
- **Database Hosting:** Railway PostgreSQL

---

## Architecture

### Structure du Projet

```
eoliya-website/
├── frontend/                # Application Next.js 14
│   ├── src/
│   │   ├── app/            # Pages (App Router)
│   │   │   ├── api/        # API Routes (contact, chat, calendar)
│   │   │   ├── blog/       # Blog articles
│   │   │   ├── services/   # Pages services
│   │   │   └── ...         # Autres pages
│   │   ├── components/     # Composants React
│   │   │   ├── layout/     # Header, Footer
│   │   │   ├── sections/   # Hero, Services, Contact, etc.
│   │   │   ├── forms/      # ContactForm
│   │   │   ├── chat/       # ChatWidget (GPT-4)
│   │   │   ├── booking/    # CalendarBooking (Google)
│   │   │   └── ui/         # Button, Card, Input
│   │   ├── lib/            # Utilitaires
│   │   │   ├── openai.ts   # Client GPT-4
│   │   │   ├── google-calendar.ts
│   │   │   ├── email.ts    # Resend client
│   │   │   ├── strapi.ts   # Client API Strapi
│   │   │   └── ...
│   │   └── types/          # Types TypeScript
│   ├── public/             # Assets statiques
│   │   ├── llms.txt        # Optimisation LLM (AIO)
│   │   ├── robots.txt      # SEO
│   │   └── sitemap.xml     # SEO
│   └── package.json
│
├── backend/                 # API Strapi v5
│   ├── src/
│   │   ├── api/            # Content Types
│   │   │   ├── article/    # Articles de blog
│   │   │   ├── service/    # Services
│   │   │   ├── projet/     # Portfolio projets
│   │   │   ├── team-member/# Équipe
│   │   │   ├── testimonial/# Témoignages
│   │   │   ├── contact/    # Messages contact
│   │   │   └── setting/    # Configuration globale
│   │   ├── bootstrap.ts    # Bootstrap Strapi
│   │   └── index.ts        # Point d'entrée
│   ├── config/             # Configuration
│   │   ├── database.ts     # PostgreSQL
│   │   ├── server.ts
│   │   ├── admin.ts
│   │   └── middlewares.ts
│   └── package.json
│
├── docs/                    # Documentation complète
│   ├── specs/              # Spécifications techniques
│   │   ├── PROJECT_PLAN.md
│   │   ├── DESIGN_SYSTEM.md
│   │   ├── INTEGRATIONS.md
│   │   ├── DEVOPS.md
│   │   ├── SEO_STRATEGY.md
│   │   ├── AIO_STRATEGY.md
│   │   └── QA_REPORT.md
│   ├── content/            # Contenus éditoriaux
│   │   ├── pages/          # 7 pages
│   │   ├── blog/           # 15 articles
│   │   ├── legal/          # Mentions légales, RGPD
│   │   └── chatbot/        # Personnalité chatbot
│   └── design/             # Design system
│
├── .github/                 # GitHub Actions
│   └── workflows/
│       ├── ci.yml          # Tests, lint, build
│       ├── deploy-frontend.yml
│       └── deploy-backend.yml
│
├── scripts/                 # Scripts de déploiement
│   ├── setup-local.sh
│   └── deploy-production.sh
│
├── docker-compose.yml       # Orchestration Docker
├── Makefile                 # Commandes simplifiées
└── README.md
```

### Architecture Technique

```
┌─────────────────────────────────────────────────────────────┐
│                         UTILISATEUR                          │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            │ HTTPS
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    NEXT.JS 14 (Vercel)                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Pages (App Router)                                    │ │
│  │  - Accueil, Services, À Propos, Contact, Blog         │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  API Routes                                            │ │
│  │  - /api/contact   → Resend Email                      │ │
│  │  - /api/chat      → OpenAI GPT-4                      │ │
│  │  - /api/calendar  → Google Calendar API               │ │
│  └────────────────────────────────────────────────────────┘ │
└───────────────────┬───────────────────┬─────────────────────┘
                    │                   │
        ┌───────────┘                   └────────────┐
        │                                             │
        ▼                                             ▼
┌──────────────────┐                    ┌─────────────────────┐
│  STRAPI v5 API   │                    │  Services Externes  │
│   (Railway)      │                    │  - OpenAI           │
│                  │                    │  - Google Calendar  │
│  Content Types:  │                    │  - Resend Email     │
│  - Articles      │                    │  - Google Analytics │
│  - Services      │                    └─────────────────────┘
│  - Projets       │
│  - Équipe        │
│  - Témoignages   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   PostgreSQL     │
│   (Railway)      │
└──────────────────┘
```

---

## Fonctionnalités

### Frontend

#### Pages Publiques
- **Accueil** - Présentation entreprise, services, projets, témoignages
- **À Propos** - Histoire, valeurs, expertise
- **Services** - 3 services détaillés (Conseil TCE, Relamping, Luminaires)
- **Projets** - Portfolio projets (connexion Strapi)
- **Blog** - Articles techniques SEO-optimisés
- **Contact** - Formulaire + coordonnées

#### Intégrations Avancées

##### 1. Chatbot IA GPT-4
- Assistant virtuel personnalisé pour EOLIYA
- Répond aux questions techniques (éclairage, ingénierie, LED)
- Propose des prises de rendez-vous
- Streaming des réponses en temps réel
- Modération de contenu OpenAI

##### 2. Prise de Rendez-vous Google Calendar
- Connexion OAuth 2.0 sécurisée
- Affichage des créneaux disponibles
- Réservation en temps réel
- Confirmation par email automatique

##### 3. Formulaire de Contact Intelligent
- Validation Zod stricte
- Envoi email via Resend
- Rate limiting anti-spam (3 req/min)
- Sauvegarde dans Strapi

#### SEO & Performance
- Meta tags optimisés (Open Graph, Twitter Cards)
- Structured Data Schema.org (Organization, LocalBusiness, Service)
- Sitemap XML dynamique
- Robots.txt configuré
- LLMs.txt pour optimisation IA (AIO)
- Images optimisées (Next.js Image)
- Core Web Vitals optimisés

### Backend (Strapi)

#### 7 Content Types
1. **Article** - Articles de blog (titre, slug, contenu, auteur, date, image, SEO)
2. **Service** - Services proposés (nom, description, icône, tarif)
3. **Projet** - Portfolio projets (nom, client, année, images, description)
4. **Team Member** - Membres équipe (nom, rôle, photo, bio)
5. **Testimonial** - Témoignages clients (nom, entreprise, message, note)
6. **Contact** - Messages contact (nom, email, téléphone, message, traité)
7. **Setting** - Configuration globale (coordonnées, réseaux sociaux, horaires)

#### API REST
- Endpoints CRUD automatiques
- Authentification JWT
- Permissions configurables
- Filtres, tri, pagination
- Population de relations

---

## Installation

### Prérequis

- **Node.js:** >= 20.0.0 (recommandé: 20.x LTS)
- **npm:** >= 9.0.0
- **Docker:** (optionnel, pour développement local)
- **PostgreSQL:** >= 16 (si sans Docker)

### 1. Cloner le Projet

```bash
git clone https://github.com/nejib20/eoliya-website.git
cd eoliya-website
```

### 2. Installer les Dépendances

#### Méthode Rapide (Make)
```bash
make install
```

#### Méthode Manuelle
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 3. Configuration Environnement

#### Frontend
```bash
cd frontend
cp .env.example .env.local
```

Éditer `.env.local`:
```env
# Strapi API
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Google Calendar (OAuth 2.0)
GOOGLE_CALENDAR_CLIENT_ID=your_client_id
GOOGLE_CALENDAR_CLIENT_SECRET=your_client_secret
GOOGLE_CALENDAR_REDIRECT_URI=http://localhost:3000/api/calendar/callback
GOOGLE_CALENDAR_REFRESH_TOKEN=your_refresh_token

# OpenAI
OPENAI_API_KEY=sk-...

# Resend Email
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=contact@eoliya.com

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Obtenir le Refresh Token Google:**
```bash
npm run setup-google
```

#### Backend
```bash
cd backend
cp .env.example .env
```

**Générer les secrets Strapi:**
```bash
make secrets
```

Éditer `.env`:
```env
# Strapi Secrets (générer avec make secrets)
APP_KEYS=...
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...

# Database PostgreSQL
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi_password
DATABASE_SSL=false

# Server
HOST=0.0.0.0
PORT=1337
NODE_ENV=development
```

---

## Configuration

### Google Calendar API

1. Créer un projet sur [Google Cloud Console](https://console.cloud.google.com/)
2. Activer l'API Google Calendar
3. Créer des identifiants OAuth 2.0
4. Ajouter l'URI de redirection: `http://localhost:3000/api/calendar/callback`
5. Récupérer Client ID et Client Secret
6. Exécuter `npm run setup-google` pour obtenir le Refresh Token

### OpenAI API

1. Créer un compte sur [OpenAI Platform](https://platform.openai.com/)
2. Générer une clé API
3. Ajouter la clé dans `.env.local` (OPENAI_API_KEY)

### Resend Email

1. Créer un compte sur [Resend](https://resend.com/)
2. Ajouter et vérifier un domaine (ex: eoliya.com)
3. Générer une clé API
4. Configurer l'email expéditeur (ex: contact@eoliya.com)

### Google Analytics

1. Créer une propriété GA4
2. Récupérer le Measurement ID (G-XXXXXXXXXX)
3. Ajouter dans `.env.local` (NEXT_PUBLIC_GA_ID)

---

## Utilisation

### Développement Local

#### Méthode 1: Docker (Recommandé)

```bash
# Démarrer tous les services
make docker-up

# Ou:
docker-compose up -d
```

Accès:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:1337/api
- **Admin Strapi:** http://localhost:1337/admin
- **PgAdmin:** http://localhost:5050 (optionnel)

```bash
# Voir les logs
make docker-logs

# Arrêter les services
make docker-down
```

#### Méthode 2: Développement Manuel

Ouvrir **2 terminaux:**

**Terminal 1 - Backend:**
```bash
make dev-backend
# Ou: cd backend && npm run develop
```

**Terminal 2 - Frontend:**
```bash
make dev-frontend
# Ou: cd frontend && npm run dev
```

### Commandes Disponibles (Makefile)

```bash
make help              # Afficher toutes les commandes
make install           # Installer les dépendances
make setup             # Configuration initiale
make dev               # Instructions développement
make build             # Build frontend + backend
make lint              # Linter le code
make type-check        # Vérifier types TypeScript
make test              # Exécuter les tests
make docker-up         # Démarrer Docker
make docker-down       # Arrêter Docker
make docker-logs       # Voir logs Docker
make backup-db         # Backup PostgreSQL
make restore-db        # Restaurer backup
make deploy            # Déployer en production
make secrets           # Générer secrets Strapi
make health            # Vérifier santé services
make status            # Statut des services
```

### Premier Utilisateur Admin Strapi

Lors du premier lancement du backend:
1. Accéder à http://localhost:1337/admin
2. Créer le compte administrateur
3. Se connecter au panel admin

### Ajouter du Contenu

Le contenu textuel prêt à utiliser se trouve dans `/docs/content/`:

- **Pages:** `/docs/content/pages/` (7 pages)
- **Blog:** `/docs/content/blog/` (15 articles)
- **Légal:** `/docs/content/legal/` (mentions légales, confidentialité)

Copier-coller le contenu dans le panel admin Strapi.

---

## Déploiement

### Prérequis Déploiement

1. **Compte Vercel** (frontend)
2. **Compte Railway** (backend + PostgreSQL)
3. **Variables d'environnement** configurées
4. **Domaine personnalisé** (optionnel)

### Méthode Automatique

```bash
# Tout déployer en une commande
./scripts/deploy-production.sh
```

### Méthode Manuelle

#### 1. Déployer le Backend (Railway)

```bash
cd backend

# Installer Railway CLI
npm install -g railway

# Login Railway
railway login

# Initialiser projet
railway init

# Ajouter PostgreSQL
railway add postgresql

# Configurer variables d'environnement sur Railway
# (APP_KEYS, API_TOKEN_SALT, etc.)

# Déployer
railway up
```

#### 2. Déployer le Frontend (Vercel)

```bash
cd frontend

# Installer Vercel CLI
npm install -g vercel

# Login Vercel
vercel login

# Déployer
vercel --prod
```

**Configurer les variables d'environnement sur Vercel:**
- NEXT_PUBLIC_STRAPI_URL (URL Railway)
- NEXT_PUBLIC_SITE_URL (URL Vercel)
- OPENAI_API_KEY
- GOOGLE_CALENDAR_*
- RESEND_API_KEY
- NEXT_PUBLIC_GA_ID

### CI/CD GitHub Actions

Les workflows sont déjà configurés dans `.github/workflows/`:

- **ci.yml** - Tests et build automatiques sur chaque push
- **deploy-frontend.yml** - Déploiement Vercel sur tag `v*.*.*`
- **deploy-backend.yml** - Déploiement Railway sur tag `v*.*.*`

Pour déclencher un déploiement:
```bash
git tag v1.0.0
git push origin v1.0.0
```

### Post-Déploiement

1. **Vérifier les services:**
   ```bash
   curl https://votre-frontend.vercel.app
   curl https://votre-backend.railway.app/api
   ```

2. **Configurer le domaine personnalisé:**
   - Vercel: Ajouter domaine `www.eoliya.com`
   - Railway: Configurer domaine `api.eoliya.com` (optionnel)

3. **Peupler le contenu Strapi:**
   - Accéder au panel admin
   - Ajouter services, projets, équipe, témoignages
   - Publier les articles de blog

4. **SEO:**
   - Soumettre sitemap à Google Search Console
   - Vérifier meta tags et structured data
   - Configurer Google Analytics

---

## Documentation

### Documentation Complète

Toute la documentation est dans `/docs/`:

#### Spécifications Techniques
- **[PROJECT_PLAN.md](docs/specs/PROJECT_PLAN.md)** - Planning et phases du projet
- **[DESIGN_SYSTEM.md](docs/specs/DESIGN_SYSTEM.md)** - Charte graphique et composants UI
- **[INTEGRATIONS.md](docs/specs/INTEGRATIONS.md)** - Documentation intégrations (Google, OpenAI, Resend)
- **[DEVOPS.md](docs/specs/DEVOPS.md)** - Infrastructure et CI/CD
- **[SEO_STRATEGY.md](docs/specs/SEO_STRATEGY.md)** - Stratégie SEO complète
- **[AIO_STRATEGY.md](docs/specs/AIO_STRATEGY.md)** - Optimisation pour IA (LLM)
- **[QA_REPORT.md](docs/specs/QA_REPORT.md)** - Rapport de recette finale

#### Guides
- **[QUICKSTART.md](QUICKSTART.md)** - Guide de démarrage rapide
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Guide de contribution
- **[CHANGELOG.md](CHANGELOG.md)** - Historique des versions

#### Documentation API
- **[Backend API.md](backend/API.md)** - Documentation API Strapi
- **[Backend STRUCTURE.md](backend/STRUCTURE.md)** - Structure backend

---

## Tests

### Tests TypeScript

```bash
# Vérifier les types
make type-check
# Ou: cd frontend && npm run type-check
```

### Linting

```bash
# Linter tout le code
make lint

# Linter uniquement frontend
make lint-frontend

# Linter uniquement backend
make lint-backend
```

### Tests Unitaires

```bash
make test
# Ou:
cd frontend && npm run test
cd backend && npm run test
```

### Tests E2E (Playwright)

*À implémenter dans une version future*

---

## Contribution

### Workflow de Contribution

1. **Fork** le projet
2. **Créer** une branche: `git checkout -b feature/ma-fonctionnalite`
3. **Committer**: `git commit -m "Ajout de ma fonctionnalité"`
4. **Push**: `git push origin feature/ma-fonctionnalite`
5. **Créer** une Pull Request

### Standards de Code

- **TypeScript strict mode** activé
- **ESLint** configuration Next.js
- **Prettier** pour le formatage
- **Convention de nommage:** camelCase pour JS/TS, kebab-case pour fichiers
- **Commits:** Convention Conventional Commits (feat:, fix:, docs:, etc.)

### Documentation

Toute nouvelle fonctionnalité doit être documentée dans `/docs/`.

Pour plus de détails, voir [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Auteur

**Nejib Aloui**
Email: nejib20@gmail.com
Développeur Full-Stack

---

## Licence

Ce projet est sous licence **MIT**.

Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## Support

### Contact EOLIYA

- **Téléphone:** 01 34 22 30 12
- **Email:** contact@eoliya.com
- **Adresse:** 131 Boulevard Pereire, 75017 Paris

### Signaler un Bug

Ouvrir une [issue](https://github.com/nejib20/eoliya-website/issues) sur GitHub.

---

## Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [Strapi](https://strapi.io/) - Headless CMS
- [Vercel](https://vercel.com/) - Hébergement frontend
- [Railway](https://railway.app/) - Hébergement backend
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [OpenAI](https://openai.com/) - API GPT-4
- [Google](https://developers.google.com/) - Calendar API
- [Resend](https://resend.com/) - Service email

---

**Version:** 1.0.0
**Date de Création:** 2026-05-26
**Dernière Mise à Jour:** 2026-05-26

---

*Développé avec passion pour EOLIYA INGENIERIE*
