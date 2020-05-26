const utility = require('./utility')
const { languages } = require('../build/config.json')
const languagesKey = Object.keys(languages)

module.exports = (ip, fallback = 'En', target = languagesKey) => {
    return new Promise(async (resolve) => {
        for (const lang of target) {
            if (languagesKey.includes(lang)) {
                const database = require(`../db/${lang}.json`)
                await utility.find(ip, database).then((status) => {
                    if (status) {
                        resolve(lang)
                    }
                })
            }
        }
        resolve(fallback)
    })
}
