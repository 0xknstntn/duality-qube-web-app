"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ibcProtoRegistry = exports.ibcAminoConverters = exports.getSigningIbcClientOptions = exports.getSigningIbcClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _protoSigning = require("@cosmjs/proto-signing");
var _stargate = require("@cosmjs/stargate");
var ibcApplicationsTransferV1TxRegistry = _interopRequireWildcard(require("./applications/transfer/v1/tx.registry"));
var ibcApplicationsTransferV1TxAmino = _interopRequireWildcard(require("./applications/transfer/v1/tx.amino"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ibcAminoConverters = _objectSpread({}, ibcApplicationsTransferV1TxAmino.AminoConverter);
exports.ibcAminoConverters = ibcAminoConverters;
var ibcProtoRegistry = (0, _toConsumableArray2["default"])(ibcApplicationsTransferV1TxRegistry.registry);
exports.ibcProtoRegistry = ibcProtoRegistry;
var getSigningIbcClientOptions = function getSigningIbcClientOptions() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$defaultTypes = _ref.defaultTypes,
    defaultTypes = _ref$defaultTypes === void 0 ? _stargate.defaultRegistryTypes : _ref$defaultTypes;
  var registry = new _protoSigning.Registry([].concat((0, _toConsumableArray2["default"])(defaultTypes), (0, _toConsumableArray2["default"])(ibcProtoRegistry)));
  var aminoTypes = new _stargate.AminoTypes(_objectSpread({}, ibcAminoConverters));
  return {
    registry: registry,
    aminoTypes: aminoTypes
  };
};
exports.getSigningIbcClientOptions = getSigningIbcClientOptions;
var getSigningIbcClient = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref2) {
    var rpcEndpoint, signer, _ref2$defaultTypes, defaultTypes, _getSigningIbcClientO, registry, aminoTypes, client;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rpcEndpoint = _ref2.rpcEndpoint, signer = _ref2.signer, _ref2$defaultTypes = _ref2.defaultTypes, defaultTypes = _ref2$defaultTypes === void 0 ? _stargate.defaultRegistryTypes : _ref2$defaultTypes;
          _getSigningIbcClientO = getSigningIbcClientOptions({
            defaultTypes: defaultTypes
          }), registry = _getSigningIbcClientO.registry, aminoTypes = _getSigningIbcClientO.aminoTypes;
          _context.next = 4;
          return _stargate.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
            registry: registry,
            aminoTypes: aminoTypes
          });
        case 4:
          client = _context.sent;
          return _context.abrupt("return", client);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getSigningIbcClient(_x) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getSigningIbcClient = getSigningIbcClient;