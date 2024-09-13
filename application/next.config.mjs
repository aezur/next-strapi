/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // Handle strapi images both from localhost and production
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ],
  },
}

export default nextConfig;
