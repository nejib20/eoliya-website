'use client';

import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-[clamp(80px,11vw,170px)]">
      <div className="wrap">
        <div className="eyebrow mb-[clamp(34px,4vw,56px)]">
          <b>Le bureau</b>
        </div>

        <p className="font-display font-normal text-[clamp(26px,3.4vw,50px)] leading-[1.22] tracking-[-0.012em] text-ink max-w-[24ch]" style={{ textWrap: 'balance' }}>
          EOLIYA intervient comme <em className="italic text-laiton-deep">partenaire de confiance</em> pour les entreprises, collectivites et gestionnaires d&apos;etablissements recevant du public. Une approche qui combine reactivite, <em className="italic text-laiton-deep">expertise technique</em> et respect des delais.
        </p>

        <div className="mt-[clamp(40px,5vw,64px)] pt-[30px] border-t border-line flex gap-[60px] flex-wrap">
          <div className="max-w-[30ch]">
            <h4 className="font-mono text-[11px] tracking-[0.16em] uppercase text-laiton-deep mb-3">
              De l&apos;audit a la livraison
            </h4>
            <p className="font-sans text-[15.5px] leading-relaxed text-muted">
              Nous pilotons chaque projet avec methode et rigueur pour garantir le respect des delais et du budget.
            </p>
          </div>
          <div className="max-w-[30ch]">
            <h4 className="font-mono text-[11px] tracking-[0.16em] uppercase text-laiton-deep mb-3">
              Sur mesure
            </h4>
            <p className="font-sans text-[15.5px] leading-relaxed text-muted">
              Des solutions adaptees a vos contraintes, avec un focus sur l&apos;efficacite energetique et la durabilite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
