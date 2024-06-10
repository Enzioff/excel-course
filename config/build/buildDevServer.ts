import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions) => {
  const { port } = options;

  return {
    port: port,
    open: true,
    hot: true,
    watchFiles: './',
  };
};
