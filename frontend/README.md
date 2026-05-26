# EOLIYA Ingénierie - Site Corporate

Site web corporate pour EOLIYA Ingénierie, bureau d'études et conseil en ingénierie du bâtiment.

## Stack Technique

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **CMS:** Strapi (backend séparé)

## Auteur

**Nejib Aloui**

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Compiler pour la production
npm run build

# Lancer la version production
npm start
```

## Structure du Projet

```
frontend/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── a-propos/          # Page À propos
│   │   ├── services/          # Pages Services
│   │   ├── projets/           # Page Projets
│   │   ├── contact/           # Page Contact
│   │   └── blog/              # Page Blog
│   ├── components/
│   │   ├── ui/                # Composants UI (Button, Card, Input)
│   │   ├── layout/            # Composants Layout (Header, Footer)
│   │   └── sections/          # Sections (Hero, Services, etc.)
│   └── app/globals.css        # Styles globaux
├── public/                     # Assets statiques
├── tailwind.config.ts          # Configuration Tailwind
├── tsconfig.json              # Configuration TypeScript
└── next.config.js             # Configuration Next.js
```

## Design System

Le design system est basé sur les tokens définis dans `/docs/design/DESIGN_SYSTEM.md` :

### Couleurs Principales

- **Primary (Bleu):** #0066CC
- **Secondary (Gris anthracite):** #2D3748
- **Accent (Orange):** #FF8C00

### Typographie

- **Police:** Inter (Google Fonts)
- **Échelle:** De 12px (xs) à 72px (display)

### Composants

Tous les composants respectent les standards d'accessibilité WCAG 2.1 AA :
- Ratios de contraste conformes
- Focus visible
- Navigation au clavier
- Labels ARIA

## Développement

### Variables d'Environnement

Copier `.env.local.example` en `.env.local` et configurer :

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-token
NEXT_PUBLIC_SITE_URL=https://eoliya.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@eoliya.com
NEXT_PUBLIC_CONTACT_PHONE=01 34 22 30 12
```

### Scripts Disponibles

- `npm run dev` - Serveur de développement (port 3000)
- `npm run build` - Build de production
- `npm start` - Lancer la version production
- `npm run lint` - Linter ESLint
- `npm run type-check` - Vérification TypeScript

## Composants Principaux

### UI Components

- **Button:** Variantes primary, secondary, accent
- **Card:** Pour services, projets, contenus
- **Input/Textarea/Select:** Formulaires avec validation

### Layout Components

- **Header:** Navigation sticky avec menu mobile
- **Footer:** 4 colonnes avec liens et coordonnées

### Section Components

- **Hero:** Bannière avec titre, CTA et image
- **Services:** Grille de 3 services avec icônes
- **Clients:** Bandeau de logos avec stats
- **Testimonials:** Carrousel de témoignages
- **Contact:** Formulaire de contact complet

## Pages

### Accueil (/)
Hero + Clients + Services + À propos + Témoignages + CTA + Contact

### À propos (/a-propos)
Histoire + Valeurs + Approche + Clients

### Services (/services)
Vue d'ensemble des 3 services principaux + expertise transversale

### Projets (/projets)
Grille de projets avec filtres par catégorie

### Contact (/contact)
Formulaire + Coordonnées + Carte + FAQ

### Blog (/blog)
Liste d'articles avec filtres + Newsletter

## Performance

- Images optimisées (WebP, lazy loading)
- Code splitting automatique (Next.js)
- Préchargement des polices
- CSS optimisé (Tailwind purge)

## SEO

- Metadata configurés par page
- Open Graph tags
- Sitemap XML (à générer)
- robots.txt (à configurer)

## Accessibilité

- Navigation au clavier complète
- Labels ARIA appropriés
- Contraste conforme WCAG AA
- Focus visible sur tous les éléments interactifs

## Support Navigateurs

- Chrome/Edge (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Mobile Safari & Chrome

## Déploiement

Le site peut être déployé sur :
- Vercel (recommandé pour Next.js)
- Netlify
- Serveur Node.js personnalisé

```bash
# Build
npm run build

# Vérifier le build localement
npm start
```

## Notes Importantes

1. Remplacer les images placeholder par les vraies images
2. Intégrer Google Maps dans la page Contact
3. Connecter le formulaire à Strapi ou service email
4. Ajouter Google Analytics / Matomo
5. Configurer le domaine et SSL
6. Tester l'accessibilité avec axe DevTools

## Contact & Support

Pour toute question technique :
- Email: contact@eoliya.com
- Téléphone: 01 34 22 30 12

---

**Développé par Nejib Aloui** - Version 1.0 - Mai 2026
