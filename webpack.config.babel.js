import webpack from 'webpack'
import * as path from 'path'
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

const ROOT_DIR = path.resolve(__dirname)
const SRC_DIR = path.resolve(ROOT_DIR, 'src')
const DIST_DIR = path.resolve(ROOT_DIR, 'dist')
const TEST_DIR = path.resolve(ROOT_DIR, 'test')
const LIB_NAME = '$better'

let env = process.env.WEBPACK_ENV
let plugins = [], outputFileName

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }))
  outputFileName = 'better.min.js'
} else {
  outputFileName = 'better.js'
}

export default {
  entry: SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR,
    filename: outputFileName,
    library: LIB_NAME,
    // var, this, commonjs, commonjs2, amd, umd
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
      test: /\.js$/,
      loader: 'eslint-loader',
      // 优先级
      enforce: 'pre',
      include: [SRC_DIR, TEST_DIR]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: plugins
}
