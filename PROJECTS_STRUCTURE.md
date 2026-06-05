# Structure des Composants Projets

## Arborescence des Fichiers

```
eoliya-website/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx                    ← HomePage (ProjectsGallery intégré)
│   │   │   ├── projets/
│   │   │   │   └── page.tsx                ← Page Projets dédiée
│   │   │   └── demo-projects/
│   │   │       └── page.tsx                ← Page Demo (tests variants)
│   │   │
│   │   └── components/
│   │       ├── sections/
│   │       │   ├── index.ts                ← Exports centralisés
│   │       │   ├── ProjectsGallery.tsx     ← 🎨 Galerie principale
│   │       │   ├── Projects.tsx            ← Ancien composant (garde)
│   │       │   └── ProjectsWithFilters.tsx ← Ancien composant (garde)
│   │       │
│   │       └── ui/
│   │           ├── ProjectCardPremium.tsx  ← 🎨 Carte projet réutilisable
│   │           ├── ProjectModal.tsx        ← 🎨 Modal détaillé
│   │           ├── ImageWithLoader.tsx     ← 🎨 Loader d'image
│   │           ├── ProjectCard.tsx         ← Ancien composant (garde)
│   │           ├── ProjectCardExtended.tsx ← Ancien composant (garde)
│   │           └── ProjectFilters.tsx      ← Filtres (corrigé)
│   │
│   ├── PROJECTS_GALLERY.md                 ← 📚 Documentation détaillée
│   └── package.json
│
└── PROJECTS_IMPLEMENTATION_SUMMARY.md      ← 📋 Résumé implémentation
```

## Flux de Données

```
┌─────────────────────────────────────────────────────────────┐
│                      ProjectsGallery                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  État Local:                                          │  │
│  │  - selectedCategory: string                           │  │
│  │  - hoveredProject: string | null                      │  │
│  │  - selectedProject: ProjectItem | null                │  │
│  │  - isModalOpen: boolean                               │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Données:                                             │  │
│  │  const projects: ProjectItem[] = [...]               │  │
│  │  - 6 projets avec images Unsplash                     │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Filtrage:                                            │  │
│  │  const filteredProjects = selectedCategory === 'Tous' │  │
│  │    ? projects                                         │  │
│  │    : projects.filter(p => p.category === ...)         │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Rendu:                                               │  │
│  │  - Filtres catégories (boutons)                       │  │
│  │  - Grid masonry 3 colonnes                            │  │
│  │  - Cards avec hover effects                           │  │
│  │  - Stats section                                      │  │
│  │  - CTA buttons                                        │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ├─► ProjectModal (affichage détails)
                            │   - Backdrop blur
                            │   - Layout 2 colonnes
                            │   - Animations entrée/sortie
                            │
                            └─► Rendu des cartes via map()
                                    │
                                    ▼
                        ┌──────────────────────┐
                        │  ProjectCard inline  │
                        │  (pas le composant)  │
                        │                      │
                        │  - Image + overlay   │
                        │  - Badges            │
                        │  - Hover info        │
                        │  - onClick modal     │
                        └──────────────────────┘
```

## Composant ProjectCardPremium (Réutilisable)

```
┌─────────────────────────────────────────────────────────────┐
│                   ProjectCardPremium                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Props:                                               │  │
│  │  - project: ProjectCardData                           │  │
│  │  - variant?: 'default' | 'large' | 'wide'            │  │
│  │  - onClick?: () => void                               │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  État:                                                │  │
│  │  - isHovered: boolean                                 │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Rendu conditionnel:                                  │  │
│  │  heightClasses[variant]                               │  │
│  │  - default: h-[480px]                                 │  │
│  │  - large: h-[600px]                                   │  │
│  │  - wide: h-[400px]                                    │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Effets hover:                                        │  │
│  │  - Image scale 110%                                   │  │
│  │  - Gradient overlay intensifié                        │  │
│  │  - Description reveal (height auto)                   │  │
│  │  - Tags animation stagger                             │  │
│  │  - Sparkles effect                                    │  │
│  │  - Accent line scaleX                                 │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Modal Flow

```
Utilisateur clique sur carte
        │
        ▼
handleProjectClick(project)
        │
        ├─► setSelectedProject(project)
        │
        └─► setIsModalOpen(true)
                │
                ▼
        ┌──────────────────────┐
        │   ProjectModal       │
        │                      │
        │  isOpen={true}       │
        │  project={selected}  │
        │                      │
        │  ┌────────────────┐  │
        │  │ AnimatePresence│  │
        │  │    ┌────────┐  │  │
        │  │    │Backdrop│  │  │
        │  │    └────────┘  │  │
        │  │    ┌────────┐  │  │
        │  │    │Content │  │  │
        │  │    │2 cols  │  │  │
        │  │    │        │  │  │
        │  │    │[X] btn │  │  │
        │  │    └────────┘  │  │
        │  └────────────────┘  │
        └──────────────────────┘
                │
                ▼
        Clic [X] ou backdrop
                │
                ▼
        onClose() callback
                │
                └─► setIsModalOpen(false)
                        │
                        ▼
                AnimatePresence exit
```

## Intégration Pages

### Page d'accueil (/)
```tsx
export default function HomePage() {
  return (
    <>
      <HeroPremium />
      <Clients />
      <Services />
      <ProjectsGallery /> ← 🎨 Ajouté ici
      <Testimonials />
      <Contact />
    </>
  );
}
```

### Page /projets
```tsx
export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <ProjectsGallery /> ← 🎨 Full page
    </main>
  );
}
```

### Page /demo-projects
```tsx
export default function DemoProjectsPage() {
  return (
    <main>
      <ProjectModal />
      <ProjectCardPremium variant="default" />
      <ProjectCardPremium variant="large" />
      <ProjectCardPremium variant="wide" />
    </main>
  );
}
```

## Types & Interfaces

```typescript
// ProjectItem (dans ProjectsGallery.tsx)
interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Tertiaire' | 'Hôtellerie' | 'Commerce' | 'Institutionnel';
  description: string;
  image: string;
  year: string;
  location: string;
  surface?: string;
  achievement?: string;
  tags: string[];
}

// ProjectCardData (dans ProjectCardPremium.tsx)
interface ProjectCardData {
  // Identique à ProjectItem
  // Permet réutilisation indépendante
}

// Props Modal
interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

// Props Card Premium
interface ProjectCardPremiumProps {
  project: ProjectCardData;
  variant?: 'default' | 'large' | 'wide';
  onClick?: () => void;
}
```

## Dépendances

```json
{
  "next": "^14.2.0",
  "react": "^18",
  "framer-motion": "^11.0.0",
  "lucide-react": "latest",
  "tailwindcss": "^3"
}
```

## Animations Framer Motion

### ProjectsGallery
```tsx
// Filtres - bouton actif
transition-all duration-300 transform hover:scale-105

// Cartes - apparition
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.9 }}
transition={{ duration: 0.4, delay: index * 0.05 }}

// Stats
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

### ProjectCardPremium
```tsx
// Hover animations
animate={{
  y: isHovered ? -4 : 0,
  opacity: isHovered ? 1 : 0
}}
transition={{ duration: 0.3 }}

// Sparkles
<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.5 }}
/>
```

### ProjectModal
```tsx
// Backdrop
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}

// Modal content
initial={{ opacity: 0, scale: 0.95, y: 20 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
exit={{ opacity: 0, scale: 0.95, y: 20 }}
transition={{ type: "spring", duration: 0.5 }}
```

## Gestion des Images

### next/image Configuration
```tsx
<Image
  src={project.image}
  alt={project.title}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority={false}
/>
```

### Optimisations automatiques
- ✅ Format WebP
- ✅ Responsive sizes
- ✅ Lazy loading
- ✅ Blur placeholder
- ✅ CDN caching

## État Global vs Local

### État Local (ProjectsGallery)
```tsx
const [selectedCategory, setSelectedCategory] = useState('Tous');
const [hoveredProject, setHoveredProject] = useState(null);
const [selectedProject, setSelectedProject] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
```

### Pourquoi pas de Context/Redux ?
- Données statiques (6 projets)
- État UI simple
- Pas de partage entre pages
- Performance optimale

## Performance Tips

1. **Images** : Unsplash avec paramètre `?q=80&w=2000`
2. **Animations** : `will-change: transform` automatique
3. **Filtres** : Calcul client-side instantané
4. **Modal** : Lazy mount (rendu si isOpen)
5. **Build** : Static generation (138 kB)

## Accessibilité

```tsx
// Boutons filtres
<button
  aria-label={`Filtrer par ${cat.name}`}
  role="button"
  tabIndex={0}
>

// Images
<Image alt={project.title} />

// Modal
<button
  aria-label="Fermer le modal"
  onClick={onClose}
>
```

## Browser Support

- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅
- Mobile iOS/Android ✅

---

**🎉 Architecture solide et maintenable !**
