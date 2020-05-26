const utility = require('./utility')
const database = require('../db/Zh.json')

module.exports = (ip) => utility.find(ip, database)
