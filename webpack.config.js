const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        pageA: path.resolve(__dirname, './Webpack/demo/src/pageA.js'),
        pageB: path.resolve(__dirname, './Webpack/demo/src/pageB.js'),
    },
    output: {
        path: path.resolve(__dirname, './Webpack/demo/dist'),
        filename: '[name].[chunkhash:8].js',
    },
    optimization: {
        splitChunks: {
            minChunks: 2,
            name: 'vendor',
        }
    }
    // plugins: [
    //     new webpack.optimize.SplitChunksPlugin({
    //         minChunks: 2,
    //         name: 'vendor',
    //     }),
    //     new webpack.optimize.SplitChunksPlugin({
    //         chunks:
    //     })
    // ]
}