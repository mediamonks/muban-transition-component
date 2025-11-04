const path = require('path');

module.exports = {
  devServer: {
    static: './',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'bundle.js',
  },
};
