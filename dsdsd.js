const { utility, detect, isAr } = require('./index')
// const isFa = require('./language/Fa')
// const isAr = require('./language/Ar')

// console.log(utility.longToip(3250326528))
// console.log(utility.longToip(3250327039))
// detect('45.9.250.122').then((lang) => {
//     console.log(lang)
// })

isAr('45.9.250.122').then((status) => {
    console.log(status)
})
