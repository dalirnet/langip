const _ = require('lodash')
const langip = require('../index')
const { languages } = require('../build/config.json')

_.forEach(_.keys(languages), (key) => {
    const [[start, end]] = require(`../db/${key}.json`)
    const IpStart = langip.utility.longToip(start)
    const IpEnd = langip.utility.longToip(end)
    test(`utility [${key}] [${start}] => [${IpStart}]`, () => {
        expect(langip.utility.ipTolong(IpStart)).toBe(start)
    })
    test(`utility [${key}] [${IpEnd}] => [${end}]`, () => {
        expect(langip.utility.longToip(end)).toBe(IpEnd)
    })
})
