module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
//var webpack = require('webpack');
//module.exports = {
//  entry: [
//    'webpack-dev-server/client?http://' + require("os").hostname() + ':3000/',
////    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
//    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
//    './src/index.js'
//  ],
//  output: {
//    path: __dirname,
//    publicPath: '/',
//    filename: 'bundle.js'
//  },
//  module: {
//    loaders: [{
//      exclude: /node_modules/,
//      loaders: ['react-hot', 'babel']
//    }]
//  },
//  resolve: {
//    extensions: ['', '.js', '.jsx']
//  },
//  devServer: {
//    contentBase: './'
//  },
//  plugins: [
//    new webpack.HotModuleReplacementPlugin()
//  ]
//};
