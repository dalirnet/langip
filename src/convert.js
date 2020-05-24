const fs = require("fs");
const path = require("path");
const logUpdate = require("log-update");
const { parseFile } = require("@fast-csv/parse");

// config
const { file, country } = require("./config.json");
let data = [];

logUpdate(`Converting ...`);
parseFile(path.resolve(`db/ip2location/${file}`))
  .on("data", ([start, end, code]) => {
    if (code == country) {
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
