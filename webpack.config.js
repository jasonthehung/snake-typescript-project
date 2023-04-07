const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

// webpack中的所有配置信息都應該寫在這
module.exports = {
    // 指定文件入口
    entry: "./src/index.ts",

    // 指定打包文件所在目錄
    output: {
        // 指定打包文件的目錄
        path: path.resolve(__dirname, "dist"),

        // 打包後文件的文件
        filename: "bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                // 執行順序從後往前
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        // 要兼容的目標瀏覽器
                                        targets: {
                                            chrome: "88",
                                        },
                                        corejs: "3",
                                        // 使用corejs的方式，"usage" 表示按需要加載
                                        useBuiltIns: "usage",
                                    },
                                ],
                            ],
                        },
                    },
                    "ts-loader",
                ],
                exclude: /node_modules/,
            },

            // 設置less文件的處理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions",
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "less-loader",
                ],
            },
        ],
    },

    mode: "development",

    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "Jason",
            template: "./src/index.html",
        }),
    ],

    resolve: {
        extensions: [".ts", ".js"],
    },
}
