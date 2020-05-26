const _ = require('lodash')
const { utility } = require('../index')
const isFr = require('../language/Fr')
const [start, end] = _.sample(require(`../db/Fr.json`))

const randomLong = _.random(start, end - 1)
const ip = utility.longToip(randomLong)
test(`isFr [${ip}] => [true]`, async () => {
    expect.assertions(1)
    let test = await isFr(ip)
    expect(test).toBe(true)
})
const fallbackIp = '0.0.0.0'
test(`isFr [${fallbackIp}] => [false]`, async () => {
    expect.assertions(1)
    let test = await isFr(fallbackIp)
    expect(test).toBe(false)
})
