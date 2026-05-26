import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Nos Projets et Réalisations | EOLIYA Ingénierie',
  description: 'Découvrez nos projets et réalisations en ingénierie du bâtiment : TCE, relamping LED, luminaires sur mesure pour grands comptes et institutions.',
};

// Données de démonstration
const projects = [
  {
    title: 'Mise aux normes PMR - Conseil d\'État',
    category: 'TCE & Conseil',
    description: 'Pilotage complet de la mise en conformité accessibilité d\'un bâtiment historique classé.',
    image: '/images/projects/placeholder.jpg',
  },
  {
    title: 'Relamping LED - E.Leclerc',
    category: 'Relamping LED',
    description: 'Remplacement de 2500 luminaires pour 75% d\'économies d\'énergie sur 5 sites.',
    image: '/images/projects/placeholder.jpg',
  },
  {
    title: 'Luminaires ATEX - TTI Fayat',
    category: 'Luminaires sur mesure',
    description: 'Conception et fabrication de luminaires conformes aux normes ATEX pour environnement industriel.',
    image: '/images/projects/placeholder.jpg',
  },
  {
    title: 'Rénovation électrique - Groupe Barrière',
    category: 'TCE & Conseil',
    description: 'Maîtrise d\'œuvre de rénovation des installations électriques et CVC sur 3 établissements.',
    image: '/images/projects/placeholder.jpg',
  },
  {
    title: 'Éclairage de sécurité - Institut de France',
    category: 'Multi-services',
    description: 'Mise aux normes complète de l\'éclairage de sécurité (BAES, LSC) et signalétique.',
    image: '/images/projects/placeholder.jpg',
  },
  {
    title: 'Optimisation énergétique - Veepee',
    category: 'Relamping LED',
    description: 'Audit énergétique et transition LED complète des bureaux (4000 m²).',
    image: '/images/projects/placeholder.jpg',
  },
];

const categories = [
  'Tous',
  'TCE & Conseil',
  'Relamping LED',
  'Luminaires sur mesure',
  'Multi-services',
];

export default function ProjetsPage() {
  return (
    <>
      <Hero
        title="Nos projets et réalisations"
        subtitle="Découvrez une sélection de nos projets menés à bien pour des clients de référence. Plus de 150 réalisations dans les secteurs tertiaire, industriel et public."
        primaryCta={{
          label: 'Parlons de votre projet',
          href: '/contact',
        }}
      />

      {/* Filters */}
      <section className="section bg-white pt-12">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} variant="project">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Image projet</span>
                </div>
                <div className="text-sm font-semibold text-primary-500 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-gray-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">150+</div>
              <div className="text-sm text-gray-600">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">30+</div>
              <div className="text-sm text-gray-600">Clients grands comptes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">95%</div>
              <div className="text-sm text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">15+</div>
              <div className="text-sm text-gray-600">Ans d'expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-6">
            Votre projet mérite la même attention
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Quelle que soit la complexité de votre projet, nos équipes d'ingénieurs sont prêtes
            à vous accompagner de la conception à la réalisation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
          >
            Démarrer un projet
          </a>
        </div>
      </section>
    </>
  );
}
