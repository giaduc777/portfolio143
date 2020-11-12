const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, "build"),
      filename: 'bundle.js'
    },
    mode: 'development',
    serve: {
        content: path.resolve(__dirname, "build")
      },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }
            ]
        },
        {
            test: /\.scss$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.(jpeg|jpg|png)$/,
            use: [
              {
                loader: 'url-loader?name=app/images/[name].[ext]',
              },
            ],
          }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
          filename: 'styles.css'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve('./index.html'),
      })
  ]
  };