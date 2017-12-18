import path from 'path'
import webpack from 'webpack'

export default {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'client/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'client'),
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
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
