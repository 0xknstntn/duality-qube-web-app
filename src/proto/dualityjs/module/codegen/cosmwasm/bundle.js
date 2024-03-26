import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
export let cosmwasm;
(function (_cosmwasm) {
  let wasm;
  (function (_wasm) {
    const v1 = _wasm.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _109), _110), _111), _112), _113), _114), _115), _280), _281), _282), _283), _284);
  })(wasm || (wasm = _cosmwasm.wasm || (_cosmwasm.wasm = {})));
  const ClientFactory = _cosmwasm.ClientFactory = _objectSpread(_objectSpread(_objectSpread({}, _318), _319), _320);
})(cosmwasm || (cosmwasm = {}));