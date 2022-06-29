/**
 * clean-webpack-plugin: 每次成功构建之后清除 dist 目录
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}