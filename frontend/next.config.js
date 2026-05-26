/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
  },
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = nextConfig
