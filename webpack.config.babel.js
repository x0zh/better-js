import webpack from 'webpack';
import * as path from 'path';
let UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

let env = process.env.WEBPACK_ENV;
let plugins = [], outputFileName;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFileName = 'better.min.js';
} else {
    outputFileName = 'better.js';
}

export default {
    entry: {
        _b: './src/better.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: outputFileName,
        library: '[name]',
        // var, this, commonjs, commonjs2, amd, umd
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: plugins
}