import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { Ruler, Shield, Cog, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luminaires sur mesure - Conception et fabrication | EOLIYA',
  description: 'Conception et fabrication de luminaires techniques sur mesure. Calculs photométriques, conformité normes NFC 71-121, EN 12464, solutions ATEX.',
};

export default function LuminairesSurMesurePage() {
  return (
    <>
      <Hero
        title="Luminaires sur mesure"
        subtitle="Conception et fabrication de solutions d'éclairage techniques adaptées à vos contraintes architecturales et normatives spécifiques."
        primaryCta={{
          label: 'Demander une étude',
          href: '/contact',
        }}
      />

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-500 mb-6">
            Conception et fabrication de solutions d'éclairage techniques
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Notre bureau d'études conçoit des luminaires techniques adaptés à vos contraintes
            architecturales et normatives. Nous réalisons calculs photométriques, prototypes et
            fabrication en petite ou moyenne série.
          </p>
          <p className="text-lg text-gray-600">
            Que vous ayez des contraintes dimensionnelles, des environnements spécifiques (ATEX,
            salles blanches) ou des exigences esthétiques particulières, nos ingénieurs trouvent
            la solution.
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section className="section section-alt">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary-500 mb-12 text-center">
            Notre expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Étude d'implantation
              </h3>
              <p className="text-gray-600">
                Calculs d'éclairement conformes aux normes EN 12464 et NFC 71-121
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Conformité normes
              </h3>
              <p className="text-gray-600">
                Respect des normes NFC 71-121, EN 12464, BAEL et réglementation ATEX
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Fabrication française
              </h3>
              <p className="text-gray-600">
                Production en France avec nos partenaires industriels certifiés
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Solutions ATEX
              </h3>
              <p className="text-gray-600">
                Luminaires antidéflagrants pour atmosphères explosives et milieux spécifiques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-500 mb-12 text-center">
            Notre processus de conception
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-500">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                  Analyse du besoin
                </h3>
                <p className="text-gray-600">
                  Étude de votre cahier des charges : contraintes dimensionnelles, environnementales,
                  normatives et esthétiques. Visite de site si nécessaire.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-500">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                  Études photométriques
                </h3>
                <p className="text-gray-600">
                  Calculs d'éclairement (lux), d'uniformité, de rendu des couleurs (IRC), choix
                  des sources LED et optiques adaptées.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-500">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                  Conception et prototypage
                </h3>
                <p className="text-gray-600">
                  Design du luminaire, plans de fabrication, validation avec le client, réalisation
                  d'un prototype pour tests et validation.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-500">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                  Fabrication et livraison
                </h3>
                <p className="text-gray-600">
                  Production en petite ou moyenne série, contrôle qualité, livraison et installation
                  si besoin. Garantie et SAV assurés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section section-alt">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-500 mb-12 text-center">
            Domaines d'application
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Environnements industriels
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Luminaires ATEX zones 1, 2, 21, 22</li>
                <li>• Éclairage de process et postes de travail</li>
                <li>• Solutions haute température</li>
                <li>• Résistance aux projections et poussières (IP65+)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Bâtiments patrimoniaux
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Intégration discrète en monuments historiques</li>
                <li>• Respect des contraintes architecturales</li>
                <li>• Éclairage muséographique</li>
                <li>• Solutions invisibles ou camouflées</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Espaces tertiaires
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Luminaires design sur-mesure</li>
                <li>• Intégration en faux-plafonds atypiques</li>
                <li>• Éclairage de signalétique</li>
                <li>• Solutions acoustiques intégrées</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Milieux spécifiques
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Salles blanches (pharmaceutique, agroalimentaire)</li>
                <li>• Environnements marins ou corrosifs</li>
                <li>• Zones à risques biologiques</li>
                <li>• Tunnels et infrastructures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-secondary-500 mb-6">
            Un projet de luminaire sur mesure ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Confiez votre projet à nos ingénieurs. Nous étudions la faisabilité et vous proposons
            une solution technique et budgétaire adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Demander une étude
            </a>
            <a
              href="tel:0134223012"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-primary-500 font-semibold rounded-lg border-2 border-primary-500 hover:bg-primary-50 transition-colors"
            >
              01 34 22 30 12
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
