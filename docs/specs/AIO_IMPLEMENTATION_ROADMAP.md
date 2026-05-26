# Roadmap d'Implémentation AIO - EOLIYA Ingénierie

## Plan d'action complet pour optimisation IA
**Auteur :** Nejib Aloui
**Dernière mise à jour :** Mai 2026
**Version :** 1.0

---

## Vue d'ensemble

Ce document synthétise la roadmap complète d'implémentation de la stratégie AIO (AI Optimization) pour EOLIYA Ingénierie sur 6 mois. Il consolide les actions des 6 documents de spécification créés.

**Documents de référence :**
1. `AIO_STRATEGY.md` - Stratégie générale AIO/GEO
2. `AI_STRUCTURED_DATA.md` - Données structurées JSON-LD
3. `AI_CONTENT_GUIDELINES.md` - Guide de rédaction optimisée IA
4. `FAQ_AIO.md` - FAQ optimisée pour citation IA
5. `KNOWLEDGE_GRAPH.md` - Présence Wikidata et Knowledge Graphs
6. Fichiers : `llms.txt`, `ai.txt`, `ai-plugin.json`

---

## Timeline générale

```
MOIS 1-2 : FONDATIONS
├── Semaine 1-2 : Données structurées (JSON-LD)
├── Semaine 3-4 : Contenu de base (FAQ, À propos)
├── Semaine 5-6 : Fichiers IA (llms.txt, ai.txt)
└── Semaine 7-8 : Entity linking

MOIS 3-4 : AUTORITÉ
├── Mois 3 : Présence externe (Wikidata, annuaires)
└── Mois 4 : Contenu autoritaire (études de cas, certifications)

MOIS 5-6 : OPTIMISATION
├── Mois 5 : Raffinement (analyse logs, optimisations)
└── Mois 6 : Mesure (tests citation, rapport, ajustements)
```

---

## PHASE 1 : FONDATIONS (Mois 1-2)

### Semaine 1-2 : Structured Data

**Objectif :** Implémenter JSON-LD sur toutes les pages

#### Tâches développement

**1. Créer composant StructuredData**
```bash
frontend/src/components/SEO/StructuredData.tsx
```
- Composant React réutilisable
- Props : `data` (object JSON-LD)
- Rendu : `<script type="application/ld+json">`

**2. Créer schemas JSON**
```bash
frontend/src/data/schemas/
├── organization.json         # Schema Organization
├── local-business.json       # Schema LocalBusiness
├── service-conseil-tce.json  # Service TCE
├── service-relamping-led.json # Service Relamping
├── service-luminaires.json   # Service Luminaires
└── faq.json                  # FAQPage (à créer après contenu FAQ)
```

**3. Intégrer dans layout principal**
```typescript
// frontend/src/app/layout.tsx
import { StructuredData } from '@/components/SEO/StructuredData';
import organizationSchema from '@/data/schemas/organization.json';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <StructuredData data={organizationSchema} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**4. Intégrer dans pages services**
```typescript
// frontend/src/app/services/relamping-led/page.tsx
import relampingSchema from '@/data/schemas/service-relamping-led.json';
import breadcrumbSchema from '@/data/schemas/breadcrumb-relamping.json';

export default function RelampingPage() {
  return (
    <>
      <StructuredData data={relampingSchema} />
      <StructuredData data={breadcrumbSchema} />
      {/* Contenu */}
    </>
  );
}
```

**5. Validation**
- [ ] Tester toutes les pages avec [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Valider JSON-LD avec [Schema.org Validator](https://validator.schema.org/)
- [ ] Vérifier absence d'erreurs dans Google Search Console

**Templates JSON-LD :** Voir `AI_STRUCTURED_DATA.md` sections 2-8

**Durée estimée :** 2-3 jours développement + 1 jour tests

---

### Semaine 3-4 : Contenu de base

**Objectif :** Créer contenu optimisé IA (FAQ, À propos)

#### Tâches rédaction

**1. Page FAQ complète**
- Copier le contenu de `docs/content/FAQ_AIO.md`
- Créer page `/faq` sur le site
- Format : accordéons dépliables
- Ajouter sommaire avec ancres
- Implémenter FAQPage JSON-LD

**2. Page "À propos" E-E-A-T**
- Rédiger selon template `AI_CONTENT_GUIDELINES.md` section 3.2
- Sections :
  - Histoire (15 ans depuis 2011)
  - Équipe (profils experts avec certifications)
  - Chiffres clés (150+ projets, 50 000+ LED, etc.)
  - Clients de référence (logos + descriptions)
  - Certifications et garanties
  - Méthodologie en 5 étapes
  - Engagements
  - Informations légales

**3. Page équipe**
- Profil de chaque membre clé
- Photo, nom, fonction, formation, expertise
- JSON-LD Person pour chaque profil

**4. Optimiser pages services**
- Reformuler selon format Q&A (voir `AI_CONTENT_GUIDELINES.md` section 7.2)
- Ajouter sections :
  - Pourquoi choisir EOLIYA (E-E-A-T)
  - Notre processus en X étapes
  - FAQ intégrée (5-7 questions)
  - Exemples/Études de cas
- Entity linking (liens Wikipedia pour concepts)

**5. Glossaire**
- Créer page `/glossaire`
- Définir 20-30 termes techniques
- Lier depuis le contenu des pages

**Durée estimée :** 5-7 jours rédaction

---

### Semaine 5-6 : Fichiers IA

**Objectif :** Déployer fichiers spécifiques crawlers IA

#### Tâches déploiement

**1. Fichier llms.txt**
- Fichier déjà créé : `frontend/public/llms.txt`
- Vérifier accessibilité : https://www.eoliya.com/llms.txt
- Mettre à jour avec informations finales (une fois contenu site finalisé)

**2. Fichier ai.txt**
- Fichier déjà créé : `frontend/public/ai.txt`
- Vérifier accessibilité : https://www.eoliya.com/ai.txt
- Ajuster permissions si nécessaire

**3. Fichier ai-plugin.json**
- Fichier déjà créé : `frontend/public/.well-known/ai-plugin.json`
- Vérifier accessibilité : https://www.eoliya.com/.well-known/ai-plugin.json
- Ajouter Q-code Wikidata une fois créé

**4. Tester accessibilité**
```bash
curl https://www.eoliya.com/llms.txt
curl https://www.eoliya.com/ai.txt
curl https://www.eoliya.com/.well-known/ai-plugin.json
```

**5. Soumettre à indexation**
- Google Search Console : soumettre URLs
- Bing Webmaster Tools : soumettre URLs

**Durée estimée :** 1 jour

---

### Semaine 7-8 : Entity Linking

**Objectif :** Lier EOLIYA à entités reconnues (Wikipedia, Wikidata)

#### Tâches techniques

**1. Identifier entités à lier**
- Paris 17e : https://fr.wikipedia.org/wiki/17e_arrondissement_de_Paris
- Bureau d'études techniques : https://fr.wikipedia.org/wiki/Bureau_d%27%C3%A9tudes_techniques
- LED : https://fr.wikipedia.org/wiki/Diode_électroluminescente
- Conseil d'État : https://fr.wikipedia.org/wiki/Conseil_d%27État_(France)
- Institut de France : https://fr.wikipedia.org/wiki/Institut_de_France
- Maîtrise d'œuvre : https://fr.wikipedia.org/wiki/Ma%C3%AEtrise_d%27%C5%93uvre

**2. Ajouter liens dans contenu**
- Première mention de chaque concept → lien Wikipedia
- Attributs : `rel="external noopener"`
- Markup Schema.org si pertinent

**3. Implémenter breadcrumbs sémantiques**
- JSON-LD BreadcrumbList sur toutes les pages niveau 2+
- Voir `AI_STRUCTURED_DATA.md` section 6

**4. Ajouter sameAs dans JSON-LD**
```json
{
  "sameAs": [
    "https://www.wikidata.org/wiki/Q[A_CREER]",
    "https://www.linkedin.com/company/eoliya-ingenierie",
    "https://fr.kompass.com/eoliya",
    "https://www.europages.fr/eoliya"
  ]
}
```

**Durée estimée :** 2-3 jours

---

## PHASE 2 : AUTORITÉ (Mois 3-4)

### Mois 3 : Présence externe

**Objectif :** Établir EOLIYA dans les Knowledge Graphs

#### Tâche 1 : Créer entité Wikidata (Priorité absolue)

**Étapes :**
1. Créer compte Wikidata (si pas déjà fait)
2. Créer entité EOLIYA (voir `KNOWLEDGE_GRAPH.md` section 2.3)
3. Renseigner 15+ propriétés essentielles :
   - P31 (instance of) : Q4830453 (business)
   - P17 (country) : Q142 (France)
   - P159 (headquarters) : Q161741 (Paris 17e)
   - P571 (inception) : 2011
   - P856 (website) : https://www.eoliya.com
   - P625 (coordinates) : 48.8849, 2.2972
   - P1329 (phone) : +33 1 34 22 30 12
   - P968 (email) : contact@eoliya.com
   - P452 (industry) : Q193838 (engineering)
   - [Etc. - voir liste complète dans KNOWLEDGE_GRAPH.md]
4. Ajouter sources pour chaque déclaration
5. Lier à entités existantes (Paris, clients, concepts)

**Durée estimée :** 1 journée

**Responsable :** Nejib Aloui ou personne désignée

---

#### Tâche 2 : Inscription annuaires professionnels

**10 annuaires prioritaires :**

1. **Google Business Profile** (CRITIQUE)
   - URL : https://business.google.com
   - Fiche complète à 100%
   - Photos (minimum 10) : façade, équipe, projets
   - Horaires, services, zone d'intervention
   - Lien site web
   - **Objectif :** 10+ avis clients 5 étoiles à 3 mois

2. **LinkedIn Company Page** (CRITIQUE)
   - URL : https://www.linkedin.com/company/eoliya-ingenierie
   - Profil complet (logo, bannière, description 500+ mots)
   - Publications régulières (2 par semaine minimum)
   - **Objectif :** 100+ abonnés à 3 mois

3. **Pages Jaunes**
   - https://www.pagesjaunes.fr
   - Inscription gratuite
   - Catégorie : Bureau d'études bâtiment

4. **Société.com**
   - Compléter fiche auto-générée

5. **Kompass**
   - https://fr.kompass.com
   - Inscription B2B

6. **Europages**
   - https://www.europages.fr
   - Annuaire B2B européen

7. **Yelp**
   - https://www.yelp.fr
   - Demander avis clients

8. **BatiPro**
   - https://www.batipro.com

9. **Batiweb**
   - https://www.batiweb.com

10. **Syndicats professionnels** (si adhésion)
    - SERCE, SYNTEC Ingénierie, FFB

**Durée estimée :** 2-3 jours

---

#### Tâche 3 : Optimiser Google Business Profile

**Actions spécifiques :**
- Compléter tous les champs (y compris attributs spéciaux)
- Ajouter 20+ photos haute qualité :
  - Façade du bureau
  - Équipe au travail
  - Projets réalisés (avant/après)
  - Luminaires installés
  - Chantiers
- Rédiger description complète (750 caractères max)
- Définir zone de service (Île-de-France)
- Activer messagerie
- Publier 1 post Google par semaine

**Demande d'avis clients :**
- Identifier 20 clients satisfaits récents
- Envoyer email personnalisé avec lien direct
- Relance si pas de réponse sous 1 semaine
- **Objectif :** 10+ avis positifs en 3 mois

**Réponses aux avis :**
- Répondre à TOUS les avis (positifs et négatifs)
- Délai : sous 48h
- Ton : professionnel, empathique, constructif

**Durée estimée :** 2 jours initial + 1h/semaine maintenance

---

### Mois 4 : Contenu autoritaire

**Objectif :** Démontrer expertise et expérience (E-E-A-T)

#### Tâche 1 : Créer 5 études de cas détaillées

**Template (voir `KNOWLEDGE_GRAPH.md` section 5.2) :**
- Titre : "Projet de relamping LED pour [Client] à [Lieu]"
- Client, secteur, localisation, date, surface, budget
- Contexte et objectifs (2-3 paragraphes)
- Solution EOLIYA (détails techniques)
- Méthodologie (étapes)
- Résultats chiffrés (économies, ROI, conformité)
- Témoignage client
- Photos avant/après

**5 études de cas à créer :**

1. **Projet Conseil d'État** (si autorisé)
   - Client prestigieux = autorité maximale
   - Maintenance éclairage depuis 2018

2. **Projet tertiaire Veepee**
   - Relamping bureaux grande surface
   - Économies chiffrées

3. **Projet hôtellerie Barrière**
   - Luminaires sur mesure
   - Contraintes exploitation continue

4. **Projet ERP centre commercial E.Leclerc**
   - Mise aux normes NFC 71-121
   - Éclairage de sécurité

5. **Projet industriel avec luminaires ATEX**
   - Démonstration expertise technique
   - Environnement explosif

**Durée estimée :** 2-3 jours rédaction (5 études × 0,5 jour)

---

#### Tâche 2 : Page Projets avec portfolio

**Créer page `/projets` :**
- Galerie des 150+ projets réalisés
- Filtres : Secteur, Service, Localisation, Date
- Chaque projet : vignette, titre, client (si autorisé), description courte
- Clic → Page étude de cas détaillée

**Catégories de projets :**
- Conseil TCE
- Relamping LED
- Luminaires sur mesure
- Mise aux normes ERP
- Industrie / ATEX

**Durée estimée :** 3-4 jours développement + intégration contenu

---

#### Tâche 3 : Page Certifications et Normes

**Créer page `/certifications` :**
- Certifications entreprise (Qualibat, RGE si applicable)
- Assurances (RC Pro, Décennale) avec attestations
- Normes maîtrisées :
  - NFC 71-121 (éclairage sécurité ERP)
  - EN 12464-1 (éclairage lieux de travail)
  - BAEL (éclairage public)
  - ATEX (atmosphères explosives)
  - PMR (accessibilité)
- Formations et certifications de l'équipe
- Liens vers textes officiels (AFNOR, Légifrance)

**Durée estimée :** 1 jour rédaction

---

#### Tâche 4 : Publier 4 articles de blog techniques

**Sujets prioritaires (voir `KNOWLEDGE_GRAPH.md` section 5.1) :**

**Article 1 : "Guide Complet du Relamping LED en 2026"**
- 2 000-2 500 mots
- Structure : Intro, Pourquoi LED, Types de LED, Calcul économies, Normes, Aides, Choisir prestataire, FAQ
- Données chiffrées et sources citées
- Infographies (économies, comparatif LED vs autres)
- Encadré "Points clés" (citable par IA)

**Article 2 : "Normes d'Éclairage ERP : Tout ce qu'il faut savoir"**
- 1 500-2 000 mots
- NFC 71-121, EN 12464-1, Règlement ERP
- Exemples concrets par type d'ERP
- Sanctions en cas de non-conformité
- Checklist de vérification

**Article 3 : "Comment Calculer le ROI d'un Projet LED"**
- 1 500 mots
- Formule de calcul détaillée
- 3 exemples concrets (bureau, commerce, industrie)
- Outil de calcul interactif (si possible)
- Prise en compte des aides CEE

**Article 4 : "Qu'est-ce que l'Indice UGR en Éclairage ?"**
- 1 000-1 500 mots
- Définition UGR
- Exigences par type de local
- Facteurs influençant UGR
- Solutions pour réduire UGR
- Exemples photos avant/après

**Format de publication :**
- Blog sur site eoliya.com/blog
- Partage LinkedIn, Facebook
- Reprise SlideShare (PDF)

**Durée estimée :** 6-8 jours rédaction (4 articles × 1,5-2 jours)

---

## PHASE 3 : OPTIMISATION (Mois 5-6)

### Mois 5 : Raffinement

**Objectif :** Analyser premiers résultats et optimiser

#### Tâche 1 : Analyser logs crawlers IA (si disponibles)

**Dans Google Analytics 4 :**
- Créer segment "Bot traffic" (si non filtré)
- Identifier User-Agents contenant :
  - "GPTBot" (OpenAI)
  - "Claude-Web" (Anthropic)
  - "PerplexityBot"
  - "GoogleOther" (indexation supplémentaire)
- Analyser pages visitées par les bots
- Identifier contenu le plus crawlé

**Dans logs serveur (si accès) :**
```bash
# Rechercher crawlers IA dans access.log
grep -E "GPTBot|Claude|Perplexity|Bytespider" access.log

# Analyser fréquence de crawl
grep "GPTBot" access.log | wc -l
```

**Actions selon résultats :**
- Pages peu crawlées → améliorer maillage interne
- 404 errors → corriger liens cassés
- Fichiers bloqués → vérifier robots.txt

**Durée estimée :** 1 jour analyse

---

#### Tâche 2 : Tests de citation dans LLMs

**Créer protocole de test mensuel :**

**20 requêtes standard (voir `AIO_STRATEGY.md` section 4.3) :**
1. "Bureau d'études relamping LED Paris"
2. "Conseil TCE Paris 17"
3. "Luminaires sur mesure Paris"
4. "Mise aux normes ERP Île-de-France"
5. "Ingénierie bâtiment tertiaire Paris"
6. "Expert éclairage LED entreprise"
7. "Maîtrise d'œuvre électrique Paris"
8. "Bureau études techniques Paris Pereire"
9. "Relamping LED bureaux Paris"
10. "Conception luminaires techniques"
11. "Diagnostic énergétique éclairage Paris"
12. "Conformité PMR accessibilité Paris"
13. "Entreprise électricité tertiaire 75017"
14. "Conseil énergie LED bâtiment"
15. "Fabrication luminaires sur mesure"
16. "TCE travaux Paris"
17. "Audit éclairage ERP"
18. "Optimisation consommation LED"
19. "Bureau études éclairage architecture"
20. "Maintenance électrique Paris 17"

**4 LLMs à tester :**
- ChatGPT (GPT-4)
- Claude (Sonnet ou Opus)
- Perplexity
- Google Gemini

**Métriques à noter pour chaque requête/LLM :**
- EOLIYA cité : ✅ / ❌
- Position : 1er / 2e / 3e / autre / non cité
- Informations exactes : ✅ / ❌ / partielles
- Lien vers site : ✅ / ❌
- Source mentionnée : (Wikidata / site web / autre)

**Dashboard Google Sheets "Tests Citation IA EOLIYA" :**

| Date | Requête | ChatGPT | Claude | Perplexity | Gemini | Score global |
|------|---------|---------|--------|------------|--------|--------------|
| Mai 2026 | "Bureau LED Paris" | ❌ | ❌ | ❌ | ❌ | 0% |
| Juin 2026 | "Bureau LED Paris" | ✅ (3e) | ❌ | ✅ (1er) | ❌ | 50% |

**Calcul du score :**
- Score = (Nombre de citations) / (Nombre de tests) × 100
- Objectif mois 5 : >20%
- Objectif mois 6 : >30%

**Durée estimée :** 4-5 heures par session de test (mensuelle)

---

#### Tâche 3 : Optimiser contenu selon résultats tests

**Analyse des résultats :**
- Quelles requêtes génèrent des citations ? → Renforcer ce contenu
- Quelles informations sont citées ? → Format à reproduire
- Quelles informations sont erronées ? → Corriger source
- Quels LLMs citent le plus ? → Identifier différences

**Actions d'optimisation :**

**Si pas de citations :**
- Ajouter contenu Q&A direct sur ces sujets
- Renforcer données structurées
- Créer FAQ spécifique

**Si citations partielles :**
- Clarifier informations ambiguës
- Ajouter données chiffrées manquantes
- Citer sources autoritaires

**Si informations erronées :**
- Corriger sur le site
- Mettre à jour Wikidata
- Corriger Google Business Profile
- Vérifier cohérence partout

**Durée estimée :** 2-3 jours par itération

---

#### Tâche 4 : Ajouter contexte géographique renforcé

**Optimisation locale :**

**1. Mentions géographiques systématiques**
- Toujours mentionner "Paris 17ème" ou "131 Boulevard Pereire"
- Ajouter quartier : "Quartier Pereire-Ternes"
- Mentionner arrondissements voisins (8e, 16e, 18e)
- Citer monuments proches : Porte Maillot, Arc de Triomphe

**2. Pages de destination locales**
- Créer pages `/services/relamping-led-paris`
- `/services/relamping-led-hauts-de-seine`
- `/services/relamping-led-ile-de-france`
- Contenu adapté par zone

**3. Études de cas géolocalisées**
- Mentionner systématiquement adresse client (si autorisé)
- Carte interactive des projets réalisés
- Densité par département

**4. Schema LocalBusiness enrichi**
- geoRadius précis (100 km = Île-de-France)
- areaServed détaillé par département

**Durée estimée :** 2 jours

---

#### Tâche 5 : Créer contenus Q&A additionnels

**10 nouvelles questions à intégrer dans FAQ :**
1. "Comment choisir entre LED et autres technologies en 2026 ?"
2. "Quels sont les risques d'un relamping LED mal fait ?"
3. "EOLIYA intervient-il pour les copropriétés ?"
4. "Peut-on faire un relamping LED par zones successives ?"
5. "Comment financer un projet de relamping LED ?"
6. "Quelle différence entre tube LED retrofit et remplacement complet ?"
7. "Les LED sont-elles adaptées aux environnements humides ?"
8. "Comment entretenir des luminaires LED ?"
9. "Quelle température de couleur choisir pour des bureaux ?"
10. "EOLIYA peut-il intervenir en urgence ?"

**Format :** Même structure que FAQ_AIO.md

**Durée estimée :** 2 jours rédaction

---

### Mois 6 : Mesure et Ajustement

**Objectif :** Évaluer les résultats et ajuster la stratégie

#### Tâche 1 : Tests de citation systématiques

**Session de tests complète :**
- 20 requêtes × 4 LLMs = 80 tests
- Documenter dans Dashboard
- Calculer score global
- Comparer avec mois précédents
- Identifier progression

**Objectif mois 6 :** >30% de citations

**Durée estimée :** 1 journée

---

#### Tâche 2 : Analyse des résultats

**Métriques à compiler :**

**1. Présence Knowledge Graphs**
- Wikidata : Nombre de propriétés (objectif : 25+)
- Google Knowledge Panel : Apparu ? Complet ?
- LinkedIn : Nombre d'abonnés (objectif : 100+)
- Google Business : Nombre d'avis (objectif : 10+)

**2. Données structurées**
- Google Search Console : Rich Results valides
- Pages avec JSON-LD : 100% ?
- Erreurs/avertissements : 0

**3. Citations IA**
- Score de citation global : ?% (objectif : 30%+)
- Meilleur LLM : ?
- Meilleures requêtes : ?
- Informations les plus citées : ?

**4. Contenu**
- Articles de blog publiés : ?
- Études de cas : ?
- Pages FAQ : ?
- Mots total publiés : ?

**5. Trafic**
- Évolution trafic organique
- Trafic référent depuis IA (si mesurable avec UTM)
- Mots-clés positionnés
- Impressions Google Search Console

**Durée estimée :** 2 jours analyse

---

#### Tâche 3 : Rapport AIO complet

**Créer document "Rapport AIO EOLIYA - [Mois] 2026"**

**Sommaire :**
1. **Executive Summary**
   - Objectifs de la stratégie AIO
   - Résultats clés (3-4 chiffres principaux)
   - Recommandations pour la suite

2. **Mise en œuvre**
   - Récapitulatif actions réalisées (phases 1-3)
   - Délais respectés vs prévus
   - Difficultés rencontrées

3. **Résultats détaillés**
   - Présence Knowledge Graphs (Wikidata, Google KP)
   - Données structurées (validation, couverture)
   - Citations IA (tableaux, graphiques)
   - Contenu créé (quantité, qualité)
   - Trafic et engagement

4. **Analyse comparative**
   - Évolution mois par mois
   - Comparaison objectifs vs réalisé
   - Benchmarking si possible (concurrents)

5. **Recommandations**
   - Actions prioritaires pour les 6 prochains mois
   - Optimisations à apporter
   - Nouvelles opportunités identifiées

6. **Annexes**
   - Screenshots (Wikidata, Knowledge Panel, etc.)
   - Tableaux de tests complets
   - Liste des contenus créés

**Format :** PDF de 15-25 pages

**Durée estimée :** 2-3 jours rédaction

---

#### Tâche 4 : Ajustements stratégiques

**Selon les résultats, décider des actions pour les 6 prochains mois :**

**Si score <30% :**
- Renforcer Wikidata (plus de propriétés, sources)
- Créer plus de contenu Q&A
- Améliorer E-E-A-T (plus de preuves d'autorité)
- Obtenir mentions presse

**Si score 30-50% :**
- Maintenir le rythme de publication
- Élargir les requêtes ciblées
- Optimiser contenu existant
- Développer contenu vidéo/multimédia

**Si score >50% :**
- Stratégie réussie, continuer
- Élargir à d'autres géographies (régions)
- Cibler requêtes plus génériques
- Créer contenu avancé/expert

**Nouvelles actions possibles (mois 7-12) :**
- Livre blanc PDF téléchargeable
- Webinaires enregistrés (YouTube)
- Podcast "Éclairage et Ingénierie"
- Collaborations avec influenceurs BTP
- Participation conférences (citations)
- Articles invités sur sites autoritaires

**Durée estimée :** 1 jour planification

---

## Checklist complète consolidée

### ✅ PHASE 1 : FONDATIONS (Mois 1-2)

**Semaine 1-2 : Structured Data**
- [ ] Créer composant StructuredData.tsx
- [ ] Créer 6 fichiers JSON-LD (Organization, LocalBusiness, 3 Services, FAQ)
- [ ] Intégrer dans layout principal
- [ ] Intégrer dans pages services
- [ ] Valider avec Google Rich Results Test (0 erreur)

**Semaine 3-4 : Contenu**
- [ ] Page FAQ complète (25 questions)
- [ ] Page À propos E-E-A-T complète
- [ ] Page Équipe avec profils
- [ ] Optimiser 3 pages services (format Q&A)
- [ ] Page Glossaire (20-30 termes)

**Semaine 5-6 : Fichiers IA**
- [ ] Vérifier accessibilité llms.txt
- [ ] Vérifier accessibilité ai.txt
- [ ] Vérifier accessibilité ai-plugin.json
- [ ] Soumettre à Google Search Console
- [ ] Soumettre à Bing Webmaster Tools

**Semaine 7-8 : Entity Linking**
- [ ] Identifier 10 entités à lier
- [ ] Ajouter liens Wikipedia dans contenu
- [ ] Implémenter breadcrumbs JSON-LD
- [ ] Ajouter sameAs dans Organization schema

---

### ✅ PHASE 2 : AUTORITÉ (Mois 3-4)

**Mois 3 : Présence externe**
- [ ] Créer entité Wikidata (15+ propriétés)
- [ ] Inscription 10 annuaires professionnels
- [ ] Optimiser Google Business Profile (10+ photos)
- [ ] Demander 20 avis clients (objectif 10+ obtenus)
- [ ] Optimiser LinkedIn Company (2 posts/semaine)

**Mois 4 : Contenu autoritaire**
- [ ] Créer 5 études de cas détaillées
- [ ] Page Projets avec portfolio
- [ ] Page Certifications et Normes
- [ ] Publier 4 articles de blog techniques

---

### ✅ PHASE 3 : OPTIMISATION (Mois 5-6)

**Mois 5 : Raffinement**
- [ ] Analyser logs crawlers IA
- [ ] Tests de citation LLMs (20 requêtes × 4 LLMs)
- [ ] Optimiser contenu selon résultats
- [ ] Ajouter contexte géographique renforcé
- [ ] Créer 10 nouvelles questions FAQ

**Mois 6 : Mesure**
- [ ] Tests de citation systématiques (session complète)
- [ ] Analyse des résultats (toutes métriques)
- [ ] Rapport AIO complet (PDF 15-25 pages)
- [ ] Ajustements stratégiques pour 6 prochains mois

---

## Ressources et contacts

### Équipe projet

**Chef de projet AIO :** Nejib Aloui
**Développeur front-end :** [À assigner]
**Rédacteur contenu :** [À assigner ou Nejib]
**Responsable Wikidata :** Nejib Aloui

### Outils nécessaires

**Développement :**
- Next.js 14 (déjà en place)
- Éditeur de texte/IDE

**Validation :**
- Google Rich Results Test : https://search.google.com/test/rich-results
- Schema.org Validator : https://validator.schema.org/
- Google Search Console : https://search.google.com/search-console

**Wikidata :**
- Compte Wikidata : https://www.wikidata.org/
- Wikidata Query Service : https://query.wikidata.org/

**Analytics :**
- Google Analytics 4
- Google Search Console
- Google Business Profile Insights

**Tests LLMs :**
- ChatGPT : https://chat.openai.com/
- Claude : https://claude.ai/
- Perplexity : https://www.perplexity.ai/
- Gemini : https://gemini.google.com/

### Budget estimé

**Coûts principaux :**
- Développement : Interne (temps Nejib + dev)
- Rédaction : Interne (temps Nejib) ou freelance (budget à prévoir)
- Photos projets : Interne ou photographe pro (500-1000€)
- Annuaires premium : 0€ (versions gratuites suffisantes)
- Outils : 0€ (tous gratuits)

**Budget externe si délégation partielle :**
- Rédacteur freelance : 0,10-0,15€/mot × 20 000 mots = 2 000-3 000€
- Photographe : 500-1 000€
- **Total estimé : 2 500-4 000€**

**ROI attendu :**
- Visibilité IA : Inestimable (nouveau canal)
- Citations dans LLMs : Leads qualifiés
- Autorité renforcée : Crédibilité accrue
- Trafic organique : +20-30% attendu à 6 mois

---

## Suivi et reporting

### Réunions recommandées

**Hebdomadaire (30 min) :**
- Point avancement tâches semaine
- Blocages éventuels
- Ajustements planning

**Mensuelle (1h) :**
- Revue des métriques
- Tests de citation LLMs
- Analyse résultats
- Planification mois suivant

**Trimestrielle (2h) :**
- Bilan global
- Rapport détaillé
- Ajustements stratégiques

### Dashboards à maintenir

**Google Sheets "AIO EOLIYA" (3 onglets) :**

1. **Planning & Tasks**
   - Liste tâches avec statut (À faire / En cours / Terminé)
   - Responsable, date prévue, date réalisée

2. **Tests Citation IA**
   - 20 requêtes × 4 LLMs × historique mensuel
   - Calcul automatique du score

3. **Métriques**
   - Wikidata : nombre propriétés
   - Google Business : nombre avis, note moyenne
   - LinkedIn : nombre abonnés
   - Contenu : nombre articles, études de cas, mots publiés
   - Trafic : évolution mensuelle

**Accès :** Partager avec toute l'équipe

---

## Conclusion

Cette roadmap détaille l'ensemble des actions nécessaires pour optimiser EOLIYA Ingénierie pour les intelligences artificielles sur 6 mois.

**Résultats attendus à 6 mois :**
- ✅ Entité Wikidata complète (25+ propriétés)
- ✅ Google Knowledge Panel actif
- ✅ 30%+ de citations dans tests LLMs
- ✅ Site 100% avec données structurées
- ✅ 20+ contenus optimisés IA publiés
- ✅ Présence renforcée dans 10+ annuaires
- ✅ Autorité établie (E-E-A-T démontré)

**Impact business attendu :**
- Leads qualifiés depuis IA assistants
- Crédibilité et autorité renforcées
- Trafic organique en hausse
- Positionnement "référence parisienne relamping LED"

**Prochaines étapes après 6 mois :**
- Élargir géographies ciblées
- Contenu multimédia (vidéo, podcast)
- Collaborations et partenariats
- Participation événements secteur
- Mentions presse spécialisée

---

**Document créé par Nejib Aloui**
**Contact :** contact@eoliya.com
**Version :** 1.0 - Mai 2026

**Bon courage pour la mise en œuvre ! 🚀**
