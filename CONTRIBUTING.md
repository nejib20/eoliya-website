# Guide de contribution - EOLIYA Ingénierie

Merci de votre intérêt pour contribuer au projet EOLIYA Ingénierie !

## Table des matières
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Workflow de développement](#workflow-de-développement)
- [Standards de code](#standards-de-code)
- [Tests](#tests)
- [Commits](#commits)
- [Pull Requests](#pull-requests)

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé:

- **Node.js** 20 ou supérieur
- **npm** 10 ou supérieur
- **Git** 2.30 ou supérieur
- **Docker Desktop** (optionnel mais recommandé)
- **PostgreSQL 16** (si vous n'utilisez pas Docker)

### Outils recommandés

- **Visual Studio Code** avec les extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - GitLens
  - Docker

---

## Installation

### 1. Fork et clone

```bash
# Fork le projet sur GitHub
# Puis clonez votre fork
git clone https://github.com/[votre-username]/eoliya-website.git
cd eoliya-website

# Ajoutez le repo original comme remote
git remote add upstream https://github.com/nejib20/eoliya-website.git
```

### 2. Configuration automatique

```bash
# Utilisez le script de setup
chmod +x scripts/*.sh
./scripts/setup-local.sh
```

Ou manuellement:

```bash
# Installez les dépendances
make install
# ou
npm install --prefix frontend
npm install --prefix backend

# Copiez les fichiers d'environnement
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
cp .env.example .env

# Générez des secrets
make secrets
# Copiez les secrets générés dans backend/.env
```

### 3. Démarrer l'environnement

**Option A: Avec Docker (recommandé)**
```bash
make docker-up
# ou
docker-compose up -d
```

**Option B: Sans Docker**
```bash
# Terminal 1 - Backend
make dev-backend

# Terminal 2 - Frontend
make dev-frontend
```

Accédez à:
- Frontend: http://localhost:3000
- Backend Admin: http://localhost:1337/admin

---

## Workflow de développement

### 1. Créer une branche

```bash
# Mettez à jour votre main
git checkout main
git pull upstream main

# Créez une branche pour votre feature
git checkout -b feature/nom-de-la-feature
# ou pour un bug fix
git checkout -b fix/nom-du-bug
```

### 2. Développer

```bash
# Démarrez les services
make dev
# ou avec Docker
make docker-up

# Faites vos modifications...

# Vérifiez votre code régulièrement
make lint
make type-check
make test
```

### 3. Tester

```bash
# Tests frontend
cd frontend
npm run test
npm run test:watch  # Mode watch

# Tests backend
cd backend
npm run test

# Ou avec make
make test
```

### 4. Commit

Suivez la convention [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format
<type>(<scope>): <description>

# Types valides:
# - feat: Nouvelle fonctionnalité
# - fix: Correction de bug
# - docs: Documentation
# - style: Formatage (ne change pas le code)
# - refactor: Refactoring
# - test: Ajout de tests
# - chore: Tâches de maintenance

# Exemples
git commit -m "feat(frontend): add contact form validation"
git commit -m "fix(backend): resolve CORS issue"
git commit -m "docs: update deployment guide"
```

### 5. Push et Pull Request

```bash
# Pushez votre branche
git push origin feature/nom-de-la-feature

# Créez une Pull Request sur GitHub
# Utilisez le template fourni
```

---

## Standards de code

### Frontend (Next.js)

#### Structure des fichiers
```
frontend/
├── app/                    # App Router pages
│   ├── (routes)/          # Route groups
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # Composants React
│   ├── ui/               # Composants UI de base
│   ├── forms/            # Formulaires
│   └── layouts/          # Layouts
├── lib/                  # Utilitaires
├── hooks/               # Custom hooks
├── types/               # TypeScript types
└── public/              # Assets statiques
```

#### Conventions

```typescript
// Composants: PascalCase
export default function ContactForm() { }

// Fonctions: camelCase
function validateEmail(email: string) { }

// Constantes: UPPER_SNAKE_CASE
const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

// Types: PascalCase avec prefix 'T'
type TUser = {
  id: string;
  name: string;
};

// Interfaces: PascalCase avec prefix 'I'
interface IApiResponse {
  data: unknown;
  error?: string;
}
```

#### Style

```typescript
// ✅ Bon
import { useState } from 'react';

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Title</h1>
    </div>
  );
}

// ❌ Mauvais
import React from 'react'; // Pas nécessaire avec Next.js

function mycomponent() { // Mauvais nom
  const [open, setopen] = useState(false); // Mauvais nom

  return <div style={{margin: '0 auto'}}> // Utiliser Tailwind
    <h1>Title</h1>
  </div>;
}
```

### Backend (Strapi)

#### Structure
```
backend/
├── config/              # Configuration Strapi
├── src/
│   ├── api/            # Collections et API
│   ├── extensions/     # Extensions Strapi
│   └── middlewares/    # Middlewares custom
├── types/              # Types générés
└── public/             # Assets publics
```

#### Conventions

```javascript
// Collections: kebab-case
// src/api/contact-message/

// Services: camelCase
async findPublished() { }

// Controllers: camelCase
async create(ctx) { }
```

### CSS (Tailwind)

```tsx
// ✅ Utiliser Tailwind classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">

// ✅ Classes custom dans tailwind.config.js si répété
// tailwind.config.js
theme: {
  extend: {
    colors: {
      eoliya: {
        blue: '#0066CC',
        orange: '#FF6B35',
      }
    }
  }
}

// ❌ Éviter les styles inline
<div style={{ display: 'flex', padding: '1rem' }}>
```

---

## Tests

### Frontend (Jest + React Testing Library)

```typescript
// components/__tests__/ContactForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  it('should render form fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('should validate email format', async () => {
    render(<ContactForm />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid' } });
    fireEvent.blur(emailInput);
    expect(await screen.findByText(/email invalide/i)).toBeInTheDocument();
  });
});
```

### Backend (Jest)

```javascript
// src/api/contact/tests/contact.test.js
const request = require('supertest');

describe('Contact API', () => {
  it('should create a contact message', async () => {
    const response = await request(strapi.server.httpServer)
      .post('/api/contacts')
      .send({
        data: {
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message'
        }
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('id');
  });
});
```

---

## Commits

### Format des commits

```bash
# Structure
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation uniquement
- `style`: Formatage (espaces, virgules, etc.)
- `refactor`: Refactoring du code
- `perf`: Amélioration des performances
- `test`: Ajout ou modification de tests
- `chore`: Maintenance (dépendances, config, etc.)
- `ci`: Changements CI/CD
- `build`: Changements du système de build

### Exemples

```bash
feat(frontend): add chatbot component with OpenAI integration

- Create ChatBot component
- Integrate OpenAI API
- Add error handling
- Add loading states

Closes #123

---

fix(backend): resolve CORS issue with Vercel frontend

The CORS middleware was not properly configured to accept
requests from the production domain.

Fixed by updating config/middlewares.js

---

docs(devops): update deployment guide with Railway steps

- Add Railway configuration steps
- Update environment variables list
- Add troubleshooting section

---

chore: update dependencies to latest versions

- next@14.1.0
- strapi@5.0.0
- react@18.3.0
```

### Règles

- ✅ Utilisez l'impératif ("add" pas "added")
- ✅ Pas de point final
- ✅ 50 caractères max pour le sujet
- ✅ Corps explicatif si nécessaire (72 caractères par ligne)
- ✅ Référencez les issues (#123)
- ❌ Pas de commits génériques ("update", "fix", "changes")

---

## Pull Requests

### Template

Créez vos PR avec ce format:

```markdown
## Description
[Description claire de ce que fait cette PR]

## Type de changement
- [ ] Bug fix (non-breaking change qui corrige un problème)
- [ ] Nouvelle fonctionnalité (non-breaking change qui ajoute une fonctionnalité)
- [ ] Breaking change (correction ou fonctionnalité qui casse l'existant)
- [ ] Documentation

## Comment tester ?
1. [Première étape]
2. [Deuxième étape]
3. [Etc.]

## Checklist
- [ ] Mon code suit les standards du projet
- [ ] J'ai commenté le code dans les sections difficiles
- [ ] J'ai mis à jour la documentation
- [ ] Mes changements ne génèrent pas de nouveaux warnings
- [ ] J'ai ajouté des tests
- [ ] Tous les tests passent
- [ ] Les dépendances sont à jour

## Screenshots (si applicable)
[Ajoutez des captures d'écran]

## Issues liées
Closes #[numéro]
```

### Processus de review

1. **Créer la PR**
   - Remplir le template
   - Assigner des reviewers
   - Ajouter des labels

2. **CI/CD checks**
   - Attendre que tous les tests passent
   - Corriger si des tests échouent

3. **Review**
   - Répondre aux commentaires
   - Faire les changements demandés
   - Re-request review si nécessaire

4. **Merge**
   - Squash and merge (par défaut)
   - Delete branch après merge

---

## Ressources

### Documentation
- [Next.js](https://nextjs.org/docs)
- [Strapi](https://docs.strapi.io)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React](https://react.dev)

### Outils
- [Make commands](./Makefile)
- [Scripts de déploiement](./scripts/)
- [Documentation DevOps](./docs/specs/DEVOPS.md)

### Support
- GitHub Issues: [Créer une issue](https://github.com/nejib20/eoliya-website/issues/new)
- Email: nejib20@gmail.com

---

**Merci de contribuer au projet EOLIYA Ingénierie !**
