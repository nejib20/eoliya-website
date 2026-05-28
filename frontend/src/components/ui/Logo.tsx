import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'text';
  color?: 'dark' | 'light' | 'primary';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  color = 'dark',
}) => {
  // Couleurs selon la charte graphique EOLIYA
  const colors = {
    dark: {
      text: '#1a365d', // Navy blue pour le texte
      ring: ['#9ca3af', '#d1d5db', '#6b7280'], // Dégradé gris métallisé pour le O
      subtitle: '#6b7280',
    },
    light: {
      text: '#ffffff',
      ring: ['#e5e7eb', '#f3f4f6', '#d1d5db'],
      subtitle: '#d1d5db',
    },
    primary: {
      text: '#003366',
      ring: ['#9ca3af', '#d1d5db', '#6b7280'],
      subtitle: '#6b7280',
    },
  };

  const c = colors[color];

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="EOLIYA"
      >
        <defs>
          <linearGradient id="ring-gradient-icon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c.ring[0]} />
            <stop offset="50%" stopColor={c.ring[1]} />
            <stop offset="100%" stopColor={c.ring[2]} />
          </linearGradient>
        </defs>
        {/* Anneau métallisé style plaquette */}
        <circle cx="30" cy="30" r="22" stroke="url(#ring-gradient-icon)" strokeWidth="6" fill="none" />
      </svg>
    );
  }

  if (variant === 'text') {
    return (
      <svg
        viewBox="0 0 200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="EOLIYA Ingénierie"
      >
        <text
          x="0"
          y="32"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="36"
          fontWeight="600"
          letterSpacing="3"
          fill={c.text}
        >
          EOLIYA
        </text>
      </svg>
    );
  }

  // Logo complet avec O anneau métallisé - style plaquette EOLIYA
  return (
    <svg
      viewBox="0 0 180 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="EOLIYA Ingénierie"
    >
      <defs>
        <linearGradient id={`ring-gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c.ring[0]} />
          <stop offset="45%" stopColor={c.ring[1]} />
          <stop offset="100%" stopColor={c.ring[2]} />
        </linearGradient>
      </defs>

      {/* E */}
      <text
        x="0"
        y="30"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="28"
        fontWeight="600"
        letterSpacing="2"
        fill={c.text}
      >
        E
      </text>

      {/* O - Anneau métallisé (signature visuelle EOLIYA) */}
      <circle
        cx="32"
        cy="20"
        r="10"
        stroke={`url(#ring-gradient-${color})`}
        strokeWidth="3.5"
        fill="none"
      />

      {/* LIYA */}
      <text
        x="48"
        y="30"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="28"
        fontWeight="600"
        letterSpacing="2"
        fill={c.text}
      >
        LIYA
      </text>

      {/* INGENIERIE - lettres espacées */}
      <text
        x="1"
        y="45"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="9"
        fontWeight="400"
        letterSpacing="6"
        fill={c.subtitle}
      >
        INGENIERIE
      </text>
    </svg>
  );
};

export default Logo;
