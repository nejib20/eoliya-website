'use client';

import React from 'react';
import { motion } from 'framer-motion';

// SVG Logos des 16 clients de la plaquette EOLIYA
const ClientLogos = {
  ConseilEtat: () => (
    <svg viewBox="0 0 120 60" className="w-full h-12">
      <g fill="#c41e3a">
        {/* Building silhouette */}
        <rect x="30" y="25" width="60" height="30" fill="none" stroke="#c41e3a" strokeWidth="1" />
        <rect x="45" y="10" width="30" height="15" fill="none" stroke="#c41e3a" strokeWidth="1" />
        <line x1="35" y1="35" x2="35" y2="50" stroke="#c41e3a" strokeWidth="1" />
        <line x1="50" y1="35" x2="50" y2="50" stroke="#c41e3a" strokeWidth="1" />
        <line x1="70" y1="35" x2="70" y2="50" stroke="#c41e3a" strokeWidth="1" />
        <line x1="85" y1="35" x2="85" y2="50" stroke="#c41e3a" strokeWidth="1" />
        <text x="60" y="58" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#c41e3a">CONSEIL D'ÉTAT</text>
      </g>
    </svg>
  ),

  Veepee: () => (
    <svg viewBox="0 0 120 40" className="w-full h-10">
      <text x="10" y="30" fontSize="24" fontWeight="bold" fill="#333">Veepee</text>
      <path d="M95 5 Q110 20 95 35" stroke="#e91e8c" strokeWidth="4" fill="none" />
    </svg>
  ),

  Barriere: () => (
    <svg viewBox="0 0 120 40" className="w-full h-10">
      <text x="35" y="30" fontSize="18" fontWeight="500" letterSpacing="2" fill="#333">BARRIÈRE</text>
      <path d="M10 8 L10 32 Q10 35 13 35 L25 35 Q13 22 25 8 L13 8 Q10 8 10 11 Z" fill="#333" />
    </svg>
  ),

  DentsuGroup: () => (
    <svg viewBox="0 0 120 40" className="w-full h-10">
      <text x="10" y="22" fontSize="16" fontWeight="300" fill="#666">dentsu</text>
      <text x="10" y="35" fontSize="14" fontWeight="600" fill="#333">group</text>
    </svg>
  ),

  TTIFayat: () => (
    <svg viewBox="0 0 120 40" className="w-full h-10">
      <polygon points="15,20 25,5 35,20 25,35" fill="#f5a623" />
      <text x="45" y="22" fontSize="16" fontWeight="bold" fill="#333">TTI</text>
      <text x="45" y="35" fontSize="10" fontWeight="500" fill="#f5a623">FAYAT</text>
    </svg>
  ),

  Weetec: () => (
    <svg viewBox="0 0 120 40" className="w-full h-10">
      <path d="M10 20 Q20 10 30 20 Q20 30 10 20" fill="#e91e8c" />
      <text x="40" y="28" fontSize="18" fontWeight="600" fill="#2ecc71">weetec</text>
    </svg>
  ),

  VinciEnergies: () => (
    <svg viewBox="0 0 120 40" className="w-full h-10">
      <text x="10" y="25" fontSize="16" fontWeight="bold" fill="#333">VINCI</text>
      <text x="58" y="25" fontSize="10" fontWeight="500" fill="#e74c3c">+</text>
      <text x="10" y="38" fontSize="8" fill="#666">ENERGIES</text>
    </svg>
  ),

  France: () => (
    <svg viewBox="0 0 120 50" className="w-full h-12">
      <g transform="translate(30, 5)">
        {/* Coq stylisé */}
        <ellipse cx="30" cy="25" rx="20" ry="18" fill="#003399" />
        <path d="M25 15 Q30 5 40 12" stroke="#e74c3c" strokeWidth="2" fill="none" />
        <circle cx="35" cy="18" r="2" fill="#fff" />
        <text x="30" y="48" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#003399">FRANCE</text>
      </g>
    </svg>
  ),

  InstitutFrance: () => (
    <svg viewBox="0 0 120 50" className="w-full h-12">
      <circle cx="60" cy="22" r="18" fill="none" stroke="#1a365d" strokeWidth="1" />
      <text x="42" y="10" fontSize="4" fill="#1a365d">INSTITUT</text>
      <text x="60" y="26" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#1a365d">1795</text>
      <text x="60" y="48" fontSize="5" textAnchor="middle" fill="#1a365d">DE FRANCE</text>
    </svg>
  ),

  Finsecur: () => (
    <svg viewBox="0 0 120 40" className="w-full h-10">
      <text x="10" y="28" fontSize="18" fontWeight="bold" fill="#e74c3c">FINSECUR</text>
      <circle cx="105" cy="20" r="5" fill="#e74c3c" />
    </svg>
  ),

  SDEL: () => (
    <svg viewBox="0 0 120 40" className="w-full h-10">
      <path d="M10 30 Q30 10 50 30" stroke="#e74c3c" strokeWidth="3" fill="none" />
      <text x="55" y="28" fontSize="20" fontWeight="bold" fill="#333">SDEL</text>
    </svg>
  ),

  Phibor: () => (
    <svg viewBox="0 0 120 40" className="w-full h-10">
      <rect x="10" y="8" width="25" height="25" rx="3" fill="#f39c12" />
      <circle cx="22" cy="20" r="6" fill="#fff" />
      <text x="45" y="20" fontSize="10" fontWeight="bold" fill="#333">PHIBOR</text>
      <text x="45" y="32" fontSize="7" fill="#f39c12">ENTREPRISES</text>
    </svg>
  ),

  Guinier: () => (
    <svg viewBox="0 0 120 40" className="w-full h-10">
      <path d="M15 30 Q20 15 30 20 Q25 35 15 30" fill="#27ae60" />
      <text x="40" y="22" fontSize="12" fontWeight="bold" fill="#333">GUINIER</text>
      <text x="40" y="32" fontSize="7" fill="#27ae60">SAS</text>
      <text x="40" y="38" fontSize="5" fill="#666">GÉNIE ÉLECTRIQUE</text>
    </svg>
  ),

  Fichet: () => (
    <svg viewBox="0 0 120 40" className="w-full h-10">
      <circle cx="20" cy="20" r="12" fill="#333" />
      <text x="40" y="28" fontSize="18" fontWeight="bold" fill="#333">FICHET</text>
    </svg>
  ),

  Azureva: () => (
    <svg viewBox="0 0 120 45" className="w-full h-11">
      <path d="M15 25 Q25 10 35 25 L25 30 Z" fill="#3498db" />
      <path d="M20 20 Q28 8 36 18" fill="#e74c3c" />
      <text x="42" y="25" fontSize="14" fontWeight="bold" fill="#e67e22">azureva</text>
      <text x="42" y="38" fontSize="5" fill="#666">Vacances en terre de partage</text>
    </svg>
  ),

  ELeclerc: () => (
    <svg viewBox="0 0 120 40" className="w-full h-10">
      <text x="10" y="28" fontSize="16" fontWeight="bold" fill="#333">E.Leclerc</text>
      <circle cx="100" cy="20" r="12" fill="#003399" />
      <text x="100" y="24" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#fff">L</text>
    </svg>
  ),
};

// Liste ordonnée des clients comme sur la plaquette
const clientList = [
  { name: "Conseil d'État", Logo: ClientLogos.ConseilEtat },
  { name: 'Veepee', Logo: ClientLogos.Veepee },
  { name: 'Barrière', Logo: ClientLogos.Barriere },
  { name: 'Dentsu Group', Logo: ClientLogos.DentsuGroup },
  { name: 'TTI FAYAT', Logo: ClientLogos.TTIFayat },
  { name: 'Weetec', Logo: ClientLogos.Weetec },
  { name: 'VINCI Energies', Logo: ClientLogos.VinciEnergies },
  { name: 'France', Logo: ClientLogos.France },
  { name: 'Institut de France', Logo: ClientLogos.InstitutFrance },
  { name: 'FINSECUR', Logo: ClientLogos.Finsecur },
  { name: 'SDEL', Logo: ClientLogos.SDEL },
  { name: 'PHIBOR Entreprises', Logo: ClientLogos.Phibor },
  { name: 'GUINIER SAS', Logo: ClientLogos.Guinier },
  { name: 'FICHET', Logo: ClientLogos.Fichet },
  { name: 'Azureva', Logo: ClientLogos.Azureva },
  { name: 'E.Leclerc', Logo: ClientLogos.ELeclerc },
];

interface ClientsProps {
  title?: string;
}

export const Clients: React.FC<ClientsProps> = ({
  title = 'Ils nous font confiance',
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary-500 uppercase tracking-wider">
            {title}
          </h2>
          <div className="w-20 h-0.5 bg-gray-300 mx-auto mt-4" />
        </motion.div>

        {/* Grille de logos 4x4 comme sur la plaquette */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto"
        >
          {clientList.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="flex items-center justify-center p-4 hover:opacity-80 transition-opacity"
              title={client.name}
            >
              <client.Logo />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
