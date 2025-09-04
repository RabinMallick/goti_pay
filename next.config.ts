/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,

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
    ignoreDuringBuilds: true,
  },

  // Uncomment if you want custom output
  // output: 'standalone',
  output: 'export',
  distDir: 'out',
});

module.exports = nextConfig;
