module.exports = {
  baseUrl: '/touchworld',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://xg.touchworld-sh.com',
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
