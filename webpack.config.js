// Импорт модулей
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Правила сборки
module.exports = {
  entry: { main: './src/pages/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      /*
        Здесь можно написать круче и более канонично. Если подсмотреть в документацию, то можно увидеть, что
        там используется еще один параметр options, тогда код ниже преобразится и станет более гибким:
        {
          test: /\.(png|jpe?g|gif|ico|svg)$/,
          loader: 'file-loader'
          options: {
            name: './images/[name].[ext]'
          }
        },

        Также это позволяет указывать более гибкие пути, в зависимости от параметров сборки, подробнее можно прочесть
        здесь: https://webpack.js.org/loaders/file-loader/#options
      */
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        loader: 'file-loader?name=./images/[name].[ext]',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./fonts/[name].[ext]',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
  ]
};
