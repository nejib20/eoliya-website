import React from 'react';
import { Hero, Services, Clients, Testimonials, Contact } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Des solutions d'ingénierie sur mesure pour vos projets tertiaires et industriels"
        subtitle="Depuis plus de 15 ans, EOLIYA Ingénierie accompagne entreprises et institutions dans leurs projets d'aménagement, de mise aux normes et d'optimisation énergétique. De la conception à la réalisation, nous mettons notre expertise au service de vos ambitions."
        primaryCta={{
          label: 'Parlons de votre projet',
          href: '/contact',
        }}
        secondaryCta={{
          label: 'Découvrir nos services',
          href: '/services',
        }}
      />

      {/* Clients Section */}
      <Clients />

      {/* Services Section */}
      <Services />

      {/* About Preview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-6">
                Au service de vos projets
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                EOLIYA Ingénierie intervient comme partenaire de confiance pour les entreprises,
                collectivités et gestionnaires d'établissements recevant du public (ERP).
                Notre approche combine réactivité, expertise technique et respect des délais.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-500 mb-1">Expertise reconnue</h3>
                    <p className="text-gray-600">
                      Plus de 150 projets menés à bien pour des clients de référence comme le Conseil d'État,
                      Veepee, Barrière ou l'Institut de France.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-500 mb-1">Solutions clés en main</h3>
                    <p className="text-gray-600">
                      De l'audit initial à la livraison finale, nous pilotons votre projet avec méthode.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-500 mb-1">Innovation et performance</h3>
                    <p className="text-gray-600">
                      Nous développons des solutions sur mesure adaptées à vos contraintes spécifiques.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <span className="text-gray-400 text-center px-8">
                  Image illustration<br />
                  (à remplacer)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Votre projet mérite une expertise dédiée
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
            Que vous souhaitiez optimiser vos consommations énergétiques, mettre aux normes vos
            installations ou développer un luminaire technique sur mesure, nos équipes sont à votre écoute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contactez-nous dès aujourd'hui
            </a>
            <a
              href="tel:0134223012"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors"
            >
              01 34 22 30 12
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />
    </>
  );
}
