const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'spot_auth',
            filename: 'remoteEntry.js',
            exposes: {
                './SpotAuthApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};

/**
 * We merge common config and dev config of webpack
 */
module.exports = merge(commonConfig, devConfig);
