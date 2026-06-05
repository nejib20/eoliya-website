# Section Projets EOLIYA Ingénierie - Documentation Complète

## Vue d'ensemble

Cette documentation détaille tous les fichiers créés pour la section Projets du site web EOLIYA Ingénierie, incluant les visuels SVG, composants React, hooks personnalisés, types TypeScript et données mockées.

---

## 1. Visuels SVG (6 fichiers)

**Emplacement**: `/frontend/public/images/projects/`

### Fichiers créés:

1. **veepee-office.svg** (2.4KB)
   - Siège social Veepee - Relamping LED bureaux
   - Bâtiment moderne avec fenêtres LED jaunes/dorées
   - Badge LED vert, effets de lumière

2. **casino-barriere.svg** (2.0KB)
   - Casino Barrière Enghien - Installation éclairage technique
   - Fond sombre, faisceaux lumineux (spotlights)
   - Auvent rouge, ambiance casino sophistiquée

3. **conseil-etat.svg** (2.7KB)
   - Conseil d'État - Mise aux normes électriques
   - Architecture classique avec colonnes et fronton
   - Panneau électrique, badge de conformité vert

4. **leclerc-store.svg** (2.8KB)
   - Centre E.Leclerc - Optimisation énergétique
   - Bâtiment commercial, zones LED/ECO/OPT
   - Graphique de barres, badge A+ Energy

5. **azureva-hotel.svg** (4.8KB)
   - Hôtel Azureva - Rénovation éclairage chambres
   - Fond coucher de soleil, bâtiment violet avec balcons
   - Fenêtres illuminées, ambiance chaleureuse, 4 étoiles

6. **dentsu-office.svg** (3.7KB)
   - Bureaux Dentsu - Conception lumière sur mesure
   - Design moderne bleu/violet
   - Bandes lumineuses, zones colorées, badge "CUSTOM"

**Documentation**: `README.md` dans le même dossier

---

## 2. Types TypeScript

**Emplacement**: `/frontend/src/types/projects.ts`

### Interfaces définies:

- `Project` - Structure complète d'un projet
  - Propriétés requises: id, title, client, category, description, image, year
  - Propriétés optionnelles: location, scope, duration, value, energySavings, surface, testimonial, gallery, technologies, certifications, link, status, startDate, endDate

- `ProjectCategory` - Type union pour les catégories
  - Bureaux, Commerce, Hôtellerie, Institution, Loisirs, Industrie, Santé, Éducation, Résidentiel

- `ProjectStatus` - État du projet
  - completed, in-progress, planned, on-hold

- `ProjectFilters` - Filtres disponibles
  - category, year, location, client, search

- `ProjectSortOption` - Options de tri
  - year-desc, year-asc, client-asc, category-asc, savings-desc

- `ProjectStats` - Statistiques globales
  - totalProjects, satisfactionRate, averageEnergySavings, yearsOfExperience, etc.

- `ProjectCardProps` - Props pour ProjectCard
- `ProjectsSectionProps` - Props pour la section Projects

---

## 3. Données (Mock Data)

**Emplacement**: `/frontend/src/data/projects.data.ts`

### Contenu:

- **projectsData**: Tableau des 6 projets avec toutes les données complètes
- **projectStats**: Statistiques globales
  - 250+ projets, 98% satisfaction, 60% économies, 15 ans d'expérience
- **Fonctions utilitaires**:
  - `getAllProjects()`
  - `getProjectById(id)`
  - `getProjectsByCategory(category)`
  - `getProjectsByYear(year)`
  - `searchProjects(query)`
  - `getRecentProjects(limit)`
  - `getTopEnergySavingsProjects(limit)`

---

## 4. Composants React

### 4.1 ProjectCard (Base)
**Emplacement**: `/frontend/src/components/ui/ProjectCard.tsx`

**Caractéristiques**:
- Carte de projet élégante avec image, badges, description
- Effets hover interactifs
- Tags de portée (scope)
- Badge de catégorie et année
- Localisation optionnelle
- Ligne d'accent animée au hover
- Responsive et accessible

**Props**:
```tsx
interface ProjectCardProps {
  project: Project;
  className?: string;
}
```

---

### 4.2 ProjectCardExtended
**Emplacement**: `/frontend/src/components/ui/ProjectCardExtended.tsx`

**Caractéristiques**:
- Version avancée avec effet flip 3D
- Face avant: Vue standard avec boutons
- Face arrière: Détails techniques (technologies, certifications, métriques)
- Animations de rotation
- Badge d'économie d'énergie
- Stats détaillées (durée, surface)

**Props**:
```tsx
interface ProjectCardExtendedProps {
  project: Project;
  className?: string;
  onViewDetails?: (project: Project) => void;
}
```

---

### 4.3 ProjectFilters
**Emplacement**: `/frontend/src/components/ui/ProjectFilters.tsx`

**Caractéristiques**:
- Barre de recherche avec icône
- Filtres par catégorie et année
- Sélecteur de tri
- Bouton de réinitialisation
- Affichage des filtres actifs avec suppression individuelle
- Design moderne avec focus states

**Props**:
```tsx
interface ProjectFiltersProps {
  filters: ProjectFiltersType;
  onFilterChange: <K extends keyof ProjectFiltersType>(
    key: K,
    value: ProjectFiltersType[K]
  ) => void;
  onResetFilters: () => void;
  sortBy: ProjectSortOption;
  onSortChange: (sort: ProjectSortOption) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  availableCategories: string[];
  availableYears: string[];
  className?: string;
}
```

---

### 4.4 Projects (Section simple)
**Emplacement**: `/frontend/src/components/sections/Projects.tsx`

**Caractéristiques**:
- Section complète avec en-tête
- Grille responsive (1/2/3 colonnes)
- 6 projets affichés
- Barre de statistiques en bas
- Boutons CTA (Call-to-Action)
- Design dégradé subtil

**Usage**:
```tsx
import { Projects } from '@/components/sections';

<Projects />
```

---

### 4.5 ProjectsWithFilters (Section avancée)
**Emplacement**: `/frontend/src/components/sections/ProjectsWithFilters.tsx`

**Caractéristiques**:
- Intégration complète avec le hook useProjects
- Sidebar avec filtres (sticky)
- Grille responsive avec filtrage dynamique
- Statistiques en temps réel
- État vide avec message et bouton reset
- Layout 4 colonnes (1 sidebar + 3 grille)

**Usage**:
```tsx
import { ProjectsWithFilters } from '@/components/sections';

<ProjectsWithFilters />
```

---

## 5. Hook personnalisé

**Emplacement**: `/frontend/src/hooks/useProjects.ts`

**Fonctionnalités**:
- Gestion d'état pour filtres, tri et recherche
- Filtrage et tri mémorisés (useMemo)
- Méthodes utilitaires:
  - `updateFilter()` - Mettre à jour un filtre
  - `resetFilters()` - Réinitialiser tous les filtres
  - `getProjectById()` - Obtenir un projet par ID
  - `getSimilarProjects()` - Projets similaires
  - `getRecentProjects()` - Projets récents
  - `getFeaturedProjects()` - Projets mis en avant
- Statistiques dynamiques basées sur les filtres

**Retour**:
```tsx
{
  projects,           // Projets filtrés et triés
  allProjects,        // Tous les projets
  filters,            // Filtres actifs
  updateFilter,       // Fonction de mise à jour
  resetFilters,       // Réinitialiser
  searchQuery,        // Requête de recherche
  setSearchQuery,     // Setter de recherche
  sortBy,             // Tri actif
  setSortBy,          // Setter de tri
  availableCategories,// Catégories disponibles
  availableYears,     // Années disponibles
  availableClients,   // Clients disponibles
  getProjectById,     // Méthodes utilitaires...
  stats              // Statistiques dynamiques
}
```

**Usage**:
```tsx
import { useProjects } from '@/hooks/useProjects';

const Component = () => {
  const { projects, filters, updateFilter } = useProjects();
  // ...
};
```

---

## 6. Exports et Index

### 6.1 Sections
**Emplacement**: `/frontend/src/components/sections/index.ts`

Ajout de:
```tsx
export { Projects } from './Projects';
```

### 6.2 UI Components
**Emplacement**: `/frontend/src/components/ui/index.ts`

Ajout de:
```tsx
export { ProjectCard } from './ProjectCard';
export type { Project } from './ProjectCard';
```

---

## 7. Documentation

### 7.1 Guide d'intégration
**Emplacement**: `/frontend/src/components/sections/INTEGRATION_GUIDE.md`

Contient:
- Vue d'ensemble
- Instructions d'intégration (3 options)
- Guide de personnalisation
- Exemples de code
- Informations sur responsive, accessibilité, performance

### 7.2 README des visuels
**Emplacement**: `/frontend/public/images/projects/README.md`

Contient:
- Description de chaque visuel SVG
- Caractéristiques visuelles détaillées
- Guide d'utilisation
- Principes de style et cohérence
- Instructions de personnalisation

---

## Structure de fichiers créée

```
eoliya-website/
├── frontend/
│   ├── public/
│   │   └── images/
│   │       └── projects/
│   │           ├── veepee-office.svg
│   │           ├── casino-barriere.svg
│   │           ├── conseil-etat.svg
│   │           ├── leclerc-store.svg
│   │           ├── azureva-hotel.svg
│   │           ├── dentsu-office.svg
│   │           └── README.md
│   │
│   └── src/
│       ├── components/
│       │   ├── sections/
│       │   │   ├── Projects.tsx
│       │   │   ├── ProjectsWithFilters.tsx
│       │   │   ├── INTEGRATION_GUIDE.md
│       │   │   └── index.ts (mis à jour)
│       │   │
│       │   └── ui/
│       │       ├── ProjectCard.tsx
│       │       ├── ProjectCardExtended.tsx
│       │       ├── ProjectFilters.tsx
│       │       └── index.ts (mis à jour)
│       │
│       ├── hooks/
│       │   └── useProjects.ts
│       │
│       ├── types/
│       │   └── projects.ts
│       │
│       └── data/
│           └── projects.data.ts
│
└── PROJECTS_SECTION_README.md (ce fichier)
```

---

## Intégration rapide

### Option 1: Section simple (recommandée pour démarrer)

Dans votre page principale (ex: `pages/index.tsx`):

```tsx
import { Projects } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <HeroImmersive />
      <Services />
      <Projects />  {/* Ajoutez ici */}
      <Clients />
      <Testimonials />
      <Contact />
    </>
  );
}
```

### Option 2: Section avec filtres (page dédiée)

Créez `pages/projets.tsx`:

```tsx
import { ProjectsWithFilters } from '@/components/sections';
import { Header, Footer } from '@/components/layout';

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsWithFilters />
      <Footer />
    </>
  );
}
```

---

## Personnalisation

### Modifier les couleurs d'accent

Recherchez et remplacez dans tous les fichiers:
- `yellow-400` → votre couleur
- `yellow-500` → votre couleur plus foncée

### Ajouter un nouveau projet

1. Créez un visuel SVG dans `/public/images/projects/`
2. Ajoutez les données dans `/src/data/projects.data.ts`:

```tsx
{
  id: 'nouveau-projet',
  title: 'Titre du projet',
  client: 'Nom du client',
  category: 'Bureaux',
  description: 'Description...',
  image: '/images/projects/nouveau-projet.svg',
  year: '2024',
  location: 'Paris, France',
  scope: ['LED', 'Économie d\'énergie'],
  // ... autres propriétés optionnelles
}
```

### Modifier la grille

Dans `Projects.tsx`, ligne de la grille:
```tsx
// Actuel: 1/2/3 colonnes
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// Pour 4 colonnes:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
```

---

## Technologies utilisées

- **React 18+** avec TypeScript
- **Tailwind CSS** pour le styling
- **React Hooks** (useState, useMemo, useCallback)
- **SVG** pour les visuels vectoriels
- **Next.js** (avec alias de chemins `@/*`)

---

## Performance

- SVG optimisés (2-5KB chacun)
- Composants mémorisés avec useMemo
- Chargement lazy possible
- Pas de dépendances externes lourdes
- Code splitting automatique avec Next.js

---

## Accessibilité

- Alt text sur toutes les images
- Contraste de couleurs conforme WCAG AA
- Navigation au clavier fonctionnelle
- États focus visibles
- Labels sur tous les formulaires
- Sémantique HTML correcte

---

## Support navigateur

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Mobile

---

## Prochaines étapes suggérées

1. Intégrer la section dans votre page d'accueil
2. Tester sur différents appareils et tailles d'écran
3. Personnaliser les couleurs selon votre charte graphique
4. Ajouter vos propres projets et visuels
5. Créer une page dédiée avec filtres si nécessaire
6. Ajouter des animations supplémentaires (Framer Motion, etc.)
7. Implémenter un modal de détails de projet
8. Ajouter un système de pagination pour plus de projets
9. Connecter à une API backend si nécessaire

---

## Support et questions

Pour toute question ou problème:
1. Consultez les fichiers de documentation créés
2. Vérifiez les exemples de code dans INTEGRATION_GUIDE.md
3. Examinez les types dans projects.ts pour les interfaces disponibles
4. Testez avec les données mockées dans projects.data.ts

---

## Résumé des fichiers

- **6 visuels SVG** (15.4KB total)
- **8 fichiers TypeScript/React** (composants + hooks + types + data)
- **3 fichiers de documentation** (README + guide + ce fichier)
- **2 fichiers d'export** (index.ts mis à jour)

**Total: 19 fichiers créés/modifiés**

---

Créé le 28 mai 2026 pour EOLIYA Ingénierie
