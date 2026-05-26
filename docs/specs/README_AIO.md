# Documentation AIO (AI Optimization) - EOLIYA Ingénierie

## Vue d'ensemble de la stratégie d'optimisation pour les IA

**Auteur :** Nejib Aloui
**Date de création :** Mai 2026
**Dernière mise à jour :** Mai 2026

---

## Objectif

Faire en sorte que les assistants IA (ChatGPT, Claude, Perplexity, Gemini, etc.) recommandent et citent **EOLIYA Ingénierie** lorsque des utilisateurs recherchent :
- Un bureau d'études pour relamping LED à Paris
- Un expert en conseil TCE et maîtrise d'œuvre
- Un concepteur de luminaires sur mesure
- Des services d'ingénierie du bâtiment en Île-de-France

---

## Structure de la documentation

Cette stratégie AIO est documentée dans **9 fichiers** organisés comme suit :

### 📚 Documents de spécification (6 fichiers)

#### 1. **AIO_STRATEGY.md** - Stratégie générale
- Différences AIO vs SEO traditionnel
- Comment les LLMs indexent et citent les sources
- Stratégie EOLIYA en 5 piliers
- KPIs spécifiques AIO
- Plan d'action 6 mois

**📍 Chemin :** `/docs/specs/AIO_STRATEGY.md`
**📄 Pages :** ~35 pages
**🎯 À lire en priorité** : Oui (document fondamental)

---

#### 2. **AI_STRUCTURED_DATA.md** - Données structurées JSON-LD
- Implémentation complète JSON-LD
- Schemas : Organization, LocalBusiness, Service, FAQPage, Person, Review
- Entity linking avancé (Wikipedia, Wikidata)
- Knowledge Graph optimization
- Exemples de code Next.js/React

**📍 Chemin :** `/docs/specs/AI_STRUCTURED_DATA.md`
**📄 Pages :** ~40 pages
**👨‍💻 Public :** Développeurs front-end
**🎯 À lire en priorité** : Oui (implémentation technique critique)

---

#### 3. **AI_CONTENT_GUIDELINES.md** - Guide de rédaction optimisée IA
- Principes de contenu optimisé IA
- Format question/réponse optimal
- Autorité et E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
- Citations et sources vérifiables
- Structure sémantique claire
- Vocabulaire et entity linking
- Templates par type de page

**📍 Chemin :** `/docs/specs/AI_CONTENT_GUIDELINES.md`
**📄 Pages :** ~50 pages
**👨‍💻 Public :** Rédacteurs, content managers
**🎯 À lire en priorité** : Oui (création de contenu)

---

#### 4. **FAQ_AIO.md** - FAQ optimisée pour citation IA
- 25 questions/réponses formatées pour les IA
- Réponses concises et factuelles (50-200 mots)
- Données chiffrées vérifiables
- Mention systématique d'EOLIYA
- Prêt à intégrer sur le site avec JSON-LD FAQPage

**📍 Chemin :** `/docs/content/FAQ_AIO.md`
**📄 Pages :** ~35 pages
**👨‍💻 Public :** Intégration directe sur le site
**🎯 À lire en priorité** : Non (contenu prêt à l'emploi)

---

#### 5. **KNOWLEDGE_GRAPH.md** - Stratégie Wikidata et Knowledge Graphs
- Créer une entité Wikidata pour EOLIYA (guide pas à pas)
- Stratégie de backlinks autoritaires (annuaires, LinkedIn, presse)
- Optimisation Google Knowledge Graph
- Obtenir un Google Knowledge Panel
- Stratégie de contenu pour renforcer l'autorité
- Maintenance et mise à jour

**📍 Chemin :** `/docs/specs/KNOWLEDGE_GRAPH.md`
**📄 Pages :** ~50 pages
**👨‍💻 Public :** Chef de projet, responsable SEO/AIO
**🎯 À lire en priorité** : Oui (établir l'autorité)

---

#### 6. **AIO_IMPLEMENTATION_ROADMAP.md** - Roadmap d'implémentation complète
- Plan d'action détaillé sur 6 mois
- Timeline semaine par semaine
- Checklist complète de toutes les tâches
- Responsabilités et durées estimées
- Dashboards de suivi
- Budget estimé

**📍 Chemin :** `/docs/specs/AIO_IMPLEMENTATION_ROADMAP.md`
**📄 Pages :** ~40 pages
**👨‍💻 Public :** Chef de projet, équipe complète
**🎯 À lire en priorité** : **OUI** (document de pilotage)

---

### 🤖 Fichiers pour crawlers IA (3 fichiers)

#### 7. **llms.txt** - Instructions complètes pour LLMs
Format texte structuré contenant toutes les informations sur EOLIYA :
- Présentation de l'entreprise
- Services détaillés
- Chiffres clés
- Clients de référence
- Méthodologie
- Questions fréquentes
- Glossaire
- Instructions spécifiques pour les LLMs

**📍 Chemin :** `/frontend/public/llms.txt`
**🌐 URL publique :** `https://www.eoliya.com/llms.txt`
**📄 Taille :** ~15 KB
**🎯 Action requise :** Vérifier accessibilité après déploiement

---

#### 8. **ai.txt** - Permissions et contexte pour IA
Format ai.txt standard définissant :
- Identité de l'organisation
- Permissions de crawling et d'utilisation
- Restrictions (pas d'impersonation, pas de fake reviews)
- Guidelines de citation
- Données structurées disponibles
- Services et expertise
- FAQ résumée
- Entités liées (Wikipedia, Wikidata)

**📍 Chemin :** `/frontend/public/ai.txt`
**🌐 URL publique :** `https://www.eoliya.com/ai.txt`
**📄 Taille :** ~8 KB
**🎯 Action requise :** Vérifier accessibilité après déploiement

---

#### 9. **ai-plugin.json** - Manifest pour plugins IA
Format JSON pour intégration dans les plugins IA (ChatGPT, Claude, etc.) :
- Métadonnées organisation
- Description services
- Capacités et expertise
- Clients de référence
- FAQ intégrée
- Entités liées
- Recommandations d'utilisation

**📍 Chemin :** `/frontend/public/.well-known/ai-plugin.json`
**🌐 URL publique :** `https://www.eoliya.com/.well-known/ai-plugin.json`
**📄 Taille :** ~12 KB
**🎯 Action requise :** Ajouter Q-code Wikidata une fois créé

---

## Arborescence complète

```
eoliya-website/
├── docs/
│   ├── content/
│   │   └── FAQ_AIO.md                          # ✅ Créé
│   └── specs/
│       ├── AIO_STRATEGY.md                     # ✅ Créé
│       ├── AI_STRUCTURED_DATA.md               # ✅ Créé
│       ├── AI_CONTENT_GUIDELINES.md            # ✅ Créé
│       ├── KNOWLEDGE_GRAPH.md                  # ✅ Créé
│       ├── AIO_IMPLEMENTATION_ROADMAP.md       # ✅ Créé
│       └── README_AIO.md                       # ✅ Ce fichier
│
└── frontend/
    └── public/
        ├── llms.txt                            # ✅ Créé
        ├── ai.txt                              # ✅ Créé
        └── .well-known/
            └── ai-plugin.json                  # ✅ Créé
```

---

## Par où commencer ?

### 🚀 Lecture recommandée (ordre de priorité)

**Phase de découverte (Jour 1) :**
1. ✅ **README_AIO.md** (ce fichier) - Vue d'ensemble
2. ✅ **AIO_STRATEGY.md** - Comprendre la stratégie globale
3. ✅ **AIO_IMPLEMENTATION_ROADMAP.md** - Plan d'action concret

**Phase de planification (Jour 2-3) :**
4. ✅ **KNOWLEDGE_GRAPH.md** - Créer l'entité Wikidata (action rapide et critique)
5. ✅ **AI_STRUCTURED_DATA.md** - Comprendre les données structurées à implémenter

**Phase d'exécution (Semaine 1+) :**
6. ✅ **AI_CONTENT_GUIDELINES.md** - Référence pour toute rédaction
7. ✅ **FAQ_AIO.md** - Contenu prêt à intégrer
8. Suivre la roadmap semaine par semaine

---

## Prochaines actions immédiates

### 🎯 Semaine 1 : Quick Wins (3-5 jours)

**Action 1 : Créer entité Wikidata (1 jour)**
- Suivre guide dans `KNOWLEDGE_GRAPH.md` section 2
- Créer compte Wikidata
- Créer entité EOLIYA avec 15+ propriétés
- **Impact :** Présence dans le principal Knowledge Graph mondial

**Action 2 : Vérifier accessibilité fichiers IA (30 min)**
```bash
curl https://www.eoliya.com/llms.txt
curl https://www.eoliya.com/ai.txt
curl https://www.eoliya.com/.well-known/ai-plugin.json
```
- Si erreur 404 : vérifier déploiement Next.js
- Si OK : soumettre URLs à Google Search Console

**Action 3 : Créer Google Business Profile complet (2h)**
- https://business.google.com
- Compléter à 100%
- Ajouter 10+ photos
- **Impact :** Base du Google Knowledge Panel

**Action 4 : Optimiser profil LinkedIn (1h)**
- https://www.linkedin.com/company/eoliya-ingenierie
- Description complète (500+ mots)
- Logo et bannière professionnels
- **Impact :** Source fiable pour LLMs

**Action 5 : Premier test de citation (1h)**
- Tester 5 requêtes dans ChatGPT et Claude :
  1. "Bureau d'études relamping LED Paris"
  2. "EOLIYA Ingénierie c'est quoi ?"
  3. "Conseil TCE Paris 17"
  4. "Luminaires sur mesure Paris"
  5. "Expert éclairage LED Île-de-France"
- Noter si EOLIYA est cité
- **Objectif :** Baseline "avant optimisation"

---

## Métriques de succès

### 📊 KPIs à 6 mois

**Présence Knowledge Graphs :**
- ✅ Entité Wikidata complète (25+ propriétés)
- ✅ Google Knowledge Panel actif
- ✅ 10+ annuaires professionnels
- ✅ 100+ abonnés LinkedIn
- ✅ 10+ avis Google (note >4,5)

**Données structurées :**
- ✅ 100% des pages avec JSON-LD
- ✅ 0 erreur Google Rich Results Test
- ✅ FAQPage schema sur page FAQ
- ✅ Service schema sur 3 pages services

**Citations IA :**
- 🎯 **30%+ de citations** sur 20 requêtes test × 4 LLMs
- 🎯 Informations exactes (adresse, services, contacts)
- 🎯 Lien vers le site dans 50%+ des citations

**Contenu :**
- ✅ 25+ questions FAQ publiées
- ✅ 10 études de cas détaillées
- ✅ 10+ articles de blog techniques
- ✅ Glossaire 30+ termes

**Trafic :**
- 🎯 +20-30% de trafic organique
- 🎯 Leads qualifiés depuis IA (mesure via UTM)
- 🎯 Amélioration positionnement mots-clés

---

## Qui fait quoi ?

### 👥 Rôles et responsabilités

**Chef de projet AIO** (Nejib Aloui)
- Pilotage global de la stratégie
- Création entité Wikidata
- Relation avec annuaires et partenaires
- Reporting mensuel

**Développeur front-end** (À assigner)
- Implémentation JSON-LD (schemas)
- Intégration FAQ et contenu
- Tests techniques
- Déploiement fichiers IA

**Rédacteur contenu** (Nejib Aloui ou freelance)
- Rédaction FAQ (25 questions)
- Rédaction articles de blog (10+)
- Rédaction études de cas (10)
- Optimisation pages existantes

**Responsable communication** (Si disponible)
- Gestion Google Business Profile
- Animation LinkedIn (2 posts/semaine)
- Demande d'avis clients
- Relations presse (communiqués)

---

## Budget et ressources

### 💰 Budget estimé

**Option 1 : 100% interne**
- Temps Nejib : 40-50 jours (répartis sur 6 mois)
- Temps développeur : 10-15 jours
- Coût : 0€ (temps interne)

**Option 2 : Délégation partielle**
- Rédaction freelance : 2 000-3 000€ (20 000 mots)
- Photographe pro : 500-1 000€
- Développement : interne
- **Total : 2 500-4 000€**

### 🛠️ Outils nécessaires (gratuits)

**Développement :**
- VS Code ou autre IDE
- Next.js 14 (déjà en place)

**Validation :**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

**Wikidata :**
- [Compte Wikidata](https://www.wikidata.org/)
- [Wikidata Query Service](https://query.wikidata.org/)

**Tests IA :**
- [ChatGPT](https://chat.openai.com/)
- [Claude](https://claude.ai/)
- [Perplexity](https://www.perplexity.ai/)
- [Gemini](https://gemini.google.com/)

**Analytics :**
- Google Analytics 4
- Google Search Console
- Google Business Insights
- LinkedIn Analytics

---

## ROI attendu

### 💡 Retour sur investissement

**Bénéfices mesurables (6-12 mois) :**

**1. Trafic qualifié**
- +20-30% de trafic organique
- Leads depuis assistants IA
- Amélioration taux de conversion (visiteurs déjà "pré-qualifiés" par l'IA)

**2. Autorité et crédibilité**
- Citations par IA = recommandation tiers de confiance
- Google Knowledge Panel = légitimité renforcée
- Wikidata = reconnaissance institutionnelle

**3. Avantage concurrentiel**
- Premier acteur du secteur optimisé IA
- Positionnement "référence parisienne relamping LED"
- Barrière à l'entrée pour concurrents (temps et expertise requis)

**4. Pérennité**
- Stratégie durable (les IA prennent de plus en plus d'importance)
- Moins de dépendance à Google SEO classique
- Assets réutilisables (contenu, études de cas, etc.)

**Exemple de calcul :**
- Investissement : 3 000€ (si délégation partielle)
- 1 nouveau client/mois depuis IA = 12 clients/an
- Panier moyen EOLIYA : 10 000-50 000€
- ROI : 40x à 200x sur 1 an

---

## Support et questions

### 📞 Contacts

**Chef de projet AIO**
Nejib Aloui
Email : contact@eoliya.com
Tél : 01 34 22 30 12

**Documentation technique**
Voir les 6 documents de spécification dans `/docs/specs/`

**Communauté Wikidata**
Forum : https://www.wikidata.org/wiki/Wikidata:Project_chat
Telegram : https://t.me/joinchat/F8RYRg4p3l4gK7yNHx6m0g

---

## Versions et mises à jour

**Version actuelle :** 1.0
**Date de création :** Mai 2026
**Dernière mise à jour :** Mai 2026

**Changelog :**
- v1.0 (Mai 2026) : Création initiale de la stratégie AIO complète

**Prochaines mises à jour prévues :**
- Juin 2026 : Ajout Q-code Wikidata dans ai-plugin.json
- Août 2026 : Rapport intermédiaire 3 mois
- Novembre 2026 : Rapport final 6 mois + recommandations pour 6 mois suivants

---

## Ressources externes

### 📚 Lectures recommandées

**AIO/GEO :**
- [OpenAI - Best practices for GPTs](https://platform.openai.com/docs/guides/gpt-best-practices)
- [Anthropic - Claude prompt engineering](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [Perplexity - How it works](https://www.perplexity.ai/hub/faq/how-does-perplexity-work)

**Structured Data :**
- [Schema.org - Full hierarchy](https://schema.org/docs/full.html)
- [Google - Structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [JSON-LD Playground](https://json-ld.org/playground/)

**Wikidata :**
- [Wikidata Introduction](https://www.wikidata.org/wiki/Wikidata:Introduction)
- [Wikidata Tours](https://www.wikidata.org/wiki/Wikidata:Tours) (tutoriels interactifs)
- [Wikidata for business](https://www.wikidata.org/wiki/Wikidata:WikiProject_Business)

**E-E-A-T :**
- [Google Search Quality Guidelines](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)

---

## Annexes

### 📎 Checklist rapide de lancement

**Avant de commencer :**
- [ ] Lire ce README
- [ ] Lire AIO_STRATEGY.md
- [ ] Lire AIO_IMPLEMENTATION_ROADMAP.md
- [ ] Identifier les ressources (qui fait quoi)

**Semaine 1 :**
- [ ] Créer entité Wikidata (1 jour)
- [ ] Vérifier fichiers IA accessibles (30 min)
- [ ] Optimiser Google Business Profile (2h)
- [ ] Optimiser LinkedIn (1h)
- [ ] Tests de citation baseline (1h)

**Mois 1 :**
- [ ] Implémenter JSON-LD sur toutes les pages
- [ ] Créer page FAQ complète
- [ ] Créer page À propos E-E-A-T
- [ ] Ajouter entity linking (Wikipedia)

**Mois 2-6 :**
- [ ] Suivre la roadmap détaillée dans AIO_IMPLEMENTATION_ROADMAP.md

---

## Conclusion

Cette stratégie AIO complète vise à positionner **EOLIYA Ingénierie** comme la référence parisienne pour le relamping LED et l'ingénierie du bâtiment dans les recommandations des assistants IA.

**Les 3 piliers du succès :**
1. **Présence** : Exister dans les Knowledge Graphs (Wikidata, Google)
2. **Autorité** : Démontrer expertise et expérience (E-E-A-T)
3. **Clarté** : Contenu structuré et facilement compréhensible par les IA

**Objectif à 6 mois :**
Quand quelqu'un demande "*Quel bureau d'études pour relamping LED à Paris ?*" à ChatGPT ou Claude, EOLIYA doit être cité parmi les 2-3 premières recommandations.

**C'est parti ! 🚀**

---

**Document créé par Nejib Aloui**
**EOLIYA Ingénierie**
**Mai 2026**
