/** @type {import('next').NextConfig} */
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  // output: 'standalone',
  // output: 'export',
  // distDir: 'out',
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  // experimental: {
  //   appDir: true, // Enable if using Next.js 14 App Router   // },
  images: {
    domains: ['tripfindy-logos.s3.ap-southeast-1.amazonaws.com'],
    unoptimized: true,
  },


  trailingSlash: false,

  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },

  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during production builds
  }
});

module.exports = nextConfig;