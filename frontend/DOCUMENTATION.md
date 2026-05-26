# Documentation Technique - Frontend EOLIYA Ingénierie

**Auteur:** Nejib Aloui
**Version:** 1.0
**Date:** Mai 2026

---

## Table des matières

1. [Architecture](#architecture)
2. [Composants](#composants)
3. [Pages](#pages)
4. [Styling](#styling)
5. [Animations](#animations)
6. [API Strapi](#api-strapi)
7. [Bonnes pratiques](#bonnes-pratiques)

---

## Architecture

### Structure des dossiers

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Layout racine
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── globals.css        # Styles globaux
│   │   └── [pages]/           # Pages de l'application
│   ├── components/
│   │   ├── ui/                # Composants UI réutilisables
│   │   ├── layout/            # Header, Footer
│   │   └── sections/          # Sections de page
│   ├── lib/                   # Utilitaires et configurations
│   │   ├── strapi.ts          # Client API Strapi
│   │   ├── animations.ts      # Animations Framer Motion
│   │   └── utils.ts           # Fonctions utilitaires
│   └── types/                 # Types TypeScript
├── public/                    # Assets statiques
└── [config files]             # Configuration
```

### Technologies

- **Next.js 14** avec App Router
- **TypeScript** pour le typage
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes

---

## Composants

### Composants UI (`src/components/ui/`)

#### Button
Bouton avec variantes et animations.

```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="lg" icon={ArrowRight}>
  Cliquez ici
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'accent'
- `size`: 'sm' | 'md' | 'lg'
- `icon`: Composant Lucide React
- `iconPosition`: 'left' | 'right'
- `href`: Pour transformer en lien
- `fullWidth`: Bouton pleine largeur

#### Card
Carte avec effet hover et variantes.

```tsx
import { Card } from '@/components/ui';

<Card variant="service" icon={Building2} title="Titre" description="Description">
  Contenu
</Card>
```

**Props:**
- `variant`: 'default' | 'service' | 'project'
- `icon`: Composant Lucide React (pour variant service)
- `title`: Titre de la carte
- `description`: Description
- `href`: Pour transformer en lien cliquable

#### Input / Textarea / Select
Champs de formulaire avec validation.

```tsx
import { Input, Textarea, Select } from '@/components/ui';

<Input
  label="Email"
  type="email"
  required
  error="Email invalide"
  helperText="Format: email@example.com"
/>
```

**Props communes:**
- `label`: Label du champ
- `error`: Message d'erreur
- `helperText`: Texte d'aide
- `required`: Champ requis
- `fullWidth`: Largeur complète

### Composants Layout (`src/components/layout/`)

#### Header
Navigation sticky avec menu mobile.

```tsx
import { Header } from '@/components/layout';

<Header />
```

Fonctionnalités:
- Navigation responsive
- Menu hamburger mobile
- Dropdown services
- Détection du scroll

#### Footer
Footer 4 colonnes avec liens et coordonnées.

```tsx
import { Footer } from '@/components/layout';

<Footer />
```

### Composants Sections (`src/components/sections/`)

#### Hero
Bannière principale avec titre, sous-titre et CTA.

```tsx
import { Hero } from '@/components/sections';

<Hero
  title="Titre principal"
  subtitle="Description"
  primaryCta={{ label: "CTA 1", href: "/contact" }}
  secondaryCta={{ label: "CTA 2", href: "/services" }}
  imageSrc="/hero.jpg"
/>
```

#### Services
Grille de services avec icônes.

```tsx
import { Services } from '@/components/sections';

<Services
  title="Nos services"
  subtitle="Description"
  services={customServices}
/>
```

#### Clients
Bandeau de logos clients avec statistiques.

```tsx
import { Clients } from '@/components/sections';

<Clients clients={clientsList} />
```

#### Testimonials
Carrousel de témoignages clients.

```tsx
import { Testimonials } from '@/components/sections';

<Testimonials testimonials={testimonialsList} />
```

#### Contact
Formulaire de contact complet.

```tsx
import { Contact } from '@/components/sections';

<Contact
  title="Contactez-nous"
  showContactInfo={true}
/>
```

---

## Pages

### Structure d'une page

```tsx
import type { Metadata } from 'next';
import { Hero, Services } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Titre de la page',
  description: 'Description SEO',
};

export default function Page() {
  return (
    <>
      <Hero title="..." subtitle="..." />
      <Services />
      {/* Autres sections */}
    </>
  );
}
```

### Pages disponibles

- `/` - Accueil
- `/a-propos` - À propos
- `/services` - Vue d'ensemble des services
- `/services/[slug]` - Pages détaillées des services
- `/projets` - Liste des projets
- `/contact` - Formulaire de contact
- `/blog` - Liste des articles

---

## Styling

### Tailwind CSS

Configuration dans `tailwind.config.ts` avec tokens du Design System.

#### Classes utilitaires personnalisées

```css
.btn              /* Bouton de base */
.btn-primary      /* Bouton primaire */
.btn-secondary    /* Bouton secondaire */
.btn-accent       /* Bouton accent */

.card             /* Carte de base */
.card-service     /* Carte service */

.input            /* Input de base */
.input-error      /* Input en erreur */

.section          /* Section standard */
.section-alt      /* Section fond alternatif */
.section-dark     /* Section fond sombre */

.container-custom /* Container personnalisé */
```

#### Couleurs

```tsx
// Primary (Bleu)
bg-primary-500    text-primary-500    border-primary-500

// Secondary (Gris)
bg-secondary-500  text-secondary-500  border-secondary-500

// Accent (Orange)
bg-accent-500     text-accent-500     border-accent-500
```

### CSS Variables

Disponibles dans `globals.css`:

```css
var(--color-primary-500)
var(--color-secondary-500)
var(--color-accent-500)
var(--space-8)
var(--shadow-lg)
var(--transition-base)
```

---

## Animations

### Framer Motion

Animations prédéfinies dans `src/lib/animations.ts`:

```tsx
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';

<motion.div
  variants={fadeInUp}
  initial="initial"
  animate="animate"
>
  Contenu animé
</motion.div>
```

### Animations disponibles

- `fadeInUp` - Apparition vers le haut
- `fadeIn` - Apparition simple
- `slideInLeft` - Glissement depuis la gauche
- `slideInRight` - Glissement depuis la droite
- `scaleOnHover` - Scale au survol
- `staggerContainer` - Container avec stagger
- `counterAnimation` - Animation de compteur

---

## API Strapi

### Configuration

Client configuré dans `src/lib/strapi.ts`.

Variables d'environnement requises:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-token
```

### Utilisation

```tsx
import { strapi, getServices, getBlogPosts } from '@/lib/strapi';

// Récupérer des services
const services = await getServices();

// Récupérer des articles
const posts = await getBlogPosts(10);

// Requête personnalisée
const data = await strapi.get('/custom-endpoint', {
  params: { populate: '*' }
});
```

### Méthodes disponibles

- `getServices()` - Liste des services
- `getServiceBySlug(slug)` - Service par slug
- `getProjects()` - Liste des projets
- `getProjectBySlug(slug)` - Projet par slug
- `getBlogPosts(limit)` - Articles de blog
- `getBlogPostBySlug(slug)` - Article par slug
- `getClients()` - Liste des clients
- `getTestimonials()` - Témoignages
- `submitContactForm(data)` - Soumission formulaire

---

## Bonnes pratiques

### TypeScript

Toujours typer les props des composants:

```tsx
interface MyComponentProps {
  title: string;
  optional?: number;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, optional }) => {
  // ...
};
```

### Performance

1. **Images**: Utiliser `next/image` pour l'optimisation automatique
2. **Lazy loading**: Les composants sections utilisent `whileInView`
3. **Code splitting**: Automatique avec Next.js App Router
4. **Cache**: ISR configuré sur 60s par défaut

### Accessibilité

Checklist obligatoire:
- [ ] Labels sur tous les inputs
- [ ] Focus visible sur éléments interactifs
- [ ] Attributs ARIA appropriés
- [ ] Navigation au clavier fonctionnelle
- [ ] Contraste conforme WCAG AA
- [ ] Images avec alt text

### SEO

Sur chaque page:
```tsx
export const metadata: Metadata = {
  title: 'Titre unique',
  description: 'Description unique (150-160 caractères)',
};
```

### Git

Conventions de commit:
```
feat: Ajouter nouvelle fonctionnalité
fix: Corriger un bug
style: Changements de style
refactor: Refactoring du code
docs: Documentation
test: Tests
```

---

## Déploiement

### Build de production

```bash
npm run build
```

### Variables d'environnement production

```env
NEXT_PUBLIC_STRAPI_URL=https://api.eoliya.com
STRAPI_API_TOKEN=production-token
NEXT_PUBLIC_SITE_URL=https://eoliya.com
```

### Vercel (recommandé)

1. Connecter le repo GitHub
2. Configurer les variables d'environnement
3. Déployer automatiquement

---

## Support

Pour toute question technique:
- Email: contact@eoliya.com
- Téléphone: 01 34 22 30 12

---

**Développé avec soin par Nejib Aloui**
