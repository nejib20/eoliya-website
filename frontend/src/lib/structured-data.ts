/**
 * Structured Data (JSON-LD) configurations for EOLIYA Ingénierie
 * Schema.org compliant for SEO and AIO optimization
 */

// Company information constants
const COMPANY = {
  name: 'EOLIYA Ingénierie',
  legalName: 'EOLIYA Ingénierie SARL',
  url: 'https://eoliya.com',
  logo: 'https://eoliya.com/logo.png',
  description:
    "Bureau d'études spécialisé en ingénierie du bâtiment, conseil TCE, relamping LED et luminaires sur mesure. 15 ans d'expertise au service des professionnels.",
  foundingDate: '2010',
  telephone: '+33134223012',
  email: 'contact@eoliya.com',
  address: {
    streetAddress: '131 Boulevard Pereire',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    postalCode: '75017',
    addressCountry: 'FR',
  },
  geo: {
    latitude: 48.8806,
    longitude: 2.2877,
  },
  socialLinks: [
    'https://www.linkedin.com/company/eoliya',
  ],
};

/**
 * Organization Schema - For brand identity
 */
export const organizationSchema = {
  '@type': 'Organization',
  '@id': `${COMPANY.url}/#organization`,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  url: COMPANY.url,
  logo: {
    '@type': 'ImageObject',
    url: COMPANY.logo,
    width: 300,
    height: 100,
  },
  description: COMPANY.description,
  foundingDate: COMPANY.foundingDate,
  founder: {
    '@type': 'Person',
    name: 'Nejib Aloui',
  },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 10,
    maxValue: 20,
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'France',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Île-de-France',
    },
  ],
  knowsAbout: [
    'Ingénierie du bâtiment',
    'Maîtrise d\'œuvre TCE',
    'Relamping LED',
    'Luminaires sur mesure',
    'Audit énergétique',
    'Mise aux normes ERP',
    'Éclairage technique',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: COMPANY.telephone,
      email: COMPANY.email,
      availableLanguage: ['French', 'English'],
      areaServed: 'FR',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    ...COMPANY.address,
  },
  sameAs: COMPANY.socialLinks,
};

/**
 * LocalBusiness Schema - For local SEO
 */
export const localBusinessSchema = {
  '@type': 'ProfessionalService',
  '@id': `${COMPANY.url}/#localbusiness`,
  name: COMPANY.name,
  image: COMPANY.logo,
  url: COMPANY.url,
  telephone: COMPANY.telephone,
  email: COMPANY.email,
  description: COMPANY.description,
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    ...COMPANY.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: COMPANY.geo.latitude,
    longitude: COMPANY.geo.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    geoRadius: '100000', // 100km radius
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services d\'ingénierie du bâtiment',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Conseil et Pilotage TCE',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Relamping LED',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Luminaires sur mesure',
      },
    ],
  },
};

/**
 * WebSite Schema - For sitelinks search
 */
export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${COMPANY.url}/#website`,
  url: COMPANY.url,
  name: COMPANY.name,
  description: COMPANY.description,
  publisher: {
    '@id': `${COMPANY.url}/#organization`,
  },
  inLanguage: 'fr-FR',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${COMPANY.url}/recherche?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

/**
 * Service Schemas - For each service page
 */
export const serviceSchemas = {
  conseilPilotage: {
    '@type': 'Service',
    '@id': `${COMPANY.url}/services/conseil-pilotage/#service`,
    name: 'Conseil et Pilotage TCE',
    description:
      'Maîtrise d\'œuvre d\'exécution tous corps d\'état (TCE). Coordination et pilotage de vos projets de construction et rénovation du bâtiment.',
    provider: {
      '@id': `${COMPANY.url}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    serviceType: 'Maîtrise d\'œuvre d\'exécution',
    category: 'Ingénierie du bâtiment',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Prestations TCE',
      itemListElement: [
        'Coordination tous corps d\'état',
        'Suivi de chantier',
        'Planning et ordonnancement',
        'Gestion des interfaces',
        'Réception des travaux',
      ],
    },
  },
  relampingLed: {
    '@type': 'Service',
    '@id': `${COMPANY.url}/services/multiservices-relamping/#service`,
    name: 'Relamping LED et Multiservices',
    description:
      'Remplacement de l\'éclairage existant par des solutions LED performantes. Audit énergétique, étude photométrique et installation.',
    provider: {
      '@id': `${COMPANY.url}/#organization`,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Île-de-France',
    },
    serviceType: 'Rénovation énergétique éclairage',
    category: 'Efficacité énergétique',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Prestations Relamping',
      itemListElement: [
        'Audit énergétique éclairage',
        'Étude photométrique',
        'Remplacement LED',
        'Mise aux normes',
        'Maintenance préventive',
      ],
    },
  },
  luminairesSurMesure: {
    '@type': 'Service',
    '@id': `${COMPANY.url}/services/luminaires-sur-mesure/#service`,
    name: 'Luminaires sur Mesure',
    description:
      'Conception et fabrication de luminaires techniques sur mesure pour l\'architecture et le design d\'intérieur. Solutions personnalisées.',
    provider: {
      '@id': `${COMPANY.url}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    serviceType: 'Design luminaire',
    category: 'Éclairage architectural',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Prestations Luminaires',
      itemListElement: [
        'Conception sur mesure',
        'Prototypage',
        'Fabrication',
        'Installation',
        'SAV et maintenance',
      ],
    },
  },
};

/**
 * FAQ Schema - For contact page
 */
export const faqSchema = {
  '@type': 'FAQPage',
  '@id': `${COMPANY.url}/contact/#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Proposez-vous des devis gratuits ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous établissons des devis gratuits et sans engagement pour tous nos services. Selon la complexité de votre projet, une visite de site peut être nécessaire.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont vos délais d\'intervention pour un dépannage ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour les clients sous contrat, nous intervenons sous 24h (4h pour contrats premium). Pour les demandes ponctuelles, les délais varient selon notre charge de travail (généralement sous 48 à 72h).',
      },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous en dehors de l\'Île-de-France ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous pouvons intervenir partout en France pour des projets d\'envergure (pilotage TCE, luminaires sur mesure). Pour la maintenance courante, notre zone d\'intervention privilégiée est l\'Île-de-France.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour recevoir une réponse à ma demande ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous nous engageons à répondre sous 24h ouvrées. Pour les demandes complexes nécessitant une étude préalable, nous vous indiquons un délai de remise de proposition.',
      },
    },
  ],
};

/**
 * BreadcrumbList Schema Generator
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Combined schemas for the homepage/layout
 */
export const globalSchemas = [
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
];
