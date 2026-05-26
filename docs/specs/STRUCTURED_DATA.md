# Structured Data & Schema.org - EOLIYA Ingénierie

## Introduction

Ce document définit l'implémentation complète des données structurées (Schema.org) pour optimiser la présence de EOLIYA Ingénierie dans les résultats de recherche Google et générer des rich snippets.

**Format:** JSON-LD (recommandé par Google)
**Placement:** Balise `<script type="application/ld+json">` dans le `<head>` de chaque page

---

## 1. LocalBusiness Schema (Page d'accueil)

### Implémentation Complète

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://eoliya.com/#organization",
  "name": "EOLIYA Ingénierie",
  "alternateName": "EOLIYA",
  "description": "Bureau d'études techniques spécialisé en ingénierie bâtiment, conseil TCE, relamping LED et luminaires sur mesure. Expertise reconnue pour les projets tertiaires et administratifs en Île-de-France.",
  "url": "https://eoliya.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://eoliya.com/images/logo-eoliya.png",
    "width": 250,
    "height": 80
  },
  "image": [
    "https://eoliya.com/images/eoliya-siege-paris.jpg",
    "https://eoliya.com/images/equipe-eoliya.jpg",
    "https://eoliya.com/images/projets-bureau-etudes.jpg"
  ],
  "telephone": "+33-1-XX-XX-XX-XX",
  "email": "contact@eoliya.com",
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
    "latitude": 48.8854,
    "longitude": 2.2991
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Paris"
    },
    {
      "@type": "State",
      "name": "Île-de-France"
    },
    {
      "@type": "Country",
      "name": "France"
    }
  ],
  "priceRange": "€€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/eoliya-ingenierie",
    "https://www.facebook.com/eoliya",
    "https://twitter.com/eoliya"
  ],
  "founder": {
    "@type": "Person",
    "name": "Nejib Aloui",
    "jobTitle": "Fondateur & Directeur Technique"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "27",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services EOLIYA Ingénierie",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Conseil TCE",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Études Tous Corps d'État",
              "description": "Conception et suivi technique complet des projets bâtiment"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Relamping LED",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Audit et Installation LED",
              "description": "Diagnostic éclairage, conception solution LED et installation complète"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Luminaires Sur Mesure",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conception Luminaires LED",
              "description": "Design et fabrication de luminaires LED personnalisés"
            }
          }
        ]
      }
    ]
  }
}
```

---

## 2. Organization Schema (Toutes les pages)

### Schema Organisation Globale

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://eoliya.com/#organization",
  "name": "EOLIYA Ingénierie",
  "url": "https://eoliya.com",
  "logo": "https://eoliya.com/images/logo-eoliya.png",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+33-1-XX-XX-XX-XX",
      "contactType": "Customer Service",
      "areaServed": "FR",
      "availableLanguage": ["French", "English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+33-6-XX-XX-XX-XX",
      "contactType": "Technical Support",
      "areaServed": "FR",
      "availableLanguage": "French"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "131 Boulevard Pereire",
    "addressLocality": "Paris",
    "postalCode": "75017",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://www.linkedin.com/company/eoliya-ingenierie",
    "https://www.facebook.com/eoliya"
  ]
}
```

---

## 3. Service Schemas (Pages Services)

### 3.1 Service TCE

**URL:** `/services/conseil-tce`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Bureau d'Études TCE",
  "provider": {
    "@id": "https://eoliya.com/#organization"
  },
  "name": "Conseil et Études Tous Corps d'État",
  "description": "Bureau d'études techniques spécialisé en conception TCE pour projets bâtiment tertiaire et administratif. Études structure, fluides, électricité, CVC et synthèse technique.",
  "areaServed": {
    "@type": "State",
    "name": "Île-de-France"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": [
      "Promoteurs immobiliers",
      "Architectes",
      "Maîtres d'ouvrage publics",
      "Entreprises tertiaires"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Prestations TCE",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Études de structure",
          "description": "Calculs béton armé, charpente métallique, fondations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Études fluides",
          "description": "CVC, plomberie, désenfumage, sprinklage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Études électricité",
          "description": "Courants forts/faibles, SSI, éclairage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Synthèse technique",
          "description": "Coordination BIM, plans de synthèse, clash detection"
        }
      }
    ]
  },
  "termsOfService": "https://eoliya.com/mentions-legales",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "Sur devis",
    "priceCurrency": "EUR"
  }
}
```

### 3.2 Service Relamping LED

**URL:** `/services/relamping-led`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Relamping LED Professionnel",
  "provider": {
    "@id": "https://eoliya.com/#organization"
  },
  "name": "Relamping LED Entreprise - Audit et Installation",
  "description": "Solution complète de relamping LED pour entreprises: audit éclairage, conception solution LED personnalisée, installation et mise en service. Économies énergétiques garanties jusqu'à 75%.",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": [
      "Commerces et retail",
      "Bureaux tertiaires",
      "Industries",
      "Administrations publiques",
      "Hôtellerie"
    ]
  },
  "brand": {
    "@type": "Brand",
    "name": "EOLIYA LED Solutions"
  },
  "offers": {
    "@type": "AggregateOffer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "EUR",
    "lowPrice": "2500",
    "highPrice": "50000",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "Variable selon projet",
      "priceCurrency": "EUR"
    }
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Économies énergie",
      "value": "60-75%"
    },
    {
      "@type": "PropertyValue",
      "name": "Durée de vie LED",
      "value": "50000 heures"
    },
    {
      "@type": "PropertyValue",
      "name": "ROI moyen",
      "value": "2-4 ans"
    },
    {
      "@type": "PropertyValue",
      "name": "Garantie",
      "value": "5 ans"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Prestations Relamping LED",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Audit éclairage LED",
          "description": "Diagnostic complet installation existante et préconisations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Étude photométrique",
          "description": "Simulation éclairage LED selon normes en vigueur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Installation LED",
          "description": "Fourniture et pose luminaires LED par électriciens qualifiés"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maintenance",
          "description": "Contrat maintenance préventive et curative"
        }
      }
    ]
  }
}
```

### 3.3 Service Luminaires Sur Mesure

**URL:** `/services/luminaires-sur-mesure`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Conception Luminaires LED Sur Mesure",
  "provider": {
    "@id": "https://eoliya.com/#organization"
  },
  "name": "Luminaires LED Sur Mesure - Design et Fabrication",
  "description": "Conception et fabrication de luminaires LED personnalisés pour projets architecturaux exigeants. Du design à l'installation, solutions d'éclairage uniques adaptées à vos besoins.",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": [
      "Architectes d'intérieur",
      "Designers",
      "Retailers haut de gamme",
      "Hôtellerie de luxe",
      "Musées et galeries"
    ]
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/PreOrder",
    "price": "Sur devis",
    "priceCurrency": "EUR",
    "deliveryLeadTime": {
      "@type": "QuantitativeValue",
      "minValue": 6,
      "maxValue": 12,
      "unitCode": "WEE"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Process Luminaires Sur Mesure",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Conception design",
          "description": "Création design luminaire selon cahier des charges"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Étude photométrique",
          "description": "Simulation éclairage et validation performances"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Prototype",
          "description": "Fabrication prototype et tests"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fabrication série",
          "description": "Production en série et contrôle qualité"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Installation",
          "description": "Pose et mise en service par nos équipes"
        }
      }
    ]
  }
}
```

---

## 4. BreadcrumbList Schema

### Implémentation Dynamique

**Exemple pour `/services/relamping-led`**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://eoliya.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://eoliya.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Relamping LED",
      "item": "https://eoliya.com/services/relamping-led"
    }
  ]
}
```

**Exemple pour `/realisations/conseil-etat`**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://eoliya.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Réalisations",
      "item": "https://eoliya.com/realisations"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Conseil d'État",
      "item": "https://eoliya.com/realisations/conseil-etat"
    }
  ]
}
```

---

## 5. FAQPage Schema

### Page Services avec FAQ

**Exemple FAQ Relamping LED**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quelles économies avec un relamping LED ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un relamping LED permet de réaliser entre 60% et 75% d'économies d'énergie par rapport à un éclairage traditionnel (halogène, fluocompact). Sur une installation de 100 luminaires, cela représente une économie moyenne de 3000 à 5000€ par an sur la facture électrique. Le retour sur investissement est généralement atteint entre 2 et 4 ans selon les tarifs énergétiques."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure un projet de relamping LED ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La durée totale d'un projet de relamping LED varie selon l'ampleur: audit éclairage (1-2 jours), étude et conception (1-2 semaines), approvisionnement luminaires (2-4 semaines), installation (quelques jours à 2 semaines selon surface). En moyenne, comptez 6 à 10 semaines entre le premier contact et la mise en service complète."
      }
    },
    {
      "@type": "Question",
      "name": "L'éclairage LED est-il adapté à tous les locaux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, l'éclairage LED professionnel s'adapte à tous types de locaux: bureaux, commerces, entrepôts, industries, parkings, espaces extérieurs. Les solutions LED modernes offrent une large gamme de températures de couleur (2700K à 6500K), d'indices de rendu des couleurs (IRC>80 à IRC>95), et de puissances pour répondre aux exigences spécifiques de chaque environnement."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la durée de vie des LED professionnelles ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les luminaires LED professionnels que nous installons ont une durée de vie moyenne de 50 000 heures, soit environ 15 ans en utilisation standard (8h/jour, 5j/7). Cette longévité exceptionnelle réduit considérablement les coûts de maintenance et de remplacement comparé aux sources traditionnelles qui nécessitent un remplacement tous les 1 à 3 ans."
      }
    },
    {
      "@type": "Question",
      "name": "Le relamping LED nécessite-t-il des travaux importants ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans la majorité des cas, le relamping LED ne nécessite pas de travaux lourds. Nos solutions privilégient le remplacement des luminaires existants par des équivalents LED compatibles avec l'infrastructure électrique en place. L'installation se fait généralement sans interruption prolongée de l'activité, souvent hors heures de bureau pour minimiser la gêne."
      }
    },
    {
      "@type": "Question",
      "name": "Existe-t-il des aides financières pour le relamping LED ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, plusieurs dispositifs d'aides existent pour financer un projet de relamping LED: Certificats d'Économies d'Énergie (CEE), aides de l'ADEME, prêts bonifiés via BPI France, et parfois aides régionales. Ces aides peuvent couvrir 20% à 40% du montant total du projet. Nous vous accompagnons dans la constitution des dossiers pour maximiser les subventions."
      }
    }
  ]
}
```

---

## 6. Article Schema (Blog)

### Template Article de Blog

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{ article.title }}",
  "description": "{{ article.excerpt }}",
  "image": [
    "{{ article.featured_image_url }}"
  ],
  "datePublished": "{{ article.published_date }}",
  "dateModified": "{{ article.modified_date }}",
  "author": {
    "@type": "Person",
    "name": "{{ article.author_name }}",
    "url": "https://eoliya.com/equipe/{{ article.author_slug }}"
  },
  "publisher": {
    "@id": "https://eoliya.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{{ article.url }}"
  },
  "articleSection": "{{ article.category }}",
  "keywords": "{{ article.keywords }}",
  "wordCount": {{ article.word_count }},
  "articleBody": "{{ article.full_text }}"
}
```

**Exemple concret:**

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "RE2020 et éclairage: Ce qui change pour les bâtiments tertiaires",
  "description": "Analyse complète des nouvelles exigences de la RE2020 concernant l'éclairage des bâtiments tertiaires neufs. Impact sur les choix techniques et solutions LED performantes.",
  "image": [
    "https://eoliya.com/blog/images/re2020-eclairage-led.jpg"
  ],
  "datePublished": "2026-05-15T09:00:00+01:00",
  "dateModified": "2026-05-20T14:30:00+01:00",
  "author": {
    "@type": "Person",
    "name": "Nejib Aloui",
    "jobTitle": "Ingénieur éclairage",
    "url": "https://eoliya.com/equipe/nejib-aloui"
  },
  "publisher": {
    "@id": "https://eoliya.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://eoliya.com/blog/re2020-eclairage-batiments-tertiaires"
  },
  "articleSection": "Réglementation",
  "keywords": "RE2020, éclairage LED, bâtiment tertiaire, réglementation thermique, efficacité énergétique",
  "wordCount": 1850
}
```

---

## 7. Review/Testimonial Schema

### Schema Avis Client

**Implémentation sur page témoignages ou homepage**

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "ProfessionalService",
    "name": "EOLIYA Ingénierie"
  },
  "author": {
    "@type": "Person",
    "name": "Jean Dupont"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "datePublished": "2026-04-12",
  "reviewBody": "Excellente prestation pour notre projet de relamping LED sur 2000m² de bureaux. Économies d'énergie de 68% constatées dès le premier mois. Équipe professionnelle et réactive.",
  "publisher": {
    "@type": "Organization",
    "name": "Veepee"
  }
}
```

### Collection d'Avis (Multiple Reviews)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "ProfessionalService",
        "name": "EOLIYA Ingénierie - Relamping LED"
      },
      "author": {
        "@type": "Organization",
        "name": "E.Leclerc"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Installation de luminaires LED dans 3 magasins. Résultats excellents tant sur la qualité d'éclairage que les économies réalisées."
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "ProfessionalService",
        "name": "EOLIYA Ingénierie - Études TCE"
      },
      "author": {
        "@type": "Organization",
        "name": "Conseil d'État"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Bureau d'études très compétent pour notre projet de rénovation. Expertise technique solide et respect des délais."
    }
  ]
}
```

---

## 8. Portfolio/Project Schema

### Schema Projet (Réalisations)

```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Rénovation éclairage Conseil d'État",
  "description": "Projet de relamping LED complet pour les espaces du Conseil d'État. Installation de 450 luminaires LED sur mesure avec système de gestion centralisé.",
  "creator": {
    "@id": "https://eoliya.com/#organization"
  },
  "image": [
    "https://eoliya.com/realisations/conseil-etat/image1.jpg",
    "https://eoliya.com/realisations/conseil-etat/image2.jpg"
  ],
  "dateCreated": "2025-09-01",
  "datePublished": "2025-12-15",
  "workExample": {
    "@type": "CreativeWork",
    "name": "Étude de cas Conseil d'État",
    "url": "https://eoliya.com/realisations/conseil-etat"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Surface traitée",
      "value": "3500 m²"
    },
    {
      "@type": "PropertyValue",
      "name": "Économies énergie",
      "value": "72%"
    },
    {
      "@type": "PropertyValue",
      "name": "Nombre luminaires",
      "value": "450"
    },
    {
      "@type": "PropertyValue",
      "name": "Durée projet",
      "value": "4 mois"
    }
  ]
}
```

---

## 9. VideoObject Schema (si vidéos)

### Schema Vidéo Tutoriel/Présentation

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Comment fonctionne un projet de relamping LED avec EOLIYA",
  "description": "Découvrez en vidéo les 5 étapes d'un projet de relamping LED réussi: de l'audit initial à la mise en service finale.",
  "thumbnailUrl": "https://eoliya.com/videos/thumbnails/relamping-process.jpg",
  "uploadDate": "2026-05-10T08:00:00+01:00",
  "duration": "PT4M30S",
  "contentUrl": "https://eoliya.com/videos/relamping-led-process.mp4",
  "embedUrl": "https://www.youtube.com/embed/XXXXX",
  "publisher": {
    "@id": "https://eoliya.com/#organization"
  }
}
```

---

## 10. Implémentation Technique

### 10.1 Component React pour Schema

```typescript
// components/StructuredData.tsx

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2)
      }}
    />
  );
}
```

### 10.2 Utilisation dans les pages

```typescript
// app/page.tsx (Homepage)

import { StructuredData } from '@/components/StructuredData';
import { localBusinessSchema, organizationSchema } from '@/lib/schemas';

export default function HomePage() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={organizationSchema} />
      {/* Rest of page content */}
    </>
  );
}
```

### 10.3 Fichier schémas centralisé

```typescript
// lib/schemas.ts

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  // ... (voir schema complet section 1)
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  // ... (voir schema complet section 2)
};

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// Export autres schemas...
```

---

## 11. Validation & Tests

### Outils de validation recommandés:

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Tester chaque type de page

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Validation syntaxe JSON-LD

3. **Google Search Console**
   - Section "Améliorations"
   - Monitoring erreurs structured data

### Checklist validation:

- [ ] Tous les schemas valident sans erreur
- [ ] Pas de propriétés obligatoires manquantes
- [ ] URLs absolues (pas de chemins relatifs)
- [ ] Dates au format ISO 8601
- [ ] Images accessibles et bonnes dimensions
- [ ] Numéros téléphone au format international
- [ ] Cohérence données entre pages
- [ ] Test sur environnement staging avant production

---

## 12. Monitoring & Maintenance

### KPIs Structured Data:

1. **Couverture:**
   - Nombre pages avec structured data
   - Types de schema implémentés
   - Pages sans schema à compléter

2. **Erreurs:**
   - Erreurs Search Console (hebdomadaire)
   - Avertissements à corriger
   - Propriétés obsolètes

3. **Performance:**
   - Apparitions rich snippets (Search Console)
   - CTR rich snippets vs résultats standard
   - Featured snippets obtenus

### Maintenance:

- **Mensuel:** Vérification erreurs Search Console
- **Trimestriel:** Audit complet structured data
- **Annuel:** Mise à jour schemas selon évolutions Schema.org
- **Continu:** Ajout schemas pour nouveau contenu

---

**Document créé par:** Nejib Aloui
**Date:** Mai 2026
**Version:** 1.0
**Dernière mise à jour:** 2026-05-26
