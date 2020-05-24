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
    path.resolve(`db/${file}.zip`)
  )
  .on("start", (sizeOfFile) => {
    fileSize = sizeOfFile;
  })
  .on("progress", (progress) => {
    logUpdate(
      `Downloading [${Math.floor(progress * 100)}%] from [${prettyBytes(
        fileSize
      )}]`
    );
  })
  .on("end", () => {
    logUpdate(`Extracting ...`);
    decompress(path.resolve(`db/${file}.zip`), path.resolve("db"))
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
