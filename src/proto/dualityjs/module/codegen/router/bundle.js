import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import * as _162 from "./v1/genesis";
import * as _163 from "./v1/query";
import * as _313 from "./v1/query.lcd";
import * as _314 from "./v1/query.rpc.Query";
import * as _330 from "./lcd";
import * as _331 from "./rpc.query";
export let router;
(function (_router) {
  const v1 = _router.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _162), _163), _313), _314);
  const ClientFactory = _router.ClientFactory = _objectSpread(_objectSpread({}, _330), _331);
})(router || (router = {}));