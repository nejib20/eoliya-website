'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

/**
 * Widget Cloudflare Turnstile (rendu explicite, App Router).
 * S'auto-désactive proprement si NEXT_PUBLIC_TURNSTILE_SITE_KEY n'est pas défini
 * (le formulaire fonctionne alors avec les autres couches de protection).
 */

declare global {
  interface Window {
    turnstile?: {
      render: (el: string | HTMLElement, opts: TurnstileOptions) => string;
      reset: (id?: string) => void;
      remove: (id: string) => void;
      getResponse: (id?: string) => string | undefined;
    };
  }
}

interface TurnstileOptions {
  sitekey: string;
  callback?: (token: string) => void;
  'error-callback'?: (code?: string) => void;
  'expired-callback'?: () => void;
  'timeout-callback'?: () => void;
  theme?: 'auto' | 'light' | 'dark';
  size?: 'normal' | 'flexible' | 'compact';
  appearance?: 'always' | 'execute' | 'interaction-only';
  action?: string;
  language?: string;
}

export interface TurnstileHandle {
  reset: () => void;
}

export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
export const turnstileEnabled = !!TURNSTILE_SITE_KEY;

const SCRIPT_ID = 'cf-turnstile-script';
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('no window'));
    if (window.turnstile) return resolve();
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Turnstile load error')), { once: true });
      return;
    }
    const s = document.createElement('script');
    s.id = SCRIPT_ID;
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Échec chargement Turnstile'));
    document.head.appendChild(s);
  });
}

interface Props {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: (code?: string) => void;
  className?: string;
}

const Turnstile = forwardRef<TurnstileHandle, Props>(function Turnstile(
  { onVerify, onExpire, onError, className },
  ref
) {
  const container = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);
  onVerifyRef.current = onVerify;
  onExpireRef.current = onExpire;
  onErrorRef.current = onError;

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
    },
  }));

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return; // désactivé proprement
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !window.turnstile || !container.current || widgetId.current) return;
        widgetId.current = window.turnstile.render(container.current, {
          sitekey: TURNSTILE_SITE_KEY,
          action: 'contact',
          theme: 'auto',
          size: 'flexible',
          appearance: 'interaction-only',
          language: 'fr',
          callback: (t) => onVerifyRef.current(t),
          'expired-callback': () => onExpireRef.current?.(),
          'timeout-callback': () => onExpireRef.current?.(),
          'error-callback': (c) => onErrorRef.current?.(c),
        });
      })
      .catch((e) => onErrorRef.current?.(String(e)));

    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, []);

  if (!TURNSTILE_SITE_KEY) return null;
  return <div ref={container} className={className} />;
});

export default Turnstile;
