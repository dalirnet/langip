#### Detect language with IP address (langip)

✔️ **Free** & Easy

✔️ Clean & **Fast**

✔️ Zero dependency & **No limit**

✔️ **Without** need licence key

✔️ No **HTTP** connection

✔️ **Ip2Location** database

✔️ Included **Persian** and **Arabic** as default

---

#### Usage

-   Install

```bash
npm install langip --save
```

-   As multi language detector

```javascript
const langip = require("langip")


/* async await */
async () => {
    let lang = await langip.detect("8.8.8.8","En")  /* detect(ip,fallback) */
    console.log(lang)   /* En */
})


/* promise */
langip.detect("103.127.119.132").then((lang) => {
    console.log(lang)   /* Fa */
})
```

-   As specific language (included **Persian** and **Arabic**) _*recommended*_

```javascript
/*
    Persian [Fa]
    Countries [IR, AF, TJ]
*/

const isFa = require("langip/language/Fa")


/* async await */
async () => {
    let status = await isFa("8.8.8.8")  /* isFa(ip) */
    console.log(status) /* false */
})


/* promise */
isFa("103.127.119.132").then((status) => {
    console.log(status) /* true */
})


/*
    Arabic [Ar]
    Countries [SA, IQ, KW, BH, AE, QA, OM]
*/

const isAr = require("langip/language/Ar")


/* async await */
async () => {
    let status = await isAr("194.31.220.14")    /* isAr(ip) */
    console.log(status) /* true */
})


/* promise */
isAr("1.1.1.1").then((status) => {
    console.log(status) /* false */
})
```

-   Utility

```javascript
const { utility } = require("langip")

/* ipTolong(ip) */
let long = utility.ipTolong("2.16.158.255")
console.log(long) /* 34643711 */

/* longToip(long) */
let ip = utility.longToip(42991616)
console.log(ip) /* 2.144.0.0 */
```

---

#### Build

For update IP2Location database or add new language detector

-   Downloading latest database

```bash
npm run download
```

-   Converting large file to small chunk files with [config.json](https://github.com/dalirnet/langip/blob/master/build/config.json)

```bash
npm run convert
```

or

```bash
npm run build
```

---

#### Test

```bash
npm run test
```

-   Detect

```bash
 PASS  test/detect.test.js
  √ detect [94.232.169.153] => [Fa] (5 ms)
  √ detect [85.239.19.138] => [Ar] (2 ms)
  √ detect [0.0.0.0] => [fallback] (1 ms)
```

-   isFa

```bash
 PASS  test/isFa.test.js
  √ isFa [89.42.208.146] => [true] (14 ms)
  √ isFa [0.0.0.0] => [false]
```

-   isAr

```bash
 PASS  test/isAr.test.js
  √ isAr [185.217.8.116] => [true] (3 ms)
  √ isAr [0.0.0.0] => [false]
```

-   Utility

```bash
 PASS  test/utility.test.js
  √ utility [Fa] [42991616] => [2.144.0.0] (2 ms)
  √ utility [Fa] [2.147.255.255] => [43253759] (1 ms)
  √ utility [Ar] [34643456] => [2.16.158.0]
  √ utility [Ar] [2.16.158.255] => [34643711] (1 ms)
```

---

#### IP2Location

This package includes [IP2Location](https://lite.ip2location.com) LITE data
