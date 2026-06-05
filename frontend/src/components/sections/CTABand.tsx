'use client';

import React from 'react';
import Link from 'next/link';

interface CTABandProps {
  eyebrow?: string;
  title: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  dark?: boolean;
}

export const CTABand: React.FC<CTABandProps> = ({
  eyebrow = 'Pret a demarrer ?',
  title,
  primaryCta,
  secondaryCta,
  dark = true,
}) => {
  return (
    <section
      className={`py-[clamp(48px,6vw,88px)] ${
        dark ? 'bg-night text-night-ink' : 'bg-card text-ink border-t border-b border-line'
      }`}
    >
      <div className="wrap">
        <div className="flex justify-between items-center gap-10 flex-wrap">
          <div>
            <div className={`eyebrow ${dark ? 'text-night-muted' : ''}`}>
              <b>{eyebrow}</b>
            </div>
            <h2 className="font-display font-medium text-[clamp(26px,3.2vw,44px)] tracking-[-0.02em] mt-4 max-w-[18ch]">
              {title}
            </h2>
          </div>

          <div className="flex gap-6.5 items-center flex-wrap">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className={`btn ${dark ? 'on-night' : ''}`}
              >
                {primaryCta.label} <i>→</i>
              </Link>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className={`tlink ${dark ? 'on-night' : ''}`}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
