const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/spot-dashboard/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'spot_dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './SpotDashboardApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        }),
    ],
};

/**
 * We merge common config and prod config of webpack
 */
module.exports = merge(commonConfig, prodConfig);
