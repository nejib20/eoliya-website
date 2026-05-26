import React from 'react';
import type { Metadata } from 'next';
import { Hero, Services } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Nos Services - Conseil TCE, Relamping LED, Luminaires sur mesure | EOLIYA',
  description: 'Découvrez nos services d\'ingénierie : conseil et pilotage TCE, maintenance et relamping LED, conception de luminaires techniques sur mesure.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Nos domaines d'intervention"
        subtitle="Des solutions complètes et personnalisées pour tous vos projets d'ingénierie du bâtiment. De la conception à la réalisation, nous vous accompagnons à chaque étape."
        primaryCta={{
          label: 'Demander un devis',
          href: '/contact',
        }}
      />

      <Services />

      {/* Additional Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-6">
              Une expertise transversale
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              EOLIYA Ingénierie intervient sur l'ensemble des corps d'état techniques du bâtiment
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-secondary-500 mb-3">
                  Électricité courants forts et faibles
                </h3>
                <p className="text-gray-600">
                  Distribution BT, tableaux, éclairage, réseaux VDI
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-secondary-500 mb-3">
                  CVC (Chauffage, Ventilation, Climatisation)
                </h3>
                <p className="text-gray-600">
                  Audits énergétiques, maintenance, optimisation
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-secondary-500 mb-3">
                  Sécurité incendie
                </h3>
                <p className="text-gray-600">
                  SSI, désenfumage, éclairage de sécurité (BAES, LSC)
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-secondary-500 mb-3">
                  Accessibilité PMR
                </h3>
                <p className="text-gray-600">
                  Mise en conformité ERP, signalétique, cheminements
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-secondary-500 mb-3">
                  Éclairage technique
                </h3>
                <p className="text-gray-600">
                  Calculs photométriques, luminaires ATEX, solutions sur mesure
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-secondary-500 mb-3">
                  Normes et réglementation
                </h3>
                <p className="text-gray-600">
                  NFC 15-100, NFC 71-121, EN 12464, réglementation ERP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-6">
            Un projet spécifique ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Chaque projet est unique. Contactez-nous pour discuter de vos besoins et obtenir
            une solution personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Contactez-nous
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
