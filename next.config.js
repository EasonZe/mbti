// 中文标注：Next.js 静态导出配置，自动处理 GitHub Pages 子路径和图片优化设置。
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubActions && repositoryName ? `/${repositoryName}` : '');

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

module.exports = nextConfig;
