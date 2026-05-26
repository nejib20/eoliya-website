import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'EOLIYA Ingénierie - Bureau d\'études et conseil en ingénierie du bâtiment | Paris',
  description: 'Expert en ingénierie du bâtiment depuis 15 ans, EOLIYA propose conseil TCE, relamping LED, luminaires sur mesure et mise aux normes pour ERP. Devis gratuit.',
  keywords: ['bureau d\'études bâtiment Paris', 'ingénierie tertiaire', 'relamping LED', 'luminaires sur mesure', 'TCE maîtrise d\'œuvre', 'mise aux normes ERP'],
  authors: [{ name: 'Nejib Aloui' }],
  creator: 'Nejib Aloui',
  publisher: 'EOLIYA Ingénierie',
  metadataBase: new URL('https://eoliya.com'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://eoliya.com',
    siteName: 'EOLIYA Ingénierie',
    title: 'EOLIYA Ingénierie - Bureau d\'études et conseil en ingénierie du bâtiment',
    description: 'Expert en ingénierie du bâtiment depuis 15 ans. Conseil TCE, relamping LED, luminaires sur mesure.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EOLIYA Ingénierie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EOLIYA Ingénierie - Bureau d\'études en ingénierie du bâtiment',
    description: 'Expert en ingénierie du bâtiment depuis 15 ans. Conseil TCE, relamping LED, luminaires sur mesure.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
