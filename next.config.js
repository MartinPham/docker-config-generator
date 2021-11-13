const withOffline = require('next-offline')

const nextConfig = {
  assetPrefix: '/docker-config-generator/',
  reactStrictMode: true,
  registerSwPrefix: '/docker-config-generator/'
}

module.exports = withOffline(nextConfig)