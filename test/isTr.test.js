const _ = require('lodash')
const { utility } = require('../index')
const isTr = require('../language/Tr')
const [start, end] = _.sample(require(`../db/Tr.json`))

const randomLong = _.random(start, end - 1)
const ip = utility.longToip(randomLong)
test(`isTr [${ip}] => [true]`, async () => {
    expect.assertions(1)
    let test = await isTr(ip)
    expect(test).toBe(true)
})
const fallbackIp = '0.0.0.0'
test(`isTr [${fallbackIp}] => [false]`, async () => {
    expect.assertions(1)
    let test = await isTr(fallbackIp)
    expect(test).toBe(false)
})
