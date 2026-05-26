# Scripts de déploiement - EOLIYA Ingénierie

Ce dossier contient les scripts utilitaires pour le déploiement et la configuration du projet.

## Scripts disponibles

### 1. setup-local.sh

Script d'installation et de configuration de l'environnement de développement local.

**Usage:**
```bash
./scripts/setup-local.sh
```

**Ce que fait le script:**
- ✅ Vérifie les prérequis (Node.js 20+, npm, Docker)
- ✅ Crée les fichiers d'environnement (.env, .env.local)
- ✅ Génère les secrets de sécurité automatiquement
- ✅ Installe les dépendances npm
- ✅ Propose de démarrer avec Docker ou manuellement

**Prérequis:**
- Node.js 20 ou supérieur
- npm
- Docker (optionnel)
- PostgreSQL (si sans Docker)

### 2. deploy-production.sh

Script interactif de déploiement en production.

**Usage:**
```bash
./scripts/deploy-production.sh
```

**Ce que fait le script:**
- ✅ Vérifie que vous êtes sur la branche correcte
- ✅ Vérifie qu'il n'y a pas de changements non commités
- ✅ Exécute les tests
- ✅ Build les projets
- ✅ Déploie sur Railway (backend)
- ✅ Déploie sur Vercel (frontend)
- ✅ Vérifie le déploiement

**Prérequis:**
- Git
- Vercel CLI (`npm i -g vercel`)
- Railway CLI (`npm i -g @railway/cli`)
- Comptes configurés sur Vercel et Railway

## Installation rapide

### Option 1: Environnement local complet avec Docker

```bash
# Cloner le projet
git clone https://github.com/nejib20/eoliya-website.git
cd eoliya-website

# Exécuter le script de setup
./scripts/setup-local.sh

# Démarrer avec Docker
docker-compose up -d

# Accéder aux services
# Frontend: http://localhost:3000
# Backend: http://localhost:1337
# Admin: http://localhost:1337/admin
```

### Option 2: Environnement local sans Docker

```bash
# Cloner le projet
git clone https://github.com/nejib20/eoliya-website.git
cd eoliya-website

# Exécuter le script de setup
./scripts/setup-local.sh

# Démarrer PostgreSQL localement (doit être installé)
# Sur macOS avec Homebrew:
brew services start postgresql@16

# Terminal 1 - Backend
cd backend
npm run develop

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## Commandes utiles

### Développement local

```bash
# Démarrer tout avec Docker
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter tout
docker-compose down

# Nettoyer complètement
docker-compose down -v

# Démarrer avec PgAdmin (outil de gestion de base de données)
docker-compose --profile tools up -d
# Accéder à PgAdmin: http://localhost:5050
```

### Déploiement

```bash
# Déploiement interactif complet
./scripts/deploy-production.sh

# Ou manuellement:

# Backend sur Railway
cd backend
railway up

# Frontend sur Vercel
cd frontend
vercel --prod
```

### Génération de secrets

```bash
# Générer des secrets sécurisés pour Strapi
openssl rand -base64 32

# Générer plusieurs secrets d'un coup
for i in {1..5}; do echo "Secret $i: $(openssl rand -base64 32)"; done
```

## Variables d'environnement

### Frontend (.env.local)
Voir le fichier `frontend/.env.example` pour la liste complète.

Principales variables:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3000
OPENAI_API_KEY=sk-...
GOOGLE_CALENDAR_CLIENT_ID=...
```

### Backend (.env)
Voir le fichier `backend/.env.example` pour la liste complète.

Principales variables:
```env
APP_KEYS=key1,key2
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
```

## Troubleshooting

### Le script ne s'exécute pas

```bash
# Donner les permissions d'exécution
chmod +x scripts/*.sh

# Puis réessayer
./scripts/setup-local.sh
```

### Erreur "Node.js version too old"

```bash
# Installer Node.js 20+ via nvm
nvm install 20
nvm use 20

# Ou télécharger depuis nodejs.org
```

### Erreur de connexion à la base de données

```bash
# Avec Docker
docker-compose logs postgres

# Vérifier que PostgreSQL est démarré
docker-compose ps

# Redémarrer PostgreSQL
docker-compose restart postgres

# Sans Docker
# Vérifier que PostgreSQL est installé et démarré
psql --version
brew services list # macOS
```

### Port déjà utilisé

```bash
# Trouver le processus utilisant le port
lsof -i :3000  # Frontend
lsof -i :1337  # Backend
lsof -i :5432  # PostgreSQL

# Tuer le processus
kill -9 [PID]

# Ou changer les ports dans .env
```

## Support

Pour plus d'informations, consultez:
- Documentation complète: `/docs/specs/DEVOPS.md`
- GitHub Issues: https://github.com/nejib20/eoliya-website/issues
- Email: nejib20@gmail.com

## Licence

MIT License - Voir LICENSE pour plus de détails.
