# Documentation API - EOLIYA Ingénierie

API REST construite avec Strapi v5 pour le site web corporate d'EOLIYA Ingénierie.

## URL de base

- **Développement** : `http://localhost:1337/api`
- **Production** : `https://api.eoliya.fr/api` (à configurer)

## Authentification

L'API utilise JWT (JSON Web Tokens) pour l'authentification.

### Obtenir un token
```http
POST /auth/local
Content-Type: application/json

{
  "identifier": "user@example.com",
  "password": "password"
}
```

### Utiliser le token
```http
GET /api/services
Authorization: Bearer YOUR_JWT_TOKEN
```

## Endpoints publics (lecture seule)

### Services

#### Liste des services
```http
GET /api/services?populate=*
```

#### Un service spécifique
```http
GET /api/services/:id?populate=*
```

**Réponse** :
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "titre": "Énergies Renouvelables",
      "slug": "energies-renouvelables",
      "description": "Conseil et conception...",
      "icone": "solar-panel",
      "details": "<p>...</p>",
      "ordre": 1,
      "image": {
        "data": { ... }
      }
    }
  }
}
```

### Projets

#### Liste des projets
```http
GET /api/projets?populate=*&sort=date:desc
```

#### Projets featured
```http
GET /api/projets?filters[featured][$eq]=true&populate=*
```

#### Projets par catégorie
```http
GET /api/projets?filters[categorie][$eq]=energie-renouvelable&populate=*
```

**Catégories disponibles** :
- `energie-renouvelable`
- `efficacite-energetique`
- `ingenierie-industrielle`
- `etude-technique`
- `environnement`

### Team Members

#### Liste de l'équipe
```http
GET /api/team-members?populate=*&sort=ordre:asc
```

### Articles

#### Liste des articles
```http
GET /api/articles?populate=*&sort=publishedAt:desc
```

#### Articles par catégorie
```http
GET /api/articles?filters[categorie][$eq]=actualites&populate=*
```

**Catégories disponibles** :
- `actualites`
- `etudes-de-cas`
- `guides-techniques`
- `innovation`
- `reglementation`

### Testimonials

#### Liste des témoignages
```http
GET /api/testimonials?populate=*
```

#### Témoignages featured
```http
GET /api/testimonials?filters[featured][$eq]=true&populate=*
```

### Settings

#### Configuration globale
```http
GET /api/setting?populate=*
```

## Endpoints publics (écriture)

### Contact

#### Créer une demande de contact
```http
POST /api/contacts
Content-Type: application/json

{
  "data": {
    "nom": "Dupont",
    "prenom": "Jean",
    "email": "jean.dupont@example.com",
    "telephone": "0601020304",
    "entreprise": "ACME Corp",
    "message": "Je souhaite obtenir un devis...",
    "typeDeContact": "devis"
  }
}
```

**Types de contact** :
- `information`
- `devis`
- `partenariat`
- `recrutement`
- `autre`

## Filtres et pagination

### Filtrage
```http
GET /api/services?filters[titre][$contains]=energie
```

### Pagination
```http
GET /api/articles?pagination[page]=1&pagination[pageSize]=10
```

### Tri
```http
GET /api/projets?sort=date:desc
```

### Population des relations
```http
GET /api/testimonials?populate[projet][populate]=*
```

## Formats de réponse

### Collection (liste)
```json
{
  "data": [
    {
      "id": 1,
      "attributes": { ... }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 4
    }
  }
}
```

### Single (élément unique)
```json
{
  "data": {
    "id": 1,
    "attributes": { ... }
  }
}
```

## Codes de statut HTTP

- `200 OK` : Succès
- `201 Created` : Ressource créée
- `400 Bad Request` : Requête invalide
- `401 Unauthorized` : Non authentifié
- `403 Forbidden` : Non autorisé
- `404 Not Found` : Ressource introuvable
- `500 Internal Server Error` : Erreur serveur

## Exemples d'utilisation

### JavaScript (Fetch)
```javascript
// Récupérer tous les services
fetch('http://localhost:1337/api/services?populate=*')
  .then(response => response.json())
  .then(data => console.log(data));

// Créer une demande de contact
fetch('http://localhost:1337/api/contacts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    data: {
      nom: 'Dupont',
      email: 'dupont@example.com',
      message: 'Demande de devis'
    }
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

### cURL
```bash
# GET
curl http://localhost:1337/api/services?populate=*

# POST
curl -X POST http://localhost:1337/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"data":{"nom":"Dupont","email":"test@example.com","message":"Test"}}'
```

## Rate Limiting

Par défaut, pas de limite de requêtes configurée en développement.

Pour la production, il est recommandé de configurer un rate limiting :
- 100 requêtes / minute par IP pour les endpoints publics
- 1000 requêtes / minute pour les utilisateurs authentifiés

## CORS

En développement, CORS est configuré pour accepter toutes les origines.

Pour la production, configurez les origines autorisées dans `config/middlewares.ts`.

## Support

Pour toute question sur l'API, contactez : nejib.aloui@eoliya.fr
