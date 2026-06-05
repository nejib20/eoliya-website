# Checklist d'intégration - Section Projets EOLIYA

## Vérification des fichiers créés

### Visuels SVG (6 fichiers)
- [x] `/frontend/public/images/projects/veepee-office.svg`
- [x] `/frontend/public/images/projects/casino-barriere.svg`
- [x] `/frontend/public/images/projects/conseil-etat.svg`
- [x] `/frontend/public/images/projects/leclerc-store.svg`
- [x] `/frontend/public/images/projects/azureva-hotel.svg`
- [x] `/frontend/public/images/projects/dentsu-office.svg`
- [x] `/frontend/public/images/projects/README.md`

### Types TypeScript
- [x] `/frontend/src/types/projects.ts`

### Données
- [x] `/frontend/src/data/projects.data.ts`

### Hooks
- [x] `/frontend/src/hooks/useProjects.ts`

### Composants UI
- [x] `/frontend/src/components/ui/ProjectCard.tsx`
- [x] `/frontend/src/components/ui/ProjectCardExtended.tsx`
- [x] `/frontend/src/components/ui/ProjectFilters.tsx`

### Composants Sections
- [x] `/frontend/src/components/sections/Projects.tsx`
- [x] `/frontend/src/components/sections/ProjectsWithFilters.tsx`

### Exports
- [x] `/frontend/src/components/sections/index.ts` (mis à jour)
- [x] `/frontend/src/components/ui/index.ts` (mis à jour)

### Pages
- [x] `/frontend/src/app/projets/page.tsx` (mis à jour)

### Documentation
- [x] `/frontend/src/components/sections/INTEGRATION_GUIDE.md`
- [x] `/PROJECTS_SECTION_README.md`
- [x] `/EXAMPLE_HOMEPAGE_INTEGRATION.tsx`
- [x] `/CHECKLIST_INTEGRATION.md` (ce fichier)

---

## Étapes d'intégration

### 1. Vérification préalable

- [ ] Node.js et npm sont installés
- [ ] Le projet Next.js fonctionne correctement (`npm run dev`)
- [ ] Tailwind CSS est configuré
- [ ] Les alias de chemins `@/*` fonctionnent (vérifier `tsconfig.json`)

### 2. Test des visuels SVG

- [ ] Ouvrir chaque fichier SVG dans un navigateur pour vérifier l'affichage
- [ ] Vérifier que les chemins d'accès sont corrects: `/images/projects/*.svg`
- [ ] Tester le chargement des images dans un composant React

### 3. Vérification des imports

Testez que tous les imports fonctionnent:

```bash
# Dans le terminal, depuis le dossier frontend
npm run build
```

Si des erreurs apparaissent:
- [ ] Vérifier les chemins d'import
- [ ] Vérifier que tous les fichiers sont dans les bons dossiers
- [ ] Vérifier la syntaxe TypeScript

### 4. Test de la page Projets dédiée

- [ ] Démarrer le serveur de développement: `npm run dev`
- [ ] Naviguer vers `/projets`
- [ ] Vérifier que les 6 projets s'affichent
- [ ] Tester les filtres (catégorie, année)
- [ ] Tester la recherche
- [ ] Tester le tri
- [ ] Vérifier que les statistiques s'affichent correctement

### 5. Intégration dans la page d'accueil (optionnel)

Si vous voulez afficher les projets sur la page d'accueil:

- [ ] Ouvrir `/frontend/src/app/page.tsx`
- [ ] Ajouter l'import: `import { Projects } from '@/components/sections';`
- [ ] Ajouter le composant: `<Projects />`
- [ ] Vérifier l'affichage sur la page d'accueil
- [ ] Ajuster l'ordre des sections si nécessaire

### 6. Tests de responsive

Tester sur différentes tailles d'écran:

- [ ] Mobile (< 768px)
  - [ ] Les cartes s'affichent en 1 colonne
  - [ ] Les filtres sont accessibles
  - [ ] Les images se redimensionnent correctement

- [ ] Tablette (768px - 1024px)
  - [ ] Les cartes s'affichent en 2 colonnes
  - [ ] Le layout reste équilibré
  - [ ] Les boutons sont cliquables

- [ ] Desktop (> 1024px)
  - [ ] Les cartes s'affichent en 3 colonnes (ou 2 pour version filtrée)
  - [ ] Le sidebar des filtres est sticky
  - [ ] Tous les éléments sont bien alignés

### 7. Tests d'accessibilité

- [ ] Navigation au clavier fonctionne (Tab, Enter, Esc)
- [ ] Les images ont des textes alternatifs
- [ ] Le contraste des couleurs est suffisant
- [ ] Les labels de formulaire sont présents
- [ ] Les états focus sont visibles

### 8. Tests de performance

- [ ] Les SVG se chargent rapidement (< 100ms)
- [ ] Pas de lag lors du filtrage
- [ ] Les animations sont fluides
- [ ] Le build de production fonctionne: `npm run build`
- [ ] Vérifier la taille du bundle (doit rester raisonnable)

### 9. Tests fonctionnels

#### Filtres
- [ ] Filtrer par catégorie "Bureaux" → affiche 2 projets
- [ ] Filtrer par année "2024" → affiche 4 projets
- [ ] Combiner filtres catégorie + année
- [ ] Réinitialiser les filtres → affiche tous les projets

#### Recherche
- [ ] Rechercher "LED" → trouve plusieurs projets
- [ ] Rechercher "Casino" → trouve 1 projet
- [ ] Rechercher un terme inexistant → affiche message "Aucun projet"
- [ ] Effacer la recherche → réaffiche tous les projets

#### Tri
- [ ] Trier par "Plus récent" → 2024 en premier
- [ ] Trier par "Plus ancien" → 2023 en premier
- [ ] Trier par "Client A-Z" → ordre alphabétique
- [ ] Trier par "Économies" → projets avec meilleurs % en premier

#### Statistiques
- [ ] Les stats se mettent à jour avec les filtres
- [ ] Les nombres sont formatés correctement
- [ ] Les pourcentages s'affichent bien

### 10. Personnalisation (optionnel)

Si vous voulez personnaliser le style:

- [ ] Modifier les couleurs (remplacer `yellow-*` par vos couleurs)
- [ ] Ajuster les espacements
- [ ] Modifier les animations
- [ ] Changer les polices si nécessaire
- [ ] Adapter les textes à votre marque

---

## Problèmes courants et solutions

### Erreur: "Cannot find module '@/components/sections'"
**Solution**: Vérifier que `tsconfig.json` contient:
```json
"paths": {
  "@/*": ["./src/*"]
}
```

### Les images SVG ne s'affichent pas
**Solution**: Vérifier que les fichiers sont dans `/frontend/public/images/projects/`
Les chemins dans le code doivent être `/images/projects/filename.svg` (sans `/public`)

### Erreur TypeScript sur les types
**Solution**: Vérifier que `/frontend/src/types/projects.ts` existe et est bien exporté

### Les filtres ne fonctionnent pas
**Solution**: Vérifier que `useProjects` hook est bien importé et utilisé

### Erreur de build
**Solution**:
1. Supprimer `.next` et `node_modules`
2. Réinstaller: `npm install`
3. Rebuild: `npm run build`

### Styles Tailwind ne s'appliquent pas
**Solution**: Vérifier que `tailwind.config.js` inclut tous les chemins:
```js
content: [
  './src/**/*.{js,ts,jsx,tsx,mdx}',
]
```

---

## Validation finale

Avant de considérer l'intégration comme terminée:

- [ ] Tous les tests ci-dessus sont passés
- [ ] Aucune erreur dans la console
- [ ] Aucun warning TypeScript
- [ ] Le build de production fonctionne
- [ ] Les performances sont satisfaisantes
- [ ] L'accessibilité est respectée
- [ ] Le responsive fonctionne sur tous les appareils
- [ ] La documentation est lue et comprise

---

## Prochaines étapes suggérées

Une fois l'intégration validée:

1. **Ajouter vos propres projets**
   - Créer de nouveaux visuels SVG
   - Ajouter les données dans `projects.data.ts`

2. **Créer une page détail de projet**
   - Route dynamique `/projets/[id]`
   - Afficher toutes les informations d'un projet
   - Galerie d'images
   - Projets similaires

3. **Ajouter des animations**
   - Installer Framer Motion
   - Animer l'apparition des cartes
   - Transitions entre les filtres

4. **Connecter à un CMS**
   - Strapi, Contentful, ou autre
   - API pour récupérer les projets
   - Gestion du contenu dynamique

5. **Optimisations avancées**
   - Lazy loading des images
   - Pagination ou infinite scroll
   - Cache des données
   - SEO amélioré

---

## Support

En cas de problème:
1. Consulter la documentation dans `/PROJECTS_SECTION_README.md`
2. Vérifier les exemples dans `/EXAMPLE_HOMEPAGE_INTEGRATION.tsx`
3. Lire le guide d'intégration dans `/frontend/src/components/sections/INTEGRATION_GUIDE.md`

---

**Date de création**: 28 mai 2026
**Version**: 1.0.0
**Projet**: EOLIYA Ingénierie Website
