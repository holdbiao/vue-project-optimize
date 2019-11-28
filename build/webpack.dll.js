const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: {
        // 提前处理的第三方模块 webpack --config ./build/webpack.dll.js  使用webpack@3.6
        vendor: [
            "vue-router",
            "vue/dist/vue.esm.js", // vue
            "jquery"
        ]
    },
    output: {
        path: path.join(__dirname, "..", "/static/js"),
        filename: "[name].dll.js",
        library: "[name]_library"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "..", "/static/js/[name].manifest.json"),
            name: "[name]_library",
            context: path.join(__dirname, '..')
        })
    ]
}