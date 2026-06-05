# Illustrations SVG des Services EOLIYA

Ce dossier contient les illustrations vectorielles professionnelles pour les trois services principaux d'EOLIYA Ingénierie.

## Fichiers

### 1. conseil-pilotage.svg
**Service:** Conseil et Pilotage TCE

**Description:** Illustration en style isométrique représentant:
- Un bâtiment moderne en 3D isométrique
- Des plans et blueprints
- Des éléments de coordination (casque de chantier, engrenage)
- Des indicateurs de validation (checkmarks)
- Lignes de connexion en pointillés pour montrer la coordination

**Couleurs principales:**
- Bleu #0066CC (bâtiment)
- Orange #F97316 (accents de coordination)
- Gris #64748B (éléments techniques)
- Vert #10B981 (validation)

**Dimensions:** 400x300px viewBox

### 2. relamping.svg
**Service:** Multi-services et Relamping

**Description:** Illustration centrée sur l'efficacité énergétique:
- Ampoule LED lumineuse avec effet de glow
- Puce LED visible à l'intérieur
- Rayons de lumière
- Flèches indiquant économies d'énergie (-80%)
- Badge LED TECH
- Outils de maintenance (clé, tournevis)
- Icônes écologiques (feuille, éclair)

**Couleurs principales:**
- Jaune #FDE047 (lumière LED)
- Vert #10B981 (badge LED, écologie)
- Orange #F97316 (économies)
- Gris #64748B (outils)

**Dimensions:** 400x300px viewBox

### 3. luminaires.svg
**Service:** Luminaires sur mesure

**Description:** Illustration technique et personnalisée:
- Luminaire moderne sur rail ajustable
- Faisceau lumineux avec effet de glow
- Plans techniques avec dimensions et angles
- Interface de customisation (palette de couleurs, slider)
- Spécifications techniques (Puissance, CRI, IP, Température)
- Outils de conception (compas, règle)

**Couleurs principales:**
- Gris métallique (luminaire)
- Bleu #0066CC (accents techniques)
- Orange #F97316 (personnalisation)
- Jaune #FEF08A (lumière)

**Dimensions:** 400x300px viewBox

## Palette de couleurs EOLIYA

| Couleur | Code Hex | Usage |
|---------|----------|-------|
| Bleu Primaire | #0066CC | Éléments principaux, branding |
| Orange Accent | #F97316 | Accents, call-to-action |
| Gris | #64748B | Éléments techniques, neutralité |

### Couleurs complémentaires utilisées:
- Jaune lumière: #FDE047, #FEF08A
- Vert validation: #10B981
- Rouge économies: #DC2626

## Utilisation

### Dans React/Next.js:

```tsx
import Image from 'next/image';

<Image
  src="/images/services/conseil-pilotage.svg"
  alt="Conseil et Pilotage TCE"
  width={400}
  height={300}
/>
```

### En HTML standard:

```html
<img src="/images/services/conseil-pilotage.svg" alt="Conseil et Pilotage TCE">
```

## Aperçu

Pour visualiser toutes les illustrations ensemble, ouvrez `preview.html` dans un navigateur:

```
http://localhost:3001/images/services/preview.html
```

## Caractéristiques techniques

- **Format:** SVG (Scalable Vector Graphics)
- **Résolution:** Vectoriel (scalable sans perte de qualité)
- **Compatibilité:** Tous navigateurs modernes
- **Optimisation:** Code SVG propre et structuré
- **Accessibilité:** Peut être utilisé avec des attributs alt appropriés
- **Performance:** Taille de fichier optimale (4-7 KB par fichier)

## Style et design

- **Approche:** Mélange de style isométrique et flat design moderne
- **Cohérence:** Utilisation uniforme de la palette de couleurs EOLIYA
- **Professionnalisme:** Design épuré et professionnel
- **Symbolisme:** Chaque illustration représente visuellement le service associé

## Modifications

Pour modifier ces illustrations:
1. Ouvrir le fichier SVG dans un éditeur de texte ou un logiciel comme Figma/Illustrator
2. Les couleurs sont définies avec des `linearGradient` et `radialGradient` pour plus de profondeur
3. Respecter la palette de couleurs EOLIYA pour maintenir la cohérence

## Intégration avec le site

Ces illustrations sont utilisées dans le composant `Services.tsx`:

```tsx
// /frontend/src/components/sections/Services.tsx
const defaultServices: Service[] = [
  {
    image: '/images/services/conseil-pilotage.svg',
    title: 'Conseil et Pilotage TCE',
    // ...
  },
  // ...
];
```

Les images sont affichées dans des cartes avec:
- Fond dégradé (from-primary-50 to-accent-50)
- Effet hover avec zoom (scale-105)
- Hauteur fixe de 200px
- Padding de 4 unités
- Border radius arrondi

---

**Créé le:** 28 mai 2026
**Version:** 1.0
**Auteur:** EOLIYA Ingénierie
