/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const { withSuperjson } = require("next-superjson");

module.exports = withSuperjson()(nextConfig);
