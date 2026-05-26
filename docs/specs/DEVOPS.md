# Documentation DevOps - EOLIYA Ingénierie

## Table des matières
- [Architecture de déploiement](#architecture-de-déploiement)
- [Configuration des environnements](#configuration-des-environnements)
- [Variables d'environnement](#variables-denvironnement)
- [Déploiement](#déploiement)
- [CI/CD](#cicd)
- [Monitoring et logs](#monitoring-et-logs)
- [Sécurité](#sécurité)
- [Backup et restauration](#backup-et-restauration)
- [Procédures de rollback](#procédures-de-rollback)
- [Troubleshooting](#troubleshooting)

---

## Architecture de déploiement

### Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────┐
│                         Internet                             │
└────────────────────┬───────────────────┬────────────────────┘
                     │                   │
                     │                   │
          ┌──────────▼──────────┐       │
          │  Enom DNS            │       │
          │  eoliya.com          │       │
          └──────────┬───────────┘       │
                     │                   │
        ┌────────────┼───────────────────┘
        │            │
        │            │
┌───────▼────────┐   │
│ CDN Vercel     │   │
│ eoliya.com     │   │
│ www.eoliya.com │   │
└───────┬────────┘   │
        │            │
        │            │
┌───────▼────────────▼──────────┐
│     Vercel Platform            │
│  ┌─────────────────────────┐  │
│  │   Next.js 14 Frontend   │  │
│  │   - App Router          │  │
│  │   - React 18            │  │
│  │   - Tailwind CSS        │  │
│  │   - Framer Motion       │  │
│  └──────────┬──────────────┘  │
└─────────────┼──────────────────┘
              │ API Calls
              │ (HTTPS)
              │
┌─────────────▼──────────────────┐
│     Railway Platform           │
│  ┌─────────────────────────┐  │
│  │   Strapi v5 Backend     │  │
│  │   - REST API            │  │
│  │   - GraphQL API         │  │
│  │   - Admin Panel         │  │
│  └──────────┬──────────────┘  │
│             │                  │
│  ┌──────────▼──────────────┐  │
│  │   PostgreSQL 16         │  │
│  │   - Primary Database    │  │
│  │   - Automated Backups   │  │
│  └─────────────────────────┘  │
└────────────────────────────────┘
```

### Composants principaux

#### Frontend (Vercel)
- **Plateforme**: Vercel
- **Framework**: Next.js 14 avec App Router
- **Runtime**: Node.js 20
- **Région**: `cdg1` (Paris)
- **CDN**: Global edge network
- **URL Production**: https://eoliya.com

#### Backend (Railway)
- **Plateforme**: Railway
- **Framework**: Strapi v5
- **Runtime**: Node.js 20
- **Database**: PostgreSQL 16
- **Région**: Europe (à configurer)
- **URL Production**: https://api.eoliya.com

#### Base de données
- **Type**: PostgreSQL 16
- **Hébergement**: Railway (service géré)
- **Backups**: Automatiques quotidiens
- **Réplication**: Gérée par Railway

---

## Configuration des environnements

### Environnements disponibles

#### 1. Développement local
```bash
Frontend:  http://localhost:3000
Backend:   http://localhost:1337
Admin:     http://localhost:1337/admin
Database:  localhost:5432
```

#### 2. Staging (optionnel)
```bash
Frontend:  https://staging.eoliya.com
Backend:   https://api-staging.eoliya.com
```

#### 3. Production
```bash
Frontend:  https://eoliya.com
           https://www.eoliya.com
Backend:   https://api.eoliya.com
Admin:     https://api.eoliya.com/admin
```

### Configuration DNS (Enom)

#### Records DNS à configurer

```dns
# Frontend (Vercel)
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 3600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600

# Backend (Railway)
Type: CNAME
Name: api
Value: [votre-projet].up.railway.app
TTL: 3600

# Email (si configuré)
Type: MX
Name: @
Priority: 10
Value: [votre-serveur-email]
TTL: 3600
```

---

## Variables d'environnement

### Frontend (Vercel)

#### Variables publiques
```env
NEXT_PUBLIC_STRAPI_URL=https://api.eoliya.com
NEXT_PUBLIC_SITE_URL=https://eoliya.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FEATURE_CHATBOT=true
NEXT_PUBLIC_FEATURE_BOOKING=true
NEXT_PUBLIC_FEATURE_ANALYTICS=true
```

#### Variables privées (Server-side only)
```env
OPENAI_API_KEY=sk-...
GOOGLE_CALENDAR_CLIENT_ID=...
GOOGLE_CALENDAR_CLIENT_SECRET=...
GOOGLE_CALENDAR_REDIRECT_URI=https://eoliya.com/api/calendar/callback
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://eoliya.com
SENDGRID_API_KEY=...
RESEND_API_KEY=...
```

### Backend (Railway)

#### Secrets Strapi (à générer)
```bash
# Générer avec: openssl rand -base64 32
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...
```

#### Configuration serveur
```env
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
STRAPI_ADMIN_URL=https://api.eoliya.com/admin
STRAPI_PUBLIC_URL=https://api.eoliya.com
FRONTEND_URL=https://eoliya.com
```

#### Database (automatique via Railway)
```env
DATABASE_CLIENT=postgres
DATABASE_URL=postgresql://... (fourni par Railway)
DATABASE_SSL=true
```

#### Services externes
```env
# Email
SENDGRID_API_KEY=...
SMTP_HOST=...
SMTP_PORT=587
SMTP_USERNAME=...
SMTP_PASSWORD=...

# Storage (si utilisé)
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=eu-west-3
AWS_BUCKET=eoliya-assets

# Monitoring
SENTRY_DSN=...
```

### Configuration dans les plateformes

#### Vercel
```bash
# Via CLI
vercel env add OPENAI_API_KEY
vercel env add GOOGLE_CALENDAR_CLIENT_ID
# ... etc

# Via Dashboard
1. Aller dans Project Settings
2. Environment Variables
3. Ajouter chaque variable
4. Sélectionner les environnements (Production, Preview, Development)
```

#### Railway
```bash
# Via CLI
railway variables set ADMIN_JWT_SECRET=...
railway variables set API_TOKEN_SALT=...
# ... etc

# Via Dashboard
1. Sélectionner le projet
2. Variables
3. Ajouter chaque variable
```

---

## Déploiement

### Déploiement initial

#### 1. Backend (Railway)

```bash
# Installer Railway CLI
npm install -g @railway/cli

# Se connecter
railway login

# Créer un nouveau projet
railway init

# Ajouter PostgreSQL
railway add postgresql

# Configurer les variables
railway variables set NODE_ENV=production
railway variables set HOST=0.0.0.0
railway variables set PORT=1337
# ... autres variables

# Déployer
cd backend
railway up

# Vérifier les logs
railway logs
```

#### 2. Frontend (Vercel)

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Lier le projet
cd frontend
vercel link

# Configurer les variables d'environnement
vercel env add NEXT_PUBLIC_STRAPI_URL production
vercel env add OPENAI_API_KEY production
# ... autres variables

# Déployer en production
vercel --prod
```

#### 3. Configuration du domaine

**Vercel:**
1. Aller dans Project Settings > Domains
2. Ajouter `eoliya.com`
3. Ajouter `www.eoliya.com`
4. Suivre les instructions DNS

**Railway:**
1. Aller dans Settings > Networking
2. Custom Domain: `api.eoliya.com`
3. Copier l'URL CNAME
4. Configurer dans Enom DNS

### Déploiement continu

Les déploiements sont automatisés via GitHub Actions:

#### Frontend
- Trigger: Push sur `main` avec changements dans `frontend/`
- Process:
  1. Tests et linting
  2. Build avec variables d'environnement
  3. Déploiement sur Vercel
  4. Validation du déploiement

#### Backend
- Trigger: Push sur `main` avec changements dans `backend/`
- Process:
  1. Tests et linting
  2. Build du projet
  3. Déploiement sur Railway
  4. Migrations de base de données
  5. Health check

### Déploiement manuel

```bash
# Utiliser le script fourni
./scripts/deploy-production.sh

# Ou étape par étape
cd backend && railway up
cd frontend && vercel --prod
```

---

## CI/CD

### GitHub Actions Workflows

#### 1. CI (Intégration Continue)
**Fichier**: `.github/workflows/ci.yml`

**Triggers:**
- Pull requests vers `main` ou `develop`
- Push sur `main` ou `develop`

**Jobs:**
- `lint-and-test-frontend`: ESLint, TypeScript, Tests, Build
- `lint-and-test-backend`: ESLint, Tests (avec PostgreSQL)
- `security-scan`: npm audit, Trivy

**Configuration:**
```yaml
# Aucune configuration requise
# Les secrets NEXT_PUBLIC_STRAPI_URL sont optionnels
```

#### 2. Déploiement Frontend
**Fichier**: `.github/workflows/deploy-frontend.yml`

**Triggers:**
- Push sur `main` avec changements dans `frontend/`
- Déclenchement manuel

**Secrets requis:**
```yaml
VERCEL_TOKEN           # Token d'accès Vercel
NEXT_PUBLIC_STRAPI_URL # URL du backend
NEXT_PUBLIC_SITE_URL   # URL du site
NEXT_PUBLIC_GA_ID      # ID Google Analytics
```

#### 3. Déploiement Backend
**Fichier**: `.github/workflows/deploy-backend.yml`

**Triggers:**
- Push sur `main` avec changements dans `backend/`
- Déclenchement manuel

**Secrets requis:**
```yaml
RAILWAY_TOKEN  # Token d'accès Railway
RAILWAY_URL    # URL du backend Railway
```

### Configuration des secrets GitHub

```bash
# Via GitHub CLI
gh secret set VERCEL_TOKEN
gh secret set RAILWAY_TOKEN
gh secret set NEXT_PUBLIC_STRAPI_URL
# ... etc

# Via GitHub UI
1. Aller dans Settings > Secrets and variables > Actions
2. New repository secret
3. Ajouter chaque secret
```

### Obtenir les tokens

#### Vercel Token
```bash
# Créer un token
1. Aller sur vercel.com
2. Settings > Tokens
3. Create Token
4. Copier le token
```

#### Railway Token
```bash
# Créer un token
1. Aller sur railway.app
2. Account Settings > Tokens
3. Create Token
4. Copier le token
```

---

## Monitoring et logs

### Vercel

#### Analytics
```bash
# Activer Vercel Analytics
1. Project Settings > Analytics
2. Enable Web Analytics
```

#### Logs en temps réel
```bash
# Via CLI
vercel logs [deployment-url]

# Via Dashboard
1. Deployments
2. Sélectionner un déploiement
3. Voir les logs
```

#### Metrics disponibles
- Temps de réponse
- Taux d'erreur
- Utilisation de la bande passante
- Nombre de requêtes
- Edge locations

### Railway

#### Logs
```bash
# Via CLI
railway logs

# Logs en continu
railway logs --follow

# Filtrer par service
railway logs --service backend
```

#### Metrics
```bash
# Via Dashboard
1. Metrics tab
2. Voir:
   - CPU usage
   - Memory usage
   - Network I/O
   - Database queries
```

### Monitoring externe

#### Configuration Uptime Robot (recommandé)
```
Service: UptimeRobot.com
Monitors à créer:
  - https://eoliya.com (HTTPS, 5 min)
  - https://api.eoliya.com/_health (HTTPS, 5 min)

Alertes: Email + SMS
```

#### Sentry (Error tracking)
```bash
# Installation
npm install @sentry/nextjs @sentry/node

# Configuration Frontend
SENTRY_DSN=https://...@sentry.io/...

# Configuration Backend
SENTRY_DSN=https://...@sentry.io/...
```

### Dashboards recommandés

#### Vercel Dashboard
- Déploiements récents
- Analytics en temps réel
- Erreurs et logs
- Usage et limites

#### Railway Dashboard
- Metrics du serveur
- Logs en temps réel
- Database metrics
- Déploiements

#### Google Analytics
- Trafic du site
- Sources de trafic
- Comportement utilisateurs
- Conversions

---

## Sécurité

### Headers de sécurité

Configurés dans `vercel.json`:

```json
{
  "headers": [
    {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "X-XSS-Protection": "1; mode=block",
      "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
      "Content-Security-Policy": "..."
    }
  ]
}
```

### HTTPS/SSL

#### Vercel
- Certificats SSL automatiques
- Renouvellement automatique
- Force HTTPS activé par défaut

#### Railway
- Certificats SSL automatiques via Let's Encrypt
- Renouvellement automatique

### Gestion des secrets

#### Bonnes pratiques
- ✅ Utiliser les gestionnaires de secrets des plateformes
- ✅ Jamais de secrets dans le code
- ✅ Fichiers `.env` dans `.gitignore`
- ✅ Rotation régulière des secrets
- ✅ Secrets différents par environnement

#### Rotation des secrets

```bash
# Backend (Railway)
# Regénérer les secrets
openssl rand -base64 32

# Mettre à jour Railway
railway variables set JWT_SECRET=nouveau-secret

# Redémarrer le service
railway up --detach

# Frontend (Vercel)
# Mettre à jour via Dashboard ou CLI
vercel env rm OPENAI_API_KEY production
vercel env add OPENAI_API_KEY production
```

### CORS Configuration

Backend (`config/middlewares.js` ou `.env`):
```env
CORS_ORIGINS=https://eoliya.com,https://www.eoliya.com
```

### Rate Limiting

```env
RATE_LIMIT_MAX_REQUESTS=100
RATE_LIMIT_DURATION=60000
```

### Audits de sécurité

```bash
# Frontend
cd frontend
npm audit
npm audit fix

# Backend
cd backend
npm audit
npm audit fix

# Scan avec Trivy (dans CI/CD)
trivy fs .
```

---

## Backup et restauration

### Base de données (Railway)

#### Backups automatiques
```
Railway effectue des backups automatiques quotidiens
Rétention: 7 jours (plan gratuit) / 30 jours (plan payant)
```

#### Backup manuel

```bash
# Via Railway CLI
railway run pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Ou avec Docker
docker exec eoliya-postgres pg_dump -U strapi strapi > backup.sql
```

#### Restauration

```bash
# Depuis un backup local
cat backup.sql | railway run psql $DATABASE_URL

# Ou avec Railway CLI
railway run psql $DATABASE_URL < backup.sql
```

### Uploads et assets

#### Strapi uploads
```bash
# Backup des fichiers uploadés
cd backend
tar -czf uploads-backup-$(date +%Y%m%d).tar.gz public/uploads

# Restauration
tar -xzf uploads-backup-20240101.tar.gz
```

#### S3 (si utilisé)
```bash
# Backup
aws s3 sync s3://eoliya-assets ./backup-assets

# Restauration
aws s3 sync ./backup-assets s3://eoliya-assets
```

### Stratégie de backup complète

#### Quotidien (automatique)
- Database (Railway)
- Logs (Vercel + Railway: 7 jours)

#### Hebdomadaire (manuel)
- Database export complet
- Assets/uploads
- Configuration backup

#### Mensuel (manuel)
- Archive complète
- Documentation
- Variables d'environnement (versions masquées)

---

## Procédures de rollback

### Frontend (Vercel)

#### Via Dashboard
```
1. Aller dans Deployments
2. Trouver le déploiement stable précédent
3. Cliquer sur le menu "..."
4. Sélectionner "Promote to Production"
```

#### Via CLI
```bash
# Lister les déploiements
vercel ls

# Promouvoir un déploiement spécifique
vercel promote [deployment-url]
```

#### Rollback instantané
```
Temps de rollback: < 1 minute
Pas de downtime
DNS et CDN mis à jour automatiquement
```

### Backend (Railway)

#### Via Dashboard
```
1. Aller dans Deployments
2. Sélectionner un déploiement précédent
3. Cliquer sur "Redeploy"
```

#### Via CLI
```bash
# Déployer une version spécifique
git checkout [commit-hash]
railway up

# Ou rollback à la version précédente
git revert HEAD
git push origin main
# Railway redéploiera automatiquement
```

#### Avec base de données

Si le rollback implique des changements de schéma:

```bash
# 1. Restaurer le backup de la base de données
railway run psql $DATABASE_URL < backup-before-deployment.sql

# 2. Rollback le code
railway up --detach

# 3. Vérifier
railway logs
curl https://api.eoliya.com/_health
```

### Procédure de rollback d'urgence

#### Checklist

```markdown
1. [ ] Identifier la version stable précédente
2. [ ] Notifier l'équipe
3. [ ] Sauvegarder l'état actuel (database)
4. [ ] Effectuer le rollback frontend (si nécessaire)
5. [ ] Effectuer le rollback backend (si nécessaire)
6. [ ] Vérifier les services (health checks)
7. [ ] Vérifier les fonctionnalités critiques
8. [ ] Monitorer les logs
9. [ ] Communiquer le status
10. [ ] Post-mortem et documentation
```

#### Commandes rapides

```bash
# Frontend rollback
vercel ls
vercel promote [stable-deployment-url]

# Backend rollback
railway logs | grep "error"
git revert HEAD
git push origin main

# Health checks
curl https://eoliya.com
curl https://api.eoliya.com/_health

# Monitoring
vercel logs [deployment-url] --follow
railway logs --follow
```

---

## Troubleshooting

### Problèmes courants

#### 1. Frontend ne se connecte pas au backend

**Symptômes:**
- Erreurs CORS
- API calls échouent
- 502 Bad Gateway

**Solutions:**
```bash
# Vérifier l'URL du backend
echo $NEXT_PUBLIC_STRAPI_URL

# Vérifier CORS dans Strapi
# backend/config/middlewares.js ou .env
CORS_ORIGINS=https://eoliya.com

# Vérifier le health check
curl https://api.eoliya.com/_health

# Vérifier les logs
vercel logs
railway logs
```

#### 2. Base de données inaccessible

**Symptômes:**
- Strapi ne démarre pas
- Erreurs de connexion PostgreSQL

**Solutions:**
```bash
# Vérifier les variables Railway
railway variables

# Vérifier DATABASE_URL
railway run echo $DATABASE_URL

# Tester la connexion
railway run psql $DATABASE_URL -c "SELECT version();"

# Vérifier les logs PostgreSQL
railway logs --service postgres
```

#### 3. Déploiement bloqué

**Symptômes:**
- Build ne termine pas
- Timeout
- Erreurs de build

**Solutions:**
```bash
# Vérifier les logs de build
vercel logs [deployment-url]
railway logs

# Build local pour débugger
cd frontend && npm run build
cd backend && npm run build

# Vérifier les dépendances
npm ci
npm audit fix

# Clear cache et rebuild
rm -rf node_modules .next
npm install
npm run build
```

#### 4. Variables d'environnement manquantes

**Symptômes:**
- Fonctionnalités ne marchent pas
- Erreurs "undefined is not a function"
- API keys manquantes

**Solutions:**
```bash
# Vérifier Vercel
vercel env ls

# Vérifier Railway
railway variables

# Vérifier local
cat .env
cat .env.local

# Ajouter une variable manquante
vercel env add VARIABLE_NAME production
railway variables set VARIABLE_NAME=value
```

#### 5. SSL/HTTPS problèmes

**Symptômes:**
- Certificat invalide
- Mixed content warnings

**Solutions:**
```bash
# Vérifier le certificat
curl -vI https://eoliya.com

# Vérifier les redirections HTTP->HTTPS
curl -I http://eoliya.com

# Force HTTPS dans Vercel (vercel.json)
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000"
        }
      ]
    }
  ]
}
```

### Commandes de diagnostic

```bash
# Health checks
curl -I https://eoliya.com
curl -I https://api.eoliya.com/_health

# DNS check
dig eoliya.com
dig www.eoliya.com
dig api.eoliya.com

# SSL check
openssl s_client -connect eoliya.com:443

# Response time
curl -w "@curl-format.txt" -o /dev/null -s https://eoliya.com

# Logs
vercel logs --follow
railway logs --follow

# Variables
vercel env ls
railway variables

# Status
vercel ls
railway status
```

### Contacts de support

#### Vercel Support
- Dashboard: vercel.com/support
- Email: support@vercel.com
- Documentation: vercel.com/docs

#### Railway Support
- Dashboard: railway.app/help
- Discord: railway.app/discord
- Documentation: docs.railway.app

#### Enom Support (DNS)
- Support: enom.com/support
- Phone: +1-425-274-4500

---

## Annexes

### Checklist de déploiement initial

```markdown
## Backend (Railway)
- [ ] Créer un compte Railway
- [ ] Créer un nouveau projet
- [ ] Ajouter PostgreSQL
- [ ] Configurer toutes les variables d'environnement
- [ ] Déployer le code
- [ ] Créer le premier utilisateur admin
- [ ] Vérifier le health check
- [ ] Configurer le domaine personnalisé
- [ ] Vérifier SSL

## Frontend (Vercel)
- [ ] Créer un compte Vercel
- [ ] Importer le projet depuis GitHub
- [ ] Configurer toutes les variables d'environnement
- [ ] Déployer
- [ ] Vérifier le build
- [ ] Configurer les domaines (eoliya.com, www.eoliya.com)
- [ ] Vérifier SSL
- [ ] Activer Analytics

## DNS (Enom)
- [ ] Ajouter CNAME pour @ → Vercel
- [ ] Ajouter CNAME pour www → Vercel
- [ ] Ajouter CNAME pour api → Railway
- [ ] Vérifier la propagation DNS (24-48h)

## GitHub
- [ ] Configurer tous les secrets
- [ ] Tester le workflow CI
- [ ] Tester le workflow deploy-frontend
- [ ] Tester le workflow deploy-backend

## Sécurité
- [ ] Activer 2FA sur tous les comptes
- [ ] Rotation des secrets de production
- [ ] Configurer les backups automatiques
- [ ] Mettre en place le monitoring

## Tests finaux
- [ ] Test de bout en bout du site
- [ ] Test du formulaire de contact
- [ ] Test du chatbot (si activé)
- [ ] Test de la prise de RDV (si activé)
- [ ] Test sur mobile
- [ ] Test des performances (Lighthouse)
- [ ] Test d'accessibilité
```

### Scripts utiles

#### Génération de secrets
```bash
#!/bin/bash
# generate-secrets.sh
echo "APP_KEYS=$(openssl rand -base64 32),$(openssl rand -base64 32)"
echo "API_TOKEN_SALT=$(openssl rand -base64 32)"
echo "ADMIN_JWT_SECRET=$(openssl rand -base64 32)"
echo "TRANSFER_TOKEN_SALT=$(openssl rand -base64 32)"
echo "JWT_SECRET=$(openssl rand -base64 32)"
echo "NEXTAUTH_SECRET=$(openssl rand -base64 32)"
```

#### Health check script
```bash
#!/bin/bash
# health-check.sh
FRONTEND_URL="https://eoliya.com"
BACKEND_URL="https://api.eoliya.com"

echo "Checking Frontend..."
curl -f -s -o /dev/null -w "%{http_code}" $FRONTEND_URL || echo "Frontend DOWN"

echo "Checking Backend..."
curl -f -s -o /dev/null -w "%{http_code}" $BACKEND_URL/_health || echo "Backend DOWN"
```

### Ressources et documentation

#### Documentation officielle
- Next.js: https://nextjs.org/docs
- Strapi: https://docs.strapi.io
- Vercel: https://vercel.com/docs
- Railway: https://docs.railway.app
- PostgreSQL: https://www.postgresql.org/docs

#### Outils recommandés
- GitHub CLI: https://cli.github.com
- Vercel CLI: https://vercel.com/cli
- Railway CLI: https://docs.railway.app/develop/cli
- Docker Desktop: https://www.docker.com/products/docker-desktop

---

**Dernière mise à jour**: 2024
**Auteur**: Nejib Aloui
**Contact**: nejib20@gmail.com
