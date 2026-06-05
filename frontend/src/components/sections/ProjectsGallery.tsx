import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  name: string;
  image: string;
}

const projects: Project[] = [
  { id: 'conseil-detat', name: "Conseil d'État", image: '/images/projets/conseil-detat.png' },
  { id: 'institut-de-france', name: 'Institut de France', image: '/images/projets/institut-de-france.png' },
  { id: 'vinci-energies', name: 'VINCI Energies', image: '/images/projets/vinci-energies.jpeg' },
  { id: 'veepee', name: 'Veepee', image: '/images/projets/veepee.png' },
  { id: 'barriere', name: 'Barrière', image: '/images/projets/barriere.png' },
  { id: 'dentsu', name: 'Dentsu Group', image: '/images/projets/dentsu.png' },
  { id: 'tti-fayat', name: 'TTI Fayat', image: '/images/projets/tti-fayat.jpg' },
  { id: 'france-fff', name: 'Équipe de France, FFF', image: '/images/projets/france-fff.png' },
  { id: 'fichet', name: 'Fichet', image: '/images/projets/fichet.png' },
  { id: 'finsecur', name: 'Finsecur', image: '/images/projets/finsecur.png' },
  { id: 'sdel', name: 'SDEL', image: '/images/projets/sdel.png' },
  { id: 'weetec', name: 'Weetec', image: '/images/projets/weetec.png' },
  { id: 'guinier', name: 'Guinier SAS', image: '/images/projets/guinier.png' },
  { id: 'phibor', name: 'Phibor Entreprises', image: '/images/projets/phibor.png' },
  { id: 'azureva', name: 'Azureva', image: '/images/projets/azureva.png' },
  { id: 'e-leclerc', name: 'E.Leclerc', image: '/images/projets/e-leclerc.jpeg' },
];

// Tuile projet : zoom doux au survol + voile dégradé + flèche laiton (fidèle à la réf).
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Link href="/contact" className="group block">
    <div className="relative w-full aspect-[3/2] overflow-hidden bg-paper-2">
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.045]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,26,21,0.28)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-editorial pointer-events-none" />
    </div>
    <div className="mt-4 flex items-baseline justify-between gap-4">
      <span className="font-mono text-[12px] tracking-[0.16em] uppercase text-ink">
        {project.name}
      </span>
      <span className="font-mono text-[15px] text-laiton-deep opacity-0 -translate-x-1.5 transition-all duration-[400ms] ease-editorial group-hover:opacity-100 group-hover:translate-x-0">
        →
      </span>
    </div>
  </Link>
);

export const ProjectsGallery: React.FC = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb rv">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <span>Projets</span>
          </div>
          <div className="eyebrow rv" style={{ marginTop: '22px' }}>
            <b>03</b> &nbsp;Projets
          </div>
          <h1 className="rv d1">
            Des projets qui <em>parlent</em> pour nous.
          </h1>
          <p className="intro rv d2">
            Plus de 150 projets menés pour des institutions et des grands comptes exigeants. Une
            sélection de clients qui nous ont fait confiance, dans le tertiaire, l&apos;industrie et
            les établissements recevant du public.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-[clamp(48px,6vw,88px)] pb-[clamp(64px,8vw,120px)]">
        <div className="wrap">
          <div className="rv grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,2.4vw,36px)]">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
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
            <a href="tel:0134223012" className="tlink on-night">01 34 22 30 12</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsGallery;
