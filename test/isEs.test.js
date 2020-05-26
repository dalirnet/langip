const _ = require('lodash')
const { utility } = require('../index')
const isEs = require('../language/Es')
const [start, end] = _.sample(require(`../db/Es.json`))

const randomLong = _.random(start, end - 1)
const ip = utility.longToip(randomLong)
test(`isEs [${ip}] => [true]`, async () => {
    expect.assertions(1)
    let test = await isEs(ip)
    expect(test).toBe(true)
})
const fallbackIp = '0.0.0.0'
test(`isEs [${fallbackIp}] => [false]`, async () => {
    expect.assertions(1)
    let test = await isEs(fallbackIp)
    expect(test).toBe(false)
})
