import { connect, SocketConnectOpts, Socket } from "net";
import { spawn, ChildProcessWithoutNullStreams } from "child_process";
import Deferred from "es6-deferred";
class Fastlane {
  protected port?: number = undefined;
  protected socket?: Socket = undefined;
  protected isInteractive: boolean = true;
  protected childProcess?: ChildProcessWithoutNullStreams = undefined;
  constructor(port = 2000, isInteractive = true) {
    this.port = port;
    this.socket = null;
    this.isInteractive = isInteractive;
    this.childProcess = null;
  }
  async start() {
    if (!this.childProcess)
      this.childProcess = await launch(this.isInteractive, this.port);
    if (!this.socket) this.socket = await init(this.port);
  }
  async close() {
    const { resolve } = new Deferred();
    if (!this.socket) {
      this.socket = null;
      this.childProcess.kill("SIGHUP");
      this.childProcess = null;
      return;
    }
    const remove = once(this.socket, "error", () => {});
    this.socket.end(() => {
      remove();
      this.socket = null;
      this.childProcess.kill("SIGHUP");
      this.childProcess = null;
      resolve();
    });
    // return promise;
  }
  async send({ commandType, command }: { commandType: string; command: {} }) {
    if (!this.socket) throw "Socket not initialized";
    const json = JSON.stringify({ commandType, command });
    this.socket.write(json);
    const { resolve, promise, reject } = new Deferred();
    this.socket.setEncoding("utf8");
    const removeError = once(this.socket, "error", (d) => reject(d));
    once(this.socket, "data", (d) => {
      try {
        removeError();
        const o = JSON.parse(d);
        try {
          if (o.payload) {
            if (o.payload.status === "failure") {
              reject({
                error: "fastlane_failure",
                description: o.payload.failure_information.join("\n"),
                raw: o,
              });
            } else if (typeof o.payload.return_object === "undefined") {
              reject(o);
            }
            const result = o.payload.return_object;
            resolve(result);
          }
        } catch (e) {
          console.log("Problem resolving the payload after parsing");
          reject(e);
        }
      } catch (e) {
        console.log("Could not parse json", d);
        removeError();
        reject(e);
      }
    });
    return promise;
  }
  async doAction(action: string, argObj: {}): Promise<any> {
    await this.start();
    const args = argObj
      ? Object.entries(argObj).map(([name, value]) => ({ name, value }))
      : undefined;
    const command = {
      commandType: "action",
      command: { methodName: action, args },
    };
    return this.send(command);
  }
}
//#region Internal utility functions
const asyncConnect = (options: SocketConnectOpts): Promise<Socket> => {
  const { resolve, reject, promise } = new Deferred();
  const initError = (e: Error) => reject(e);
  try {
    const c = connect(options, () => {
      c.removeListener("error", initError);
      resolve(c);
    });
    c.on("error", initError);
  } catch (e) {
    reject(e);
  }
  return promise;
};
const sleep = (ms: number): Promise<void> =>
  new Promise((r) => setTimeout(() => r(), ms));
const launch = (
  interactive: boolean = true,
  port: number = 2000
): ChildProcessWithoutNullStreams => {
  return spawn(
    "fastlane",
    ["socket_server", "-c", "30", "-s", "-p", port.toString()],
    {
      ...(interactive ? { stdio: "inherit" } : {}),
    }
  );
};
const init = async (port: number = 2000): Promise<Socket> => {
  while (true) {
    const s = (
      await Promise.all(
        ["::1", "127.0.0.1"].map(async (host) => {
          return await asyncConnect({ host, port });
        })
      )
    ).find(Boolean);
    if (s) {
      return s;
    }
    await sleep(500);
  }
};
const once = (socket: Socket, event: string, f: (...args: any) => void) => {
  const listener = (d: any) => {
    socket.removeListener(event, listener);
    f(d);
  };
  socket.on(event, listener);
  return () => socket.removeListener(event, listener);
};
//#endregion
//#region Exported Functions
const withFastlaneSimple = async (f: (fastlane: Fastlane) => Promise<any>) => {
  return withFastlane({ port: 2000, isInteractive: true }, f);
};
const withFastlane = async (
  options: { port: number; isInteractive: boolean },
  f: (fastlane: Fastlane) => Promise<any>
) => {
  const { port = 2000, isInteractive = true } = options;
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
const doActionOnce = async (
  action: string,
  argobj: {},
  isInteractive: boolean = true,
  port: number = 2000
) =>
  withFastlane({ port, isInteractive }, ({ doAction }) =>
    doAction(action, argobj)
  );

//#endregion
export { Fastlane, doActionOnce, withFastlane };
