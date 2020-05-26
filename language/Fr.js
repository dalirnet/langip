const utility = require('./utility')
const database = require('../db/Fr.json')

module.exports = (ip) => utility.find(ip, database)
