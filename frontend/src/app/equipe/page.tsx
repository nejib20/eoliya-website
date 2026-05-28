import React from 'react';
import type { Metadata } from 'next';
import { Team, Contact } from '@/components/sections';
import { Users, Award, Briefcase, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Notre Équipe - EOLIYA Ingénierie | Experts en ingénierie du bâtiment',
  description: 'Découvrez l\'équipe d\'experts d\'EOLIYA Ingénierie. Ingénieurs, chefs de projets et spécialistes au service de vos projets d\'ingénierie du bâtiment à Paris.',
};

const stats = [
  {
    icon: Users,
    value: '10+',
    label: 'Collaborateurs',
  },
  {
    icon: Award,
    value: '150+',
    label: 'Projets réalisés',
  },
  {
    icon: Briefcase,
    value: '15+',
    label: 'Années d\'expérience',
  },
  {
    icon: GraduationCap,
    value: '100%',
    label: 'Ingénieurs diplômés',
  },
];

export default function EquipePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-secondary-500 to-secondary-700 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="team-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#team-grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Notre équipe
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Des experts passionnés à votre service
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Derrière chaque projet EOLIYA, une équipe pluridisciplinaire d'ingénieurs et de
              spécialistes engagés pour transformer vos défis en succès.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="currentColor"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="currentColor"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Notre philosophie */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-6">
              Notre philosophie d'équipe
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Chez EOLIYA, nous croyons que l'excellence naît de la complémentarité des talents.
              Notre équipe réunit des profils variés — ingénieurs en électricité, spécialistes de
              l'éclairage, chefs de projets expérimentés — qui partagent une même passion pour
              l'ingénierie de qualité et le service client.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary-500 mb-2">Innovation continue</h3>
                <p className="text-gray-600 text-sm">
                  Formation régulière aux nouvelles technologies et réglementations du secteur.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary-500 mb-2">Travail collaboratif</h3>
                <p className="text-gray-600 text-sm">
                  Chaque projet bénéficie de l'expertise croisée de nos différents pôles.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary-500 mb-2">Engagement qualité</h3>
                <p className="text-gray-600 text-sm">
                  Rigueur et précision dans chaque étude, chaque plan, chaque livrable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <Team
        title="Rencontrez notre équipe"
        subtitle="Les femmes et les hommes qui font la réussite de vos projets"
        variant="full"
      />

      {/* Rejoignez-nous */}
      <section className="section section-alt">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Vous souhaitez rejoindre l'aventure EOLIYA ?
              </h2>
              <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                Nous sommes toujours à la recherche de talents passionnés par l'ingénierie du bâtiment.
                Envoyez-nous votre candidature !
              </p>
              <a
                href="mailto:recrutement@eoliya.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Envoyer ma candidature
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
    </>
  );
}
