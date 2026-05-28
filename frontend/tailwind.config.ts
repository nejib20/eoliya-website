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
        // Bleu marine EOLIYA - couleur principale de la plaquette
        primary: {
          50: '#e8eef5',
          100: '#c5d4e8',
          200: '#9fb7d9',
          300: '#7999ca',
          400: '#5c82bf',
          500: '#003366', // Bleu marine principal
          600: '#002d5c',
          700: '#002652',
          800: '#001f47',
          900: '#00132e',
        },
        // Teintes bleu marine pour textes et éléments secondaires
        secondary: {
          50: '#f7f8fa',
          100: '#ebeef2',
          200: '#d5dbe4',
          300: '#b8c2d1',
          400: '#8a99b0',
          500: '#1a365d', // Navy pour titres
          600: '#152c4d',
          700: '#10223d',
          800: '#0b182d',
          900: '#060e1d',
        },
        // Gris métallisé pour accents (style logo O)
        accent: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#d3d8de',
          300: '#adb5bd',
          400: '#868e96',
          500: '#6c757d', // Gris métallisé
          600: '#5a6268',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['4.5rem', { lineHeight: '1.1', fontWeight: '800' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
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
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}

export default config
