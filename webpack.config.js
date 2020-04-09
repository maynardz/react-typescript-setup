const path = require('path');

module.exports = {
  entry: './App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtools: 'inline-source-map',
  module: {
    rules: [
        {
            test: /\.tsx$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
  },
  resolve: {
      extensions: ['.tsx', 'jsx', '.js']
  }
};