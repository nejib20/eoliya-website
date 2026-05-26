# Structure du Backend EOLIYA Ingénierie

## Arborescence

```
backend/
├── config/                    # Configuration Strapi
│   ├── admin.ts              # Configuration admin panel
│   ├── api.ts                # Configuration API REST
│   ├── database.ts           # Configuration PostgreSQL
│   ├── middlewares.ts        # Middlewares (CORS, sécurité, etc.)
│   └── server.ts             # Configuration serveur
│
├── database/                  # Fichiers base de données
│   ├── init.sql              # Script d'initialisation PostgreSQL
│   └── seed-data.json        # Données de test
│
├── public/                    # Fichiers publics
│   └── uploads/              # Dossier pour les médias uploadés
│
├── src/
│   ├── api/                  # Content Types et API
│   │   ├── article/
│   │   │   ├── content-types/article/schema.json
│   │   │   ├── controllers/article.ts
│   │   │   ├── services/article.ts
│   │   │   └── routes/article.ts
│   │   │
│   │   ├── contact/
│   │   │   ├── content-types/contact/schema.json
│   │   │   ├── controllers/contact.ts
│   │   │   ├── services/contact.ts
│   │   │   └── routes/contact.ts
│   │   │
│   │   ├── projet/
│   │   │   ├── content-types/projet/schema.json
│   │   │   ├── controllers/projet.ts
│   │   │   ├── services/projet.ts
│   │   │   └── routes/projet.ts
│   │   │
│   │   ├── service/
│   │   │   ├── content-types/service/schema.json
│   │   │   ├── controllers/service.ts
│   │   │   ├── services/service.ts
│   │   │   └── routes/service.ts
│   │   │
│   │   ├── setting/
│   │   │   ├── content-types/setting/schema.json
│   │   │   ├── controllers/setting.ts
│   │   │   ├── services/setting.ts
│   │   │   └── routes/setting.ts
│   │   │
│   │   ├── team-member/
│   │   │   ├── content-types/team-member/schema.json
│   │   │   ├── controllers/team-member.ts
│   │   │   ├── services/team-member.ts
│   │   │   └── routes/team-member.ts
│   │   │
│   │   └── testimonial/
│   │       ├── content-types/testimonial/schema.json
│   │       ├── controllers/testimonial.ts
│   │       ├── services/testimonial.ts
│   │       └── routes/testimonial.ts
│   │
│   ├── components/           # Composants réutilisables
│   │   └── seo/
│   │       └── metadata.json
│   │
│   ├── admin/                # Personnalisation admin (vide pour l'instant)
│   ├── bootstrap.ts          # Configuration des permissions au démarrage
│   └── index.ts              # Point d'entrée principal
│
├── .env                      # Variables d'environnement (git ignored)
├── .env.example              # Exemple de variables d'environnement
├── .gitignore                # Fichiers à ignorer par git
├── package.json              # Dépendances et scripts npm
├── tsconfig.json             # Configuration TypeScript
├── API.md                    # Documentation API
├── README.md                 # Documentation principale
├── SETUP.md                  # Guide d'installation
└── STRUCTURE.md              # Ce fichier
```

## Content Types créés

### Collection Types

1. **Service** (`api::service.service`)
   - Titre, slug, description, icône, détails, ordre, image
   - Route : `/api/services`

2. **Projet** (`api::projet.projet`)
   - Titre, slug, client, catégorie, date, description, contenu, images, featured
   - Route : `/api/projets`

3. **Team Member** (`api::team-member.team-member`)
   - Nom, prénom, poste, bio, photo, email, linkedin, ordre, spécialités
   - Route : `/api/team-members`

4. **Article** (`api::article.article`)
   - Titre, slug, contenu, auteur, catégorie, tags, image, publishedAt
   - Route : `/api/articles`

5. **Testimonial** (`api::testimonial.testimonial`)
   - Nom, poste, entreprise, texte, photo, rating, date, featured, projet
   - Route : `/api/testimonials`

6. **Contact** (`api::contact.contact`)
   - Nom, prénom, email, téléphone, entreprise, message, rdv_date, status, typeDeContact
   - Route : `/api/contacts`

### Single Type

7. **Settings** (`api::setting.setting`)
   - siteName, siteDescription, logo, favicon, socialLinks, contact, seo, maintenance
   - Route : `/api/setting`

## Composants

- **SEO Metadata** (`seo.metadata`)
  - metaTitle, metaDescription, keywords, ogImage, ogTitle, ogDescription
  - Utilisé dans Settings et peut être ajouté à d'autres types

## Configuration

### Base de données (config/database.ts)
- Client : PostgreSQL
- Configuration via variables d'environnement
- Support SSL optionnel

### API (config/api.ts)
- Limite par défaut : 25 éléments
- Limite max : 100 éléments
- Count activé par défaut

### Middlewares (config/middlewares.ts)
- Logger
- Gestion d'erreurs
- Sécurité
- CORS
- Body parser
- Session

### Permissions (src/bootstrap.ts)
- Configuration automatique au démarrage
- Lecture publique : Services, Projets, Team Members, Articles, Testimonials, Settings
- Écriture publique : Contact (création uniquement)

## Scripts npm

```bash
npm run develop    # Mode développement avec auto-reload
npm run build      # Build pour la production
npm start          # Démarrage en production
npm run strapi     # CLI Strapi
```

## Variables d'environnement

Voir `.env.example` pour la liste complète :
- Configuration serveur (HOST, PORT)
- Secrets (APP_KEYS, JWT_SECRET, etc.)
- Configuration PostgreSQL
- NODE_ENV

## Prochaines étapes

1. Démarrer PostgreSQL
2. Créer la base de données avec `database/init.sql`
3. Installer les dépendances : `npm install`
4. Démarrer Strapi : `npm run develop`
5. Créer le compte admin sur http://localhost:1337/admin
6. Importer les données de test depuis `database/seed-data.json`
7. Vérifier les permissions dans Settings > Users & Permissions

## Documentation

- **README.md** : Vue d'ensemble et démarrage rapide
- **SETUP.md** : Guide d'installation détaillé
- **API.md** : Documentation complète de l'API REST
- **STRUCTURE.md** : Ce fichier, structure du projet
