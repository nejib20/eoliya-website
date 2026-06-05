# Guide d'intégration de la section Projects

## Vue d'ensemble

La section Projects affiche les projets de référence d'EOLIYA Ingénierie avec des visuels SVG personnalisés et des informations détaillées sur chaque réalisation.

## Composants créés

### 1. ProjectCard (`/src/components/ui/ProjectCard.tsx`)
Composant carte individuel pour afficher un projet avec:
- Image du projet (SVG)
- Badge de catégorie
- Année de réalisation
- Nom du client
- Description
- Localisation
- Tags de portée (scope)
- Effets hover interactifs

### 2. Projects (`/src/components/sections/Projects.tsx`)
Section complète contenant:
- En-tête avec titre et description
- Grille de 6 projets
- Statistiques en bas de section
- Boutons CTA (Call-to-Action)

## Intégration dans votre application

### Option 1: Page principale

```tsx
// Dans src/pages/index.tsx ou src/App.tsx
import { Projects } from '@/components/sections';

function HomePage() {
  return (
    <main>
      <HeroImmersive />
      <Services />
      <Projects />  {/* Ajoutez ici */}
      <Clients />
      <Testimonials />
      <Contact />
    </main>
  );
}
```

### Option 2: Page dédiée Projets

```tsx
// Dans src/pages/projets.tsx
import { Projects } from '@/components/sections';
import { Header, Footer } from '@/components/layout';

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <Projects />
      <Footer />
    </>
  );
}
```

### Option 3: Utilisation du composant ProjectCard seul

```tsx
import { ProjectCard, Project } from '@/components/ui';

const myProject: Project = {
  id: 'custom-project',
  title: 'Mon Projet',
  client: 'Mon Client',
  category: 'Bureaux',
  description: 'Description du projet...',
  image: '/images/projects/custom-project.svg',
  year: '2024',
  location: 'Paris, France',
  scope: ['LED', 'Économie d\'énergie']
};

function MyComponent() {
  return (
    <div className="container mx-auto p-4">
      <ProjectCard project={myProject} />
    </div>
  );
}
```

## Personnalisation

### Modifier les projets

Éditez le tableau `projects` dans `/src/components/sections/Projects.tsx`:

```tsx
const projects: Project[] = [
  {
    id: 'nouveau-projet',
    title: 'Titre du projet',
    client: 'Nom du client',
    category: 'Catégorie', // Bureaux, Commerce, Hôtellerie, etc.
    description: 'Description détaillée...',
    image: '/images/projects/votre-image.svg',
    year: '2024',
    location: 'Ville, Pays', // Optionnel
    scope: ['Tag1', 'Tag2', 'Tag3'] // Optionnel
  },
  // ... autres projets
];
```

### Modifier le style

Le composant utilise Tailwind CSS. Vous pouvez:

1. **Modifier les couleurs d'accent**:
   - Actuellement: jaune (`yellow-400`, `yellow-500`)
   - Pour changer: remplacez `yellow` par une autre couleur Tailwind

2. **Modifier la grille**:
   ```tsx
   // Actuel: 1 colonne mobile, 2 tablette, 3 desktop
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

   // Pour 4 colonnes sur grand écran:
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
   ```

3. **Modifier les animations**:
   ```tsx
   // Dans ProjectCard.tsx
   // Changer la durée des transitions:
   className="transition-all duration-500" // Actuellement 500ms
   ```

### Ajouter de nouveaux visuels SVG

1. Créez un nouveau fichier SVG dans `/public/images/projects/`
2. Suivez le format 800x600px
3. Utilisez la palette de couleurs EOLIYA (jaune, gris ardoise)
4. Référencez-le dans un nouveau projet

## Statistiques

Les statistiques affichées en bas de section peuvent être modifiées:

```tsx
<div className="text-4xl font-bold text-yellow-500 mb-2">250+</div>
<div className="text-sm text-slate-600 font-medium">Projets réalisés</div>
```

## Responsive Design

La section est entièrement responsive:
- **Mobile**: 1 colonne, cartes empilées
- **Tablette**: 2 colonnes
- **Desktop**: 3 colonnes

## Accessibilité

Le composant inclut:
- Alt text sur les images
- Contraste de couleurs conforme WCAG
- Navigation au clavier
- États hover visibles

## Performance

- SVG optimisés et légers (2-5KB chacun)
- Chargement lazy possible avec:
  ```tsx
  <img loading="lazy" src={project.image} alt={project.title} />
  ```

## Support navigateur

Compatible avec:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Prochaines étapes

1. Intégrer la section dans votre page principale
2. Tester la responsivité sur différents appareils
3. Personnaliser les couleurs selon votre charte
4. Ajouter vos propres projets
5. Créer des visuels SVG supplémentaires si nécessaire
