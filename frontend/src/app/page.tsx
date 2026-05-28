import React from 'react';
import { HeroPremium, Services, Clients, Contact } from '@/components/sections';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from '@/components/ui';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Style plaquette */}
      <HeroPremium
        primaryCta={{
          label: 'Demander un devis',
          href: '/contact',
        }}
        secondaryCta={{
          label: 'Nos services',
          href: '/services',
        }}
      />

      {/* Clients Section - 16 logos comme sur la plaquette */}
      <Clients />

      {/* Services Section - Style plaquette avec barre verticale */}
      <Services />

      {/* Contact / Footer Section - Style plaquette */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Logo centré */}
            <div className="flex justify-center mb-10">
              <Logo className="h-16 w-auto" color="dark" />
            </div>

            {/* Informations de contact */}
            <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Siège social :</h3>
                <p className="text-sm text-gray-600 flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" />
                  131 Boulevard Pereire 75017 Paris
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Direction et services commerciaux :</h3>
                <p className="text-sm text-gray-600">
                  Rue Madame de Sanzillon 92110 Clichy
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact :</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <a
                  href="tel:0134223012"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-500 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  01 34 22 30 12
                </a>
                <a
                  href="mailto:contact@eoliya.com"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-500 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@eoliya.com
                </a>
              </div>
              <a
                href="https://www.eoliya.com"
                className="inline-block mt-4 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
              >
                www.eoliya.com
              </a>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-400">
                © EOLIYA - {new Date().getFullYear()}. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section (optionnel) */}
      <Contact />
    </>
  );
}
