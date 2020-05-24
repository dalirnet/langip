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
        _.forEach(flatDatabase, (data, language) => {
            fs.writeFileSync(
                path.resolve(`db/${language}.json`),
                JSON.stringify(data)
            )
        })
        logUpdate(`Done.`)
    })
    .on('error', () => {
        logUpdate('Convert error!')
    })
