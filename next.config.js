/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    PGP_PRIVATE_KEY: process.env.PGP_PRIVATE_KEY,
    PGP_PUBLIC_KEY: process.env.PGP_PUBLIC_KEY,
  },
};

module.exports = nextConfig;

