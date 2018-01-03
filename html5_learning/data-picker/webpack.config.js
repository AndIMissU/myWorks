const webpack = require('webpack');
const path = require('path');
module.exports = {
    // 入口文件 
    entry: {
        // bundle打包
        'tqb-date-picker': './src/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        // 放在dist目录下  再windows和 Linux 目录下面盘符和根目录不一样  windows： C:\  linux： /var/root
        // __dirname可以得到绝对路径  这是一个node常量
        path: path.resolve(__dirname, './dist')
    },
    module: {
        // 加载器  import 这是js模块化里面 只要交给 babel-loader 这个就会将babel编译的功能自动加载上
        // 这个就是babel-loader的概念  
        // 如果在开发中又需要 stylus 的功能  然后babel也能管 直接用stylus-loader 
        loaders: [
            {
                // 将所有以js结尾的东西都找出来
                test: /\.js/,
                exclude: /node_modules/,
                loaders: ["babel-loader", "eslint-loader"]
            }
        ]
    },
    externals: {
        'jquery': 'jQuery'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules|dist|build|docs|css/,
        // 间隔一秒去监听
        poll: 1000 
    }
}