module.exports = {
    entry: './main.js',
    output : {
      publicPath: '/static/',
      path: 'static',
      filename: 'bundle.js'
    },
    devServer:{
      port:8888
    },
    module: {
      loaders:[{
        test: /\.jsx?$/,
        loaders : ['babel-loader'],
        exclude: /node_modules/
      }]

    }
}
