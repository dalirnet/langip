const _ = require("lodash");
const langip = require("./index");
const { languages } = require("./src/config.json");

_.forEach(languages, (value, key) => {
  test(`utility with database [${key}]`, () => {
    const [[start, end]] = require(`./db/${key}.json`);
    expect(langip.utility.ipTolong(langip.utility.longToip(start))).toBe(start);
    expect(langip.utility.ipTolong(langip.utility.longToip(end))).toBe(end);
  });
});
