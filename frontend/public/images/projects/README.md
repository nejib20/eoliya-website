# Visuels de Projets EOLIYA Ingénierie

Ce dossier contient les visuels SVG pour la section Projets du site web EOLIYA Ingénierie.

## Liste des visuels

### 1. veepee-office.svg
- **Client**: Veepee
- **Projet**: Relamping LED Bureaux
- **Type**: Bureaux modernes
- **Caractéristiques visuelles**:
  - Bâtiment de bureaux avec fenêtres illuminées en LED jaune/dorée
  - Effets de lumière LED efficaces
  - Badge LED vert en haut à droite
  - Représente l'optimisation énergétique

### 2. casino-barriere.svg
- **Client**: Casino Barrière Enghien
- **Projet**: Installation Éclairage Technique
- **Type**: Établissement de loisirs
- **Caractéristiques visuelles**:
  - Fond sombre avec ambiance nocturne
  - Faisceaux lumineux (spotlights) depuis le sol
  - Auvent rouge à l'entrée
  - Projecteurs techniques au sol
  - Ambiance casino sophistiquée

### 3. conseil-etat.svg
- **Client**: Conseil d'État
- **Projet**: Mise aux Normes Électriques
- **Type**: Institution publique
- **Caractéristiques visuelles**:
  - Architecture classique avec colonnes
  - Fronton triangulaire
  - Panneau électrique avec disjoncteurs
  - Badge de conformité vert (checkmark)
  - Symboles électriques
  - Style patrimonial et institutionnel

### 4. leclerc-store.svg
- **Client**: Centre E.Leclerc
- **Projet**: Optimisation Énergétique Éclairage
- **Type**: Commerce / Grande distribution
- **Caractéristiques visuelles**:
  - Bâtiment commercial avec façade vitrée
  - Sections intérieures avec zones LED/ECO/OPT
  - Graphique de barres montrant l'économie d'énergie
  - Badge A+ Energy
  - Lampadaires de parking
  - Couleurs vives et optimistes

### 5. azureva-hotel.svg
- **Client**: Hôtel Azureva
- **Projet**: Rénovation Éclairage Chambres
- **Type**: Hôtellerie / Tourisme
- **Caractéristiques visuelles**:
  - Fond dégradé coucher de soleil (jaune/doré)
  - Bâtiment violet/mauve avec balcons
  - Fenêtres de chambres illuminées en jaune chaud
  - Effet de confort et ambiance chaleureuse
  - 4 étoiles (rating hôtel)
  - Multiple étages avec éclairage uniforme

### 6. dentsu-office.svg
- **Client**: Bureaux Dentsu
- **Projet**: Conception Lumière Sur Mesure
- **Type**: Bureaux créatifs / Agence
- **Caractéristiques visuelles**:
  - Fond dégradé moderne bleu foncé/violet
  - Bandes lumineuses verticales dorées
  - Accents lumineux horizontaux violets
  - Zones d'éclairage colorées (rose, violet, cyan, vert, orange, rouge)
  - Badge "CUSTOM" avec checkmark
  - Panneau de contrôle d'éclairage
  - Design contemporain et artistique

## Utilisation

Ces visuels sont utilisés dans le composant `ProjectCard` et la section `Projects`.

### Import dans un composant React:

```tsx
import { Projects } from '@/components/sections';

// Dans votre page
<Projects />
```

### Utilisation d'un visuel individuel:

```tsx
<img
  src="/images/projects/veepee-office.svg"
  alt="Projet Veepee - Relamping LED"
  className="w-full h-full object-cover"
/>
```

## Style et cohérence

Tous les visuels suivent ces principes:
- Format: SVG responsive (800x600px viewBox)
- Style: Illustrations vectorielles modernes et professionnelles
- Palette: Jaune/doré pour l'éclairage, couleurs adaptées au type de bâtiment
- Effets: Utilisation de l'opacité et des dégradés pour créer de la profondeur
- Symbolisme: Chaque visuel représente visuellement le type d'intervention

## Personnalisation

Pour ajouter un nouveau projet:
1. Créer un nouveau fichier SVG avec le même format (800x600)
2. Respecter la palette de couleurs EOLIYA
3. Ajouter le projet dans `/src/components/sections/Projects.tsx`
4. Mettre à jour cette documentation
