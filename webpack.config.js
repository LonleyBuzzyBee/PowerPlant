const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const dotEnv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: './src/PowerPlant.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',  
  devServer: {                 
    contentBase: './dist'      
  },

  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJsPlugin({ sourceMap: true }),
    new HtmlWebpackPlugin({
      title: 'PowerPlant',
      template: './src/index.html',
      inject: 'body'
    }),
    new dotEnv(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [
            /node_modules/,
            /spec/
          ],
        loader: "eslint-loader"
      }
    ]
  }
};