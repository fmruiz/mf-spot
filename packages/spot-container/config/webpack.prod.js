const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/spot-container/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'spot_container',
            remotes: {
                SpotAuthModule: `spot_auth@${domain}/spot-auth/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies,
        }),
    ],
};

/**
 * We merge common config and prod config of webpack
 */
module.exports = merge(commonConfig, prodConfig);
