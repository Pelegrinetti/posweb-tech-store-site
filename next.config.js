/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    techStoreFrontendApi: process.env.TECH_STORE_FRONTEND_API,
  },
};

module.exports = nextConfig;
