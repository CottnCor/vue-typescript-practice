const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  pages: undefined,
  productionSourceMap: false,
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"]
    },
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  css: {
    modules: false,
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        data: `@import "@/styles/index.scss";`
      },
      less: {
        modifyVars: {
          'primary-color': '#1890ff',
          'link-color': '#1890ff',
          'success-color': '#32978c',
          'warning-color': '#fd8732',
          'error-color': '#d0505d',
          'box-shadow-base': '0 1px 3px rgba(0, 0, 0, .09)'
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {}
}