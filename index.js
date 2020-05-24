const utility = {
    multipliers: [0x1000000, 0x10000, 0x100, 1],
    ipTolong(ip) {
        let long = 0
        ip.split('.').forEach((part, i) => {
            long += part * this.multipliers[i]
        })
        return Number(long)
    },
    longToip(long) {
        return this.multipliers
            .map((multiplier) => {
                return Math.floor((long % (multiplier * 0x100)) / multiplier)
            })
            .join('.')
    },
}

exports.utility = utility
