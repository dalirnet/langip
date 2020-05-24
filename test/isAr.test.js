const _ = require('lodash')
const { utility } = require('../index')
const isAr = require('../language/Ar')
const [start, end] = _.sample(require(`../db/Ar.json`))

const randomLong = _.random(start, end - 1)
const ip = utility.longToip(randomLong)
test(`isAr [${ip}] => [true]`, async () => {
    expect.assertions(1)
    let test = await isAr(ip)
    expect(test).toBe(true)
})
const fallbackIp = '0.0.0.0'
test(`isAr [${fallbackIp}] => [false]`, async () => {
    expect.assertions(1)
    let test = await isAr(fallbackIp)
    expect(test).toBe(false)
})
