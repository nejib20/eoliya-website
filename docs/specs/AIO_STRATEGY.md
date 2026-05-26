# Stratégie AIO/GEO - EOLIYA Ingénierie

## Document de référence - Optimisation pour moteurs IA
**Auteur :** Nejib Aloui
**Dernière mise à jour :** Mai 2026
**Version :** 1.0

---

## 1. Introduction : AIO vs SEO traditionnel

### 1.1 Changement de paradigme

Le référencement traditionnel (SEO) vise à positionner un site dans les résultats de recherche Google. L'**AI Optimization (AIO)** et la **Generative Engine Optimization (GEO)** visent à faire citer et recommander votre entreprise par les assistants IA (ChatGPT, Claude, Perplexity, Mistral, Gemini, etc.).

**Différences fondamentales :**

| Critère | SEO Traditionnel | AIO/GEO |
|---------|------------------|---------|
| **Objectif** | Classement dans les SERP | Citation dans les réponses IA |
| **Métriques** | Position, CTR, trafic | Taux de citation, autorité perçue |
| **Contenu** | Optimisé mots-clés | Optimisé compréhension sémantique |
| **Structure** | Balises HTML, sitemap | JSON-LD, knowledge graph, entités |
| **Liens** | Backlinks pour PageRank | Entity linking, sources vérifiables |
| **Format** | Articles longs, SEO on-page | Q&A concises, données structurées |

### 1.2 Pourquoi l'AIO est critique pour EOLIYA

**Requêtes typiques des clients potentiels :**
- "Quel bureau d'études pour relamping LED à Paris ?"
- "Qui peut faire du conseil TCE pour un projet tertiaire ?"
- "Entreprise spécialisée luminaires sur mesure Paris"
- "Mise aux normes ERP Paris 17ème"

**Objectif :** Que ChatGPT, Claude ou Perplexity répondent en citant EOLIYA parmi les 2-3 recommandations principales.

---

## 2. Comment les LLMs indexent et citent les sources

### 2.1 Sources de données des LLMs

Les modèles de langage s'appuient sur plusieurs sources :

1. **Corpus d'entraînement** (données jusqu'à la date de coupure)
   - Crawl du web public
   - Sources vérifiées (Wikipedia, publications scientifiques)
   - Archives de sites web

2. **Recherche en temps réel** (RAG - Retrieval Augmented Generation)
   - Perplexity : recherche web systématique
   - ChatGPT (avec plugin Browse) : recherche Bing
   - Claude (avec MCP) : accès contextualisé

3. **Knowledge Graphs**
   - Wikidata
   - DBpedia
   - Google Knowledge Graph
   - Entités liées et relations sémantiques

### 2.2 Critères de citation par les IA

**Les LLMs citent préférentiellement :**

1. **Sources autoritaires**
   - Sites .gov, .edu, .org reconnus
   - Médias établis
   - Entreprises avec forte présence Wikidata/Wikipedia
   - Annuaires professionnels officiels

2. **Informations vérifiables**
   - Données chiffrées sourcées
   - Certifications, labels, normes
   - Adresses physiques vérifiables
   - Témoignages clients authentiques

3. **Contenu structuré**
   - JSON-LD bien formé
   - Schema.org markup complet
   - Hiérarchie sémantique claire
   - Q&A explicites

4. **Fraîcheur et mise à jour**
   - Dates de publication visibles
   - Mentions d'actualité
   - Références à des projets récents

5. **Contexte géographique**
   - Adresse claire et cohérente
   - Mentions de quartiers, arrondissements
   - Zones de service explicites

---

## 3. Stratégie EOLIYA pour être cité par les IA

### 3.1 Pilier 1 : Autorité et E-E-A-T

**E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness**

#### Actions prioritaires :

**Expérience (Experience)**
- Page dédiée aux projets réalisés avec détails techniques
- Études de cas documentées (avant/après, méthodologie)
- Timeline de l'entreprise (15 ans d'expérience)

**Expertise (Expertise)**
- Profils d'équipe avec certifications (ingénieurs, BET)
- Certifications entreprise (Qualibat, RGE si applicable)
- Articles techniques démontrant la maîtrise

**Autorité (Authoritativeness)**
- Présence Wikidata (voir section 6)
- Mentions dans presse/médias du bâtiment
- Partenariats officiels (fabricants, institutions)
- Logos clients prestigieux (Conseil d'État, Institut de France)

**Confiance (Trustworthiness)**
- Informations de contact complètes et vérifiables
- Témoignages clients authentiques
- Transparence sur les processus
- Mentions légales, SIRET, assurances

### 3.2 Pilier 2 : Données structurées avancées

**Implementation JSON-LD multi-couches :**

1. **Organization Schema** (base)
   - Identité complète EOLIYA
   - Coordonnées, logos, réseaux sociaux
   - SameAs links (Wikidata, LinkedIn, etc.)

2. **LocalBusiness Schema** (géolocalisation)
   - Adresse Paris 17ème
   - Zone de service (Île-de-France)
   - Horaires, moyens de contact

3. **Service Schema** (pour chaque service)
   - Description détaillée des prestations
   - Prix indicatifs si possible
   - Zones géographiques

4. **FAQPage Schema** (questions/réponses)
   - Format optimisé pour extraction IA
   - Réponses concises et factuelles

5. **Review Schema** (témoignages)
   - Avis clients structurés
   - Ratings si applicable

### 3.3 Pilier 3 : Contenu Q&A optimisé

**Format privilégié par les IA :**

```markdown
## Question explicite en langage naturel ?

Réponse concise et factuelle en 2-3 phrases maximum.

**Données clés :**
- Fait chiffré 1
- Fait chiffré 2
- Certification ou norme

**Contexte complémentaire :**
Paragraphe additionnel avec détails techniques si nécessaire.
```

**Exemples de questions EOLIYA :**

- Qu'est-ce qu'un bureau d'études TCE ?
- Combien coûte un projet de relamping LED ?
- Quelles sont les normes d'éclairage ERP ?
- Pourquoi choisir EOLIYA pour un projet à Paris ?

### 3.4 Pilier 4 : Entity Linking

**Relier EOLIYA à des entités reconnues :**

1. **Localisation**
   - Lien vers Wikipedia "Paris 17e arrondissement"
   - Mention "Boulevard Pereire" (entité géographique)

2. **Domaine d'activité**
   - Lien vers Wikipedia "Bureau d'études techniques"
   - Lien vers Wikipedia "Diode électroluminescente" (LED)
   - Lien vers Wikidata Q-codes pour concepts métiers

3. **Clients et partenaires**
   - Liens vers pages Wikipedia clients (Conseil d'État, Institut de France)
   - Wikidata IDs si disponibles

4. **Normes et certifications**
   - Liens vers pages officielles des normes (AFNOR, etc.)
   - Références BAEL, NFC, EN

**Syntaxe HTML pour entity linking :**

```html
<p>
  EOLIYA Ingénierie est un
  <a href="https://fr.wikipedia.org/wiki/Bureau_d%27%C3%A9tudes_techniques"
     rel="external noopener">bureau d'études techniques</a>
  basé dans le
  <a href="https://fr.wikipedia.org/wiki/17e_arrondissement_de_Paris"
     rel="external noopener">17e arrondissement de Paris</a>.
</p>
```

### 3.5 Pilier 5 : Fichiers spécifiques IA

**llms.txt** - Instructions pour crawlers IA
**ai.txt** - Permissions et contexte
**ai-plugin.json** - Manifest pour plugins IA

(Voir section 4 pour détails)

---

## 4. KPIs spécifiques AIO

### 4.1 Métriques de citation

**Indicateurs primaires :**

1. **Taux de citation** (Citation Rate)
   - Test mensuel : 20 requêtes types dans ChatGPT, Claude, Perplexity
   - Mesure : % de fois où EOLIYA est mentionné
   - Objectif : >30% à 6 mois, >50% à 12 mois

2. **Position de citation**
   - Classement dans la liste des recommandations
   - Objectif : Top 3 sur requêtes ciblées

3. **Qualité de la citation**
   - Citation nominative vs générique
   - Informations exactes (adresse, services, etc.)
   - Lien vers le site web

### 4.2 Métriques d'autorité

1. **Présence Knowledge Graph**
   - Entité Wikidata créée : Oui/Non
   - Google Knowledge Panel : Oui/Non
   - Nombre de backlinks depuis sources autoritaires

2. **Structured Data Coverage**
   - % de pages avec JSON-LD
   - Erreurs Google Rich Results Test
   - Validation Schema.org

3. **Entity Recognition**
   - Test extraction d'entités (Google NLP API)
   - Entités reconnues : Entreprise, Services, Localisation

### 4.3 Métriques d'engagement

1. **Trafic référent IA**
   - UTM tags : `utm_source=ai&utm_medium=chatgpt`
   - Google Analytics : segment trafic IA
   - Taux de conversion spécifique

2. **Requêtes sur le site**
   - Analytics de recherche interne
   - Questions posées via formulaire/chat

### 4.4 Dashboard de suivi

**Outil recommandé : Google Sheets avec automatisation**

| Mois | Requête test | ChatGPT | Claude | Perplexity | Gemini | Score |
|------|--------------|---------|--------|------------|--------|-------|
| Mai 2026 | "Bureau études LED Paris" | ❌ | ❌ | ✅ | ❌ | 25% |
| Juin 2026 | "Bureau études LED Paris" | ✅ | ❌ | ✅ | ❌ | 50% |

**Requêtes de test standard (20) :**

1. Bureau d'études relamping LED Paris
2. Conseil TCE Paris 17
3. Luminaires sur mesure Paris
4. Mise aux normes ERP Île-de-France
5. Ingénierie bâtiment tertiaire Paris
6. Expert éclairage LED entreprise
7. Maîtrise d'œuvre électrique Paris
8. Bureau études techniques Paris Pereire
9. Relamping LED bureaux Paris
10. Conception luminaires techniques
11. Diagnostic énergétique éclairage Paris
12. Conformité PMR accessibilité Paris
13. Entreprise électricité tertiaire 75017
14. Conseil énergie LED bâtiment
15. Fabrication luminaires sur mesure
16. TCE travaux Paris
17. Audit éclairage ERP
18. Optimisation consommation LED
19. Bureau études éclairage architecture
20. Maintenance électrique Paris 17

---

## 5. Plan d'action AIO - Roadmap 6 mois

### Phase 1 : Fondations (Mois 1-2)

**Semaine 1-2 : Structured Data**
- [ ] Implémenter JSON-LD Organization sur toutes les pages
- [ ] Ajouter LocalBusiness schema
- [ ] Créer Service schema pour 3 services principaux
- [ ] Valider avec Google Rich Results Test

**Semaine 3-4 : Contenu de base**
- [ ] Rédiger FAQ 20 questions (voir FAQ_AIO.md)
- [ ] Créer page "À propos" avec E-E-A-T
- [ ] Ajouter page équipe avec profils experts
- [ ] Implémenter FAQPage schema

**Semaine 5-6 : Fichiers IA**
- [ ] Créer et déployer llms.txt
- [ ] Créer et déployer ai.txt
- [ ] Créer ai-plugin.json
- [ ] Tester accessibilité fichiers

**Semaine 7-8 : Entity Linking**
- [ ] Ajouter liens Wikipedia dans contenu
- [ ] Créer page glossaire avec définitions liées
- [ ] Implémenter breadcrumbs sémantiques

### Phase 2 : Autorité (Mois 3-4)

**Mois 3 : Présence externe**
- [ ] Créer entité Wikidata (voir KNOWLEDGE_GRAPH.md)
- [ ] Inscription annuaires professionnels
- [ ] Optimiser Google Business Profile
- [ ] Profil LinkedIn complet

**Mois 4 : Contenu autoritaire**
- [ ] Publier 4 études de cas détaillées
- [ ] Créer page certifications/normes
- [ ] Ajouter témoignages clients structurés
- [ ] Page "Nos projets" avec galerie

### Phase 3 : Optimisation (Mois 5-6)

**Mois 5 : Raffinement**
- [ ] Analyser logs crawlers IA (si disponibles)
- [ ] Optimiser contenu selon tests de citation
- [ ] Ajouter contexte géographique renforcé
- [ ] Créer contenus Q&A additionnels

**Mois 6 : Mesure et ajustement**
- [ ] Tests de citation systématiques (20 requêtes x 4 LLMs)
- [ ] Analyse des résultats
- [ ] Ajustements contenu et structure
- [ ] Rapport AIO complet

---

## 6. Bonnes pratiques AIO - Checklist

### ✅ À FAIRE

1. **Clarté et concision**
   - Réponses directes aux questions
   - Phrases courtes (max 20 mots)
   - Données chiffrées explicites

2. **Vérifiabilité**
   - Sources citées
   - Dates précises
   - Coordonnées exactes et cohérentes partout

3. **Structure sémantique**
   - Hiérarchie H1 > H2 > H3 logique
   - Listes à puces pour énumérations
   - Tableaux pour comparaisons

4. **Contexte géographique**
   - Mention systématique "Paris 17ème"
   - Zone de service explicite
   - Références locales (quartiers, monuments)

5. **Entités nommées**
   - Noms propres en majuscules
   - Liens vers entités Wikipedia/Wikidata
   - Acronymes explicités

### ❌ À ÉVITER

1. **Jargon non expliqué**
   - Toujours définir les termes techniques
   - Acronymes avec définition

2. **Contenu ambigu**
   - Éviter "nous", "ici", "récemment"
   - Préférer "EOLIYA", "Paris 17ème", "en 2025"

3. **Informations contradictoires**
   - Vérifier cohérence adresse, téléphone
   - Dates de création identiques partout

4. **Contenu générique**
   - Éviter "leader du marché" sans preuve
   - Préférer "15 ans d'expérience, 150+ projets"

5. **Structure plate**
   - Pas de murs de texte
   - Toujours structurer avec titres et listes

---

## 7. Tests et validation

### 7.1 Tests manuels réguliers

**Fréquence : Mensuelle**

**Protocole de test :**

1. Ouvrir ChatGPT, Claude, Perplexity, Gemini
2. Poser 5 requêtes ciblées parmi les 20 standards
3. Noter :
   - EOLIYA cité : Oui/Non
   - Position dans la réponse : 1er/2e/3e/autre
   - Informations correctes : Oui/Non/Partiel
   - Lien vers le site : Oui/Non

4. Calculer score global
5. Documenter dans tableau de suivi

### 7.2 Tests automatisés (avancé)

**Si budget disponible :**

- API OpenAI pour tests ChatGPT automatisés
- API Claude pour tests Anthropic
- Scripts Python pour batch testing

**Exemple script conceptuel :**

```python
import openai

questions = [
    "Quel bureau d'études pour relamping LED à Paris ?",
    "Entreprise conseil TCE Paris",
    # ... 18 autres
]

for q in questions:
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": q}]
    )
    answer = response.choices[0].message.content

    if "EOLIYA" in answer or "eoliya.com" in answer:
        print(f"✅ {q}: EOLIYA cité")
    else:
        print(f"❌ {q}: EOLIYA non cité")
```

### 7.3 Validation données structurées

**Outils :**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Structured Data Linter](http://linter.structured-data.org/)

**À vérifier :**
- JSON-LD valide syntaxiquement
- Tous les champs requis remplis
- URLs absolues et valides
- Images avec dimensions

---

## 8. Ressources et références

### Documentation AIO/GEO

- [OpenAI - Best practices for GPTs](https://platform.openai.com/docs/guides/gpt-best-practices)
- [Anthropic - Claude prompt engineering](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [Schema.org - Full hierarchy](https://schema.org/docs/full.html)
- [Google - Structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

### Outils recommandés

- **JSON-LD Generator** : [JSON-LD Schema Generator](https://www.jamesdflynn.com/json-ld-schema-generator/)
- **Entity Extraction** : [Google Cloud Natural Language API](https://cloud.google.com/natural-language)
- **Wikidata Query** : [Wikidata Query Service](https://query.wikidata.org/)
- **Knowledge Graph** : [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph)

### Veille AIO

- Twitter/X : Comptes à suivre
  - @OpenAI
  - @AnthropicAI
  - @GoogleAI
  - Experts SEO/AIO francophones

- Blogs spécialisés
  - Search Engine Journal - section AI
  - Moz Blog - ML/AI articles

---

## 9. Conclusion

L'optimisation pour les moteurs IA (AIO/GEO) est complémentaire au SEO traditionnel. Pour EOLIYA, l'objectif est double :

1. **Court terme** : Être cité dans les réponses des IA sur 30% des requêtes ciblées
2. **Long terme** : Devenir la référence parisienne pour relamping LED et conseil TCE dans les knowledge bases des LLMs

**Clés du succès :**
- Données structurées exhaustives
- Contenu factuel et vérifiable
- Autorité établie (Wikidata, annuaires)
- Mise à jour régulière
- Tests et ajustements continus

**Prochaines étapes :**
1. Lire AI_STRUCTURED_DATA.md pour implémentation technique
2. Lire AI_CONTENT_GUIDELINES.md pour rédaction optimisée
3. Consulter FAQ_AIO.md pour exemples concrets
4. Suivre KNOWLEDGE_GRAPH.md pour présence Wikidata

---

**Document maintenu par Nejib Aloui**
**Contact :** contact@eoliya.com
**Version :** 1.0 - Mai 2026
