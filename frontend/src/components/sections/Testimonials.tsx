'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

interface TestimonialsProps {
  title?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: 'EOLIYA a piloté notre projet de mise aux normes avec rigueur et réactivité. Leur expertise technique nous a permis de respecter nos délais et notre budget.',
    author: 'Jean Dupont',
    role: 'Responsable Facilities',
    company: 'Client anonymisé',
  },
  {
    quote: 'La transition vers l\'éclairage LED pilotée par EOLIYA nous a permis de réduire de 75% nos coûts énergétiques. Un investissement rentabilisé en moins de 2 ans.',
    author: 'Marie Martin',
    role: 'Directrice Technique',
    company: 'Client anonymisé',
  },
  {
    quote: 'Leur capacité à concevoir des luminaires sur mesure adaptés à nos contraintes architecturales a été déterminante pour la réussite de notre projet.',
    author: 'Pierre Bernard',
    role: 'Architecte',
    company: 'Client anonymisé',
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({
  title = 'Ce que disent nos clients',
  testimonials = defaultTestimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section section-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-0 text-primary-400 opacity-20">
              <Quote className="w-16 h-16" fill="currentColor" />
            </div>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic">
                  "{current.quote}"
                </blockquote>

                <div className="text-center">
                  <div className="font-semibold text-lg text-white">
                    {current.author}
                  </div>
                  <div className="text-gray-400">
                    {current.role}
                    {current.company && ` - ${current.company}`}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full bg-secondary-700 hover:bg-primary-500 flex items-center justify-center transition-colors focus-visible-ring"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary-500 w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-secondary-700 hover:bg-primary-500 flex items-center justify-center transition-colors focus-visible-ring"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
