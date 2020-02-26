const withCSS = require('@zeit/next-css')

const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  withCSS,
  webpack: (config, { dev }) => {
    config.plugins = config.plugins || []

    config.module.rules.push({ test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] })

    if (!dev) {
      config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')

      config.optimization.minimizer = [
        new TerserPlugin({
          parallel: true,
          sourceMap: true
        })
      ]
    }

    if (config.resolve.alias) {
      delete config.resolve.alias.react
      delete config.resolve.alias['react-dom']

      config.resolve.alias['styled-components'] = require.resolve('styled-components')
    }

    // Important: return the modified config
    return config
  }
}
