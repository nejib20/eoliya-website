import React from 'react';
import {
  Hero,
  Manifesto,
  Capacities,
  Lumiere,
  RenovationSignature,
  References,
  Ambiance,
  Engagement,
  QuoteBand,
  ContactSection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      {/* Hero — vidéo de fond + ledger de chiffres clés */}
      <Hero />

      {/* Manifeste — introduction éditoriale */}
      <Manifesto />

      {/* Capacités — index des 6 domaines (image révélée au survol) */}
      <Capacities />

      {/* Signature — section sombre projecteur curseur */}
      <Lumiere />

      {/* Signature — rénovation & second œuvre */}
      <RenovationSignature />

      {/* Références — 16 logos clients grands comptes */}
      <References />

      {/* Bande d'ambiance institutionnelle pleine largeur */}
      <Ambiance />

      {/* Engagement — éditorial 2 colonnes + figure bureau */}
      <Engagement />

      {/* Citation client sur image */}
      <QuoteBand />

      {/* Contact — fiche technique + formulaire */}
      <ContactSection />
    </>
  );
}
