import React from 'react';

/**
 * Seconde section sombre plein cadre : Rénovation & second œuvre.
 * Port fidèle de .lumiere.lumiere-static #renovation-signature (référence).
 */
export const RenovationSignature: React.FC = () => {
  return (
    <section className="lumiere lumiere-static" id="renovation-signature">
      <div className="bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/renovation-haussmann.jpg" alt="" aria-hidden="true" />
      </div>
      <div className="veil" />
      <div className="wrap inner">
        <div className="eyebrow rv">
          <b>Notre savoir-faire</b> &nbsp;Rénovation &amp; second œuvre
        </div>
        <h2 className="rv d1">
          Nous transformons <em>vos espaces</em>, du gros œuvre aux finitions.
        </h2>
        <p className="l-sub rv d2">
          Rénovation complète de bureaux, locaux et appartements. Peinture, parquet, carrelage,
          sanitaires et gros œuvre, coordonnés par un seul interlocuteur, de l&apos;étude à la livraison.
        </p>
      </div>
    </section>
  );
};

export default RenovationSignature;
