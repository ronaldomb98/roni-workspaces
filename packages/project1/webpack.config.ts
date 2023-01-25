import { buildConfig, WebpackDevConfig, WebpackProdConfig } from '../../config';

const config = buildConfig({ dirname: __dirname, host: 'localhost', port: 3000 })

console.log(config)

export default config.isDev ? WebpackDevConfig(config) : WebpackProdConfig(config)
