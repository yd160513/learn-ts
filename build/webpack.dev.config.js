module.exports = {
    /**
     * 开启 source map
     * 官方推荐插件
     * cheap: 忽略 source map 中的列信息
     * module: 定位到 ts 源码，而不是经过 loader 转义后的 js 源码
     * eval-source-map: 会将 source map 以 dataURL 的形式打包到文件中
     */
    devtool: 'cheap-module-eval-source-map'
}