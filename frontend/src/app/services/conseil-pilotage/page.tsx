import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Conseil et Pilotage TCE - Maîtrise d\'œuvre d\'exécution | EOLIYA',
  description: 'Service de conseil TCE et pilotage de projets de construction, rénovation et aménagement. Coordination des corps d\'état, mise aux normes PMR et sécurité incendie.',
};

export default function ConseilPilotagePage() {
  return (
    <>
      <Hero
        title="Conseil et Pilotage TCE"
        subtitle="Maîtrise d'œuvre d'exécution pour vos projets de construction, rénovation et aménagement. Coordination complète des intervenants et suivi budgétaire."
        primaryCta={{
          label: 'Demander un devis',
          href: '/contact',
        }}
      />

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-500 mb-6">
            TCE et maîtrise d'œuvre d'exécution
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Vous pilotez un projet de construction, rénovation ou aménagement ? Nos ingénieurs
              assurent la mission de technicien conseil en environnement (TCE) et coordonnent
              l'ensemble des intervenants : architectes, bureaux d'études, entreprises de travaux.
            </p>
            <p>
              EOLIYA Ingénierie vous accompagne de la phase de conception jusqu'à la réception des
              travaux, en garantissant le respect des délais, du budget et des normes en vigueur.
            </p>
          </div>
        </div>
      </section>

      {/* Points clés */}
      <section className="section section-alt">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-500 mb-12 text-center">
            Nos prestations
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary-500 mb-2">
                    Analyse de faisabilité et diagnostic technique
                  </h3>
                  <p className="text-gray-600">
                    État des lieux complet, identification des contraintes réglementaires et
                    opportunités d'optimisation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary-500 mb-2">
                    Élaboration des cahiers des charges
                  </h3>
                  <p className="text-gray-600">
                    Rédaction des CCTP (Cahier des Clauses Techniques Particulières) et documents
                    de consultation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary-500 mb-2">
                    Supervision des travaux et réception
                  </h3>
                  <p className="text-gray-600">
                    Suivi de chantier, réunions de coordination, levée des réserves et constitution
                    du DOE.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary-500 mb-2">
                    Accompagnement réglementaire
                  </h3>
                  <p className="text-gray-600">
                    Accessibilité PMR, sécurité incendie, normes électriques NFC 15-100, dossiers
                    d'autorisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-500 mb-12 text-center">
            Notre méthodologie
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-500">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                  Phase d'audit et diagnostic
                </h3>
                <p className="text-gray-600">
                  Visite de site, relevés techniques, analyse des contraintes et opportunités.
                  Remise d'un rapport de diagnostic avec préconisations et estimation budgétaire.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-500">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                  Conception et consultation
                </h3>
                <p className="text-gray-600">
                  Élaboration des dossiers techniques, rédaction des CCTP, lancement de la
                  consultation des entreprises et analyse des offres.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-500">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                  Pilotage de chantier
                </h3>
                <p className="text-gray-600">
                  Réunions de coordination hebdomadaires, suivi du planning et du budget, validation
                  des situations de travaux, gestion des aléas.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-500">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                  Réception et livraison
                </h3>
                <p className="text-gray-600">
                  Organisation des opérations de réception, levée des réserves, constitution du
                  dossier des ouvrages exécutés (DOE) et accompagnement post-livraison.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-secondary-500 mb-6">
            Un projet de construction ou rénovation ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Confiez le pilotage de votre projet à nos ingénieurs expérimentés. Devis gratuit sous 48h.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
          >
            Demander un devis
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
