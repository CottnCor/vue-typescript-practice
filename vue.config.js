const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 线上打包路径
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'dist', // 打包构建目录
  assetsDir: '', // 放置生成的静态资源路径，默认 outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认 outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启生产环境的 source map
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"] // 加入 ts|tsx
    },
  },
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
  },
  css: {
    modules: false, // 启用 CSS modules
    extract: true, // 是否使用 CSS分离插件
    sourceMap: false, // 开启 CSS source maps
    loaderOptions: {
      // 引入全局scss文件
      sass: {
        data: `@import "@/styles/index.scss";`
      },
      less: {
        // ant design vue 主题覆写
        modifyVars: {
          'primary-color': '#1890ff', // 全局主色
          'link-color': '#1890ff', // 链接色
          'success-color': '#32978c', // 成功色
          'warning-color': '#fd8732', // 警告色
          'error-color': '#d0505d', // 错误色
          'box-shadow-base': '0 1px 3px rgba(0, 0, 0, .09)' // 阴影
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {}
}