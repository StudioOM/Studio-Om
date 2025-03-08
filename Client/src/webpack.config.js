const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const info = {
  TITLE: 'Studio OM'
}

const config = {
  mode: 'development',
  devtool: 'source-map',

  devServer: {
    static: path.join(__dirname, '../dist'),
    port: 8080,
    host: '0.0.0.0',
    historyApiFallback: true,
    headers: {
      'Cache-Control': 'no-store',
    },
    proxy: {
       '/api': {
            target: 'http://localhost:8080',
            router: () => 'http://localhost:8088',
            logLevel: 'debug'
       }
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            experimentalWatchApi: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(otf|woff)$/,
        type: 'asset/resource',
        generator: {
            filename: './fonts/[name][ext]'
        },
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // You can add options here if needed
          },
        },
        'url-loader', // or 'file-loader' if you prefer
      ],
    },
    ]
  },

  resolve: {
    extensions: [
      '.tsx', '.ts', '.js', '.jsx', '.json'
    ]
  },

  entry: {
    main: './src/index.tsx'
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },

  plugins: [
    new ProgressBarPlugin({ width: 80 }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(["src/img/*"]),
    new MiniCssExtractPlugin({ filename: '[contenthash].css' }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: info.TITLE,
      chunks: ['main'],
      template: './src/index.html',
      templateParameters: { TITLE: info.TITLE }
    }),
  ],
}

module.exports = [ config ];
