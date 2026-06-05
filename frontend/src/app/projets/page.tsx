/**
 * Page dédiée aux projets EOLIYA Ingénierie
 * Cette page affiche tous les projets avec des filtres interactifs
 */

import React from 'react';
import { ProjectsGallery } from '@/components/sections/ProjectsGallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Projets | EOLIYA Ingénierie',
  description:
    'Découvrez nos réalisations pour des institutions et grands comptes : Conseil d\'État, Institut de France, VINCI Energies, Veepee, Barrière… Plus de 150 projets menés de l\'étude à la livraison.',
  keywords: [
    'projets électricité',
    'réalisations éclairage',
    'références EOLIYA',
    'études de cas',
    'portfolio électricité',
    'relamping LED',
    'optimisation énergétique',
    'mise aux normes électriques'
  ]
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <ProjectsGallery />
    </main>
  );
}
