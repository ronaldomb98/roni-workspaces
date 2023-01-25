import path from "path";

export const buildConfig = ({ dirname, host, port }) => ({
    port,
    hostName: host,
    isDev: process.env.NODE_ENV === 'development',
    scripts: 'assets/js/[name].[contenthash].js',
    css: 'assets/css/[name].[contenthash].css',
    fonts: 'assets/fonts/[name][ext]',
    src: path.resolve(dirname, 'src'),
    dist: path.resolve(dirname, 'dist'),
    public: path.resolve(dirname, 'public'),
    dirname: dirname
})
