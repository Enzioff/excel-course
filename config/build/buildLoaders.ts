import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = (options: BuildOptions) => {
  const { isDev } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  };

  return [typescriptLoader, styleLoader];
};
