'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavLink {
  label: string;
  href: string;
  index: string;
}

const navigation: NavLink[] = [
  { label: 'Accueil', href: '/', index: '00' },
  { label: 'À propos', href: '/a-propos', index: '01' },
  { label: 'Services', href: '/services', index: '02' },
  { label: 'Projets', href: '/projets', index: '03' },
  { label: 'Blog', href: '/blog', index: '04' },
  { label: 'Contact', href: '/contact', index: '05' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[60] bg-paper/[0.86] backdrop-blur-[16px] backdrop-saturate-[140%] border-b transition-colors duration-[400ms] ease-editorial ${
          isScrolled ? 'border-line' : 'border-transparent'
        }`}
      >
        <div className="wrap">
          <div className="flex items-center justify-between h-[78px] gap-7">
            {/* Brand */}
            <Link href="/" className="flex items-center flex-none" aria-label="EOLIYA Ingénierie">
              <Image
                src="/images/eoliya-logo-sombre.png"
                alt="EOLIYA Ingénierie"
                width={120}
                height={28}
                className="h-7 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative font-mono text-xs tracking-[0.12em] uppercase py-2.5 px-3.5 whitespace-nowrap transition-colors duration-300 ease-editorial ${
                    isActive(link.href)
                      ? 'text-ink'
                      : 'text-ink-2 hover:text-ink'
                  }`}
                >
                  <span className="text-faint mr-1.5 text-[10px]">{link.index}</span>
                  {link.label}
                  <span
                    className={`absolute left-3.5 right-3.5 bottom-1 h-px bg-laiton transition-transform duration-[400ms] ease-editorial origin-left ${
                      isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex btn ghost"
              >
                Devis gratuit <i>→</i>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden icon-btn"
                aria-label="Menu"
              >
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M0 1h20M0 11h20" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[90] bg-paper transform transition-transform duration-500 ease-editorial flex flex-col py-5.5 px-gutter ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ paddingInline: 'var(--gutter)' }}
      >
        <div className="flex justify-between items-center h-14">
          <span className="mono text-muted">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="icon-btn"
            aria-label="Fermer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col mt-6">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display font-medium text-[clamp(30px,9vw,44px)] tracking-[-0.02em] py-3.5 border-b border-line"
            >
              <span className="font-mono text-sm text-laiton-deep mr-3.5">{link.index}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="btn mt-7.5"
        >
          Devis gratuit <i>→</i>
        </Link>
      </div>
    </>
  );
};

export default Header;
