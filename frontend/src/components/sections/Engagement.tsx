'use client';

import React from 'react';
import Link from 'next/link';

interface Pillar {
  index: string;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    index: '01',
    title: 'Reactivite',
    description: 'Une equipe de proximite qui intervient rapidement sur vos urgences et s\'adapte a vos contraintes operationnelles.',
  },
  {
    index: '02',
    title: 'Expertise',
    description: 'Maitrise des normes ERP, des reglementations thermiques et electriques, et des systemes de gestion technique du batiment.',
  },
  {
    index: '03',
    title: 'Interlocuteur unique',
    description: 'Un chef de projet dedie pilote l\'ensemble des corps d\'etat. Vous n\'avez qu\'un contact, nous coordonnons tout.',
  },
  {
    index: '04',
    title: 'Engagement resultats',
    description: 'Delais tenus, budgets maitrises, economies energetiques garanties. Nos engagements sont contractuels.',
  },
];

export const Engagement: React.FC = () => {
  return (
    <section className="py-[clamp(72px,9vw,140px)] bg-card border-t border-b border-line">
      <div className="wrap">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-[clamp(40px,6vw,100px)] items-start">
          {/* Left: Sticky */}
          <div className="lg:sticky lg:top-[120px]">
            <div className="eyebrow">
              <b>Nos engagements</b>
            </div>

            <h2 className="font-display font-medium text-[clamp(28px,3.6vw,52px)] leading-[1.04] tracking-[-0.02em] mt-5 max-w-[18ch]">
              Un partenariat fonde sur la <em className="italic text-laiton-deep">confiance</em>
            </h2>

            <p className="mt-[clamp(22px,2.5vw,34px)] text-muted text-[clamp(16px,1.3vw,18px)] leading-relaxed max-w-[44ch]">
              Depuis plus de 15 ans, nous batissons des relations durables avec nos clients. Notre methode allie rigueur, transparence et ecoute pour repondre aux enjeux de chaque projet.
            </p>

            <Link href="/contact" className="mt-8 tlink">
              Discutons de votre projet <i>→</i>
            </Link>
          </div>

          {/* Right: Pillars */}
          <div className="border-t border-line">
            {pillars.map((pillar) => (
              <div
                key={pillar.index}
                className="py-[clamp(24px,3vw,38px)] border-b border-line"
              >
                <div className="flex gap-[clamp(20px,2.5vw,36px)] items-start">
                  <span className="font-mono text-sm text-laiton-deep tracking-[0.05em] flex-none mt-1.5">
                    {pillar.index}
                  </span>
                  <div>
                    <h3 className="font-display font-medium text-[clamp(21px,2vw,26px)] tracking-[-0.01em]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-muted text-[15px] leading-relaxed max-w-[48ch]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
