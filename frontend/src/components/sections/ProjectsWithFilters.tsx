import React from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectFilters } from '../ui/ProjectFilters';
import { useProjects } from '@/hooks/useProjects';

export const ProjectsWithFilters: React.FC = () => {
  const {
    projects,
    filters,
    updateFilter,
    resetFilters,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    availableCategories,
    availableYears,
    stats
  } = useProjects();

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            Nos Réalisations
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Tous nos Projets
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Explorez l'intégralité de nos réalisations en électricité et éclairage.
            Utilisez les filtres pour trouver des projets similaires à vos besoins.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-yellow-500">{stats.total}</div>
            <div className="text-xs text-slate-600 font-medium mt-1">Projets trouvés</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-yellow-500">{stats.categories}</div>
            <div className="text-xs text-slate-600 font-medium mt-1">Catégories</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-yellow-500">{stats.clients}</div>
            <div className="text-xs text-slate-600 font-medium mt-1">Clients</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-yellow-500">
              {stats.totalSurface.toLocaleString()}
            </div>
            <div className="text-xs text-slate-600 font-medium mt-1">m² traités</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-yellow-500">-{stats.avgEnergySavings}%</div>
            <div className="text-xs text-slate-600 font-medium mt-1">Économie moyenne</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar with filters */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <ProjectFilters
                  filters={filters}
                  onFilterChange={updateFilter}
                  onResetFilters={resetFilters}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  availableCategories={availableCategories}
                  availableYears={availableYears}
                />
              </div>
            </aside>

            {/* Projects grid */}
            <div className="lg:col-span-3">
              {projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <svg
                    className="w-24 h-24 mx-auto text-slate-300 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">
                    Aucun projet trouvé
                  </h3>
                  <p className="text-slate-500 mb-6">
                    Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {projects.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Discuter de votre projet
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border-2 border-slate-200 hover:border-yellow-400 hover:bg-slate-50 transition-all duration-300"
              >
                Voir nos services
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsWithFilters;
