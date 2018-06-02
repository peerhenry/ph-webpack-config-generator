const autoprefixer = require('autoprefixer');
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = {
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
  }
}

const devServer = {
  devServer: {
    port: 8080,
    contentBase: './public',
    open: true,
    overlay: true,
  }
}

const testDevServer = {
  devServer: {
    port: 8081,
    open: true,
    overlay: true,
    watchOptions: {
      aggregateTimeout: 300 // delay rebuild because otherwise somehow only the changed test is shown on browser refresh
    }
  }
}

const htmlPlugin = {
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

module.exports = env => {
  console.log("Running webpack with env: " + env);
  switch(env)
  {
    case "production": return merge(
      baseConfig, 
      { mode: env }
    );

    case "development": return merge(
      baseConfig,
      devServer, 
      { mode: env }
    );

    case "test":
      baseConfig.entry = "./tests.js"
      return merge(
        baseConfig,
        testDevServer, 
        htmlPlugin, // generate standard html page where mocha-loader can put the test report
        { mode: "development" }
      );

    default: return baseConfig;
  }
}