import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const services = [
  { label: 'Conseil et Pilotage TCE', href: '/services/conseil-pilotage' },
  { label: 'Multi-services et Relamping', href: '/services/multiservices-relamping' },
  { label: 'Luminaires sur mesure', href: '/services/luminaires-sur-mesure' },
];

const links = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Projets', href: '/projets' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const legal = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
  { label: 'CGV', href: '/cgv' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-400">EOLIYA</span>
              <span className="ml-2 text-lg text-gray-300">Ingénierie</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Expert en ingénierie du bâtiment depuis 15 ans. Bureau d'études, conseil TCE, relamping LED et luminaires sur mesure.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/eoliya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-700 hover:bg-primary-500 flex items-center justify-center transition-colors focus-visible-ring"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors focus-visible-ring inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors focus-visible-ring inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0134223012"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors focus-visible-ring"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>01 34 22 30 12</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@eoliya.com"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors focus-visible-ring"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>contact@eoliya.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=131+Boulevard+Pereire+75017+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors focus-visible-ring"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    131 Boulevard Pereire
                    <br />
                    75017 Paris
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-secondary-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} EOLIYA Ingénierie. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors focus-visible-ring"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
