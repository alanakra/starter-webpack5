# Webpack 5 StarterKit

This is a starter kit for front-end development powered by [Webpack 5](https://webpack.js.org/) that I use for my personal projects. The repo is notably inspired by the article of [Tania Rascia](https://www.taniarascia.com/how-to-use-webpack/). Feel free to fork this repo / push PR's.

## Features
 - [Babel](https://babeljs.io/)
 - [SASS](https://sass-lang.com/) x PostCSS
 - [Webpack Dev server](https://webpack.js.org/configuration/dev-server/)

## Installation
Clone this repo and npm install.

    npm i
  Remove initial git folder with

    rm -rf .git
  
Now you can init your git repository with

    git init
  
 ## Development
 

    npm start
   You can view the development server at `localhost:8080`

## Production build

    npm run build
   

You can view the deploy in `dist` folder created by Webpack and lanch a server inside it with

    npm i -g http-server

## File structure

📦src  
 ┣ 📂app  
 ┃ ┗ 📜index.js  
 ┣ 📂fonts  
 ┣ 📂images  
 ┣ 📂public  
 ┃ ┗ 📜template.html  
 ┗ 📂styles  
 ┃ ┗ 📜main.scss