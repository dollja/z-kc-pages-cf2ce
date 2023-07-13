// webpack.config.js
const webpack = require('webpack')
const dotenv = require('dotenv')
const autoprefixer = require('autoprefixer');


module.exports = {
  mode: 'none',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.GEO_API': JSON.stringify('https://api.www.s81c.com/webmaster/dbip/'),
        'process': JSON.stringify('https://api.www.s81c.com/webmaster/dbip/')
    })
],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // `autoprefixer` is a requirement for Carbon core Sass code
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
              sassOptions: {
                includePaths: ['/node_modules', '../../../node_modules'],
                // `enable-css-custom-properties` and `grid-columns-16` feature flags
                // are requirements for Carbon for IBM.com styles
                data: `
                  $feature-flags: (
                    enable-css-custom-properties: true,
                    grid-columns-16: true,
                  );
                `,
              },
            },
          },
        ],
      },
    ],
  },
};
