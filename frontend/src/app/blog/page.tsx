import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABand } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Blog — EOLIYA Ingenierie | Le journal d\'EOLIYA',
  description: 'Regards d\'experts sur l\'ingenierie du batiment, la transition energetique et la vie de nos chantiers.',
};

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

const featuredArticle: Article = {
  slug: 'decret-tertiaire',
  title: 'Decret tertiaire : transformer une obligation en economies',
  excerpt: '40% de consommation en moins d\'ici 2030. Derriere la contrainte reglementaire se cachent des leviers tres concrets, du relamping LED au pilotage technique, pour reduire la facture sans tout reconstruire.',
  category: 'Transition energetique',
  date: '28 mai 2026',
  readTime: '3 min de lecture',
};

const articles: Article[] = [
  {
    slug: 'relamping-led',
    title: 'Relamping LED : bien plus qu\'un changement d\'ampoule',
    excerpt: 'Le relamping ne se resume pas a remplacer des sources. Pense comme un projet, il combine economies d\'energie, confort visuel et maintenance allegee sur la duree.',
    category: 'Eclairage',
    date: '14 mai 2026',
    readTime: '3 min',
  },
  {
    slug: 'decret-bacs',
    title: 'Decret BACS : pourquoi piloter, c\'est deja economiser',
    excerpt: 'La GTB devient obligatoire par paliers de puissance. Au-dela de la conformite, automatiser le chauffage, la ventilation et l\'eclairage fait baisser la consommation des la premiere annee.',
    category: 'Pilotage',
    date: '2 mai 2026',
    readTime: '3 min',
  },
  {
    slug: 'renovation-site-occupe',
    title: 'Renover un site tertiaire sans interrompre l\'activite',
    excerpt: 'Travailler en site occupe impose un phasage millimetre. Un interlocuteur unique et une coordination tous corps d\'etat evitent les arrets d\'exploitation.',
    category: 'Renovation',
    date: '22 avril 2026',
    readTime: '2 min',
  },
  {
    slug: 'space-planning',
    title: 'Space planning : amenager pour la performance et le bien-etre',
    excerpt: 'Densite, acoustique, lumiere, flexibilite. L\'agencement d\'un espace de travail se concoit comme un systeme ou chaque metre carre sert l\'usage et le confort.',
    category: 'Amenagement',
    date: '9 avril 2026',
    readTime: '2 min',
  },
  {
    slug: 'equipement-medical',
    title: 'Equipement medical : concevoir des espaces de sante conformes',
    excerpt: 'Hygiene, fluides, normes electriques, ergonomie des soins. L\'installation d\'equipements de sante conjugue exigences techniques et realite du terrain.',
    category: 'Sante',
    date: '27 mars 2026',
    readTime: '3 min',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-[clamp(48px,6vw,88px)] pb-[clamp(28px,3.5vw,48px)]">
        <div className="wrap">
          <div className="flex items-center gap-2 text-sm text-muted mb-[22px]">
            <Link href="/" className="hover:text-ink transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-ink">Blog</span>
          </div>

          <div className="eyebrow mb-[22px]">
            <b>04</b> &nbsp;Blog
          </div>

          <h1 className="font-display font-medium text-[clamp(38px,5.4vw,72px)] leading-[1.02] tracking-[-0.022em]">
            Le journal <em className="italic text-laiton-deep">d&apos;EOLIYA</em>.
          </h1>

          <p className="mt-[clamp(20px,2.5vw,32px)] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-ink-2 max-w-[60ch]">
            Regards d&apos;experts sur l&apos;ingenierie du batiment, la transition energetique et la vie de nos chantiers.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="border-t border-b border-line py-[clamp(40px,5vw,72px)]">
        <div className="wrap">
          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="grid grid-cols-[auto_1fr] max-md:grid-cols-1 gap-[clamp(28px,5vw,72px)] items-start group"
          >
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-laiton-deep writing-mode-vertical-rl transform rotate-180 self-stretch pt-1 max-md:writing-mode-horizontal max-md:transform-none">
              A la une
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-laiton-deep">
                {featuredArticle.category}
              </div>
              <h2 className="font-display font-medium text-[clamp(30px,4.4vw,60px)] leading-[1.04] tracking-[-0.022em] mt-4 max-w-[18ch] transition-colors duration-300 group-hover:text-laiton-deep">
                {featuredArticle.title}
              </h2>
              <p className="mt-[22px] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-ink-2 max-w-[60ch]">
                {featuredArticle.excerpt}
              </p>
              <div className="mt-[22px] font-mono text-[11.5px] tracking-[0.06em] text-muted flex gap-4">
                <span>{featuredArticle.date}</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <span className="tlink mt-7 inline-block">
                Lire l&apos;article <i>→</i>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-[clamp(16px,3vw,40px)] pb-[clamp(48px,6vw,96px)]">
        <div className="wrap">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block p-[clamp(28px,3vw,44px)] border-b border-r border-line last:border-r-0 transition-colors duration-[350ms] ease-editorial hover:bg-paper-2 group [&:nth-child(3n)]:border-r-0 max-lg:[&:nth-child(3n)]:border-r max-lg:[&:nth-child(2n)]:border-r-0 max-md:border-r-0"
                style={{ borderTop: 'none' }}
              >
                <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-laiton-deep">
                  {article.category}
                </div>
                <h3 className="font-display font-medium text-[clamp(21px,2vw,26px)] leading-[1.14] tracking-[-0.015em] mt-[14px]">
                  {article.title}
                </h3>
                <p className="mt-[14px] text-muted text-[14.5px] leading-[1.62]">
                  {article.excerpt}
                </p>
                <div className="mt-[22px] flex items-center justify-between gap-3">
                  <span className="font-mono text-[10.5px] tracking-[0.05em] text-faint">
                    {article.date} · {article.readTime}
                  </span>
                  <span className="font-mono text-[15px] text-laiton-deep opacity-0 -translate-x-1.5 transition-all duration-[350ms] ease-editorial group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        eyebrow="Une question technique ?"
        title="Nos ingenieurs vous repondent."
        primaryCta={{
          label: 'Poser une question',
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
