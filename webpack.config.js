const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  entry: {
    main: [
      path.resolve(__dirname, './src/app/index.js')
      ]
  },

  output: {
   path: path.resolve(__dirname, './dist'),
   filename: '[name].bundle.js',
 },

 plugins: [    
    new HtmlWebpackPlugin({      
      title: 'Webpack Starter',      
      template: path.resolve(__dirname, './src/public/template.html'), // template file      
      filename: 'index.html', // output file    
     }),
     new CleanWebpackPlugin(),
     new webpack.HotModuleReplacementPlugin(),
 ],

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
       test: /\.(?:ico|gif|png|jpg|jpeg)$/i,        
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
    minimizer: [new TerserPlugin()],
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