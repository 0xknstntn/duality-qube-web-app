import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
export let ibc;
(function (_ibc) {
  let applications;
  (function (_applications) {
    let transfer;
    (function (_transfer) {
      const v1 = _transfer.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _148), _149), _150), _297), _298), _299), _303), _307);
    })(transfer || (transfer = _applications.transfer || (_applications.transfer = {})));
  })(applications || (applications = _ibc.applications || (_ibc.applications = {})));
  let core;
  (function (_core) {
    let channel;
    (function (_channel) {
      const v1 = _channel.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _151), _152), _300), _304);
    })(channel || (channel = _core.channel || (_core.channel = {})));
    let client;
    (function (_client) {
      const v1 = _client.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _153), _154), _301), _305);
    })(client || (client = _core.client || (_core.client = {})));
    let commitment;
    (function (_commitment) {
      const v1 = _commitment.v1 = _objectSpread({}, _155);
    })(commitment || (commitment = _core.commitment || (_core.commitment = {})));
    let connection;
    (function (_connection) {
      const v1 = _connection.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _156), _157), _302), _306);
    })(connection || (connection = _core.connection || (_core.connection = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));
  const ClientFactory = _ibc.ClientFactory = _objectSpread(_objectSpread(_objectSpread({}, _324), _325), _326);
})(ibc || (ibc = {}));