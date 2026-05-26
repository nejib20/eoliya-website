# Changelog - EOLIYA Ingénierie

Toutes les modifications notables du projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

---

## [Non publié]

### À venir
- Intégration OpenAI GPT-4 pour le chatbot
- Système de prise de rendez-vous avec Google Calendar
- Formulaire de contact avec SendGrid/Resend
- Tests E2E avec Playwright
- Monitoring avec Sentry

---

## [1.0.0] - 2024

### Infrastructure DevOps - Configuration initiale

#### Ajouté

##### CI/CD - GitHub Actions
- **ci.yml**: Pipeline d'intégration continue
  - Lint et tests automatiques frontend/backend
  - Type checking TypeScript
  - Scan de sécurité (npm audit + Trivy)
  - Build verification
  - Exécuté sur chaque PR et push

- **deploy-frontend.yml**: Déploiement automatique Vercel
  - Déploiement sur push vers `main`
  - Build optimisé avec variables d'environnement
  - Commentaires automatiques sur PR
  - URL de preview

- **deploy-backend.yml**: Déploiement automatique Railway
  - Déploiement sur push vers `main`
  - Health checks automatiques
  - Migrations de base de données
  - Retry policy configuré

##### Configuration Vercel
- **vercel.json**: Configuration production-ready
  - Headers de sécurité (CSP, HSTS, X-Frame-Options, etc.)
  - Cache optimisé pour assets statiques
  - Redirections (www → non-www)
  - Région CDG1 (Paris)
  - Variables d'environnement mappées

##### Docker - Environnement local
- **docker-compose.yml**: Stack de développement complète
  - Service PostgreSQL 16 avec health checks
  - Service Strapi (backend) avec hot-reload
  - Service Next.js (frontend) avec hot-reload
  - Service PgAdmin (optionnel) pour gestion BDD
  - Volumes persistants
  - Network partagé

- **backend/Dockerfile**: Image Docker optimisée pour Strapi
  - Multi-stage build (deps, dev, builder, production)
  - Image Alpine Linux (légère)
  - Utilisateur non-root pour la sécurité
  - Cache npm optimisé

- **frontend/Dockerfile**: Image Docker optimisée pour Next.js
  - Multi-stage build
  - Support standalone output
  - Variables d'environnement build-time
  - Utilisateur non-root

- **.dockerignore**: Optimisation des builds Docker

##### Railway Configuration
- **backend/railway.json**: Configuration deployment Railway
  - Builder Nixpacks
  - Health check endpoint
  - Restart policy avec retries
  - Start command optimisé

- **backend/.railwayignore**: Exclusions Railway
- **backend/config/health-check.js**: Endpoint santé personnalisé

##### Scripts automatisés
- **scripts/setup-local.sh**: Installation automatique (executable)
  - Vérification prérequis (Node.js 20+, Docker, etc.)
  - Création fichiers .env automatique
  - Génération secrets Strapi avec OpenSSL
  - Installation dépendances npm
  - Choix Docker ou manuel
  - Messages colorés et guidage utilisateur

- **scripts/deploy-production.sh**: Déploiement production (executable)
  - Menu interactif
  - Vérifications Git
  - Exécution tests
  - Build des projets
  - Déploiement Vercel/Railway
  - Health checks
  - Configuration DNS
  - Guide complet

- **scripts/README.md**: Documentation des scripts

##### Variables d'environnement
- **frontend/.env.example**: Template frontend complet
  - Configuration Strapi API
  - URLs du site
  - Google Analytics
  - OpenAI API
  - Google Calendar OAuth
  - Email providers (SendGrid/Resend/SMTP)
  - NextAuth
  - Feature flags
  - Documentation inline

- **backend/.env.example**: Template backend complet
  - Secrets Strapi (APP_KEYS, JWT, etc.)
  - Configuration PostgreSQL
  - Server configuration
  - Admin user initial
  - File upload providers
  - Email configuration
  - Rate limiting
  - CORS origins
  - Redis (optionnel)
  - GraphQL
  - Localization
  - Documentation inline

- **.env.example**: Template Docker Compose
  - PostgreSQL credentials
  - URLs des services
  - PgAdmin configuration

##### Makefile
- **Makefile**: 45+ commandes pour simplifier le workflow
  - Installation: `make install`, `make setup`
  - Développement: `make dev`, `make dev-frontend`, `make dev-backend`
  - Build: `make build`, `make build-frontend`, `make build-backend`
  - Tests: `make test`, `make lint`, `make type-check`
  - Docker: `make docker-up`, `make docker-down`, `make docker-logs`
  - Déploiement: `make deploy`, `make deploy-frontend`, `make deploy-backend`
  - Backup: `make backup-db`, `make restore-db`
  - Monitoring: `make status`, `make health`, `make logs-*`
  - Utilitaires: `make secrets`, `make clean`

##### Documentation
- **docs/specs/DEVOPS.md** (18 KB): Guide DevOps complet
  - Architecture de déploiement (avec diagrammes)
  - Configuration des environnements
  - Variables d'environnement exhaustives
  - Guides de déploiement (initial et continu)
  - CI/CD détaillé
  - Monitoring et logs (Vercel, Railway, externe)
  - Sécurité (headers, SSL, secrets, CORS, rate limiting)
  - Backup et restauration (automatique et manuel)
  - Procédures de rollback (frontend et backend)
  - Troubleshooting (problèmes courants + solutions)
  - Annexes (checklists, scripts, ressources)

- **CONTRIBUTING.md** (11 KB): Guide de contribution
  - Prérequis et installation
  - Workflow de développement Git
  - Standards de code (Frontend/Backend/CSS)
  - Conventions de nommage
  - Tests (Jest + React Testing Library)
  - Format des commits (Conventional Commits)
  - Template Pull Request
  - Processus de review
  - Ressources

- **QUICKSTART.md** (6 KB): Démarrage rapide
  - Installation en 5 minutes
  - 2 méthodes (automatique/manuelle)
  - Commandes essentielles
  - Configuration minimale
  - Tests de vérification
  - Problèmes courants + solutions
  - Prochaines étapes
  - Checklist

- **DEVOPS_SETUP_COMPLETE.md**: Récapitulatif complet
  - Liste de tous les fichiers créés
  - Architecture
  - Sécurité configurée
  - Workflows CI/CD
  - Monitoring
  - Backup
  - Secrets à configurer
  - Prochaines étapes

- **CHANGELOG.md** (ce fichier): Historique des modifications

##### Sécurité
- Headers de sécurité (rating A+):
  - Content-Security-Policy (CSP)
  - HTTP Strict Transport Security (HSTS)
  - X-Frame-Options (protection clickjacking)
  - X-Content-Type-Options (protection MIME sniffing)
  - X-XSS-Protection
  - Referrer-Policy
  - Permissions-Policy

- Autres mesures:
  - Secrets isolés par environnement
  - CORS configuré
  - Rate limiting
  - SSL/TLS automatique (Let's Encrypt)
  - Scan de sécurité dans CI/CD
  - Utilisateurs non-root dans Docker

##### Monitoring & Observabilité
- Health check endpoint (`/api/_health`)
- Logs en temps réel (Vercel + Railway)
- Metrics (CPU, memory, network)
- Prêt pour:
  - Uptime Robot
  - Sentry
  - Google Analytics

##### Backup
- Backups automatiques PostgreSQL (Railway)
- Scripts backup/restore manuels
- Stratégie de backup (quotidien/hebdomadaire/mensuel)

#### Modifié
- **.gitignore**: Ajout exclusions Docker, Railway, backups

#### Structure du projet

```
eoliya-website/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── deploy-frontend.yml
│       └── deploy-backend.yml
├── backend/
│   ├── config/
│   │   └── health-check.js
│   ├── .env.example
│   ├── .railwayignore
│   ├── Dockerfile
│   └── railway.json
├── frontend/
│   ├── .env.example
│   ├── Dockerfile
│   └── vercel.json
├── docs/
│   └── specs/
│       └── DEVOPS.md
├── scripts/
│   ├── deploy-production.sh
│   ├── setup-local.sh
│   └── README.md
├── .dockerignore
├── .env.example
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── DEVOPS_SETUP_COMPLETE.md
├── docker-compose.yml
├── Makefile
├── QUICKSTART.md
└── README.md
```

---

## Notes de version

### Philosophie de versioning

- **MAJOR** (X.0.0): Changements incompatibles
- **MINOR** (x.Y.0): Nouvelles fonctionnalités rétro-compatibles
- **PATCH** (x.y.Z): Corrections de bugs

### Types de changements

- **Ajouté**: Nouvelles fonctionnalités
- **Modifié**: Changements dans fonctionnalités existantes
- **Déprécié**: Fonctionnalités bientôt supprimées
- **Supprimé**: Fonctionnalités supprimées
- **Corrigé**: Corrections de bugs
- **Sécurité**: Corrections de vulnérabilités

---

## Comment contribuer

Pour proposer des changements:
1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -m 'feat: ajouter nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

Voir [CONTRIBUTING.md](./CONTRIBUTING.md) pour plus de détails.

---

## Liens utiles

- **Repository**: https://github.com/nejib20/eoliya-website
- **Issues**: https://github.com/nejib20/eoliya-website/issues
- **Documentation**: [docs/specs/](./docs/specs/)
- **Site web**: https://eoliya.com

---

**Maintenu par**: Nejib Aloui (nejib20@gmail.com)
