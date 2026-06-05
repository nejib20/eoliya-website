# Guide Visuel - HeroPremium Component

## 🎨 Design System

### Palette de Couleurs

#### Couleurs Principales
```css
/* Primary - Bleu Corporate */
--primary-500: #0066CC
--primary-600: #0052A3
--primary-700: #003D7A

/* Secondary - Bleu Foncé Premium */
--secondary-800: #1E3A5F
--secondary-900: #0F1C2E

/* Accent - Or/Orange Premium */
--accent-400: #F5A623
--accent-500: #E89B1A
```

#### Overlays & Transparences
```css
/* Multi-layer approach pour profondeur */
Layer 1: from-secondary-900/95 via-secondary-800/90 to-primary-900/85
Layer 2: from-black/60 (vignette top-to-bottom)
Layer 3: radial-gradient (focus central)
```

### Typographie

#### Titre Principal (H1)
- **Tailles** : `5xl → 6xl → 7xl → 8xl` (responsive)
- **Font-weight** : Bold (700)
- **Line-height** : 1.1 (extra serré)
- **Letter-spacing** : Tight
- **Color** : White
- **Text-shadow** :
  - `0 4px 20px rgba(0,0,0,0.5)` - Profondeur
  - `0 0 40px rgba(0,102,204,0.3)` - Glow bleu subtil

#### Sous-titre
- **Tailles** : `xl → 2xl → 3xl`
- **Font-weight** : Light (300)
- **Color** : gray-100
- **Text-shadow** : `0 2px 10px rgba(0,0,0,0.5)`

#### Badge Premium
- **Size** : text-sm
- **Transform** : uppercase
- **Letter-spacing** : wide
- **Font-weight** : semibold (600)

## 📐 Layout Structure

```
┌─────────────────────────────────────────┐
│  Background Image (Parallax)            │
│  ├─ Multi-layer Overlay                 │
│  └─ SVG Grid Pattern                    │
├─────────────────────────────────────────┤
│                                         │
│  [✨ Badge Premium]                     │
│                                         │
│  TITRE PRINCIPAL                        │
│  ULTRA-LARGE                            │
│                                         │
│  Sous-titre élégant et concis           │
│  sur plusieurs lignes                   │
│                                         │
│  [Bouton Primary]  [Bouton Secondary]   │
│                                         │
│  ┌─────┐  ┌─────┐  ┌─────┐            │
│  │Stat1│  │Stat2│  │Stat3│            │
│  └─────┘  └─────┘  └─────┘            │
│                                         │
│              [Découvrir ↓]              │
│              • • •  (dots)              │
└─────────────────────────────────────────┘
```

## 🎭 Effets Visuels

### 1. Glassmorphism (Stats Cards)

```css
backdrop-blur-xl          /* Flou du fond */
bg-white/10              /* Fond semi-transparent */
border border-white/20   /* Bordure subtile */
rounded-2xl              /* Coins arrondis généreux */
shadow-2xl               /* Ombre portée profonde */
```

**Hover Effect** :
```css
hover:bg-white/15        /* Augmentation opacité */
hover:scale-105          /* Zoom léger */
gradient-overlay         /* Overlay coloré (from-primary/20) */
```

### 2. Parallax Scroll

```typescript
// Framer Motion Transforms
const y = useTransform(scrollY, [0, 500], [0, 150])
const opacity = useTransform(scrollY, [0, 300], [1, 0])
```

**Résultat** :
- L'image se déplace plus lentement que le contenu (depth)
- Le contenu disparait progressivement au scroll
- Crée une sensation de profondeur 3D

### 3. Image Transitions

```typescript
// Transition douce entre images
animate={{
  opacity: currentImageIndex === index ? 1 : 0,
  scale: currentImageIndex === index ? 1 : 1.1,
}}
transition={{
  duration: 1.5,
  ease: 'easeInOut'
}}
```

**Ken Burns Effect** : L'image non-active est légèrement zoomée (scale: 1.1)

### 4. Button Animations

#### Primary Button
```css
/* Base */
bg-gradient-to-r from-primary-500 to-primary-600
shadow-2xl hover:shadow-primary-500/50

/* Hover */
scale-105
gradient-overlay (600→700)
icon-translate-x
```

#### Secondary Button
```css
/* Base */
backdrop-blur-xl bg-white/10
border-2 border-white/30

/* Hover */
bg-white/20
border-white/50
scale-105
```

## 🌟 Animations Timeline

```
0.0s  │ Page Load
0.2s  │ ├─ Badge appears (fade + slide up)
0.4s  │ ├─ Title appears (fade + slide up)
0.6s  │ ├─ Subtitle appears (fade + slide up)
0.8s  │ ├─ CTA Buttons appear (fade + slide up)
1.0s  │ ├─ Stats cards appear (fade + slide up)
2.0s  │ └─ Scroll indicator appears (fade + slide up)

Loop  │ Image rotation (every 6 seconds)
Loop  │ Stats cards hover effects
Loop  │ Scroll indicator bounce animation
```

## 📱 Responsive Breakpoints

### Mobile (< 640px)
- Titre : text-5xl
- Stats : 1 colonne
- CTA : Stack vertical
- Padding réduit

### Tablet (640px - 1024px)
- Titre : text-6xl
- Stats : Commence à grid 3 cols
- CTA : Horizontal si espace

### Desktop (1024px+)
- Titre : text-7xl
- Stats : 3 colonnes pleine largeur
- Espacement généreux

### Large Desktop (1280px+)
- Titre : text-8xl
- Container max-width élargi

## 🎬 Micro-interactions

### Hover States

1. **Buttons**
   - Scale: 1 → 1.05
   - Shadow: expand + color glow
   - Icon: translate
   - Duration: 300ms

2. **Stats Cards**
   - Scale: 1 → 1.05
   - Background: white/10 → white/15
   - Overlay: opacity 0 → 1
   - Duration: 300ms

3. **Image Dots**
   - Width: 2.5 → 10 (active)
   - Opacity: 0.4 → 1
   - Duration: 300ms

### Active States

- **Current Image Dot**: white + large
- **Other Dots**: white/40 + small
- **Smooth transitions** entre tous les états

## 🖼️ Images Unsplash

### Configuration Optimale

```
Base URL: https://images.unsplash.com/photo-{ID}
Parameters:
  ?q=80              # Quality (équilibre taille/qualité)
  &w=2070            # Width optimale pour HD
  &auto=format       # WebP si supporté
  &fit=crop          # Crop intelligent
```

### Images Sélectionnées

1. **Photo-1** : `1486406146926-c627a92ad1ab`
   - Gratte-ciel modernes vitrés
   - Perspective vers le haut
   - Tons bleus/argentés

2. **Photo-2** : `1497366216548-37526070297c`
   - Bureau moderne
   - Lumière naturelle
   - Ambiance professionnelle

3. **Photo-3** : `1545324418-cc1a3fa10c00`
   - Architecture contemporaine
   - Lignes épurées
   - Contraste béton/verre

### Critères de Sélection

✅ Haute résolution (2000px+)
✅ Architecture moderne
✅ Qualité professionnelle
✅ Contraste suffisant pour texte blanc
✅ Composition équilibrée
✅ Pas de watermarks
✅ Licence Unsplash compatible

## 🔍 Détails Techniques

### SVG Grid Pattern

```xml
<pattern id="premium-grid" width="60" height="60">
  <path
    d="M 60 0 L 0 0 0 60"
    stroke="white"
    stroke-width="0.5"
  />
</pattern>
```
- Opacité : 10%
- Espacement : 60px
- Couleur : white
- Position : absolute z-[1]

### Scroll Indicator

```
┌─────────┐
│    ↓    │  ← "Découvrir" text
│  ┌───┐  │
│  │ • │  │  ← Animated dot
│  └───┘  │
│    ˅    │  ← ChevronDown icon
└─────────┘
```

**Animation** :
- Dot : Y-axis bounce (0 → 16 → 0)
- Container : Opacity pulse
- Duration : 2s infinite

## 🎨 Variants de Style

### Option 1 : Current (Dark Overlay)
- Overlay foncé (90% opacity)
- Texte blanc
- Contraste maximum

### Option 2 : Light Overlay (alternative)
```css
from-white/70 via-white/60 to-primary-50/80
```
- Overlay clair
- Texte sombre
- Ambiance douce

### Option 3 : Gradient Overlay (alternative)
```css
from-primary-500/80 to-accent-500/60
```
- Overlay coloré
- Texte blanc
- Brand-forward

## 📊 Performance Tips

1. **Images**
   - ✅ next/image avec priority sur première image
   - ✅ Lazy load sur images suivantes
   - ✅ Quality 95 (premium mais optimisé)
   - ✅ Sizes attribute responsive

2. **Animations**
   - ✅ GPU-accelerated (transform, opacity)
   - ❌ Éviter : width, height, top, left
   - ✅ will-change: transform (si nécessaire)
   - ✅ useTransform pour parallax (pas de re-render)

3. **Rendering**
   - ✅ 'use client' seulement où nécessaire
   - ✅ useMemo pour calculs lourds
   - ✅ useCallback pour event handlers
   - ✅ CSS animations où possible

## ✨ Touches Premium

1. **Text Shadows Multiples** : Profondeur + Glow
2. **Border Gradients** : Via pseudo-elements
3. **Backdrop Blur** : Effet verre moderne
4. **Smooth Transitions** : 300-1000ms
5. **Easing Curves** : easeInOut, cubic-bezier
6. **Icon Animations** : Translation, rotation subtiles
7. **Scale Effects** : Zoom 1.05 au hover
8. **Shadow Expansion** : Augmentation au hover
9. **Opacity Variations** : 10, 15, 20, 40% (cohérents)
10. **Gradient Overlays** : Layering sophistiqué

---

**Ce guide est vivant** : Mettez-le à jour lors de modifications design
**Pour questions** : Référez-vous au code source avec commentaires détaillés
