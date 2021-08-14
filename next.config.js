module.exports = {
  // reactStrictMode: true, // Can create warnings while using 3rd party library that is not strict
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}
