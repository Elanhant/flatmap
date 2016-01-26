var path = require('path');

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
    module: {
        loaders: [{
            test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
            loader: 'babel-loader', // The module to load. "babel" is short for "babel-loader"
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
};
