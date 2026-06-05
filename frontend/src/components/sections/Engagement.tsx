import React from 'react';

interface Point {
  index: string;
  title: string;
  description: string;
}

const points: Point[] = [
  {
    index: '01',
    title: 'Expertise reconnue',
    description: 'Plus de 150 projets menés à bien pour des clients de référence comme le Conseil d’État, Veepee, Barrière ou l’Institut de France.',
  },
  {
    index: '02',
    title: 'Solutions clés en main',
    description: 'De l’audit initial à la livraison finale, nous pilotons votre projet avec méthode et rigueur pour garantir le respect des délais et du budget.',
  },
  {
    index: '03',
    title: 'Innovation & performance',
    description: 'Nous développons des solutions sur mesure adaptées à vos contraintes, avec un focus sur l’efficacité énergétique et la durabilité.',
  },
];

export const Engagement: React.FC = () => {
  return (
    <section className="engage" id="engagement">
      <div className="wrap grid">
        <div className="left rv">
          <div className="eyebrow"><b>01</b> &nbsp;Notre engagement</div>
          <h2>Au service de vos projets depuis 2009.</h2>
          <p>
            Partenaire de confiance des entreprises, collectivités et gestionnaires d’ERP, nous
            conjuguons réactivité, expertise technique et tenue des délais.
          </p>
          <div className="big">
            <div>
              <div className="n" data-count="30">
                30<small>+</small>
              </div>
              <div className="l">Clients grands comptes</div>
            </div>
            <div>
              <div className="n">2009</div>
              <div className="l">Année de création</div>
            </div>
          </div>
        </div>

        <div className="points">
          {points.map((pt, i) => (
            <div className={`pt rv${i > 0 ? ` d${i}` : ''}`} key={pt.index}>
              <div className="pidx">{pt.index}</div>
              <div>
                <h3>{pt.title}</h3>
                <p>{pt.description}</p>
              </div>
            </div>
          ))}
        </div>

        <figure className="engage-figure rv">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bureau-etudes-paris.png" alt="Bureau d’études EOLIYA, Paris 17e" />
          <figcaption>
            Notre bureau d’études, Paris 17<sup>e</sup>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Engagement;
