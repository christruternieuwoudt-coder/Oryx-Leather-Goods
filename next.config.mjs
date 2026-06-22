/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Oryx-Leather-Goods',
  assetPrefix: '/Oryx-Leather-Goods',
  images: {
    unoptimized: true, // Required for static HTML exports
  },
};

export default nextConfig;
