"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duality = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _116 = _interopRequireWildcard(require("./dex/deposit_record"));
var _117 = _interopRequireWildcard(require("./dex/genesis"));
var _118 = _interopRequireWildcard(require("./dex/limit_order_expiration"));
var _119 = _interopRequireWildcard(require("./dex/limit_order_tranche_user"));
var _120 = _interopRequireWildcard(require("./dex/limit_order_tranche"));
var _121 = _interopRequireWildcard(require("./dex/pair_id"));
var _122 = _interopRequireWildcard(require("./dex/params"));
var _123 = _interopRequireWildcard(require("./dex/pool_metadata"));
var _124 = _interopRequireWildcard(require("./dex/pool_reserves"));
var _125 = _interopRequireWildcard(require("./dex/pool"));
var _126 = _interopRequireWildcard(require("./dex/query"));
var _127 = _interopRequireWildcard(require("./dex/tick_liquidity"));
var _128 = _interopRequireWildcard(require("./dex/trade_pair_id"));
var _129 = _interopRequireWildcard(require("./dex/tx"));
var _130 = _interopRequireWildcard(require("./epochs/genesis"));
var _131 = _interopRequireWildcard(require("./epochs/query"));
var _132 = _interopRequireWildcard(require("./incentives/account_history"));
var _133 = _interopRequireWildcard(require("./incentives/gauge"));
var _134 = _interopRequireWildcard(require("./incentives/genesis"));
var _135 = _interopRequireWildcard(require("./incentives/params"));
var _136 = _interopRequireWildcard(require("./incentives/query"));
var _137 = _interopRequireWildcard(require("./incentives/stake"));
var _138 = _interopRequireWildcard(require("./incentives/tx"));
var _285 = _interopRequireWildcard(require("./dex/tx.amino"));
var _286 = _interopRequireWildcard(require("./incentives/tx.amino"));
var _287 = _interopRequireWildcard(require("./dex/tx.registry"));
var _288 = _interopRequireWildcard(require("./incentives/tx.registry"));
var _289 = _interopRequireWildcard(require("./dex/query.lcd"));
var _290 = _interopRequireWildcard(require("./epochs/query.lcd"));
var _291 = _interopRequireWildcard(require("./incentives/query.lcd"));
var _292 = _interopRequireWildcard(require("./dex/query.rpc.Query"));
var _293 = _interopRequireWildcard(require("./epochs/query.rpc.Query"));
var _294 = _interopRequireWildcard(require("./incentives/query.rpc.Query"));
var _295 = _interopRequireWildcard(require("./dex/tx.rpc.msg"));
var _296 = _interopRequireWildcard(require("./incentives/tx.rpc.msg"));
var _321 = _interopRequireWildcard(require("./lcd"));
var _322 = _interopRequireWildcard(require("./rpc.query"));
var _323 = _interopRequireWildcard(require("./rpc.tx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var duality;
exports.duality = duality;
(function (_duality) {
  var dex = _duality.dex = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _116), _117), _118), _119), _120), _121), _122), _123), _124), _125), _126), _127), _128), _129), _285), _287), _289), _292), _295);
  var epochs = _duality.epochs = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _130), _131), _290), _293);
  var incentives = _duality.incentives = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _132), _133), _134), _135), _136), _137), _138), _286), _288), _291), _294), _296);
  var ClientFactory = _duality.ClientFactory = _objectSpread(_objectSpread(_objectSpread({}, _321), _322), _323);
})(duality || (exports.duality = duality = {}));