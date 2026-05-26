/**
 * Client API Strapi
 * Auteur: Nejib Aloui
 */

import type { StrapiResponse, StrapiData } from '@/types';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

/**
 * Client API Strapi
 */
class StrapiClient {
  private baseUrl: string;
  private token?: string;

  constructor(baseUrl: string, token?: string) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  /**
   * Construit l'URL complète avec les paramètres de query
   */
  private buildUrl(endpoint: string, params?: Record<string, string | number | boolean>): string {
    const url = new URL(`${this.baseUrl}/api${endpoint}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    return url.toString();
  }

  /**
   * Effectue une requête GET
   */
  async get<T>(endpoint: string, options?: FetchOptions): Promise<StrapiResponse<T>> {
    const url = this.buildUrl(endpoint, options?.params);

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers,
      ...options,
      next: options?.next || { revalidate: 60 }, // Cache 60s par défaut
    });

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Effectue une requête POST
   */
  async post<T>(endpoint: string, data: unknown, options?: FetchOptions): Promise<StrapiResponse<T>> {
    const url = this.buildUrl(endpoint, options?.params);

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ data }),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Récupère l'URL complète d'un media Strapi
   */
  getMediaUrl(mediaPath?: string): string | null {
    if (!mediaPath) return null;
    if (mediaPath.startsWith('http')) return mediaPath;
    return `${this.baseUrl}${mediaPath}`;
  }
}

// Export de l'instance configurée
export const strapi = new StrapiClient(STRAPI_URL, STRAPI_TOKEN);

/**
 * Helpers pour les requêtes communes
 */

// Services
export async function getServices() {
  return strapi.get('/services', {
    params: {
      populate: '*',
      sort: 'order:asc',
    },
  });
}

export async function getServiceBySlug(slug: string) {
  return strapi.get(`/services`, {
    params: {
      'filters[slug][$eq]': slug,
      populate: '*',
    },
  });
}

// Projets
export async function getProjects() {
  return strapi.get('/projects', {
    params: {
      populate: '*',
      sort: 'date:desc',
    },
  });
}

export async function getProjectBySlug(slug: string) {
  return strapi.get(`/projects`, {
    params: {
      'filters[slug][$eq]': slug,
      populate: '*',
    },
  });
}

// Blog
export async function getBlogPosts(limit = 10) {
  return strapi.get('/blog-posts', {
    params: {
      populate: '*',
      sort: 'publishedAt:desc',
      'pagination[pageSize]': limit,
    },
  });
}

export async function getBlogPostBySlug(slug: string) {
  return strapi.get(`/blog-posts`, {
    params: {
      'filters[slug][$eq]': slug,
      populate: '*',
    },
  });
}

// Clients
export async function getClients() {
  return strapi.get('/clients', {
    params: {
      populate: '*',
      sort: 'order:asc',
    },
  });
}

// Testimonials
export async function getTestimonials() {
  return strapi.get('/testimonials', {
    params: {
      populate: '*',
      sort: 'order:asc',
    },
  });
}

// Contact
export async function submitContactForm(data: unknown) {
  return strapi.post('/contact-submissions', data);
}

export default strapi;
