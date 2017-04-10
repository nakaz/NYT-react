const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const cssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    inline: true,
    contentBase: './dist',
    stats: { colors: true },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
    }),
    new webpack.LoaderOptionsPlugin({
      option: {
        postcss: (webpackInstance) => [
          postcssImport({
            path: ['./src'],
          }),
          cssnext({browsers: ['ast 2 versions', 'IE > 10']})
        ],
        context: __dirname
      },
      debug: true
    })
  ]
}
