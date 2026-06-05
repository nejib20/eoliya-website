/**
 * Types pour la gestion des projets EOLIYA Ingénierie
 */

export interface Project {
  /** Identifiant unique du projet */
  id: string;

  /** Titre du projet */
  title: string;

  /** Nom du client */
  client: string;

  /** Catégorie du projet */
  category: ProjectCategory;

  /** Description détaillée du projet */
  description: string;

  /** Chemin vers l'image du projet */
  image: string;

  /** Année de réalisation */
  year: string;

  /** Localisation du projet (optionnel) */
  location?: string;

  /** Portée des travaux (optionnel) */
  scope?: string[];

  /** Durée du projet en mois (optionnel) */
  duration?: number;

  /** Budget ou valeur du projet (optionnel) */
  value?: number;

  /** Économies d'énergie réalisées en % (optionnel) */
  energySavings?: number;

  /** Surface traitée en m² (optionnel) */
  surface?: number;

  /** Témoignage client (optionnel) */
  testimonial?: {
    content: string;
    author: string;
    role: string;
  };

  /** Galerie d'images supplémentaires (optionnel) */
  gallery?: string[];

  /** Technologies utilisées (optionnel) */
  technologies?: string[];

  /** Certifications obtenues (optionnel) */
  certifications?: string[];

  /** Lien vers une page dédiée (optionnel) */
  link?: string;

  /** État du projet (optionnel) */
  status?: ProjectStatus;

  /** Date de début (optionnel) */
  startDate?: string;

  /** Date de fin (optionnel) */
  endDate?: string;
}

/**
 * Catégories de projets disponibles
 */
export type ProjectCategory =
  | 'Bureaux'
  | 'Commerce'
  | 'Hôtellerie'
  | 'Institution'
  | 'Loisirs'
  | 'Industrie'
  | 'Santé'
  | 'Éducation'
  | 'Résidentiel';

/**
 * Statut du projet
 */
export type ProjectStatus =
  | 'completed'      // Terminé
  | 'in-progress'    // En cours
  | 'planned'        // Planifié
  | 'on-hold';       // En pause

/**
 * Filtres disponibles pour les projets
 */
export interface ProjectFilters {
  /** Filtrer par catégorie */
  category?: ProjectCategory;

  /** Filtrer par année */
  year?: string;

  /** Filtrer par localisation */
  location?: string;

  /** Filtrer par client */
  client?: string;

  /** Recherche textuelle */
  search?: string;
}

/**
 * Options de tri pour les projets
 */
export type ProjectSortOption =
  | 'year-desc'      // Plus récent en premier
  | 'year-asc'       // Plus ancien en premier
  | 'client-asc'     // Par client A-Z
  | 'category-asc'   // Par catégorie A-Z
  | 'savings-desc';  // Par économies d'énergie décroissantes

/**
 * Statistiques globales des projets
 */
export interface ProjectStats {
  /** Nombre total de projets */
  totalProjects: number;

  /** Taux de satisfaction moyen */
  satisfactionRate: number;

  /** Économies d'énergie moyennes */
  averageEnergySavings: number;

  /** Années d'expérience */
  yearsOfExperience: number;

  /** Surface totale traitée */
  totalSurface?: number;

  /** Nombre de clients */
  totalClients?: number;
}

/**
 * Props pour le composant ProjectCard
 */
export interface ProjectCardProps {
  /** Données du projet */
  project: Project;

  /** Classes CSS additionnelles */
  className?: string;

  /** Afficher les détails étendus */
  showExtendedDetails?: boolean;

  /** Fonction appelée au clic */
  onClick?: (project: Project) => void;

  /** Mode d'affichage */
  variant?: 'default' | 'compact' | 'featured';
}

/**
 * Props pour la section Projects
 */
export interface ProjectsSectionProps {
  /** Liste des projets à afficher */
  projects?: Project[];

  /** Titre de la section */
  title?: string;

  /** Description de la section */
  description?: string;

  /** Afficher les statistiques */
  showStats?: boolean;

  /** Afficher les boutons CTA */
  showCTA?: boolean;

  /** Nombre de projets par ligne (mobile, tablette, desktop) */
  columns?: [number, number, number];

  /** Filtres actifs */
  filters?: ProjectFilters;

  /** Option de tri active */
  sortBy?: ProjectSortOption;
}
