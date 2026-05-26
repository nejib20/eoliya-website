import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Blog et Actualités | EOLIYA Ingénierie',
  description: 'Conseils, actualités et retours d\'expérience en ingénierie du bâtiment : TCE, LED, normes, réglementation ERP.',
};

// Données de démonstration
const articles = [
  {
    title: 'Relamping LED : 5 erreurs à éviter pour réussir votre transition',
    excerpt: 'La transition vers l\'éclairage LED peut générer jusqu\'à 80% d\'économies d\'énergie. Découvrez les pièges à éviter pour un projet réussi.',
    category: 'Relamping LED',
    date: '15 mai 2026',
    readTime: '5 min',
    image: '/images/blog/placeholder.jpg',
  },
  {
    title: 'Accessibilité PMR : ce qui change avec la nouvelle réglementation ERP',
    excerpt: 'Point sur les évolutions réglementaires 2026 en matière d\'accessibilité des établissements recevant du public.',
    category: 'Réglementation',
    date: '8 mai 2026',
    readTime: '7 min',
    image: '/images/blog/placeholder.jpg',
  },
  {
    title: 'TCE : quel est le rôle du technicien conseil en environnement ?',
    excerpt: 'Comprendre les missions et la plus-value d\'un TCE dans un projet de construction ou de rénovation.',
    category: 'TCE & Conseil',
    date: '2 mai 2026',
    readTime: '6 min',
    image: '/images/blog/placeholder.jpg',
  },
  {
    title: 'Normes NFC 71-121 : tout savoir sur l\'éclairage de sécurité',
    excerpt: 'Guide complet sur les obligations légales en matière d\'éclairage de sécurité (BAES, LSC, signalétique).',
    category: 'Normes',
    date: '25 avril 2026',
    readTime: '8 min',
    image: '/images/blog/placeholder.jpg',
  },
  {
    title: 'Luminaires sur mesure : quand opter pour une solution personnalisée ?',
    excerpt: 'Contraintes architecturales, environnements ATEX, besoins spécifiques : quand le sur-mesure devient nécessaire.',
    category: 'Luminaires',
    date: '18 avril 2026',
    readTime: '5 min',
    image: '/images/blog/placeholder.jpg',
  },
  {
    title: 'Audit énergétique : 7 postes d\'optimisation souvent négligés',
    excerpt: 'Au-delà de l\'éclairage, découvrez les leviers d\'économie d\'énergie à ne pas manquer dans vos bâtiments.',
    category: 'Efficacité énergétique',
    date: '10 avril 2026',
    readTime: '6 min',
    image: '/images/blog/placeholder.jpg',
  },
];

const categories = [
  'Tous',
  'Relamping LED',
  'TCE & Conseil',
  'Normes',
  'Réglementation',
  'Luminaires',
  'Efficacité énergétique',
];

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Actualités et conseils"
        subtitle="Retrouvez nos articles, guides pratiques et retours d'expérience pour vous accompagner dans vos projets d'ingénierie du bâtiment."
        primaryCta={{
          label: 'S\'abonner à la newsletter',
          href: '#newsletter',
        }}
      />

      {/* Filters */}
      <section className="section bg-white pt-12">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors font-medium text-sm"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} variant="default">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Image article</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary-500 uppercase">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="text-primary-500 hover:text-primary-600 font-medium text-sm inline-flex items-center gap-2"
                >
                  Lire la suite
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="section section-alt">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-6">
            Restez informé
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Recevez nos actualités, conseils techniques et retours d'expérience directement
            dans votre boîte mail (1 envoi par trimestre maximum).
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre email professionnel"
              className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              S'abonner
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Conformément au RGPD, vous pouvez vous désabonner à tout moment.
          </p>
        </div>
      </section>
    </>
  );
}
