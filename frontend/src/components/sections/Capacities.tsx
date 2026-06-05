'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Capacity {
  index: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

interface MousePosition {
  x: number;
  y: number;
}

const capacities: Capacity[] = [
  {
    index: '01',
    title: 'Conseil & Pilotage TCE',
    description: 'Maitrise d\'oeuvre d\'execution et coordination tous corps d\'etat de vos projets de construction, renovation ou amenagement.',
    href: '/services/conseil-pilotage',
    image: '/images/services/pilotage-projet.jpg',
  },
  {
    index: '02',
    title: 'Multi-services & Relamping',
    description: 'Maintenance, depannage et transition LED pour optimiser vos consommations energetiques jusqu\'a 80%.',
    href: '/services/multiservices-relamping',
    image: '/images/services/medical.jpg',
  },
  {
    index: '03',
    title: 'Luminaires sur mesure',
    description: 'Conception et fabrication de solutions d\'eclairage techniques adaptees a vos contraintes architecturales et normatives.',
    href: '/services/luminaires-sur-mesure',
    image: '/images/services/conseil-pilotage.jpg',
  },
  {
    index: '04',
    title: 'Renovation & second oeuvre',
    description: 'Renovation complete de bureaux et locaux : peinture, parquet, carrelage, creation de sanitaires et gros oeuvre, avec un seul interlocuteur de l\'etude a la livraison.',
    href: '/services#svc-renovation',
    image: '/images/services/relamping.jpg',
  },
  {
    index: '05',
    title: 'Amenagement & space planning',
    description: 'Optimisation et agencement de vos espaces : space planning, cloisonnement, amenagement de bureaux et d\'appartements, pour des lieux fonctionnels et valorises.',
    href: '/services#svc-amenagement',
    image: '/images/services/renovation.jpg',
  },
  {
    index: '06',
    title: 'Equipement medical',
    description: 'Vente et installation d\'equipements medicaux pour hopitaux et cliniques, dans le respect des normes et des contraintes specifiques aux etablissements de sante.',
    href: '/services#svc-medical',
    image: '/images/services/luminaires.jpg',
  },
];

export const Capacities: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse position relative to viewport
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    // Calculate mouse position as percentage within the container
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({ x, y });
  }, []);

  // Calculate image container transform based on mouse position
  // The image follows the cursor within its movement range
  const getImageTransform = () => {
    // Movement range: image can move within a zone (larger values = more pronounced effect)
    const maxMoveX = 120; // Max horizontal movement in pixels
    const maxMoveY = 80; // Max vertical movement in pixels

    // Calculate offset from center (mouse position 0-1 maps to -1 to 1)
    const offsetX = (mousePosition.x - 0.5) * 2 * maxMoveX;
    const offsetY = (mousePosition.y - 0.5) * 2 * maxMoveY;

    return `translate(${offsetX}px, ${offsetY}px)`;
  };

  return (
    <section className="border-t border-line" id="services">
      <div className="wrap">
        {/* Header */}
        <div className="flex justify-between items-end py-[clamp(40px,5vw,64px)] pb-[clamp(20px,2.5vw,30px)] gap-[30px] flex-wrap">
          <h2 className="font-display font-medium text-[clamp(28px,3.4vw,46px)] tracking-[-0.02em] max-w-[16ch]">
            <span className="idx text-[0.55em] align-[0.6em]">02 · </span>
            Nos domaines d&apos;intervention
          </h2>
          <p className="max-w-[38ch] text-muted text-[15.5px]">
            Six metiers complementaires pour concevoir, piloter et optimiser l&apos;ensemble de vos projets d&apos;ingenierie du batiment.
          </p>
        </div>

        {/* List with hover image */}
        <div
          ref={containerRef}
          className="relative"
          onMouseMove={handleMouseMove}
        >
          {/* Hover Image - floats and follows cursor */}
          <div
            className="hidden lg:block absolute right-[40px] top-0 w-[380px] h-[280px] overflow-hidden pointer-events-none z-50"
            style={{
              opacity: hoveredIndex !== null ? 1 : 0,
              top: hoveredIndex !== null ? `${(hoveredIndex * 120) + 40}px` : '40px',
              transform: getImageTransform(),
              transition: 'opacity 0.4s ease, top 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s cubic-bezier(0.33, 1, 0.68, 1)'
            }}
          >
            {capacities.map((cap, index) => (
              <div
                key={cap.index}
                className="absolute inset-0"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: 'opacity 0.4s ease'
                }}
              >
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  className="object-cover"
                  sizes="380px"
                />
              </div>
            ))}
          </div>

          {/* Service items */}
          {capacities.map((cap, index) => (
            <Link
              key={cap.index}
              href={cap.href}
              className="group grid grid-cols-[64px_1fr_auto] max-md:grid-cols-[40px_1fr_auto] items-center gap-[clamp(20px,3vw,48px)] py-[clamp(28px,3vw,42px)] px-1 border-t border-line relative cursor-pointer transition-[padding-left,background-color] duration-500 ease-editorial hover:pl-[22px] hover:bg-card/50 last:border-b"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="font-mono text-[13px] text-laiton-deep tracking-[0.05em]">
                {cap.index}
              </div>
              <div className="lg:max-w-[calc(100%-420px)]">
                <h3 className="font-display font-medium text-[clamp(24px,2.8vw,40px)] tracking-[-0.018em] transition-transform duration-500 ease-editorial">
                  {cap.title}
                </h3>
                <p className="mt-2.5 text-muted text-[15px] max-w-[56ch]">
                  {cap.description}
                </p>
              </div>
              <div className="font-mono text-[22px] text-ink opacity-25 transition-all duration-500 ease-editorial group-hover:opacity-100 group-hover:translate-x-1">
                →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capacities;
