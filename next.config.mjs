/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enforces static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for Next.js static HTML export compatibility
  },
  // Ensure paths wrap correctly on github.io if deployment subpath is used
  trailingSlash: true,
};

export default nextConfig;
