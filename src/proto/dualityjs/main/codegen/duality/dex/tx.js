"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiHopRoute = exports.MsgWithdrawalResponse = exports.MsgWithdrawal = exports.MsgWithdrawFilledLimitOrderResponse = exports.MsgWithdrawFilledLimitOrder = exports.MsgPlaceLimitOrderResponse = exports.MsgPlaceLimitOrder = exports.MsgMultiHopSwapResponse = exports.MsgMultiHopSwap = exports.MsgDepositResponse = exports.MsgDeposit = exports.MsgCancelLimitOrderResponse = exports.MsgCancelLimitOrder = exports.LimitOrderType = exports.DepositOptions = void 0;
exports.limitOrderTypeFromJSON = limitOrderTypeFromJSON;
exports.limitOrderTypeToJSON = limitOrderTypeToJSON;
var _timestamp = require("../../google/protobuf/timestamp");
var _coin = require("../../cosmos/base/v1beta1/coin");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var LimitOrderType = /*#__PURE__*/function (LimitOrderType) {
  LimitOrderType[LimitOrderType["GOOD_TIL_CANCELLED"] = 0] = "GOOD_TIL_CANCELLED";
  LimitOrderType[LimitOrderType["FILL_OR_KILL"] = 1] = "FILL_OR_KILL";
  LimitOrderType[LimitOrderType["IMMEDIATE_OR_CANCEL"] = 2] = "IMMEDIATE_OR_CANCEL";
  LimitOrderType[LimitOrderType["JUST_IN_TIME"] = 3] = "JUST_IN_TIME";
  LimitOrderType[LimitOrderType["GOOD_TIL_TIME"] = 4] = "GOOD_TIL_TIME";
  LimitOrderType[LimitOrderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return LimitOrderType;
}({});
exports.LimitOrderType = LimitOrderType;
function limitOrderTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "GOOD_TIL_CANCELLED":
      return LimitOrderType.GOOD_TIL_CANCELLED;
    case 1:
    case "FILL_OR_KILL":
      return LimitOrderType.FILL_OR_KILL;
    case 2:
    case "IMMEDIATE_OR_CANCEL":
      return LimitOrderType.IMMEDIATE_OR_CANCEL;
    case 3:
    case "JUST_IN_TIME":
      return LimitOrderType.JUST_IN_TIME;
    case 4:
    case "GOOD_TIL_TIME":
      return LimitOrderType.GOOD_TIL_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LimitOrderType.UNRECOGNIZED;
  }
}
function limitOrderTypeToJSON(object) {
  switch (object) {
    case LimitOrderType.GOOD_TIL_CANCELLED:
      return "GOOD_TIL_CANCELLED";
    case LimitOrderType.FILL_OR_KILL:
      return "FILL_OR_KILL";
    case LimitOrderType.IMMEDIATE_OR_CANCEL:
      return "IMMEDIATE_OR_CANCEL";
    case LimitOrderType.JUST_IN_TIME:
      return "JUST_IN_TIME";
    case LimitOrderType.GOOD_TIL_TIME:
      return "GOOD_TIL_TIME";
    case LimitOrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseDepositOptions() {
  return {
    disable_autoswap: false
  };
}
var DepositOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.disable_autoswap === true) {
      writer.uint32(8).bool(message.disable_autoswap);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDepositOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disable_autoswap = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      disable_autoswap: (0, _helpers.isSet)(object.disable_autoswap) ? Boolean(object.disable_autoswap) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$disable_autos;
    var message = createBaseDepositOptions();
    message.disable_autoswap = (_object$disable_autos = object.disable_autoswap) !== null && _object$disable_autos !== void 0 ? _object$disable_autos : false;
    return message;
  }
};
exports.DepositOptions = DepositOptions;
function createBaseMsgDeposit() {
  return {
    creator: "",
    receiver: "",
    tokenA: "",
    tokenB: "",
    amountsA: [],
    amountsB: [],
    tickIndexesAToB: [],
    fees: [],
    Options: []
  };
}
var MsgDeposit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenA !== "") {
      writer.uint32(26).string(message.tokenA);
    }
    if (message.tokenB !== "") {
      writer.uint32(34).string(message.tokenB);
    }
    var _iterator = _createForOfIteratorHelper(message.amountsA),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(42).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.amountsB),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        writer.uint32(50).string(_v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    writer.uint32(58).fork();
    var _iterator3 = _createForOfIteratorHelper(message.tickIndexesAToB),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        writer.int64(_v2);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    writer.ldelim();
    writer.uint32(66).fork();
    var _iterator4 = _createForOfIteratorHelper(message.fees),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        writer.uint64(_v3);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    writer.ldelim();
    var _iterator5 = _createForOfIteratorHelper(message.Options),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v4 = _step5.value;
        DepositOptions.encode(_v4, writer.uint32(74).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDeposit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenA = reader.string();
          break;
        case 4:
          message.tokenB = reader.string();
          break;
        case 5:
          message.amountsA.push(reader.string());
          break;
        case 6:
          message.amountsB.push(reader.string());
          break;
        case 7:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tickIndexesAToB.push(reader.int64());
            }
          } else {
            message.tickIndexesAToB.push(reader.int64());
          }
          break;
        case 8:
          if ((tag & 7) === 2) {
            var _end = reader.uint32() + reader.pos;
            while (reader.pos < _end) {
              message.fees.push(reader.uint64());
            }
          } else {
            message.fees.push(reader.uint64());
          }
          break;
        case 9:
          message.Options.push(DepositOptions.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      receiver: (0, _helpers.isSet)(object.receiver) ? String(object.receiver) : "",
      tokenA: (0, _helpers.isSet)(object.tokenA) ? String(object.tokenA) : "",
      tokenB: (0, _helpers.isSet)(object.tokenB) ? String(object.tokenB) : "",
      amountsA: Array.isArray(object === null || object === void 0 ? void 0 : object.amountsA) ? object.amountsA.map(function (e) {
        return String(e);
      }) : [],
      amountsB: Array.isArray(object === null || object === void 0 ? void 0 : object.amountsB) ? object.amountsB.map(function (e) {
        return String(e);
      }) : [],
      tickIndexesAToB: Array.isArray(object === null || object === void 0 ? void 0 : object.tickIndexesAToB) ? object.tickIndexesAToB.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : [],
      fees: Array.isArray(object === null || object === void 0 ? void 0 : object.fees) ? object.fees.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : [],
      Options: Array.isArray(object === null || object === void 0 ? void 0 : object.Options) ? object.Options.map(function (e) {
        return DepositOptions.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$creator, _object$receiver, _object$tokenA, _object$tokenB, _object$amountsA, _object$amountsB, _object$tickIndexesAT, _object$fees, _object$Options;
    var message = createBaseMsgDeposit();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.receiver = (_object$receiver = object.receiver) !== null && _object$receiver !== void 0 ? _object$receiver : "";
    message.tokenA = (_object$tokenA = object.tokenA) !== null && _object$tokenA !== void 0 ? _object$tokenA : "";
    message.tokenB = (_object$tokenB = object.tokenB) !== null && _object$tokenB !== void 0 ? _object$tokenB : "";
    message.amountsA = ((_object$amountsA = object.amountsA) === null || _object$amountsA === void 0 ? void 0 : _object$amountsA.map(function (e) {
      return e;
    })) || [];
    message.amountsB = ((_object$amountsB = object.amountsB) === null || _object$amountsB === void 0 ? void 0 : _object$amountsB.map(function (e) {
      return e;
    })) || [];
    message.tickIndexesAToB = ((_object$tickIndexesAT = object.tickIndexesAToB) === null || _object$tickIndexesAT === void 0 ? void 0 : _object$tickIndexesAT.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    message.fees = ((_object$fees = object.fees) === null || _object$fees === void 0 ? void 0 : _object$fees.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    message.Options = ((_object$Options = object.Options) === null || _object$Options === void 0 ? void 0 : _object$Options.map(function (e) {
      return DepositOptions.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgDeposit = MsgDeposit;
function createBaseMsgDepositResponse() {
  return {
    Reserve0Deposited: [],
    Reserve1Deposited: []
  };
}
var MsgDepositResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.Reserve0Deposited),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    var _iterator7 = _createForOfIteratorHelper(message.Reserve1Deposited),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _v5 = _step7.value;
        writer.uint32(18).string(_v5);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDepositResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Reserve0Deposited.push(reader.string());
          break;
        case 2:
          message.Reserve1Deposited.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      Reserve0Deposited: Array.isArray(object === null || object === void 0 ? void 0 : object.Reserve0Deposited) ? object.Reserve0Deposited.map(function (e) {
        return String(e);
      }) : [],
      Reserve1Deposited: Array.isArray(object === null || object === void 0 ? void 0 : object.Reserve1Deposited) ? object.Reserve1Deposited.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$Reserve0Depos, _object$Reserve1Depos;
    var message = createBaseMsgDepositResponse();
    message.Reserve0Deposited = ((_object$Reserve0Depos = object.Reserve0Deposited) === null || _object$Reserve0Depos === void 0 ? void 0 : _object$Reserve0Depos.map(function (e) {
      return e;
    })) || [];
    message.Reserve1Deposited = ((_object$Reserve1Depos = object.Reserve1Deposited) === null || _object$Reserve1Depos === void 0 ? void 0 : _object$Reserve1Depos.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.MsgDepositResponse = MsgDepositResponse;
function createBaseMsgWithdrawal() {
  return {
    creator: "",
    receiver: "",
    tokenA: "",
    tokenB: "",
    sharesToRemove: [],
    tickIndexesAToB: [],
    fees: []
  };
}
var MsgWithdrawal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenA !== "") {
      writer.uint32(26).string(message.tokenA);
    }
    if (message.tokenB !== "") {
      writer.uint32(34).string(message.tokenB);
    }
    var _iterator8 = _createForOfIteratorHelper(message.sharesToRemove),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        writer.uint32(42).string(v);
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    writer.uint32(50).fork();
    var _iterator9 = _createForOfIteratorHelper(message.tickIndexesAToB),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var _v6 = _step9.value;
        writer.int64(_v6);
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    writer.ldelim();
    writer.uint32(58).fork();
    var _iterator10 = _createForOfIteratorHelper(message.fees),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var _v7 = _step10.value;
        writer.uint64(_v7);
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenA = reader.string();
          break;
        case 4:
          message.tokenB = reader.string();
          break;
        case 5:
          message.sharesToRemove.push(reader.string());
          break;
        case 6:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tickIndexesAToB.push(reader.int64());
            }
          } else {
            message.tickIndexesAToB.push(reader.int64());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            var _end2 = reader.uint32() + reader.pos;
            while (reader.pos < _end2) {
              message.fees.push(reader.uint64());
            }
          } else {
            message.fees.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      receiver: (0, _helpers.isSet)(object.receiver) ? String(object.receiver) : "",
      tokenA: (0, _helpers.isSet)(object.tokenA) ? String(object.tokenA) : "",
      tokenB: (0, _helpers.isSet)(object.tokenB) ? String(object.tokenB) : "",
      sharesToRemove: Array.isArray(object === null || object === void 0 ? void 0 : object.sharesToRemove) ? object.sharesToRemove.map(function (e) {
        return String(e);
      }) : [],
      tickIndexesAToB: Array.isArray(object === null || object === void 0 ? void 0 : object.tickIndexesAToB) ? object.tickIndexesAToB.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : [],
      fees: Array.isArray(object === null || object === void 0 ? void 0 : object.fees) ? object.fees.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2, _object$receiver2, _object$tokenA2, _object$tokenB2, _object$sharesToRemov, _object$tickIndexesAT2, _object$fees2;
    var message = createBaseMsgWithdrawal();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.receiver = (_object$receiver2 = object.receiver) !== null && _object$receiver2 !== void 0 ? _object$receiver2 : "";
    message.tokenA = (_object$tokenA2 = object.tokenA) !== null && _object$tokenA2 !== void 0 ? _object$tokenA2 : "";
    message.tokenB = (_object$tokenB2 = object.tokenB) !== null && _object$tokenB2 !== void 0 ? _object$tokenB2 : "";
    message.sharesToRemove = ((_object$sharesToRemov = object.sharesToRemove) === null || _object$sharesToRemov === void 0 ? void 0 : _object$sharesToRemov.map(function (e) {
      return e;
    })) || [];
    message.tickIndexesAToB = ((_object$tickIndexesAT2 = object.tickIndexesAToB) === null || _object$tickIndexesAT2 === void 0 ? void 0 : _object$tickIndexesAT2.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    message.fees = ((_object$fees2 = object.fees) === null || _object$fees2 === void 0 ? void 0 : _object$fees2.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.MsgWithdrawal = MsgWithdrawal;
function createBaseMsgWithdrawalResponse() {
  return {};
}
var MsgWithdrawalResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawalResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgWithdrawalResponse();
    return message;
  }
};
exports.MsgWithdrawalResponse = MsgWithdrawalResponse;
function createBaseMsgPlaceLimitOrder() {
  return {
    creator: "",
    receiver: "",
    tokenIn: "",
    tokenOut: "",
    tickIndexInToOut: _helpers.Long.ZERO,
    amountIn: "",
    orderType: 0,
    expirationTime: undefined,
    maxAmountOut: undefined
  };
}
var MsgPlaceLimitOrder = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (!message.tickIndexInToOut.isZero()) {
      writer.uint32(40).int64(message.tickIndexInToOut);
    }
    if (message.amountIn !== "") {
      writer.uint32(58).string(message.amountIn);
    }
    if (message.orderType !== 0) {
      writer.uint32(64).int32(message.orderType);
    }
    if (message.expirationTime !== undefined) {
      _timestamp.Timestamp.encode(message.expirationTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.maxAmountOut !== undefined) {
      writer.uint32(82).string(message.maxAmountOut);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgPlaceLimitOrder();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.tickIndexInToOut = reader.int64();
          break;
        case 7:
          message.amountIn = reader.string();
          break;
        case 8:
          message.orderType = reader.int32();
          break;
        case 9:
          message.expirationTime = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.maxAmountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      receiver: (0, _helpers.isSet)(object.receiver) ? String(object.receiver) : "",
      tokenIn: (0, _helpers.isSet)(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: (0, _helpers.isSet)(object.tokenOut) ? String(object.tokenOut) : "",
      tickIndexInToOut: (0, _helpers.isSet)(object.tickIndexInToOut) ? _helpers.Long.fromValue(object.tickIndexInToOut) : _helpers.Long.ZERO,
      amountIn: (0, _helpers.isSet)(object.amountIn) ? String(object.amountIn) : "",
      orderType: (0, _helpers.isSet)(object.orderType) ? limitOrderTypeFromJSON(object.orderType) : -1,
      expirationTime: (0, _helpers.isSet)(object.expirationTime) ? (0, _helpers.fromJsonTimestamp)(object.expirationTime) : undefined,
      maxAmountOut: (0, _helpers.isSet)(object.maxAmountOut) ? String(object.maxAmountOut) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$creator3, _object$receiver3, _object$tokenIn, _object$tokenOut, _object$amountIn, _object$orderType, _object$maxAmountOut;
    var message = createBaseMsgPlaceLimitOrder();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.receiver = (_object$receiver3 = object.receiver) !== null && _object$receiver3 !== void 0 ? _object$receiver3 : "";
    message.tokenIn = (_object$tokenIn = object.tokenIn) !== null && _object$tokenIn !== void 0 ? _object$tokenIn : "";
    message.tokenOut = (_object$tokenOut = object.tokenOut) !== null && _object$tokenOut !== void 0 ? _object$tokenOut : "";
    message.tickIndexInToOut = object.tickIndexInToOut !== undefined && object.tickIndexInToOut !== null ? _helpers.Long.fromValue(object.tickIndexInToOut) : _helpers.Long.ZERO;
    message.amountIn = (_object$amountIn = object.amountIn) !== null && _object$amountIn !== void 0 ? _object$amountIn : "";
    message.orderType = (_object$orderType = object.orderType) !== null && _object$orderType !== void 0 ? _object$orderType : 0;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? _timestamp.Timestamp.fromPartial(object.expirationTime) : undefined;
    message.maxAmountOut = (_object$maxAmountOut = object.maxAmountOut) !== null && _object$maxAmountOut !== void 0 ? _object$maxAmountOut : undefined;
    return message;
  }
};
exports.MsgPlaceLimitOrder = MsgPlaceLimitOrder;
function createBaseMsgPlaceLimitOrderResponse() {
  return {
    trancheKey: "",
    coinIn: _coin.Coin.fromPartial({}),
    takerCoinOut: _coin.Coin.fromPartial({})
  };
}
var MsgPlaceLimitOrderResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.trancheKey !== "") {
      writer.uint32(10).string(message.trancheKey);
    }
    if (message.coinIn !== undefined) {
      _coin.Coin.encode(message.coinIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.takerCoinOut !== undefined) {
      _coin.Coin.encode(message.takerCoinOut, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgPlaceLimitOrderResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trancheKey = reader.string();
          break;
        case 2:
          message.coinIn = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.takerCoinOut = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      trancheKey: (0, _helpers.isSet)(object.trancheKey) ? String(object.trancheKey) : "",
      coinIn: (0, _helpers.isSet)(object.coinIn) ? _coin.Coin.fromJSON(object.coinIn) : undefined,
      takerCoinOut: (0, _helpers.isSet)(object.takerCoinOut) ? _coin.Coin.fromJSON(object.takerCoinOut) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$trancheKey;
    var message = createBaseMsgPlaceLimitOrderResponse();
    message.trancheKey = (_object$trancheKey = object.trancheKey) !== null && _object$trancheKey !== void 0 ? _object$trancheKey : "";
    message.coinIn = object.coinIn !== undefined && object.coinIn !== null ? _coin.Coin.fromPartial(object.coinIn) : undefined;
    message.takerCoinOut = object.takerCoinOut !== undefined && object.takerCoinOut !== null ? _coin.Coin.fromPartial(object.takerCoinOut) : undefined;
    return message;
  }
};
exports.MsgPlaceLimitOrderResponse = MsgPlaceLimitOrderResponse;
function createBaseMsgWithdrawFilledLimitOrder() {
  return {
    creator: "",
    trancheKey: ""
  };
}
var MsgWithdrawFilledLimitOrder = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawFilledLimitOrder();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      trancheKey: (0, _helpers.isSet)(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$creator4, _object$trancheKey2;
    var message = createBaseMsgWithdrawFilledLimitOrder();
    message.creator = (_object$creator4 = object.creator) !== null && _object$creator4 !== void 0 ? _object$creator4 : "";
    message.trancheKey = (_object$trancheKey2 = object.trancheKey) !== null && _object$trancheKey2 !== void 0 ? _object$trancheKey2 : "";
    return message;
  }
};
exports.MsgWithdrawFilledLimitOrder = MsgWithdrawFilledLimitOrder;
function createBaseMsgWithdrawFilledLimitOrderResponse() {
  return {};
}
var MsgWithdrawFilledLimitOrderResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawFilledLimitOrderResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgWithdrawFilledLimitOrderResponse();
    return message;
  }
};
exports.MsgWithdrawFilledLimitOrderResponse = MsgWithdrawFilledLimitOrderResponse;
function createBaseMsgCancelLimitOrder() {
  return {
    creator: "",
    trancheKey: ""
  };
}
var MsgCancelLimitOrder = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCancelLimitOrder();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      trancheKey: (0, _helpers.isSet)(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$creator5, _object$trancheKey3;
    var message = createBaseMsgCancelLimitOrder();
    message.creator = (_object$creator5 = object.creator) !== null && _object$creator5 !== void 0 ? _object$creator5 : "";
    message.trancheKey = (_object$trancheKey3 = object.trancheKey) !== null && _object$trancheKey3 !== void 0 ? _object$trancheKey3 : "";
    return message;
  }
};
exports.MsgCancelLimitOrder = MsgCancelLimitOrder;
function createBaseMsgCancelLimitOrderResponse() {
  return {};
}
var MsgCancelLimitOrderResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCancelLimitOrderResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgCancelLimitOrderResponse();
    return message;
  }
};
exports.MsgCancelLimitOrderResponse = MsgCancelLimitOrderResponse;
function createBaseMultiHopRoute() {
  return {
    hops: []
  };
}
var MultiHopRoute = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator11 = _createForOfIteratorHelper(message.hops),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var v = _step11.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMultiHopRoute();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hops.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      hops: Array.isArray(object === null || object === void 0 ? void 0 : object.hops) ? object.hops.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$hops;
    var message = createBaseMultiHopRoute();
    message.hops = ((_object$hops = object.hops) === null || _object$hops === void 0 ? void 0 : _object$hops.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.MultiHopRoute = MultiHopRoute;
function createBaseMsgMultiHopSwap() {
  return {
    creator: "",
    receiver: "",
    routes: [],
    amountIn: "",
    exitLimitPrice: "",
    pickBestRoute: false
  };
}
var MsgMultiHopSwap = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    var _iterator12 = _createForOfIteratorHelper(message.routes),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var v = _step12.value;
        MultiHopRoute.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.exitLimitPrice !== "") {
      writer.uint32(42).string(message.exitLimitPrice);
    }
    if (message.pickBestRoute === true) {
      writer.uint32(48).bool(message.pickBestRoute);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgMultiHopSwap();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.routes.push(MultiHopRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.amountIn = reader.string();
          break;
        case 5:
          message.exitLimitPrice = reader.string();
          break;
        case 6:
          message.pickBestRoute = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      receiver: (0, _helpers.isSet)(object.receiver) ? String(object.receiver) : "",
      routes: Array.isArray(object === null || object === void 0 ? void 0 : object.routes) ? object.routes.map(function (e) {
        return MultiHopRoute.fromJSON(e);
      }) : [],
      amountIn: (0, _helpers.isSet)(object.amountIn) ? String(object.amountIn) : "",
      exitLimitPrice: (0, _helpers.isSet)(object.exitLimitPrice) ? String(object.exitLimitPrice) : "",
      pickBestRoute: (0, _helpers.isSet)(object.pickBestRoute) ? Boolean(object.pickBestRoute) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$creator6, _object$receiver4, _object$routes, _object$amountIn2, _object$exitLimitPric, _object$pickBestRoute;
    var message = createBaseMsgMultiHopSwap();
    message.creator = (_object$creator6 = object.creator) !== null && _object$creator6 !== void 0 ? _object$creator6 : "";
    message.receiver = (_object$receiver4 = object.receiver) !== null && _object$receiver4 !== void 0 ? _object$receiver4 : "";
    message.routes = ((_object$routes = object.routes) === null || _object$routes === void 0 ? void 0 : _object$routes.map(function (e) {
      return MultiHopRoute.fromPartial(e);
    })) || [];
    message.amountIn = (_object$amountIn2 = object.amountIn) !== null && _object$amountIn2 !== void 0 ? _object$amountIn2 : "";
    message.exitLimitPrice = (_object$exitLimitPric = object.exitLimitPrice) !== null && _object$exitLimitPric !== void 0 ? _object$exitLimitPric : "";
    message.pickBestRoute = (_object$pickBestRoute = object.pickBestRoute) !== null && _object$pickBestRoute !== void 0 ? _object$pickBestRoute : false;
    return message;
  }
};
exports.MsgMultiHopSwap = MsgMultiHopSwap;
function createBaseMsgMultiHopSwapResponse() {
  return {
    coinOut: _coin.Coin.fromPartial({})
  };
}
var MsgMultiHopSwapResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.coinOut !== undefined) {
      _coin.Coin.encode(message.coinOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgMultiHopSwapResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinOut = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      coinOut: (0, _helpers.isSet)(object.coinOut) ? _coin.Coin.fromJSON(object.coinOut) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgMultiHopSwapResponse();
    message.coinOut = object.coinOut !== undefined && object.coinOut !== null ? _coin.Coin.fromPartial(object.coinOut) : undefined;
    return message;
  }
};
exports.MsgMultiHopSwapResponse = MsgMultiHopSwapResponse;