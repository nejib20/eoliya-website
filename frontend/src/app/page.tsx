import React from 'react';
import { HeroImmersive, Services, Clients, Testimonials, Contact } from '@/components/sections';
import { Building2, CheckCircle2, Zap, Users } from 'lucide-react';

// Visual component for About section
const AboutVisual = () => (
  <div className="relative aspect-square">
    {/* Main visual container */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden">
      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="about-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-grid)" />
      </svg>

      {/* Building illustration */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full p-8" preserveAspectRatio="xMidYMid meet">
        {/* Building 1 */}
        <rect x="20" y="80" width="50" height="100" fill="white" fillOpacity="0.2" rx="2" />
        <rect x="30" y="90" width="10" height="15" fill="white" fillOpacity="0.4" rx="1" />
        <rect x="50" y="90" width="10" height="15" fill="white" fillOpacity="0.4" rx="1" />
        <rect x="30" y="115" width="10" height="15" fill="white" fillOpacity="0.6" rx="1" />
        <rect x="50" y="115" width="10" height="15" fill="white" fillOpacity="0.4" rx="1" />
        <rect x="30" y="140" width="10" height="15" fill="white" fillOpacity="0.4" rx="1" />
        <rect x="50" y="140" width="10" height="15" fill="white" fillOpacity="0.6" rx="1" />
        <rect x="30" y="165" width="30" height="15" fill="white" fillOpacity="0.3" rx="1" />

        {/* Building 2 - taller */}
        <rect x="80" y="50" width="60" height="130" fill="white" fillOpacity="0.25" rx="2" />
        <rect x="90" y="60" width="12" height="18" fill="white" fillOpacity="0.5" rx="1" />
        <rect x="108" y="60" width="12" height="18" fill="white" fillOpacity="0.4" rx="1" />
        <rect x="126" y="60" width="12" height="18" fill="white" fillOpacity="0.5" rx="1" />
        <rect x="90" y="88" width="12" height="18" fill="white" fillOpacity="0.4" rx="1" />
        <rect x="108" y="88" width="12" height="18" fill="white" fillOpacity="0.6" rx="1" />
        <rect x="126" y="88" width="12" height="18" fill="white" fillOpacity="0.4" rx="1" />
        <rect x="90" y="116" width="12" height="18" fill="white" fillOpacity="0.5" rx="1" />
        <rect x="108" y="116" width="12" height="18" fill="white" fillOpacity="0.4" rx="1" />
        <rect x="126" y="116" width="12" height="18" fill="white" fillOpacity="0.5" rx="1" />
        <rect x="90" y="144" width="12" height="18" fill="white" fillOpacity="0.4" rx="1" />
        <rect x="108" y="144" width="12" height="18" fill="white" fillOpacity="0.5" rx="1" />
        <rect x="126" y="144" width="12" height="18" fill="white" fillOpacity="0.4" rx="1" />

        {/* Building 3 */}
        <rect x="150" y="100" width="40" height="80" fill="white" fillOpacity="0.2" rx="2" />
        <rect x="158" y="110" width="8" height="12" fill="white" fillOpacity="0.5" rx="1" />
        <rect x="172" y="110" width="8" height="12" fill="white" fillOpacity="0.4" rx="1" />
        <rect x="158" y="130" width="8" height="12" fill="white" fillOpacity="0.4" rx="1" />
        <rect x="172" y="130" width="8" height="12" fill="white" fillOpacity="0.6" rx="1" />
        <rect x="158" y="150" width="8" height="12" fill="white" fillOpacity="0.5" rx="1" />
        <rect x="172" y="150" width="8" height="12" fill="white" fillOpacity="0.4" rx="1" />
        <rect x="165" y="168" width="12" height="12" fill="white" fillOpacity="0.3" rx="1" />

        {/* Ground */}
        <rect x="10" y="180" width="180" height="5" fill="white" fillOpacity="0.3" rx="2" />
      </svg>

      {/* Floating accent elements */}
      <div className="absolute top-6 right-6 w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center shadow-lg">
        <Zap className="w-8 h-8 text-white" />
      </div>
    </div>

    {/* Stats card floating */}
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
          <Users className="w-6 h-6 text-primary-500" />
        </div>
        <div>
          <div className="text-2xl font-bold text-secondary-500">30+</div>
          <div className="text-sm text-gray-500">Clients grands comptes</div>
        </div>
      </div>
    </div>

    {/* Experience badge */}
    <div className="absolute -top-4 -left-4 bg-accent-500 text-white rounded-xl shadow-lg px-4 py-2">
      <div className="text-lg font-bold">15+ ans</div>
      <div className="text-xs opacity-90">d'expérience</div>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Immersive */}
      <HeroImmersive
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4">
                Notre engagement
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-6">
                Au service de vos projets depuis 2009
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                EOLIYA Ingénierie intervient comme partenaire de confiance pour les entreprises,
                collectivités et gestionnaires d'établissements recevant du public (ERP).
                Notre approche combine réactivité, expertise technique et respect des délais.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-500 mb-1">Expertise reconnue</h3>
                    <p className="text-gray-600 text-sm">
                      Plus de 150 projets menés à bien pour des clients de référence comme le Conseil d'État,
                      Veepee, Barrière ou l'Institut de France.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-500 mb-1">Solutions clés en main</h3>
                    <p className="text-gray-600 text-sm">
                      De l'audit initial à la livraison finale, nous pilotons votre projet avec méthode
                      et rigueur pour garantir le respect des délais et du budget.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-500 mb-1">Innovation et performance</h3>
                    <p className="text-gray-600 text-sm">
                      Nous développons des solutions sur mesure adaptées à vos contraintes,
                      avec un focus sur l'efficacité énergétique et la durabilité.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/a-propos"
                  className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                >
                  En savoir plus sur notre équipe
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <AboutVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-500 to-primary-700 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Votre partenaire ingénierie
          </div>
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
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
