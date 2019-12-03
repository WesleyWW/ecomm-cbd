const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { 
                            minimize: true 
                            }
                    }
                ]
            },
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: { 
            //                 name: "[name].[ext]"
            //                 }
            //         }
            //     ],
            //     exclude: path.resolve(__dirname, '/src/index.html')
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    publicPath: 'images',
                    name: '[name].[ext]',
                    esModule: false
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/shop/shop.html",
            inject: true,
            filename: "shop.html",
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/blog/blog.html",
            inject: true,
            filename: "blog.html",
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/story/story.html",
            inject: true,
            filename: "story.html",
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/faq/faq.html",
            inject: true,
            filename: "faq.html",
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/contact/contact.html",
            inject: true,
            filename: "contact.html",
            chunks: ['index']
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}