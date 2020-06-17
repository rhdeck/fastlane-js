#!/usr/bin/env node
const { makeCamelCase, getCachedAPI, proper } = require("./");
const { join } = require("path");
const { readFileSync, writeFileSync, existsSync } = require("fs");
const { program: commander } = require("commander");
const { version, actions } = getCachedAPI();
const prettier = require("prettier");
//#region update Package.json
const packagePath = join(__dirname, "package.json");
const o = JSON.parse(readFileSync(packagePath, { encoding: "utf8" }));
o.version = version;
writeFileSync(packagePath, JSON.stringify(o, null, 2));
const convertType = (return_type, key, action_name) => {
  switch (return_type) {
    case "String":
      return "string";
    case "Fastlane::Boolean":
      return "boolean";
    case "Array":
      return "string[]";
    case "Hash":
      return "{string: string}";
    default:
      return "any";
  }
};
const convertReturnType = (return_type) => {
  return convertType(return_type);
};
const interfaces = actions.map(({ action_name, options }) => {
  const actionName = makeCamelCase(action_name);
  const interfaceName = proper(actionName) + "Options";
  const optionsMembers = options
    .map(({ key, data_type, optional, description, ...rest }) => {
      if (!key) return;
      const optionName = key && makeCamelCase(key);
      // console.log(rest);
      // return { optionName, description, data_type };
      return {
        name: optionName,
        type: convertType(data_type),
        optional,
        description,
      };
    })
    .filter(Boolean);
  return `
/** @interface ${interfaceName}
${optionsMembers
  .map(({ name, type, optional, description }) => {
    return `* @property {${type}} ${name} ${description}`;
  })
  .join("\n")}
*/
interface ${interfaceName} {
    ${optionsMembers.map(({ name, type, optional }) => {
      return `
  ${name}${optional ? "?" : ""}: ${type}`;
    })}
}`;
});
const converters = actions.map(({ action_name, options }) => {
  const actionName = makeCamelCase(action_name);
  const interfaceName = proper(actionName) + "Options";
  const optionsMembers = options
    .map(({ key, data_type, optional, ...rest }) => {
      if (!key) return;
      const optionName = key && makeCamelCase(key);
      // console.log(rest);
      // return { optionName, description, data_type };
      return { key, name: optionName, type: data_type, optional };
    })
    .filter(Boolean);
  return `
function convert${interfaceName}(options: ${interfaceName}) {
  return {
    ${optionsMembers
      .map(({ key, name, type, optional }) => {
        return `'${key}': options.${name},`;
      })
      .join("\n")}
  }
}`;
});
const methods = actions.map(
  ({ action_name, description, return_type, sample_return_value, options }) => {
    const actionName = makeCamelCase(action_name);
    const optionsName = proper(actionName) + "Options";
    const returnType = convertReturnType(return_type);
    const jsDoc = `/** ${description}
    */`;
    const functionBody = `async ${actionName}(options: ${optionsName}):Promise<${returnType}> {
      const out = await this.doAction('${action_name}', convert${optionsName}(options));
      ${(returnType !== "void" && "return out;") || ""}
    }`;
    return [jsDoc, functionBody].join("\n");
    //Deploy
  }
);
imports = `
import { Fastlane as FastlaneBase } from '@fastlanejs/base';`;
prepend = `/** Main Class
*/
class Fastlane extends FastlaneBase {`;
postpend = `}
function withFastlane({port=2000, isInteractive= true}: {port: number, isInteractive: boolean}, f: (fastlane: Fastlane)=>Promise<any>) {
  const fastlane = new Fastlane(port, isInteractive);
  return f(fastlane);
}
export default Fastlane;
export {Fastlane, withFastlane}`;
console.log(
  prettier.format(
    [imports, ...interfaces, ...converters, prepend, ...methods, postpend].join(
      "\n"
    ),
    { parser: "babel-ts" }
  )
);
