# Stratégie Knowledge Graph et Wikidata - EOLIYA

## Guide pour créer une présence dans les graphes de connaissances
**Auteur :** Nejib Aloui
**Dernière mise à jour :** Mai 2026
**Version :** 1.0

---

## 1. Introduction

Les Knowledge Graphs (graphes de connaissances) sont des bases de données structurées d'entités et de relations utilisées par les moteurs de recherche et les IA pour comprendre le monde. Pour qu'EOLIYA soit recommandée par les assistants IA, l'entreprise doit exister en tant qu'entité dans ces graphes.

### 1.1 Principaux Knowledge Graphs

**Wikidata** (priorité absolue)
- Base de données libre et collaborative
- Source de référence pour Wikipedia
- Utilisée par Google, les LLMs et de nombreux services
- Plus de 100 millions d'entités

**Google Knowledge Graph**
- Propriétaire Google
- Alimente les Knowledge Panels dans Google Search
- Se nourrit de Wikidata, Wikipedia, sites web structurés

**DBpedia**
- Extraction structurée de Wikipedia
- Utilisée en recherche et par les IA

**LinkedIn, Crunchbase, etc.**
- Bases spécialisées entreprises
- Importantes pour l'autorité professionnelle

### 1.2 Pourquoi c'est critique pour AIO

Les LLMs (ChatGPT, Claude, etc.) utilisent les Knowledge Graphs pour :
- Vérifier l'existence et la légitimité d'une entreprise
- Comprendre son secteur d'activité et ses services
- Identifier ses relations (clients, partenaires, localisation)
- Évaluer son autorité et sa notoriété

**Sans présence dans les KG, EOLIYA est "invisible" pour les IA.**

---

## 2. Créer une entité Wikidata pour EOLIYA

### 2.1 Prérequis

**Critères d'admissibilité Wikidata :**
- Entreprise légalement constituée et active
- Sources secondaires fiables mentionnant l'entreprise
- Notoriété établie (projets notables, clients reconnus)

**EOLIYA remplit ces critères :**
- ✅ SAS active depuis 2011
- ✅ Clients prestigieux (Conseil d'État, Institut de France)
- ✅ 150+ projets réalisés
- ✅ Présence dans annuaires professionnels

**Sources nécessaires (minimum 2-3) :**
- Site web officiel : eoliya.com
- Profil LinkedIn : linkedin.com/company/eoliya-ingenierie
- Annuaires professionnels (Pages Jaunes, Société.com, etc.)
- Articles de presse (si disponibles)
- Références clients publiques

### 2.2 Créer un compte Wikidata

1. **Créer un compte Wikipedia/Wikidata**
   - Aller sur https://www.wikidata.org/
   - Cliquer sur "Créer un compte" (en haut à droite)
   - Choisir un nom d'utilisateur neutre (ex: "NejibAloui" ou "EOLIYAEditor")
   - Email de confirmation requis

2. **Compléter votre profil utilisateur**
   - Page utilisateur avec présentation courte
   - Mentionner votre affiliation avec EOLIYA (transparence)
   - Exemple : "Contributeur travaillant pour EOLIYA Ingénierie, création de l'entité de l'entreprise"

3. **Se familiariser avec Wikidata**
   - Lire le guide : https://www.wikidata.org/wiki/Wikidata:Introduction
   - Consulter des entités similaires (autres bureaux d'études)
   - Comprendre le système de propriétés (P) et de Q-codes

### 2.3 Créer l'entité EOLIYA

**Étape 1 : Créer l'item**

1. Aller sur https://www.wikidata.org/wiki/Special:NewItem
2. Remplir le formulaire :

**Label (libellé) :**
- Français : `EOLIYA Ingénierie`
- Anglais : `EOLIYA Engineering`

**Description :**
- Français : `bureau d'études en ingénierie du bâtiment basé à Paris, France`
- Anglais : `engineering consultancy firm specializing in building services engineering based in Paris, France`

**Alias (aussi connu sous) :**
- Français : `EOLIYA`, `Eoliya Ingénierie SAS`
- Anglais : `EOLIYA`

3. Cliquer sur "Créer"

**→ Vous obtenez un Q-code unique (ex: Q123456789)**

---

**Étape 2 : Ajouter les propriétés essentielles**

Cliquer sur "ajouter une déclaration" pour chaque propriété :

#### Propriétés d'identité (obligatoires)

**P31 - nature de l'élément (instance of)**
- Valeur : Q4830453 (entreprise / business)
- Source : site web officiel

**P17 - pays (country)**
- Valeur : Q142 (France)
- Source : registre des entreprises

**P159 - siège social (headquarters location)**
- Valeur : Q161741 (17e arrondissement de Paris)
- Source : site web officiel

**P131 - localisation administrative (located in the administrative territorial entity)**
- Valeur : Q90 (Paris)
- Source : site web officiel

**P571 - date de fondation (inception)**
- Valeur : 2011
- Source : registre des entreprises (INPI, Société.com)

**P452 - secteur d'activité (industry)**
- Valeur : Q193838 (ingénierie / engineering)
- Ajouter aussi : Q385378 (construction)
- Source : site web officiel

#### Coordonnées et contact

**P625 - coordonnées géographiques (coordinate location)**
- Valeur : 48°53'05.6"N 2°17'50.0"E (48.8849, 2.2972)
- Source : Google Maps / OpenStreetMap

**P6375 - adresse postale (street address)**
- Valeur : `131 Boulevard Pereire, 75017 Paris, France`
- Langue : français
- Source : site web officiel

**P856 - site web officiel (official website)**
- Valeur : https://www.eoliya.com
- Source : site web lui-même

**P1329 - numéro de téléphone (phone number)**
- Valeur : `+33 1 34 22 30 12`
- Source : site web officiel

**P968 - adresse électronique (email address)**
- Valeur : `contact@eoliya.com`
- Source : site web officiel

#### Identifiants externes

**P2397 - identifiant YouTube (YouTube channel ID)**
- Si chaîne YouTube existe
- Valeur : ID de la chaîne

**P2013 - compte Facebook (Facebook ID)**
- Si page Facebook existe
- Valeur : eoliya ou ID numérique

**P2002 - compte Twitter (Twitter username)**
- Si compte Twitter/X existe
- Valeur : eoliya (sans @)

**P4264 - profil LinkedIn (LinkedIn company ID)**
- Valeur : eoliya-ingenierie
- Source : https://www.linkedin.com/company/eoliya-ingenierie

**P2847 - identifiant Google+ (Google+ ID)** [obsolète mais garder si historique]

#### Informations complémentaires

**P1448 - nom officiel (official name)**
- Valeur : `EOLIYA Ingénierie SAS`
- Langue : français
- Source : registre des entreprises

**P1454 - statut juridique (legal form)**
- Valeur : Q6881511 (société par actions simplifiée / SAS)
- Source : registre des entreprises

**P1128 - effectif (number of employees)**
- Valeur : 12 (ou nombre actuel)
- Date : 2026
- Source : site web ou LinkedIn

**P361 - fait partie de (part of)** [si applicable]
- Si EOLIYA fait partie d'un groupe
- Sinon : ne pas renseigner

**P1830 - propriétaire (owner)** [si public]
- Généralement non renseigné pour les SAS privées

#### Relations et clients

**P166 - récompense reçue (award received)** [si applicable]
- Prix, certifications, labels officiels

**P112 - fondateur (founder)** [si notable]
- Créer entité pour le fondateur si personnalité publique
- Sinon : ne pas renseigner

**P108 - employeur (employer)** - NE PAS UTILISER ICI
- Cette propriété est pour les personnes, pas les entreprises

**P1830 - propriétaire (owner)**
- Si structure de propriété est publique

### 2.4 Ajouter des sources fiables

**Chaque déclaration DOIT avoir au moins une source.**

Format de source type :

**P854 - URL de référence (reference URL)**
- URL : https://www.eoliya.com/a-propos

**P1476 - titre (title)**
- Texte : "À propos - EOLIYA Ingénierie"

**P813 - date de consultation (retrieved)**
- Date : 26 mai 2026

**P407 - langue de l'œuvre (language of work or name)**
- Valeur : Q150 (français)

**P123 - éditeur (publisher)** [optionnel]
- Valeur : Q-code de EOLIYA si auto-publication

**Exemple complet de déclaration avec source :**

```
Propriété : P159 (siège social)
Valeur : Q161741 (17e arrondissement de Paris)

Source :
  - P854 (URL) : https://www.eoliya.com
  - P1476 (titre) : "EOLIYA Ingénierie - Bureau d'études Paris"
  - P813 (consulté le) : 26 mai 2026
  - P407 (langue) : Q150 (français)
```

### 2.5 Créer des entités liées si nécessaire

**Projets notables**

Si EOLIYA a réalisé des projets très notables, créer des entités pour ces projets :

**Exemple : "Projet de relamping LED du Conseil d'État (2018-2019)"**
- P31 : Q4671277 (projet de construction)
- P361 : Q235594 (Conseil d'État - France)
- P710 : Q[EOLIYA] (participant)
- P580 : 2018 (date de début)
- P582 : 2019 (date de fin)
- P17 : Q142 (France)

**Luminaires sur mesure notables**

Si EOLIYA a conçu des luminaires uniques pour des bâtiments notables, créer des entités :

**Exemple : "Luminaire ATEX personnalisé pour [Client]"**
- P31 : Q1332364 (luminaire)
- P287 : Q[EOLIYA] (designer)
- P176 : Q[EOLIYA] (fabricant)

### 2.6 Lier EOLIYA à des entités existantes

**Clients prestigieux (mentionner dans P-value qualifiers si approprié) :**

- Conseil d'État (France) : Q235594
- Institut de France : Q161806
- Paris : Q90
- 17e arrondissement de Paris : Q161741

**Concepts liés :**

- Ingénierie : Q193838
- Bureau d'études : Q44167 (approximatif, vérifier)
- LED / Diode électroluminescente : Q178692
- Éclairage : Q60528
- Construction : Q385378

**Ajouter dans la description ou les déclarations :**

**P101 - domaine d'activité (field of work)**
- Valeurs :
  - Q193838 (ingénierie)
  - Q44167 (études techniques)
  - Q178692 (technologie LED)
  - Q60528 (éclairage)

**P2770 - source de revenus (source of income)**
- Q44847 (prestation de services)

---

## 3. Stratégie de backlinks autoritaires

### 3.1 Annuaires professionnels

**Objectif :** Établir la légitimité et l'autorité d'EOLIYA

**Annuaires prioritaires (gratuits) :**

**1. Google Business Profile**
- https://business.google.com
- Fiche complète avec photos, horaires, services
- Collecte d'avis clients (objectif : 10+ avis 5 étoiles)
- Lien vers le site web
- **Impact AIO :** Majeur (source Google Knowledge Graph)

**2. Pages Jaunes / PagesJaunes.fr**
- https://www.pagesjaunes.fr
- Inscription entreprise gratuite
- Catégorie : "Bureau d'études bâtiment"
- Description complète

**3. Société.com**
- Fiche entreprise auto-générée
- Vérifier et compléter les informations
- Ajouter description si possible

**4. LinkedIn Company Page**
- https://www.linkedin.com/company/eoliya-ingenierie
- Profil complet avec logo, bannière, description
- Publications régulières (1-2 par mois minimum)
- Profils employés à jour avec mention d'EOLIYA
- **Impact AIO :** Majeur (source fiable pour LLMs)

**5. Kompass**
- https://fr.kompass.com
- Annuaire B2B international
- Inscription gratuite de base

**6. Europages**
- https://www.europages.fr
- Annuaire B2B européen
- Inscription gratuite

**7. Yelp**
- https://www.yelp.fr
- Utile pour la réputation
- Collecte d'avis

**Annuaires spécialisés BTP/Ingénierie :**

**8. BatiPro**
- https://www.batipro.com
- Annuaire professionnels du bâtiment

**9. Batiweb**
- https://www.batiweb.com
- Portail BTP français

**10. Syndicats professionnels** [si adhésion]
- SERCE (électricité)
- SYNTEC Ingénierie
- FFB (Fédération Française du Bâtiment)

### 3.2 Mentions dans sources autoritaires

**Wikipedia**

**Option 1 : Article dédié EOLIYA** (difficile)
- Critères de notoriété Wikipedia très stricts
- Nécessite sources secondaires indépendantes (presse)
- Peu probable sans médiatisation importante

**Option 2 : Mentions dans articles existants** (faisable)
- Article "17e arrondissement de Paris" → Section "Économie" : mentionner EOLIYA comme entreprise notable du quartier
- Article "Conseil d'État (France)" → Section "Bâtiments" : mentionner projets de rénovation avec EOLIYA (si sources)
- Article "Relamping" ou "LED" → Exemples de projets

**Procédure pour ajout sur Wikipedia :**
1. NE PAS créer article EOLIYA directement (sera supprimé)
2. Proposer ajout sur page de discussion de l'article cible
3. Fournir sources secondaires fiables
4. Attendre consensus de la communauté
5. Faire l'ajout de manière neutre et factuelle

**Sources secondaires à obtenir :**
- Articles de presse locale (Paris 17, Le Parisien)
- Magazines spécialisés BTP (Le Moniteur, Batiactu)
- Études de cas publiées
- Interviews du dirigeant

**Presse et médias spécialisés**

**Cibles pour obtenir des mentions :**

**1. Presse BTP**
- Le Moniteur : https://www.lemoniteur.fr
- Batiactu : https://www.batiactu.com
- Bâtiment Entretien : https://www.batiment-entretien.fr

**Actions :**
- Communiqués de presse projets notables
- Proposer articles techniques (éclairage LED, normes ERP)
- Interviews experts

**2. Presse économique locale**
- Le Parisien - rubrique économie
- Paris 17e - publications locales

**3. Magazines spécialisés éclairage**
- Lux - La revue de l'éclairage
- LED Magazine

### 3.3 Profils sociaux et réseaux professionnels

**LinkedIn** (priorité absolue)

**Page entreprise :**
- URL : linkedin.com/company/eoliya-ingenierie
- Logo, bannière professionnelle
- Description complète (500+ mots)
- Coordonnées à jour
- Publications régulières (2-4 par mois)
- Contenus : projets, actualités, conseils techniques

**Profils employés :**
- Tous les employés avec profil LinkedIn complet
- Mention "Travaille chez EOLIYA Ingénierie"
- Expertises, certifications, formations
- Publications et partages

**Objectif :** 100+ abonnés à 6 mois, 500+ à 1 an

**Facebook** (secondaire)

- Page entreprise : facebook.com/eoliya
- Publications 1-2 par mois minimum
- Photos de projets, équipe, événements
- Lien vers site web

**Twitter/X** (si ressources disponibles)

- Compte : @eoliya
- Tweets hebdomadaires
- Hashtags : #LED #éclairage #ingénierie #BTP #Paris

**Instagram** (optionnel)

- Contenu visuel : avant/après projets relamping
- Photos d'installations, luminaires sur mesure

**YouTube** (optionnel mais impactant)

- Chaîne EOLIYA Ingénierie
- Vidéos :
  - Présentation de l'entreprise
  - Time-lapse de projets
  - Explications techniques (Comment fonctionne le relamping LED ?)
  - Témoignages clients

---

## 4. Optimisation Google Knowledge Graph

### 4.1 Obtenir un Knowledge Panel Google

**Conditions pour obtenir un Knowledge Panel :**
- Entité Wikidata créée et complète
- Google Business Profile complet
- Site web avec JSON-LD Organization/LocalBusiness
- Présence sur réseaux sociaux (LinkedIn, Facebook)
- Mentions sur sites autoritaires

**Processus :**
1. Compléter tous les éléments ci-dessus
2. Attendre indexation par Google (1-3 mois)
3. Revendiquer le Knowledge Panel via Google Search
4. Compléter/corriger les informations

**Revendiquer le Knowledge Panel :**
1. Rechercher "EOLIYA Ingénierie" sur Google
2. Si Knowledge Panel apparaît, cliquer "Suggérer une modification"
3. Choisir "Revendiquer cette fiche"
4. Vérification par email ou téléphone entreprise
5. Accès au tableau de bord pour édition

### 4.2 Optimiser pour Google Knowledge Graph

**Schema.org sameAs - liens vers profils**

Dans le JSON-LD Organization du site :

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EOLIYA Ingénierie",
  "sameAs": [
    "https://www.wikidata.org/wiki/Q[NUMERO]",
    "https://www.linkedin.com/company/eoliya-ingenierie",
    "https://www.facebook.com/eoliya",
    "https://twitter.com/eoliya",
    "https://fr.kompass.com/eoliya",
    "https://www.europages.fr/eoliya"
  ]
}
```

**Entity linking dans le contenu**

Lier systématiquement vers entités Wikipedia/Wikidata :

```html
<p>
  <span itemscope itemtype="https://schema.org/Organization">
    <a href="https://www.eoliya.com" itemprop="url">
      <span itemprop="name">EOLIYA Ingénierie</span>
    </a>
  </span>
  est un
  <a href="https://fr.wikipedia.org/wiki/Bureau_d%27%C3%A9tudes_techniques"
     rel="external"
     itemscope itemtype="https://schema.org/DefinedTerm"
     itemprop="about">
    <span itemprop="name">bureau d'études techniques</span>
  </a>
  basé à
  <a href="https://fr.wikipedia.org/wiki/Paris"
     rel="external"
     itemscope itemtype="https://schema.org/City">
    <span itemprop="name">Paris</span>
  </a>.
</p>
```

---

## 5. Stratégie de contenu pour renforcer l'autorité

### 5.1 Création de contenus citables

**Articles de blog technique (2 par mois minimum)**

**Sujets prioritaires :**
1. "Guide complet du relamping LED en 2026"
2. "Normes d'éclairage ERP : tout ce qu'il faut savoir"
3. "Comment calculer le ROI d'un projet LED"
4. "Éclairage de sécurité : la norme NFC 71-121 expliquée"
5. "LED vs fluorescent : comparatif complet"
6. "Concevoir un luminaire technique sur mesure"
7. "Qu'est-ce que l'indice UGR en éclairage ?"
8. "Les aides financières pour le relamping LED"

**Format optimal :**
- 1 500-2 500 mots
- Données chiffrées et sources citées
- Schémas, tableaux, infographies
- Encadré "Points clés à retenir"
- Mention d'expertise EOLIYA

**Objectif :** Devenir source de référence citée par les IA

### 5.2 Études de cas détaillées

**Créer 10 études de cas complètes :**

**Template :**

**Titre :** "Projet de relamping LED pour [Client] à [Lieu]"

**Client :** [Nom ou secteur si confidentiel]
**Secteur :** [Tertiaire / Hôtellerie / Industrie / etc.]
**Localisation :** [Ville, département]
**Date :** [Année]
**Surface :** [m²]
**Budget :** [Fourchette si possible]

**Contexte et objectifs :**
[2-3 paragraphes décrivant la situation initiale, les contraintes, les attentes du client]

**Solution EOLIYA :**
[Description détaillée de la solution technique proposée]
- Points lumineux remplacés : [nombre]
- Type de LED installées : [modèles]
- Contraintes spécifiques gérées : [liste]

**Méthodologie :**
1. [Étape 1 avec durée]
2. [Étape 2 avec durée]
[...]

**Résultats chiffrés :**
- Économie d'énergie : XX% (XX kWh/an)
- Économie financière : XX €/an
- ROI : X,X ans
- Amélioration du confort : [mesures avant/après]
- Conformité : [normes respectées]

**Témoignage client :**
> "[Citation du client]"
> — [Fonction], [Entreprise]

**Photos avant/après :**
[Galerie d'images]

**Objectif :** Ces études de cas seront indexées et citées par les IA comme preuves de compétence

### 5.3 Livre blanc / Guide pratique

**"Le Guide Complet du Relamping LED pour les Entreprises" (PDF téléchargeable)**

**Contenu (30-50 pages) :**
1. Introduction au relamping LED
2. Pourquoi passer aux LED en 2026 ?
3. Les différents types de LED
4. Comment calculer vos économies potentielles
5. Les normes à respecter (EN 12464-1, NFC 71-121, etc.)
6. Les aides financières disponibles (CEE, ADEME)
7. Comment choisir son prestataire
8. Étude de cas : 5 projets EOLIYA
9. FAQ complète
10. Glossaire technique

**Distribution :**
- PDF gratuit téléchargeable sur le site (formulaire email)
- Envoi aux prospects
- Partage sur LinkedIn, SlideShare
- Dépôt sur HAL (archives ouvertes) si format académique

**Impact AIO :**
Document citable, source d'autorité, référence pour LLMs

---

## 6. Mesure de la présence dans les Knowledge Graphs

### 6.1 Vérifications régulières (mensuelles)

**Wikidata**
- Vérifier que l'entité EOLIYA existe toujours
- Vérifier que les informations sont à jour
- Surveiller les éventuelles modifications par d'autres contributeurs
- Ajouter de nouvelles propriétés pertinentes

**Google Knowledge Panel**
- Rechercher "EOLIYA Ingénierie" sur Google
- Vérifier l'apparition du Knowledge Panel
- Vérifier l'exactitude des informations
- Suivre l'évolution du contenu

**Citations dans LLMs**
- Tester 10 requêtes mensuelles dans ChatGPT, Claude, Perplexity, Gemini
- Exemples :
  - "Quel bureau d'études pour relamping LED à Paris ?"
  - "Entreprise spécialisée luminaires sur mesure Paris"
  - "Conseil TCE Île-de-France"
  - "EOLIYA Ingénierie c'est quoi ?"
  - "Bureau d'études ingénierie bâtiment Paris 17"
- Noter si EOLIYA est cité, position, exactitude

### 6.2 Dashboard de suivi

**Google Sheets : "Présence Knowledge Graph EOLIYA"**

**Onglet 1 - Wikidata**
| Date | Q-code | Propriétés renseignées | Sources ajoutées | Liens entités | Notes |
|------|--------|------------------------|------------------|---------------|-------|
| Mai 2026 | Q123456 | 18 | 12 | 5 | Création initiale |

**Onglet 2 - Google Knowledge Panel**
| Date | Apparaît ? | Informations exactes ? | Photos | Avis | Actions |
|------|------------|------------------------|--------|------|---------|
| Mai 2026 | Non | - | - | - | Attendre indexation |

**Onglet 3 - Citations LLMs**
| Date | Requête | ChatGPT | Claude | Perplexity | Gemini | Score |
|------|---------|---------|--------|------------|--------|-------|
| Mai 2026 | "Bureau LED Paris" | ❌ | ❌ | ❌ | ❌ | 0% |

**Objectifs à 6 mois :**
- Entité Wikidata complète avec 25+ propriétés
- Google Knowledge Panel actif
- 30% de citations dans LLMs sur requêtes ciblées

**Objectifs à 12 mois :**
- 50+ propriétés Wikidata
- Knowledge Panel enrichi (photos, avis, FAQ)
- 50% de citations dans LLMs

---

## 7. Entretien et mise à jour

### 7.1 Maintenance Wikidata (trimestrielle)

**À vérifier tous les 3 mois :**
- Coordonnées toujours exactes (téléphone, email, adresse)
- Site web actif et URL inchangée
- Profils sociaux actifs
- Effectif à jour
- Nouveaux projets notables à ajouter
- Nouvelles certifications ou récompenses

**Ajout de nouvelles déclarations :**
- Nouveaux clients prestigieux
- Nouveaux domaines d'activité
- Nouvelles technologies maîtrisées
- Évolution de l'effectif
- Nouveaux locaux (si déménagement)

### 7.2 Veille et défense de la réputation

**Surveiller les modifications Wikidata**
- Activer les notifications pour l'entité EOLIYA
- Vérifier mensuellement l'historique des modifications
- Corriger les erreurs éventuelles (avec sources)
- Répondre aux discussions sur la page de discussion

**Google Knowledge Panel**
- Utiliser le tableau de bord Google My Business
- Répondre aux avis (positifs et négatifs)
- Corriger les informations erronées suggérées
- Ajouter des photos régulièrement

**Recherches nominatives**
- Google Alert sur "EOLIYA Ingénierie"
- Surveillance mentions réseaux sociaux
- Correction des informations erronées

---

## 8. Checklist complète

### Phase 1 : Création (Mois 1)

- [ ] Créer compte Wikidata
- [ ] Créer entité EOLIYA avec 15+ propriétés essentielles
- [ ] Ajouter sources pour chaque déclaration
- [ ] Lier EOLIYA à entités existantes (Paris, clients, concepts)
- [ ] Compléter Google Business Profile à 100%
- [ ] Optimiser profil LinkedIn entreprise
- [ ] Ajouter sameAs dans JSON-LD du site

### Phase 2 : Expansion (Mois 2-3)

- [ ] Inscription dans 10 annuaires professionnels
- [ ] Créer entités Wikidata pour projets notables (si applicable)
- [ ] Publier 4 articles de blog techniques
- [ ] Créer 3 études de cas détaillées
- [ ] Demander avis clients sur Google (objectif 10+)
- [ ] Publier 2 posts LinkedIn par semaine

### Phase 3 : Autorité (Mois 4-6)

- [ ] Compléter entité Wikidata à 25+ propriétés
- [ ] Rédiger et publier livre blanc PDF
- [ ] Obtenir 2-3 mentions dans presse spécialisée
- [ ] Créer 5 études de cas supplémentaires
- [ ] Atteindre 100+ abonnés LinkedIn
- [ ] Revendiquer Knowledge Panel Google (si apparu)

### Phase 4 : Consolidation (Mois 7-12)

- [ ] Entité Wikidata avec 50+ propriétés
- [ ] 20+ articles de blog publiés
- [ ] 10 études de cas complètes
- [ ] Présence dans 20 annuaires
- [ ] 20+ avis Google
- [ ] Knowledge Panel Google complet et actif
- [ ] 30-50% de citations dans tests LLMs

---

## 9. Ressources

### Documentation Wikidata

- [Wikidata Introduction](https://www.wikidata.org/wiki/Wikidata:Introduction)
- [Wikidata Tours (tutoriels)](https://www.wikidata.org/wiki/Wikidata:Tours)
- [Liste des propriétés](https://www.wikidata.org/wiki/Wikidata:List_of_properties)
- [Wikidata for business](https://www.wikidata.org/wiki/Wikidata:WikiProject_Business)

### Outils

- [Wikidata Query Service](https://query.wikidata.org/) - Requêtes SPARQL
- [Reasonator](https://reasonator.toolforge.org/) - Visualisation d'entités
- [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph)
- [Google My Business](https://business.google.com)

### Communauté

- [Forum Wikidata](https://www.wikidata.org/wiki/Wikidata:Project_chat)
- [Telegram Wikidata](https://t.me/joinchat/F8RYRg4p3l4gK7yNHx6m0g)
- Groupe LinkedIn "Wikidata"

---

## 10. Exemple : Requête SPARQL pour vérifier EOLIYA

Une fois l'entité créée, cette requête SPARQL permet de visualiser toutes les propriétés :

```sparql
SELECT ?property ?propertyLabel ?value ?valueLabel WHERE {
  wd:Q[NUMERO_EOLIYA] ?property ?value.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en". }
}
```

Exécuter sur : https://query.wikidata.org/

---

**Document maintenu par Nejib Aloui**
**Contact :** contact@eoliya.com
**Version :** 1.0 - Mai 2026

---

## Annexe : Template de communiqué de presse

**À utiliser pour obtenir mentions dans la presse spécialisée**

---

**COMMUNIQUÉ DE PRESSE**

**EOLIYA Ingénierie : 15 ans d'expertise en relamping LED et ingénierie du bâtiment à Paris**

*Paris, [Date] 2026* – EOLIYA Ingénierie, bureau d'études techniques spécialisé dans l'ingénierie du bâtiment, célèbre ses 15 ans d'activité avec un bilan de 150 projets réalisés pour des clients prestigieux comme le Conseil d'État, l'Institut de France ou Veepee.

**Un acteur reconnu du relamping LED en Île-de-France**

Depuis 2011, EOLIYA accompagne entreprises et institutions dans leur transition énergétique grâce au relamping LED. Avec plus de 50 000 points lumineux remplacés, l'entreprise a permis à ses clients d'économiser en moyenne 80% sur leurs factures d'éclairage, avec un retour sur investissement de 2 à 4 ans.

"Le relamping LED n'est pas qu'une question d'économies d'énergie, c'est aussi une amélioration du confort visuel et une mise aux normes obligatoire pour les ERP", explique [Nom], directeur d'EOLIYA Ingénierie.

**Trois pôles d'expertise**

EOLIYA intervient sur trois domaines complémentaires :

1. **Conseil TCE et Maîtrise d'œuvre** : Pilotage de projets de construction et rénovation pour entreprises et collectivités
2. **Relamping LED** : Audit, conception, fourniture et installation de solutions LED haute performance
3. **Luminaires sur mesure** : Conception et fabrication de luminaires techniques adaptés aux contraintes architecturales et normatives (ATEX, ERP, etc.)

**Des clients prestigieux qui renouvellent leur confiance**

Parmi les références d'EOLIYA : le Conseil d'État (partenaire technique depuis 2018), l'Institut de France, les groupes Veepee, Barrière, Vinci Energies et E.Leclerc.

**Contact presse :**
[Nom]
EOLIYA Ingénierie
Tél. : 01 34 22 30 12
Email : contact@eoliya.com
Site : www.eoliya.com

---
