'use client';

import React from 'react';
import Image from 'next/image';

const clients = [
  { name: 'Conseil d\'Etat', logo: '/images/clients/conseil-etat.svg' },
  { name: 'Institut de France', logo: '/images/clients/institut-france.svg' },
  { name: 'VINCI Energies', logo: '/images/clients/vinci-energies.svg' },
  { name: 'Veepee', logo: '/images/clients/veepee.svg' },
  { name: 'Barriere', logo: '/images/clients/barriere.svg' },
  { name: 'Dentsu Group', logo: '/images/clients/dentsu.svg' },
  { name: 'TTI Fayat', logo: '/images/clients/tti-fayat.svg' },
  { name: 'Equipe de France — FFF', logo: '/images/clients/france-fff.svg' },
  { name: 'Fichet', logo: '/images/clients/fichet.svg' },
  { name: 'Finsecur', logo: '/images/clients/finsecur.svg' },
  { name: 'SDEL', logo: '/images/clients/sdel.svg' },
  { name: 'Weetec', logo: '/images/clients/weetec.svg' },
  { name: 'Guinier SAS', logo: '/images/clients/guinier.png' },
  { name: 'Phibor Entreprises', logo: '/images/clients/phibor.svg' },
  { name: 'Azureva', logo: '/images/clients/azureva.svg' },
  { name: 'E.Leclerc', logo: '/images/clients/e-leclerc.png' },
];

export const References: React.FC = () => {
  return (
    <section className="py-[clamp(72px,9vw,140px)]">
      <div className="wrap">
        {/* Header */}
        <div className="flex justify-between items-baseline gap-6 flex-wrap mb-[clamp(34px,4vw,52px)]">
          <h2 className="font-display font-medium text-[clamp(26px,3vw,42px)] tracking-[-0.02em]">
            Ils nous font confiance
          </h2>
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
            16 references grands comptes · 150+ projets
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 border-t border-l border-line">
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
