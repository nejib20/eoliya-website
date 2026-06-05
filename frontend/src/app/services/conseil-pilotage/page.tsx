import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABand } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Conseil et Pilotage TCE — EOLIYA Ingénierie',
  description: 'Service de conseil TCE et pilotage de projets de construction, rénovation et aménagement. Coordination des corps d’état, mise aux normes PMR et sécurité incendie.',
};

const prestations = [
  { title: 'Analyse de faisabilité et diagnostic technique', description: 'État des lieux complet, identification des contraintes réglementaires et opportunités d’optimisation.' },
  { title: 'Élaboration des cahiers des charges', description: 'Rédaction des CCTP (Cahier des Clauses Techniques Particulières) et documents de consultation.' },
  { title: 'Supervision des travaux et réception', description: 'Suivi de chantier, réunions de coordination, levée des réserves et constitution du DOE.' },
  { title: 'Accompagnement réglementaire', description: 'Accessibilité PMR, sécurité incendie, normes électriques NFC 15-100, dossiers d’autorisation.' },
];

const methodologie = [
  { index: '01', title: 'Phase d’audit et diagnostic', description: 'Visite de site, relevés techniques, analyse des contraintes et opportunités. Remise d’un rapport de diagnostic avec préconisations et estimation budgétaire.' },
  { index: '02', title: 'Conception et consultation', description: 'Élaboration des dossiers techniques, rédaction des CCTP, lancement de la consultation des entreprises et analyse des offres.' },
  { index: '03', title: 'Pilotage de chantier', description: 'Réunions de coordination hebdomadaires, suivi du planning et du budget, validation des situations de travaux, gestion des aléas.' },
  { index: '04', title: 'Réception et livraison', description: 'Organisation des opérations de réception, levée des réserves, constitution du dossier des ouvrages exécutés (DOE) et accompagnement post-livraison.' },
];

export default function ConseilPilotagePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-[clamp(48px,6vw,88px)] pb-[clamp(28px,3.5vw,48px)]">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <Link href="/services">Services</Link>
            <span className="sep">/</span>
            <span>Conseil &amp; Pilotage TCE</span>
          </div>

          <div className="eyebrow mb-[22px]">
            <b>01</b> &nbsp;Service
          </div>

          <h1 className="font-display font-medium text-[clamp(38px,5.4vw,72px)] leading-[1.02] tracking-[-0.022em]">
            Conseil et Pilotage <em className="italic text-laiton-deep">TCE</em>.
          </h1>

          <p className="mt-[clamp(20px,2.5vw,32px)] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-ink-2 max-w-[55ch]">
            Maîtrise d&apos;œuvre d&apos;exécution pour vos projets de construction, rénovation et aménagement. Coordination complète des intervenants et suivi budgétaire.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-[clamp(72px,9vw,140px)]">
        <div className="wrap">
          <div className="max-w-[720px]">
            <h2 className="font-display font-medium text-[clamp(26px,3vw,40px)] tracking-[-0.02em]">
              TCE et maîtrise d&apos;œuvre d&apos;exécution
            </h2>
            <div className="mt-6 text-[clamp(16px,1.4vw,18px)] leading-relaxed text-ink-2 space-y-5">
              <p>
                Vous pilotez un projet de construction, rénovation ou aménagement ? Nos ingénieurs assurent la mission de technicien conseil en environnement (TCE) et coordonnent l&apos;ensemble des intervenants : architectes, bureaux d&apos;études, entreprises de travaux.
              </p>
              <p>
                EOLIYA Ingénierie vous accompagne de la phase de conception jusqu&apos;à la réception des travaux, en garantissant le respect des délais, du budget et des normes en vigueur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-[clamp(72px,9vw,140px)] bg-card border-t border-b border-line">
        <div className="wrap">
          <div className="eyebrow mb-5">
            <b>Nos prestations</b>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-[clamp(32px,4vw,52px)]">
            {prestations.map((prestation, index) => (
              <div key={index} className="bg-paper border border-line p-[clamp(24px,3vw,36px)]">
                <h3 className="font-display font-medium text-[clamp(18px,1.8vw,22px)] tracking-[-0.01em]">
                  {prestation.title}
                </h3>
                <p className="mt-3 text-muted text-[15px] leading-relaxed">
                  {prestation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologie */}
      <section className="py-[clamp(72px,9vw,140px)]">
        <div className="wrap">
          <div className="eyebrow mb-5">
            <b>Notre méthodologie</b>
          </div>
          <h2 className="font-display font-medium text-[clamp(28px,3.6vw,52px)] leading-[1.04] tracking-[-0.02em] max-w-[22ch] mb-[clamp(40px,5vw,64px)]">
            Une approche structurée pour chaque projet
          </h2>

          <div className="border-t border-line">
            {methodologie.map((step) => (
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

      {/* CTA */}
      <CTABand
        eyebrow="Un projet de construction ou rénovation ?"
        title="Confiez le pilotage à nos ingénieurs."
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
