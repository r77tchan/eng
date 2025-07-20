import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'eng';

const nextConfig: NextConfig = {
  output: 'export',
  // assetPrefix と basePath は、本番環境 (gh-pages) でのみ設定する
  assetPrefix: isProd ? `/${repoName}/` : undefined,
  basePath: isProd ? `/${repoName}` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
