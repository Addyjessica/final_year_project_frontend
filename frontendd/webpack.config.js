// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for the application
  entry: './src/main.jsx', // Adjust this to your main file

  // Output configuration for the bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/', // Public URL of the output directory when referenced in a browser
  },

  // Module rules to handle different types of files
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Matches .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use Babel presets
          },
        },
      },
      {
        test: /\.css$/, // Matches .css files
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader', // Resolves CSS imports
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'), // Tailwind CSS plugin
                  require('autoprefixer'), // Autoprefixer plugin
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // Resolve extensions to handle JS and JSX files
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },

  // Plugins configuration
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for HTML file
      filename: 'index.html', // Output filename
    }),
  ],

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve content from 'dist' directory
    },
    compress: true, // Enable gzip compression
    port: 5173, // Port for dev server
    historyApiFallback: true, // Serve index.html for all routes (SPA)
  },
};
