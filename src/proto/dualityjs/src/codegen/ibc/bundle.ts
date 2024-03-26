import * as _148 from "./applications/transfer/v1/query";
import * as _149 from "./applications/transfer/v1/transfer";
import * as _150 from "./applications/transfer/v1/tx";
import * as _151 from "./core/channel/v1/channel";
import * as _152 from "./core/channel/v1/query";
import * as _153 from "./core/client/v1/client";
import * as _154 from "./core/client/v1/query";
import * as _155 from "./core/commitment/v1/commitment";
import * as _156 from "./core/connection/v1/connection";
import * as _157 from "./core/connection/v1/query";
import * as _297 from "./applications/transfer/v1/tx.amino";
import * as _298 from "./applications/transfer/v1/tx.registry";
import * as _299 from "./applications/transfer/v1/query.lcd";
import * as _300 from "./core/channel/v1/query.lcd";
import * as _301 from "./core/client/v1/query.lcd";
import * as _302 from "./core/connection/v1/query.lcd";
import * as _303 from "./applications/transfer/v1/query.rpc.Query";
import * as _304 from "./core/channel/v1/query.rpc.Query";
import * as _305 from "./core/client/v1/query.rpc.Query";
import * as _306 from "./core/connection/v1/query.rpc.Query";
import * as _307 from "./applications/transfer/v1/tx.rpc.msg";
import * as _324 from "./lcd";
import * as _325 from "./rpc.query";
import * as _326 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._148,
        ..._149,
        ..._150,
        ..._297,
        ..._298,
        ..._299,
        ..._303,
        ..._307
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._151,
        ..._152,
        ..._300,
        ..._304
      };
    }
    export namespace client {
      export const v1 = {
        ..._153,
        ..._154,
        ..._301,
        ..._305
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._155
      };
    }
    export namespace connection {
      export const v1 = {
        ..._156,
        ..._157,
        ..._302,
        ..._306
      };
    }
  }
  export const ClientFactory = {
    ..._324,
    ..._325,
    ..._326
  };
}