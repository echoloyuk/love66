var path = require('path');

module.exports = {
    entry: './index.js',
    devtool: "source-map",
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/,
                loader: "file-loader"
            }
        ]
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}