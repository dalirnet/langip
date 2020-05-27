const _ = require('lodash')
const path = require('path')
const webpack = require('webpack')
const packageJson = require('./package.json')
const { languages } = require('./build/config.json')

// banner
let banner = `
    LangIp  v${packageJson.version}
    url     https://github.com/dalirnet/langip#readme
    file    /dist/[file]
`

// entry
let entry = {}
_.forEach(_.keys(languages), (lang) => {
    entry[lang] = `./language/${lang}.js`
})

// config
let config = (entry, library) => {
    return {
        target: 'web',
        mode: 'production',
        entry,
        plugins: [
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
            library,
        },
        performance: {
            hints: false,
        },
    }
}

module.exports = [
    config({ index: './index.js' }, 'langip'),
    config(entry, 'is[name]'),
]
