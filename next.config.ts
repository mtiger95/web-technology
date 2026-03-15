import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/web-technology',
  assetPrefix: '/web-technology/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
