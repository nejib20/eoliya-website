'use client';

import React, { useRef, useCallback } from 'react';

/**
 * Section sombre signature : projecteur lumineux qui suit le curseur.
 * Port fidèle de la section .lumiere #lumiere de la référence (eoliya.css + index.html).
 */
export const Lumiere: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.PointerEvent) => {
    const section = sectionRef.current;
    const spot = spotRef.current;
    if (!section || !spot) return;
    const r = section.getBoundingClientRect();
    spot.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
    spot.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
  }, []);

  const handleEnter = useCallback(() => {
    if (spotRef.current) spotRef.current.style.opacity = '1';
  }, []);

  const handleLeave = useCallback(() => {
    if (spotRef.current) spotRef.current.style.opacity = '0.5';
  }, []);

  return (
    <section
      ref={sectionRef}
      className="lumiere"
      id="lumiere"
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
    >
      <div className="bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/luminaire-sur-mesure.png" alt="" aria-hidden="true" />
      </div>
      <div className="veil" />
      <div ref={spotRef} className="spot" />
      <div className="wrap inner">
        <div className="eyebrow rv">
          <b>Notre signature</b> &nbsp;Maîtrise de l&apos;éclairage
        </div>
        <h2 className="rv d1">
          Nous concevons <em>la&nbsp;lumière</em> qui révèle vos espaces.
        </h2>
        <p className="l-sub rv d2">
          Du relamping LED à la fabrication de luminaires techniques sur mesure, nous optimisons vos
          consommations jusqu&apos;à 80% tout en magnifiant les lieux qui reçoivent du public.
        </p>
        <div className="hint rv d3">
          <span className="pulse" /> Déplacez le curseur pour éclairer la scène
        </div>
      </div>
    </section>
  );
};

export default Lumiere;
