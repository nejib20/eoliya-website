# Données Structurées pour IA - EOLIYA Ingénierie

## Guide d'implémentation JSON-LD et Schema.org
**Auteur :** Nejib Aloui
**Dernière mise à jour :** Mai 2026
**Version :** 1.0

---

## 1. Introduction

Ce document détaille l'implémentation des données structurées (JSON-LD) pour optimiser la compréhension du site EOLIYA par les intelligences artificielles et les moteurs de recherche.

### 1.1 Objectifs

- **Compréhension IA** : Permettre aux LLMs de saisir précisément l'identité et les services EOLIYA
- **Knowledge Graph** : Faciliter l'intégration dans les graphes de connaissances (Google, Wikidata)
- **Rich Results** : Obtenir des résultats enrichis dans Google
- **Entity Recognition** : Être reconnu comme entité de référence

### 1.2 Stack technique

- **Format** : JSON-LD (JavaScript Object Notation for Linked Data)
- **Vocabulaire** : Schema.org
- **Validation** : Google Rich Results Test, Schema.org Validator
- **Placement** : Balise `<script type="application/ld+json">` dans `<head>`

---

## 2. Schema Organization (base)

### 2.1 Organization complète

**Fichier :** `frontend/src/components/SEO/OrganizationSchema.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.eoliya.com/#organization",
  "name": "EOLIYA Ingénierie",
  "legalName": "EOLIYA Ingénierie SAS",
  "url": "https://www.eoliya.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.eoliya.com/images/logo-eoliya.png",
    "width": 600,
    "height": 200,
    "caption": "EOLIYA Ingénierie - Bureau d'études bâtiment"
  },
  "image": [
    "https://www.eoliya.com/images/logo-eoliya.png",
    "https://www.eoliya.com/images/equipe-eoliya.jpg",
    "https://www.eoliya.com/images/projets-eoliya.jpg"
  ],
  "description": "Bureau d'études spécialisé dans l'ingénierie du bâtiment, le relamping LED et la conception de luminaires sur mesure. Expert en conseil TCE et maîtrise d'œuvre pour projets tertiaires et industriels.",
  "foundingDate": "2011",
  "slogan": "Des solutions d'ingénierie sur mesure pour vos projets tertiaires et industriels",

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "131 Boulevard Pereire",
    "addressLocality": "Paris",
    "addressRegion": "Île-de-France",
    "postalCode": "75017",
    "addressCountry": "FR"
  },

  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8849,
    "longitude": 2.2972
  },

  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+33-1-34-22-30-12",
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": ["fr", "en"]
    },
    {
      "@type": "ContactPoint",
      "email": "contact@eoliya.com",
      "contactType": "general inquiries",
      "areaServed": "FR",
      "availableLanguage": ["fr", "en"]
    }
  ],

  "sameAs": [
    "https://www.linkedin.com/company/eoliya-ingenierie",
    "https://www.wikidata.org/wiki/Q[À_CRÉER]",
    "https://www.facebook.com/eoliya",
    "https://twitter.com/eoliya"
  ],

  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 48.8849,
      "longitude": 2.2972
    },
    "geoRadius": "100000",
    "description": "Île-de-France et France métropolitaine"
  },

  "knowsAbout": [
    {
      "@type": "DefinedTerm",
      "name": "Ingénierie du bâtiment",
      "url": "https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_du_b%C3%A2timent"
    },
    {
      "@type": "DefinedTerm",
      "name": "Relamping LED",
      "url": "https://fr.wikipedia.org/wiki/Diode_%C3%A9lectroluminescente"
    },
    {
      "@type": "DefinedTerm",
      "name": "Bureau d'études techniques",
      "url": "https://fr.wikipedia.org/wiki/Bureau_d%27%C3%A9tudes_techniques"
    },
    {
      "@type": "DefinedTerm",
      "name": "Maîtrise d'œuvre",
      "url": "https://fr.wikipedia.org/wiki/Ma%C3%AEtrise_d%27%C5%93uvre"
    }
  ],

  "award": [
    "150+ projets réalisés pour grands comptes",
    "Partenaire du Conseil d'État",
    "Expertise reconnue en luminaires techniques"
  ],

  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 12
  },

  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "27",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### 2.2 Points clés

**@id unique** : `https://www.eoliya.com/#organization` permet de référencer cette entité ailleurs
**sameAs** : Liens vers profils sociaux et Wikidata (critical pour entity linking)
**knowsAbout** : Domaines d'expertise avec liens Wikipedia (semantic linking)
**geo** : Coordonnées GPS précises pour géolocalisation IA

---

## 3. Schema LocalBusiness

### 3.1 LocalBusiness complet

**Fichier :** `frontend/src/components/SEO/LocalBusinessSchema.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.eoliya.com/#localbusiness",
  "name": "EOLIYA Ingénierie",
  "image": "https://www.eoliya.com/images/batiment-eoliya.jpg",
  "priceRange": "€€€",

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "131 Boulevard Pereire",
    "addressLocality": "Paris",
    "postalCode": "75017",
    "addressCountry": "FR"
  },

  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8849,
    "longitude": 2.2972
  },

  "telephone": "+33-1-34-22-30-12",
  "email": "contact@eoliya.com",
  "url": "https://www.eoliya.com",

  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],

  "hasMap": "https://www.google.com/maps/place/131+Boulevard+Pereire,+75017+Paris",

  "containedInPlace": {
    "@type": "Place",
    "name": "17e arrondissement de Paris",
    "url": "https://fr.wikipedia.org/wiki/17e_arrondissement_de_Paris"
  },

  "paymentAccepted": "Virement bancaire, Chèque",

  "currenciesAccepted": "EUR",

  "servesCuisine": null,

  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Conseil TCE et Maîtrise d'œuvre",
        "serviceType": "Bureau d'études techniques"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Relamping LED",
        "serviceType": "Optimisation énergétique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Luminaires sur mesure",
        "serviceType": "Conception et fabrication"
      }
    }
  ]
}
```

---

## 4. Schema Service (par service)

### 4.1 Service 1 : Conseil TCE

**Fichier :** `frontend/src/data/schemas/service-conseil-tce.json`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.eoliya.com/services/conseil-tce#service",
  "name": "Conseil TCE et Maîtrise d'œuvre",
  "description": "Accompagnement complet pour vos projets de construction, rénovation ou aménagement. Nos ingénieurs assurent la mission de technicien conseil en environnement (TCE) et coordonnent l'ensemble des intervenants : architectes, bureaux d'études, entreprises de travaux.",
  "provider": {
    "@id": "https://www.eoliya.com/#organization"
  },
  "serviceType": "Bureau d'études techniques",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 48.8566,
      "longitude": 2.3522
    },
    "geoRadius": "100000",
    "description": "Île-de-France"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Prestations Conseil TCE",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Analyse de faisabilité et diagnostic technique"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Élaboration des cahiers des charges"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Supervision des travaux et réception"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accompagnement réglementaire (PMR, sécurité incendie, normes électriques)"
        }
      }
    ]
  },
  "termsOfService": "https://www.eoliya.com/conditions-generales",
  "providerMobility": "static",
  "category": [
    "Ingénierie",
    "BTP",
    "Maîtrise d'œuvre"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Entreprises, Collectivités, ERP"
  }
}
```

### 4.2 Service 2 : Relamping LED

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.eoliya.com/services/relamping-led#service",
  "name": "Relamping LED et Optimisation énergétique",
  "description": "Transition énergétique complète de vos installations d'éclairage. Remplacement des sources conventionnelles par des LED haute performance. Économies d'énergie jusqu'à 80%.",
  "provider": {
    "@id": "https://www.eoliya.com/#organization"
  },
  "serviceType": "Optimisation énergétique - Éclairage LED",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "offers": {
    "@type": "Offer",
    "name": "Forfait Relamping LED",
    "description": "Audit, fourniture, installation et mise en service",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "Sur devis",
      "priceCurrency": "EUR"
    },
    "availabilityStarts": "2011-01-01",
    "businessFunction": "http://purl.org/goodrelations/v1#Sell"
  },
  "category": [
    "LED",
    "Éclairage",
    "Efficacité énergétique",
    "Transition énergétique"
  ],
  "potentialAction": {
    "@type": "ConsumeAction",
    "name": "Demander un devis gratuit",
    "target": "https://www.eoliya.com/contact"
  }
}
```

### 4.3 Service 3 : Luminaires sur mesure

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.eoliya.com/services/luminaires-sur-mesure#service",
  "name": "Conception et fabrication de luminaires sur mesure",
  "description": "Bureau d'études spécialisé dans la conception de luminaires techniques adaptés à vos contraintes architecturales et normatives. Calculs photométriques, prototypes et fabrication en petite ou moyenne série.",
  "provider": {
    "@id": "https://www.eoliya.com/#organization"
  },
  "serviceType": "Conception et fabrication - Luminaires techniques",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Prestations Luminaires sur mesure",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Étude d'implantation et calculs d'éclairement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Conformité aux normes (NFC 71-121, EN 12464, BAEL)"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fabrication française en petite et moyenne série"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solutions ATEX et milieux spécifiques"
        }
      }
    ]
  },
  "category": [
    "Luminaires",
    "Éclairage technique",
    "Conception sur mesure",
    "Photométrie"
  ],
  "additionalType": [
    "https://fr.wikipedia.org/wiki/Luminaire",
    "https://fr.wikipedia.org/wiki/Photom%C3%A9trie"
  ]
}
```

---

## 5. Schema FAQPage

### 5.1 FAQ optimisée pour IA

**Fichier :** `frontend/src/components/SEO/FAQSchema.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un bureau d'études TCE ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un bureau d'études TCE (Technicien Conseil en Environnement) est un expert qui accompagne les maîtres d'ouvrage dans le pilotage de leurs projets de construction ou rénovation. Il coordonne les différents corps d'état (électricité, plomberie, CVC, etc.) et assure le respect des normes et du budget. EOLIYA Ingénierie intervient comme TCE depuis 15 ans sur des projets tertiaires et industriels."
      }
    },
    {
      "@type": "Question",
      "name": "Combien peut-on économiser avec un relamping LED ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un projet de relamping LED permet d'économiser entre 50% et 80% sur la consommation électrique liée à l'éclairage. Par exemple, remplacer 100 tubes fluorescents T8 de 58W par des LED de 18W permet d'économiser environ 4 000 kWh/an, soit environ 600€/an au tarif professionnel moyen. L'amortissement se fait généralement en 2 à 4 ans. EOLIYA réalise des audits gratuits pour chiffrer précisément vos économies potentielles."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les normes d'éclairage pour les ERP ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les établissements recevant du public (ERP) doivent respecter plusieurs normes d'éclairage : la norme NF C 71-121 pour l'éclairage de sécurité, la norme EN 12464-1 pour l'éclairage des lieux de travail, et le règlement de sécurité ERP concernant l'éclairage normal et l'éclairage d'évacuation. EOLIYA Ingénierie maîtrise l'ensemble de ces réglementations et assure la conformité de vos installations."
      }
    },
    {
      "@type": "Question",
      "name": "Où intervient EOLIYA Ingénierie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EOLIYA Ingénierie est basé au 131 Boulevard Pereire dans le 17e arrondissement de Paris. Nous intervenons principalement en Île-de-France (Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Essonne, Yvelines, Val-d'Oise, Seine-et-Marne) et sur l'ensemble de la France métropolitaine pour les projets d'envergure."
      }
    },
    {
      "@type": "Question",
      "name": "Quels types de clients EOLIYA accompagne-t-il ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EOLIYA Ingénierie accompagne trois types de clients principaux : les entreprises du tertiaire (bureaux, commerces), les institutions et administrations publiques (nous sommes partenaires du Conseil d'État, de l'Institut de France), et les gestionnaires d'ERP (hôtels, restaurants, centres commerciaux). Parmi nos 150+ projets réalisés, nous comptons des clients comme Veepee, Barrière, Vinci Energies, et E.Leclerc."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure un projet de relamping LED ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La durée d'un projet de relamping LED varie selon la taille : pour un bureau de 500m², comptez 2 à 3 semaines (audit, commande, installation). Pour un bâtiment de 5000m², prévoyez 2 à 3 mois. EOLIYA organise les interventions en dehors des heures d'ouverture pour minimiser l'impact sur votre activité."
      }
    },
    {
      "@type": "Question",
      "name": "EOLIYA peut-il concevoir des luminaires spécifiques ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, EOLIYA dispose d'un bureau d'études dédié à la conception de luminaires techniques sur mesure. Nous réalisons l'étude photométrique, le design mécanique, les prototypes et la fabrication en petite ou moyenne série. Nos luminaires sont conformes aux normes NFC 71-121, EN 12464 et BAEL. Nous pouvons également développer des solutions ATEX pour environnements explosifs."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le délai pour obtenir un devis ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EOLIYA s'engage à fournir un devis détaillé sous 48 heures ouvrées après la visite technique ou la réception des plans. Pour les demandes urgentes, nous pouvons établir un pré-chiffrage sous 24h. Contactez-nous au 01 34 22 30 12 ou via contact@eoliya.com."
      }
    }
  ]
}
```

---

## 6. Schema BreadcrumbList

### 6.1 Fil d'Ariane sémantique

**Sur page service :**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://www.eoliya.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.eoliya.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Relamping LED",
      "item": "https://www.eoliya.com/services/relamping-led"
    }
  ]
}
```

---

## 7. Schema Person (équipe)

### 7.1 Profils experts

**Pour page équipe :**

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nejib Aloui",
  "jobTitle": "Directeur Technique",
  "worksFor": {
    "@id": "https://www.eoliya.com/#organization"
  },
  "image": "https://www.eoliya.com/images/team/nejib-aloui.jpg",
  "description": "Ingénieur spécialisé en éclairage LED et conception de luminaires techniques. 15 ans d'expérience dans l'ingénierie du bâtiment.",
  "knowsAbout": [
    "Ingénierie électrique",
    "Éclairage LED",
    "Photométrie",
    "Normes électriques"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "[École d'ingénieur]"
  },
  "sameAs": [
    "https://www.linkedin.com/in/nejib-aloui"
  ]
}
```

---

## 8. Schema Review (témoignages)

### 8.1 Avis clients structurés

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@id": "https://www.eoliya.com/#organization"
  },
  "author": {
    "@type": "Person",
    "name": "Responsable Facilities, Client institutionnel"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "reviewBody": "EOLIYA a piloté notre projet de mise aux normes avec rigueur et réactivité. Leur expertise technique nous a permis de respecter nos délais et notre budget.",
  "datePublished": "2025-03-15"
}
```

---

## 9. Entity Linking avancé

### 9.1 Liens vers Wikipedia/Wikidata

**Dans le contenu HTML :**

```html
<article vocab="https://schema.org/" typeof="Article">
  <p>
    <span property="author" typeof="Organization">
      <a href="https://www.eoliya.com" property="url">
        <span property="name">EOLIYA Ingénierie</span>
      </a>
    </span>
    est un
    <a href="https://fr.wikipedia.org/wiki/Bureau_d%27%C3%A9tudes_techniques"
       rel="external noopener"
       property="about">bureau d'études techniques</a>
    spécialisé dans le
    <a href="https://fr.wikipedia.org/wiki/Relamping"
       rel="external noopener"
       property="mentions">relamping LED</a>,
    basé dans le
    <a href="https://fr.wikipedia.org/wiki/17e_arrondissement_de_Paris"
       rel="external noopener"
       property="contentLocation">17e arrondissement de Paris</a>.
  </p>

  <p>
    Nous avons réalisé plus de 150 projets pour des clients prestigieux comme le
    <a href="https://fr.wikipedia.org/wiki/Conseil_d%27%C3%89tat_(France)"
       rel="external noopener"
       property="mentions">Conseil d'État</a>
    et l'<a href="https://fr.wikipedia.org/wiki/Institut_de_France"
       rel="external noopener"
       property="mentions">Institut de France</a>.
  </p>
</article>
```

### 9.2 Wikidata Q-codes

**Une fois l'entité Wikidata créée :**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EOLIYA Ingénierie",
  "sameAs": [
    "https://www.wikidata.org/wiki/Q123456789",
    "https://www.linkedin.com/company/eoliya-ingenierie"
  ],
  "subjectOf": {
    "@type": "CreativeWork",
    "url": "https://fr.wikipedia.org/wiki/EOLIYA_Ingénierie",
    "inLanguage": "fr"
  }
}
```

---

## 10. Knowledge Graph optimization

### 10.1 Liens sémantiques

**Relier EOLIYA à des concepts reconnus :**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EOLIYA Ingénierie",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.eoliya.com/"
  },
  "about": [
    {
      "@type": "Thing",
      "@id": "http://www.wikidata.org/entity/Q44167",
      "name": "Bureau d'études",
      "sameAs": "https://fr.wikipedia.org/wiki/Bureau_d%27%C3%A9tudes"
    },
    {
      "@type": "Thing",
      "@id": "http://www.wikidata.org/entity/Q178692",
      "name": "Diode électroluminescente",
      "sameAs": "https://fr.wikipedia.org/wiki/Diode_%C3%A9lectroluminescente"
    },
    {
      "@type": "Thing",
      "@id": "http://www.wikidata.org/entity/Q90",
      "name": "Paris",
      "sameAs": "https://fr.wikipedia.org/wiki/Paris"
    }
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Syndicat des bureaux d'études techniques",
      "url": "[URL si applicable]"
    }
  ]
}
```

---

## 11. Implémentation Next.js

### 11.1 Composant réutilisable

**Fichier :** `frontend/src/components/SEO/StructuredData.tsx`

```typescript
import React from 'react';

interface StructuredDataProps {
  data: object;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;
```

### 11.2 Utilisation dans layout

**Fichier :** `frontend/src/app/layout.tsx`

```typescript
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

### 11.3 Schema dynamique par page

**Fichier :** `frontend/src/app/services/relamping-led/page.tsx`

```typescript
import { StructuredData } from '@/components/SEO/StructuredData';
import relampingServiceSchema from '@/data/schemas/service-relamping-led.json';
import breadcrumbSchema from '@/data/schemas/breadcrumb-relamping.json';

export default function RelampingLEDPage() {
  return (
    <>
      <StructuredData data={relampingServiceSchema} />
      <StructuredData data={breadcrumbSchema} />

      <main>
        {/* Contenu de la page */}
      </main>
    </>
  );
}
```

---

## 12. Validation et tests

### 12.1 Google Rich Results Test

**URL :** https://search.google.com/test/rich-results

**Processus :**
1. Coller l'URL de la page ou le code JSON-LD
2. Vérifier l'absence d'erreurs
3. Vérifier les avertissements (warnings)
4. S'assurer que tous les champs obligatoires sont présents

### 12.2 Schema.org Validator

**URL :** https://validator.schema.org/

**Vérifications :**
- Syntaxe JSON valide
- Conformité au vocabulaire Schema.org
- Typage correct (@type)
- URLs absolues

### 12.3 Structured Data Linter

**URL :** http://linter.structured-data.org/

**Tests supplémentaires :**
- Visualisation du graphe de données
- Détection des incohérences
- Suggestions d'amélioration

---

## 13. Checklist d'implémentation

### Phase 1 : Schemas de base
- [ ] Organization schema sur toutes les pages
- [ ] LocalBusiness schema sur page d'accueil
- [ ] BreadcrumbList sur toutes les pages
- [ ] WebSite schema avec SearchAction

### Phase 2 : Schemas de contenu
- [ ] Service schema pour chaque service (x3)
- [ ] FAQPage schema sur page FAQ
- [ ] Article schema pour articles de blog

### Phase 3 : Schemas relationnels
- [ ] Person schema pour profils équipe
- [ ] Review schema pour témoignages
- [ ] Event schema si événements

### Phase 4 : Entity linking
- [ ] Liens Wikipedia dans le contenu
- [ ] Wikidata Q-codes dans sameAs
- [ ] additionalType pour concepts
- [ ] about et mentions pour entités liées

### Phase 5 : Validation
- [ ] Test Google Rich Results sans erreur
- [ ] Validation Schema.org passée
- [ ] Structured Data Linter OK
- [ ] Google Search Console - Onglet "Améliorations"

---

## 14. Maintenance et évolution

### 14.1 Mise à jour régulière

**Mensuel :**
- Vérifier la validité des schemas (changements Schema.org)
- Ajouter nouveaux projets/témoignages
- Mettre à jour chiffres clés (nombre de projets, etc.)

**Trimestriel :**
- Revalider avec Google Rich Results Test
- Vérifier les logs Google Search Console
- Analyser les rich snippets obtenus

**Annuel :**
- Audit complet des données structurées
- Révision de la stratégie entity linking
- Mise à jour Wikidata si applicable

### 14.2 Évolutions Schema.org

**Veille :**
- S'abonner à [Schema.org Blog](https://blog.schema.org/)
- Suivre [@schemaorg](https://twitter.com/schemaorg) sur X
- Vérifier les nouvelles propriétés disponibles

---

## 15. Ressources

### Documentation officielle
- [Schema.org](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [JSON-LD Playground](https://json-ld.org/playground/)

### Outils
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Generator](https://technicalseo.com/tools/schema-markup-generator/)
- [JSON-LD Schema Generator](https://www.jamesdflynn.com/json-ld-schema-generator/)

### Wikidata
- [Wikidata Main Page](https://www.wikidata.org/)
- [Wikidata Query Service](https://query.wikidata.org/)

---

**Document maintenu par Nejib Aloui**
**Contact :** contact@eoliya.com
**Version :** 1.0 - Mai 2026
