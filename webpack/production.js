const common = require('./common');
const path = require('path');
const webpack = require('webpack')
module.exports = {
  entry: {
    application: ['babel-polyfill', path.resolve(process.cwd(), './index.tsx')],
    vendor: common.entryPoint.vendor
  },
  output: common.output,
  resolve: common.resolve,
  module: {
    rules: common.rules,
  },
  plugins: [
    new HTMLPlugin({
      template: path.resolve(process.cwd(), './public/index.html')
    }),
    new TsConfigPathsPlugin({
      tsconfig: path.resolve(process.cwd(), "tsconfig.json"),
      compiler: "typescript"
    }),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}