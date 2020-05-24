const utility = require('./utility')
const database = require('../db/Fa.json')

module.exports = (ip) => utility.find(ip, database)
