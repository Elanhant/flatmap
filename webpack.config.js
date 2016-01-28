var path = require('path');
ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, './main.js')
    ],
    plugins: [
        new ExtractTextPlugin('app.css', {
            allChunks: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass')
            },
            {
                test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
                loader: 'babel-loader', // The module to load. "babel" is short for "babel-loader"
                query: {
                    plugins: [
                        'transform-decorators-legacy'
                    ],
                    presets: ['react', 'es2015', 'stage-0', 'stage-1']
                }
            }
        ]
    },
};
