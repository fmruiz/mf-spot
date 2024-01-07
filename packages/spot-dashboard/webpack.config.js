const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'spot_dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './SpotDashboard': './src/index',
            },
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
