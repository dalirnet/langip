const _ = require('lodash')
const path = require('path')
const webpack = require('webpack')
const packageJson = require('./package.json')
const { languages } = require('./build/config.json')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// entry
let entry = {
    langip: './index.js',
}
_.forEach(_.keys(languages), (lang) => {
    entry[`is${lang}`] = `./language/${lang}.js`
})

let banner = `
    LangIp  v${packageJson.version}
    url     https://github.com/dalirnet/langip#readme
    file    /dist/[file]
    lib     [name]()
`

module.exports = {
    target: 'web',
    mode: 'production',
    entry,
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin({
            banner,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        esmodules: true,
                                    },
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: '[name]',
    },
    performance: {
        hints: false,
    },
}
