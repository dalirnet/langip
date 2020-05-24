const path = require("path");
const wget = require("wget-improved");
const logUpdate = require("log-update");
const prettyBytes = require("pretty-bytes");
const decompress = require("decompress");

// config
const { file } = require("./config.json");
let fileSize = 0;

logUpdate(`Downloading ...`);
wget
  .download(
    `https://download.ip2location.com/lite/${file}.ZIP`,
    path.resolve(`db/ip2location/${file}.zip`)
  )
  .on("start", (sizeOfFile) => {
    fileSize = sizeOfFile;
  })
  .on("progress", (progress) => {
    logUpdate(
      `Downloaded [${prettyBytes(fileSize * progress)}] of [${prettyBytes(
        fileSize
      )}]`
    );
  })
  .on("end", () => {
    logUpdate(`Extracting ...`);
    decompress(
      path.resolve(`db/ip2location/${file}.zip`),
      path.resolve("db/ip2location")
    )
      .then(() => {
        logUpdate(`Done.`);
      })
      .catch(() => {
        logUpdate("Extract error!");
      });
  })
  .on("error", () => {
    logUpdate("Download error!");
  });
