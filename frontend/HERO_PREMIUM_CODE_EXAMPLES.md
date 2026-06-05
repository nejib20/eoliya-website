# HeroPremium - Exemples de Code

## 🎯 Cas d'Usage Courants

### 1. Changer les Images

#### Exemple 1 : Utiliser vos propres images Unsplash

```tsx
// Dans HeroPremium.tsx, ligne 20-35
const HERO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069',
    alt: 'Bureau moderne avec vue sur ville',
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    alt: 'Gratte-ciel en verre',
  },
  {
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
    alt: 'Architecture moderne épurée',
  },
];
```

#### Exemple 2 : Images locales depuis /public

```tsx
const HERO_IMAGES = [
  {
    url: '/images/hero/building-modern.jpg',
    alt: 'Notre siège social',
  },
  {
    url: '/images/hero/project-office.jpg',
    alt: 'Projet bureau Paris',
  },
  {
    url: '/images/hero/industrial-site.jpg',
    alt: 'Site industriel rénové',
  },
];
```

#### Exemple 3 : Images depuis un CMS

```tsx
interface HeroPremiumProps {
  title: string;
  subtitle: string;
  images?: Array<{ url: string; alt: string }>;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export const HeroPremium: React.FC<HeroPremiumProps> = ({
  title,
  subtitle,
  images = HERO_IMAGES, // Fallback si pas d'images fournies
  primaryCta,
  secondaryCta,
}) => {
  // ... reste du code
};
```

### 2. Modifier les Stats

#### Exemple 1 : Changer les chiffres et textes

```tsx
// Ligne 160-220 environ, dans la section "Premium Stats"

{/* Stat 1 - Personnalisé */}
<div className="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-2xl">
  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <div className="relative z-10">
    <Building2 className="w-10 h-10 text-accent-400 mb-3 mx-auto" />
    <div className="text-4xl font-bold text-white mb-2">200+</div>
    <div className="text-sm text-gray-200 font-medium">Projets Livrés</div>
  </div>
</div>
```

#### Exemple 2 : Stats dynamiques depuis API

```tsx
// Ajouter au début du composant
const [stats, setStats] = useState({
  projects: 150,
  savings: 80,
  experience: 15,
});

useEffect(() => {
  // Fetch stats depuis API
  fetch('/api/company-stats')
    .then(res => res.json())
    .then(data => setStats(data))
    .catch(err => console.error('Stats error:', err));
}, []);

// Dans le render
<div className="text-4xl font-bold text-white mb-2">
  {stats.projects}+
</div>
```

#### Exemple 3 : Compteur animé

```bash
npm install react-countup
```

```tsx
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="text-4xl font-bold text-white mb-2">
        {isInView && (
          <CountUp
            end={150}
            duration={2.5}
            suffix="+"
            enableScrollSpy
          />
        )}
      </div>
    </div>
  );
};
```

### 3. Personnaliser les Couleurs

#### Exemple 1 : Theme Clair

```tsx
// Remplacer les overlays (ligne 80-85)
<div className="absolute inset-0 bg-gradient-to-br from-white/95 via-primary-50/90 to-white/85" />
<div className="absolute inset-0 bg-gradient-to-t from-gray-100/60 via-transparent to-transparent" />

// Adapter les textes
className="text-secondary-900" // Au lieu de text-white
className="text-gray-700"      // Au lieu de text-gray-100

// Stats cards
className="bg-secondary-900/10 border-secondary-900/20"
```

#### Exemple 2 : Theme Personnalisé

```tsx
// Créer un objet de configuration
const THEME = {
  overlay: {
    primary: 'from-indigo-900/95',
    secondary: 'via-purple-800/90',
    tertiary: 'to-pink-900/85',
  },
  text: {
    primary: 'text-white',
    secondary: 'text-indigo-100',
    accent: 'text-pink-400',
  },
  stats: {
    bg: 'bg-white/10',
    border: 'border-white/20',
    hover: 'hover:bg-white/15',
  },
};

// Utiliser dans le composant
<div className={`absolute inset-0 bg-gradient-to-br ${THEME.overlay.primary} ${THEME.overlay.secondary} ${THEME.overlay.tertiary}`} />
```

#### Exemple 3 : Props pour theme

```tsx
interface ThemeConfig {
  overlayColors: string;
  textColor: string;
  accentColor: string;
}

interface HeroPremiumProps {
  // ... props existantes
  theme?: ThemeConfig;
}

const defaultTheme: ThemeConfig = {
  overlayColors: 'from-secondary-900/95 via-secondary-800/90 to-primary-900/85',
  textColor: 'text-white',
  accentColor: 'text-accent-400',
};

export const HeroPremium: React.FC<HeroPremiumProps> = ({
  theme = defaultTheme,
  // ... autres props
}) => {
  return (
    <div className={`bg-gradient-to-br ${theme.overlayColors}`}>
      <h1 className={theme.textColor}>...</h1>
    </div>
  );
};
```

### 4. Modifier les Animations

#### Exemple 1 : Changer la vitesse de rotation

```tsx
// Ligne 55-60, dans useEffect
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, 8000); // Changé de 6000 à 8000ms (8 secondes)

  return () => clearInterval(interval);
}, []);
```

#### Exemple 2 : Désactiver l'auto-rotation

```tsx
// Option 1 : Commenter le useEffect
/*
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, 6000);
  return () => clearInterval(interval);
}, []);
*/

// Option 2 : Condition
const [autoRotate, setAutoRotate] = useState(true);

useEffect(() => {
  if (!autoRotate) return;

  const interval = setInterval(() => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, 6000);

  return () => clearInterval(interval);
}, [autoRotate]);
```

#### Exemple 3 : Ajuster le parallax

```tsx
// Ligne 52, modifier les valeurs de transformation
const y = useTransform(scrollY, [0, 500], [0, 250]); // Plus prononcé (150 → 250)
// ou
const y = useTransform(scrollY, [0, 500], [0, 80]);  // Plus subtil (150 → 80)

// Désactiver sur mobile
const isMobile = useMediaQuery('(max-width: 768px)');
const parallaxY = isMobile ? 0 : y;

// Dans le render
<motion.div style={{ y: parallaxY }}>
```

### 5. Ajouter des Boutons / Actions

#### Exemple 1 : Bouton pause/play

```tsx
// Ajouter state
const [isPaused, setIsPaused] = useState(false);

// Modifier useEffect
useEffect(() => {
  if (isPaused) return;
  // ... reste du code
}, [isPaused]);

// Ajouter bouton dans le render
<button
  onClick={() => setIsPaused(!isPaused)}
  className="absolute top-8 right-8 z-50 p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
  aria-label={isPaused ? 'Reprendre le diaporama' : 'Mettre en pause'}
>
  {isPaused ? (
    <Play className="w-5 h-5 text-white" />
  ) : (
    <Pause className="w-5 h-5 text-white" />
  )}
</button>
```

#### Exemple 2 : Navigation précédent/suivant

```tsx
const nextImage = () => {
  setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
};

const prevImage = () => {
  setCurrentImageIndex((prev) =>
    prev === 0 ? HERO_IMAGES.length - 1 : prev - 1
  );
};

// Dans le render
<div className="absolute bottom-32 left-8 z-20 flex gap-3">
  <button
    onClick={prevImage}
    className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full hover:bg-white/20"
    aria-label="Image précédente"
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </button>

  <button
    onClick={nextImage}
    className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full hover:bg-white/20"
    aria-label="Image suivante"
  >
    <ChevronRight className="w-6 h-6 text-white" />
  </button>
</div>
```

#### Exemple 3 : Modal de contact rapide

```tsx
const [showModal, setShowModal] = useState(false);

<button
  onClick={() => setShowModal(true)}
  className="fixed bottom-8 right-8 z-50 p-4 bg-primary-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform"
  aria-label="Contact rapide"
>
  <MessageCircle className="w-6 h-6" />
</button>

{showModal && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={() => setShowModal(false)}
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      className="bg-white rounded-2xl p-8 max-w-md w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="text-2xl font-bold mb-4">Contact Rapide</h3>
      {/* Formulaire ici */}
    </motion.div>
  </motion.div>
)}
```

### 6. Variations de Layout

#### Exemple 1 : Split Screen

```tsx
<section className="relative min-h-screen flex items-center overflow-hidden">
  <div className="container-custom grid lg:grid-cols-2 gap-12">
    {/* Colonne gauche : Contenu */}
    <div className="flex flex-col justify-center space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-6xl font-bold text-secondary-900">
          {title}
        </h1>
        <p className="text-xl text-gray-600 mt-6">
          {subtitle}
        </p>
      </motion.div>

      {/* CTAs */}
      <div className="flex gap-4">
        {/* Boutons */}
      </div>
    </div>

    {/* Colonne droite : Image */}
    <div className="relative h-[600px] rounded-2xl overflow-hidden">
      <Image
        src={HERO_IMAGES[currentImageIndex].url}
        alt={HERO_IMAGES[currentImageIndex].alt}
        fill
        className="object-cover"
      />
      {/* Overlay avec glassmorphism frame */}
      <div className="absolute inset-0 border-8 border-white/20 rounded-2xl" />
    </div>
  </div>
</section>
```

#### Exemple 2 : Centré Vertical avec Image de Fond

```tsx
<section className="relative min-h-screen flex flex-col justify-center items-center text-center">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src={HERO_IMAGES[currentImageIndex].url}
      alt={HERO_IMAGES[currentImageIndex].alt}
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl px-6">
    <h1 className="text-7xl font-bold text-white mb-6">
      {title}
    </h1>
    <p className="text-2xl text-white/90 mb-12">
      {subtitle}
    </p>
    {/* CTAs */}
  </div>
</section>
```

#### Exemple 3 : Card Flottante

```tsx
<section className="relative min-h-screen flex items-center">
  {/* Background */}
  <div className="absolute inset-0">
    <Image src={HERO_IMAGES[currentImageIndex].url} alt="" fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-secondary-900/80" />
  </div>

  {/* Card Flottante */}
  <div className="container-custom relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl"
    >
      <h1 className="text-6xl font-bold text-white mb-6">
        {title}
      </h1>
      <p className="text-xl text-white/90 mb-8">
        {subtitle}
      </p>
      {/* CTAs et Stats */}
    </motion.div>
  </div>
</section>
```

### 7. Effets Avancés

#### Exemple 1 : Particles Background

```bash
npm install react-tsparticles tsparticles
```

```tsx
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particlesInit = async (main: any) => {
  await loadFull(main);
};

// Dans le render, après les images
<Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    particles: {
      number: { value: 50 },
      color: { value: "#ffffff" },
      opacity: {
        value: 0.3,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        outModes: "out",
      },
    },
  }}
  className="absolute inset-0 z-[1]"
/>
```

#### Exemple 2 : Text Gradient Animé

```tsx
<h1
  className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-accent-400 animate-gradient"
  style={{
    backgroundSize: '200% auto',
  }}
>
  {title}
</h1>

// Dans globals.css ou tailwind.config.js
@keyframes gradient {
  0% { background-position: 0% center; }
  50% { background-position: 100% center; }
  100% { background-position: 0% center; }
}

.animate-gradient {
  animation: gradient 5s ease infinite;
}
```

#### Exemple 3 : Spotlight Effect au Survol

```tsx
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

const handleMouseMove = (e: React.MouseEvent) => {
  setMousePosition({
    x: e.clientX,
    y: e.clientY,
  });
};

<section
  onMouseMove={handleMouseMove}
  className="relative min-h-screen"
>
  {/* Spotlight gradient qui suit la souris */}
  <div
    className="absolute inset-0 opacity-30 transition-opacity duration-300 pointer-events-none"
    style={{
      background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,102,204,0.3), transparent 40%)`,
    }}
  />

  {/* Reste du contenu */}
</section>
```

### 8. Intégrations

#### Exemple 1 : Google Analytics Event Tracking

```tsx
const handleCtaClick = (label: string, href: string) => {
  // Track event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'hero_cta_click', {
      event_category: 'engagement',
      event_label: label,
      value: 1,
    });
  }

  // Navigate
  window.location.href = href;
};

<button onClick={() => handleCtaClick(primaryCta.label, primaryCta.href)}>
  {primaryCta.label}
</button>
```

#### Exemple 2 : Formulaire Modal Contact

```tsx
import { useState } from 'react';
import { X } from 'lucide-react';

const [showContactForm, setShowContactForm] = useState(false);

// Remplacer le lien CTA par un bouton modal
<button
  onClick={() => setShowContactForm(true)}
  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold text-lg rounded-xl"
>
  {primaryCta.label}
  <ArrowRight className="w-5 h-5" />
</button>

{/* Modal */}
{showContactForm && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={() => setShowContactForm(false)}
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="bg-white rounded-2xl p-8 max-w-lg w-full relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowContactForm(false)}
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <h3 className="text-2xl font-bold text-secondary-900 mb-6">
        Parlons de votre projet
      </h3>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Nom complet"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <textarea
          placeholder="Décrivez votre projet"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="w-full py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
        >
          Envoyer
        </button>
      </form>
    </motion.div>
  </motion.div>
)}
```

#### Exemple 3 : Calendly Integration

```tsx
import { Calendar } from 'lucide-react';

<button
  onClick={() => {
    // Ouvrir Calendly popup
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/eoliya/consultation'
      });
    }
  }}
  className="inline-flex items-center gap-3 px-10 py-5 backdrop-blur-xl bg-white/10 text-white"
>
  <Calendar className="w-5 h-5" />
  Réserver un appel
</button>

// Dans _app.tsx ou layout.tsx
<Script src="https://assets.calendly.com/assets/external/widget.js" />
```

## 📝 Notes Importantes

### Performance
- Toujours utiliser `next/image` pour les images
- Limiter le nombre d'animations simultanées
- Utiliser `will-change` avec parcimonie
- Préférer `transform` et `opacity` pour les animations

### Accessibilité
- Ajouter `aria-label` sur tous les boutons d'action
- Utiliser des alt texts descriptifs
- Maintenir un contraste suffisant (WCAG AA minimum)
- Tester avec un lecteur d'écran

### SEO
- H1 unique et descriptif
- Alt texts sur toutes les images
- Temps de chargement optimal (< 3s)
- Structure sémantique HTML

---

**Besoin d'aide ?** Consultez la documentation complète dans les autres fichiers README.
