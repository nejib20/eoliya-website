'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar, Building2, TrendingDown, Sparkles } from 'lucide-react';

export interface ProjectCardData {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  year: string;
  location: string;
  surface?: string;
  achievement?: string;
  tags: string[];
}

interface ProjectCardPremiumProps {
  project: ProjectCardData;
  variant?: 'default' | 'large' | 'wide';
  onClick?: () => void;
}

export const ProjectCardPremium: React.FC<ProjectCardPremiumProps> = ({
  project,
  variant = 'default',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const heightClasses = {
    default: 'h-[480px]',
    large: 'h-[600px]',
    wide: 'h-[400px]'
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-2xl bg-white shadow-lg
        hover:shadow-2xl transition-all duration-500 cursor-pointer
        ${heightClasses[variant]}
      `}
    >
      {/* Image Container */}
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-accent-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
          {/* Category Badge */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-2 bg-white/95 backdrop-blur-sm text-secondary-500 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg"
          >
            {project.category}
          </motion.div>

          {/* Achievement Badge */}
          {project.achievement && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="px-3 py-2 bg-accent-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5"
            >
              <TrendingDown className="w-3.5 h-3.5" />
              <span>{project.achievement}</span>
            </motion.div>
          )}
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
          {/* Client Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0.8, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 mb-3"
          >
            <div className="h-1 w-12 bg-accent-500 rounded-full" />
            <span className="text-white/90 font-semibold uppercase tracking-wider text-sm">
              {project.client}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            animate={{
              y: isHovered ? -4 : 0
            }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight"
          >
            {project.title}
          </motion.h3>

          {/* Description - Shows on hover */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 4).map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 * idx }}
                  className="px-3 py-1 text-xs font-medium bg-white/15 backdrop-blur-sm text-white rounded-full border border-white/20"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Bottom Info Bar */}
          <motion.div
            animate={{
              y: isHovered ? -4 : 0
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between pt-4 border-t border-white/20"
          >
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-white/80 text-xs">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{project.year}</span>
              </div>
              {project.surface && (
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  <span className="font-medium">{project.surface}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span className="font-medium hidden sm:inline">{project.location.split(',')[0]}</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white text-secondary-500 text-sm font-semibold rounded-lg hover:bg-accent-500 hover:text-white transition-colors duration-300 shadow-lg"
            >
              <span className="hidden sm:inline">Voir plus</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* Accent Line Animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 origin-left"
        />

        {/* Sparkle Effect on Hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <Sparkles className="w-24 h-24 text-white/20" />
          </motion.div>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCardPremium;
