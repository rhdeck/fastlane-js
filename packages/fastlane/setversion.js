const { join } = require("path");
const { readFileSync, writeFileSync } = require("fs");
const getAPI = require("@fastlanejs/api");
const { version } = getAPI();
const packagePath = join(__dirname, "package.json");
const o = JSON.parse(readFileSync(packagePath, { encoding: "utf8" }));
if (o.version !== version) {
  o.version = version;
  writeFileSync(packagePath, JSON.stringify(o, null, 2));
}
