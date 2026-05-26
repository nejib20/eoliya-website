import React from 'react';
import type { Metadata } from 'next';
import { Hero, Clients } from '@/components/sections';
import { CheckCircle, Target, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À propos d\'EOLIYA Ingénierie - Bureau d\'études spécialisé bâtiment | Paris',
  description: 'Découvrez EOLIYA Ingénierie, bureau d\'études basé à Paris avec 15 ans d\'expertise en TCE, relamping LED et luminaires sur mesure. Plus de 150 projets pour grands comptes.',
};

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="L'ingénierie au service de vos ambitions"
        subtitle="Depuis notre création, EOLIYA Ingénierie s'est imposée comme un partenaire de confiance pour les entreprises et institutions exigeantes. Notre mission : transformer vos contraintes techniques en opportunités de performance."
        primaryCta={{
          label: 'Contactez-nous',
          href: '/contact',
        }}
      />

      {/* Notre histoire */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-6 text-center">
              15 ans d'expertise au service du bâtiment
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Fondée en 2010, EOLIYA Ingénierie est née d'une conviction : chaque projet mérite
                une approche personnalisée qui allie rigueur technique et vision stratégique.
              </p>
              <p>
                Notre bureau d'études, basé à Paris, s'est rapidement spécialisé dans trois domaines
                complémentaires : le conseil en maîtrise d'œuvre, l'optimisation énergétique par le
                relamping LED, et la conception de luminaires techniques sur mesure.
              </p>
              <p>
                Au fil des années, nous avons accompagné plus de 150 projets pour des clients aussi
                variés que des institutions publiques (Conseil d'État, Institut de France), des groupes
                internationaux (Veepee, Dentsu Group, Vinci Energies) et des acteurs majeurs de la
                distribution (E.Leclerc) ou de l'hôtellerie (Barrière, Azureva).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="section section-alt">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-12 text-center">
            Ce qui guide notre action au quotidien
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Expertise technique
              </h3>
              <p className="text-gray-600">
                Nos ingénieurs se forment en continu aux évolutions réglementaires et technologiques.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Réactivité
              </h3>
              <p className="text-gray-600">
                Notre organisation privilégie la rapidité d'intervention sans compromis sur la qualité.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Transparence
              </h3>
              <p className="text-gray-600">
                Communication claire sur les coûts, délais et moyens. Pas de mauvaise surprise.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Proximité
              </h3>
              <p className="text-gray-600">
                Chaque client dispose d'un interlocuteur dédié qui centralise les demandes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-12 text-center">
              Une méthode éprouvée pour des résultats mesurables
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                    Analyse et diagnostic
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Nous commençons chaque mission par un état des lieux précis de vos installations
                    et de vos besoins. Nos ingénieurs identifient les enjeux réglementaires et les
                    opportunités d'optimisation.
                  </p>
                  <p className="text-sm text-gray-500">
                    Livrables : Rapport de diagnostic, préconisations techniques, estimation budgétaire.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                    Conception et études
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Notre bureau d'études élabore les solutions techniques adaptées à vos contraintes.
                    Calculs photométriques, dimensionnement électrique ou coordination TCE.
                  </p>
                  <p className="text-sm text-gray-500">
                    Livrables : Plans d'exécution, cahiers des charges, notes de calcul, dossiers réglementaires.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                    Pilotage et réalisation
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Nous assurons la coordination des entreprises, le suivi budgétaire et le respect
                    du planning. Notre présence terrain garantit la conformité des travaux.
                  </p>
                  <p className="text-sm text-gray-500">
                    Livrables : Comptes-rendus de chantier, planning actualisé, suivi financier.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                    Réception et accompagnement
                  </h3>
                  <p className="text-gray-600 mb-2">
                    À la livraison, nous vérifions la conformité de l'ensemble des prestations et
                    constituons le dossier des ouvrages exécutés (DOE).
                  </p>
                  <p className="text-sm text-gray-500">
                    Livrables : Procès-verbaux de réception, DOE, formations utilisateurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <Clients />

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Parlons-en ensemble
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
            Que vous soyez facility manager, responsable technique, architecte ou maître d'ouvrage,
            EOLIYA Ingénierie met son expertise à votre service.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Demander un devis gratuit
          </a>
        </div>
      </section>
    </>
  );
}
