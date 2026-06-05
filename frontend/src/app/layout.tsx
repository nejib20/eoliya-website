import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer, MetaBar } from '@/components/layout';
import { SiteEffects } from '@/components/effects/SiteEffects';
import { StructuredData } from '@/components/seo';
import { globalSchemas } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'EOLIYA Ingénierie — Bureau d\'études et conseil en ingénierie du bâtiment | Paris',
  description: 'Expert en ingénierie du bâtiment depuis 2009, EOLIYA propose conseil TCE, relamping LED, luminaires sur mesure, rénovation et mise aux normes pour ERP. Devis gratuit.',
  keywords: ['bureau d\'études bâtiment Paris', 'ingénierie tertiaire', 'relamping LED', 'luminaires sur mesure', 'TCE maîtrise d\'œuvre', 'mise aux normes ERP', 'rénovation bureaux'],
  authors: [{ name: 'EOLIYA Ingénierie' }],
  creator: 'EOLIYA Ingénierie',
  publisher: 'EOLIYA Ingénierie',
  metadataBase: new URL('https://eoliya.com'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://eoliya.com',
    siteName: 'EOLIYA Ingénierie',
    title: 'EOLIYA Ingénierie — Bureau d\'études et conseil en ingénierie du bâtiment',
    description: 'Expert en ingénierie du bâtiment depuis 2009. Conseil TCE, relamping LED, luminaires sur mesure, rénovation.',
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
    title: 'EOLIYA Ingénierie — Bureau d\'études en ingénierie du bâtiment',
    description: 'Expert en ingénierie du bâtiment depuis 2009. Conseil TCE, relamping LED, luminaires sur mesure.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData data={globalSchemas} />
      </head>
      <body className="antialiased">
        <SiteEffects />
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
