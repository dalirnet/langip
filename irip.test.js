const irip = require("./index");
const [[start, end]] = require("./db/IR.json");

test("utility & database", () => {
  expect(irip.utility.ipTolong(irip.utility.longToip(start))).toBe(start);
  expect(irip.utility.ipTolong(irip.utility.longToip(end))).toBe(end);
});
