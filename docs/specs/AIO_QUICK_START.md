# Guide de Démarrage Rapide AIO - EOLIYA

## 🚀 Commencer l'optimisation IA en 5 étapes (Semaine 1)

**Durée totale : 1 semaine • Impact : Maximum**

---

## Étape 1 : Créer l'entité Wikidata (Jour 1 - 3h)

### Pourquoi c'est critique
Wikidata est LA source de référence pour les IA. Sans entité Wikidata, EOLIYA est invisible pour les LLMs.

### Actions
1. **Créer un compte** : https://www.wikidata.org/ → "Créer un compte"
2. **Créer l'entité EOLIYA** : https://www.wikidata.org/wiki/Special:NewItem
   - Label FR : `EOLIYA Ingénierie`
   - Label EN : `EOLIYA Engineering`
   - Description FR : `bureau d'études en ingénierie du bâtiment basé à Paris, France`
3. **Ajouter 15 propriétés essentielles** :
   - P31 (instance of) : Q4830453 (business)
   - P17 (country) : Q142 (France)
   - P159 (headquarters) : Q161741 (17e arrondissement de Paris)
   - P131 (located in) : Q90 (Paris)
   - P571 (inception) : 2011
   - P856 (website) : https://www.eoliya.com
   - P625 (coordinates) : 48.8849, 2.2972
   - P1329 (phone) : +33 1 34 22 30 12
   - P968 (email) : contact@eoliya.com
   - P452 (industry) : Q193838 (engineering)
   - P6375 (address) : `131 Boulevard Pereire, 75017 Paris, France`
   - P1454 (legal form) : Q6881511 (SAS)
   - P1128 (employees) : 12
   - P4264 (LinkedIn) : eoliya-ingenierie
   - P101 (field of work) : Q193838 (ingénierie)

4. **Ajouter des sources** pour chaque propriété :
   - P854 (URL) : https://www.eoliya.com
   - P813 (retrieved) : [date du jour]

### Résultat attendu
✅ Entité Wikidata créée avec Q-code (ex: Q123456789)
✅ EOLIYA existe maintenant dans le Knowledge Graph mondial

**Guide détaillé :** `KNOWLEDGE_GRAPH.md` section 2

---

## Étape 2 : Optimiser Google Business Profile (Jour 2 - 2h)

### Pourquoi c'est critique
Google Business = futur Google Knowledge Panel = source majeure pour les IA

### Actions
1. **Accéder/Créer la fiche** : https://business.google.com
2. **Compléter à 100%** :
   - Catégorie principale : "Bureau d'études techniques"
   - Catégories secondaires : "Ingénierie", "Électricien"
   - Description complète (750 caractères max)
   - Horaires d'ouverture
   - Zone de service : Île-de-France
   - Attributs : "Géré par un ingénieur qualifié", etc.
3. **Ajouter 10+ photos** :
   - Logo
   - Façade du bureau
   - Équipe
   - 5+ photos de projets (avant/après, installations)
4. **Publier 1er post** Google Business
5. **Activer messagerie**

### Résultat attendu
✅ Profil Google Business à 100%
✅ 10+ photos professionnelles
✅ 1er post publié

**Bonus :** Demander à 5 clients récents de laisser un avis

---

## Étape 3 : Vérifier fichiers IA accessibles (Jour 3 - 30 min)

### Pourquoi c'est critique
Les crawlers IA cherchent ces fichiers pour comprendre votre site.

### Actions
1. **Vérifier accessibilité** :
```bash
curl https://www.eoliya.com/llms.txt
curl https://www.eoliya.com/ai.txt
curl https://www.eoliya.com/.well-known/ai-plugin.json
```

2. **Si erreur 404** :
   - Vérifier que les fichiers sont bien dans `/frontend/public/`
   - Vérifier configuration Next.js
   - Redéployer si nécessaire

3. **Si OK** :
   - Soumettre les 3 URLs à Google Search Console
   - Demander indexation prioritaire

### Résultat attendu
✅ 3 fichiers IA accessibles publiquement
✅ Indexation demandée

---

## Étape 4 : Mettre à jour ai-plugin.json avec Q-code (Jour 3 - 5 min)

### Actions
1. **Copier le Q-code Wikidata** obtenu à l'étape 1 (ex: Q123456789)
2. **Éditer** `/frontend/public/.well-known/ai-plugin.json`
3. **Remplacer** `"Q[TO_BE_CREATED]"` par le vrai Q-code
4. **Sauvegarder et déployer**

Exemple :
```json
{
  "related_entities": {
    "wikidata": {
      "organization_id": "Q123456789",
      ...
    }
  }
}
```

### Résultat attendu
✅ Q-code Wikidata intégré dans ai-plugin.json
✅ Lien entre site web et entité Wikidata établi

---

## Étape 5 : Test de citation baseline (Jour 4 - 1h)

### Pourquoi c'est important
Mesurer la situation AVANT optimisation pour comparer ensuite.

### Actions
1. **Tester 5 requêtes dans 4 LLMs** :

**Requêtes :**
1. "Quel bureau d'études pour relamping LED à Paris ?"
2. "EOLIYA Ingénierie c'est quoi ?"
3. "Conseil TCE Paris 17ème"
4. "Expert luminaires sur mesure Paris"
5. "Ingénierie bâtiment tertiaire Île-de-France"

**LLMs à tester :**
- ChatGPT (GPT-4) : https://chat.openai.com/
- Claude (Sonnet/Opus) : https://claude.ai/
- Perplexity : https://www.perplexity.ai/
- Gemini : https://gemini.google.com/

2. **Noter pour chaque test** :
   - EOLIYA cité : ✅ / ❌
   - Position : 1er / 2e / 3e / autre / non cité
   - Informations exactes : ✅ / ❌ / partielles
   - Lien vers site : ✅ / ❌

3. **Créer Google Sheet** "Tests Citation EOLIYA"
   - Tableau : Date | Requête | ChatGPT | Claude | Perplexity | Gemini | Score
   - Calculer score global : % de citations

### Résultat attendu
✅ Baseline établie (probablement 0-10% de citations)
✅ Dashboard de suivi créé
✅ Base de comparaison pour les prochains tests

**Note :** Ce score devrait passer à 30%+ après 6 mois d'optimisation.

---

## 🎯 Résultat de la Semaine 1

À la fin de cette semaine, vous aurez :
- ✅ EOLIYA dans Wikidata (Knowledge Graph mondial)
- ✅ Google Business Profile optimisé (futur Knowledge Panel)
- ✅ Fichiers IA accessibles et indexés
- ✅ Baseline de citation établie
- ✅ Fondations solides pour le reste de la stratégie AIO

**Impact estimé :** 30% du chemin vers l'objectif de citations IA accompli !

---

## 📅 Et après ? (Semaines 2-24)

### Mois 1-2 : Fondations
- Implémenter JSON-LD sur toutes les pages
- Créer page FAQ complète (25 questions)
- Optimiser contenu existant (entity linking)
- S'inscrire dans 10 annuaires professionnels

### Mois 3-4 : Autorité
- Créer 10 études de cas détaillées
- Publier 10 articles de blog techniques
- Obtenir 10+ avis Google
- 100+ abonnés LinkedIn

### Mois 5-6 : Optimisation
- Tests de citation mensuels
- Analyse et ajustements
- Rapport AIO complet
- Planification 6 prochains mois

**Guide complet :** `AIO_IMPLEMENTATION_ROADMAP.md`

---

## 📚 Documentation complète

**Documents de spécification (6) :**
1. `AIO_STRATEGY.md` - Stratégie générale
2. `AI_STRUCTURED_DATA.md` - Données structurées JSON-LD
3. `AI_CONTENT_GUIDELINES.md` - Guide de rédaction
4. `FAQ_AIO.md` - FAQ prête à publier
5. `KNOWLEDGE_GRAPH.md` - Guide Wikidata détaillé
6. `AIO_IMPLEMENTATION_ROADMAP.md` - Roadmap 6 mois

**Fichiers crawlers IA (3) :**
7. `llms.txt` - Instructions pour LLMs
8. `ai.txt` - Permissions et contexte
9. `ai-plugin.json` - Manifest plugins IA

**Vue d'ensemble :**
10. `README_AIO.md` - Index complet de la documentation

---

## 💡 Conseils pour réussir

**DOs ✅**
- Suivre la roadmap étape par étape
- Tester régulièrement les citations (mensuel minimum)
- Maintenir Wikidata à jour (trimestre)
- Créer du contenu régulièrement (2-4 articles/mois)
- Être patient (résultats visibles à 3-6 mois)

**DON'Ts ❌**
- Ne pas sauter l'étape Wikidata (critique !)
- Ne pas négliger les sources (citations requises)
- Ne pas créer de contenu générique (privilégier Q&A factuelles)
- Ne pas sur-optimiser avec mots-clés (privilégier clarté)
- Ne pas attendre 6 mois sans tests intermédiaires

---

## 📞 Support

**Chef de projet AIO :** Nejib Aloui
**Email :** contact@eoliya.com
**Tél :** 01 34 22 30 12

**Documentation complète :** `/docs/specs/`

---

**Bonne chance pour cette première semaine ! 🚀**

**Nejib Aloui - EOLIYA Ingénierie - Mai 2026**
