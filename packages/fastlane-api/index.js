#!/usr/bin/env node
const mustache = require("mustache");
const { join } = require("path");
const {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  unlinkSync,
} = require("fs");
const { codegen } = require(join(__dirname, "package.json"));
const { spawnSync } = require("child_process");
const tmp = require("tmp");
const { format } = require("prettier");
const { sync: rimraf } = require("rimraf");
const getFastlaneAPI = ({ debug } = {}) => {
  const template = readFileSync(
    join(__dirname, "templates", "Fastfile.mustache"),
    { encoding: "utf8" }
  );
  if (existsSync(join(__dirname, "Gemfile.lock")))
    unlinkSync(join(__dirname, "Gemfile.lock"));
  const fastlanepath = join(__dirname, "fastlane");
  if (!existsSync(fastlanepath)) mkdirSync(fastlanepath);
  const target = join(fastlanepath, "Fastfile");
  const { name: tempFile, removeCallback, ...stuff } = tmp.fileSync();
  const raw = mustache.render(template, { tempFile, ...codegen });
  const out = format(raw, { parser: "ruby" });
  writeFileSync(target, out);
  process.chdir(__dirname);
  spawnSync("bundle", ["exec", "fastlane", "codegen"]);
  const o = JSON.parse(readFileSync(tempFile, { encoding: "utf8" }));
  if (!debug) {
    removeCallback();
    rimraf(fastlanepath);
  }
  return o;
};
module.exports = getFastlaneAPI;
