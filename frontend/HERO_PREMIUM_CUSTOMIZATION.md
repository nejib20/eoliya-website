# Guide de Personnalisation - HeroPremium

## 🎨 Variations de Style

### Variation 1 : Mode Clair (Light Mode)

Pour créer une version lumineuse du hero :

```tsx
// Remplacer les overlays dans HeroPremium.tsx
<div className="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/90 to-primary-50/85" />
<div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

// Adapter les couleurs de texte
className="text-secondary-900" // Au lieu de text-white
className="text-gray-700"      // Au lieu de text-gray-100
```

### Variation 2 : Overlay Coloré Brand

Pour un overlay aux couleurs de la marque :

```tsx
// Overlay avec gradient de marque
<div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-accent-500/80 to-secondary-700/90" />

// Stats avec couleurs inversées
className="bg-secondary-900/10 border-secondary-900/20"
```

### Variation 3 : Split Screen

Version avec contenu à gauche, visuel à droite :

```tsx
<section className="relative min-h-screen flex items-center">
  <div className="container-custom grid lg:grid-cols-2 gap-12">
    {/* Colonne gauche : Contenu */}
    <div className="flex flex-col justify-center">
      {/* Badge, Titre, Subtitle, CTAs */}
    </div>

    {/* Colonne droite : Images */}
    <div className="relative">
      {/* Image avec glassmorphism frame */}
    </div>
  </div>
</section>
```

## 🖼️ Personnalisation des Images

### Option 1 : Images Locales

Si vous préférez utiliser des images locales :

```tsx
// Placer les images dans /public/images/hero/
const HERO_IMAGES = [
  {
    url: '/images/hero/building-1.jpg',
    alt: 'Description',
  },
  // ...
];

// Dans le composant
<Image
  src={image.url}
  alt={image.alt}
  fill
  priority={index === 0}
  quality={95}
  className="object-cover"
/>
```

### Option 2 : CMS / Strapi

Pour intégrer avec un CMS :

```tsx
interface HeroPremiumProps {
  // ... props existantes
  images?: Array<{
    url: string;
    alt: string;
  }>;
}

// Dans le composant
const images = props.images || HERO_IMAGES;
```

### Option 3 : Video Background

Pour un fond vidéo au lieu d'images :

```tsx
<div className="absolute inset-0 z-0">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/videos/hero-bg.mp4" type="video/mp4" />
  </video>
  {/* Overlays restent identiques */}
</div>
```

## 🎭 Animations Personnalisées

### Animation 1 : Typewriter Effect

Pour un effet machine à écrire sur le titre :

```tsx
import { TypeAnimation } from 'react-type-animation';

<TypeAnimation
  sequence={[
    "L'Excellence en Ingénierie",
    2000,
    "L'Innovation au Service du Bâtiment",
    2000,
    "Des Solutions sur Mesure",
    2000,
  ]}
  wrapper="h1"
  speed={50}
  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white"
  repeat={Infinity}
/>
```

### Animation 2 : Particles Background

Pour ajouter des particules animées :

```bash
npm install react-tsparticles tsparticles
```

```tsx
import Particles from "react-tsparticles";

<Particles
  options={{
    particles: {
      number: { value: 50 },
      color: { value: "#0066CC" },
      opacity: { value: 0.3 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 1,
      },
    },
  }}
/>
```

### Animation 3 : Reveal on Scroll

Pour révéler les éléments au scroll :

```tsx
import { useInView } from 'framer-motion';

const ref = useRef(null);
const isInView = useInView(ref, { once: true });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
>
  {/* Contenu */}
</motion.div>
```

## 📊 Stats Personnalisables

### Stats Dynamiques avec Animation de Compteur

```bash
npm install react-countup
```

```tsx
import CountUp from 'react-countup';

<div className="text-4xl font-bold text-white mb-2">
  <CountUp
    end={150}
    duration={2.5}
    suffix="+"
    enableScrollSpy
    scrollSpyOnce
  />
</div>
```

### Stats depuis API

```tsx
interface Stats {
  projects: number;
  savings: number;
  experience: number;
}

const [stats, setStats] = useState<Stats | null>(null);

useEffect(() => {
  fetch('/api/stats')
    .then(res => res.json())
    .then(data => setStats(data));
}, []);

// Dans le render
{stats && (
  <div className="text-4xl">{stats.projects}+</div>
)}
```

### Stats avec Graphiques

```bash
npm install recharts
```

```tsx
import { LineChart, Line } from 'recharts';

<div className="mt-4">
  <LineChart width={200} height={60} data={data}>
    <Line type="monotone" dataKey="value" stroke="#0066CC" strokeWidth={2} />
  </LineChart>
</div>
```

## 🎨 Thèmes Alternatifs

### Thème 1 : Tech/Startup

```tsx
// Couleurs
className="from-indigo-600/90 via-purple-600/85 to-pink-600/90"

// Font
className="font-mono" // Sur le badge
className="tracking-tight" // Sur le titre

// Icônes
import { Zap, Rocket, TrendingUp } from 'lucide-react';
```

### Thème 2 : Luxe/Immobilier

```tsx
// Couleurs
className="from-stone-900/95 via-amber-900/90 to-stone-800/95"

// Font weight
className="font-light" // Titre plus léger
className="tracking-widest" // Espacement large

// Accent doré
className="text-amber-400"
```

### Thème 3 : Eco/Durable

```tsx
// Couleurs
className="from-emerald-900/90 via-teal-800/85 to-green-900/90"

// Icônes nature
import { Leaf, Sun, Wind } from 'lucide-react';

// Stats eco-friendly
"85% Économie Énergie"
"100% Renouvelable"
"Carbon Neutral"
```

## 🔧 Fonctionnalités Avancées

### Feature 1 : Mode Sombre/Clair Toggle

```tsx
const [isDark, setIsDark] = useState(true);

<button
  onClick={() => setIsDark(!isDark)}
  className="absolute top-8 right-8 z-50"
>
  {isDark ? <Sun /> : <Moon />}
</button>

<div className={isDark ? "dark-overlay" : "light-overlay"}>
  {/* Contenu */}
</div>
```

### Feature 2 : Pause Auto-rotation

```tsx
const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, 6000);

  return () => clearInterval(interval);
}, [isPaused]);

<button onClick={() => setIsPaused(!isPaused)}>
  {isPaused ? <Play /> : <Pause />}
</button>
```

### Feature 3 : Fullscreen Toggle

```tsx
const handleFullscreen = () => {
  const elem = document.documentElement;
  if (!document.fullscreenElement) {
    elem.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

<button onClick={handleFullscreen}>
  <Maximize className="w-5 h-5" />
</button>
```

## 📱 Optimisations Mobile

### Mobile-First Adjustments

```tsx
// Réduire la hauteur sur mobile
className="min-h-[80vh] md:min-h-screen"

// Simplifier les overlays sur mobile
<div className="hidden md:block">
  {/* Grid pattern - desktop only */}
</div>

// Désactiver parallax sur mobile
const shouldUseParallax = useMediaQuery('(min-width: 768px)');
style={{ y: shouldUseParallax ? y : 0 }}

// Taille de police mobile-optimized
className="text-4xl sm:text-5xl md:text-6xl"
```

### Touch Gestures

```bash
npm install @use-gesture/react
```

```tsx
import { useSwipeable } from '@use-gesture/react';

const handlers = useSwipeable({
  onSwipedLeft: () => nextImage(),
  onSwipedRight: () => prevImage(),
});

<div {...handlers}>
  {/* Hero content */}
</div>
```

## 🎬 Transitions de Page

### Page Transition avec Framer Motion

```tsx
// app/layout.tsx
import { AnimatePresence } from 'framer-motion';

<AnimatePresence mode="wait">
  {children}
</AnimatePresence>

// app/page.tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
>
  <HeroPremium {...props} />
</motion.div>
```

### Scroll Snap

```tsx
// Dans la section
className="snap-start snap-always"

// Dans le parent (body ou main)
className="snap-y snap-mandatory overflow-y-scroll h-screen"
```

## 🌐 Internationalisation (i18n)

### Avec next-intl

```tsx
import { useTranslations } from 'next-intl';

const HeroPremium = () => {
  const t = useTranslations('Hero');

  return (
    <h1>{t('title')}</h1>
    <p>{t('subtitle')}</p>
  );
};

// messages/fr.json
{
  "Hero": {
    "title": "L'Excellence en Ingénierie",
    "subtitle": "Bureau d'études premium..."
  }
}
```

## 📈 Analytics & Tracking

### Track User Interactions

```tsx
import { trackEvent } from '@/lib/analytics';

<button
  onClick={() => {
    trackEvent('hero_cta_click', {
      label: primaryCta.label,
      position: 'primary',
    });
    window.location.href = primaryCta.href;
  }}
>
  {primaryCta.label}
</button>
```

### Heatmap Integration

```tsx
// Avec Hotjar
useEffect(() => {
  if (window.hj) {
    window.hj('event', 'hero_view');
  }
}, []);
```

## 🎯 A/B Testing

### Multiple Variants

```tsx
const variants = {
  A: {
    title: "L'Excellence en Ingénierie",
    color: "from-primary-500",
  },
  B: {
    title: "Innovation et Performance",
    color: "from-accent-500",
  },
};

const variant = useABTest('hero_test', ['A', 'B']);
const config = variants[variant];

<motion.h1 className={config.color}>
  {config.title}
</motion.h1>
```

## 🔒 Accessibilité Améliorée

### Focus Management

```tsx
// Skip link pour clavier
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white px-4 py-2 rounded"
>
  Aller au contenu principal
</a>

// Focus visible sur navigation dots
className="focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
```

### Screen Reader Announcements

```tsx
const [announcement, setAnnouncement] = useState('');

useEffect(() => {
  setAnnouncement(`Image ${currentImageIndex + 1} sur ${HERO_IMAGES.length}`);
}, [currentImageIndex]);

<div
  role="status"
  aria-live="polite"
  className="sr-only"
>
  {announcement}
</div>
```

## 💡 Tips & Best Practices

### Performance

1. **Image Optimization**
   - Utiliser WebP avec fallback
   - Lazy load images non-critiques
   - Preconnect aux domaines externes

2. **Animation Performance**
   - Utiliser `transform` et `opacity` uniquement
   - Éviter `will-change` sauf si nécessaire
   - Limiter le nombre d'animations simultanées

3. **Bundle Size**
   - Tree-shake Lucide icons
   - Dynamic import pour features optionnelles
   - Utiliser `next/dynamic` avec `ssr: false`

### SEO

```tsx
// app/page.tsx
export const metadata = {
  title: "EOLIYA Ingénierie - Excellence en Ingénierie du Bâtiment",
  description: "Bureau d'études premium spécialisé...",
  openGraph: {
    images: ['/og-image.jpg'],
  },
};
```

### Maintenance

1. Documenter tous les changements
2. Versionner les variations
3. Tester sur vrais devices
4. Monitorer Core Web Vitals
5. Collecter feedback utilisateurs

---

**N'oubliez pas** : Toujours tester les modifications sur différents navigateurs et devices avant de déployer en production.
