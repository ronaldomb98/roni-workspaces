import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserWebpackPlugin from "terser-webpack-plugin";
import CssMinimizerWebpackPlugin from "css-minimizer-webpack-plugin";
import { HotModuleReplacementPlugin, container, DefinePlugin } from 'webpack';

export const htmlWebpackPlugin = (config) => new HtmlWebpackPlugin({
    inject: 'body',
    template: `${config.public}/index.html`,
    favicon: `${config.public}/favicon.png`,
});

export const cleanWebpackPlugin = new CleanWebpackPlugin();

export const miniCssExtractPlugin = (config) => new MiniCssExtractPlugin({
    filename: config.css
});

export const  terserWebpackPlugin = new TerserWebpackPlugin();

export const  cssMinimizerWebpackPlugin = new CssMinimizerWebpackPlugin();

export const hotModuleReplacementPlugin = new HotModuleReplacementPlugin();

export const envVariablesPlugin = (config) => new DefinePlugin({
    'process.env.NODE_ENV': config.isDev ? JSON.stringify(process.env.NODE_ENV) : 'NODE_ENV'
});
