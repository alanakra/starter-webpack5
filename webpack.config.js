const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

const pages = ['index','test']

module.exports = {
  entry: pages.reduce((config, page) => {
    config[page] = `./src/app/index.js`;
    return config;
  }, {}),

  output: {
   path: path.resolve(__dirname, './dist'),
   filename: '[name].bundle.js',
 },

 plugins: [].concat(
  pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        title: 'Webpack Starter',
        lang: 'en',
        inject: true,
        template: path.resolve(__dirname, `./src/public/${page}.html`), // template file      
        filename: `${page}.html`,
        chunks: [page],
      }),
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
  )
),

 module: {    
    rules: [      
      // JavaScript      
      {        
       test: /\.js$/,        
       exclude: /node_modules/,        
       use: ['babel-loader'],      
      },      
      // Images      
      {        
       test: /\.(?:ico|gif|png|jpe?g|jpeg)$/i,        
       type: 'asset/resource',     
      },
      // Fonts and SVGs      
      {        
       test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,        
       type: 'asset/inline',      
      },
      // CSS, PostCSS, and Sass      
      {
       // Note: This is a setup for development. For production, you will use MiniCssExtractPlugin instead of style-loader, which will export the CSS as a minified file.        
       test: /\.(scss|css)$/,        
       use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],      
      },
     ],  
    },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new HtmlMinimizerPlugin(),
      ],
  },

  mode: 'development',
  devServer: {
  historyApiFallback: true,
  static: path.resolve(__dirname, './dist'),
  open: true,
  compress: true,
  port: 8080,
  },
}