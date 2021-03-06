#!/usr/bin/env node
import { program } from "commander";
import { join } from "path";
import { withFastlane, Fastlane } from "./";
import { register } from "ts-node";
import { existsSync, unlinkSync } from "fs";
import { spawnSync } from "child_process";
register();
let fastfilepath = "";
const tsPath = join(process.cwd(), "fastfile.ts");
const jsPath = join(process.cwd(), "fastfile.js");
const tempPath = join(process.cwd(), "_fastfile.js");
if (existsSync(tsPath)) {
  spawnSync("tsc", [tsPath, "--outFile", tempPath]);
  fastfilepath = tempPath;
} else if (existsSync(jsPath)) fastfilepath = jsPath;
else console.error("Could not find a fastfile.js or fastfile.ts");
const ff = require(fastfilepath);
if (existsSync(tempPath)) unlinkSync(tempPath);
program.option("--noWrap", "Do not wrap the function in a withFastlane call");
program.option(
  "--port <port>",
  "Specify port for communicating with Fastlane socket server (default: 2000)"
);
program.option(
  "--silent",
  "Run in noninteractive mode (less text, but also no user prompts)"
);
Object.entries(ff).map(([key, value]) => {
  if (typeof value !== "function") return;
  program.command(key).action(async ({ noWrap, port = 2000, silent }) => {
    try {
      if (noWrap) {
        await value();
      } else {
        await withFastlane(<(f: Fastlane) => Promise<any>>value, {
          port,
          isInteractive: !silent,
        });
      }
    } catch (e) {
      console.error(e);
    }
  });
});
program.parse(process.argv);
