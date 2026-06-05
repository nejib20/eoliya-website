import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { label: 'Conseil & Pilotage TCE', href: '/services#svc-tce' },
  { label: 'Multi-services & Relamping', href: '/services#svc-relamping' },
  { label: 'Luminaires sur mesure', href: '/services#svc-luminaires' },
  { label: 'Renovation & second oeuvre', href: '/services#svc-renovation' },
  { label: 'Amenagement & space planning', href: '/services#svc-amenagement' },
  { label: 'Equipement medical', href: '/services#svc-medical' },
];

const links = [
  { label: 'Accueil', href: '/' },
  { label: 'A propos', href: '/a-propos' },
  { label: 'Projets', href: '/projets' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const legal = [
  { label: 'Mentions legales', href: '/mentions-legales' },
  { label: 'Confidentialite', href: '/confidentialite' },
  { label: 'CGV', href: '/cgv' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-night-2 text-night-ink/[0.66] py-section pb-7.5">
      <div className="wrap">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Image
              src="/images/eoliya-logo-blanc.png"
              alt="EOLIYA Ingenierie"
              width={180}
              height={46}
              className="h-[46px] w-auto"
            />
            <p className="mt-5.5 text-sm leading-relaxed max-w-[32ch] text-night-ink/[0.55]">
              Expert en ingenierie du batiment depuis 2009. Pilotage TCE, relamping LED, luminaires sur mesure, renovation, amenagement et equipement medical, de l'etude a la livraison.
            </p>
            <a
              href="https://linkedin.com/company/eoliya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 font-mono text-[11px] tracking-[0.1em] text-laiton-light whitespace-nowrap"
            >
              LinkedIn
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-night-ink/[0.4] font-medium">
              Services
            </h4>
            <ul className="mt-4.5 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-night-ink/[0.7] hover:text-laiton-light transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-night-ink/[0.4] font-medium">
              Navigation
            </h4>
            <ul className="mt-4.5 flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-night-ink/[0.7] hover:text-laiton-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-night-ink/[0.4] font-medium">
              Contact
            </h4>
            <ul className="mt-4.5 flex flex-col gap-3">
              <li>
                <a
                  href="tel:0134223012"
                  className="text-sm text-night-ink/[0.7] hover:text-laiton-light transition-colors duration-300"
                >
                  01 34 22 30 12
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@eoliya.com"
                  className="text-sm text-night-ink/[0.7] hover:text-laiton-light transition-colors duration-300"
                >
                  contact@eoliya.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=131+Boulevard+Pereire+75017+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-night-ink/[0.7] hover:text-laiton-light transition-colors duration-300"
                >
                  131 Bd Pereire, 75017 Paris
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Big Wordmark */}
        <div
          className="mt-[clamp(40px,5vw,70px)] text-center font-display font-medium text-[clamp(70px,20vw,320px)] leading-[0.8] tracking-[-0.03em] text-night-ink/[0.05] select-none"
          aria-hidden="true"
        >
          EOLIYA
        </div>

        {/* Bottom */}
        <div className="mt-[clamp(48px,6vw,80px)] pt-6 border-t border-line-night flex flex-col sm:flex-row justify-between items-center gap-4.5 flex-wrap font-mono text-[11px] tracking-[0.08em] text-night-ink/[0.45]">
          <span>© {currentYear} EOLIYA Ingenierie. Tous droits reserves</span>
          <div className="flex gap-5.5 flex-wrap">
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-laiton-light transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
