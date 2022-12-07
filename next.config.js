/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  experimental: {
    appDir: true,
    isrMemoryCacheSize: 0,
  },
};

module.exports = nextConfig;
