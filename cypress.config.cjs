const { defineConfig } = require('cypress');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: {
        entry: './index.tsx',
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'bundle.js',
          clean: true,
          publicPath: '/',
        },
        resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
        module: {
          rules: [
            {
              test: /\.(ts|tsx)$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|jpg|jpeg|gif|svg)$/i,
              type: 'asset/resource',
            },
          ],
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: './index.html',
          }),
        ],
        devServer: {
          static: {
            directory: path.join(__dirname, 'dist'),
          },
          port: 5173,
          historyApiFallback: true,
          open: true,
        },
        mode: 'development',
      },
    },
  },
});
