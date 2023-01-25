import { merge } from 'webpack-merge';
import { WebpackCommonConfig } from "./common";
import { Configuration, WebpackOptionsNormalized } from "webpack";
import { cleanWebpackPlugin, cssMinimizerWebpackPlugin, miniCssExtractPlugin, terserWebpackPlugin } from "./plugins";

const webpackConfig: (config) => Partial<WebpackOptionsNormalized | Configuration> = config => ({
    entry: [`${config.src}/index.tsx`],
    plugins: [cleanWebpackPlugin, miniCssExtractPlugin(config)],
    optimization: {
        minimize: true,
        minimizer: [
            terserWebpackPlugin,
            cssMinimizerWebpackPlugin
        ]
    }
  });

  export const WebpackProdConfig = config => merge<Partial<WebpackOptionsNormalized | Configuration>>(WebpackCommonConfig(config), webpackConfig(config));