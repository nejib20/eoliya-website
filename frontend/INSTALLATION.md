# Guide d'Installation - Frontend EOLIYA Ingénierie

**Auteur:** Nejib Aloui

---

## Prérequis

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

## Installation

### 1. Cloner le projet

```bash
cd /Users/Nejib/eoliya-website/frontend
```

### 2. Installer les dépendances

```bash
npm install
```

Cela installera:
- Next.js 14.2.0
- React 18.3.0
- TypeScript 5.3.3
- Tailwind CSS 3.4.1
- Framer Motion 11.0.0
- Lucide React 0.344.0
- Et toutes les dépendances nécessaires

### 3. Configurer les variables d'environnement

Copier le fichier d'exemple:

```bash
cp .env.local.example .env.local
```

Éditer `.env.local` et configurer:

```env
# Strapi Backend
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=votre-token-ici

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=EOLIYA Ingénierie

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=contact@eoliya.com
NEXT_PUBLIC_CONTACT_PHONE=01 34 22 30 12
NEXT_PUBLIC_CONTACT_ADDRESS=131 Boulevard Pereire, 75017 Paris
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur: **http://localhost:3000**

## Scripts disponibles

```bash
# Développement
npm run dev              # Lance le serveur de dev sur le port 3000

# Production
npm run build            # Compile le projet pour la production
npm start                # Lance le serveur de production

# Qualité du code
npm run lint             # Vérifie le code avec ESLint
npm run type-check       # Vérifie les types TypeScript
```

## Vérifications post-installation

### 1. Tester la page d'accueil

Ouvrir http://localhost:3000 dans le navigateur.

Vérifier:
- [ ] Le header s'affiche correctement
- [ ] Le menu de navigation fonctionne
- [ ] Les animations sont fluides
- [ ] Le footer s'affiche en bas de page
- [ ] Les boutons CTA sont cliquables

### 2. Tester la navigation

Naviguer vers:
- [ ] /a-propos
- [ ] /services
- [ ] /services/conseil-pilotage
- [ ] /services/multiservices-relamping
- [ ] /services/luminaires-sur-mesure
- [ ] /projets
- [ ] /contact
- [ ] /blog

### 3. Tester le responsive

Tester dans les résolutions:
- [ ] Mobile (320px - 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (>1024px)

### 4. Tester l'accessibilité

- [ ] Navigation au clavier (Tab)
- [ ] Focus visible sur tous les éléments
- [ ] Alt text sur les images
- [ ] Labels sur les formulaires

## Structure du projet

```
frontend/
├── src/
│   ├── app/                    # Pages Next.js
│   ├── components/
│   │   ├── ui/                # Button, Card, Input
│   │   ├── layout/            # Header, Footer
│   │   └── sections/          # Hero, Services, etc.
│   ├── lib/
│   │   ├── strapi.ts          # Client API
│   │   ├── animations.ts      # Animations
│   │   └── utils.ts           # Utilitaires
│   └── types/                 # Types TypeScript
├── public/                    # Assets statiques
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Prochaines étapes

### 1. Ajouter les images

Placer les images dans `/public/images/`:
```
public/
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   ├── projects/
│   └── blog/
```

### 2. Connecter à Strapi

Une fois le backend Strapi configuré:
- Mettre à jour `NEXT_PUBLIC_STRAPI_URL`
- Ajouter le token API dans `STRAPI_API_TOKEN`
- Tester les appels API dans les pages

### 3. Configurer le domaine

En production:
- Acheter le domaine eoliya.com
- Configurer les DNS
- Déployer sur Vercel
- Configurer SSL

### 4. Analytics

Ajouter Google Analytics ou Matomo:
```tsx
// Dans layout.tsx
<Script src="..." />
```

### 5. Tests

Ajouter des tests avec Jest et React Testing Library:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

## Dépannage

### Erreur "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erreur de build TypeScript

```bash
npm run type-check
```

Corriger les erreurs de types signalées.

### Port 3000 déjà utilisé

```bash
# Changer le port
PORT=3001 npm run dev
```

### Problème de cache

```bash
rm -rf .next
npm run dev
```

## Support

Questions techniques:
- **Email:** contact@eoliya.com
- **Téléphone:** 01 34 22 30 12

Documentation:
- Lire `/frontend/README.md`
- Lire `/frontend/DOCUMENTATION.md`

---

**Bonne installation !**

Nejib Aloui - Mai 2026
