const path = require('path');
const webpack = require('webpack');
const minJSON = require('jsonminify');
const html_settings = require('./settings.js');

const plugins = {
  progress: require('webpackbar'),
  clean: require('clean-webpack-plugin'),
  extractText: require('extract-text-webpack-plugin'),
  html: require('html-webpack-plugin'),
  copy: require('copy-webpack-plugin'),
  favicons: require('favicons-webpack-plugin'),
  ftpupload: require('webpack-ftp-upload-plugin')
}

module.exports = (env = {}, argv) => {
  const isProduction = argv.mode === 'production'

  let config = {
    context: path.resolve(__dirname, 'src'),
    performance: { hints: false },
    entry: {
      vendor: [
        './styles/vendor.scss',
        './scripts/vendor.js'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'public_html'),
      filename: 'scripts/[name].js',
      publicPath: '',
      crossOriginLoading: "anonymous"
    },

    module: {
      rules: [
        {
          test: /\.(s[ac]ss)$/,
          use: plugins.extractText.extract({
            use: [
              {
                loader: 'css-loader',
              },
              {
                loader: 'postcss-loader',
                options: {
                   plugins: (() => {

                    return isProduction ? [
                      require('autoprefixer')({
                        browsers: ['last 2 versions']
                      })

                      // require('cssnano')({
                      //   discardComments: {
                      //     removeAll: true
                      //   }
                      // })
                    ] : []
                   })()
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  outputStyle: 'expanded',
                  sourceMap: ! isProduction
                }
              }
            ]
          })
        },
        // {
        // test: /\.html$/,
        // exclude: /node_modules/,
        // loader: "eslint-loader",
        // },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          exclude: /fonts/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: ! isProduction,
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                }
              }
            }
          ]
        },
        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          exclude: /images/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }]
        },
        {
          test: /\.html$/,
          include: path.join(__dirname, 'src/templates'),
          use: {
            loader: 'html-loader',
            options: {
              interpolate: true,
              minimize: true,
              removeComments: true,
              collapseWhitespace: true,
              attrs: ['img:src', 'img:data-src', 'link:href']
            }
          },
        }
      ]
    },

    devServer: {
      contentBase: path.join(__dirname, 'src'),
      compress: true,
      overlay: {
        warnings: true,
        errors: true
      },
      quiet: true,
      open: true
    },

    plugins: (() => {
      let common = [
        new plugins.extractText({
          filename: '[name].css'
        }),
        new plugins.html(html_settings),
        new plugins.progress({
          color: '#5C95EE'
        })
      ]

      const production = [
        new plugins.clean(['public_html']),
        new plugins.copy([
          {
            from:'images',to:'images'

          }
        ]),
        new plugins.copy([
          {
            from: 'data/**/*.json',
            // to: '',
            transform: content => {
              return minJSON(content.toString())
            }
          }
        ])
      ]

      const development = [

      ]

      return isProduction
        ? common.concat(production)
        : common.concat(development)

    })(),

    devtool: (() => {
      return isProduction
        ? ''
        : 'source-map'
    })(),

    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '~': path.resolve(__dirname, 'src/scripts/')
      },
      extensions: [".tsx", ".ts", ".js"]
    }
  }

  return config
};
