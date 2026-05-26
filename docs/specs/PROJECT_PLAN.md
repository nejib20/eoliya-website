# PLANNING PROJET - EOLIYA INGÉNIERIE

## INFORMATIONS GÉNÉRALES

**Projet:** Site web corporate EOLIYA Ingénierie
**Chef de projet:** Nejib Aloui
**Durée totale:** 16 semaines (4 mois)
**Date de début:** Semaine 1
**Date de mise en production:** Semaine 16

**Contact client:**
- Entreprise: EOLIYA Ingénierie
- Adresse: 131 Boulevard Pereire, 75017 Paris
- Téléphone: 01 34 22 30 12
- Email: contact@eoliya.com
- Site: www.eoliya.com

---

## STACK TECHNIQUE

### Frontend
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript

### Backend
- Strapi v5
- PostgreSQL
- Node.js

### Hébergement & Infrastructure
- Frontend: Vercel
- Backend: Railway
- CDN: Cloudflare

### Intégrations
- Google Calendar API (prise de rendez-vous)
- OpenAI GPT-4 (chatbot assistance)
- EmailJS ou Resend (formulaires de contact)

---

## ÉQUIPE & RÔLES

| ID | Agent | Responsabilités |
|----|-------|-----------------|
| 0 | Chef de Projet | Coordination, planning, suivi, reporting |
| 1 | Design/UX | Maquettes, design system, expérience utilisateur |
| 2 | Frontend | Développement Next.js, composants, animations |
| 3 | Backend | API Strapi, base de données, architecture |
| 4 | Intégrations | Google Calendar, GPT-4, services tiers |
| 5 | DevOps | CI/CD, déploiement, monitoring, sécurité |
| 6 | SEO | Référencement, performance, métadonnées |
| 7 | AIO | Optimisation IA, chatbot, contenu généré |
| 8 | Contenu | Rédaction, copywriting, traductions |
| 9 | QA/Recette | Tests, validation, contrôle qualité |

---

## PHASES DU PROJET

### PHASE 1: DÉCOUVERTE & CONCEPTION (Semaines 1-3)
**Objectif:** Poser les fondations du projet

#### Semaine 1 - Kick-off & Audit
**Agents impliqués:** 0, 1, 6, 8

**Livrables:**
- [ ] Brief projet complet (Agent 0)
- [ ] Audit du site existant www.eoliya.com (Agent 6)
- [ ] Benchmark concurrentiel (Agent 1)
- [ ] Arborescence proposée (Agent 1, 8)
- [ ] Liste des contenus à créer/migrer (Agent 8)
- [ ] Personas utilisateurs (Agent 1)

**Dépendances:** Aucune (phase initiale)

---

#### Semaine 2 - Architecture & Wireframes
**Agents impliqués:** 1, 2, 3, 5

**Livrables:**
- [ ] Architecture technique validée (Agent 2, 3, 5)
- [ ] Wireframes basse-fidélité (Agent 1)
- [ ] Schéma de base de données (Agent 3)
- [ ] Spécifications API (Agent 3)
- [ ] Documentation d'architecture (Agent 5)

**Dépendances:** Brief et arborescence (Semaine 1)

---

#### Semaine 3 - Design System & Maquettes
**Agents impliqués:** 1, 8

**Livrables:**
- [ ] Charte graphique (Agent 1)
- [ ] Design system Figma (Agent 1)
- [ ] Maquettes haute-fidélité desktop (Agent 1)
- [ ] Maquettes mobile (Agent 1)
- [ ] Ligne éditoriale et ton (Agent 8)
- [ ] Validation client

**Dépendances:** Wireframes (Semaine 2)

---

### PHASE 2: DÉVELOPPEMENT SPRINT 1 (Semaines 4-7)
**Objectif:** Fondations techniques et pages principales

#### Semaine 4 - Setup & Infrastructure
**Agents impliqués:** 2, 3, 5

**Livrables:**
- [ ] Initialisation projet Next.js (Agent 2)
- [ ] Configuration Tailwind + design tokens (Agent 2)
- [ ] Installation Strapi v5 (Agent 3)
- [ ] Configuration PostgreSQL (Agent 3)
- [ ] Setup CI/CD Vercel (Agent 5)
- [ ] Setup CI/CD Railway (Agent 5)
- [ ] Variables d'environnement (Agent 5)
- [ ] Documentation technique (Agent 5)

**Dépendances:** Architecture validée (Semaine 2)

---

#### Semaine 5 - Composants & Backend Core
**Agents impliqués:** 2, 3, 6

**Livrables:**
- [ ] Bibliothèque de composants UI (Agent 2)
- [ ] Layout principal + navigation (Agent 2)
- [ ] Footer (Agent 2)
- [ ] Collection types Strapi (Agent 3)
- [ ] API endpoints de base (Agent 3)
- [ ] Configuration SEO Next.js (Agent 6)
- [ ] Sitemap.xml (Agent 6)

**Dépendances:** Setup infrastructure (Semaine 4)

---

#### Semaine 6 - Pages principales (1/2)
**Agents impliqués:** 2, 8, 9

**Livrables:**
- [ ] Page d'accueil (Agent 2, 8)
- [ ] Page "À propos" (Agent 2, 8)
- [ ] Page "Expertise" (Agent 2, 8)
- [ ] Contenus rédigés et intégrés (Agent 8)
- [ ] Tests unitaires composants (Agent 9)

**Dépendances:** Composants UI (Semaine 5), Maquettes (Semaine 3)

---

#### Semaine 7 - Pages principales (2/2)
**Agents impliqués:** 2, 3, 8, 9

**Livrables:**
- [ ] Page "Projets/Réalisations" (Agent 2, 3, 8)
- [ ] Page "Services détaillés" (Agent 2, 8)
- [ ] Système de filtres projets (Agent 2)
- [ ] Formulaire de contact (Agent 2, 3)
- [ ] Tests fonctionnels (Agent 9)

**Dépendances:** Backend core (Semaine 5)

---

### PHASE 3: DÉVELOPPEMENT SPRINT 2 (Semaines 8-11)
**Objectif:** Fonctionnalités avancées et intégrations

#### Semaine 8 - Animations & Interactions
**Agents impliqués:** 2, 6

**Livrables:**
- [ ] Animations Framer Motion (Agent 2)
- [ ] Transitions de page (Agent 2)
- [ ] Animations au scroll (Agent 2)
- [ ] Micro-interactions (Agent 2)
- [ ] Optimisation performance (Agent 6)
- [ ] Lazy loading images (Agent 6)

**Dépendances:** Pages principales terminées (Semaine 7)

---

#### Semaine 9 - Intégration Google Calendar
**Agents impliqués:** 4, 3, 9

**Livrables:**
- [ ] Configuration Google Calendar API (Agent 4)
- [ ] Interface de prise de rendez-vous (Agent 4)
- [ ] Gestion des créneaux disponibles (Agent 4)
- [ ] Notifications email (Agent 4, 3)
- [ ] Tests d'intégration (Agent 9)

**Dépendances:** Formulaire de contact (Semaine 7)

---

#### Semaine 10 - Chatbot GPT-4
**Agents impliqués:** 4, 7, 8

**Livrables:**
- [ ] Intégration OpenAI API (Agent 4)
- [ ] Interface chatbot (Agent 4)
- [ ] Base de connaissances EOLIYA (Agent 7, 8)
- [ ] Prompts optimisés (Agent 7)
- [ ] Contexte métier ingénierie (Agent 8)
- [ ] Système de fallback (Agent 7)

**Dépendances:** Contenus finalisés (Semaine 6-7)

---

#### Semaine 11 - Blog & Actualités
**Agents impliqués:** 2, 3, 6, 8

**Livrables:**
- [ ] Page blog/actualités (Agent 2)
- [ ] Collection Strapi articles (Agent 3)
- [ ] Template article (Agent 2)
- [ ] Système de catégories/tags (Agent 3)
- [ ] Optimisation SEO articles (Agent 6)
- [ ] Premiers articles rédigés (Agent 8)

**Dépendances:** Backend core (Semaine 5)

---

### PHASE 4: OPTIMISATION & CONTENU (Semaines 12-13)
**Objectif:** SEO, performances et contenu final

#### Semaine 12 - SEO & Performance
**Agents impliqués:** 6, 7, 5

**Livrables:**
- [ ] Audit Lighthouse complet (Agent 6)
- [ ] Métadonnées optimisées (Agent 6)
- [ ] Schema.org markup (Agent 6)
- [ ] Robots.txt optimisé (Agent 6)
- [ ] Optimisation images (Agent 6)
- [ ] Compression & minification (Agent 5)
- [ ] Score Lighthouse > 90 (Agent 6)

**Dépendances:** Toutes les pages développées (Semaine 11)

---

#### Semaine 13 - Contenu final & Optimisation IA
**Agents impliqués:** 7, 8, 9

**Livrables:**
- [ ] Tous les contenus finalisés (Agent 8)
- [ ] Relecture et corrections (Agent 8)
- [ ] Fine-tuning chatbot (Agent 7)
- [ ] FAQ enrichie (Agent 7, 8)
- [ ] Tests utilisateurs (Agent 9)
- [ ] Corrections UX (Agent 9)

**Dépendances:** Chatbot fonctionnel (Semaine 10)

---

### PHASE 5: TESTS & RECETTE (Semaine 14)
**Objectif:** Validation complète avant production

#### Semaine 14 - Tests complets
**Agents impliqués:** 9, 5, 6

**Livrables:**
- [ ] Tests fonctionnels complets (Agent 9)
- [ ] Tests multi-navigateurs (Agent 9)
- [ ] Tests responsive (Agent 9)
- [ ] Tests de charge (Agent 5)
- [ ] Tests d'accessibilité (Agent 9)
- [ ] Audit de sécurité (Agent 5)
- [ ] Liste des bugs/correctifs (Agent 9)
- [ ] Validation SEO finale (Agent 6)

**Dépendances:** Toutes les fonctionnalités terminées (Semaine 13)

---

### PHASE 6: DÉPLOIEMENT & LANCEMENT (Semaines 15-16)
**Objectif:** Mise en production et transfert

#### Semaine 15 - Correctifs & Préparation
**Agents impliqués:** Tous

**Livrables:**
- [ ] Correction de tous les bugs critiques (Agents 2, 3, 4)
- [ ] Configuration domaine eoliya.com (Agent 5)
- [ ] Certificats SSL (Agent 5)
- [ ] Backup automatisés (Agent 5)
- [ ] Monitoring mis en place (Agent 5)
- [ ] Documentation utilisateur (Agent 0)
- [ ] Documentation technique (Agent 5)

**Dépendances:** Tests terminés (Semaine 14)

---

#### Semaine 16 - Mise en production & Transfert
**Agents impliqués:** 0, 5, 6

**Livrables:**
- [ ] Déploiement production (Agent 5)
- [ ] Vérification post-déploiement (Agent 5)
- [ ] Soumission Google Search Console (Agent 6)
- [ ] Soumission Bing Webmaster (Agent 6)
- [ ] Formation client (Agent 0)
- [ ] Documentation admin Strapi (Agent 0)
- [ ] Garantie & maintenance (Agent 0)
- [ ] Clôture projet (Agent 0)

**Dépendances:** Correctifs terminés (Semaine 15)

---

## DÉPENDANCES INTER-AGENTS

### Dépendances critiques
1. **Design → Frontend:** Maquettes validées avant développement pages
2. **Backend → Frontend:** API endpoints avant intégration données
3. **Frontend → Intégrations:** Composants UI avant intégration services
4. **Contenu → SEO:** Textes finalisés avant optimisation métadonnées
5. **DevOps → Tous:** Infrastructure prête avant développements
6. **Frontend/Backend → QA:** Fonctionnalités terminées avant tests

### Parcours critique
```
Semaine 1 (Brief)
  → Semaine 2 (Architecture)
    → Semaine 3 (Design)
      → Semaine 4 (Setup)
        → Semaine 5-7 (Dev Sprint 1)
          → Semaine 8-11 (Dev Sprint 2)
            → Semaine 12-13 (Optimisation)
              → Semaine 14 (Tests)
                → Semaine 15 (Correctifs)
                  → Semaine 16 (Production)
```

---

## LIVRABLES FINAUX

### Documentation
- [ ] Documentation technique complète
- [ ] Guide d'administration Strapi
- [ ] Guide utilisateur site web
- [ ] Documentation API
- [ ] Procédures de maintenance

### Code & Assets
- [ ] Code source frontend (GitHub)
- [ ] Code source backend (GitHub)
- [ ] Design system Figma
- [ ] Bibliothèque de composants
- [ ] Assets optimisés (images, vidéos)

### Déploiement
- [ ] Site en production sur eoliya.com
- [ ] Backups automatisés configurés
- [ ] Monitoring actif
- [ ] SSL/HTTPS activé
- [ ] Analytics configuré

### Formation
- [ ] Session de formation client
- [ ] Vidéos tutoriels Strapi
- [ ] Support post-lancement (1 mois)

---

## RISQUES & MITIGATIONS

### Risques techniques

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Problèmes intégration Google Calendar | Moyenne | Élevé | Tests anticipés dès semaine 9, solution de fallback formulaire |
| Performance chatbot GPT-4 | Faible | Moyen | Système de cache, timeout optimisé, fallback FAQ |
| Migration données site existant | Moyenne | Moyen | Script de migration testé, validation manuelle contenu |
| Incompatibilité navigateurs | Faible | Faible | Tests multi-navigateurs dès semaine 6 |
| Surcharge serveur Railway | Faible | Élevé | Monitoring dès le début, plan de scaling prévu |

### Risques projet

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Retard validation maquettes | Moyenne | Élevé | Points de validation réguliers, délai buffer S3 |
| Contenus client non fournis | Élevée | Élevé | Rédaction interne Agent 8, validation progressive |
| Changements périmètre | Moyenne | Élevé | Gestion des change requests, documentation formelle |
| Bugs critiques en recette | Moyenne | Moyen | Tests continus, QA impliqué dès semaine 6 |
| Indisponibilité ressources | Faible | Élevé | Documentation partagée, bus factor = 0 |

### Risques business

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Référencement insuffisant | Faible | Moyen | SEO intégré dès conception, audit continu |
| Taux de conversion faible | Moyenne | Moyen | Tests utilisateurs S13, CTA optimisés |
| Coûts hébergement élevés | Faible | Faible | Estimation costs dès S2, optimisation ressources |

---

## CRITÈRES DE SUCCÈS

### Performance technique
- [ ] Score Lighthouse > 90 (Performance, SEO, Accessibilité, Best Practices)
- [ ] Temps de chargement < 2s
- [ ] Core Web Vitals excellents (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Responsive parfait (mobile, tablette, desktop)
- [ ] 0 bug critique en production

### SEO & Visibilité
- [ ] Indexation Google < 1 semaine
- [ ] Apparition résultats "EOLIYA Ingénierie" < 2 semaines
- [ ] Structured data valides (Schema.org)
- [ ] Sitemap soumis et accepté

### Fonctionnalités
- [ ] Formulaires de contact opérationnels
- [ ] Prise de rendez-vous Google Calendar fonctionnelle
- [ ] Chatbot GPT-4 répond correctement (>80% satisfaction)
- [ ] Blog avec minimum 5 articles publiés
- [ ] Admin Strapi opérationnel et documenté

### Business
- [ ] Client formé et autonome sur Strapi
- [ ] Documentation complète livrée
- [ ] Support post-lancement assuré
- [ ] Migration contenu site existant complète

---

## COMMUNICATION & SUIVI

### Réunions
- **Daily standups:** Points quotidiens 15min (agents actifs)
- **Sprints review:** Fin de chaque sprint (semaines 7, 11, 13)
- **Client checkpoints:** Semaines 3, 7, 11, 14, 16
- **Retrospectives:** Semaines 8, 12, 17

### Outils
- **Gestion de projet:** Notion / Linear
- **Code:** GitHub (frontend + backend)
- **Design:** Figma
- **Communication:** Slack
- **Documentation:** Notion + GitHub Wiki

### Reporting
- **Rapport hebdomadaire:** Chaque vendredi
- **Dashboard temps réel:** Métriques clés visibles
- **Burn-down chart:** Suivi avancement
- **Risk register:** Mise à jour continue

---

## BUDGET TEMPS ESTIMÉ

| Phase | Durée | Charge totale (jours/homme) |
|-------|-------|------------------------------|
| Phase 1: Découverte | 3 semaines | 30 j/h |
| Phase 2: Dev Sprint 1 | 4 semaines | 60 j/h |
| Phase 3: Dev Sprint 2 | 4 semaines | 55 j/h |
| Phase 4: Optimisation | 2 semaines | 25 j/h |
| Phase 5: Tests | 1 semaine | 15 j/h |
| Phase 6: Production | 2 semaines | 20 j/h |
| **TOTAL** | **16 semaines** | **205 j/h** |

### Répartition par agent

| Agent | Charge estimée |
|-------|----------------|
| 0 - Chef de Projet | 80 jours (suivi continu) |
| 1 - Design/UX | 20 jours |
| 2 - Frontend | 35 jours |
| 3 - Backend | 25 jours |
| 4 - Intégrations | 15 jours |
| 5 - DevOps | 20 jours |
| 6 - SEO | 18 jours |
| 7 - AIO | 12 jours |
| 8 - Contenu | 22 jours |
| 9 - QA/Recette | 18 jours |

---

## MAINTENANCE POST-LANCEMENT

### Support immédiat (Semaines 17-20)
- Correctifs bugs mineurs
- Optimisations performances
- Ajustements contenu
- Support technique client

### Garantie (Mois 2-3)
- Correction bugs
- Mises à jour sécurité
- Support email
- Monitoring actif

### Évolutions futures
- Espace client sécurisé
- Calculateur de devis en ligne
- Module de gestion de projets
- Extension multilingue (EN)
- Intégration ERP

---

## NOTES

**Chef de projet:** Nejib Aloui
**Version du document:** 1.0
**Dernière mise à jour:** Mai 2026

Ce planning est un document vivant qui sera mis à jour au fil du projet en fonction des avancées réelles et des ajustements nécessaires.
