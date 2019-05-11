const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: ['./src/index.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve('./src'),
    },
    //將loader的設定寫在module的rules屬性中
    module: {
        //rules的值是一個陣列可以存放多個loader物件
        rules: [
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react', '@babel/preset-env'] } } },
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
            { test: /\.(scss|sass)$/,use: [{loader: 'style-loader'},{loader: 'css-loader'},{loader: 'sass-loader'}]},
        ]
    },
    //增加一個給devserver的設定
    devServer: {
        //指定開啟port為9000
        port: 8080
    }
};
