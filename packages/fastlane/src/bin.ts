import { program } from "commander";
import { join } from "path";

const fastfilepath = join(process.cwd(), "fastfile.js");
const ff = require(fastfilepath);
Object.entries(ff).map(([key, value]) => {
  if (typeof value !== "function") return;
  program.command(key).action(() => {
    value();
  });
});
program.parse(process.argv);
