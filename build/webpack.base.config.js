const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', 'tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // 通过一个模板帮助生成网站首页，并把输出文件(output 指定的文件)自动嵌入到这个文件中
        new HTMLWebpackPlugin({
            template: './src/template/index.html'
        })
    ]
}