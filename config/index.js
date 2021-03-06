'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

const proHash = {
  starCharge: {
    name: 'starcharge',
    api: false ? 'http://10.9.35.50:8005/webApi' : 'https://app.starcharge.com/webApi',
    devApi: 'http://10.9.35.50:8005/webApi',
    basePath: 'http://www.me2u.com.cn/starFarm'
  }
};

const project = proHash.starCharge;

// 配置项目名称
const projectName = project.name;

// 配置发布环境api
const api = project.api;

// 配置开发环境代理api
const devApi = project.devApi;

// 配置发布环境静态资源地址
const basePath = project.basePath;

module.exports = {
  projectName,
  api,
  devApi,
  basePath,
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/' + project.devPath || '',
    proxyTable: {
      '/api': {
        target: devApi,
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      },
      onProxyRes: function(proxyRes, req, res) {
        var cookies = proxyRes.headers['set-cookie'];
        var cookieRegex = /Path=\/XXX\//i;
        //修改cookie Path
        if (cookies) {
          var newCookie = cookies.map(function(cookie) {
            if (cookieRegex.test(cookie)) {
              return cookie.replace(cookieRegex, 'Path=/');
            }
            return cookie;
          });
          //修改cookie path
          delete proxyRes.headers['set-cookie'];
          proxyRes.headers['set-cookie'] = newCookie;
        }
      }
    },

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../output/' + projectName + '/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../output/' + projectName),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
