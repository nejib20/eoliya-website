# Backend EOLIYA Ingénierie

API Strapi v5 pour le site web corporate d'EOLIYA Ingénierie.

## Stack Technique

- **Framework**: Strapi v5
- **Base de données**: PostgreSQL
- **Langage**: TypeScript

## Configuration

### Prérequis

- Node.js >= 20.x <= 24.x
- PostgreSQL (installé et démarré)
- npm >= 6.0.0

### Configuration de PostgreSQL

1. Démarrer PostgreSQL :
```bash
# macOS avec Homebrew
brew services start postgresql@14

# Linux
sudo systemctl start postgresql
```

2. Créer la base de données et l'utilisateur :
```bash
# Exécuter le script d'initialisation
psql -U postgres -f database/init.sql

# Ou manuellement :
psql -U postgres
CREATE USER eoliya_user WITH PASSWORD 'eoliya_pass';
CREATE DATABASE eoliya_db OWNER eoliya_user;
GRANT ALL PRIVILEGES ON DATABASE eoliya_db TO eoliya_user;
```

### Variables d'environnement

Le fichier `.env` contient les variables suivantes :

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=eoliya_db
DATABASE_USERNAME=eoliya_user
DATABASE_PASSWORD=eoliya_pass
```

**Important** : Pour la production, modifiez les secrets dans `.env` (APP_KEYS, API_TOKEN_SALT, etc.)

### Installation

```bash
npm install
```

### Développement

```bash
npm run develop
```

L'interface d'administration sera accessible sur : http://localhost:1337/admin

### Production

```bash
npm run build
npm start
```

## Content Types

### Collection Types

1. **Service** - Services proposés par EOLIYA
2. **Projet** - Projets et références clients
3. **Team Member** - Membres de l'équipe
4. **Article** - Articles de blog et actualités
5. **Testimonial** - Témoignages clients
6. **Contact** - Demandes de contact et RDV

### Single Type

- **Settings** - Configuration globale du site

## API Endpoints

Les endpoints API sont générés automatiquement :

- `/api/services`
- `/api/projets`
- `/api/team-members`
- `/api/articles`
- `/api/testimonials`
- `/api/contacts`
- `/api/setting`

## Permissions

Les permissions par défaut :
- **Public** : Lecture seule sur tous les contenus publiés
- **Authenticated** : Lecture + Écriture

## Auteur

Nejib Aloui
