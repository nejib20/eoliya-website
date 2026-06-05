import React, { useState } from 'react';
import { Project } from '@/types/projects';

interface ProjectCardExtendedProps {
  project: Project;
  className?: string;
  onViewDetails?: (project: Project) => void;
}

export const ProjectCardExtended: React.FC<ProjectCardExtendedProps> = ({
  project,
  className = '',
  onViewDetails
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(project);
    }
  };

  return (
    <div className={`perspective-1000 ${className}`}>
      <div
        className={`relative w-full h-[500px] transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Face avant */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="group h-full overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full">
                {project.category}
              </div>

              {/* Year badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                {project.year}
              </div>

              {/* Energy savings badge if available */}
              {project.energySavings && (
                <div className="absolute bottom-4 right-4 px-3 py-2 bg-green-500 text-white text-sm font-bold rounded-lg shadow-lg">
                  -{project.energySavings}% énergie
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {project.client}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Stats mini */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {project.duration && (
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{project.duration} mois</span>
                  </div>
                )}
                {project.surface && (
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    <span>{project.surface.toLocaleString()} m²</span>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handleFlip}
                  className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition-colors duration-300"
                >
                  Plus d'infos
                </button>
                {onViewDetails && (
                  <button
                    onClick={handleViewDetails}
                    className="px-4 py-2 bg-yellow-400 text-slate-900 text-sm font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Face arrière */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="h-full overflow-auto rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <button
                onClick={handleFlip}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {/* Location */}
              {project.location && (
                <div>
                  <h4 className="text-sm font-semibold text-yellow-400 mb-1">Localisation</h4>
                  <p className="text-sm text-slate-300">{project.location}</p>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {project.certifications && project.certifications.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-semibold rounded-full border border-green-500/30"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                {project.energySavings && (
                  <div>
                    <div className="text-2xl font-bold text-green-400">-{project.energySavings}%</div>
                    <div className="text-xs text-slate-400">Économie d'énergie</div>
                  </div>
                )}
                {project.duration && (
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">{project.duration}</div>
                    <div className="text-xs text-slate-400">Mois de réalisation</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardExtended;
