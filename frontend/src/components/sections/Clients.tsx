'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Client {
  name: string;
  logo?: string;
}

interface ClientsProps {
  title?: string;
  clients?: Client[];
}

const defaultClients: Client[] = [
  { name: 'Conseil d\'État' },
  { name: 'Veepee' },
  { name: 'Barrière' },
  { name: 'Dentsu Group' },
  { name: 'TTI Fayat' },
  { name: 'Vinci Energies' },
  { name: 'Institut de France' },
  { name: 'E.Leclerc' },
  { name: 'Azureva' },
  { name: 'Fichet' },
];

export const Clients: React.FC<ClientsProps> = ({
  title = 'Ils nous font confiance',
  clients = defaultClients,
}) => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            Plus de 150 projets réalisés pour des clients de référence
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-auto max-h-12 object-contain grayscale hover:grayscale-0 transition-all"
                />
              ) : (
                <span className="text-sm font-semibold text-secondary-500 text-center">
                  {client.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-200"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">15+</div>
            <div className="text-sm text-gray-600">ans d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">150+</div>
            <div className="text-sm text-gray-600">projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">30+</div>
            <div className="text-sm text-gray-600">clients grands comptes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">80%</div>
            <div className="text-sm text-gray-600">d'économies d'énergie</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
