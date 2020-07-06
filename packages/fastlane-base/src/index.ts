import { connect, SocketConnectOpts, Socket } from "net";
import { spawn, ChildProcessWithoutNullStreams } from "child_process";
class Deferred {
  public resolve: (...args: any) => void;
  public reject: (reason: any) => void;
  public promise: Promise<any>;
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
class FastlaneError extends Error {
  public class: string;
  public information: string[];
  constructor(payload: {
    failure_class: string;
    failure_message: string;
    failure_information: string[];
  }) {
    super(payload.failure_message);
    this.class = payload.failure_class;
    this.information = payload.failure_information;
  }
}
class FastlaneBase {
  /** @private */
  protected port?: number = undefined;
  /** @private */
  protected socket?: Socket = undefined;
  /** @private */
  protected isInteractive: boolean = true;
  /** @private */
  protected childProcess?: ChildProcessWithoutNullStreams = undefined;
  /** @private */
  protected _debug: boolean = false;
  constructor(port = 2000, isInteractive = true, debug = false) {
    this.port = port;
    this.socket = null;
    this.isInteractive = isInteractive;
    this.childProcess = null;
    this._debug = debug;
  }
  setDebug(newValue: boolean = true) {
    this._debug = newValue;
  }
  isDebug() {
    return this._debug;
  }
  log(...args: any) {
    if (this._debug) console.log(args);
  }
  async start() {
    if (!this.childProcess)
      this.childProcess = await launch(this.isInteractive, this.port);
    if (!this.socket) this.socket = await init(this.port);
  }
  async close() {
    const { resolve, promise } = new Deferred();
    if (!this.socket) {
      this.socket = null;
      if (this.childProcess) this.childProcess.kill("SIGHUP");
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
    return promise;
  }
  async send({ commandType, command }: { commandType: string; command: {} }) {
    if (!this.socket) throw "Socket not initialized";
    const json = JSON.stringify({ commandType, command });
    this.log("Transmitting JSON", json);
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
              this.log("RECEIVED FAILURE", o);
              const e = new FastlaneError(o.payload);
              reject(e);
            } else if (typeof o.payload.return_object === "undefined") {
              reject(o);
            }
            const result = o.payload.return_object;
            resolve(result);
          }
        } catch (e) {
          reject(e);
        }
      } catch (e) {
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
    this.log("Do action sending command ", command);
    return this.send(command);
  }
}
//#region Internal utility functions
const asyncConnect = async (options: SocketConnectOpts): Promise<Socket> => {
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
  const out = await promise;
  return out;
};
const sleep = (ms: number): Promise<void> =>
  new Promise((r) => setTimeout(() => r(), ms));
const launch = (
  interactive: boolean = true,
  port: number = 2000
): ChildProcessWithoutNullStreams => {
  return spawn(
    "bundle",
    [
      "exec",
      "fastlane",
      "socket_server",
      "--verbose",
      "-c",
      "30",
      "-s",
      "-p",
      port.toString(),
    ],
    {
      ...(interactive ? { stdio: "inherit" } : {}),
    }
  );
};
const init = async (port: number = 2000): Promise<Socket> => {
  while (true) {
    let s;
    try {
      s = (
        await Promise.all(
          ["::1", "127.0.0.1"].map(async (host) => {
            try {
              const socket = await asyncConnect({ host, port });
              return socket;
            } catch (e) {
              return null;
            }
          })
        )
      ).find(Boolean);
    } catch (e) {}
    if (s) {
      return s;
    }
    await sleep(500);
  }
};
const once = (socket: Socket, event: string, f: (data: string) => void) => {
  const data: Buffer[] = [];
  const listener = (d: Buffer) => {
    data.push(d);
    if (d.length < 65536) {
      socket.removeListener(event, listener);
      const text = data.map((b) => b.toString("utf8")).join("");
      f(text);
    }
  };
  socket.on(event, listener);
  return () => socket.removeListener(event, listener);
};
//#endregion
//#region Exported Functions
const withFastlaneBase = async (
  f: (fastlane: FastlaneBase) => Promise<any>,
  {
    port = 2000,
    isInteractive = true,
  }: { port?: number; isInteractive?: boolean }
) => {
  const fastlane = new FastlaneBase(port, isInteractive);
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
  withFastlaneBase(({ doAction }) => doAction(action, argobj), {
    port,
    isInteractive,
  });

//#endregion
export { FastlaneBase, doActionOnce, withFastlaneBase };
