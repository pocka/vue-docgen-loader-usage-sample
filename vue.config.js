module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          enforce: 'post',
          use: 'vue-docgen-loader'
        }
      ]
    }
  }
}
