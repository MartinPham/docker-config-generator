const withOffline = require('next-offline')

const nextConfig = {
  assetPrefix: './',
  reactStrictMode: true,
}

module.exports = withOffline(nextConfig)