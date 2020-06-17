# Fastlane-js

Javascript interface to Fastlane

## Requirements

**Fastlane** is required to have been installed: use `gem install Fastlane`

## Installation

```
yarn add @raydeck/fastlane
```

## Class Fastlane

### async doAction(action, arguments) => Promise<Any>

Returns the same result as running this Fastlane result in Ruby would. (note that there are excceptions where the Fastlane socket driver delivers suboptimal serializations of Ruby objects, such as with the action `adb_devices`). Starts the session automatically when you ask for the first action.

### async close() => Promise<Void>

Closes the connection to fastlane.

## async withFastlane(options: FastlaneOptions, func (fastlane: Fastlane)=> Promise)

The main helper function to control a Fastlane session.

- `options` (optional): Object of options to pass to the fastlane session:
  - `isInteractive: Boolean` whether to pass stdin/stdout of the socket server to the calling client. This should be `true` when you might need to respond to requests for, say, apple logins.
  - `port: Int` specify the port number of the connection (default `2000`)
- `func`: async function (returning a promise) containing the block of code to run during the Fastlane session, passed the `Fastlane` instance as its first and only argument. Note the session is initialized right before executing the function and closed right afterward.

## Example

```js
await withFastlane(async (fastlane) => {
  await fastlane.doAction("send_to_testflight", {
    application_id: "xxxx" /*...*/,
  });
});
// is the same as
await withFastlane({ isInteractive: true, port: 2000 }, async (fastlane) => {
  await fastlane.doAction("send_to_testflight", {
    application_id: "xxxx" /*...*/,
  });
});
// is the same as
await withFastlane(async ({ doAction }) => {
  await doAction("send_to_testflight", { application_id: "xxxx" /*...*/ });
});
// is the same as
const fastlane = new Fastlane(2000, true);
await fastlane.doAction("send_to_testflight", {
  application_id: "xxxx" /*...*/,
});
fastlane.close();
// is the same as
const fastlane = new Fastlane();
await fastlane.doAction("send_to_testflight", {
  application_id: "xxxx" /*...*/,
});
fastlane.close();
```

## Additional Helper functions

### async init(isInteractive = true) => Socket

Imperatively initialize the child Fastlane server process and connect using sockets. The socket is returned as a convenience, but don't mess with it unless you really know what you are doing.

- **isInteractive**: Boolean of whether to pass stdin/stdout of the socket server to the calling client. This should be `true` when you might need to respond to requests for, say, apple logins.

**Note**: This is run by default at the start of `withFastlane`

### async close() => Void

Close the connection to the Fastlane socket server and terminate the Fastlane socket server process.

**Note**: This is run by default at the end of `withFastlane`
