#!/usr/bin/env node
const { makeCamelCase, getCachedAPI } = require("./");
const { writeFileSync } = require("fs");
const { program: commander } = require("commander");
const { withFastlane } = require("@raydeck/fastlane");
const { stringify } = require("yaml");
const { actions } = getCachedAPI();
commander.option(
  "--silent",
  "Squelch feedback from Fastlane - may cause problems if it needs user feedback",
  false
);
commander.option(
  "--outputFile <file>",
  "Write output to the indicated path, rather than stdout",
  false
);
commander.option("--yaml", "Encode output in yaml rather than JSON", false);
actions
  .map(({ action_name, description, options }) => {
    return {
      name: makeCamelCase(action_name),
      action_name,
      description,
      options: options
        .map(({ key, description, optional, default_value, data_type }) => {
          if (!key) return null;
          const k = makeCamelCase(key);
          const open = optional ? "[" : "<";
          const close = optional ? "]" : ">";
          let shortName = "";
          const firstInitial = k[0];
          const firstInitials = options
            .filter(({ key }) => k !== key)
            .map(({ key }) => key[0]);
          if (!firstInitials.includes(firstInitial)) shortName = firstInitial;
          const name = `${
            shortName ? "-" + shortName + ", " : ""
          }--${k} ${open}${k ? "options" : "cmd_options"}${close}`;
          return { name, description, default_value, key };
        })
        .filter(Boolean),
    };
  })
  .map(({ name, description, options, action_name }) => {
    // console.log("Adding", name, commander);
    let command = commander.command(name).description(description);
    [...options].forEach(({ name, description, default_value }) => {
      // console.log("Adding option", name);
      if (name === "--options [options]") return;
      command = command.option(name, description, default_value);
      return;
    });
    command.action(async (a, b, c) => {
      try {
        const result = await withFastlane(
          { isInteractive: !commander.silent },
          async (f) => {
            const opts = options.reduce((o, { key, default_value }) => {
              const val = commander[makeCamelCase(key)];
              if (val) o[key] = val;
              else if (default_value) o[key] = default_value;
              delete o.command;
              return o;
            }, {});
            const out = await f.doAction(action_name, opts);
            return out;
          }
        );
        if (commander.outputFile) {
          if (commander.yaml)
            writeFileSync(commander.outputFile, stringify(result));
          else writeFileSync(commander.outputFile, JSON.stringify(result));
        } else {
          if (commander.yaml) process.stdout.write(stringify(result));
          else process.stdout.write(JSON.stringify(result));
        }
      } catch (e) {
        console.log("I have an error", e);
      }
    });
  });
// console.log(JSON.stringify(stuff, null, 2));
if (!process.argv[2]) commander.outputHelp();
else commander.parseAsync(process.argv);
