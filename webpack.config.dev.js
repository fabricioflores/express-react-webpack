import webpack from 'webpack'
import path from 'path'

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test:    /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader:  'babel-loader',
        query:   {
            presets: ['es2015', 'react'],
        },
    }],
  },
}