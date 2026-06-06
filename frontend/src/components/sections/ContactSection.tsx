import React from 'react';
import { EditorialContactForm } from '@/components/forms/EditorialContactForm';

/**
 * Section contact de la page d'accueil : fiche technique + formulaire à filets sécurisé.
 * Port fidèle de .contact / .cform (référence index.html).
 */
export const ContactSection: React.FC = () => {
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

        <EditorialContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
