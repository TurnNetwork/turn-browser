console.log(process.env.NODE_ENV);

module.exports = {
  // 暂时关闭eslint
  lintOnSave: false,
  productionSourceMap: process.env.NODE_ENV === 'development',
  devServer: {
    port: 8080,
    // open: true,
    disableHostCheck: true,
    proxy: {
      '/apis': {
        // target: "https://scan.doubleace.xyz/",//链
        // target: "http://8.218.229.173:11011/",//链
        // target: "https://scan.bubbonet.com/",//链
        target: "https://scan-test.bubbonet.com/",//链
        // target: "http://192.168.31.123:40010/",//链
        secure: false,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': '/browser-server'
        }
      },
      '/faucetApis': {
        // target: "https://www.dev-faucet.com",
        target: "https://faucet.bubbonet.com/",//测试服务
        // target: "http://192.168.31.209:3081",//开发服务
        // secure: false,
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/faucetApis': '/faucetApis'
        }
      }
    }
  },
  transpileDependencies: ['vue-particles']
}
