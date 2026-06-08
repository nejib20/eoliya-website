'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';

interface StatItem {
  value: string;
  suffix?: string;
  label: string;
  animate?: boolean; // Whether to animate this stat
}

const stats: StatItem[] = [
  { value: '2009', label: 'année de création', animate: false },
  { value: '150', suffix: '+', label: 'projets réalisés', animate: true },
  { value: '80', suffix: '%', label: 'd\'économies LED', animate: true },
];

// Custom hook for count-up animation
const useCountUp = (end: number, duration: number = 2000, shouldAnimate: boolean = true, hasStarted: boolean = false) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const easeOutExpo = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  useEffect(() => {
    if (!shouldAnimate || !hasStarted) {
      setCount(end);
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentCount = Math.floor(easedProgress * end);

      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, shouldAnimate, hasStarted]);

  return count;
};

// Animated stat component
const AnimatedStat: React.FC<{ stat: StatItem; index: number; hasStarted: boolean }> = ({ stat, index, hasStarted }) => {
  const numericValue = parseInt(stat.value, 10);
  const animatedValue = useCountUp(numericValue, 2000, stat.animate, hasStarted);
  const displayValue = stat.animate ? animatedValue : stat.value;

  return (
    <div
      className="py-[26px] max-md:py-[15px] pr-[clamp(28px,3vw,52px)] mr-[clamp(28px,3vw,52px)] border-r border-night-ink/[0.18] last:border-r-0 last:mr-0 last:pr-0 max-md:border-r-0 max-md:border-b max-md:mr-0 max-md:pr-0 max-md:last:border-b-0"
    >
      <div className="font-display font-medium text-[clamp(34px,3.4vw,48px)] leading-none tracking-[-0.02em] text-night-ink">
        {displayValue}
        {stat.suffix && <small className="text-[0.5em] text-laiton-light">{stat.suffix}</small>}
      </div>
      <div className="mt-3 font-mono text-[11px] tracking-[0.1em] uppercase text-night-muted">
        {stat.label}
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimationStarted, setHasAnimationStarted] = useState(false);

  // Video autoplay effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS-safe: apply muted imperatively. React doesn't always reflect the
    // `muted` attribute to the DOM, and an un-muted video is blocked from
    // autoplaying on iOS (the #1 cause of "plays briefly then stops").
    video.muted = true;
    video.defaultMuted = true;

    const kick = () => {
      video.muted = true;
      const p = video.play();
      if (p && p.catch) p.catch(() => {});
    };

    if (video.readyState >= 2) kick();
    video.addEventListener('loadeddata', kick);
    video.addEventListener('canplay', kick);
    // Robust infinite loop: if iOS pauses the video (buffering stall, etc.),
    // resume it. With `loop` set, `ended` normally never fires — we cover it too.
    // In Low-Power Mode iOS refuses play() (promise rejects, caught) and the
    // poster stays visible, which is the correct graceful fallback.
    video.addEventListener('pause', kick);
    video.addEventListener('ended', kick);

    const handleVisibility = () => {
      if (!document.hidden) kick();
    };
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('pageshow', kick);

    return () => {
      video.removeEventListener('loadeddata', kick);
      video.removeEventListener('canplay', kick);
      video.removeEventListener('pause', kick);
      video.removeEventListener('ended', kick);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pageshow', kick);
    };
  }, []);

  // Intersection Observer for count-up animation
  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimationStarted) {
            setHasAnimationStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(statsElement);

    return () => observer.disconnect();
  }, [hasAnimationStarted]);

  return (
    <section className="relative border-b border-line overflow-hidden isolate">
      <div className="min-h-[clamp(600px,92vh,1000px)] max-md:min-h-0 flex items-stretch max-md:flex-col bg-night">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none max-md:static max-md:inset-auto max-md:h-auto max-md:aspect-video max-md:object-contain"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/eoliya-hero-loop.mp4" type="video/mp4" />
        </video>

        {/* Gradient Veil */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none max-md:hidden"
          style={{
            background: `
              linear-gradient(90deg,
                rgba(8,10,14,0.92) 0%,
                rgba(8,10,14,0.78) 26%,
                rgba(8,10,14,0.46) 52%,
                rgba(8,10,14,0.12) 76%,
                rgba(8,10,14,0.02) 100%),
              linear-gradient(0deg, rgba(8,10,14,0.55) 0%, rgba(8,10,14,0.0) 38%)
            `
          }}
        />

        {/* Content */}
        <div className="relative z-[2] w-full max-w-content mx-auto px-gutter py-[clamp(120px,16vh,200px)] pb-[clamp(36px,5vw,64px)] max-md:pt-[clamp(28px,6vw,44px)] flex flex-col justify-end text-night-ink">
          <div>
            <div className="eyebrow text-night-muted rv">
              <b className="text-laiton-light">00</b> &nbsp;Ingénierie du bâtiment
            </div>

            <h1 className="rv d1 text-[clamp(40px,5.4vw,88px)] leading-[1.02] tracking-[-0.022em] mt-[clamp(22px,3vw,40px)] max-w-[15ch] text-night-ink font-display font-medium" style={{ textShadow: '0 2px 30px rgba(0,0,0,0.35)' }}>
              Des solutions d&apos;ingénierie <em className="text-laiton-light italic">sur&nbsp;mesure</em> pour vos projets tertiaires et industriels
            </h1>

            <p className="rv d2 mt-[clamp(24px,2.6vw,34px)] max-w-[50ch] text-[clamp(16px,1.3vw,18.5px)] text-night-ink/[0.82] leading-[1.65]" style={{ textShadow: '0 1px 16px rgba(0,0,0,0.3)' }}>
              Depuis 2009, EOLIYA Ingénierie accompagne entreprises et institutions dans leurs projets d&apos;aménagement, de mise aux normes et d&apos;optimisation énergétique. De la conception à la réalisation, nous mettons notre expertise au service de vos ambitions.
            </p>

            <div className="rv d3 mt-9 flex gap-[26px] items-center flex-wrap">
              <Link href="/contact" className="btn on-night">
                Parlons de votre projet <i>→</i>
              </Link>
              <Link href="/services" className="tlink on-night">
                Découvrir nos services <i>→</i>
              </Link>
            </div>
          </div>

          {/* Stats Ledger */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 max-md:grid-cols-1 gap-0 border-t border-night-ink/[0.18] mt-[clamp(40px,5vw,64px)] max-md:mt-8"
          >
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                stat={stat}
                index={index}
                hasStarted={hasAnimationStarted}
              />
            ))}
          </div>

          {/* Tag */}
          <div className="mt-[clamp(32px,4vw,52px)] max-md:mt-7 font-mono text-[11px] tracking-[0.14em] uppercase text-night-ink/[0.62] flex items-center gap-3">
            <span className="w-[26px] h-px bg-laiton-light inline-block" />
            Hall tertiaire, mise en lumière EOLIYA
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
