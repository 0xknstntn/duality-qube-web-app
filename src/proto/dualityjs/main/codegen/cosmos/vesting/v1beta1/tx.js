"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgCreateVestingAccountResponse = exports.MsgCreateVestingAccount = exports.MsgCreatePermanentLockedAccountResponse = exports.MsgCreatePermanentLockedAccount = exports.MsgCreatePeriodicVestingAccountResponse = exports.MsgCreatePeriodicVestingAccount = void 0;
var _coin = require("../../base/v1beta1/coin");
var _vesting = require("./vesting");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */

/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */

/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 * 
 * Since: cosmos-sdk 0.46
 */

function createBaseMsgCreateVestingAccount() {
  return {
    from_address: "",
    to_address: "",
    amount: [],
    end_time: _helpers.Long.ZERO,
    delayed: false
  };
}
var MsgCreateVestingAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }
    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }
    var _iterator = _createForOfIteratorHelper(message.amount),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!message.end_time.isZero()) {
      writer.uint32(32).int64(message.end_time);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateVestingAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;
        case 2:
          message.to_address = reader.string();
          break;
        case 3:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.end_time = reader.int64();
          break;
        case 5:
          message.delayed = reader.bool();
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
      from_address: (0, _helpers.isSet)(object.from_address) ? String(object.from_address) : "",
      to_address: (0, _helpers.isSet)(object.to_address) ? String(object.to_address) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      end_time: (0, _helpers.isSet)(object.end_time) ? _helpers.Long.fromValue(object.end_time) : _helpers.Long.ZERO,
      delayed: (0, _helpers.isSet)(object.delayed) ? Boolean(object.delayed) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$from_address, _object$to_address, _object$amount, _object$delayed;
    var message = createBaseMsgCreateVestingAccount();
    message.from_address = (_object$from_address = object.from_address) !== null && _object$from_address !== void 0 ? _object$from_address : "";
    message.to_address = (_object$to_address = object.to_address) !== null && _object$to_address !== void 0 ? _object$to_address : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.end_time = object.end_time !== undefined && object.end_time !== null ? _helpers.Long.fromValue(object.end_time) : _helpers.Long.ZERO;
    message.delayed = (_object$delayed = object.delayed) !== null && _object$delayed !== void 0 ? _object$delayed : false;
    return message;
  }
};
exports.MsgCreateVestingAccount = MsgCreateVestingAccount;
function createBaseMsgCreateVestingAccountResponse() {
  return {};
}
var MsgCreateVestingAccountResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateVestingAccountResponse();
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
    var message = createBaseMsgCreateVestingAccountResponse();
    return message;
  }
};
exports.MsgCreateVestingAccountResponse = MsgCreateVestingAccountResponse;
function createBaseMsgCreatePermanentLockedAccount() {
  return {
    from_address: "",
    to_address: "",
    amount: []
  };
}
var MsgCreatePermanentLockedAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }
    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }
    var _iterator2 = _createForOfIteratorHelper(message.amount),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreatePermanentLockedAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;
        case 2:
          message.to_address = reader.string();
          break;
        case 3:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
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
      from_address: (0, _helpers.isSet)(object.from_address) ? String(object.from_address) : "",
      to_address: (0, _helpers.isSet)(object.to_address) ? String(object.to_address) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$from_address2, _object$to_address2, _object$amount2;
    var message = createBaseMsgCreatePermanentLockedAccount();
    message.from_address = (_object$from_address2 = object.from_address) !== null && _object$from_address2 !== void 0 ? _object$from_address2 : "";
    message.to_address = (_object$to_address2 = object.to_address) !== null && _object$to_address2 !== void 0 ? _object$to_address2 : "";
    message.amount = ((_object$amount2 = object.amount) === null || _object$amount2 === void 0 ? void 0 : _object$amount2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgCreatePermanentLockedAccount = MsgCreatePermanentLockedAccount;
function createBaseMsgCreatePermanentLockedAccountResponse() {
  return {};
}
var MsgCreatePermanentLockedAccountResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreatePermanentLockedAccountResponse();
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
    var message = createBaseMsgCreatePermanentLockedAccountResponse();
    return message;
  }
};
exports.MsgCreatePermanentLockedAccountResponse = MsgCreatePermanentLockedAccountResponse;
function createBaseMsgCreatePeriodicVestingAccount() {
  return {
    from_address: "",
    to_address: "",
    start_time: _helpers.Long.ZERO,
    vesting_periods: []
  };
}
var MsgCreatePeriodicVestingAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }
    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }
    if (!message.start_time.isZero()) {
      writer.uint32(24).int64(message.start_time);
    }
    var _iterator3 = _createForOfIteratorHelper(message.vesting_periods),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _vesting.Period.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreatePeriodicVestingAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;
        case 2:
          message.to_address = reader.string();
          break;
        case 3:
          message.start_time = reader.int64();
          break;
        case 4:
          message.vesting_periods.push(_vesting.Period.decode(reader, reader.uint32()));
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
      from_address: (0, _helpers.isSet)(object.from_address) ? String(object.from_address) : "",
      to_address: (0, _helpers.isSet)(object.to_address) ? String(object.to_address) : "",
      start_time: (0, _helpers.isSet)(object.start_time) ? _helpers.Long.fromValue(object.start_time) : _helpers.Long.ZERO,
      vesting_periods: Array.isArray(object === null || object === void 0 ? void 0 : object.vesting_periods) ? object.vesting_periods.map(function (e) {
        return _vesting.Period.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$from_address3, _object$to_address3, _object$vesting_perio;
    var message = createBaseMsgCreatePeriodicVestingAccount();
    message.from_address = (_object$from_address3 = object.from_address) !== null && _object$from_address3 !== void 0 ? _object$from_address3 : "";
    message.to_address = (_object$to_address3 = object.to_address) !== null && _object$to_address3 !== void 0 ? _object$to_address3 : "";
    message.start_time = object.start_time !== undefined && object.start_time !== null ? _helpers.Long.fromValue(object.start_time) : _helpers.Long.ZERO;
    message.vesting_periods = ((_object$vesting_perio = object.vesting_periods) === null || _object$vesting_perio === void 0 ? void 0 : _object$vesting_perio.map(function (e) {
      return _vesting.Period.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgCreatePeriodicVestingAccount = MsgCreatePeriodicVestingAccount;
function createBaseMsgCreatePeriodicVestingAccountResponse() {
  return {};
}
var MsgCreatePeriodicVestingAccountResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
    var message = createBaseMsgCreatePeriodicVestingAccountResponse();
    return message;
  }
};
exports.MsgCreatePeriodicVestingAccountResponse = MsgCreatePeriodicVestingAccountResponse;