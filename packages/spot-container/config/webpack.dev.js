const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'spot_container',
            remotes: {
                SpotAuthModule:
                    'spot_auth@http://localhost:8081/remoteEntry.js',
                SpotDashboardModule:
                    'spot_dashboard@http://localhost:8082/remoteEntry.js',
            },
            shared: packageJson.dependencies,
        }),
    ],
};

/**
 * We merge common config and dev config of webpack
 */
module.exports = merge(commonConfig, devConfig);
