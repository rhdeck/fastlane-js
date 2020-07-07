#!/usr/bin/env node
const { makeCamelCase, getCachedAPI, proper } = require("./");
const { actions } = getCachedAPI();
const prettier = require("prettier");
const convertType = (return_type, key, action_name) => {
  switch (return_type) {
    case "String":
    case "string":
      return "string";
    case "Fastlane::Boolean":
      return "boolean";
    case "Array":
      return "string[]";
    case "Hash":
      return "{string: string}";
    default:
      // process.stderr.write(
      //   ["MISSING", action_name, key, return_type].join(", ") + "\n"
      // );
      return "any";
  }
};
const convertReturnType = (return_type, key, action_name) => {
  return convertType(return_type, key, action_name);
};
//#region @DELETE
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
        type: convertType(data_type, key, action_name),
        optional,
        description,
      };
    })
    .filter(Boolean);
  return `
/** Shape for [[${actionName}]] options argument
*/ 
type ${interfaceName} = {
    ${optionsMembers
      .map(({ name, type, optional, description }) => {
        return `/**
* ${description}
*/
  ${name}${optional ? "?" : ""}: ${type};`;
      })
      .join("\n")}
}`;
});
const converters = actions.map(({ action_name, options }) => {
  const actionName = makeCamelCase(action_name);
  const interfaceName = proper(actionName) + "Options";
  const optionsMembers = options
    .map(({ key, data_type, optional, ...rest }) => {
      if (!key) return;
      const optionName = key && makeCamelCase(key);
      const tsType = convertType(data_type, key, action_name);
      // console.log(rest);
      // return { optionName, description, data_type };
      return { key, name: optionName, type: data_type, optional, tsType };
    })
    .filter(Boolean);
  return `
/** @ignore */
type converted${interfaceName} = {
  ${optionsMembers
    .map(({ key, name, type, tsType, optional, description }) => {
      return `
  ${key}${optional ? "?" : ""}: ${tsType};`;
    })
    .join("")}
}
/** @ignore Convert ${interfaceName} to the shape used by the Fastlane service
*/
function convert${interfaceName}(options: ${interfaceName}):converted${interfaceName} {
  const temp:converted${interfaceName} = {
    ${optionsMembers
      .filter(({ optional }) => !optional)
      .map(({ key, name, type, optional }) => {
        return `${key}: options.${name},`;
      })
      .join("")}
  }
  ${optionsMembers
    .filter(({ optional }) => optional)
    .map(({ key, name, type, optional }) => {
      return `if(typeof options.${name} !== 'undefined') temp['${key}'] = options.${name};`;
    })
    .join("\n")}
  return temp; 
}`;
});
//#endregion
const methods = actions.map(
  ({ action_name, description, return_type, sample_return_value, options }) => {
    const actionName = makeCamelCase(action_name);
    const optionsName = proper(actionName) + "Options";
    if (/^Alias for the `.*` action$/.test(description)) {
      const [_, rawAction, __] = description.split("`");
      const formattedAction = makeCamelCase(rawAction);
      description = [_, "[[`", formattedAction, "`]]", __].join("");
    }
    const optionsDestruct = `{${options
      .filter(({ key }) => key)
      .map(({ key, default_value, data_type, optional }) => {
        const optionName = makeCamelCase(key);
        const type = convertType(data_type, key, action_name);
        return `${optionName}:_${optionName} ${
          default_value
            ? ["string", "any"].includes(type)
              ? `="${default_value}"`
              : ""
            : ""
        }`;
      })
      .join(",")}}`;
    const optionsSignature = `{${options
      .filter(({ key }) => key)
      .map(({ key, default_value, data_type, optional, description }) => {
        const optionName = makeCamelCase(key);
        const type = convertType(data_type, key, action_name);
        return `
        /** 
         * ${description}
         * */
        ${optionName}${optional ? "?" : ""}: ${type}`;
      })}}`;
    const returnType = convertReturnType(return_type, "RETURN", action_name);
    const jsDoc = `/** ${description}
    */`;
    const signature = `async ${actionName}(options: ${optionsSignature}):Promise<${returnType}> {`;
    const converter = `const convertedOptions = { ${options
      .filter(({ key }) => key)

      .map(({ key }) => {
        const optionName = makeCamelCase(key);
        return `"${key}": options.${optionName}`;
      })
      .join(",")}}`;
    const closer = `
    ${
      returnType !== "void" && "const out = "
    }await this.doAction('${action_name}', convertedOptions);
    ${(returnType !== "void" && "return out;") || ""}
  }`;
    return [jsDoc, signature, converter, closer].join("\n");
  }
);
imports = `
import { FastlaneBase } from '@fastlanejs/base';`;
prepend = `/** Main Class
*/
class Fastlane extends FastlaneBase {`;
postpend = `}
const withFastlane = async (
  f: (fastlane: Fastlane) => Promise<any>,
  {
    port = 2000,
    isInteractive = true,
  }: { port?: number; isInteractive?: boolean }
) => {
  const fastlane = new Fastlane(port, isInteractive);
  try {
    const result = await f(fastlane);
    fastlane.close();
    return result;
  } catch (e) {
    await fastlane.close();
    throw e;
  }
};
export default Fastlane;
export {Fastlane, withFastlane}`;
const base = [
  imports,
  // ...interfaces,
  // ...converters,
  prepend,
  ...methods,
  postpend,
].join("\n");
process.stdout.write(prettier.format(base, { parser: "babel-ts" }));
// console.log(base);
