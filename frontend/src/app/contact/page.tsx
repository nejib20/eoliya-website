'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
                src="https://maps.google.com/maps?q=131%20Boulevard%20Pereire%2075017%20Paris&z=16&output=embed"
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

          {/* Colonne droite : formulaire */}
          <form className="cform rv d1" onSubmit={handleSubmit} noValidate>
            <div className="fld">
              <label>Civilité</label>
              <select name="civility" defaultValue="">
                <option value="">Sélectionner</option>
                <option>Mme</option>
                <option>M.</option>
              </select>
            </div>
            <div className="frow">
              <div className="fld">
                <label>Nom <span className="req">*</span></label>
                <input type="text" name="lastName" required />
              </div>
              <div className="fld">
                <label>Prénom <span className="req">*</span></label>
                <input type="text" name="firstName" required />
              </div>
            </div>
            <div className="fld">
              <label>Entreprise / Organisation</label>
              <input type="text" name="company" />
            </div>
            <div className="frow">
              <div className="fld">
                <label>Email <span className="req">*</span></label>
                <input type="email" name="email" required />
              </div>
              <div className="fld">
                <label>Téléphone</label>
                <input type="tel" name="phone" />
              </div>
            </div>
            <div className="fld">
              <label>Objet de votre demande <span className="req">*</span></label>
              <select name="subject" required defaultValue="">
                <option value="" disabled>Sélectionner</option>
                <option>Demande de devis</option>
                <option>Question technique</option>
                <option>Demande d&apos;audit / diagnostic</option>
                <option>Prise de rendez-vous</option>
                <option>Réclamation / SAV</option>
                <option>Candidature spontanée</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="fld">
              <label>Votre message <span className="req">*</span></label>
              <textarea
                name="message"
                placeholder="Décrivez brièvement votre projet, vos besoins ou votre question"
                required
                rows={5}
              />
            </div>
            <label className="consent">
              <input type="checkbox" name="consent" required />
              <span>
                J&apos;accepte que mes données soient utilisées par EOLIYA Ingénierie pour traiter ma
                demande. Conformément au RGPD, je peux exercer mes droits d&apos;accès, de
                rectification et de suppression.
              </span>
            </label>
            <button type="submit" className="btn">
              {sent ? 'Merci, message envoyé ✓' : <>Envoyer ma demande <i>→</i></>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
