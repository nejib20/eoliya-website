import React from 'react';
import { Hero, Manifesto, Capacities, References, Engagement, CTABand } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Video background with stats ledger */}
      <Hero />

      {/* Manifesto Section - Introduction text */}
      <Manifesto />

      {/* Capacities Section - 6 services list */}
      <Capacities />

      {/* References Section - 16 client logos */}
      <References />

      {/* Engagement Section - 4 pillars */}
      <Engagement />

      {/* CTA Band */}
      <CTABand
        eyebrow="Pret a demarrer ?"
        title="Discutons de votre projet."
        primaryCta={{
          label: 'Demander un devis',
          href: '/contact',
        }}
        secondaryCta={{
          label: '01 34 22 30 12',
          href: 'tel:0134223012',
        }}
      />
    </>
  );
}
