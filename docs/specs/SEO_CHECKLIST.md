# SEO Technical Checklist - EOLIYA Ingénierie

## Introduction

Ce document fournit une checklist complète des optimisations techniques SEO pour le site EOLIYA Ingénierie. Suivre ces recommandations garantit une base technique solide pour le référencement naturel.

---

## 1. Core Web Vitals Requirements

### 1.1 Largest Contentful Paint (LCP)

**Objectif:** < 2.5 secondes

**Optimisations:**

- [ ] **Images optimisées:**
  - Format WebP avec fallback JPG/PNG
  - Dimensions appropriées (pas de redimensionnement CSS)
  - Lazy loading sauf above-the-fold
  - Compression aggressive (< 150KB par image)

- [ ] **Hero section optimisée:**
  - Preload image hero: `<link rel="preload" as="image" href="/hero.webp">`
  - Priorité élevée fetch: `fetchpriority="high"`
  - Dimensions explicites width/height (éviter layout shift)

- [ ] **Fonts optimisées:**
  - Préconnexion Google Fonts: `<link rel="preconnect" href="https://fonts.googleapis.com">`
  - Font-display: swap
  - Limiter à 2-3 variantes font max
  - Considérer fonts système (fallback rapide)

- [ ] **Server-Side Rendering:**
  - Next.js App Router avec SSR/SSG
  - Génération statique pages principales
  - Incremental Static Regeneration (ISR) pour blog

- [ ] **CDN:**
  - Assets statiques servis via CDN
  - Images via Next.js Image Optimization
  - Cache headers appropriés

**Mesure:**
- Lighthouse (Chrome DevTools)
- PageSpeed Insights
- WebPageTest

---

### 1.2 First Input Delay (FID) / Interaction to Next Paint (INP)

**Objectif FID:** < 100ms
**Objectif INP:** < 200ms

**Optimisations:**

- [ ] **JavaScript optimisé:**
  - Code splitting (dynamic imports)
  - Defer scripts non-critiques
  - Minimiser JavaScript main thread
  - Éviter long tasks (> 50ms)

- [ ] **React optimisations:**
  - React.memo pour composants lourds
  - useMemo/useCallback pour calculs coûteux
  - Virtualization pour listes longues (react-window)
  - Lazy loading composants hors viewport

- [ ] **Third-party scripts:**
  - Charger analytics de façon asynchrone
  - Différer scripts non-essentiels (chat, social widgets)
  - Utiliser facades pour embeds (YouTube, Maps)

- [ ] **Event handlers optimisés:**
  - Debounce/throttle scroll/resize handlers
  - Passive event listeners
  - Minimiser DOM manipulations

**Code example:**
```typescript
// Lazy loading composant
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false
});

// Debounce search
const debouncedSearch = useMemo(
  () => debounce(handleSearch, 300),
  []
);
```

---

### 1.3 Cumulative Layout Shift (CLS)

**Objectif:** < 0.1

**Optimisations:**

- [ ] **Dimensions images/videos explicites:**
  ```html
  <img src="image.jpg" width="800" height="600" alt="...">
  ```
  - Next.js Image: toujours spécifier width/height
  - Aspect ratio CSS pour responsive

- [ ] **Fonts stable:**
  - Font-display: swap
  - Fallback font similaire (size-adjust)
  - Preload fonts critiques

- [ ] **Pas d'insertion contenu dynamique:**
  - Réserver espace pour ads/embeds
  - Skeleton loaders dimensions fixes
  - Éviter banners qui poussent contenu

- [ ] **Animations CSS performantes:**
  - Uniquement transform et opacity
  - Éviter top/left/width/height animés
  - will-change avec parcimonie

- [ ] **Tester navigation:**
  - Pas de shift au chargement
  - Transitions pages fluides
  - Scroll restauration propre

**CSS example:**
```css
/* Réserver espace image avec aspect ratio */
.image-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

/* Animation performante */
.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 2. Mobile-First Optimizations

### 2.1 Responsive Design

- [ ] **Mobile-first CSS:**
  - Base styles pour mobile
  - Media queries min-width pour desktop
  - Touch targets 44x44px minimum

- [ ] **Viewport configuré:**
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

- [ ] **Navigation mobile:**
  - Menu hamburger accessible
  - Touch-friendly boutons
  - Pas de hover-only interactions

- [ ] **Formulaires mobile:**
  - Inputs type appropriés (email, tel, number)
  - Labels visibles
  - Autocomplete enabled
  - Submit bouton accessible

- [ ] **Performance mobile:**
  - Images adaptatives (srcset)
  - Lazy loading agressif mobile
  - Réduire assets mobile (code splitting)

**Breakpoints recommandés:**
```css
/* Mobile first */
.container { width: 100%; }

/* Tablet */
@media (min-width: 768px) {
  .container { width: 750px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { width: 970px; }
}

/* Large desktop */
@media (min-width: 1280px) {
  .container { width: 1200px; }
}
```

---

### 2.2 Mobile Usability

- [ ] **Taille texte lisible:**
  - Base font-size: 16px minimum
  - Line-height: 1.5-1.6
  - Contrast ratio 4.5:1 minimum

- [ ] **Spacing approprié:**
  - Padding généreux boutons (16px vertical)
  - Margins entre sections (32-48px)
  - Pas d'éléments trop proches (éviter misclicks)

- [ ] **Media queries testées:**
  - iPhone SE (375px)
  - iPhone 12/13 (390px)
  - Samsung Galaxy (412px)
  - iPad (768px, 1024px)

- [ ] **Orientation supportée:**
  - Portrait et landscape fonctionnels
  - Pas de contenu coupé en landscape

---

## 3. URL Structure Recommendations

### 3.1 Format URLs

**Règles:**

- [ ] **URLs courtes et descriptives:**
  - ✅ `/services/relamping-led`
  - ❌ `/services/service-de-relamping-led-pour-entreprises`

- [ ] **Mots-clés dans URL:**
  - Mot-clé principal présent
  - Séparateurs tirets `-` (pas underscore)
  - Tout en minuscules

- [ ] **Hiérarchie logique:**
  ```
  /services/
  /services/conseil-tce
  /services/relamping-led
  /services/luminaires-sur-mesure

  /realisations/
  /realisations/conseil-etat
  /realisations/veepee

  /blog/
  /blog/re2020-eclairage
  /blog/economies-led
  ```

- [ ] **Pas de trailing slash inconsistant:**
  - Choisir avec ou sans `/` final
  - Être cohérent partout
  - **Recommandation:** SANS trailing slash

- [ ] **Éviter paramètres URL inutiles:**
  - ❌ `/services?id=123&name=tce`
  - ✅ `/services/conseil-tce`

- [ ] **Gestion versions:**
  - Pas de `/v1/`, `/v2/` dans URLs publiques
  - API versionning séparé (`/api/v1/`)

---

### 3.2 Redirections

- [ ] **Redirections 301 permanentes:**
  - Anciens URLs → Nouveaux URLs
  - www → non-www (ou inverse)
  - http → https

- [ ] **Pas de chaînes redirections:**
  - ❌ URL1 → URL2 → URL3
  - ✅ URL1 → URL3 (direct)

- [ ] **Redirections Next.js:**
  ```javascript
  // next.config.js
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true, // 301
      },
      {
        source: '/services/tce',
        destination: '/services/conseil-tce',
        permanent: true,
      }
    ];
  }
  ```

---

## 4. Image Optimization Guidelines

### 4.1 Formats & Compression

- [ ] **Formats modernes:**
  - WebP prioritaire (Chrome, Edge, Firefox)
  - Fallback JPG/PNG
  - AVIF pour futur (support croissant)
  - SVG pour logos/icônes

- [ ] **Compression:**
  - Photos: 70-85% qualité JPG/WebP
  - Poids cible: < 150KB par image
  - Illustrations: PNG-8 ou SVG
  - Outils: TinyPNG, Squoosh, ImageOptim

- [ ] **Dimensions appropriées:**
  - Pas d'images 4000px pour affichage 400px
  - Générer plusieurs tailles (responsive)
  - Retina: 2x maximum (balance qualité/poids)

**Next.js Image Optimization:**
```tsx
import Image from 'next/image';

<Image
  src="/images/projet.jpg"
  alt="Projet relamping LED Conseil d'État"
  width={1200}
  height={800}
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/..." // ou import image
  loading="lazy" // ou "eager" pour above-fold
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

### 4.2 Alt Text & SEO

- [ ] **Alt text descriptif:**
  - ✅ "Luminaires LED installés dans bureaux Conseil d'État Paris"
  - ❌ "Image1.jpg"
  - ❌ "" (vide, sauf images décoratives)

- [ ] **Mots-clés naturels:**
  - Inclure mot-clé si pertinent
  - Pas de keyword stuffing
  - Contexte et description réelle

- [ ] **Noms fichiers optimisés:**
  - ✅ `relamping-led-conseil-etat-paris.jpg`
  - ❌ `IMG_2048.jpg`
  - Minuscules, tirets, descriptifs

- [ ] **Structured data images:**
  - Images dans schema LocalBusiness
  - Images dans schema Article (featured)
  - Dimensions explicites dans schema

---

### 4.3 Lazy Loading & Performance

- [ ] **Lazy loading:**
  - Images below-the-fold: `loading="lazy"`
  - Above-the-fold: `loading="eager"` ou preload
  - Next.js Image: lazy par défaut

- [ ] **Responsive images:**
  ```html
  <img
    srcset="
      image-400.webp 400w,
      image-800.webp 800w,
      image-1200.webp 1200w
    "
    sizes="(max-width: 768px) 100vw, 50vw"
    src="image-800.webp"
    alt="..."
  >
  ```

- [ ] **Preload images critiques:**
  ```html
  <link rel="preload" as="image" href="/hero.webp">
  ```

- [ ] **Priorité fetch:**
  - Hero image: `fetchpriority="high"`
  - Images bas page: `fetchpriority="low"`

---

## 5. Performance Budgets

### 5.1 Budgets par Page

**Homepage:**
- [ ] Total page weight: < 2 MB
- [ ] JavaScript: < 300 KB
- [ ] CSS: < 100 KB
- [ ] Images: < 1.5 MB total
- [ ] Fonts: < 150 KB
- [ ] Requests: < 50

**Page Service:**
- [ ] Total page weight: < 1.5 MB
- [ ] JavaScript: < 250 KB
- [ ] CSS: < 80 KB
- [ ] Images: < 1 MB
- [ ] Requests: < 40

**Article Blog:**
- [ ] Total page weight: < 1 MB
- [ ] JavaScript: < 200 KB
- [ ] CSS: < 80 KB
- [ ] Images: < 600 KB
- [ ] Requests: < 35

---

### 5.2 Monitoring Budgets

**Outils:**
- [ ] Lighthouse CI (intégration continue)
- [ ] Bundle analyzer (webpack/Next.js)
- [ ] WebPageTest (monitoring)
- [ ] Google Analytics (page load times)

**Seuils alertes:**
- [ ] LCP > 2.5s → Alerte
- [ ] FID > 100ms → Alerte
- [ ] CLS > 0.1 → Alerte
- [ ] Time to Interactive > 3.5s → Alerte
- [ ] Bundle JS > 500KB → Alerte

**Configuration Lighthouse CI:**
```json
{
  "ci": {
    "collect": {
      "numberOfRuns": 3,
      "url": [
        "https://eoliya.com",
        "https://eoliya.com/services/relamping-led",
        "https://eoliya.com/blog"
      ]
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.95 }]
      }
    }
  }
}
```

---

## 6. Technical SEO Checklist

### 6.1 Indexation

- [ ] **Robots.txt configuré:**
  - Sitemap référencé
  - Pages admin bloquées
  - Assets autorisés (CSS, JS, images)

- [ ] **Sitemap XML:**
  - Généré dynamiquement
  - Soumis Google Search Console
  - Mis à jour automatiquement
  - Includes lastmod, priority, changefreq

- [ ] **Meta robots:**
  - Pages importantes: `index, follow`
  - Pages thank-you: `noindex, follow`
  - Pages admin/test: `noindex, nofollow`

- [ ] **Canonical tags:**
  - Toutes les pages ont canonical
  - URLs absolues (https://...)
  - Auto-référentiel par défaut

---

### 6.2 Structured Data

- [ ] **Schema.org implémenté:**
  - LocalBusiness (homepage)
  - Organization (toutes pages)
  - Service (pages services)
  - Article (blog)
  - BreadcrumbList (toutes pages)
  - FAQPage (si FAQ)

- [ ] **Validation:**
  - Google Rich Results Test
  - Schema.org Validator
  - Search Console "Améliorations"

- [ ] **Format JSON-LD:**
  - Dans `<head>` ou fin `<body>`
  - Pas de données dupliquées
  - Propriétés requises présentes

---

### 6.3 Security & HTTPS

- [ ] **HTTPS partout:**
  - Certificat SSL valide
  - Pas de mixed content (http dans https)
  - HSTS header activé

- [ ] **Security headers:**
  ```
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  ```

- [ ] **Content Security Policy:**
  - CSP header configuré
  - Scripts inline évités ou hashed
  - Images/fonts de sources autorisées

**Next.js headers:**
```javascript
// next.config.js
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains'
        }
      ]
    }
  ];
}
```

---

### 6.4 Crawlability

- [ ] **Architecture plate:**
  - 3 clics max depuis homepage
  - Pas de pages orphelines
  - Breadcrumbs cohérents

- [ ] **Internal linking:**
  - Minimum 3 liens internes par page
  - Ancres descriptives
  - Pas de liens cassés (404)

- [ ] **Pagination:**
  - `rel="prev"` et `rel="next"` si applicable
  - View All considéré si petite pagination
  - Canonical approprié

- [ ] **Faceted navigation:**
  - Paramètres filtres dans URL
  - Canonical vers version sans filtres
  - Robots meta si trop de combinaisons

---

## 7. Accessibility (A11y)

### 7.1 Sémantique HTML

- [ ] **Structure headings:**
  - H1 unique par page
  - Hiérarchie logique (H1 → H2 → H3)
  - Pas de sauts de niveau

- [ ] **Landmarks ARIA:**
  - `<header>`, `<nav>`, `<main>`, `<footer>`
  - `role="banner"`, `role="navigation"`, etc.
  - Skip links pour navigation clavier

- [ ] **Listes sémantiques:**
  - `<ul>` / `<ol>` pour listes
  - `<dl>` pour définitions
  - Pas de `<div>` à la place

---

### 7.2 Keyboard & Screen Readers

- [ ] **Navigation clavier:**
  - Tab order logique
  - Focus visible (outline)
  - Pas de keyboard traps
  - Raccourcis clavier documentés

- [ ] **ARIA labels:**
  - Boutons icônes: `aria-label`
  - Images complexes: `aria-describedby`
  - States dynamiques: `aria-live`, `aria-expanded`

- [ ] **Contrast ratio:**
  - Texte normal: 4.5:1 minimum
  - Large text (18pt+): 3:1 minimum
  - Éléments UI: 3:1 minimum

- [ ] **Screen reader testing:**
  - NVDA (Windows)
  - JAWS (Windows)
  - VoiceOver (Mac/iOS)

**Outils:**
- axe DevTools (Chrome extension)
- WAVE (Web Accessibility Evaluation Tool)
- Lighthouse accessibility audit
- Contrast Checker

---

## 8. Monitoring & Maintenance

### 8.1 Outils de Monitoring

**Essentiels (gratuits):**
- [ ] Google Search Console
  - Indexation
  - Performances recherche
  - Erreurs crawl
  - Core Web Vitals

- [ ] Google Analytics 4
  - Trafic organique
  - Comportement utilisateur
  - Conversions

- [ ] PageSpeed Insights
  - Scores performance
  - Suggestions optimisation

**Professionnels (payants):**
- [ ] Ahrefs / SEMrush
  - Positions mots-clés
  - Backlinks
  - Analyse concurrents

- [ ] Screaming Frog
  - Audits techniques
  - Détection erreurs
  - Analyse logs

---

### 8.2 Checks Réguliers

**Hebdomadaire:**
- [ ] Google Search Console erreurs
- [ ] Analytics trafic anomalies
- [ ] Uptime monitoring
- [ ] Broken links (404)

**Mensuel:**
- [ ] Positions mots-clés cibles
- [ ] Core Web Vitals évolution
- [ ] Backlinks nouveaux/perdus
- [ ] Contenus top performers

**Trimestriel:**
- [ ] Audit technique complet (Screaming Frog)
- [ ] Révision stratégie contenu
- [ ] Analyse concurrents
- [ ] Optimisation pages sous-performantes

**Annuel:**
- [ ] Migration technologies (si nécessaire)
- [ ] Refonte contenu ancien
- [ ] Audit accessibilité complet
- [ ] Security audit

---

## 9. Pre-Launch Checklist

### 9.1 Avant Mise en Production

**Technical:**
- [ ] Lighthouse scores > 90 (toutes catégories)
- [ ] Core Web Vitals vert
- [ ] Structured data validé
- [ ] Sitemap généré et accessible
- [ ] Robots.txt configuré
- [ ] Canonical URLs vérifiés
- [ ] Meta tags tous uniques
- [ ] Images optimisées (alt, compression)
- [ ] 404 page custom
- [ ] Redirections testées
- [ ] HTTPS configuré + HSTS

**Content:**
- [ ] Tous les textes relus (orthographe)
- [ ] Aucune mention IA/placeholder
- [ ] Images professionnelles qualité
- [ ] Crédits "Nejib Aloui" partout
- [ ] Coordonnées à jour
- [ ] Formulaires testés

**SEO:**
- [ ] Google Search Console setup
- [ ] Google Analytics setup
- [ ] Sitemap soumis GSC
- [ ] Pas de noindex accidentel pages importantes
- [ ] Internal linking complet
- [ ] Schema.org vérifié

**Testing:**
- [ ] Tests navigateurs (Chrome, Firefox, Safari, Edge)
- [ ] Tests mobiles (iOS, Android)
- [ ] Tests tablette
- [ ] Formulaires fonctionnels
- [ ] Emails envoyés correctement
- [ ] Liens externes valides

---

## 10. Next.js Specific Optimizations

### 10.1 App Router Performance

- [ ] **Server Components par défaut:**
  - Maximiser Server Components
  - Client Components uniquement si interactivité
  - `'use client'` seulement si nécessaire

- [ ] **Static Generation:**
  ```typescript
  // app/blog/[slug]/page.tsx
  export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post) => ({ slug: post.slug }));
  }
  ```

- [ ] **Metadata API:**
  ```typescript
  export const metadata = {
    title: 'Page Title',
    description: '...',
    // ...
  };
  ```

- [ ] **Streaming & Suspense:**
  ```tsx
  <Suspense fallback={<Loading />}>
    <SlowComponent />
  </Suspense>
  ```

---

### 10.2 Image & Font Optimization

- [ ] **Next.js Image:**
  - Toujours utiliser `next/image`
  - Spécifier sizes pour responsive
  - Placeholder blur pour UX

- [ ] **Font Optimization:**
  ```typescript
  // app/layout.tsx
  import { Inter } from 'next/font/google';

  const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
  });
  ```

- [ ] **Asset Prefix CDN:**
  ```javascript
  // next.config.js
  module.exports = {
    images: {
      domains: ['cdn.eoliya.com'],
      formats: ['image/webp', 'image/avif'],
    },
    assetPrefix: process.env.NODE_ENV === 'production'
      ? 'https://cdn.eoliya.com'
      : undefined,
  };
  ```

---

### 10.3 Caching Strategy

- [ ] **Cache headers:**
  ```javascript
  // next.config.js
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.{js,css}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  }
  ```

- [ ] **ISR (Incremental Static Regeneration):**
  ```typescript
  export const revalidate = 3600; // Revalidate every hour
  ```

- [ ] **Route Segment Config:**
  ```typescript
  export const dynamic = 'force-static'; // or 'force-dynamic'
  export const fetchCache = 'force-cache';
  ```

---

## 11. Validation Tools

### 11.1 Performance

- [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] [WebPageTest](https://www.webpagetest.org/)
- [ ] [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [ ] [GTmetrix](https://gtmetrix.com/)

### 11.2 SEO

- [ ] [Google Search Console](https://search.google.com/search-console)
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] [Schema Markup Validator](https://validator.schema.org/)
- [ ] [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### 11.3 Accessibility

- [ ] [WAVE](https://wave.webaim.org/)
- [ ] [axe DevTools](https://www.deque.com/axe/devtools/)
- [ ] [Lighthouse Accessibility](https://web.dev/accessibility/)
- [ ] [Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 11.4 Code Quality

- [ ] [W3C HTML Validator](https://validator.w3.org/)
- [ ] [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [ ] ESLint (configured for Next.js)
- [ ] TypeScript strict mode

---

## 12. Resources & Documentation

### Official Documentation
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Google Search Central](https://developers.google.com/search)
- [Web.dev Performance](https://web.dev/performance/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Learning Resources
- [Core Web Vitals Guide](https://web.dev/vitals/)
- [Image Optimization Guide](https://web.dev/fast/#optimize-your-images)
- [JavaScript Performance](https://web.dev/fast/#optimize-your-javascript)

### Tools Documentation
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Search Console Help](https://support.google.com/webmasters)

---

**Document créé par:** Nejib Aloui
**Date:** Mai 2026
**Version:** 1.0
**Dernière mise à jour:** 2026-05-26

---

## Résumé des Priorités

### Phase 1 (Pré-lancement) - Critique
1. Core Web Vitals optimisés
2. Structured data implémenté
3. Meta tags complets
4. Images optimisées
5. Mobile responsive
6. HTTPS + Security headers

### Phase 2 (Post-lancement) - Important
1. Monitoring Google Search Console
2. Performance budgets respectés
3. Accessibility compliance
4. Internal linking solide
5. Content SEO quality

### Phase 3 (Ongoing) - Maintenance
1. Audits techniques réguliers
2. Content refresh
3. Performance monitoring
4. Backlinks building
5. Continuous optimization
