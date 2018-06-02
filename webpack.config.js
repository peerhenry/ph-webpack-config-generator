const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const merge = require("webpack-merge");

const config = {
  context: __dirname,
  entry: './src/main',

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
    alias: {}
  },

  module: {
    rules: [

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-decorators-legacy'],
            presets: ['es2015', 'stage-0', 'react']
          }
        }
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      },

      {
        test: /\.test.js$/,
        loader: 'mocha-loader'
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  devServer: {
    contentBase: './public'
  }
}

module.exports = env => {
  console.log("Running webpack in mode: " + env);
  switch(env)
  {
    case "production": return merge(config, { mode: env });
    case "development": return merge(config, { mode: env });
    case "test":
      config.entry = "./src/tests"
      return merge(config, { mode: "development" });
    default: return config;
  }
}