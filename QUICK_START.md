# Quick Start - Section Projets EOLIYA

Guide de démarrage rapide pour intégrer la section Projets en 5 minutes.

---

## Vérification rapide

Tous les fichiers sont déjà créés. Vérifiez avec:

```bash
# Depuis la racine du projet
ls frontend/public/images/projects/
# Devrait afficher: 6 fichiers SVG + README.md

ls frontend/src/components/sections/Project*
# Devrait afficher: Projects.tsx et ProjectsWithFilters.tsx
```

---

## Option 1: Tester la page dédiée (Recommandé)

La page `/projets` est déjà configurée et prête.

```bash
# Démarrer le serveur
cd frontend
npm run dev
```

Puis ouvrir dans votre navigateur:
```
http://localhost:3000/projets
```

Vous devriez voir:
- 6 projets affichés
- Filtres sur la gauche (catégorie, année, recherche)
- Statistiques en haut
- Design responsive

---

## Option 2: Ajouter à la page d'accueil

### Méthode simple (3 minutes)

1. Ouvrir `frontend/src/app/page.tsx`

2. Ajouter l'import en haut du fichier:
```tsx
import { Projects } from '@/components/sections';
```

3. Ajouter le composant dans le return:
```tsx
export default function HomePage() {
  return (
    <main>
      <HeroImmersive />
      <Services />
      <Projects />  {/* <- Ajoutez cette ligne */}
      <Clients />
      <Testimonials />
      <Contact />
    </main>
  );
}
```

4. Sauvegarder et vérifier dans le navigateur

---

## Option 3: Version minimaliste (3 projets seulement)

Si vous voulez juste afficher 3 projets sur la page d'accueil:

```tsx
import { ProjectCard } from '@/components/ui';
import { getRecentProjects } from '@/data/projects.data';

export default function HomePage() {
  const projects = getRecentProjects(3);

  return (
    <main>
      {/* Vos autres sections */}

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Projets récents
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/projets" className="px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-lg inline-block">
              Voir tous nos projets
            </a>
          </div>
        </div>
      </section>

      {/* Vos autres sections */}
    </main>
  );
}
```

---

## Personnalisation rapide

### Changer les couleurs

Rechercher et remplacer dans tous les fichiers:
- `yellow-400` → `blue-400` (ou votre couleur)
- `yellow-500` → `blue-500`
- `yellow-600` → `blue-600`

### Ajouter un nouveau projet

1. Créer un SVG dans `/frontend/public/images/projects/`
2. Ouvrir `/frontend/src/data/projects.data.ts`
3. Ajouter dans le tableau `projectsData`:

```tsx
{
  id: 'mon-projet',
  title: 'Titre du projet',
  client: 'Nom du client',
  category: 'Bureaux', // ou Commerce, Hôtellerie, etc.
  description: 'Description...',
  image: '/images/projects/mon-projet.svg',
  year: '2024',
  location: 'Paris, France',
  scope: ['LED', 'Économie d\'énergie']
}
```

---

## Test rapide

### Vérifier que tout fonctionne

1. **Les projets s'affichent**:
   - Aller sur `/projets`
   - Voir 6 cartes de projets

2. **Les filtres fonctionnent**:
   - Cliquer sur catégorie "Bureaux" → 2 projets
   - Chercher "LED" → plusieurs projets
   - Réinitialiser → tous les projets

3. **Le responsive fonctionne**:
   - Mobile: 1 colonne
   - Tablette: 2 colonnes
   - Desktop: 3 colonnes (section simple) ou 2 colonnes (avec filtres)

---

## Problèmes courants

### Les images ne s'affichent pas
- Vérifier que les fichiers SVG sont dans `/frontend/public/images/projects/`
- Les chemins dans le code doivent être `/images/projects/filename.svg` (sans `/public`)

### Erreur d'import
- Vérifier que `tsconfig.json` contient:
```json
"paths": {
  "@/*": ["./src/*"]
}
```

### Erreur TypeScript
- Vérifier que tous les fichiers dans `/frontend/src/types/` existent
- Lancer: `npm run build` pour voir les erreurs

---

## Documentation complète

Pour plus de détails, consultez:

1. **PROJECTS_SECTION_README.md** - Documentation complète
2. **INTEGRATION_GUIDE.md** - Guide d'intégration détaillé
3. **CHECKLIST_INTEGRATION.md** - Checklist de validation
4. **EXAMPLE_HOMEPAGE_INTEGRATION.tsx** - Exemples de code

---

## Commandes utiles

```bash
# Démarrer le serveur de développement
npm run dev

# Vérifier les erreurs TypeScript
npm run build

# Formater le code
npm run format  # si disponible

# Linter
npm run lint
```

---

## Support

Si vous avez des problèmes:

1. Vérifier que Node.js est à jour (v18+)
2. Supprimer `.next` et `node_modules`, puis `npm install`
3. Consulter la documentation complète
4. Vérifier les erreurs dans la console du navigateur

---

## C'est tout!

Vous êtes prêt à utiliser la section Projets. Les fichiers créés:

- ✅ 6 visuels SVG professionnels
- ✅ 5 composants React réutilisables
- ✅ 1 hook personnalisé pour la gestion
- ✅ Types TypeScript complets
- ✅ Données mockées pour 6 projets
- ✅ Page dédiée `/projets` fonctionnelle
- ✅ Documentation complète

**Temps total de mise en place: 5 minutes**

Bonne intégration! 🚀
