const { join } = require("path");
const { readFileSync } = require("fs");
const { spawnSync, execSync } = require("child_process");
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
    try {
      spawnSync(
        "git",
        ["commit", "-a", "-m", `"Updating to fastlane ${version}"`],
        { stdio: "inherit" }
      );
    } catch (e) {}
    o.version = version;
    console.log("Done setting version to ", version);
    writeFileSync(packagePath, JSON.stringify(o, null, 2));
  }
}
