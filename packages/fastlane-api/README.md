# fastlane-codegen

API generator/extractor for Fastlane

Generates the shape of fastlane actions and their options based on the currently installed version.

This is useful for generating a wrapper API over the `socket_server` interface.

## CLI

The easiest way to get started is running with `npx`

```bash
npx fastlane-api -f myapi.json
# or
npx fastlane-api > myapi.json
```

### Options

```bash
❯ npx fastlane-api --help
Usage: fastlane-api [options]

Generate JSON or YAML formatted API from Fastlane

Options:
  -f --file [filePath]  target file for serialized output (defaults to stdout)
  -d --debug            Debug mode - leave the fastlane directory and
                        auto-generated files behind (default: false)
  -y --yaml             Generate YAML instead of JSON (default: false)
  -h, --help            display help for command
```

## API

The export of `fastlane-api` is a function that generates the API as an object you can use in runtime.

### Installation

```bash
yarn add fastlane-api
```

### Usage

```js
const getFastlaneAPI = require("fastlane-api");
const { version, actions } = getFastlaneAPI(); //This is synchronous and slow
console.log("version is", api.version);
console.log(
  "Available actions are",
  actions.map(({ name }) => name)
);
```
