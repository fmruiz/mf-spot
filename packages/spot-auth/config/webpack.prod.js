const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'spot_auth',
            filename: 'remoteEntry.js',
            exposes: {
                './SpotAuth': '../src/index',
            },
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
