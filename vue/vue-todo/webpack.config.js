// 运行环境是node 优先使用common.js 规范
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname + "/src/main.js"),
    output: {
        path: path.resolve(__dirname + "/dist/js"),
        filename: "bundle.js"
    },
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        ignored: /node_modules|dist|build|docs|css/,
        poll: 1000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {  
        /** 
         * Vue v2.x之后NPM Package默认设置只会生成runtime-only 版本，若要使用standalone功能則需如下设置 
         * 否则会报错：Failed to mount component: template or render function not defined. 
         */  
        alias: {  
            vue: 'vue/dist/vue.esm.js'  
        },
        extensions: ['.js', '.vue']
    } 
}