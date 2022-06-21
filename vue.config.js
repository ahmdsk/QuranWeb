const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  pwa: {
      workboxOptions: {
          skipWaiting: true
      }
  },
  
  publicPath: process.env.NODE_ENV === "development" ? "/vuejs-pwa/" : "",

  configureWebpack: {
    plugins: [new GenerateSW()]
  }
};