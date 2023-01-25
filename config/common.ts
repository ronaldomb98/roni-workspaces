import { Configuration } from "webpack";
import { fonts, scripts, styles, svg } from "./modules";
import { cleanWebpackPlugin, envVariablesPlugin, htmlWebpackPlugin } from "./plugins";


export const WebpackCommonConfig: (config) => Configuration = (config) => ({
    output: {
        publicPath: '/',
        path: config.dist,
        filename: config.scripts,
    },
    plugins: [
        htmlWebpackPlugin(config),
        cleanWebpackPlugin,
        envVariablesPlugin(config)
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            "@modules": `${config.src}/modules`,
            "@styles": `${config.src}/styles`,
        }
    },
    module: {
        rules: [styles(config), fonts(config), scripts, svg(config)],
    },
    context: config.dirname,
    mode: config.isDev ? 'development' : 'production',
});