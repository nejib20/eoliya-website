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
  const colors = {
    dark: {
      primary: '#1a365d', // Dark blue
      secondary: '#2d3748',
      accent: '#4a5568',
    },
    light: {
      primary: '#ffffff',
      secondary: '#e2e8f0',
      accent: '#cbd5e0',
    },
    primary: {
      primary: '#0066CC',
      secondary: '#2d3748',
      accent: '#4a5568',
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
        {/* The distinctive O circle */}
        <circle cx="30" cy="30" r="25" stroke={c.primary} strokeWidth="5" fill="none" />
        <circle cx="30" cy="30" r="8" fill={c.primary} />
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
        {/* EOLIYA text */}
        <text
          x="0"
          y="32"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="36"
          fontWeight="700"
          letterSpacing="2"
          fill={c.primary}
        >
          EOLIYA
        </text>
      </svg>
    );
  }

  // Full logo with distinctive O
  return (
    <svg
      viewBox="0 0 220 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="EOLIYA Ingénierie"
    >
      {/* E */}
      <text
        x="0"
        y="38"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="38"
        fontWeight="700"
        letterSpacing="1"
        fill={c.primary}
      >
        E
      </text>

      {/* O - The distinctive circle */}
      <g transform="translate(28, 19)">
        <circle cx="11" cy="11" r="11" stroke={c.primary} strokeWidth="3.5" fill="none" />
        <circle cx="11" cy="11" r="3.5" fill={c.primary} />
      </g>

      {/* LIYA */}
      <text
        x="52"
        y="38"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="38"
        fontWeight="700"
        letterSpacing="1"
        fill={c.primary}
      >
        LIYA
      </text>

      {/* INGENIERIE - spaced letters */}
      <text
        x="2"
        y="55"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="11"
        fontWeight="500"
        letterSpacing="5.5"
        fill={c.accent}
      >
        INGENIERIE
      </text>
    </svg>
  );
};

export default Logo;
