# Guide de Démarrage Rapide - Section Projets

## 🚀 Lancement Rapide

### 1. Démarrer le serveur de développement
```bash
cd /Users/Nejib/eoliya-website/frontend
npm run dev
```

### 2. Accéder aux pages
- **Page d'accueil** : http://localhost:3000
  (Scroll jusqu'à la section Projets)

- **Page Projets dédiée** : http://localhost:3000/projets
  (Galerie complète)

- **Page Démo** : http://localhost:3000/demo-projects
  (Tests des variants)

---

## 📸 Captures d'Écran (à venir)

### Vue Desktop
```
┌─────────────────────────────────────────────────────────┐
│  [Tous] [Tertiaire] [Hôtellerie] [Commerce] [...]      │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │ Veepee   │  │ Barrière │  │ Conseil  │             │
│  │          │  │          │  │ d'État   │             │
│  │ -60%     │  │ Luxe     │  │ Histor.  │             │
│  └──────────┘  └──────────┘  └──────────┘             │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │ Leclerc  │  │ Dentsu   │  │ Azureva  │             │
│  │ -55%     │  │ Design   │  │ 120 ch.  │             │
│  └──────────┘  └──────────┘  └──────────┘             │
│                                                         │
│  [250+ projets] [30+ clients] [60% éco] [15+ ans]      │
└─────────────────────────────────────────────────────────┘
```

### Modal Ouvert
```
┌─────────────────────────────────────────────────────────┐
│ [X]                                                     │
│ ┌─────────────────┬─────────────────────────────────┐  │
│ │                 │  VEEPEE                         │  │
│ │   Image         │  Siège Veepee Saint-Denis       │  │
│ │   Projet        │                                 │  │
│ │                 │  Description complète...        │  │
│ │   [Tertiaire]   │                                 │  │
│ │   [-60%]        │  Tags: LED, Smart, etc.         │  │
│ │                 │                                 │  │
│ │                 │  ✓ Résultats clés               │  │
│ │                 │  ✓ Conformité normes            │  │
│ │                 │                                 │  │
│ │                 │  [Parlons de votre projet →]    │  │
│ └─────────────────┴─────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Interactions Utilisateur

### Hover sur Carte
1. **Image** : Zoom progressif (scale 110%)
2. **Overlay** : Assombrit l'image
3. **Description** : Apparaît en fade
4. **Tags** : S'affichent un par un
5. **Bouton "Voir plus"** : Change de couleur

### Clic sur Carte
1. Modal s'ouvre avec animation spring
2. Backdrop blur apparaît
3. Scroll du contenu si nécessaire
4. Bouton [X] pour fermer

### Filtres
1. Clic sur catégorie
2. Animation des cartes (exit → enter)
3. Compteur mis à jour
4. Layout réorganisé

---

## 🎯 Points d'Entrée Code

### Modifier les Projets
```bash
Fichier: /frontend/src/components/sections/ProjectsGallery.tsx
Ligne: ~15-85 (const projects)
```

### Modifier les Couleurs
```bash
Fichier: /frontend/tailwind.config.ts
Ligne: ~11-47 (colors section)
```

### Modifier les Animations
```bash
Fichiers:
- ProjectsGallery.tsx (ligne ~200+)
- ProjectCardPremium.tsx (ligne ~50+)
- ProjectModal.tsx (ligne ~30+)
```

---

## 📦 Commandes Utiles

### Développement
```bash
npm run dev          # Démarre le serveur (port 3000)
npm run build        # Compile en production
npm run start        # Lance le build en production
npm run lint         # Vérifie le code
```

### Vérifications
```bash
# Tester le build
npm run build && echo "✅ Build OK"

# Vérifier les types
npx tsc --noEmit

# Formater le code
npx prettier --write "src/**/*.{ts,tsx}"
```

---

## 🐛 Dépannage Express

### "Module not found"
```bash
npm install
npm run dev
```

### Images ne chargent pas
- Vérifier connexion internet
- URLs Unsplash correctes
- next.config.js autorise unsplash.com

### Animations saccadées
- Ouvrir DevTools
- Performance → FPS meter
- Réduire durée transitions si < 30 FPS

### TypeScript erreurs
```bash
npm run build
# Lire les erreurs TypeScript
# Corriger les types
```

---

## 🎓 Tutoriel Modification Rapide

### Ajouter un Nouveau Projet (5 min)

1. **Trouver une image Unsplash**
   ```
   https://unsplash.com/s/photos/office-building
   → Clic droit sur image → Copier URL
   ```

2. **Ouvrir ProjectsGallery.tsx**
   ```bash
   code /Users/Nejib/eoliya-website/frontend/src/components/sections/ProjectsGallery.tsx
   ```

3. **Ajouter dans const projects (ligne ~15)**
   ```tsx
   {
     id: 'mon-nouveau-projet',
     title: 'Nouveau Projet',
     client: 'Client XYZ',
     category: 'Tertiaire',
     description: 'Description détaillée du projet...',
     image: 'https://images.unsplash.com/photo-VOTRE_ID?q=80&w=2000',
     year: '2024',
     location: 'Paris, France',
     surface: '2000 m²',
     achievement: '-45% énergie',
     tags: ['LED', 'Smart', 'Économie']
   },
   ```

4. **Sauvegarder et voir le résultat**
   ```
   Le serveur dev recharge automatiquement
   → Rafraîchir la page
   → Nouveau projet apparaît
   ```

### Changer une Couleur (2 min)

1. **Ouvrir tailwind.config.ts**
   ```bash
   code /Users/Nejib/eoliya-website/frontend/tailwind.config.ts
   ```

2. **Modifier primary-500 (ligne ~18)**
   ```typescript
   primary: {
     500: '#FF0000', // Rouge au lieu de bleu
   }
   ```

3. **Sauvegarder**
   ```
   Tous les éléments bleus deviennent rouges
   → Filtres actifs
   → Badges
   → CTA buttons
   ```

### Modifier une Animation (3 min)

1. **Ouvrir ProjectsGallery.tsx**

2. **Trouver motion.div de la carte (ligne ~230)**
   ```tsx
   <motion.div
     initial={{ opacity: 0, scale: 0.9 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.4 }} // ← Changer ici
   >
   ```

3. **Modifier la durée**
   ```tsx
   transition={{ duration: 1.2 }} // Plus lent
   // ou
   transition={{ duration: 0.2 }} // Plus rapide
   ```

---

## 📊 Checklist Avant Production

- [ ] Toutes les images chargent correctement
- [ ] Filtres fonctionnent (tester chaque catégorie)
- [ ] Modal s'ouvre et se ferme proprement
- [ ] Hover effects fluides (pas de lag)
- [ ] Responsive OK (mobile/tablet/desktop)
- [ ] Textes sans fautes
- [ ] Links CTA fonctionnels (/contact)
- [ ] Build sans erreurs (`npm run build`)
- [ ] Lighthouse score > 80
- [ ] Accessibilité (navigation clavier)

---

## 🎉 Tout Fonctionne !

Si vous voyez :
- ✅ 6 projets affichés
- ✅ Filtres fonctionnels
- ✅ Hover effects
- ✅ Modal qui s'ouvre
- ✅ Animations fluides
- ✅ Design premium

**→ Vous êtes prêt pour la production !**

---

## 📞 Aide Rapide

### Framer Motion
```tsx
// Animation simple
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>

// Animation hover
<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>

// AnimatePresence (pour exit)
<AnimatePresence>
  {show && <motion.div exit={{ opacity: 0 }} />}
</AnimatePresence>
```

### Next.js Image
```tsx
// Image avec fill
<Image
  src="url"
  alt="text"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Image avec dimensions
<Image
  src="url"
  alt="text"
  width={800}
  height={600}
/>
```

### Tailwind Classes
```css
/* Hover */
hover:bg-blue-500
hover:scale-110
hover:shadow-xl

/* Responsive */
md:grid-cols-2     /* 2 colonnes sur tablet */
lg:grid-cols-3     /* 3 colonnes sur desktop */

/* Animations */
transition-all duration-300
transform hover:-translate-y-1
```

---

## 🚀 Lancer Maintenant

```bash
cd /Users/Nejib/eoliya-website/frontend
npm run dev
```

Puis ouvrir : **http://localhost:3000/projets**

**Enjoy ! 🎨**
