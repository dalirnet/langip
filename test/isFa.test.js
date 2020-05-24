const _ = require('lodash')
const { utility } = require('../index')
const isFa = require('../language/Fa')
const [start, end] = _.sample(require(`../db/Fa.json`))

const randomLong = _.random(start, end - 1)
const ip = utility.longToip(randomLong)
test(`isFa [${ip}] => [true]`, async () => {
    expect.assertions(1)
    let test = await isFa(ip)
    expect(test).toBe(true)
})
const fallbackIp = '0.0.0.0'
test(`isFa [${fallbackIp}] => [false]`, async () => {
    expect.assertions(1)
    let test = await isFa(fallbackIp)
    expect(test).toBe(false)
})
