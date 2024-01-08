const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8083/',
    },
    devServer: {
        port: 8083,
        historyApiFallback: {
            index: '/index.html',
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'spot_settings',
            filename: 'remoteEntry.js',
            exposes: {
                './SpotSettingsApp': './src/bootstrap',
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
