"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUnstake_UnstakeDescriptor = exports.MsgUnstakeResponse = exports.MsgUnstake = exports.MsgStakeResponse = exports.MsgStake = exports.MsgCreateGaugeResponse = exports.MsgCreateGauge = exports.MsgAddToGaugeResponse = exports.MsgAddToGauge = void 0;
var _gauge = require("./gauge");
var _coin = require("../../cosmos/base/v1beta1/coin");
var _timestamp = require("../../google/protobuf/timestamp");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** MsgCreateGauge creates a gague to distribute rewards to users */

/** MsgAddToGauge adds coins to a previously created gauge */

function createBaseMsgCreateGauge() {
  return {
    is_perpetual: false,
    owner: "",
    distribute_to: _gauge.QueryCondition.fromPartial({}),
    coins: [],
    start_time: _timestamp.Timestamp.fromPartial({}),
    num_epochs_paid_over: _helpers.Long.UZERO,
    pricing_tick: _helpers.Long.ZERO
  };
}
var MsgCreateGauge = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.is_perpetual === true) {
      writer.uint32(8).bool(message.is_perpetual);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.distribute_to !== undefined) {
      _gauge.QueryCondition.encode(message.distribute_to, writer.uint32(26).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.coins),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.start_time !== undefined) {
      _timestamp.Timestamp.encode(message.start_time, writer.uint32(42).fork()).ldelim();
    }
    if (!message.num_epochs_paid_over.isZero()) {
      writer.uint32(48).uint64(message.num_epochs_paid_over);
    }
    if (!message.pricing_tick.isZero()) {
      writer.uint32(56).int64(message.pricing_tick);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateGauge();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.is_perpetual = reader.bool();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.distribute_to = _gauge.QueryCondition.decode(reader, reader.uint32());
          break;
        case 4:
          message.coins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.start_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.num_epochs_paid_over = reader.uint64();
          break;
        case 7:
          message.pricing_tick = reader.int64();
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
      is_perpetual: (0, _helpers.isSet)(object.is_perpetual) ? Boolean(object.is_perpetual) : false,
      owner: (0, _helpers.isSet)(object.owner) ? String(object.owner) : "",
      distribute_to: (0, _helpers.isSet)(object.distribute_to) ? _gauge.QueryCondition.fromJSON(object.distribute_to) : undefined,
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      start_time: (0, _helpers.isSet)(object.start_time) ? (0, _helpers.fromJsonTimestamp)(object.start_time) : undefined,
      num_epochs_paid_over: (0, _helpers.isSet)(object.num_epochs_paid_over) ? _helpers.Long.fromValue(object.num_epochs_paid_over) : _helpers.Long.UZERO,
      pricing_tick: (0, _helpers.isSet)(object.pricing_tick) ? _helpers.Long.fromValue(object.pricing_tick) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$is_perpetual, _object$owner, _object$coins;
    var message = createBaseMsgCreateGauge();
    message.is_perpetual = (_object$is_perpetual = object.is_perpetual) !== null && _object$is_perpetual !== void 0 ? _object$is_perpetual : false;
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.distribute_to = object.distribute_to !== undefined && object.distribute_to !== null ? _gauge.QueryCondition.fromPartial(object.distribute_to) : undefined;
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.start_time = object.start_time !== undefined && object.start_time !== null ? _timestamp.Timestamp.fromPartial(object.start_time) : undefined;
    message.num_epochs_paid_over = object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null ? _helpers.Long.fromValue(object.num_epochs_paid_over) : _helpers.Long.UZERO;
    message.pricing_tick = object.pricing_tick !== undefined && object.pricing_tick !== null ? _helpers.Long.fromValue(object.pricing_tick) : _helpers.Long.ZERO;
    return message;
  }
};
exports.MsgCreateGauge = MsgCreateGauge;
function createBaseMsgCreateGaugeResponse() {
  return {};
}
var MsgCreateGaugeResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateGaugeResponse();
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
    var message = createBaseMsgCreateGaugeResponse();
    return message;
  }
};
exports.MsgCreateGaugeResponse = MsgCreateGaugeResponse;
function createBaseMsgAddToGauge() {
  return {
    owner: "",
    gauge_id: _helpers.Long.UZERO,
    rewards: []
  };
}
var MsgAddToGauge = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.gauge_id.isZero()) {
      writer.uint32(16).uint64(message.gauge_id);
    }
    var _iterator2 = _createForOfIteratorHelper(message.rewards),
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
    var message = createBaseMsgAddToGauge();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.gauge_id = reader.uint64();
          break;
        case 3:
          message.rewards.push(_coin.Coin.decode(reader, reader.uint32()));
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
      owner: (0, _helpers.isSet)(object.owner) ? String(object.owner) : "",
      gauge_id: (0, _helpers.isSet)(object.gauge_id) ? _helpers.Long.fromValue(object.gauge_id) : _helpers.Long.UZERO,
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$owner2, _object$rewards;
    var message = createBaseMsgAddToGauge();
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? _helpers.Long.fromValue(object.gauge_id) : _helpers.Long.UZERO;
    message.rewards = ((_object$rewards = object.rewards) === null || _object$rewards === void 0 ? void 0 : _object$rewards.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgAddToGauge = MsgAddToGauge;
function createBaseMsgAddToGaugeResponse() {
  return {};
}
var MsgAddToGaugeResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgAddToGaugeResponse();
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
    var message = createBaseMsgAddToGaugeResponse();
    return message;
  }
};
exports.MsgAddToGaugeResponse = MsgAddToGaugeResponse;
function createBaseMsgStake() {
  return {
    owner: "",
    coins: []
  };
}
var MsgStake = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    var _iterator3 = _createForOfIteratorHelper(message.coins),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseMsgStake();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.coins.push(_coin.Coin.decode(reader, reader.uint32()));
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
      owner: (0, _helpers.isSet)(object.owner) ? String(object.owner) : "",
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$owner3, _object$coins2;
    var message = createBaseMsgStake();
    message.owner = (_object$owner3 = object.owner) !== null && _object$owner3 !== void 0 ? _object$owner3 : "";
    message.coins = ((_object$coins2 = object.coins) === null || _object$coins2 === void 0 ? void 0 : _object$coins2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgStake = MsgStake;
function createBaseMsgStakeResponse() {
  return {
    ID: _helpers.Long.UZERO
  };
}
var MsgStakeResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
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
      ID: (0, _helpers.isSet)(object.ID) ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgStakeResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgStakeResponse = MsgStakeResponse;
function createBaseMsgUnstake() {
  return {
    owner: "",
    unstakes: []
  };
}
var MsgUnstake = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    var _iterator4 = _createForOfIteratorHelper(message.unstakes),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        MsgUnstake_UnstakeDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUnstake();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.unstakes.push(MsgUnstake_UnstakeDescriptor.decode(reader, reader.uint32()));
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
      owner: (0, _helpers.isSet)(object.owner) ? String(object.owner) : "",
      unstakes: Array.isArray(object === null || object === void 0 ? void 0 : object.unstakes) ? object.unstakes.map(function (e) {
        return MsgUnstake_UnstakeDescriptor.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$owner4, _object$unstakes;
    var message = createBaseMsgUnstake();
    message.owner = (_object$owner4 = object.owner) !== null && _object$owner4 !== void 0 ? _object$owner4 : "";
    message.unstakes = ((_object$unstakes = object.unstakes) === null || _object$unstakes === void 0 ? void 0 : _object$unstakes.map(function (e) {
      return MsgUnstake_UnstakeDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgUnstake = MsgUnstake;
function createBaseMsgUnstake_UnstakeDescriptor() {
  return {
    ID: _helpers.Long.UZERO,
    coins: []
  };
}
var MsgUnstake_UnstakeDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    var _iterator5 = _createForOfIteratorHelper(message.coins),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseMsgUnstake_UnstakeDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;
        case 2:
          message.coins.push(_coin.Coin.decode(reader, reader.uint32()));
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
      ID: (0, _helpers.isSet)(object.ID) ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO,
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$coins3;
    var message = createBaseMsgUnstake_UnstakeDescriptor();
    message.ID = object.ID !== undefined && object.ID !== null ? _helpers.Long.fromValue(object.ID) : _helpers.Long.UZERO;
    message.coins = ((_object$coins3 = object.coins) === null || _object$coins3 === void 0 ? void 0 : _object$coins3.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgUnstake_UnstakeDescriptor = MsgUnstake_UnstakeDescriptor;
function createBaseMsgUnstakeResponse() {
  return {};
}
var MsgUnstakeResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUnstakeResponse();
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
    var message = createBaseMsgUnstakeResponse();
    return message;
  }
};
exports.MsgUnstakeResponse = MsgUnstakeResponse;