import webpack from 'webpack';
import { BuildOptions } from './types/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const buildPlugins = (options: BuildOptions) => {
  const { isDev } = options;
  return [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? 'main.[contenthash:8].css' : 'main.css',
      chunkFilename: isDev ? 'main.[contenthash:8].css' : 'main.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: options.path.html,
    }),
  ];
};

export default buildPlugins;
