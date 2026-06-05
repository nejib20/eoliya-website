import { useState, useMemo, useCallback } from 'react';
import { Project, ProjectFilters, ProjectSortOption } from '@/types/projects';
import { projectsData } from '@/data/projects.data';

/**
 * Hook personnalisé pour gérer les projets
 * Fournit des fonctionnalités de filtrage, tri et recherche
 */
export const useProjects = () => {
  const [filters, setFilters] = useState<ProjectFilters>({});
  const [sortBy, setSortBy] = useState<ProjectSortOption>('year-desc');
  const [searchQuery, setSearchQuery] = useState('');

  /**
   * Filtrer et trier les projets
   */
  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projectsData];

    // Appliquer les filtres
    if (filters.category) {
      result = result.filter(project => project.category === filters.category);
    }

    if (filters.year) {
      result = result.filter(project => project.year === filters.year);
    }

    if (filters.location) {
      result = result.filter(
        project =>
          project.location?.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    if (filters.client) {
      result = result.filter(
        project =>
          project.client.toLowerCase().includes(filters.client!.toLowerCase())
      );
    }

    // Appliquer la recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        project =>
          project.title.toLowerCase().includes(query) ||
          project.client.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.scope?.some(s => s.toLowerCase().includes(query))
      );
    }

    // Appliquer le tri
    switch (sortBy) {
      case 'year-desc':
        result.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        break;
      case 'year-asc':
        result.sort((a, b) => parseInt(a.year) - parseInt(b.year));
        break;
      case 'client-asc':
        result.sort((a, b) => a.client.localeCompare(b.client));
        break;
      case 'category-asc':
        result.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'savings-desc':
        result.sort(
          (a, b) => (b.energySavings || 0) - (a.energySavings || 0)
        );
        break;
    }

    return result;
  }, [filters, sortBy, searchQuery]);

  /**
   * Mettre à jour un filtre
   */
  const updateFilter = useCallback(
    <K extends keyof ProjectFilters>(key: K, value: ProjectFilters[K]) => {
      setFilters(prev => ({ ...prev, [key]: value }));
    },
    []
  );

  /**
   * Réinitialiser tous les filtres
   */
  const resetFilters = useCallback(() => {
    setFilters({});
    setSearchQuery('');
  }, []);

  /**
   * Obtenir les catégories disponibles
   */
  const availableCategories = useMemo(() => {
    return Array.from(new Set(projectsData.map(p => p.category))).sort();
  }, []);

  /**
   * Obtenir les années disponibles
   */
  const availableYears = useMemo(() => {
    return Array.from(new Set(projectsData.map(p => p.year)))
      .sort()
      .reverse();
  }, []);

  /**
   * Obtenir les clients disponibles
   */
  const availableClients = useMemo(() => {
    return Array.from(new Set(projectsData.map(p => p.client))).sort();
  }, []);

  /**
   * Obtenir un projet par ID
   */
  const getProjectById = useCallback((id: string): Project | undefined => {
    return projectsData.find(project => project.id === id);
  }, []);

  /**
   * Obtenir les projets similaires
   */
  const getSimilarProjects = useCallback(
    (project: Project, limit: number = 3): Project[] => {
      return projectsData
        .filter(
          p =>
            p.id !== project.id &&
            (p.category === project.category || p.client === project.client)
        )
        .slice(0, limit);
    },
    []
  );

  /**
   * Obtenir les projets récents
   */
  const getRecentProjects = useCallback((limit: number = 3): Project[] => {
    return [...projectsData]
      .sort((a, b) => parseInt(b.year) - parseInt(a.year))
      .slice(0, limit);
  }, []);

  /**
   * Obtenir les projets mis en avant
   */
  const getFeaturedProjects = useCallback((): Project[] => {
    return projectsData.filter(
      p => p.energySavings && p.energySavings >= 50
    );
  }, []);

  /**
   * Statistiques des projets filtrés
   */
  const stats = useMemo(() => {
    const projects = filteredAndSortedProjects;
    const totalSurface = projects.reduce(
      (sum, p) => sum + (p.surface || 0),
      0
    );
    const avgEnergySavings =
      projects.filter(p => p.energySavings).length > 0
        ? projects.reduce((sum, p) => sum + (p.energySavings || 0), 0) /
          projects.filter(p => p.energySavings).length
        : 0;

    return {
      total: projects.length,
      totalSurface,
      avgEnergySavings: Math.round(avgEnergySavings),
      categories: new Set(projects.map(p => p.category)).size,
      clients: new Set(projects.map(p => p.client)).size
    };
  }, [filteredAndSortedProjects]);

  return {
    // Données
    projects: filteredAndSortedProjects,
    allProjects: projectsData,

    // Filtres
    filters,
    updateFilter,
    resetFilters,
    searchQuery,
    setSearchQuery,

    // Tri
    sortBy,
    setSortBy,

    // Options disponibles
    availableCategories,
    availableYears,
    availableClients,

    // Méthodes
    getProjectById,
    getSimilarProjects,
    getRecentProjects,
    getFeaturedProjects,

    // Statistiques
    stats
  };
};

export default useProjects;
