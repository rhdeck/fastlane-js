# fastlane-js

Monorepo for fastlane.js: App Automation done right... in Javascript!

This repo contains four projects key to the fastlane-js build process.

For most use cases go straight to the [fastlane package](packages/fastlane).

## [fastlane-api](packages/fastlane-api)

A tool to automatically generate the inputs and outputs of almost all fastlane actions, uaing the same interface as the Fastlane Swift code generator. Deployed on NPM as `@fastlanejs/fastlane-api`

## [fastlane-base](packages/fastlane-base)

Core socket client for communicating with the fastlane ruby server. Generalized inputs and outputs with error handling, but is dumb about the specific actions. Deployed on NPM as `@fastlanejs/fastlane-base`

## [make-fastlane](packages/make-fastlane)

Code generator to use the info from `fastlane-api` and generate a typescript wrapper for the complete API.

## [fastlane](packages/fastlane)

Auto-generated (by `make-fastlane`) library for accessing all fastlane actions (extending `fastlane-base`) and introducing `fastfile.js` support to more easily create scripts to `async/await` your way through shipping. Deployed on NPM as `fastlanejs`
