const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    devtool: "inline-source-map", 
    entry: "./src/index.ts",
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname,'./index.html'),
            filename: 'index.html'
          }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'), 
        compress: true, 
        historyApiFallback: true, 
        hot: true,
    }
}