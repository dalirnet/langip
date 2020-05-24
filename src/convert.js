const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const logUpdate = require("log-update");
const { parseFile } = require("@fast-csv/parse");

// config
const { file, languages } = require("./config.json");
let flatDatabase = {};

logUpdate(`Converting ...`);
parseFile(path.resolve(`db/ip2location/${file}`))
  .on("data", ([start, end, code]) => {
    _.forEach(languages, (countries, language) => {
        
    });
    if (code == language) {
      logUpdate(`Converted [${data.length}] row`);
      data.push([Number(start), Number(end)]);
    }
  })
  .on("end", () => {
    fs.writeFileSync(path.resolve(`db/${country}.json`), JSON.stringify(data));
    logUpdate(`Done.`);
  })
  .on("error", () => {
    logUpdate("Convert error!");
  });
