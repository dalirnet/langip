const _ = require('lodash')
const langip = require('../index')
const { languages } = require('../build/config.json')

let selectedIp = {}
_.forEach(_.keys(languages), (key) => {
    const [start, end] = _.sample(require(`../db/${key}.json`))
    const randomLong = _.random(start, end - 1)
    const ip = langip.utility.longToip(randomLong)
    selectedIp[key] = ip
    test(`detect [${ip}] => [${key}]`, async () => {
        expect.assertions(1)
        let test = await langip.detect(ip)
        expect(test).toBe(key)
    })
})

const fallbackIp = '0.0.0.0'
test(`detect fallback [${fallbackIp}] => [En]`, async () => {
    expect.assertions(1)
    let test = await langip.detect(fallbackIp)
    expect(test).toBe('En')
})

test(`detect custom fallback [Fa] [${fallbackIp}] => [Fa]`, async () => {
    expect.assertions(1)
    let test = await langip.detect(fallbackIp, 'Fa')
    expect(test).toBe('Fa')
})

test(`detect custom target [Ar, Fa] [${selectedIp['Fa']}] => [Fa]`, async () => {
    expect.assertions(1)
    let test = await langip.detect(selectedIp['Fa'], 'En', ['Ar', 'RT', 'Fa'])
    expect(test).toBe('Fa')
})

test(`detect custom target [Ar] [${selectedIp['Fa']}] => [En]`, async () => {
    expect.assertions(1)
    let test = await langip.detect(selectedIp['Fa'], 'En', ['Ar'])
    expect(test).toBe('En')
})
