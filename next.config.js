/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  poweredByHeader: false,
  ...(isGithubPages
    ? {
        output: 'export',
        basePath: '/teklifjet',
        assetPrefix: '/teklifjet/',
        trailingSlash: true,
      }
    : {}),
};

module.exports = nextConfig;
