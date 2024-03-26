import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import * as _140 from "./api/annotations";
import * as _141 from "./api/http";
import * as _142 from "./api/httpbody";
import * as _143 from "./protobuf/any";
import * as _144 from "./protobuf/descriptor";
import * as _145 from "./protobuf/duration";
import * as _146 from "./protobuf/empty";
import * as _147 from "./protobuf/timestamp";
export let google;
(function (_google) {
  const api = _google.api = _objectSpread(_objectSpread(_objectSpread({}, _140), _141), _142);
  const protobuf = _google.protobuf = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _143), _144), _145), _146), _147);
})(google || (google = {}));