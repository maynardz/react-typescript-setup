const path = require('path');

module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
        {
            test: /\.(tsx|jsx)$/,
            use: [
                {
                    loader: 'ts-loader',
                    loader: 'babel-loader'
                }
            ],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
          }
    ]
  },
  externals: {
    "styled-components": {
        commonjs: "styled-components",
        commonjs2: "styled-components",
        amd: "styled-components",
    },
  },
  resolve: {
      extensions: ['.tsx', '.ts', 'jsx', '.js']
  }
};