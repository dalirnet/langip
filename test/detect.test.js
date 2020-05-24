const _ = require('lodash')
const langip = require('../index')
const { languages } = require('../build/config.json')

_.forEach(_.keys(languages), (key) => {
    const [start, end] = _.sample(require(`../db/${key}.json`))
    const randomLong = _.random(start, end - 1)
    const ip = langip.utility.longToip(randomLong)
    test(`detect [${ip}] => [${key}]`, async () => {
        expect.assertions(1)
        let test = await langip.detect(ip)
        expect(test).toBe(key)
    })
})

const fallbackIp = '0.0.0.0'
test(`detect [${fallbackIp}] => [fallback]`, async () => {
    expect.assertions(1)
    let test = await langip.detect(fallbackIp)
    expect(test).toBe('En')
})
