const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/spot-auth/latest/',
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
    ],
};

/**
 * We merge common config and prod config of webpack
 */
module.exports = merge(commonConfig, prodConfig);
