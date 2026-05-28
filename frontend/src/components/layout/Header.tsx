'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Logo } from '@/components/ui';

interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

const navigation: NavLink[] = [
  { label: 'Accueil', href: '/' },
  {
    label: 'À propos',
    href: '/a-propos',
    children: [
      { label: 'Notre histoire', href: '/a-propos' },
      { label: 'Notre équipe', href: '/equipe' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Conseil et Pilotage TCE', href: '/services/conseil-pilotage' },
      { label: 'Multi-services et Relamping', href: '/services/multiservices-relamping' },
      { label: 'Luminaires sur mesure', href: '/services/luminaires-sur-mesure' },
    ],
  },
  { label: 'Projets', href: '/projets' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center focus-visible-ring">
            <Logo className="h-12 w-auto" color="dark" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((link) => (
              <div key={link.href} className="relative">
                {link.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-base font-medium transition-colors rounded-lg focus-visible-ring ${
                        isActive(link.href)
                          ? 'text-primary-500'
                          : 'text-secondary-600 hover:text-primary-500'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${
                                isActive(child.href)
                                  ? 'text-primary-500 font-medium'
                                  : 'text-secondary-600 hover:text-primary-500'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 text-base font-medium transition-colors rounded-lg focus-visible-ring ${
                      isActive(link.href)
                        ? 'text-primary-500'
                        : 'text-secondary-600 hover:text-primary-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="primary">
              Devis gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-secondary-600 hover:text-primary-500 focus-visible-ring rounded-lg"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-1">
                {navigation.map((link) => (
                  <div key={link.href}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === link.label ? null : link.label
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-secondary-600 hover:text-primary-500 hover:bg-gray-50 rounded-lg"
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              openDropdown === link.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 space-y-1"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`block px-4 py-2 text-sm rounded-lg ${
                                    isActive(child.href)
                                      ? 'text-primary-500 bg-primary-50 font-medium'
                                      : 'text-secondary-600 hover:text-primary-500 hover:bg-gray-50'
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 text-base font-medium rounded-lg ${
                          isActive(link.href)
                            ? 'text-primary-500 bg-primary-50'
                            : 'text-secondary-600 hover:text-primary-500 hover:bg-gray-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Button href="/contact" variant="primary" fullWidth>
                    Devis gratuit
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
