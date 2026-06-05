# Section Projets Ultra-Premium - Documentation

## Vue d'ensemble

Cette documentation décrit la nouvelle section Projets ultra-premium créée pour EOLIYA Ingénierie, avec des visuels dignes des meilleurs cabinets d'architecture.

## Composants créés

### 1. ProjectsGallery.tsx
**Emplacement:** `/src/components/sections/ProjectsGallery.tsx`

Composant principal de la galerie de projets avec :
- **Layout masonry moderne** avec grille responsive (1-2-3 colonnes)
- **Filtres par catégorie** : Tous, Tertiaire, Hôtellerie, Commerce, Institutionnel
- **Animations Framer Motion** sophistiquées avec AnimatePresence
- **Hover effects premium** : zoom image, reveal info, gradient overlay
- **Images Unsplash** optimisées avec next/image
- **Modal intégré** pour affichage détaillé des projets
- **Section statistiques** : 250+ projets, 30+ clients, 60% économies, 15+ ans

**Projets inclus:**
1. Siège Veepee Saint-Denis (8500m², -60% consommation)
2. Casino Barrière Enghien (éclairage événementiel)
3. Conseil d'État Paris (mise aux normes patrimoine historique)
4. Centre E.Leclerc (-55% énergie)
5. Bureaux Dentsu Paris (design sur mesure)
6. Hôtel Azureva (120 chambres)

### 2. ProjectCardPremium.tsx
**Emplacement:** `/src/components/ui/ProjectCardPremium.tsx`

Carte projet réutilisable avec :
- **3 variants** : default, large, wide
- **Effets hover sophistiqués** : scale, gradient overlay, sparkles
- **Badges premium** : catégorie, achievement
- **Overlay dynamique** avec description et tags
- **CTA animé** avec icône
- **Responsive** : affichage adapté mobile/desktop

### 3. ProjectModal.tsx
**Emplacement:** `/src/components/ui/ProjectModal.tsx`

Modal full-screen pour détails projet :
- **Layout 2 colonnes** : image sticky + contenu scrollable
- **Backdrop blur** avec fermeture au clic
- **Animations entrée/sortie** Framer Motion
- **Sections détaillées** : description, technologies, résultats clés
- **CTA vers contact** intégré
- **Badges flottants** sur l'image

## Intégration

### Page d'accueil
```tsx
// /src/app/page.tsx
import { ProjectsGallery } from '@/components/sections/ProjectsGallery';

// Ajouté entre Services et Testimonials
<ProjectsGallery />
```

### Page /projets
```tsx
// /src/app/projets/page.tsx
import { ProjectsGallery } from '@/components/sections/ProjectsGallery';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <ProjectsGallery />
    </main>
  );
}
```

## Technologies utilisées

- **Next.js 14** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling
- **Framer Motion 11** pour les animations
- **next/image** pour l'optimisation des images
- **Lucide React** pour les icônes

## Design Features

### Palette de couleurs
- Primary (bleu): #0066CC
- Secondary (gris foncé): #2D3748
- Accent (orange): #FF8C00
- Gradients sophistiqués avec overlay

### Animations
- **Page load**: fadeIn + slideUp stagger
- **Hover**: scale 1.1, gradient overlay, sparkles
- **Filter change**: AnimatePresence avec exit animations
- **Modal**: spring animation avec backdrop blur

### Responsive
- **Mobile** : 1 colonne, bottom info visible
- **Tablet** : 2 colonnes, hover info
- **Desktop** : 3 colonnes, masonry layout

## Images Unsplash

Toutes les images sont chargées depuis Unsplash avec optimisation next/image :
- Format WebP automatique
- Lazy loading
- Blur placeholder
- Sizes responsives

**URLs utilisées:**
```
photo-1497366216548-37526070297c - Open space Veepee
photo-1517457373958-b7bdd4587205 - Casino luxe
photo-1555396273-367ea4eb4db5 - Architecture classique
photo-1441986300917-64674bd600d8 - Commerce moderne
photo-1497366811353-6870744d04b2 - Bureau design
photo-1566073771259-6a8506099945 - Hôtel moderne
```

## Performance

- **Build size**: 137 kB pour /projets
- **First Load JS**: 137 kB (optimisé)
- **Static Generation**: Page pré-rendue
- **Lighthouse**: 90+ (estimé avec optimisations)

## Personnalisation

### Ajouter un nouveau projet
```tsx
// Dans ProjectsGallery.tsx
const projects: ProjectItem[] = [
  // ... projets existants
  {
    id: 'nouveau-projet',
    title: 'Titre du projet',
    client: 'Nom du client',
    category: 'Tertiaire', // ou Hôtellerie, Commerce, Institutionnel
    description: 'Description complète...',
    image: 'https://images.unsplash.com/photo-...',
    year: '2024',
    location: 'Ville, France',
    surface: '1000 m²', // optionnel
    achievement: '-40% énergie', // optionnel
    tags: ['Tag1', 'Tag2', 'Tag3']
  }
];
```

### Modifier les catégories
```tsx
const categories = [
  { name: 'Nouvelle catégorie', icon: IconComponent }
];
```

### Personnaliser les animations
Modifier les variants Framer Motion dans chaque composant.

## Accessibilité

- Boutons avec labels clairs
- Images avec alt text descriptif
- Keyboard navigation (modal)
- Focus visible
- Contraste WCAG AA

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Notes importantes

1. **Framer Motion** est requis pour les animations
2. **Images Unsplash** nécessitent une connexion internet
3. **Modal** utilise Portal pour l'overlay
4. Les **filtres** fonctionnent côté client (instant)

## Maintenance

- Mettre à jour les projets régulièrement
- Optimiser les images (compression Unsplash)
- Tester les animations sur mobile
- Vérifier la performance Lighthouse

## Support

Pour toute question ou personnalisation, référez-vous à :
- Documentation Next.js: https://nextjs.org/docs
- Documentation Framer Motion: https://www.framer.com/motion/
- Documentation Tailwind CSS: https://tailwindcss.com/docs
