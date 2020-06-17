const { titleCase } = require("title-case");
const getFastlaneAPI = require("@fastlanejs/api");
const { join } = require("path");
const { existsSync, readFileSync, writeFileSync } = require("fs");
const makeCamelCase = (s) =>
  s
    .split("_")
    .map((v, i) => (i ? titleCase(v) : v))
    .join("");
const proper = (s) => [s[0].toUpperCase(), s.substring(1, s.length)].join("");

const getCachedAPI = () => {
  const cachePath = join(process.cwd(), "cached_api.json");
  if (existsSync(cachePath)) {
    return JSON.parse(readFileSync(cachePath, { encoding: "utf8" }));
  } else {
    const api = getFastlaneAPI({});
    writeFileSync(cachePath, JSON.stringify(api));
    return api;
  }
};
module.exports = {
  makeCamelCase,
  getCachedAPI,
  proper,
};
