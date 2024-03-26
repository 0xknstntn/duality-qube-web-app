import * as _162 from "./v1/genesis";
import * as _163 from "./v1/query";
import * as _313 from "./v1/query.lcd";
import * as _314 from "./v1/query.rpc.Query";
import * as _330 from "./lcd";
import * as _331 from "./rpc.query";
export namespace router {
  export const v1 = {
    ..._162,
    ..._163,
    ..._313,
    ..._314
  };
  export const ClientFactory = {
    ..._330,
    ..._331
  };
}