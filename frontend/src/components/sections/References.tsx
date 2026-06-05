'use client';

import React from 'react';
import Image from 'next/image';

const clients = [
  { name: 'Conseil d\'État', logo: '/images/clients-real/conseil-detat.png' },
  { name: 'Institut de France', logo: '/images/clients-real/institut-de-france.png' },
  { name: 'VINCI Energies', logo: '/images/clients-real/vinci-energies.png' },
  { name: 'Veepee', logo: '/images/clients-real/veepee.png' },
  { name: 'Barrière', logo: '/images/clients-real/barriere.png' },
  { name: 'Dentsu Group', logo: '/images/clients-real/dentsu.png' },
  { name: 'TTI Fayat', logo: '/images/clients-real/tti-fayat.png' },
  { name: 'Équipe de France — FFF', logo: '/images/clients-real/france-fff.png' },
  { name: 'Fichet', logo: '/images/clients-real/fichet.png' },
  { name: 'Finsecur', logo: '/images/clients-real/finsecur.png' },
  { name: 'SDEL', logo: '/images/clients-real/sdel.png' },
  { name: 'Weetec', logo: '/images/clients-real/weetec.png' },
  { name: 'Guinier SAS', logo: '/images/clients-real/guinier.png' },
  { name: 'Phibor Entreprises', logo: '/images/clients-real/phibor.png' },
  { name: 'Azureva', logo: '/images/clients-real/azureva.png' },
  { name: 'E.Leclerc', logo: '/images/clients-real/e-leclerc.png' },
];

export const References: React.FC = () => {
  return (
    <section className="py-[clamp(72px,9vw,140px)]">
      <div className="wrap">
        {/* Header */}
        <div className="rv flex justify-between items-baseline gap-6 flex-wrap mb-[clamp(34px,4vw,52px)]">
          <h2 className="font-display font-medium text-[clamp(26px,3vw,42px)] tracking-[-0.02em]">
            Ils nous font confiance
          </h2>
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
            16 références grands comptes · 150+ projets
          </span>
        </div>

        {/* Grid */}
        <div className="rv d1 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 border-t border-l border-line">
          {clients.map((client) => (
            <div
              key={client.name}
              className="border-r border-b border-line py-[26px] px-[22px] min-h-[132px] flex items-center justify-center transition-colors duration-[400ms] ease-editorial hover:bg-card group"
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
  );
};

export default References;
