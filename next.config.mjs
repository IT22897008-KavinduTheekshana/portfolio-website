/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  // Comment out for local dev
  // basePath: "/portfolio-website",
  // assetPrefix: "/portfolio-website/",
  trailingSlash: true,
};

export default nextConfig;
