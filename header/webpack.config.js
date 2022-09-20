const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('./package.json');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://mfe-react-guest.sujitsingh.in/', // For Prod // TODO: Split config to another file
        // publicPath: '/', // For Dev
        filename: 'bundle.js',
    },
    target: 'web',
    devServer: {
        static: ['./dist'],
        // devMiddleware: {
        //     index: 'index.html',
        //     // writeToDisk: true, // If this is false, webpack cretes and keeps bundle in memory and runs from there.
        // },
        liveReload: true,
        hot: true,
        // port: 8083,
        open: true,

        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    performance: {
        hints: false,
    },
    resolve: {
        /** "extensions"
         * If multiple files share the same name but have different extensions, webpack will
         * resolve the one with the extension listed first in the array and skip the rest.
         * This is what enables users to leave off the extension when importing
         */
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // This decides if asset is to be merged into bundle js (type: 'asset/inline') itself
                        // or kept as separate file (type: 'asset/resource')
                        // We have image of size 11.6 KB so
                        maxSize: 11.6 * 1024, // Creates inside bundle js (asset/inline)
                        // maxSize: 11.5 * 1024 // Creates separate resource (asset/resource)
                    },
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('./index.html'),
        }),
        new ModuleFederationPlugin({
            name: 'header',
            filename: 'remoteEntry.js',
            exposes: {
                './HeaderComponent': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        }),
    ],
};
