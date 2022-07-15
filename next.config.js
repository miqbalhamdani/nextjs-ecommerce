/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["static-id.zacdn.com"],
  },
};

module.exports = nextConfig;
