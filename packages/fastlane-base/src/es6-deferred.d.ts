declare module "es6-deferred" {
  class Deferred {
    resolve: (...args: any) => void;
    reject: (reason: any) => void;
    promise: Promise<any>;
  }
  export = Deferred;
}
