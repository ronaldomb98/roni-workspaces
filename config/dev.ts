import { merge } from 'webpack-merge';
import { WebpackCommonConfig } from "./common";
import { Configuration, WebpackOptionsNormalized } from "webpack";

const webpackConfig: (config) => Partial<WebpackOptionsNormalized | Configuration> = config => ({
    entry: ['react-hot-loader/patch', `${config.src}/index.dev.tsx`],
    devServer: {
        open: true,
        compress: false,
        port: config.port,
        host: config.hostName,
        hot: true,
        client: {
            progress: true,
        },
        static: [
            {
                watch: true,
                directory: config.dist,
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single'
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devtool: 'cheap-module-source-map',
});

export const WebpackDevConfig = (config) => merge<Partial<WebpackOptionsNormalized | Configuration>>(WebpackCommonConfig(config), webpackConfig(config));