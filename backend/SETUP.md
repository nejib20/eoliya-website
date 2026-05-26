# Guide d'installation et de configuration

## 1. Prérequis

Assurez-vous d'avoir installé :
- Node.js v20.x à v24.x (recommandé : v22.x)
- PostgreSQL v12 ou supérieur
- npm v6.0.0 ou supérieur

## 2. Installation de PostgreSQL

### macOS (Homebrew)
```bash
brew install postgresql@14
brew services start postgresql@14
```

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### Windows
Téléchargez l'installateur depuis : https://www.postgresql.org/download/windows/

## 3. Configuration de la base de données

### Option A : Script automatique
```bash
# Se connecter à PostgreSQL en tant que superutilisateur
psql -U postgres -f database/init.sql
```

### Option B : Configuration manuelle
```bash
# Se connecter à PostgreSQL
psql -U postgres

# Exécuter les commandes SQL
CREATE USER eoliya_user WITH PASSWORD 'eoliya_pass';
CREATE DATABASE eoliya_db OWNER eoliya_user;
GRANT ALL PRIVILEGES ON DATABASE eoliya_db TO eoliya_user;
\q
```

## 4. Installation des dépendances Node.js

```bash
# Installer les dépendances
npm install
```

## 5. Configuration des secrets

**Important** : Avant le premier démarrage, générez des secrets sécurisés dans `.env`

```bash
# Générer des secrets aléatoires (Linux/macOS)
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Remplacez dans `.env` :
- `APP_KEYS` (4 clés séparées par des virgules)
- `API_TOKEN_SALT`
- `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`
- `JWT_SECRET`

## 6. Premier démarrage

```bash
# Lancer Strapi en mode développement
npm run develop
```

Au premier démarrage :
1. Strapi va créer les tables dans PostgreSQL
2. Accédez à http://localhost:1337/admin
3. Créez le compte administrateur principal

## 7. Configuration des permissions API

Les permissions publiques sont automatiquement configurées au démarrage grâce au fichier `src/bootstrap.ts`.

**Permissions par défaut** :
- **Public** : Lecture (find, findOne) sur Services, Projets, Team Members, Articles, Testimonials, Settings
- **Public** : Création (create) sur Contact
- **Authenticated** : Toutes les opérations CRUD

Pour modifier les permissions manuellement :
1. Connectez-vous à l'admin : http://localhost:1337/admin
2. Allez dans Settings > Users & Permissions plugin > Roles
3. Modifiez les permissions pour Public et Authenticated

## 8. Ajout de données de test

Les données de test sont disponibles dans `database/seed-data.json`.

Pour les importer :
1. Connectez-vous à l'interface admin
2. Allez dans Content Manager
3. Créez manuellement les entrées à partir de seed-data.json

## 9. Production

### Build pour la production
```bash
npm run build
```

### Démarrer en production
```bash
npm start
```

### Variables d'environnement production

Créez un fichier `.env.production` avec :
- Des secrets sécurisés (différents de développement)
- Les informations de connexion PostgreSQL de production
- `NODE_ENV=production`

## 10. Vérification de l'installation

Une fois Strapi démarré, vérifiez :

1. **Admin accessible** : http://localhost:1337/admin
2. **API accessible** : http://localhost:1337/api/services
3. **Base de données** : Connexion PostgreSQL réussie
4. **Content Types** : 7 types visibles dans Content Manager

## Dépannage

### Erreur de connexion PostgreSQL
- Vérifiez que PostgreSQL est démarré : `pg_isready`
- Vérifiez les credentials dans `.env`
- Vérifiez le port (par défaut 5432)

### Erreur "upload folder doesn't exist"
```bash
mkdir -p public/uploads
```

### Erreur de dépendances
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 1337 déjà utilisé
Changez le port dans `.env` :
```
PORT=3001
```

## Support

Pour toute question ou problème, contactez : nejib.aloui@eoliya.fr
