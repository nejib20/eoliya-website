import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABand } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Luminaires sur mesure — EOLIYA Ingenierie',
  description: 'Conception et fabrication de luminaires techniques sur mesure. Calculs photometriques, conformite normes NFC 71-121, EN 12464, solutions ATEX.',
};

const expertises = [
  { title: 'Etude d\'implantation', description: 'Calculs d\'eclairement conformes aux normes EN 12464 et NFC 71-121.' },
  { title: 'Conformite normes', description: 'Respect des normes NFC 71-121, EN 12464, BAEL et reglementation ATEX.' },
  { title: 'Fabrication francaise', description: 'Production en France avec nos partenaires industriels certifies.' },
  { title: 'Solutions ATEX', description: 'Luminaires antideflagrants pour atmospheres explosives et milieux specifiques.' },
];

const processus = [
  { index: '01', title: 'Analyse du besoin', description: 'Etude de votre cahier des charges : contraintes dimensionnelles, environnementales, normatives et esthetiques. Visite de site si necessaire.' },
  { index: '02', title: 'Etudes photometriques', description: 'Calculs d\'eclairement (lux), d\'uniformite, de rendu des couleurs (IRC), choix des sources LED et optiques adaptees.' },
  { index: '03', title: 'Conception et prototypage', description: 'Design du luminaire, plans de fabrication, validation avec le client, realisation d\'un prototype pour tests et validation.' },
  { index: '04', title: 'Fabrication et livraison', description: 'Production en petite ou moyenne serie, controle qualite, livraison et installation si besoin. Garantie et SAV assures.' },
];

const applications = [
  {
    title: 'Environnements industriels',
    items: ['Luminaires ATEX zones 1, 2, 21, 22', 'Eclairage de process et postes de travail', 'Solutions haute temperature', 'Resistance aux projections et poussieres (IP65+)'],
  },
  {
    title: 'Batiments patrimoniaux',
    items: ['Integration discrete en monuments historiques', 'Respect des contraintes architecturales', 'Eclairage museographique', 'Solutions invisibles ou camoufles'],
  },
  {
    title: 'Espaces tertiaires',
    items: ['Luminaires design sur-mesure', 'Integration en faux-plafonds atypiques', 'Eclairage de signaletique', 'Solutions acoustiques integrees'],
  },
  {
    title: 'Milieux specifiques',
    items: ['Salles blanches (pharmaceutique, agroalimentaire)', 'Environnements marins ou corrosifs', 'Zones a risques biologiques', 'Tunnels et infrastructures'],
  },
];

export default function LuminairesSurMesurePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-[clamp(48px,6vw,88px)] pb-[clamp(28px,3.5vw,48px)]">
        <div className="wrap">
          <div className="flex items-center gap-2 text-sm text-muted mb-[22px]">
            <Link href="/" className="hover:text-ink transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
            <span>/</span>
            <span className="text-ink">Luminaires sur mesure</span>
          </div>

          <div className="eyebrow mb-[22px]">
            <b>03</b> &nbsp;Service
          </div>

          <h1 className="font-display font-medium text-[clamp(38px,5.4vw,72px)] leading-[1.02] tracking-[-0.022em]">
            Luminaires <em className="italic text-laiton-deep">sur mesure</em>.
          </h1>

          <p className="mt-[clamp(20px,2.5vw,32px)] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-ink-2 max-w-[55ch]">
            Conception et fabrication de solutions d&apos;eclairage techniques adaptees a vos contraintes architecturales et normatives specifiques.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-[clamp(72px,9vw,140px)]">
        <div className="wrap">
          <div className="max-w-[720px]">
            <h2 className="font-display font-medium text-[clamp(26px,3vw,40px)] tracking-[-0.02em]">
              Conception et fabrication sur mesure
            </h2>
            <div className="mt-6 text-[clamp(16px,1.4vw,18px)] leading-relaxed text-ink-2 space-y-5">
              <p>
                Notre bureau d&apos;etudes concoit des luminaires techniques adaptes a vos contraintes architecturales et normatives. Nous realisons calculs photometriques, prototypes et fabrication en petite ou moyenne serie.
              </p>
              <p>
                Que vous ayez des contraintes dimensionnelles, des environnements specifiques (ATEX, salles blanches) ou des exigences esthetiques particulieres, nos ingenieurs trouvent la solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="py-[clamp(72px,9vw,140px)] bg-card border-t border-b border-line">
        <div className="wrap">
          <div className="eyebrow mb-5">
            <b>Notre expertise</b>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[clamp(32px,4vw,52px)]">
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

      {/* Processus */}
      <section className="py-[clamp(72px,9vw,140px)]">
        <div className="wrap">
          <div className="eyebrow mb-5">
            <b>Processus de conception</b>
          </div>
          <h2 className="font-display font-medium text-[clamp(28px,3.6vw,52px)] leading-[1.04] tracking-[-0.02em] max-w-[22ch] mb-[clamp(40px,5vw,64px)]">
            De l&apos;idee a la realisation
          </h2>

          <div className="border-t border-line">
            {processus.map((step) => (
              <div key={step.index} className="py-[clamp(24px,3vw,38px)] border-b border-line">
                <div className="flex gap-[clamp(20px,3vw,48px)] items-start">
                  <span className="font-mono text-sm text-laiton-deep tracking-[0.05em] flex-none mt-1">{step.index}</span>
                  <div>
                    <h3 className="font-display font-medium text-[clamp(21px,2.2vw,28px)] tracking-[-0.01em]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-ink-2 text-[clamp(15px,1.3vw,17px)] leading-relaxed max-w-[56ch]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-[clamp(72px,9vw,140px)] bg-card border-t border-b border-line">
        <div className="wrap">
          <div className="eyebrow mb-5">
            <b>Domaines d&apos;application</b>
          </div>
          <h2 className="font-display font-medium text-[clamp(28px,3.6vw,52px)] leading-[1.04] tracking-[-0.02em] max-w-[22ch] mb-[clamp(40px,5vw,64px)]">
            Des solutions pour tous les environnements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-paper border border-line p-[clamp(24px,3vw,36px)]">
                <h3 className="font-display font-medium text-[clamp(18px,1.8vw,22px)] tracking-[-0.01em] mb-4">
                  {app.title}
                </h3>
                <ul className="space-y-2 text-muted text-[15px] leading-relaxed">
                  {app.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-laiton-deep">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        eyebrow="Un projet de luminaire sur mesure ?"
        title="Confiez votre projet a nos ingenieurs."
        primaryCta={{
          label: 'Demander une etude',
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
