const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const proxy = require('http-proxy-middleware')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nsis: {
        oneClick: false,
        allowToChangeInstallationDirectory: true
      }
    }
  },
  configureWebpack: {
    target:'electron-renderer',
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  // devServer: {
  //   proxy: {
  //     '/api/' : {
  //       target: 'http://localhost:8080/bpm',
  //       changeOrigin: true
  //     }
  //   }
  // }
})
