import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { Zap, Wrench, TrendingDown, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Multi-services et Relamping LED - Maintenance et transition énergétique | EOLIYA',
  description: 'Maintenance électrique, dépannage 24/7 et solutions de relamping LED haute performance. Jusqu\'à 80% d\'économies d\'énergie garanties.',
};

export default function MultiservicesRelampingPage() {
  return (
    <>
      <Hero
        title="Multi-services, Multi-techniques et Relamping"
        subtitle="Maintenance corrective et préventive de vos installations électriques, CVC et systèmes de sécurité. Accompagnement complet vers la transition énergétique LED."
        primaryCta={{
          label: 'Demander un devis',
          href: '/contact',
        }}
      />

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-500 mb-6">
            Maintenance et transition LED
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            EOLIYA intervient en maintenance corrective et préventive sur vos installations
            électriques, CVC et systèmes de sécurité. Nous accompagnons également votre transition
            énergétique grâce à nos solutions de relamping LED performantes.
          </p>
          <p className="text-lg text-gray-600">
            Nos contrats de maintenance sur mesure s'adaptent à vos besoins spécifiques : dépannage
            24/7, interventions programmées, gestion du parc de luminaires.
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section className="section section-alt">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary-500 mb-12 text-center">
            Les avantages du relamping LED
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Jusqu'à 80% d'économies
              </h3>
              <p className="text-gray-600">
                Réduction drastique de votre facture d'électricité liée à l'éclairage
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Durée de vie x5
              </h3>
              <p className="text-gray-600">
                Les LED durent 50 000h contre 10 000h pour les tubes fluocompacts
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Qualité d'éclairage
              </h3>
              <p className="text-gray-600">
                Rendu des couleurs optimal, pas de scintillement, allumage instantané
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Maintenance réduite
              </h3>
              <p className="text-gray-600">
                Moins de pannes, moins d'interventions, moins de gestion au quotidien
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-500 mb-12 text-center">
            Nos prestations
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Dépannage électrique 24/7
              </h3>
              <p className="text-gray-600">
                Intervention rapide pour tous types de pannes électriques : disjonctions,
                coupures, défauts d'éclairage. Hotline disponible pour nos clients sous contrat.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Mise aux normes des installations
              </h3>
              <p className="text-gray-600">
                Diagnostic de conformité NFC 15-100, mise en sécurité des tableaux électriques,
                mise aux normes des circuits et protections.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Remplacement par LED : jusqu'à 80% d'économies d'énergie
              </h3>
              <p className="text-gray-600 mb-4">
                Audit d'éclairage, calculs photométriques, fourniture et pose de luminaires LED,
                gestion des déchets (DEEE). ROI moyen : 2 à 3 ans.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Bureaux et espaces tertiaires</li>
                <li>Commerces et surfaces de vente</li>
                <li>Entrepôts et zones industrielles</li>
                <li>Parkings et circulations</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                Contrats de maintenance sur mesure
              </h3>
              <p className="text-gray-600">
                Maintenance préventive programmée, interventions correctives illimitées, gestion du
                parc de luminaires, reporting mensuel. Contrats annuels ou pluriannuels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="section section-alt">
        <div className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Calculez vos économies potentielles
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">80%</div>
                <div className="text-primary-100">Économies d'énergie moyennes</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">2-3 ans</div>
                <div className="text-primary-100">Retour sur investissement</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50 000h</div>
                <div className="text-primary-100">Durée de vie LED</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg mb-6">
                Un bâtiment de 1000 m² peut économiser jusqu'à 15 000€/an sur sa facture d'éclairage
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Demander un audit gratuit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-secondary-500 mb-6">
            Prêt à réduire vos coûts énergétiques ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nos ingénieurs réalisent un audit gratuit de votre installation et vous proposent une
            solution personnalisée avec calcul de ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Demander un audit gratuit
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
