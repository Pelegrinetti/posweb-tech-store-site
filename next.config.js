const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pwa: {
    dest: 'public',
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    techStoreFrontendApi: process.env.TECH_STORE_FRONTEND_API,
  },
};

module.exports = withPWA(nextConfig);
