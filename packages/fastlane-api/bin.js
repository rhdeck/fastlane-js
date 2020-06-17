#!/usr/bin/env node
const getFastlaneAPI = require(".");
const { format } = require("prettier");
const { writeFileSync } = require("fs");
const { resolve } = require("path");
const { stringify } = require("yaml");
const commander = require("commander");
commander.description("Generate JSON or YAML formatted API from Fastlane");
commander.option(
  "-f --file [filePath]",
  "target file for serialized output (defaults to stdout)"
);
commander.option(
  "-d --debug",
  "Debug mode - leave the fastlane directory and auto-generated files behind",
  false
);
commander.option("-y --yaml", "Generate YAML instead of JSON", false);
commander.parse(process.argv);
const { file, debug, yaml } = commander;
if (file) fullpath = resolve(file);
const o = getFastlaneAPI({ debug });
const out = yaml ? stringify(o) : format(JSON.stringify(o), { parser: "json" });
if (file) writeFileSync(fullpath, out);
else process.stdout.write(out);
