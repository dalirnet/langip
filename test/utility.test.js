const _ = require('lodash')
const langip = require('../index')
const { languages } = require('../build/config.json')

_.forEach(_.keys(languages), (key) => {
    test(`utility & database [${key}]`, () => {
        const [[start, end]] = require(`../db/${key}.json`)
        expect(langip.utility.ipTolong(langip.utility.longToip(start))).toBe(
            start
        )
        expect(langip.utility.ipTolong(langip.utility.longToip(end))).toBe(end)
    })
})
