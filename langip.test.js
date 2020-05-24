const _ = require("lodash");
const irip = require("./index");
const { languages } = require("./src/config.json");

_.forEach(languages, (value, key) => {
  test(`utility with database [${key}]`, () => {
    const [[start, end]] = require(`./db/${key}.json`);
    expect(irip.utility.ipTolong(irip.utility.longToip(start))).toBe(start);
    expect(irip.utility.ipTolong(irip.utility.longToip(end))).toBe(end);
  });
});
