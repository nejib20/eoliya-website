import React from 'react';
import { ProjectFilters as ProjectFiltersType, ProjectSortOption } from '@/types/projects';

interface ProjectFiltersProps {
  filters: ProjectFiltersType;
  onFilterChange: <K extends keyof ProjectFiltersType>(
    key: K,
    value: ProjectFiltersType[K]
  ) => void;
  onResetFilters: () => void;
  sortBy: ProjectSortOption;
  onSortChange: (sort: ProjectSortOption) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  availableCategories: string[];
  availableYears: string[];
  className?: string;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange,
  availableCategories,
  availableYears,
  className = ''
}) => {
  const hasActiveFilters =
    filters.category || filters.year || filters.location || searchQuery;

  return (
    <div className={`bg-white rounded-xl shadow-md p-6 ${className}`}>
      {/* Search bar */}
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-semibold text-slate-700 mb-2">
          Rechercher
        </label>
        <div className="relative">
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher un projet, client..."
            className="w-full px-4 py-3 pl-10 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Filters grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Category filter */}
        <div>
          <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-2">
            Catégorie
          </label>
          <select
            id="category"
            value={filters.category || ''}
            onChange={(e) =>
              onFilterChange('category', (e.target.value || undefined) as any)
            }
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
          >
            <option value="">Toutes les catégories</option>
            {availableCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Year filter */}
        <div>
          <label htmlFor="year" className="block text-sm font-semibold text-slate-700 mb-2">
            Année
          </label>
          <select
            id="year"
            value={filters.year || ''}
            onChange={(e) => onFilterChange('year', e.target.value || undefined)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
          >
            <option value="">Toutes les années</option>
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sort */}
      <div className="mb-6">
        <label htmlFor="sort" className="block text-sm font-semibold text-slate-700 mb-2">
          Trier par
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as ProjectSortOption)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
        >
          <option value="year-desc">Plus récent en premier</option>
          <option value="year-asc">Plus ancien en premier</option>
          <option value="client-asc">Client (A-Z)</option>
          <option value="category-asc">Catégorie (A-Z)</option>
          <option value="savings-desc">Économies d'énergie</option>
        </select>
      </div>

      {/* Reset button */}
      {hasActiveFilters && (
        <button
          onClick={onResetFilters}
          className="w-full px-4 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Réinitialiser les filtres
        </button>
      )}

      {/* Active filters display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-slate-200">
          <div className="text-xs font-semibold text-slate-500 mb-2">FILTRES ACTIFS</div>
          <div className="flex flex-wrap gap-2">
            {filters.category && (
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full flex items-center gap-1">
                {filters.category}
                <button
                  onClick={() => onFilterChange('category', undefined)}
                  className="hover:text-yellow-900"
                >
                  ×
                </button>
              </span>
            )}
            {filters.year && (
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full flex items-center gap-1">
                {filters.year}
                <button
                  onClick={() => onFilterChange('year', undefined)}
                  className="hover:text-yellow-900"
                >
                  ×
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full flex items-center gap-1">
                "{searchQuery}"
                <button
                  onClick={() => onSearchChange('')}
                  className="hover:text-yellow-900"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;
