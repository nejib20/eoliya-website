import React from 'react';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  year: string;
  location?: string;
  scope?: string[];
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full">
          {project.category}
        </div>

        {/* Year badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Client name */}
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {project.client}
          </span>
        </div>

        {/* Project title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Location if available */}
        {project.location && (
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{project.location}</span>
          </div>
        )}

        {/* Scope tags */}
        {project.scope && project.scope.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.scope.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full hover:bg-yellow-100 hover:text-yellow-800 transition-colors duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default ProjectCard;
