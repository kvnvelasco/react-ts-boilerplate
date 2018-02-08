const common = require('./common');
const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: {
    application: ['babel-polyfill', 'react-hot-loader/patch', path.resolve(process.cwd(), './index.tsx')],
    vendor: common.entryPoint.vendor
  },
  output: common.output,
  resolve: common.resolve,
  module: {
    rules: common.rules,
  },
   plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new HTMLPlugin({
       template: path.resolve(process.cwd(), './public/index.html')
     }),
     new webpack.DefinePlugin({ // <-- key to reducing React's size
       'process.env': {
         'NODE_ENV': JSON.stringify('development')
       }
     }),
     new TsConfigPathsPlugin({
       tsconfig: path.resolve(process.cwd(), "tsconfig.json"),
       compiler: "typescript"
     }),
   ],
   devServer: require('./devServer')
}