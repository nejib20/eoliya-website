import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABand } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Services — EOLIYA Ingénierie | Conseil TCE, Relamping LED, Luminaires sur mesure',
  description: 'Six métiers complémentaires : conseil et pilotage TCE, multi-services et relamping LED, luminaires sur mesure, rénovation et second œuvre, aménagement et space planning, équipement médical.',
};

interface Cap {
  letter: string;
  title: string;
  desc: string;
}

interface Service {
  id: string;
  idx: string;
  title: string;
  lead: string;
  caps: Cap[];
  cta: string;
  href: string;
  image: string;
  tagnote: string;
}

const services: Service[] = [
  {
    id: 'svc-tce',
    idx: '01 · TCE',
    title: 'Conseil & Pilotage TCE',
    lead: 'Maîtrise d’œuvre d’exécution et coordination tous corps d’état de vos projets de construction, rénovation ou aménagement. Nous pilotons l’ensemble des intervenants pour garantir délais, budget et conformité.',
    caps: [
      { letter: 'a.', title: 'Maîtrise d’œuvre d’exécution', desc: 'Pilotage opérationnel du chantier, de la préparation à la réception.' },
      { letter: 'b.', title: 'Coordination TCE', desc: 'Synchronisation de tous les corps d’état et des sous-traitants.' },
      { letter: 'c.', title: 'Planification & suivi', desc: 'Plannings, points d’avancement et reporting régulier.' },
      { letter: 'd.', title: 'Réception & livraison', desc: 'Levée des réserves et remise des dossiers d’ouvrages exécutés.' },
    ],
    cta: 'Demander un accompagnement',
    href: '/services/conseil-pilotage',
    image: '/images/services/svc-tce.png',
    tagnote: 'Pilotage de chantier',
  },
  {
    id: 'svc-relamping',
    idx: '02 · Relamping',
    title: 'Multi-services & Relamping',
    lead: 'Maintenance, dépannage et transition LED pour fiabiliser vos installations et optimiser vos consommations énergétiques jusqu’à 80%.',
    caps: [
      { letter: 'a.', title: 'Maintenance multitechnique', desc: 'Contrats préventifs et curatifs sur l’ensemble de vos sites.' },
      { letter: 'b.', title: 'Dépannage réactif', desc: 'Interventions rapides, astreinte et service après-vente.' },
      { letter: 'c.', title: 'Audit énergétique', desc: 'Diagnostic des installations et plan d’optimisation chiffré.' },
      { letter: 'd.', title: 'Relamping LED', desc: 'Remplacement des sources, jusqu’à 80% d’économies d’énergie.' },
    ],
    cta: 'Demander un audit',
    href: '/services/multiservices-relamping',
    image: '/images/services/svc-relamping.jpeg',
    tagnote: 'Transition LED',
  },
  {
    id: 'svc-luminaires',
    idx: '03 · Sur mesure',
    title: 'Luminaires sur mesure',
    lead: 'Conception et fabrication de solutions d’éclairage techniques adaptées à vos contraintes architecturales et normatives, pour mettre en lumière vos espaces avec justesse.',
    caps: [
      { letter: 'a.', title: 'Étude photométrique', desc: 'Calculs d’éclairement, uniformité et confort visuel.' },
      { letter: 'b.', title: 'Conception sur mesure', desc: 'Design technique adapté à la géométrie de l’espace.' },
      { letter: 'c.', title: 'Fabrication', desc: 'Production de luminaires spécifiques aux exigences du projet.' },
      { letter: 'd.', title: 'Intégration architecturale', desc: 'Mise en lumière cohérente avec le lieu et son usage.' },
    ],
    cta: 'Concevoir un luminaire',
    href: '/services/luminaires-sur-mesure',
    image: '/images/services/svc-luminaire.jpg',
    tagnote: 'Conception sur mesure',
  },
  {
    id: 'svc-renovation',
    idx: '04 · Second œuvre',
    title: 'Rénovation & second œuvre',
    lead: 'Rénovation complète de bureaux et de locaux, avec un seul interlocuteur de l’étude à la livraison. Nous coordonnons l’ensemble des corps de métier pour un résultat soigné et durable.',
    caps: [
      { letter: 'a.', title: 'Peinture & revêtements', desc: 'Peinture, parquet, carrelage et finitions soignées.' },
      { letter: 'b.', title: 'Sanitaires & plomberie', desc: 'Création et rénovation de sanitaires aux normes.' },
      { letter: 'c.', title: 'Gros œuvre', desc: 'Interventions structurelles et reprises maçonnées.' },
      { letter: 'd.', title: 'Interlocuteur unique', desc: 'Un seul référent, de l’étude à la livraison du chantier.' },
    ],
    cta: 'Demander un devis',
    href: '/contact',
    image: '/images/services/svc-renovation.jpg',
    tagnote: 'Rénovation de locaux',
  },
  {
    id: 'svc-amenagement',
    idx: '05 · Aménagement',
    title: 'Aménagement & space planning',
    lead: 'Optimisation et agencement de vos espaces pour des lieux fonctionnels et valorisés. Nous concevons des plans d’implantation qui servent vos usages et votre image.',
    caps: [
      { letter: 'a.', title: 'Space planning', desc: 'Étude d’implantation et optimisation des surfaces.' },
      { letter: 'b.', title: 'Cloisonnement', desc: 'Cloisons, séparations et traitement acoustique.' },
      { letter: 'c.', title: 'Aménagement de bureaux', desc: 'Agencement des postes, salles et espaces communs.' },
      { letter: 'd.', title: 'Logements', desc: 'Aménagement d’appartements et de locaux d’habitation.' },
    ],
    cta: 'Étudier vos espaces',
    href: '/contact',
    image: '/images/services/svc-amenagement.jpg',
    tagnote: 'Space planning',
  },
  {
    id: 'svc-medical',
    idx: '06 · Médical',
    title: 'Équipement médical',
    lead: 'Vente et installation d’équipements médicaux pour hôpitaux et cliniques, dans le respect des normes et des contraintes propres aux établissements de santé.',
    caps: [
      { letter: 'a.', title: 'Fourniture d’équipements', desc: 'Sélection et vente de matériel médical adapté.' },
      { letter: 'b.', title: 'Installation', desc: 'Mise en service dans le respect des contraintes du site.' },
      { letter: 'c.', title: 'Conformité', desc: 'Respect des normes propres aux établissements de santé.' },
      { letter: 'd.', title: 'Accompagnement', desc: 'Conseil et suivi auprès des équipes hospitalières.' },
    ],
    cta: 'Nous consulter',
    href: '/contact',
    image: '/images/services/svc-medical.jpg',
    tagnote: 'Équipement médical',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero de page */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb rv">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Services</span>
          </div>
          <div className="eyebrow rv" style={{ marginTop: '22px' }}>
            <b>02</b> &nbsp;Domaines d&apos;intervention
          </div>
          <h1 className="rv d1">
            Six métiers, <em>une exigence</em> d&apos;ingénierie.
          </h1>
          <p className="intro rv d2">
            De la maîtrise d&apos;œuvre d&apos;exécution à la conception de luminaires techniques, nous
            couvrons l&apos;ensemble de la chaîne de valeur de vos projets tertiaires, industriels et
            ERP, de l&apos;audit à la livraison.
          </p>
          <div className="hero-meta rv d2">
            <div className="m"><div className="n">6</div><div className="l">métiers complémentaires</div></div>
            <div className="m"><div className="n">150<small>+</small></div><div className="l">projets pilotés</div></div>
            <div className="m"><div className="n">80<small>%</small></div><div className="l">d&apos;économies LED</div></div>
          </div>
        </div>
      </section>

      {/* Blocs services */}
      <section className="svc">
        <div className="wrap">
          {services.map((s) => (
            <article className="svc-block" id={s.id} key={s.id}>
              <div className="svc-main">
                <div className="svc-idx rv">{s.idx}</div>
                <h2 className="rv">{s.title}</h2>
                <p className="lead rv d1">{s.lead}</p>
                <div className="caps rv d1">
                  {s.caps.map((c) => (
                    <div className="cap" key={c.letter}>
                      <div className="ci">{c.letter}</div>
                      <div>
                        <div className="ct">{c.title}</div>
                        <div className="cd">{c.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href={s.href} className="tlink rv">
                  {s.cta} <i>→</i>
                </Link>
              </div>
              <div className="svc-visual rv d1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.title} />
                <div className="tagnote">{s.tagnote}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABand
        eyebrow="Un projet ?"
        title="Parlons de votre besoin, réponse sous 24h ouvrées."
        primaryCta={{ label: 'Demander un devis', href: '/contact' }}
        secondaryCta={{ label: '01 34 22 30 12', href: 'tel:0134223012' }}
      />
    </>
  );
}
