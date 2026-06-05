import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Papier (fond clair, chaud-neutre)
        paper: {
          DEFAULT: '#f4f3ef',
          2: '#ecebe4',
          3: '#e4e2da',
        },
        card: '#fbfaf7',

        // Encre
        ink: {
          DEFAULT: '#16171b',
          2: '#43454b',
        },
        muted: '#74757b',
        faint: '#a6a6a2',

        // Nuit (sections sombres)
        night: {
          DEFAULT: '#0c0e12',
          2: '#14171d',
          ink: '#f0efe9',
          muted: '#8b8d92',
        },

        // Accent laiton (lumière)
        laiton: {
          DEFAULT: '#c79a4f',
          light: '#e6c485',
          deep: '#8c6c2f',
        },

        // Lignes
        line: {
          DEFAULT: 'rgba(20,22,28,0.13)',
          soft: 'rgba(20,22,28,0.07)',
          strong: 'rgba(20,22,28,0.22)',
          night: 'rgba(240,239,233,0.14)',
        },

        // Ancien système (pour compatibilité)
        primary: {
          50: '#e8eef5',
          100: '#c5d4e8',
          200: '#9fb7d9',
          300: '#7999ca',
          400: '#5c82bf',
          500: '#182740',
          600: '#101c30',
          700: '#002652',
          800: '#001f47',
          900: '#00132e',
        },
        secondary: {
          50: '#f7f8fa',
          100: '#ebeef2',
          200: '#d5dbe4',
          300: '#b8c2d1',
          400: '#8a99b0',
          500: '#1a365d',
          600: '#152c4d',
          700: '#10223d',
          800: '#0b182d',
          900: '#060e1d',
        },
        accent: {
          50: '#fdf9f3',
          100: '#f9f0e1',
          200: '#f2dfc2',
          300: '#e9c999',
          400: '#ddb06e',
          500: '#c79a4f',
          600: '#b8924a',
          700: '#8c6c2f',
          800: '#6d5424',
          900: '#4e3c19',
        },
      },
      fontFamily: {
        display: ['"Bodoni Moda"', '"Times New Roman"', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(40px, 5.4vw, 88px)', { lineHeight: '1.02', letterSpacing: '-0.022em' }],
        'display-lg': ['clamp(34px, 4.6vw, 68px)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(30px, 3.6vw, 52px)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(26px, 3vw, 42px)', { lineHeight: '1.14', letterSpacing: '-0.015em' }],
        'heading-xl': ['clamp(24px, 2.8vw, 40px)', { lineHeight: '1.08', letterSpacing: '-0.018em' }],
        'heading-lg': ['clamp(21px, 2.2vw, 28px)', { lineHeight: '1.14', letterSpacing: '-0.01em' }],
        'heading-md': ['25px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body-lg': ['clamp(17px, 1.5vw, 19px)', { lineHeight: '1.65' }],
        'body': ['17px', { lineHeight: '1.62' }],
        'body-sm': ['15.5px', { lineHeight: '1.62' }],
        'mono-sm': ['12px', { lineHeight: '1.4', letterSpacing: '0.16em' }],
        'mono-xs': ['11px', { lineHeight: '1.4', letterSpacing: '0.18em' }],
      },
      spacing: {
        'gutter': 'clamp(20px, 4.5vw, 80px)',
        'section': 'clamp(72px, 9vw, 140px)',
      },
      maxWidth: {
        'content': '1320px',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(16,28,48,0.03), 0 1px 4px rgba(16,28,48,0.03)',
        'md': '0 2px 10px rgba(16,28,48,0.05), 0 12px 32px rgba(16,28,48,0.05)',
        'lg': '0 6px 24px rgba(16,28,48,0.06), 0 24px 64px rgba(16,28,48,0.07)',
        'cinematic': '0 30px 80px rgba(12,14,18,0.28)',
      },
      borderRadius: {
        'sm': '4px',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'reveal': 'reveal 1s cubic-bezier(0.19, 1, 0.22, 1)',
        'pulse-glow': 'pulseGlow 2.4s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 0 0 rgba(230,196,133,0.5)' },
          '70%': { boxShadow: '0 0 0 14px rgba(230,196,133,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(230,196,133,0)' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          lg: '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1320px',
        },
      },
    },
  },
  plugins: [],
}

export default config
