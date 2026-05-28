'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Logo } from '@/components/ui';

interface HeroPremiumProps {
  title?: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export const HeroPremium: React.FC<HeroPremiumProps> = ({
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-white">
      {/* Image de fond style plaquette - rendu architectural */}
      <div className="absolute inset-0">
        {/* SVG Background - Transition wireframe vers rendu */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient pour la transition wireframe -> rendu */}
            <linearGradient id="hero-fade" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#ffffff" />
              <stop offset="65%" stopColor="#f5f0eb" />
              <stop offset="100%" stopColor="#d4a574" />
            </linearGradient>

            {/* Pattern lignes architecturales */}
            <pattern id="arch-lines" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a365d" strokeWidth="0.3" opacity="0.15" />
            </pattern>
          </defs>

          {/* Fond dégradé */}
          <rect width="100%" height="100%" fill="url(#hero-fade)" />

          {/* Grille architecturale (côté gauche - wireframe) */}
          <g opacity="0.6">
            {/* Lignes verticales de structure */}
            <line x1="100" y1="200" x2="100" y2="900" stroke="#1a365d" strokeWidth="1.5" />
            <line x1="200" y1="150" x2="200" y2="950" stroke="#1a365d" strokeWidth="1" />
            <line x1="300" y1="100" x2="300" y2="1000" stroke="#1a365d" strokeWidth="1.5" />
            <line x1="400" y1="80" x2="400" y2="1000" stroke="#1a365d" strokeWidth="1" />
            <line x1="500" y1="60" x2="500" y2="1000" stroke="#1a365d" strokeWidth="1.5" />
            <line x1="600" y1="50" x2="600" y2="1000" stroke="#1a365d" strokeWidth="1" />
            <line x1="700" y1="40" x2="700" y2="1000" stroke="#1a365d" strokeWidth="0.8" />
            <line x1="800" y1="30" x2="800" y2="1000" stroke="#1a365d" strokeWidth="0.5" />

            {/* Lignes horizontales */}
            <line x1="50" y1="200" x2="900" y2="200" stroke="#1a365d" strokeWidth="1" />
            <line x1="50" y1="300" x2="850" y2="300" stroke="#1a365d" strokeWidth="0.8" />
            <line x1="50" y1="400" x2="800" y2="400" stroke="#1a365d" strokeWidth="1" />
            <line x1="50" y1="500" x2="750" y2="500" stroke="#1a365d" strokeWidth="0.8" />
            <line x1="50" y1="600" x2="700" y2="600" stroke="#1a365d" strokeWidth="1" />
            <line x1="50" y1="700" x2="650" y2="700" stroke="#1a365d" strokeWidth="0.8" />
            <line x1="50" y1="800" x2="600" y2="800" stroke="#1a365d" strokeWidth="0.5" />

            {/* Lignes diagonales de perspective */}
            <line x1="100" y1="900" x2="500" y2="200" stroke="#1a365d" strokeWidth="0.5" />
            <line x1="200" y1="950" x2="600" y2="150" stroke="#1a365d" strokeWidth="0.5" />
            <line x1="300" y1="1000" x2="700" y2="100" stroke="#1a365d" strokeWidth="0.5" />

            {/* Rectangles - fenêtres/éléments architecturaux */}
            <rect x="150" y="250" width="60" height="100" fill="none" stroke="#1a365d" strokeWidth="0.8" />
            <rect x="250" y="220" width="80" height="130" fill="none" stroke="#1a365d" strokeWidth="0.8" />
            <rect x="370" y="180" width="70" height="150" fill="none" stroke="#1a365d" strokeWidth="0.8" />
            <rect x="480" y="140" width="90" height="180" fill="none" stroke="#1a365d" strokeWidth="0.8" />

            <rect x="150" y="400" width="60" height="100" fill="none" stroke="#1a365d" strokeWidth="0.8" />
            <rect x="250" y="380" width="80" height="120" fill="none" stroke="#1a365d" strokeWidth="0.8" />
            <rect x="370" y="360" width="70" height="140" fill="none" stroke="#1a365d" strokeWidth="0.8" />

            <rect x="150" y="550" width="60" height="100" fill="none" stroke="#1a365d" strokeWidth="0.8" />
            <rect x="250" y="530" width="80" height="120" fill="none" stroke="#1a365d" strokeWidth="0.8" />

            {/* Cercles - spots luminaires */}
            <circle cx="180" cy="180" r="15" fill="none" stroke="#1a365d" strokeWidth="0.5" />
            <circle cx="290" cy="160" r="18" fill="none" stroke="#1a365d" strokeWidth="0.5" />
            <circle cx="405" cy="130" r="20" fill="none" stroke="#1a365d" strokeWidth="0.5" />
            <circle cx="525" cy="100" r="22" fill="none" stroke="#1a365d" strokeWidth="0.5" />
          </g>

          {/* Côté droit - Éléments de rendu (bois, lumière) */}
          <g>
            {/* Panneau bois vertical - texture */}
            <defs>
              <linearGradient id="wood-grain" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#c9956c" />
                <stop offset="20%" stopColor="#b8845b" />
                <stop offset="40%" stopColor="#c9956c" />
                <stop offset="60%" stopColor="#a7734a" />
                <stop offset="80%" stopColor="#c9956c" />
                <stop offset="100%" stopColor="#b8845b" />
              </linearGradient>
              <linearGradient id="light-glow" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#fff9e6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fff9e6" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Panneaux de bois */}
            <rect x="1400" y="0" width="120" height="1080" fill="url(#wood-grain)" opacity="0.9" />
            <rect x="1530" y="0" width="100" height="1080" fill="url(#wood-grain)" opacity="0.85" />
            <rect x="1640" y="0" width="140" height="1080" fill="url(#wood-grain)" opacity="0.9" />
            <rect x="1790" y="0" width="130" height="1080" fill="url(#wood-grain)" opacity="0.85" />

            {/* Lignes horizontales sur bois */}
            {[...Array(25)].map((_, i) => (
              <line
                key={i}
                x1="1400"
                y1={i * 45 + 10}
                x2="1920"
                y2={i * 45 + 10}
                stroke="#8b6914"
                strokeWidth="0.3"
                opacity="0.4"
              />
            ))}

            {/* Effet de lumière */}
            <ellipse cx="1700" cy="300" rx="200" ry="150" fill="url(#light-glow)" />
            <ellipse cx="1600" cy="600" rx="150" ry="100" fill="url(#light-glow)" opacity="0.6" />
          </g>

          {/* Zone de transition (dégradé central) */}
          <rect x="800" y="0" width="600" height="1080" fill="url(#hero-fade)" opacity="0.7" />
        </svg>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full">
        <div className="container-custom pb-16 pt-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Logo et tagline - positionnés en bas à droite comme sur la plaquette */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:order-2 lg:text-right"
            >
              <Logo className="h-16 lg:h-20 w-auto ml-auto" color="dark" />
              <p className="mt-4 text-lg font-medium text-primary-500 tracking-wide">
                AU SERVICE DE VOS PROJETS
              </p>
            </motion.div>

            {/* CTAs et info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:order-1 max-w-lg"
            >
              <h1 className="text-2xl md:text-3xl font-semibold text-secondary-500 mb-4 leading-tight">
                Bureau d'études en ingénierie du bâtiment
              </h1>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Conseil et pilotage TCE, multi-services et relamping LED,
                luminaires techniques sur mesure.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white font-medium text-sm rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    {primaryCta.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}

                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary-500 text-primary-500 font-medium text-sm rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    {secondaryCta.label}
                  </a>
                )}
              </div>

              {/* Contact rapide */}
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
                <Phone className="w-4 h-4" />
                <a href="tel:0134223012" className="hover:text-primary-500 transition-colors">
                  01 34 22 30 12
                </a>
                <span className="text-gray-300">|</span>
                <a href="mailto:contact@eoliya.com" className="hover:text-primary-500 transition-colors">
                  contact@eoliya.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPremium;
