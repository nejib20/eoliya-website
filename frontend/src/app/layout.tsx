import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer, MetaBar } from '@/components/layout';
import { StructuredData } from '@/components/seo';
import { globalSchemas } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'EOLIYA Ingenierie — Bureau d\'etudes et conseil en ingenierie du batiment | Paris',
  description: 'Expert en ingenierie du batiment depuis 2009, EOLIYA propose conseil TCE, relamping LED, luminaires sur mesure, renovation et mise aux normes pour ERP. Devis gratuit.',
  keywords: ['bureau d\'etudes batiment Paris', 'ingenierie tertiaire', 'relamping LED', 'luminaires sur mesure', 'TCE maitrise d\'oeuvre', 'mise aux normes ERP', 'renovation bureaux'],
  authors: [{ name: 'EOLIYA Ingenierie' }],
  creator: 'EOLIYA Ingenierie',
  publisher: 'EOLIYA Ingenierie',
  metadataBase: new URL('https://eoliya.com'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://eoliya.com',
    siteName: 'EOLIYA Ingenierie',
    title: 'EOLIYA Ingenierie — Bureau d\'etudes et conseil en ingenierie du batiment',
    description: 'Expert en ingenierie du batiment depuis 2009. Conseil TCE, relamping LED, luminaires sur mesure, renovation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EOLIYA Ingenierie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EOLIYA Ingenierie — Bureau d\'etudes en ingenierie du batiment',
    description: 'Expert en ingenierie du batiment depuis 2009. Conseil TCE, relamping LED, luminaires sur mesure.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <StructuredData data={globalSchemas} />
      </head>
      <body className="antialiased">
        <MetaBar />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
