import { Project, ProjectStats } from '@/types/projects';

/**
 * Données des projets de référence EOLIYA Ingénierie
 */
export const projectsData: Project[] = [
  {
    id: 'veepee',
    title: 'Relamping LED Bureaux',
    client: 'Veepee',
    category: 'Bureaux',
    description: 'Modernisation complète de l\'éclairage du siège social avec installation de LED haute performance pour optimiser le confort visuel et réduire la consommation énergétique de 60%.',
    image: '/images/projects/veepee-office.svg',
    year: '2024',
    location: 'Saint-Denis, France',
    scope: ['LED', 'Économie d\'énergie', 'Confort visuel'],
    duration: 3,
    energySavings: 60,
    surface: 8500,
    technologies: ['LED haute performance', 'Détecteurs de présence', 'Gradation automatique'],
    status: 'completed'
  },
  {
    id: 'casino-barriere',
    title: 'Installation Éclairage Technique',
    client: 'Casino Barrière',
    category: 'Loisirs',
    description: 'Conception et installation d\'un système d\'éclairage technique sophistiqué avec spots directionnels et éclairage d\'ambiance pour créer une atmosphère unique.',
    image: '/images/projects/casino-barriere.svg',
    year: '2024',
    location: 'Enghien-les-Bains, France',
    scope: ['Éclairage technique', 'Ambiance', 'Spotlights'],
    duration: 4,
    surface: 3200,
    technologies: ['Spotlights LED', 'DMX', 'Éclairage scénique', 'Contrôle intelligent'],
    certifications: ['NF C 15-100'],
    status: 'completed'
  },
  {
    id: 'conseil-etat',
    title: 'Mise aux Normes Électriques',
    client: 'Conseil d\'État',
    category: 'Institution',
    description: 'Mise en conformité totale des installations électriques d\'un bâtiment historique en respectant les normes NF C 15-100 tout en préservant l\'architecture d\'origine.',
    image: '/images/projects/conseil-etat.svg',
    year: '2023',
    location: 'Paris, France',
    scope: ['Normes NF C 15-100', 'Patrimoine', 'Sécurité'],
    duration: 6,
    surface: 12000,
    technologies: ['Tableaux électriques modulaires', 'Parafoudres', 'Dispositifs différentiels'],
    certifications: ['NF C 15-100', 'Attestation Consuel'],
    status: 'completed'
  },
  {
    id: 'leclerc',
    title: 'Optimisation Énergétique Éclairage',
    client: 'E.Leclerc',
    category: 'Commerce',
    description: 'Déploiement d\'une solution d\'éclairage intelligente avec détecteurs de présence et gradation automatique, permettant une réduction de 55% de la consommation électrique.',
    image: '/images/projects/leclerc-store.svg',
    year: '2024',
    location: 'Île-de-France, France',
    scope: ['Smart lighting', 'Détection', 'Économie d\'énergie'],
    duration: 5,
    energySavings: 55,
    surface: 6800,
    technologies: ['LED intelligentes', 'Détecteurs de mouvement', 'Système de gestion centralisé', 'Capteurs de luminosité'],
    certifications: ['ISO 50001'],
    status: 'completed'
  },
  {
    id: 'azureva',
    title: 'Rénovation Éclairage Chambres',
    client: 'Azureva',
    category: 'Hôtellerie',
    description: 'Rénovation complète de l\'éclairage de 120 chambres d\'hôtel avec création d\'ambiances multiples et système de contrôle individuel pour un confort optimal des clients.',
    image: '/images/projects/azureva-hotel.svg',
    year: '2023',
    location: 'Littoral français, France',
    scope: ['Ambiance', 'Confort', 'Variateurs'],
    duration: 4,
    energySavings: 45,
    surface: 4500,
    technologies: ['LED dimmables', 'Variateurs sans fil', 'Scénarios lumineux', 'Contrôle individuel'],
    status: 'completed'
  },
  {
    id: 'dentsu',
    title: 'Conception Lumière Sur Mesure',
    client: 'Dentsu',
    category: 'Bureaux',
    description: 'Création d\'un concept d\'éclairage architectural innovant avec zones lumineuses personnalisées, intégrant l\'identité visuelle de l\'entreprise et favorisant la créativité.',
    image: '/images/projects/dentsu-office.svg',
    year: '2024',
    location: 'Paris, France',
    scope: ['Design', 'Sur mesure', 'Zones lumineuses'],
    duration: 5,
    energySavings: 50,
    surface: 3800,
    technologies: ['Éclairage RGB', 'Contrôle DMX', 'Design sur mesure', 'Intégration architecturale'],
    certifications: ['HQE'],
    status: 'completed'
  }
];

/**
 * Statistiques globales des projets
 */
export const projectStats: ProjectStats = {
  totalProjects: 250,
  satisfactionRate: 98,
  averageEnergySavings: 60,
  yearsOfExperience: 15,
  totalSurface: 185000,
  totalClients: 180
};

/**
 * Liste des catégories disponibles
 */
export const projectCategories = [
  'Bureaux',
  'Commerce',
  'Hôtellerie',
  'Institution',
  'Loisirs',
  'Industrie',
  'Santé',
  'Éducation',
  'Résidentiel'
] as const;

/**
 * Liste des années disponibles
 */
export const projectYears = ['2024', '2023', '2022', '2021', '2020'] as const;

/**
 * Récupérer tous les projets
 */
export const getAllProjects = (): Project[] => {
  return projectsData;
};

/**
 * Récupérer un projet par son ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};

/**
 * Filtrer les projets par catégorie
 */
export const getProjectsByCategory = (category: string): Project[] => {
  return projectsData.filter(project => project.category === category);
};

/**
 * Filtrer les projets par année
 */
export const getProjectsByYear = (year: string): Project[] => {
  return projectsData.filter(project => project.year === year);
};

/**
 * Rechercher des projets
 */
export const searchProjects = (query: string): Project[] => {
  const lowercaseQuery = query.toLowerCase();
  return projectsData.filter(
    project =>
      project.title.toLowerCase().includes(lowercaseQuery) ||
      project.client.toLowerCase().includes(lowercaseQuery) ||
      project.description.toLowerCase().includes(lowercaseQuery) ||
      project.category.toLowerCase().includes(lowercaseQuery)
  );
};

/**
 * Récupérer les projets les plus récents
 */
export const getRecentProjects = (limit: number = 3): Project[] => {
  return projectsData
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, limit);
};

/**
 * Récupérer les projets avec les meilleures économies d'énergie
 */
export const getTopEnergySavingsProjects = (limit: number = 3): Project[] => {
  return projectsData
    .filter(project => project.energySavings !== undefined)
    .sort((a, b) => (b.energySavings || 0) - (a.energySavings || 0))
    .slice(0, limit);
};
