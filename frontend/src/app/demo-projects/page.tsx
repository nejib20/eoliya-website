/**
 * Page de démonstration pour les composants Projects Premium
 * Utilisé pour tester et visualiser les différents variants
 */

'use client';

import React, { useState } from 'react';
import { ProjectCardPremium } from '@/components/ui/ProjectCardPremium';
import { ProjectModal } from '@/components/ui/ProjectModal';

interface ProjectItem {
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

const demoProjects: ProjectItem[] = [
  {
    id: 'demo-1',
    title: 'Siège Social Tech Company',
    client: 'Tech Startup',
    category: 'Tertiaire',
    description: 'Conception et installation d\'un système d\'éclairage intelligent pour 5000m² de bureaux modernes avec zones collaboratives, espaces de concentration et salles de réunion high-tech.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000',
    year: '2024',
    location: 'Paris La Défense, France',
    surface: '5 000 m²',
    achievement: '-65% consommation',
    tags: ['Smart Lighting', 'IoT', 'LED', 'Détection de présence', 'Variateurs']
  },
  {
    id: 'demo-2',
    title: 'Hôtel Boutique 5 étoiles',
    client: 'Luxury Hotels Group',
    category: 'Hôtellerie',
    description: 'Création d\'ambiances lumineuses sur mesure pour 80 chambres et suites, incluant système de contrôle centralisé et scénarios d\'éclairage personnalisables pour chaque client.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000',
    year: '2024',
    location: 'Cannes, France',
    surface: '80 chambres',
    achievement: 'Luxe premium',
    tags: ['Ambiance', 'Contrôle centralisé', 'Variateurs', 'Design']
  },
  {
    id: 'demo-3',
    title: 'Centre Commercial Moderne',
    client: 'Retail Group',
    category: 'Commerce',
    description: 'Installation d\'éclairage retail optimisé pour mettre en valeur les produits, avec système adaptatif selon la lumière naturelle et détection de présence dans les zones communes.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000',
    year: '2023',
    location: 'Lyon, France',
    surface: '12 000 m²',
    achievement: '-50% énergie',
    tags: ['Retail', 'Éclairage adaptatif', 'Détection', 'Mise en valeur produits']
  }
];

export default function DemoProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Démonstration
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-500 mb-4">
            Composants Projects Premium
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visualisation des différents variants de cartes projet et du système de modal
          </p>
        </div>

        {/* Default Variant */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-secondary-500 mb-6">
            Variant Default (480px hauteur)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoProjects.map((project) => (
              <ProjectCardPremium
                key={project.id}
                project={project}
                variant="default"
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </section>

        {/* Large Variant */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-secondary-500 mb-6">
            Variant Large (600px hauteur)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {demoProjects.slice(0, 2).map((project) => (
              <ProjectCardPremium
                key={`large-${project.id}`}
                project={project}
                variant="large"
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </section>

        {/* Wide Variant */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-secondary-500 mb-6">
            Variant Wide (400px hauteur, pleine largeur)
          </h2>
          <div className="space-y-6">
            {demoProjects.slice(0, 1).map((project) => (
              <ProjectCardPremium
                key={`wide-${project.id}`}
                project={project}
                variant="wide"
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </section>

        {/* Instructions */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-secondary-500 mb-4">
            Instructions d'utilisation
          </h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-secondary-500 mb-2">
                Hover Effects
              </h3>
              <p>
                Passez la souris sur les cartes pour voir les effets :
                zoom image, révélation description, animation des badges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-500 mb-2">
                Modal
              </h3>
              <p>
                Cliquez sur une carte ou sur le bouton "Voir plus" pour ouvrir
                le modal détaillé avec toutes les informations du projet.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-500 mb-2">
                Responsive
              </h3>
              <p>
                Redimensionnez votre fenêtre pour voir l'adaptation mobile/tablet/desktop.
                Sur mobile, les informations sont visibles par défaut.
              </p>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="bg-secondary-500 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Exemple de code
          </h2>
          <pre className="bg-black/30 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`import { ProjectCardPremium } from '@/components/ui/ProjectCardPremium';

const project = {
  id: 'project-1',
  title: 'Titre du projet',
  client: 'Nom du client',
  category: 'Tertiaire',
  description: 'Description...',
  image: 'https://...',
  year: '2024',
  location: 'Paris, France',
  surface: '1000 m²',
  achievement: '-60%',
  tags: ['Tag1', 'Tag2']
};

<ProjectCardPremium
  project={project}
  variant="default"
  onClick={() => handleClick(project)}
/>`}</code>
          </pre>
        </section>
      </div>
    </main>
  );
}
