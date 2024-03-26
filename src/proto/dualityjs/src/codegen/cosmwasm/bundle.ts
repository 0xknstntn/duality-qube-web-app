import * as _109 from "./wasm/v1/authz";
import * as _110 from "./wasm/v1/genesis";
import * as _111 from "./wasm/v1/ibc";
import * as _112 from "./wasm/v1/proposal_legacy";
import * as _113 from "./wasm/v1/query";
import * as _114 from "./wasm/v1/tx";
import * as _115 from "./wasm/v1/types";
import * as _280 from "./wasm/v1/tx.amino";
import * as _281 from "./wasm/v1/tx.registry";
import * as _282 from "./wasm/v1/query.lcd";
import * as _283 from "./wasm/v1/query.rpc.Query";
import * as _284 from "./wasm/v1/tx.rpc.msg";
import * as _318 from "./lcd";
import * as _319 from "./rpc.query";
import * as _320 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._280,
      ..._281,
      ..._282,
      ..._283,
      ..._284
    };
  }
  export const ClientFactory = {
    ..._318,
    ..._319,
    ..._320
  };
}