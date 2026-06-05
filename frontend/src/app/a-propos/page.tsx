'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SpotlightImage } from '@/components/ui/SpotlightImage';

// Note: Metadata moved to layout.tsx or generateMetadata for client components

const engagements = [
  {
    index: '01',
    title: 'Expertise reconnue',
    description: 'Plus de 150 projets menés à bien pour des clients de référence comme le Conseil d\'État, Veepee, Barrière ou l\'Institut de France.',
  },
  {
    index: '02',
    title: 'Solutions clés en main',
    description: 'De l\'audit initial à la livraison finale, nous pilotons votre projet avec méthode et rigueur pour garantir le respect des délais et du budget.',
  },
  {
    index: '03',
    title: 'Innovation & performance',
    description: 'Nous développons des solutions sur mesure adaptées à vos contraintes, avec un focus sur l\'efficacité énergétique et la durabilité.',
  },
];

const metiers = [
  { index: '01', title: 'Conseil & Pilotage TCE', subtitle: 'Maîtrise d\'œuvre et coordination tous corps d\'état', href: '/services#svc-tce' },
  { index: '02', title: 'Multi-services & Relamping', subtitle: 'Maintenance et transition LED', href: '/services#svc-relamping' },
  { index: '03', title: 'Luminaires sur mesure', subtitle: 'Conception et fabrication d\'éclairage', href: '/services#svc-luminaires' },
  { index: '04', title: 'Rénovation & second œuvre', subtitle: 'Rénovation complète, interlocuteur unique', href: '/services#svc-renovation' },
  { index: '05', title: 'Aménagement & space planning', subtitle: 'Optimisation et agencement des espaces', href: '/services#svc-amenagement' },
  { index: '06', title: 'Équipement médical', subtitle: 'Vente et installation pour la santé', href: '/services#svc-medical' },
];

const clients = [
  { name: 'Conseil d\'État', logo: '/images/clients-real/conseil-detat.png' },
  { name: 'Institut de France', logo: '/images/clients-real/institut-de-france.png' },
  { name: 'VINCI Energies', logo: '/images/clients-real/vinci-energies.png' },
  { name: 'Veepee', logo: '/images/clients-real/veepee.png' },
  { name: 'Barrière', logo: '/images/clients-real/barriere.png' },
  { name: 'Dentsu Group', logo: '/images/clients-real/dentsu.png' },
  { name: 'TTI Fayat', logo: '/images/clients-real/tti-fayat.png' },
  { name: 'Équipe de France, FFF', logo: '/images/clients-real/france-fff.png' },
  { name: 'Fichet', logo: '/images/clients-real/fichet.png' },
  { name: 'Finsecur', logo: '/images/clients-real/finsecur.png' },
  { name: 'SDEL', logo: '/images/clients-real/sdel.png' },
  { name: 'Weetec', logo: '/images/clients-real/weetec.png' },
  { name: 'Guinier SAS', logo: '/images/clients-real/guinier.png' },
  { name: 'Phibor Entreprises', logo: '/images/clients-real/phibor.png' },
  { name: 'Azureva', logo: '/images/clients-real/azureva.png' },
  { name: 'E.Leclerc', logo: '/images/clients-real/e-leclerc.png' },
];

export default function AProposPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb rv">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>À propos</span>
          </div>
          <div className="eyebrow rv" style={{ marginTop: '22px' }}>
            <b>01</b> &nbsp;À propos
          </div>
          <h1 className="rv d1">
            Au service de vos projets <em>depuis 2009</em>.
          </h1>
          <p className="intro rv d2">
            Bureau d&apos;études et conseil TCE en ingénierie du bâtiment, EOLIYA est le
            partenaire de confiance des entreprises, collectivités et gestionnaires
            d&apos;établissements recevant du public. Nous conjuguons réactivité, expertise
            technique et tenue des délais.
          </p>
        </div>
      </section>

      {/* Notre Histoire - avec sticky left */}
      <section className="about-story">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-[clamp(36px,5vw,90px)] py-[clamp(64px,8vw,120px)] items-start">
            <div className="lg:sticky lg:top-[110px] rv">
              <div className="eyebrow">
                <b>Notre histoire</b>
              </div>
              <h2 className="font-display font-medium text-[clamp(28px,3.4vw,46px)] leading-[1.05] tracking-[-0.02em] mt-[26px]">
                Une expertise <em className="italic text-laiton-deep">construite</em> dans la durée.
              </h2>
            </div>
            <div className="space-y-[22px] rv d1">
              <p className="text-ink-2 text-[clamp(16.5px,1.4vw,18.5px)] leading-[1.7] max-w-[60ch]">
                Fondée en 2009, EOLIYA Ingénierie s&apos;est constituée au fil des années comme
                un acteur de l&apos;ingénierie du bâtiment, au service d&apos;une clientèle exigeante
                d&apos;entreprises et d&apos;institutions. De la conception à la réalisation, notre
                métier consiste à piloter, optimiser et concevoir des projets techniques avec
                méthode et rigueur.
              </p>
              <p className="text-ink-2 text-[clamp(16.5px,1.4vw,18.5px)] leading-[1.7] max-w-[60ch]">
                Cette continuité a forgé une connaissance fine des contraintes du tertiaire,
                de l&apos;industrie et des établissements recevant du public. Elle nous permet
                d&apos;accompagner chaque projet avec la même exigence, qu&apos;il s&apos;agisse d&apos;un
                pilotage tous corps d&apos;état, d&apos;une transition énergétique ou de la conception
                d&apos;une solution sur mesure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Approche - markup canonique .engage + ancre #approche */}
      <section className="engage" id="approche">
        <div className="wrap">
          <div className="grid">
            <div className="left rv">
              <div className="eyebrow"><b>Notre approche</b></div>
              <h2>Trois engagements au cœur de chaque projet.</h2>
              <p>
                Une méthode constante, de l&apos;audit initial à la livraison finale, pour garantir
                la qualité, les délais et la maîtrise du budget.
              </p>
            </div>
            <div className="points">
              {engagements.map((eng, i) => (
                <div className={`pt rv${i > 0 ? ` d${i}` : ''}`} key={eng.index}>
                  <div className="pidx">{eng.index}</div>
                  <div>
                    <h3>{eng.title}</h3>
                    <p>{eng.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="about-stats">
        <div className="wrap">
          <div className="grid grid-cols-2 lg:grid-cols-4 rv">
            <div className="stat-item">
              <div className="n">2009</div>
              <div className="l">Année de création</div>
            </div>
            <div className="stat-item">
              <div className="n">150<small>+</small></div>
              <div className="l">Projets réalisés</div>
            </div>
            <div className="stat-item">
              <div className="n">80<small>%</small></div>
              <div className="l">D&apos;économies LED</div>
            </div>
            <div className="stat-item">
              <div className="n">30<small>+</small></div>
              <div className="l">Clients grands comptes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Bureau d'Études */}
      <section className="about-bureau">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[clamp(36px,5vw,80px)] py-[clamp(64px,8vw,120px)] items-center">
            <div className="rv">
              <div className="eyebrow">
                <b>Le bureau d&apos;études</b>
              </div>
              <h2 className="font-display font-medium text-[clamp(26px,3.2vw,44px)] leading-[1.06] tracking-[-0.02em] mt-6">
                Une structure établie, <em className="italic text-laiton-deep">une équipe qualifiée</em>.
              </h2>
              <p className="mt-6 text-ink-2 text-[clamp(16px,1.4vw,18px)] leading-[1.7] max-w-[52ch]">
                Basée à Paris, notre équipe réunit des compétences pluridisciplinaires en
                ingénierie du bâtiment. Nous abordons chaque mission avec le sérieux d&apos;une
                structure établie, et intervenons dans un cadre de garanties et d&apos;assurances
                conforme aux exigences de ce type de projets.
              </p>
              <p className="mt-[22px] text-ink-2 text-[clamp(16px,1.4vw,18px)] leading-[1.7] max-w-[52ch]">
                Cette organisation nous permet d&apos;engager notre responsabilité aux côtés de
                nos clients, et de mener leurs opérations dans la sérénité, du premier échange
                à la livraison.
              </p>
            </div>
            <figure className="lg:order-last rv d1">
              <div className="relative w-full h-[clamp(320px,42vw,540px)] shadow-[0_30px_80px_rgba(12,14,18,0.22)]">
                <SpotlightImage
                  src="/images/bureau-etudes-paris.png"
                  alt="Bureau d'études au crépuscule, vue sur Paris"
                  fill
                  containerClassName="w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  spotlightSize={350}
                  spotlightIntensity={0.4}
                />
              </div>
              <figcaption className="mt-[18px] font-mono text-[11px] tracking-[0.14em] uppercase text-muted flex items-center gap-3">
                <span className="w-[26px] h-px bg-laiton inline-block" />
                Notre bureau d&apos;études, Paris 17e
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Six métiers */}
      <section className="about-metiers">
        <div className="wrap">
          <div className="flex justify-between items-baseline gap-6 flex-wrap mb-[clamp(30px,4vw,48px)] rv">
            <h2 className="font-display font-medium text-[clamp(26px,3vw,42px)] tracking-[-0.02em]">
              Six métiers, <em className="italic text-laiton-deep">une exigence</em> d&apos;ingénierie.
            </h2>
            <Link href="/services" className="tlink">
              Voir tous nos services <i>→</i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line rv d1">
            {metiers.map((m) => (
              <Link
                key={m.index}
                href={m.href}
                className="flex items-baseline gap-4 p-[clamp(26px,3vw,38px)] border-r border-b border-line transition-colors duration-[350ms] ease-editorial hover:bg-paper"
              >
                <span className="font-mono text-[12px] tracking-[0.08em] text-laiton-deep pt-1">
                  {m.index}
                </span>
                <span className="font-display font-medium text-[clamp(18px,1.8vw,23px)] tracking-[-0.01em] text-ink">
                  {m.title}
                  <small className="block font-sans font-normal text-[13.5px] text-muted mt-[6px] tracking-normal">
                    {m.subtitle}
                  </small>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ils nous font confiance */}
      <section className="refs">
        <div className="wrap">
          <div className="flex justify-between items-baseline gap-6 flex-wrap mb-[clamp(34px,4vw,52px)] rv">
            <h2 className="font-display font-medium text-[clamp(26px,3vw,42px)] tracking-[-0.02em]">
              Ils nous font confiance
            </h2>
            <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-muted">
              16 références grands comptes · 150+ projets
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-line rv d1">
            {clients.map((client) => (
              <div
                key={client.name}
                className="border-r border-b border-line p-[26px_22px] min-h-[132px] flex items-center justify-center transition-colors duration-[400ms] ease-editorial hover:bg-card group"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={52}
                  className="max-h-[52px] max-w-[80%] w-auto h-auto object-contain grayscale contrast-[0.9] opacity-60 transition-all duration-500 ease-editorial group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band">
        <div className="wrap in">
          <div>
            <div className="eyebrow rv"><b>Un projet ?</b></div>
            <h2 className="rv d1">Parlons de votre projet, réponse sous 24h ouvrées.</h2>
          </div>
          <div className="actions rv d2">
            <Link href="/contact" className="btn on-night">Nous contacter <i>→</i></Link>
            <a href="tel:0134223012" className="tlink" style={{ color: 'var(--night-ink)', borderColor: 'rgba(240,239,233,0.3)' }}>01 34 22 30 12</a>
          </div>
        </div>
      </section>
    </>
  );
}
