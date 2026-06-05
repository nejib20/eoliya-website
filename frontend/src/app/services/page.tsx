import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Capacities, CTABand } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Nos Services — EOLIYA Ingenierie | Conseil TCE, Relamping LED, Luminaires sur mesure',
  description: 'Decouvrez nos services d\'ingenierie : conseil et pilotage TCE, maintenance et relamping LED, conception de luminaires techniques sur mesure.',
};

const expertises = [
  { title: 'Electricite courants forts et faibles', description: 'Distribution BT, tableaux, eclairage, reseaux VDI' },
  { title: 'CVC (Chauffage, Ventilation, Climatisation)', description: 'Audits energetiques, maintenance, optimisation' },
  { title: 'Securite incendie', description: 'SSI, desenfumage, eclairage de securite (BAES, LSC)' },
  { title: 'Accessibilite PMR', description: 'Mise en conformite ERP, signaletique, cheminements' },
  { title: 'Eclairage technique', description: 'Calculs photometriques, luminaires ATEX, solutions sur mesure' },
  { title: 'Normes et reglementation', description: 'NFC 15-100, NFC 71-121, EN 12464, reglementation ERP' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-[clamp(48px,6vw,88px)] pb-[clamp(28px,3.5vw,48px)]">
        <div className="wrap">
          <div className="flex items-center gap-2 text-sm text-muted mb-[22px]">
            <Link href="/" className="hover:text-ink transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-ink">Services</span>
          </div>

          <div className="eyebrow mb-[22px]">
            <b>02</b> &nbsp;Services
          </div>

          <h1 className="font-display font-medium text-[clamp(38px,5.4vw,72px)] leading-[1.02] tracking-[-0.022em]">
            Nos domaines <em className="italic text-laiton-deep">d&apos;intervention</em>.
          </h1>

          <p className="mt-[clamp(20px,2.5vw,32px)] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-ink-2 max-w-[55ch]">
            Des solutions completes et personnalisees pour tous vos projets d&apos;ingenierie du batiment. De la conception a la realisation, nous vous accompagnons a chaque etape.
          </p>
        </div>
      </section>

      {/* Capacities */}
      <Capacities />

      {/* Expertises transversales */}
      <section className="py-[clamp(72px,9vw,140px)] bg-card border-t border-b border-line">
        <div className="wrap">
          <div className="eyebrow mb-5">
            <b>Expertises transversales</b>
          </div>
          <h2 className="font-display font-medium text-[clamp(28px,3.6vw,52px)] leading-[1.04] tracking-[-0.02em] max-w-[22ch] mb-[clamp(40px,5vw,64px)]">
            Une maitrise complete des corps d&apos;etat techniques
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertises.map((expertise, index) => (
              <div key={index} className="bg-paper border border-line p-[clamp(24px,3vw,36px)]">
                <h3 className="font-display font-medium text-[clamp(18px,1.8vw,22px)] tracking-[-0.01em]">
                  {expertise.title}
                </h3>
                <p className="mt-3 text-muted text-[15px] leading-relaxed">
                  {expertise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        eyebrow="Un projet specifique ?"
        title="Discutons de vos besoins."
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
