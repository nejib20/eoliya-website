# Guide de démarrage rapide - EOLIYA Ingénierie

Lancez votre environnement de développement en 5 minutes !

## 🚀 Installation rapide

### Prérequis
- Node.js 20+ ([télécharger](https://nodejs.org))
- Docker Desktop ([télécharger](https://www.docker.com/products/docker-desktop))

### Méthode 1: Installation automatique (recommandée)

```bash
# 1. Cloner le projet
git clone https://github.com/nejib20/eoliya-website.git
cd eoliya-website

# 2. Exécuter le script de setup
chmod +x scripts/setup-local.sh
./scripts/setup-local.sh

# 3. Démarrer avec Docker
make docker-up
# ou
docker-compose up -d

# ✅ C'est tout !
```

Accédez à:
- **Frontend**: http://localhost:3000
- **Backend Admin**: http://localhost:1337/admin
- **API**: http://localhost:1337/api

### Méthode 2: Installation manuelle

```bash
# 1. Cloner le projet
git clone https://github.com/nejib20/eoliya-website.git
cd eoliya-website

# 2. Copier les fichiers d'environnement
cp .env.example .env
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env

# 3. Générer les secrets pour Strapi
make secrets
# Copiez les secrets générés dans backend/.env

# 4. Installer les dépendances
make install
# ou
cd frontend && npm install
cd ../backend && npm install

# 5. Démarrer PostgreSQL avec Docker
docker run -d \
  --name eoliya-postgres \
  -e POSTGRES_DB=strapi \
  -e POSTGRES_USER=strapi \
  -e POSTGRES_PASSWORD=strapi \
  -p 5432:5432 \
  postgres:16-alpine

# 6. Démarrer le backend (Terminal 1)
cd backend
npm run develop

# 7. Démarrer le frontend (Terminal 2)
cd frontend
npm run dev
```

## 📋 Commandes essentielles

### Avec Make (recommandé)

```bash
# Démarrer tout avec Docker
make docker-up

# Arrêter tout
make docker-down

# Voir les logs
make docker-logs

# Statut des services
make status

# Exécuter les tests
make test

# Linter le code
make lint

# Construire pour la production
make build

# Aide (voir toutes les commandes)
make help
```

### Sans Make

```bash
# Démarrer avec Docker
docker-compose up -d

# Arrêter
docker-compose down

# Logs
docker-compose logs -f

# Développement frontend
cd frontend && npm run dev

# Développement backend
cd backend && npm run develop

# Tests
cd frontend && npm run test
cd backend && npm run test

# Build
cd frontend && npm run build
cd backend && npm run build
```

## 🔧 Configuration

### Variables d'environnement essentielles

#### Frontend (.env.local)
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Backend (.env)
```env
# Générez ces valeurs avec: make secrets
APP_KEYS=...
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
JWT_SECRET=...

# Database (si pas Docker)
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi
```

### Configuration du premier admin Strapi

1. Accédez à http://localhost:1337/admin
2. Créez votre compte administrateur
3. C'est fait ! Vous pouvez maintenant gérer le contenu

## 🧪 Tester que tout fonctionne

```bash
# 1. Vérifier la santé des services
make health
# ou
curl http://localhost:3000
curl http://localhost:1337/api/_health

# 2. Exécuter les tests
make test

# 3. Vérifier le linter
make lint

# 4. Vérifier les types TypeScript
make type-check
```

## 🐛 Problèmes courants

### Port déjà utilisé

```bash
# Trouver quel processus utilise le port
lsof -i :3000  # Frontend
lsof -i :1337  # Backend

# Tuer le processus
kill -9 [PID]
```

### Erreur de connexion à PostgreSQL

```bash
# Redémarrer PostgreSQL
docker-compose restart postgres

# Vérifier les logs
docker-compose logs postgres

# Ou créer une nouvelle instance
docker-compose down -v
docker-compose up -d
```

### Modules npm manquants

```bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install

# Ou avec Make
make clean
make install
```

### Docker ne démarre pas

```bash
# Nettoyer Docker
docker-compose down -v
docker system prune -a

# Redémarrer Docker Desktop
# Puis relancer
docker-compose up -d
```

## 📚 Prochaines étapes

### 1. Développement
- Consultez [CONTRIBUTING.md](./CONTRIBUTING.md) pour les standards de code
- Lisez la [documentation DevOps](./docs/specs/DEVOPS.md)
- Explorez les composants existants dans `frontend/components/`

### 2. Ajout de contenu
1. Connectez-vous à l'admin Strapi: http://localhost:1337/admin
2. Créez vos collections de contenu
3. Ajoutez du contenu
4. Utilisez l'API dans le frontend

### 3. Fonctionnalités à configurer

#### Chatbot IA (OpenAI)
```env
# frontend/.env.local
OPENAI_API_KEY=sk-...
```

#### Google Calendar (Prise de RDV)
```env
# frontend/.env.local
GOOGLE_CALENDAR_CLIENT_ID=...
GOOGLE_CALENDAR_CLIENT_SECRET=...
GOOGLE_CALENDAR_REDIRECT_URI=http://localhost:3000/api/calendar/callback
```

#### Email (Formulaire de contact)
```env
# frontend/.env.local
SENDGRID_API_KEY=...
# ou
RESEND_API_KEY=...
```

### 4. Déploiement

Quand vous êtes prêt à déployer:

```bash
# Exécuter le script de déploiement interactif
./scripts/deploy-production.sh
```

Consultez [docs/specs/DEVOPS.md](./docs/specs/DEVOPS.md) pour le guide complet.

## 🔗 Liens utiles

### Documentation
- [Plan du projet](./docs/specs/PROJECT_PLAN.md)
- [Guide DevOps](./docs/specs/DEVOPS.md)
- [Guide de contribution](./CONTRIBUTING.md)

### Technologies
- [Next.js](https://nextjs.org/docs)
- [Strapi](https://docs.strapi.io)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel](https://vercel.com/docs)
- [Railway](https://docs.railway.app)

### Support
- GitHub Issues: [Créer une issue](https://github.com/nejib20/eoliya-website/issues)
- Email: nejib20@gmail.com

## ✅ Checklist de démarrage

Cochez au fur et à mesure:

- [ ] Node.js 20+ installé
- [ ] Docker Desktop installé et démarré
- [ ] Projet cloné
- [ ] Script de setup exécuté
- [ ] Services Docker démarrés
- [ ] Frontend accessible (http://localhost:3000)
- [ ] Backend accessible (http://localhost:1337)
- [ ] Compte admin Strapi créé
- [ ] Tests passent (`make test`)
- [ ] Lint passe (`make lint`)

**Vous êtes prêt à développer ! 🎉**

---

Pour plus de détails, consultez le [README principal](./README.md) ou la [documentation complète](./docs/).
