import path from 'path';
import buildPlugins from './config/build/buildPlugins';
import { buildLoaders } from './config/build/buildLoaders';
import { buildResolvers } from './config/build/buildResolvers';
import { buildDevServer } from './config/build/buildDevServer';
import { BuildEnv, BuildMode, BuildOptions } from './config/build/types/config';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const port: number = env.port || 3000;
  const isDev: boolean = mode === 'development';

  const options: BuildOptions = {
    mode,
    port,
    isDev,
    path: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      output: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
    },
  };

  return {
    mode: options.mode,
    entry: options.path.entry,
    output: {
      filename: isDev ? 'build.[contenthash:8].js' : 'build.js',
      path: options.path.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devServer: isDev && buildDevServer(options),
    devtool: isDev && 'inline-source-map',
  };
};
