import React from 'react';

/**
 * Bande citation client sur image de fond sombre.
 * Port de .quote.quote-band (référence).
 */
export const QuoteBand: React.FC = () => {
  return (
    <section className="quote-band">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="quote-bg" src="/images/citation-ambiance.png" alt="" aria-hidden="true" />
      <div className="veil" />
      <div className="wrap">
        <div className="q rv">
          <span className="mark" aria-hidden="true">&ldquo;</span>
          <blockquote>
            EOLIYA a piloté notre mise aux normes avec rigueur et réactivité. Une expertise technique
            qui nous a permis de tenir nos délais et notre budget.
          </blockquote>
          <div className="by">
            <div className="rl">Responsable Facilities, groupe hôtelier de référence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBand;
