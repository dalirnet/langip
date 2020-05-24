const utility = require('./utility')
const database = require('../db/Ar.json')

module.exports = (ip) => utility.find(ip, database)
