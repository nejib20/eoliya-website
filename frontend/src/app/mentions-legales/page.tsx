import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales — EOLIYA Ingénierie',
  description: "Mentions légales du site EOLIYA Ingénierie : éditeur, hébergement et propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <nav className="wrap crumb rv" aria-label="Fil d’ariane">
        <Link href="/">Accueil</Link>
        <span className="sep">/</span>
        <span>Mentions légales</span>
      </nav>

      {/* HERO */}
      <section className="legal-hero">
        <div className="wrap">
          <div className="eyebrow rv">Informations légales</div>
          <h1 className="rv d1">Mentions légales</h1>
        </div>
      </section>

      {/* CORPS */}
      <section className="legal-body">
        <div className="wrap">
          <div className="col">
            <section className="rv">
              <h2>Propriété intellectuelle</h2>
              <p>
                L’ensemble des contenus présents sur ce site (textes, images, logo, identité visuelle, mise en page) est la propriété d’EOLIYA, sauf mention contraire, et est protégé au titre du droit de la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable d’EOLIYA, est interdite.
              </p>
            </section>

            <section className="rv">
              <h2>Données personnelles</h2>
              <p>
                Les informations recueillies via le formulaire de contact font l’objet d’un traitement destiné à répondre aux demandes. Pour en savoir plus sur la gestion de vos données et l’exercice de vos droits, consultez notre{' '}
                <Link className="inline" href="/confidentialite">Politique de confidentialité</Link>.
              </p>
            </section>

            <section className="rv">
              <h2>Responsabilité</h2>
              <p>
                EOLIYA s’efforce d’assurer l’exactitude des informations publiées sur ce site, sans pouvoir en garantir l’exhaustivité ni l’absence d’erreurs. EOLIYA ne saurait être tenue responsable des dommages résultant de l’accès ou de l’utilisation du site.
              </p>
            </section>

            <hr className="legal-rule rv" />
            <div className="colophon rv">
              <p>
                <span className="lab">Éditeur du site</span>
                Le présent site est édité par EOLIYA, société par actions simplifiée à associé unique (SASU) au capital de 100 000 euros. Siège social : 131 Boulevard Pereire, 75017 Paris. RCS Paris 830 553 160. SIRET (siège) : 830 553 160 00029. Numéro de TVA intracommunautaire : FR25830553160. Code APE : 71.12B (Ingénierie, études techniques). Téléphone : 01 34 22 30 12. Courriel : contact@eoliya.com.
              </p>
              <p>
                <span className="lab">Directeur de la publication</span>
                Sofian Ayeb, en qualité de président.
              </p>
              <p>
                <span className="lab">Hébergement</span>
                Le site est hébergé par Enom, Inc., société du groupe Tucows, située à Kirkland, Washington 98033, États-Unis. Téléphone : +1 425 274 4500. Site : www.enom.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
