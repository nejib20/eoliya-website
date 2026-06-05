import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conditions générales — EOLIYA Ingénierie',
  description: "Conditions générales applicables aux prestations d’EOLIYA Ingénierie, destinées à une clientèle professionnelle.",
};

export default function CGVPage() {
  return (
    <>
      <nav className="wrap crumb rv" aria-label="Fil d’ariane">
        <Link href="/">Accueil</Link>
        <span className="sep">/</span>
        <span>CGV</span>
      </nav>

      {/* HERO */}
      <section className="legal-hero">
        <div className="wrap">
          <div className="eyebrow rv">Conditions générales</div>
          <h1 className="rv d1">Conditions générales</h1>
        </div>
      </section>

      {/* CORPS */}
      <section className="legal-body">
        <div className="wrap">
          <div className="col">
            <section className="rv">
              <p>
                Les prestations d’EOLIYA (conseil et pilotage, ingénierie, études techniques, travaux et fournitures associés) s’adressent à une clientèle professionnelle. Pour chaque mission, un devis ou un contrat précise l’étendue des prestations, les délais, les conditions financières et les modalités de règlement. Ces conditions particulières prévalent et constituent l’accord des parties.
              </p>
              <p>
                Les conditions générales applicables sont communiquées sur simple demande à contact@eoliya.com.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
