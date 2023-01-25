import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const scripts: RuleSetRule = {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
};

export const fonts: (config) => RuleSetRule = config => ({
    test: /\.(woff|woff2)$/,
    type: 'asset/resource',
    generator: {
        filename: config.fonts
    }
});

export const svg: (config) => RuleSetRule = (config) => ({
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
    options: {
        esModule: true
    }
});

export const styles: (config) => RuleSetRule = (config) => ({
    test: /\.s[ac]ss$/i,
    use: [
        config.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: '[path][name]__[local]'
                },
            }
        },
        {
            loader: 'sass-loader',
            options: {
                additionalData: `
                                @use "sass:map";
                                @use "sass:selector";
                                @import "generic.scss";
                            `,
                sassOptions: {
                    includePaths: [config.src, `${config.src}/styles`]
                }
            }
        }
    ],
})
