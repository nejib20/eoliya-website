'use client';

import React, { useState } from 'react';

/**
 * Section contact de la page d'accueil : fiche technique + formulaire à filets.
 * Port fidèle de .contact / .cform (référence index.html).
 */
export const ContactSection: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap grid">
        <div className="cleft">
          <div className="eyebrow rv">
            <b>05</b> &nbsp;Contact
          </div>
          <h2 className="rv d1">Parlons de votre projet.</h2>
          <div className="ci rv d2">
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
              <span className="v s">131 Boulevard Pereire<br />75017 Paris</span>
            </div>
            <div className="blk">
              <span className="k">Horaires</span>
              <span className="v s">Lun – Ven · 9h00 – 18h00 · Réponse sous 24h ouvrées</span>
            </div>
          </div>
        </div>

        <form className="cform rv d1" onSubmit={handleSubmit} noValidate>
          <div className="frow">
            <div className="fld">
              <label>Nom <span className="req">*</span></label>
              <input type="text" required />
            </div>
            <div className="fld">
              <label>Prénom <span className="req">*</span></label>
              <input type="text" required />
            </div>
          </div>
          <div className="fld">
            <label>Entreprise / Organisation</label>
            <input type="text" />
          </div>
          <div className="frow">
            <div className="fld">
              <label>Email <span className="req">*</span></label>
              <input type="email" required />
            </div>
            <div className="fld">
              <label>Téléphone</label>
              <input type="tel" />
            </div>
          </div>
          <div className="fld">
            <label>Objet de votre demande <span className="req">*</span></label>
            <select required defaultValue="">
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
            <textarea placeholder="Décrivez brièvement votre projet, vos besoins ou votre question" required />
          </div>
          <label className="consent">
            <input type="checkbox" required />
            <span>
              J&apos;accepte que mes données soient utilisées par EOLIYA Ingénierie pour traiter ma
              demande. Conformément au RGPD, je peux exercer mes droits d&apos;accès, de rectification
              et de suppression.
            </span>
          </label>
          <button type="submit" className="btn">
            {sent ? 'Merci, message envoyé ✓' : <>Envoyer ma demande <i>→</i></>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
