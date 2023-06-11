/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
