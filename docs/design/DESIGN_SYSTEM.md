# DESIGN SYSTEM - EOLIYA INGENIERIE

## Vue d'ensemble

Ce design system définit l'identité visuelle et les composants du site EOLIYA Ingénierie.
Il garantit cohérence et professionnalisme à travers toutes les pages.

**Auteur:** Nejib Aloui
**Version:** 1.0
**Dernière mise à jour:** Mai 2026

---

## 1. PALETTE DE COULEURS

### Couleurs principales

```css
:root {
  /* Primary - Bleu professionnel */
  --color-primary-50: #e6f0fa;
  --color-primary-100: #cce1f5;
  --color-primary-200: #99c3eb;
  --color-primary-300: #66a5e1;
  --color-primary-400: #3387d7;
  --color-primary-500: #0066CC;  /* Main */
  --color-primary-600: #0052a3;
  --color-primary-700: #003d7a;
  --color-primary-800: #002952;
  --color-primary-900: #001429;

  /* Secondary - Gris anthracite */
  --color-secondary-50: #f5f5f6;
  --color-secondary-100: #ebebed;
  --color-secondary-200: #d7d7db;
  --color-secondary-300: #b4b4bc;
  --color-secondary-400: #8e8e99;
  --color-secondary-500: #2D3748;  /* Main */
  --color-secondary-600: #252d3b;
  --color-secondary-700: #1d232e;
  --color-secondary-800: #151921;
  --color-secondary-900: #0d0f14;

  /* Accent - Orange énergie */
  --color-accent-50: #fff4e6;
  --color-accent-100: #ffe9cc;
  --color-accent-200: #ffd399;
  --color-accent-300: #ffbd66;
  --color-accent-400: #ffa733;
  --color-accent-500: #FF8C00;  /* Main */
  --color-accent-600: #cc7000;
  --color-accent-700: #995400;
  --color-accent-800: #663800;
  --color-accent-900: #331c00;

  /* Neutrals */
  --color-white: #FFFFFF;
  --color-gray-50: #F7FAFC;
  --color-gray-100: #EDF2F7;
  --color-gray-200: #E2E8F0;
  --color-gray-300: #CBD5E0;
  --color-gray-400: #A0AEC0;
  --color-gray-500: #718096;
  --color-gray-600: #4A5568;
  --color-gray-700: #2D3748;
  --color-gray-800: #1A202C;
  --color-gray-900: #171923;
  --color-black: #000000;

  /* Status */
  --color-success: #38A169;
  --color-warning: #D69E2E;
  --color-error: #E53E3E;
  --color-info: #3182CE;
}
```

### Utilisation des couleurs

| Élément | Couleur | Code |
|---------|---------|------|
| Titres principaux | Secondary 500 | #2D3748 |
| Corps de texte | Secondary 600 | #4A5568 |
| Liens | Primary 500 | #0066CC |
| Liens hover | Primary 600 | #0052a3 |
| Boutons primaires | Primary 500 | #0066CC |
| Boutons accent | Accent 500 | #FF8C00 |
| Fond principal | White | #FFFFFF |
| Fond alternatif | Gray 50 | #F7FAFC |
| Bordures | Gray 200 | #E2E8F0 |

---

## 2. TYPOGRAPHIE

### Police principale

**Inter** - Police sans-serif moderne et lisible

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

### Échelle typographique

```css
:root {
  /* Font sizes */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  --font-size-6xl: 3.75rem;   /* 60px */
  --font-size-7xl: 4.5rem;    /* 72px */

  /* Font weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;

  /* Line heights */
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;

  /* Letter spacing */
  --letter-spacing-tighter: -0.05em;
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;
}
```

### Styles de texte

| Style | Taille | Poids | Line-height | Utilisation |
|-------|--------|-------|-------------|-------------|
| Display | 72px | 800 | 1.1 | Hero sections |
| H1 | 48px | 700 | 1.25 | Titres de page |
| H2 | 36px | 700 | 1.3 | Sections principales |
| H3 | 30px | 600 | 1.4 | Sous-sections |
| H4 | 24px | 600 | 1.4 | Titres de cartes |
| H5 | 20px | 600 | 1.5 | Sous-titres |
| H6 | 18px | 600 | 1.5 | Labels |
| Body Large | 18px | 400 | 1.75 | Intros |
| Body | 16px | 400 | 1.75 | Texte courant |
| Body Small | 14px | 400 | 1.6 | Notes |
| Caption | 12px | 400 | 1.5 | Légendes |

---

## 3. ESPACEMENTS

### Échelle d'espacement

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

### Conteneurs

```css
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;

  --container-padding: 1.5rem;
  --container-padding-lg: 2rem;
}
```

---

## 4. COMPOSANTS UI

### 4.1 Boutons

```css
/* Base button */
.btn {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

/* Primary button */
.btn-primary {
  background: var(--color-primary-500);
  color: var(--color-white);
  border: none;
}

.btn-primary:hover {
  background: var(--color-primary-600);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

/* Secondary button */
.btn-secondary {
  background: transparent;
  color: var(--color-primary-500);
  border: 2px solid var(--color-primary-500);
}

.btn-secondary:hover {
  background: var(--color-primary-50);
}

/* Accent button */
.btn-accent {
  background: var(--color-accent-500);
  color: var(--color-white);
  border: none;
}

.btn-accent:hover {
  background: var(--color-accent-600);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
}

/* Button sizes */
.btn-sm { padding: 0.5rem 1rem; font-size: var(--font-size-sm); }
.btn-lg { padding: 1rem 2rem; font-size: var(--font-size-lg); }
```

### 4.2 Cards

```css
.card {
  background: var(--color-white);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.card-featured {
  border: 2px solid var(--color-primary-100);
}

.card-service {
  text-align: center;
  padding: 2rem;
}

.card-service-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  background: var(--color-primary-50);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-500);
}
```

### 4.3 Navigation

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-gray-100);
  height: 80px;
}

.nav-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav-link {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-secondary-500);
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary-500);
}
```

### 4.4 Inputs

```css
.input {
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: var(--font-size-base);
  font-family: var(--font-family-primary);
  border: 2px solid var(--color-gray-200);
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  background: var(--color-white);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px var(--color-primary-100);
}

.input-error {
  border-color: var(--color-error);
}

.textarea {
  min-height: 120px;
  resize: vertical;
}

.label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-secondary-600);
  margin-bottom: 0.5rem;
}
```

### 4.5 Footer

```css
.footer {
  background: var(--color-secondary-800);
  color: var(--color-white);
  padding: 4rem 0 2rem;
}

.footer-link {
  color: var(--color-gray-300);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--color-white);
}

.footer-section-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wider);
  color: var(--color-gray-400);
  margin-bottom: 1rem;
}
```

---

## 5. GRILLE ET LAYOUT

### Système de grille

```css
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 768px) {
  .grid-cols-2,
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Sections

```css
.section {
  padding: var(--space-20) 0;
}

.section-alt {
  background: var(--color-gray-50);
}

.section-dark {
  background: var(--color-secondary-800);
  color: var(--color-white);
}

.section-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto var(--space-12);
}
```

---

## 6. EFFETS ET ANIMATIONS

### Ombres

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.15);
}
```

### Transitions

```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
  --transition-slower: 500ms ease;
}
```

### Animations Framer Motion

```javascript
// Fade in up
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
};

// Stagger children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scale on hover
const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 }
};

// Slide in from left
const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Counter animation
const counterAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { type: "spring", stiffness: 100, damping: 10 }
};
```

---

## 7. RESPONSIVE BREAKPOINTS

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Mobile first approach */
/* sm: min-width: 640px */
/* md: min-width: 768px */
/* lg: min-width: 1024px */
/* xl: min-width: 1280px */
/* 2xl: min-width: 1536px */
```

### Adaptations responsive

| Breakpoint | Navigation | Grille | Typographie |
|------------|------------|--------|-------------|
| Mobile (<640px) | Hamburger | 1 col | -10% |
| Tablet (640-1024px) | Hamburger | 2 cols | Base |
| Desktop (>1024px) | Horizontal | 3-4 cols | Base |

---

## 8. ICONOGRAPHIE

### Bibliothèque d'icônes

**Lucide React** - Icônes légères et modernes

```bash
npm install lucide-react
```

### Icônes principales

| Usage | Icône | Nom Lucide |
|-------|-------|------------|
| Services | Building2, Lightbulb, PenTool | Conseil, LED, Sur-mesure |
| Contact | Phone, Mail, MapPin | Coordonnées |
| Navigation | Menu, X, ChevronDown | Mobile menu |
| Social | Linkedin, Twitter | Réseaux |
| Actions | ArrowRight, Download, Calendar | CTA |
| États | Check, AlertCircle, Info | Feedback |

### Tailles d'icônes

```css
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 24px; height: 24px; }
.icon-lg { width: 32px; height: 32px; }
.icon-xl { width: 48px; height: 48px; }
```

---

## 9. IMAGES ET MÉDIAS

### Ratios d'aspect

```css
.aspect-square { aspect-ratio: 1 / 1; }
.aspect-video { aspect-ratio: 16 / 9; }
.aspect-photo { aspect-ratio: 4 / 3; }
.aspect-hero { aspect-ratio: 21 / 9; }
```

### Optimisation images

- Format: WebP avec fallback JPEG
- Lazy loading: native `loading="lazy"`
- Responsive: srcset avec 3 tailles (640w, 1024w, 1920w)
- Placeholder: blur ou skeleton

---

## 10. ACCESSIBILITE

### Contraste minimum

- Texte normal: ratio 4.5:1
- Texte large (>18px): ratio 3:1
- Éléments UI: ratio 3:1

### Focus visible

```css
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Remove default outline only when :focus-visible is supported */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Taille minimum des zones cliquables

- Desktop: 44x44px minimum
- Mobile: 48x48px minimum

---

## 11. STRUCTURE DES PAGES

### Page d'accueil

1. **Hero** - Plein écran avec titre, sous-titre, CTA
2. **Clients** - Bandeau logos références
3. **Services** - 3 cartes avec icônes
4. **À propos** - Texte + image + stats
5. **Projets** - Grille 3 projets vedettes
6. **Témoignages** - Carrousel citations clients
7. **CTA** - Section contact avec formulaire simplifié
8. **Footer** - Navigation, contact, légal

### Pages services

1. **Hero** - Titre service, description, image
2. **Introduction** - Problématique client
3. **Notre approche** - Méthodologie
4. **Avantages** - Liste points forts
5. **Réalisations** - Projets associés
6. **FAQ** - Questions fréquentes
7. **CTA** - Appel à l'action

---

## 12. TOKENS TAILWIND

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa',
          100: '#cce1f5',
          200: '#99c3eb',
          300: '#66a5e1',
          400: '#3387d7',
          500: '#0066CC',
          600: '#0052a3',
          700: '#003d7a',
          800: '#002952',
          900: '#001429',
        },
        secondary: {
          50: '#f5f5f6',
          100: '#ebebed',
          200: '#d7d7db',
          300: '#b4b4bc',
          400: '#8e8e99',
          500: '#2D3748',
          600: '#252d3b',
          700: '#1d232e',
          800: '#151921',
          900: '#0d0f14',
        },
        accent: {
          50: '#fff4e6',
          100: '#ffe9cc',
          200: '#ffd399',
          300: '#ffbd66',
          400: '#ffa733',
          500: '#FF8C00',
          600: '#cc7000',
          700: '#995400',
          800: '#663800',
          900: '#331c00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', fontWeight: '800' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
```

---

## Notes de mise en oeuvre

### Principes directeurs

1. **Mobile-first** - Toujours commencer par le mobile
2. **Performance** - Optimiser chaque composant
3. **Accessibilité** - WCAG 2.1 AA minimum
4. **Cohérence** - Utiliser uniquement les tokens définis
5. **Maintenabilité** - Code propre et documenté

### Outils recommandés

- **Éditeur de code:** VS Code avec extensions Tailwind
- **Vérification contraste:** WebAIM Contrast Checker
- **Tests responsive:** Chrome DevTools
- **Validation accessibilité:** axe DevTools

---

**Document créé par:** Nejib Aloui
**Version:** 1.0
