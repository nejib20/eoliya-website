import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { EditorialContactForm } from '@/components/forms/EditorialContactForm';

export const metadata: Metadata = {
  title: 'Contact — EOLIYA Ingénierie | Devis gratuit, réponse sous 24h',
  description:
    'Contactez EOLIYA Ingénierie : devis, audit, question technique ou prise de rendez-vous. 131 Boulevard Pereire, 75017 Paris. Réponse sous 24h ouvrées.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb rv">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Contact</span>
          </div>
          <div className="eyebrow rv" style={{ marginTop: '22px' }}>
            <b>05</b> &nbsp;Contact
          </div>
          <h1 className="rv d1">
            Parlons de <em>votre projet</em>.
          </h1>
          <p className="intro rv d2">
            Devis, audit, question technique ou prise de rendez-vous : décrivez votre besoin, nous
            vous répondons sous 24h ouvrées.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="contact-page">
        <div className="wrap grid">
          {/* Colonne gauche : fiche + carte + garantie */}
          <div className="cinfo rv">
            <div className="ci" style={{ marginTop: 0 }}>
              <div className="blk">
                <span className="k">Téléphone</span>
                <a className="v" href="tel:0134223012">01 34 22 30 12</a>
              </div>
              <div className="blk">
                <span className="k">Email</span>
                <a className="v s" href="mailto:contact@eoliya.com">contact@eoliya.com</a>
              </div>
              <div className="blk">
                <span className="k">Adresse</span>
                <address className="v s" style={{ fontStyle: 'normal' }}>131 Boulevard Pereire<br />75017 Paris</address>
              </div>
              <div className="blk">
                <span className="k">Horaires</span>
                <span className="v s">Lun – Ven · 9h00 – 18h00</span>
              </div>
            </div>

            <div className="map">
              <a
                className="addr"
                href="https://maps.google.com/?q=131+Boulevard+Pereire+75017+Paris"
                target="_blank"
                rel="noopener noreferrer"
              >
                131 Bd Pereire, 75017 Paris ↗
              </a>
              <iframe
                title="Carte — 131 Boulevard Pereire, 75017 Paris"
                src="https://www.google.com/maps?q=131%20Boulevard%20Pereire%2075017%20Paris&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="guar">
              <span className="d" />
              <span className="t">Réponse garantie sous 24h ouvrées · Devis gratuit et sans engagement</span>
            </div>
          </div>

          {/* Colonne droite : formulaire sécurisé */}
          <EditorialContactForm />
        </div>
      </section>
    </>
  );
}
