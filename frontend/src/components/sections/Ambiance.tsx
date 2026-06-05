import React from 'react';

/**
 * Bande d'ambiance institutionnelle pleine largeur (sans légende).
 * Port de .ambiance (référence).
 */
export const Ambiance: React.FC = () => {
  return (
    <section className="ambiance" aria-label="Ambiance institutionnelle">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/reception-ambiance.png" alt="" aria-hidden="true" />
    </section>
  );
};

export default Ambiance;
