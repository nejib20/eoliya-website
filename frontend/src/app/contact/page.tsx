import React from 'react';
import type { Metadata } from 'next';
import { Contact } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Contact EOLIYA Ingénierie - Devis gratuit et conseil personnalisé | Paris',
  description: 'Contactez EOLIYA Ingénierie pour votre projet d\'ingénierie du bâtiment. Devis gratuit, conseil TCE, relamping LED, luminaires sur mesure. Réponse sous 24h.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero simple */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-500 mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vous avez un projet ? Une question ? Nos équipes sont à votre écoute pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <Contact showContactInfo={true} />

      {/* Map Section */}
      <section className="section section-alt">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary-500 mb-8 text-center">
            Comment nous rejoindre ?
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl aspect-video lg:aspect-square flex items-center justify-center">
              <span className="text-gray-500">
                Google Maps
                <br />
                (à intégrer)
              </span>
            </div>

            {/* Access Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                  Adresse
                </h3>
                <address className="not-italic text-gray-600">
                  EOLIYA Ingénierie<br />
                  131 Boulevard Pereire<br />
                  75017 Paris
                </address>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                  Accès en transports en commun
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Métro :</strong> Ligne 3, station Pereire (à 2 min à pied)</li>
                  <li><strong>RER C :</strong> Station Pereire-Levallois (à 5 min à pied)</li>
                  <li><strong>Bus :</strong> Lignes 84, 93 (arrêt Pereire-Gouvion-Saint-Cyr)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                  Accès en voiture
                </h3>
                <p className="text-gray-600 mb-2">
                  Parkings publics à proximité :
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>Parking Pereire (Indigo), 147 Boulevard Pereire</li>
                  <li>Stationnement payant de surface (horodateurs)</li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                  Accessibilité PMR
                </h3>
                <p className="text-gray-600">
                  Nos locaux sont accessibles aux personnes à mobilité réduite (ascenseur, plain-pied).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-500 mb-12 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-secondary-500 mb-2">
                Proposez-vous des devis gratuits ?
              </h3>
              <p className="text-gray-600">
                Oui, nous établissons des devis gratuits et sans engagement pour tous nos services.
                Selon la complexité de votre projet, une visite de site peut être nécessaire.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-secondary-500 mb-2">
                Quels sont vos délais d'intervention pour un dépannage ?
              </h3>
              <p className="text-gray-600">
                Pour les clients sous contrat, nous intervenons sous 24h (4h pour contrats premium).
                Pour les demandes ponctuelles, les délais varient selon notre charge de travail
                (généralement sous 48 à 72h).
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-secondary-500 mb-2">
                Intervenez-vous en dehors de l'Île-de-France ?
              </h3>
              <p className="text-gray-600">
                Oui, nous pouvons intervenir partout en France pour des projets d'envergure
                (pilotage TCE, luminaires sur mesure). Pour la maintenance courante, notre zone
                d'intervention privilégiée est l'Île-de-France.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-secondary-500 mb-2">
                Combien de temps faut-il pour recevoir une réponse à ma demande ?
              </h3>
              <p className="text-gray-600">
                Nous nous engageons à répondre sous 24h ouvrées. Pour les demandes complexes
                nécessitant une étude préalable, nous vous indiquons un délai de remise de proposition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
