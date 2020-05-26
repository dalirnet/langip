const isAr = require('./Ar')
const isFa = require('./Fa')
const isZh = require('./Zh')
const isEs = require('./Es')
const isFr = require('./Fr')
const isTr = require('./Tr')
const isKo = require('./Ko')

module.exports = (ip, fallback = 'En') => {
    return new Promise(async (resolve) => {
        await isAr(ip).then((status) => {
            if (status) {
                resolve('Ar')
            }
        })
        await isFa(ip).then((status) => {
            if (status) {
                resolve('Fa')
            }
        })
        await isZh(ip).then((status) => {
            if (status) {
                resolve('Zh')
            }
        })
        await isEs(ip).then((status) => {
            if (status) {
                resolve('Es')
            }
        })
        await isFr(ip).then((status) => {
            if (status) {
                resolve('Fr')
            }
        })
        await isTr(ip).then((status) => {
            if (status) {
                resolve('Tr')
            }
        })
        await isKo(ip).then((status) => {
            if (status) {
                resolve('Ko')
            }
        })
        resolve(fallback)
    })
}
