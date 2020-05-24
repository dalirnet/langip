const isFa = require('./Fa')
const isAr = require('./AR')

module.exports = (ip, fallback = 'En') => {
    return new Promise(async (resolve) => {
        await isFa(ip).then((status) => {
            if (status) {
                resolve('Fa')
            }
        })
        await isAr(ip).then((status) => {
            if (status) {
                resolve('Ar')
            }
        })
        resolve(fallback)
    })
}
