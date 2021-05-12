const path = require('path');
const base = require("./webpack.base.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(base, {
    mode: "production",
    output: {
        filename: "[name].bundle.[contenthash:4].js",
        path: path.resolve(__dirname, "../_dist"),
        publicPath: "./",
        clean: true,
    },
    devtool: "source-map",

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:4].css",
            chunkFilename: "[id][contenthash:4].css",
        }),
        new CssMinimizerPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["postcss-preset-env", {}]],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
});
