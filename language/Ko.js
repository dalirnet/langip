const utility = require('./utility')
const database = require('../db/Ko.json')

module.exports = (ip) => utility.find(ip, database)
