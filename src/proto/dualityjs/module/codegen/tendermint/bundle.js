import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import * as _164 from "./abci/types";
import * as _165 from "./blocksync/types";
import * as _166 from "./consensus/types";
import * as _167 from "./consensus/wal";
import * as _168 from "./crypto/keys";
import * as _169 from "./crypto/proof";
import * as _170 from "./libs/bits/types";
import * as _171 from "./mempool/types";
import * as _172 from "./p2p/conn";
import * as _173 from "./p2p/pex";
import * as _174 from "./p2p/types";
import * as _175 from "./privval/types";
import * as _176 from "./rpc/grpc/types";
import * as _177 from "./state/types";
import * as _178 from "./statesync/types";
import * as _179 from "./store/types";
import * as _180 from "./types/block";
import * as _181 from "./types/canonical";
import * as _182 from "./types/events";
import * as _183 from "./types/evidence";
import * as _184 from "./types/params";
import * as _185 from "./types/types";
import * as _186 from "./types/validator";
import * as _187 from "./version/types";
export let tendermint;
(function (_tendermint) {
  const abci = _tendermint.abci = _objectSpread({}, _164);
  const blocksync = _tendermint.blocksync = _objectSpread({}, _165);
  const consensus = _tendermint.consensus = _objectSpread(_objectSpread({}, _166), _167);
  const crypto = _tendermint.crypto = _objectSpread(_objectSpread({}, _168), _169);
  let libs;
  (function (_libs) {
    const bits = _libs.bits = _objectSpread({}, _170);
  })(libs || (libs = _tendermint.libs || (_tendermint.libs = {})));
  const mempool = _tendermint.mempool = _objectSpread({}, _171);
  const p2p = _tendermint.p2p = _objectSpread(_objectSpread(_objectSpread({}, _172), _173), _174);
  const privval = _tendermint.privval = _objectSpread({}, _175);
  let rpc;
  (function (_rpc) {
    const grpc = _rpc.grpc = _objectSpread({}, _176);
  })(rpc || (rpc = _tendermint.rpc || (_tendermint.rpc = {})));
  const state = _tendermint.state = _objectSpread({}, _177);
  const statesync = _tendermint.statesync = _objectSpread({}, _178);
  const store = _tendermint.store = _objectSpread({}, _179);
  const types = _tendermint.types = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _180), _181), _182), _183), _184), _185), _186);
  const version = _tendermint.version = _objectSpread({}, _187);
})(tendermint || (tendermint = {}));