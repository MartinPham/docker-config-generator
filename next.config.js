const withOffline = require('next-offline')

const nextConfig = {
  assetPrefix: './',
  reactStrictMode: true,
  registerSwPrefix: './'
}

module.exports = withOffline(nextConfig)