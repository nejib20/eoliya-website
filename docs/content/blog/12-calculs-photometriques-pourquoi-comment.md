# Calculs photométriques : pourquoi et comment les réaliser ?

**Catégorie :** Éclairage technique
**Date :** 2026-03-10
**Temps de lecture :** 6 min

## Qu'est-ce qu'un calcul photométrique ?

Un **calcul photométrique** est une simulation numérique permettant de prévoir les performances d'une installation d'éclairage avant sa réalisation.

**Objectifs :**
- Vérifier le respect des normes (EN 12464, NFC 71-121, etc.)
- Optimiser le nombre et la position des luminaires
- Dimensionner la puissance installée
- Éviter sur-éclairage (gaspillage) ou sous-éclairage (inconfort, non-conformité)

## Pourquoi réaliser des calculs photométriques ?

### 1. Conformité réglementaire
Les normes imposent des niveaux d'éclairement minimaux selon l'usage :
- Bureaux : 500 lux (EN 12464-1)
- Commerce : 300-750 lux selon zone
- Industrie : 200-1 000 lux selon précision requise
- ERP : éclairage de sécurité 5 lux (NFC 71-121)

**Sans calcul, impossible de garantir la conformité.**

### 2. Optimisation économique
Les calculs permettent de :
- Limiter le nombre de luminaires (investissement réduit)
- Éviter le surdimensionnement (consommation excessive)
- Choisir la puissance adaptée

**ROI :** Un projet bien dimensionné économise 15-30% d'énergie vs approche empirique.

### 3. Confort visuel
Au-delà des lux, les calculs évaluent :
- **Uniformité** (rapport éclairement min/moyen)
- **Éblouissement** (UGR)
- **Rendu des couleurs** (IRC)

**Impact :** +8% de productivité avec éclairage conforme vs installation approximative.

### 4. Validation en amont
Évite les mauvaises surprises après installation :
- Zones sombres imprévues
- Éblouissement sur écrans
- Non-respect des normes → refus commission de sécurité

## Grandeurs photométriques mesurées

### Éclairement (lux)
Quantité de lumière reçue par une surface.
**Symbole :** Em (éclairement moyen)
**Unité :** lux (lx)
**Mesure :** Luxmètre

### Uniformité
Rapport entre éclairement minimal et éclairement moyen.
**Symbole :** Uo (uniformité globale)
**Formule :** Uo = Emin / Emoy
**Exigence :** Uo ≥ 0,40 (circulation), ≥ 0,60 (bureaux), ≥ 0,70 (précision)

### Éblouissement (UGR)
Mesure de l'inconfort visuel causé par des sources lumineuses trop intenses.
**Symbole :** UGR (Unified Glare Rating)
**Exigence bureaux :** UGR ≤ 19
**Calcul :** Complexe (pris en charge par logiciels)

### Luminance (cd/m²)
Intensité lumineuse émise par une surface dans une direction.
**Importance :** Calcul de l'UGR, évaluation de l'aspect visuel

## Logiciels de calcul photométrique

### DIALux (gratuit)
**Développeur :** DIAL GmbH (Allemagne)
**Avantages :**
- Gratuit
- Large base de données fabricants
- Modélisation 3D intuitive
- Rapports conformes normes

**Inconvénients :**
- Courbe d'apprentissage
- Parfois lent sur projets complexes

### Relux (gratuit)
**Développeur :** Relux Informatik AG (Suisse)
**Avantages :**
- Gratuit
- Interface moderne
- Intégration BIM

**Inconvénients :**
- Base de données fabricants moins fournie que DIALux

### AGi32 (payant)
**Développeur :** Lighting Analysts (USA)
**Avantages :**
- Très professionnel
- Précision maximale
- Fonctions avancées (éclairage naturel, roadway lighting)

**Inconvénients :**
- Coûteux (licence annuelle)
- Courbe d'apprentissage raide

## Méthodologie de calcul

### Étape 1 : Modélisation du local
- Dimensions (longueur, largeur, hauteur)
- Géométrie (poteaux, mezzanines, faux-plafonds)
- Réflectances des surfaces (plafond, murs, sol) : impact sur l'éclairement indirect

**Réflectances typiques :**
- Plafond blanc : 70-80%
- Murs clairs : 50-70%
- Sol béton : 20-30%

### Étape 2 : Définition du plan de travail
- Hauteur (généralement 0,80 m pour bureaux, 0 m pour circulation)
- Maillage de calcul (résolution de la grille de points)

### Étape 3 : Sélection des luminaires
- Recherche dans base de données (fichiers IES ou LDT fournis par fabricants)
- Caractéristiques : flux lumineux, distribution, IRC, température de couleur

### Étape 4 : Implantation
- Positionnement des luminaires
- Hauteur de suspension
- Orientation (si luminaires directionnels)

### Étape 5 : Lancement du calcul
Le logiciel simule les rayons lumineux (méthode des radiosités) et calcule :
- Éclairement en chaque point
- Uniformité
- UGR selon directions d'observation

### Étape 6 : Analyse des résultats
Vérification des conformités :
- Em ≥ valeur cible
- Uo ≥ seuil requis
- UGR ≤ limite

Si non conforme : ajustement du nombre, de la position ou du type de luminaires.

### Étape 7 : Édition du rapport
Le logiciel génère un rapport incluant :
- Plans en fausses couleurs (niveaux d'éclairement)
- Tableaux de valeurs
- Vues 3D
- Fiche technique du projet

## Cas pratique : bureau open space 200 m²

**Données :**
- Dimensions : 20 m × 10 m × 3 m (H)
- Plafond blanc (70%), murs clairs (50%), sol gris (30%)
- Plan de travail : 0,80 m
- Exigence : 500 lux, Uo ≥ 0,60, UGR ≤ 19

**Solution testée :**
20 dalles LED 60×60 cm, 40W, 4 800 lm, UGR < 19

**Résultats calcul DIALux :**
- Em = 523 lux ✓
- Emin = 342 lux → Uo = 0,65 ✓
- UGR = 17 ✓
- Puissance installée : 4 W/m² (performant)

**Validation :** Solution conforme, projet validé.

## Calculs d'éclairage naturel

Les logiciels permettent aussi de simuler l'apport de lumière naturelle (fenêtres, verrières).

**Intérêt :**
- Dimensionner l'éclairage artificiel complémentaire
- Optimiser la gestion (gradation selon apport naturel)
- Réduire la consommation énergétique

**Norme :** EN 17037 (éclairage naturel des bâtiments)

## Calculs d'éclairage extérieur

Pour parkings, voiries, espaces publics :
- Norme EN 13201 (éclairage routier)
- Calcul de la luminance moyenne, uniformité longitudinale et transversale
- Éblouissement d'incapacité (TI)

## Tarifs pour une étude photométrique

**Bureaux d'études :**
- Projet simple (< 200 m², luminaires standards) : 500-1 200 €
- Projet moyen (500-1 000 m²) : 1 500-3 000 €
- Projet complexe (multi-niveaux, éclairage mixte naturel/artificiel) : 3 000-8 000 €

**Souvent inclus dans prestations globales** (fourniture + installation)

## Erreurs à éviter

**Se fier uniquement aux lux moyens**
Vérifiez l'uniformité et l'UGR, pas seulement l'éclairement moyen.

**Négliger les réflectances**
Un plafond sombre réduit significativement l'éclairement (moins de lumière indirecte).

**Utiliser des fichiers IES obsolètes**
Les fabricants mettent à jour leurs bases. Utilisez toujours les fichiers récents.

**Ne pas calculer l'éclairage de sécurité**
Les BAES doivent assurer 5 lux. Simulez-les dans DIALux.

## Conclusion

Les calculs photométriques ne sont pas un luxe : c'est une étape obligatoire pour garantir conformité, performance et confort. Investir 1 000 € en études évite des dizaines de milliers d'euros de corrections post-installation.

**EOLIYA Ingénierie réalise vos études photométriques :**
- Logiciels professionnels (DIALux, Relux)
- Rapports conformes aux normes
- Optimisation technique et économique
- Conseil dans le choix des luminaires

📞 01 34 22 30 12
✉️ contact@eoliya.com

**Mots-clés :** calculs photométriques, étude éclairage, DIALux, Relux, simulation éclairage, UGR, uniformité, bureau d'études éclairage
