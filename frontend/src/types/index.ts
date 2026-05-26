/**
 * Types TypeScript pour l'application EOLIYA Ingénierie
 * Auteur: Nejib Aloui
 */

// Navigation
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// Services
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon?: string;
  featured?: boolean;
}

// Projects
export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  excerpt: string;
  image?: string;
  client?: string;
  date?: string;
  tags?: string[];
}

// Blog
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author?: string;
  publishedAt: string;
  image?: string;
  readTime?: string;
  tags?: string[];
}

// Testimonials
export interface Testimonial {
  id?: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
}

// Client
export interface Client {
  id?: string;
  name: string;
  logo?: string;
  website?: string;
}

// Contact Form
export interface ContactFormData {
  civilite?: string;
  nom: string;
  prenom: string;
  entreprise?: string;
  fonction?: string;
  email: string;
  telephone?: string;
  objet: string;
  prestations?: string[];
  message: string;
  source?: string;
  rgpd: boolean;
}

// SEO
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

// Strapi Response Types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiData<T> {
  id: number;
  attributes: T & {
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
  };
}
