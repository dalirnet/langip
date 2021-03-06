const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const logUpdate = require('log-update')
const { parseFile } = require('@fast-csv/parse')

// config
const { file, languages } = require('./config.json')
let flatDatabase = {}

logUpdate(`Converting ...`)
parseFile(path.resolve(`db/ip2location/${file}`))
    .on('data', ([start, end, code]) => {
        _.forEach(languages, (countries, language) => {
            if (_.includes(countries, code)) {
                if (!_.has(flatDatabase, language)) {
                    flatDatabase[language] = []
                }
                flatDatabase[language].push([Number(start), Number(end), code])
                logUpdate(
                    `Converted [${flatDatabase[language].length}] for [${language}]`
                )
            }
        })
    })
    .on('end', () => {
        let template = {
            index: fs
                .readFileSync(path.resolve('build/template/index'))
                .toString(),
            module: fs
                .readFileSync(path.resolve('build/template/module'))
                .toString(),
            test: fs
                .readFileSync(path.resolve('build/template/test'))
                .toString(),
        }
        let indexTemplet = []
        _.forEach(flatDatabase, (data, language) => {
            // db file
            fs.writeFileSync(
                path.resolve(`db/${language}.json`),
                JSON.stringify(data)
            )
            // create module
            fs.writeFileSync(
                path.resolve(`language/${language}.js`),
                template.module.replace(new RegExp(/{{LANG}}/g), language)
            )
            // create test
            fs.writeFileSync(
                path.resolve(`test/is${language}.test.js`),
                template.test.replace(new RegExp(/{{LANG}}/g), language)
            )
        })
        // update template items
        _.forEach(_.keys(languages), (language) => {
            indexTemplet.push(
                `exports.is${language} = require('./language/${language}')`
            )
        })
        // update index
        fs.writeFileSync(
            path.resolve('index.js'),
            template.index.replace(
                new RegExp(/{{REQUIRE}}/g),
                indexTemplet.join('\n')
            )
        )
        logUpdate(`Done.`)
    })
    .on('error', () => {
        logUpdate('Convert error!')
    })
