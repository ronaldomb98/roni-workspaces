import { buildConfig, WebpackDevConfig, WebpackProdConfig } from '../../config';
import { merge } from 'webpack-merge';

const config = buildConfig({ dirname: __dirname, host: 'localhost', port: 3001 })

console.log(config)

export default config.isDev ? WebpackDevConfig(config) : WebpackProdConfig(config)
