const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main/main.ts',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.otf$/,
                loader: "file-loader",
                options: {
                    outputPath: "assets/fonts",
                    name(file) {
                        return "[name].[ext]";
                    }
                }
            },
            {
                test: /\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader',
                options: {
                    outputPath: "assets/images",
                    name(file) {
                        return "[name].[ext]";
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};