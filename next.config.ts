import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fbwa1-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.**.fna.fbcdn.net',
      },
    ],
  },
};

export default nextConfig;
