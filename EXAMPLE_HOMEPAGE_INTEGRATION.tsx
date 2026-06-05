/**
 * EXEMPLE D'INTÉGRATION DANS LA PAGE D'ACCUEIL
 *
 * Ce fichier montre comment intégrer la section Projects
 * dans votre page d'accueil (src/app/page.tsx)
 *
 * IMPORTANT: Ce fichier est un exemple, pas un fichier à utiliser directement
 */

import React from 'react';
import {
  HeroImmersive,
  Services,
  Projects,        // <- Section Projects simple
  Clients,
  Testimonials,
  Contact,
  Team
} from '@/components/sections';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero section avec animation immersive */}
      <HeroImmersive />

      {/* Section Services */}
      <Services />

      {/* SECTION PROJETS - AJOUTÉE ICI */}
      <Projects />

      {/* Section Clients */}
      <Clients />

      {/* Section Témoignages */}
      <Testimonials />

      {/* Section Équipe (optionnel) */}
      <Team />

      {/* Section Contact */}
      <Contact />
    </main>
  );
}

/**
 * ALTERNATIVE: Si vous voulez une version plus minimaliste
 * avec seulement 3 projets mis en avant
 */

import { getRecentProjects } from '@/data/projects.data';
import { ProjectCard } from '@/components/ui';

export function HomePageAlternative() {
  const featuredProjects = getRecentProjects(3);

  return (
    <main className="min-h-screen">
      <HeroImmersive />
      <Services />

      {/* Section Projets minimaliste */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Projets récents
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Découvrez quelques-unes de nos réalisations les plus récentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/projets"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Voir tous nos projets
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Clients />
      <Testimonials />
      <Contact />
    </main>
  );
}

/**
 * ALTERNATIVE 2: Avec hook personnalisé pour filtrer les projets
 */

import { useProjects } from '@/hooks/useProjects';

export function HomePageWithFeatured() {
  return (
    <main className="min-h-screen">
      <HeroImmersive />
      <Services />
      <FeaturedProjectsSection />
      <Clients />
      <Testimonials />
      <Contact />
    </main>
  );
}

function FeaturedProjectsSection() {
  const { getFeaturedProjects } = useProjects();
  const featured = getFeaturedProjects();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Projets mis en avant
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Nos meilleures réalisations
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Projets avec plus de 50% d'économies d'énergie et excellence technique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/projets"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Découvrir tous nos projets
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Mini stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-16 border-t border-slate-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">250+</div>
            <div className="text-sm text-slate-600 mt-1">Projets</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">98%</div>
            <div className="text-sm text-slate-600 mt-1">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">60%</div>
            <div className="text-sm text-slate-600 mt-1">Économies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">15+</div>
            <div className="text-sm text-slate-600 mt-1">Ans</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * GUIDE D'IMPLÉMENTATION:
 *
 * 1. Choisissez l'approche qui vous convient:
 *    - HomePage: Version complète avec tous les projets
 *    - HomePageAlternative: Version minimaliste avec 3 projets
 *    - HomePageWithFeatured: Version avec projets mis en avant
 *
 * 2. Copiez le code approprié dans votre src/app/page.tsx
 *
 * 3. Assurez-vous d'avoir importé les dépendances nécessaires
 *
 * 4. Testez la page sur différentes tailles d'écran
 *
 * 5. Personnalisez les couleurs et le texte selon vos besoins
 */
