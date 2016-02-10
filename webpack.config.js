module.exports = {
  entry: ['./src/entry.js', 'file?name=index.html!jade-html!./src/index.jade'],
  resolve: {
    root: __dirname,
  },
  output: {
    path: './build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"},
      {test: /\.eot$/, loader: "file"},
      {test: /\.ttf$/, loader: "file"},
      {test: /\.woff$/, loader: "file"}
    ]
  }
};
