'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, Building2, Lightbulb, PenTool, ArrowRight } from 'lucide-react';
import { Card, Button } from '@/components/ui';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    icon: Building2,
    title: 'Conseil et Pilotage TCE',
    description: 'Maîtrise d\'œuvre d\'exécution et coordination de vos projets de construction, rénovation ou aménagement.',
    href: '/services/conseil-pilotage',
  },
  {
    icon: Lightbulb,
    title: 'Multi-services et Relamping',
    description: 'Maintenance, dépannage et transition LED pour optimiser vos consommations énergétiques jusqu\'à 80%.',
    href: '/services/multiservices-relamping',
  },
  {
    icon: PenTool,
    title: 'Luminaires sur mesure',
    description: 'Conception et fabrication de solutions d\'éclairage techniques adaptées à vos contraintes spécifiques.',
    href: '/services/luminaires-sur-mesure',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  viewport: { once: true },
};

export const Services: React.FC<ServicesProps> = ({
  title = 'Nos domaines d\'intervention',
  subtitle = 'Des solutions complètes pour tous vos projets d\'ingénierie du bâtiment',
  services = defaultServices,
}) => {
  return (
    <section className="section section-alt">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card variant="service" icon={service.icon}>
                <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  href={service.href}
                  variant="secondary"
                  size="sm"
                  icon={ArrowRight}
                  className="w-full"
                >
                  En savoir plus
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeInUp}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Besoin d'une solution personnalisée ?
          </p>
          <Button href="/contact" variant="primary" icon={ArrowRight}>
            Contactez-nous
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
