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
}

/**
 * Bande CTA sombre avec halo radial laiton — fidèle à la référence (pages.css .cta-band).
 */
export const CTABand: React.FC<CTABandProps> = ({
  eyebrow = 'Un projet ?',
  title,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="cta-band">
      <div className="wrap in">
        <div>
          <div className="eyebrow rv">
            <b>{eyebrow}</b>
          </div>
          <h2 className="rv d1">{title}</h2>
        </div>

        <div className="actions rv d2">
          {primaryCta && (
            <Link href={primaryCta.href} className="btn on-night">
              {primaryCta.label} <i>→</i>
            </Link>
          )}
          {secondaryCta && (
            <a href={secondaryCta.href} className="tlink on-night">
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABand;
