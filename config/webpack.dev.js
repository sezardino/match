const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = merge(base, {
    mode: 'development',
    output: {
        filename: 'main.[contenthash:4].js',
        path: path.resolve(__dirname, '../_dist'),
        publicPath: '/',
        clean: true
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './',
        compress: true,
        // hot: true,
        port: 9000
    },

    plugins: [
        new ESLintPlugin({
            eslintPath: '../.eslintrc.json'
        })
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['postcss-preset-env', {}]]
                            }
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
})
