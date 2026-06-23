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
