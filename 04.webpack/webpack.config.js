const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //当需要将index.html打包进dist文件夹时./ 不需要时dist/
        publicPath: "dist"
    },
    resolve: {
        // webpack默认使用的是vue.runtime-only.js版本 
        // 需要使用vue的完整版本vue.esm.js 通过别名alias
        alias: {
            "vue$": "vue/dist/vue.esm.js",
        }
    },
    mode: "development",
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "🐷🍖",
            publicPath: "./",
            favicon: "./img/8.jpg"
        }),
    ],
    devServer: {
        port: 9000,
        open: true,
        inline: true
    }
}