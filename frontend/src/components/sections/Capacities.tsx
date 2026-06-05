'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

interface Capacity {
  index: string;
  title: string;
  description: string;
  href: string;
  image: string;
  note: string;
}

const capacities: Capacity[] = [
  {
    index: '01',
    title: 'Conseil & Pilotage TCE',
    description: 'Maîtrise d’œuvre d’exécution et coordination tous corps d’état de vos projets de construction, rénovation ou aménagement.',
    href: '/services/conseil-pilotage',
    image: '/images/services/svc-tce.png',
    note: 'Chantier TCE, coordination de corps d’état',
  },
  {
    index: '02',
    title: 'Multi-services & Relamping',
    description: 'Maintenance, dépannage et transition LED pour optimiser vos consommations énergétiques jusqu’à 80%.',
    href: '/services/multiservices-relamping',
    image: '/images/services/svc-relamping.jpeg',
    note: 'Relamping LED, plafond tertiaire',
  },
  {
    index: '03',
    title: 'Luminaires sur mesure',
    description: 'Conception et fabrication de solutions d’éclairage techniques adaptées à vos contraintes architecturales et normatives.',
    href: '/services/luminaires-sur-mesure',
    image: '/images/services/svc-luminaire.jpg',
    note: 'Luminaire sur mesure, atelier',
  },
  {
    index: '04',
    title: 'Rénovation & second œuvre',
    description: 'Rénovation complète de bureaux et locaux : peinture, parquet, carrelage, création de sanitaires et gros œuvre, avec un seul interlocuteur de l’étude à la livraison.',
    href: '/services#svc-renovation',
    image: '/images/services/svc-renovation.jpg',
    note: 'Rénovation, parquet à chevrons',
  },
  {
    index: '05',
    title: 'Aménagement & space planning',
    description: 'Optimisation et agencement de vos espaces : space planning, cloisonnement, aménagement de bureaux et d’appartements, pour des lieux fonctionnels et valorisés.',
    href: '/services#svc-amenagement',
    image: '/images/services/svc-amenagement.jpg',
    note: 'Aménagement, space planning',
  },
  {
    index: '06',
    title: 'Équipement médical',
    description: 'Vente et installation d’équipements médicaux pour hôpitaux et cliniques, dans le respect des normes et des contraintes spécifiques aux établissements de santé.',
    href: '/services#svc-medical',
    image: '/images/services/svc-medical.jpg',
    note: 'Salle de soin, équipement médical',
  },
];

export const Capacities: React.FC = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  // Image flottante qui suit le curseur (position: fixed + lerp), fidèle à la référence.
  useEffect(() => {
    const reveal = revealRef.current;
    const rowsWrap = rowsRef.current;
    if (!reveal || !rowsWrap) return;
    if (!window.matchMedia('(min-width: 901px)').matches) return;

    const rows = Array.from(rowsWrap.querySelectorAll<HTMLElement>('[data-cap]'));
    const layers = Array.from(reveal.querySelectorAll<HTMLElement>('.cr-img'));
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    let active = false;

    const loop = () => {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      reveal.style.left = cx + 'px';
      reveal.style.top = cy + 'px';
      if (active) raf = requestAnimationFrame(loop);
    };

    const cleanups: Array<() => void> = [];
    rows.forEach((row) => {
      const id = row.getAttribute('data-cap');
      const onEnter = () => {
        layers.forEach((l) => l.classList.toggle('on', l.getAttribute('data-cap') === id));
        reveal.classList.add('show');
        active = true;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(loop);
      };
      const onMove = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
      const onLeave = () => { reveal.classList.remove('show'); active = false; cancelAnimationFrame(raf); };
      row.addEventListener('pointerenter', onEnter);
      row.addEventListener('pointermove', onMove);
      row.addEventListener('pointerleave', onLeave);
      cleanups.push(() => {
        row.removeEventListener('pointerenter', onEnter);
        row.removeEventListener('pointermove', onMove);
        row.removeEventListener('pointerleave', onLeave);
      });
    });

    return () => { cancelAnimationFrame(raf); cleanups.forEach((c) => c()); };
  }, []);

  return (
    <section className="border-t border-line" id="services">
      <div className="wrap">
        {/* Header */}
        <div className="flex justify-between items-end py-[clamp(40px,5vw,64px)] pb-[clamp(20px,2.5vw,30px)] gap-[30px] flex-wrap">
          <h2 className="rv font-display font-medium text-[clamp(28px,3.4vw,46px)] tracking-[-0.02em] max-w-[16ch]">
            <span className="idx text-[0.55em] align-[0.6em]">02 · </span>
            Nos domaines d&apos;intervention
          </h2>
          <p className="rv d1 max-w-[38ch] text-muted text-[15.5px]">
            Six métiers complémentaires pour concevoir, piloter et optimiser l&apos;ensemble de vos projets d&apos;ingénierie du bâtiment.
          </p>
        </div>

        {/* List */}
        <div ref={rowsRef} className="relative">
          {capacities.map((cap, index) => (
            <Link
              key={cap.index}
              href={cap.href}
              data-cap={index + 1}
              className="rv group grid grid-cols-[64px_1fr_auto] max-md:grid-cols-[40px_1fr_auto] items-center gap-[clamp(20px,3vw,48px)] py-[clamp(28px,3vw,42px)] px-1 border-t border-line relative cursor-pointer transition-[padding-left] duration-500 ease-editorial hover:pl-[22px] last:border-b"
            >
              <div className="font-mono text-[13px] text-laiton-deep tracking-[0.05em]">
                {cap.index}
              </div>
              <div>
                <h3 className="font-display font-medium text-[clamp(24px,2.8vw,40px)] tracking-[-0.018em]">
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

      {/* Image flottante révélée au survol (desktop) — fixed, suit le curseur */}
      <div ref={revealRef} className="cap-reveal" aria-hidden="true">
        {capacities.map((cap, index) => (
          <div
            key={cap.index}
            className="cr-img"
            data-cap={index + 1}
            style={{
              backgroundImage: `url('${cap.image}')`,
              backgroundColor: '#0c0e12',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="ph-scrim" />
            <div className="ph-note">{cap.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capacities;
