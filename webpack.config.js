const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/app/index.js'),
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
 ],

 module: {    
    rules: [      
      // JavaScript      
      {        
       test: /\.js$/,        
       exclude: /node_modules/,        
       use: ['babel-loader'],      
      },    
     ],  
    },
}