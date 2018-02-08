const path = require('path')

const entryPoint = {
  vendor: ['react', 'react-dom']
}

const output = {
  filename: "static/js/[name]-[hash].bundle.js",
  path: path.join(process.cwd(), "dist"),
  publicPath: "/"
}

const resolvers = {
  extensions: [".ts", ".tsx", ".js", ".jsx"],
}

const rules = [
  {
    test: /\.tsx?$/,
    use: "awesome-typescript-loader"
  },
  {
    test: /.(woff|otf|ttf|woff2|jpg|png|svg|eot|gif)$/,
    use: "url-loader?limit=1000"
  },
]

module.exports.entryPoint = entryPoint;
module.exports.output = output
module.exports.resolve = resolvers
module.exports.rules = rules