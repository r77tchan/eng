import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'eng';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
