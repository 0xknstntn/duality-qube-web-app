import * as _158 from "./builder/module/v1/module";
import * as _159 from "./builder/v1/genesis";
import * as _160 from "./builder/v1/query";
import * as _161 from "./builder/v1/tx";
import * as _308 from "./builder/v1/tx.amino";
import * as _309 from "./builder/v1/tx.registry";
import * as _310 from "./builder/v1/query.lcd";
import * as _311 from "./builder/v1/query.rpc.Query";
import * as _312 from "./builder/v1/tx.rpc.msg";
import * as _327 from "./lcd";
import * as _328 from "./rpc.query";
import * as _329 from "./rpc.tx";
export namespace pob {
  export namespace builder {
    export namespace module {
      export const v1 = {
        ..._158
      };
    }
    export const v1 = {
      ..._159,
      ..._160,
      ..._161,
      ..._308,
      ..._309,
      ..._310,
      ..._311,
      ..._312
    };
  }
  export const ClientFactory = {
    ..._327,
    ..._328,
    ..._329
  };
}