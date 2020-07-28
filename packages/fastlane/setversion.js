const { join } = require("path");
const { readFileSync } = require("fs");
const { spawnSync } = require("child_process");
const getAPI = require("@fastlanejs/api");
const { version } = getAPI();

const packagePath = join(__dirname, "package.json");
const o = JSON.parse(readFileSync(packagePath, { encoding: "utf8" }));
if (o.version !== version) {
  const [major, minor, build] = version.split(".");
  const [packagemajor, packageminor, packagebuild] = o.version.split(".");
  if (
    major > packagemajor ||
    (major === packagemajor && minor > packageminor) ||
    (major === packagemajor && minor === packageminor && build > packagebuild)
  ) {
    spawnSync(
      "git",
      ["commit", "-a", "-m", `"Updating to fastlane ${version}"`],
      { stdio: "inherit" }
    );
    spawnSync("npm", ["version", version], {
      stdio: "inherit",
    });
    o.version = version;
    // writeFileSync(packagePath, JSON.stringify(o, null, 2));
  }
}
