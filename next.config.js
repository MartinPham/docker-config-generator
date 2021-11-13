const withOffline = require('next-offline')

const nextConfig = {
  assetPrefix: './',
  reactStrictMode: true,
  registerSwPrefix: '/docker-config-generator/'
}

module.exports = withOffline(nextConfig)