const utility = require('./utility')
const database = require('../db/Es.json')

module.exports = (ip) => utility.find(ip, database)
