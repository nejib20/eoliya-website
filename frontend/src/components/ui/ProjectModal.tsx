'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Building2, TrendingDown, CheckCircle2, ArrowRight } from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Tertiaire' | 'Hôtellerie' | 'Commerce' | 'Institutionnel';
  description: string;
  image: string;
  year: string;
  location: string;
  surface?: string;
  achievement?: string;
  tags: string[];
}

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-sm text-secondary-500 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <div className="h-full overflow-y-auto">
              <div className="grid lg:grid-cols-2 min-h-full">
                {/* Image Section */}
                <div className="relative h-64 lg:h-full lg:sticky lg:top-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />

                  {/* Floating Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-3">
                    <div className="px-4 py-2 bg-white/95 backdrop-blur-sm text-secondary-500 text-sm font-bold uppercase tracking-wider rounded-full shadow-lg">
                      {project.category}
                    </div>
                    {project.achievement && (
                      <div className="px-4 py-2 bg-accent-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                        <TrendingDown className="w-4 h-4" />
                        {project.achievement}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 lg:p-12 space-y-8">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-1 w-12 bg-accent-500 rounded-full" />
                      <span className="text-gray-500 font-semibold uppercase tracking-wider text-sm">
                        {project.client}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
                      {project.title}
                    </h2>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary-500" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary-500" />
                        <span>{project.location}</span>
                      </div>
                      {project.surface && (
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-primary-500" />
                          <span>{project.surface}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary-500 mb-3">
                      À propos du projet
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary-500 mb-3">
                      Technologies & Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded-lg border border-primary-100 hover:bg-primary-100 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary-500 mb-4">
                      Résultats clés
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-primary-500" />
                        </div>
                        <div>
                          <p className="text-gray-600">
                            Installation conforme aux normes les plus strictes avec certification NF C 15-100
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-primary-500" />
                        </div>
                        <div>
                          <p className="text-gray-600">
                            Respect des délais et du budget avec transparence totale tout au long du projet
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-primary-500" />
                        </div>
                        <div>
                          <p className="text-gray-600">
                            Réduction significative des consommations énergétiques et amélioration du confort
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">
                      Un projet similaire ? Discutons de vos besoins et objectifs.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <span>Parlons de votre projet</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
