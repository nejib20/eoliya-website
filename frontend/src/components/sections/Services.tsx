'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/ui';

// Services exactement comme sur la plaquette EOLIYA
const services = [
  {
    id: 'conseil-pilotage',
    title: 'CONSEIL ET PILOTAGE',
    description: `Forte d'une expertise transversale aux métiers et à l'ingénierie du bâtiment, EOLIYA intervient dès l'amont des projets de travaux TCE.`,
    details: `Nous pouvons ainsi vous accompagner lors de la phase de définition de votre cahier des charges, puis assurer le pilotage des travaux jusqu'à la livraison.`,
    href: '/services/conseil-pilotage',
  },
  {
    id: 'multiservices-relamping',
    title: 'MULTI-SERVICES, MULTI-TECHNIQUES ET RELAMPING',
    description: `EOLIYA intervient rapidement en multi-services et multi-techniques pour toutes vos problématiques : dépannage, remise aux normes, travaux d'entretien, législation PMR...`,
    details: `Nous avons également développé une offre dédiée au relamping, qui va de l'audit de consommation énergétique au remplacement des appareils existants par des luminaires en LED.`,
    href: '/services/multiservices-relamping',
  },
  {
    id: 'luminaires-sur-mesure',
    title: 'LUMINAIRES SUR MESURE',
    description: `EOLIYA consacre une grande partie de ses ressources au développement et à l'optimisation des luminaires.`,
    details: `Notre bureau d'études réalise tous les calculs photométriques en fonction de vos cahiers des charges afin d'adapter les dimensions et les sources LED. Nos luminaires créés sur mesure s'adaptent à toutes vos exigences.`,
    href: '/services/luminaires-sur-mesure',
  },
];

export const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex">
          {/* Barre verticale bleue + NOS SERVICES (style plaquette) */}
          <div className="hidden lg:flex flex-col items-center mr-12">
            <div className="w-1 bg-primary-500 flex-grow" />
            <div className="py-8">
              <span
                className="text-primary-500 font-bold text-sm tracking-[0.3em] whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                NOS SERVICES
              </span>
            </div>
            <div className="w-1 bg-primary-500 flex-grow" />
          </div>

          {/* Contenu principal */}
          <div className="flex-1">
            {/* Logo en haut */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Logo className="h-12 w-auto" color="dark" />
            </motion.div>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 text-base mb-12 max-w-3xl"
            >
              EOLIYA c'est une équipe de collaborateurs aux compétences multidisciplinaires et complémentaires
            </motion.p>

            {/* Liste des services */}
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <h3 className="text-lg font-bold text-primary-500 mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2 max-w-2xl">
                    {service.description}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-2xl">
                    {service.details}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
