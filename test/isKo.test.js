const _ = require('lodash')
const { utility } = require('../index')
const isKo = require('../language/Ko')
const [start, end] = _.sample(require(`../db/Ko.json`))

const randomLong = _.random(start, end - 1)
const ip = utility.longToip(randomLong)
test(`isKo [${ip}] => [true]`, async () => {
    expect.assertions(1)
    let test = await isKo(ip)
    expect(test).toBe(true)
})
const fallbackIp = '0.0.0.0'
test(`isKo [${fallbackIp}] => [false]`, async () => {
    expect.assertions(1)
    let test = await isKo(fallbackIp)
    expect(test).toBe(false)
})
