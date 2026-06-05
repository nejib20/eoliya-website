'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Reproduit fidèlement les effets vanilla de la référence (eoliya.css / index.html) :
 *  - Reveal robuste au scroll : les éléments `.rv` partent visibles, on masque
 *    ceux hors-écran (.hide) puis on les révèle quand ils entrent dans le viewport.
 *  - Compteurs `[data-count]` : animation 0 → valeur finale (easeOutCubic, 1100ms).
 * Monté une fois dans le layout ; ré-initialisé à chaque changement de route.
 */
export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const counted = new WeakSet<Element>();

    function runCounters(scope: ParentNode) {
      scope.querySelectorAll<HTMLElement>('[data-count]').forEach((node) => {
        if (counted.has(node)) return;
        counted.add(node);
        const target = parseInt(node.getAttribute('data-count') || '', 10);
        if (isNaN(target)) return;
        const first = node.firstChild;
        if (!first) return;
        if (prefersReduced) { first.nodeValue = String(target); return; }
        requestAnimationFrame(() => {
          const t0 = performance.now();
          const dur = 1100;
          const step = (now: number) => {
            const p = Math.min(1, (now - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            first.nodeValue = String(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(step);
            else first.nodeValue = String(target);
          };
          first.nodeValue = '0';
          requestAnimationFrame(step);
        });
      });
    }

    const els = Array.from(document.querySelectorAll<HTMLElement>('.rv'));
    if (prefersReduced) {
      // Tout visible immédiatement, compteurs à leur valeur finale.
      document.querySelectorAll('.rv').forEach((el) => runCounters(el));
      return;
    }

    const frac = 0.9;
    let rafId = 0;
    let scrollHandler: (() => void) | null = null;

    rafId = requestAnimationFrame(() => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((el) => {
        if (el.getBoundingClientRect().top >= vh * frac) el.classList.add('hide');
      });

      const show = () => {
        const h = window.innerHeight || document.documentElement.clientHeight;
        document.querySelectorAll<HTMLElement>('.rv.hide').forEach((el) => {
          if (el.getBoundingClientRect().top < h * frac) {
            el.classList.remove('hide');
            if (el.querySelector('[data-count]') || el.hasAttribute('data-count')) runCounters(el);
          }
        });
      };

      scrollHandler = show;
      window.addEventListener('scroll', show, { passive: true });
      window.addEventListener('resize', show, { passive: true });
      requestAnimationFrame(show);
      // Compteurs visibles d'emblée
      document.querySelectorAll<HTMLElement>('.rv:not(.hide)').forEach(runCounters);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('resize', scrollHandler);
      }
    };
  }, [pathname]);

  return null;
}

export default SiteEffects;
