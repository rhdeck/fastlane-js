const { join } = require("path");
const { readFileSync } = require("fs");
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
    //yay
    console.log(
      `Packaged Version (${o.version}) is less than the fastlane version (${version})- continue`
    );
  } else {
    console.error(
      `Packaged Version (${o.version}) is greater than or equal to the fastlane version (${version})- skip`
    );
    process.exit(1);
  }
} else {
  console.error(
    `Packaged Version (${o.version}) is equal to the fastlane version (${version})- skip`
  );
  process.exit(1);
}
