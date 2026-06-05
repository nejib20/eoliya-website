import React from 'react';
import { ProjectCard, Project } from '../ui/ProjectCard';

const projects: Project[] = [
  {
    id: 'veepee',
    title: 'Relamping LED Bureaux',
    client: 'Veepee',
    category: 'Bureaux',
    description: 'Modernisation complète de l\'éclairage du siège social avec installation de LED haute performance pour optimiser le confort visuel et réduire la consommation énergétique de 60%.',
    image: '/images/projects/veepee-office.svg',
    year: '2024',
    location: 'Saint-Denis, France',
    scope: ['LED', 'Économie d\'énergie', 'Confort visuel']
  },
  {
    id: 'casino-barriere',
    title: 'Installation Éclairage Technique',
    client: 'Casino Barrière',
    category: 'Loisirs',
    description: 'Conception et installation d\'un système d\'éclairage technique sophistiqué avec spots directionnels et éclairage d\'ambiance pour créer une atmosphère unique.',
    image: '/images/projects/casino-barriere.svg',
    year: '2024',
    location: 'Enghien-les-Bains, France',
    scope: ['Éclairage technique', 'Ambiance', 'Spotlights']
  },
  {
    id: 'conseil-etat',
    title: 'Mise aux Normes Électriques',
    client: 'Conseil d\'État',
    category: 'Institution',
    description: 'Mise en conformité totale des installations électriques d\'un bâtiment historique en respectant les normes NF C 15-100 tout en préservant l\'architecture d\'origine.',
    image: '/images/projects/conseil-etat.svg',
    year: '2023',
    location: 'Paris, France',
    scope: ['Normes NF C 15-100', 'Patrimoine', 'Sécurité']
  },
  {
    id: 'leclerc',
    title: 'Optimisation Énergétique Éclairage',
    client: 'E.Leclerc',
    category: 'Commerce',
    description: 'Déploiement d\'une solution d\'éclairage intelligente avec détecteurs de présence et gradation automatique, permettant une réduction de 55% de la consommation électrique.',
    image: '/images/projects/leclerc-store.svg',
    year: '2024',
    location: 'Île-de-France, France',
    scope: ['Smart lighting', 'Détection', 'Économie d\'énergie']
  },
  {
    id: 'azureva',
    title: 'Rénovation Éclairage Chambres',
    client: 'Azureva',
    category: 'Hôtellerie',
    description: 'Rénovation complète de l\'éclairage de 120 chambres d\'hôtel avec création d\'ambiances multiples et système de contrôle individuel pour un confort optimal des clients.',
    image: '/images/projects/azureva-hotel.svg',
    year: '2023',
    location: 'Littoral français, France',
    scope: ['Ambiance', 'Confort', 'Variateurs']
  },
  {
    id: 'dentsu',
    title: 'Conception Lumière Sur Mesure',
    client: 'Dentsu',
    category: 'Bureaux',
    description: 'Création d\'un concept d\'éclairage architectural innovant avec zones lumineuses personnalisées, intégrant l\'identité visuelle de l\'entreprise et favorisant la créativité.',
    image: '/images/projects/dentsu-office.svg',
    year: '2024',
    location: 'Paris, France',
    scope: ['Design', 'Sur mesure', 'Zones lumineuses']
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Nos Réalisations
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Projets de Référence
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Découvrez nos projets d'éclairage et d'électricité réalisés pour des clients prestigieux
            dans tous les secteurs : bureaux, commerce, hôtellerie, institutions et loisirs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
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

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">250+</div>
            <div className="text-sm text-slate-600 font-medium">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">98%</div>
            <div className="text-sm text-slate-600 font-medium">Satisfaction client</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">60%</div>
            <div className="text-sm text-slate-600 font-medium">Économies moyennes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">15+</div>
            <div className="text-sm text-slate-600 font-medium">Ans d'expérience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
