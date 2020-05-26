const _ = require('lodash')
const { utility } = require('../index')
const isZh = require('../language/Zh')
const [start, end] = _.sample(require(`../db/Zh.json`))

const randomLong = _.random(start, end - 1)
const ip = utility.longToip(randomLong)
test(`isZh [${ip}] => [true]`, async () => {
    expect.assertions(1)
    let test = await isZh(ip)
    expect(test).toBe(true)
})
const fallbackIp = '0.0.0.0'
test(`isZh [${fallbackIp}] => [false]`, async () => {
    expect.assertions(1)
    let test = await isZh(fallbackIp)
    expect(test).toBe(false)
})
