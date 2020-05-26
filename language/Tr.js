const utility = require('./utility')
const database = require('../db/Tr.json')

module.exports = (ip) => utility.find(ip, database)
