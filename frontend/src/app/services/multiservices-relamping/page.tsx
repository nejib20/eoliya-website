import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABand } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Multi-services et Relamping LED — EOLIYA Ingenierie',
  description: 'Maintenance electrique, depannage 24/7 et solutions de relamping LED haute performance. Jusqu\'a 80% d\'economies d\'energie garanties.',
};

const avantages = [
  { title: 'Jusqu\'a 80% d\'economies', description: 'Reduction drastique de votre facture d\'electricite liee a l\'eclairage.' },
  { title: 'Duree de vie x5', description: 'Les LED durent 50 000h contre 10 000h pour les tubes fluocompacts.' },
  { title: 'Qualite d\'eclairage', description: 'Rendu des couleurs optimal, pas de scintillement, allumage instantane.' },
  { title: 'Maintenance reduite', description: 'Moins de pannes, moins d\'interventions, moins de gestion au quotidien.' },
];

const prestations = [
  { title: 'Depannage electrique 24/7', description: 'Intervention rapide pour tous types de pannes electriques : disjonctions, coupures, defauts d\'eclairage. Hotline disponible pour nos clients sous contrat.' },
  { title: 'Mise aux normes des installations', description: 'Diagnostic de conformite NFC 15-100, mise en securite des tableaux electriques, mise aux normes des circuits et protections.' },
  { title: 'Remplacement par LED', description: 'Audit d\'eclairage, calculs photometriques, fourniture et pose de luminaires LED, gestion des dechets (DEEE). ROI moyen : 2 a 3 ans.' },
  { title: 'Contrats de maintenance sur mesure', description: 'Maintenance preventive programmee, interventions correctives illimitees, gestion du parc de luminaires, reporting mensuel.' },
];

const stats = [
  { value: '80%', label: 'Economies d\'energie moyennes' },
  { value: '2-3 ans', label: 'Retour sur investissement' },
  { value: '50 000h', label: 'Duree de vie LED' },
];

export default function MultiservicesRelampingPage() {
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
            <span className="text-ink">Relamping LED</span>
          </div>

          <div className="eyebrow mb-[22px]">
            <b>02</b> &nbsp;Service
          </div>

          <h1 className="font-display font-medium text-[clamp(38px,5.4vw,72px)] leading-[1.02] tracking-[-0.022em]">
            Multi-services et <em className="italic text-laiton-deep">Relamping LED</em>.
          </h1>

          <p className="mt-[clamp(20px,2.5vw,32px)] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-ink-2 max-w-[55ch]">
            Maintenance corrective et preventive de vos installations electriques, CVC et systemes de securite. Transition energetique LED avec economies garanties.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-[clamp(72px,9vw,140px)]">
        <div className="wrap">
          <div className="max-w-[720px]">
            <h2 className="font-display font-medium text-[clamp(26px,3vw,40px)] tracking-[-0.02em]">
              Maintenance et transition LED
            </h2>
            <div className="mt-6 text-[clamp(16px,1.4vw,18px)] leading-relaxed text-ink-2 space-y-5">
              <p>
                EOLIYA intervient en maintenance corrective et preventive sur vos installations electriques, CVC et systemes de securite. Nous accompagnons egalement votre transition energetique grace a nos solutions de relamping LED performantes.
              </p>
              <p>
                Nos contrats de maintenance sur mesure s&apos;adaptent a vos besoins specifiques : depannage 24/7, interventions programmees, gestion du parc de luminaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-[clamp(72px,9vw,140px)] bg-card border-t border-b border-line">
        <div className="wrap">
          <div className="eyebrow mb-5">
            <b>Avantages du relamping LED</b>
          </div>
          <h2 className="font-display font-medium text-[clamp(28px,3.6vw,52px)] leading-[1.04] tracking-[-0.02em] max-w-[22ch] mb-[clamp(40px,5vw,64px)]">
            Des economies mesurables et durables
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((avantage, index) => (
              <div key={index} className="bg-paper border border-line p-[clamp(24px,3vw,36px)]">
                <h3 className="font-display font-medium text-[clamp(18px,1.8vw,22px)] tracking-[-0.01em]">
                  {avantage.title}
                </h3>
                <p className="mt-3 text-muted text-[15px] leading-relaxed">
                  {avantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-[clamp(72px,9vw,140px)]">
        <div className="wrap">
          <div className="eyebrow mb-5">
            <b>Nos prestations</b>
          </div>
          <h2 className="font-display font-medium text-[clamp(28px,3.6vw,52px)] leading-[1.04] tracking-[-0.02em] max-w-[22ch] mb-[clamp(40px,5vw,64px)]">
            Services de maintenance et relamping
          </h2>

          <div className="border-t border-line">
            {prestations.map((prestation, index) => (
              <div key={index} className="py-[clamp(24px,3vw,38px)] border-b border-line">
                <div className="flex gap-[clamp(20px,3vw,48px)] items-start">
                  <span className="font-mono text-sm text-laiton-deep tracking-[0.05em] flex-none mt-1">0{index + 1}</span>
                  <div>
                    <h3 className="font-display font-medium text-[clamp(21px,2.2vw,28px)] tracking-[-0.01em]">
                      {prestation.title}
                    </h3>
                    <p className="mt-2.5 text-ink-2 text-[clamp(15px,1.3vw,17px)] leading-relaxed max-w-[56ch]">
                      {prestation.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="py-[clamp(72px,9vw,140px)] bg-night text-paper">
        <div className="wrap">
          <div className="eyebrow mb-5 text-laiton">
            <b>Retour sur investissement</b>
          </div>
          <h2 className="font-display font-medium text-[clamp(28px,3.6vw,52px)] leading-[1.04] tracking-[-0.02em] max-w-[24ch] mb-[clamp(40px,5vw,64px)]">
            Calculez vos economies potentielles
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-[clamp(48px,6vw,80px)] font-medium text-laiton tracking-[-0.02em]">
                  {stat.value}
                </div>
                <div className="text-paper/70 text-[clamp(14px,1.2vw,16px)] mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-paper/80 text-[clamp(16px,1.4vw,18px)] leading-relaxed max-w-[48ch] mx-auto mb-8">
            Un batiment de 1000 m² peut economiser jusqu&apos;a 15 000€/an sur sa facture d&apos;eclairage
          </p>

          <div className="text-center">
            <Link
              href="/contact"
              className="btn bg-laiton text-night hover:bg-laiton-deep"
            >
              Demander un audit gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        eyebrow="Pret a reduire vos couts energetiques ?"
        title="Nos ingenieurs realisent un audit gratuit de votre installation."
        primaryCta={{
          label: 'Demander un audit',
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
