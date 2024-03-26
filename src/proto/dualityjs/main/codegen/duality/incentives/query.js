"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetStakesResponse = exports.GetStakesRequest = exports.GetStakeByIDResponse = exports.GetStakeByIDRequest = exports.GetModuleStatusResponse = exports.GetModuleStatusRequest = exports.GetGaugesResponse = exports.GetGaugesRequest = exports.GetGaugeQualifyingValueResponse = exports.GetGaugeQualifyingValueRequest = exports.GetGaugeByIDResponse = exports.GetGaugeByIDRequest = exports.GetFutureRewardEstimateResponse = exports.GetFutureRewardEstimateRequest = exports.GetAccountHistoryResponse = exports.GetAccountHistoryRequest = exports.GaugeStatus = void 0;
exports.gaugeStatusFromJSON = gaugeStatusFromJSON;
exports.gaugeStatusToJSON = gaugeStatusToJSON;
var _coin = require("../../cosmos/base/v1beta1/coin");
var _params = require("./params");
var _gauge = require("./gauge");
var _stake = require("./stake");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var GaugeStatus = /*#__PURE__*/function (GaugeStatus) {
  GaugeStatus[GaugeStatus["ACTIVE_UPCOMING"] = 0] = "ACTIVE_UPCOMING";
  GaugeStatus[GaugeStatus["ACTIVE"] = 1] = "ACTIVE";
  GaugeStatus[GaugeStatus["UPCOMING"] = 2] = "UPCOMING";
  GaugeStatus[GaugeStatus["FINISHED"] = 3] = "FINISHED";
  GaugeStatus[GaugeStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return GaugeStatus;
}({});
exports.GaugeStatus = GaugeStatus;
function gaugeStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "ACTIVE_UPCOMING":
      return GaugeStatus.ACTIVE_UPCOMING;
    case 1:
    case "ACTIVE":
      return GaugeStatus.ACTIVE;
    case 2:
    case "UPCOMING":
      return GaugeStatus.UPCOMING;
    case 3:
    case "FINISHED":
      return GaugeStatus.FINISHED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GaugeStatus.UNRECOGNIZED;
  }
}
function gaugeStatusToJSON(object) {
  switch (object) {
    case GaugeStatus.ACTIVE_UPCOMING:
      return "ACTIVE_UPCOMING";
    case GaugeStatus.ACTIVE:
      return "ACTIVE";
    case GaugeStatus.UPCOMING:
      return "UPCOMING";
    case GaugeStatus.FINISHED:
      return "FINISHED";
    case GaugeStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseGetModuleStatusRequest() {
  return {};
}
var GetModuleStatusRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetModuleStatusRequest();
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
    var message = createBaseGetModuleStatusRequest();
    return message;
  }
};
exports.GetModuleStatusRequest = GetModuleStatusRequest;
function createBaseGetModuleStatusResponse() {
  return {
    reward_coins: [],
    staked_coins: [],
    params: _params.Params.fromPartial({})
  };
}
var GetModuleStatusResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.reward_coins),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.staked_coins),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _coin.Coin.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetModuleStatusResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reward_coins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.staked_coins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.params = _params.Params.decode(reader, reader.uint32());
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
      reward_coins: Array.isArray(object === null || object === void 0 ? void 0 : object.reward_coins) ? object.reward_coins.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      staked_coins: Array.isArray(object === null || object === void 0 ? void 0 : object.staked_coins) ? object.staked_coins.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      params: (0, _helpers.isSet)(object.params) ? _params.Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$reward_coins, _object$staked_coins;
    var message = createBaseGetModuleStatusResponse();
    message.reward_coins = ((_object$reward_coins = object.reward_coins) === null || _object$reward_coins === void 0 ? void 0 : _object$reward_coins.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.staked_coins = ((_object$staked_coins = object.staked_coins) === null || _object$staked_coins === void 0 ? void 0 : _object$staked_coins.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.GetModuleStatusResponse = GetModuleStatusResponse;
function createBaseGetGaugeByIDRequest() {
  return {
    id: _helpers.Long.UZERO
  };
}
var GetGaugeByIDRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetGaugeByIDRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
      id: (0, _helpers.isSet)(object.id) ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetGaugeByIDRequest();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    return message;
  }
};
exports.GetGaugeByIDRequest = GetGaugeByIDRequest;
function createBaseGetGaugeByIDResponse() {
  return {
    gauge: _gauge.Gauge.fromPartial({})
  };
}
var GetGaugeByIDResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.gauge !== undefined) {
      _gauge.Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetGaugeByIDResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauge = _gauge.Gauge.decode(reader, reader.uint32());
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
      gauge: (0, _helpers.isSet)(object.gauge) ? _gauge.Gauge.fromJSON(object.gauge) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetGaugeByIDResponse();
    message.gauge = object.gauge !== undefined && object.gauge !== null ? _gauge.Gauge.fromPartial(object.gauge) : undefined;
    return message;
  }
};
exports.GetGaugeByIDResponse = GetGaugeByIDResponse;
function createBaseGetGaugeQualifyingValueRequest() {
  return {
    id: _helpers.Long.UZERO
  };
}
var GetGaugeQualifyingValueRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetGaugeQualifyingValueRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
      id: (0, _helpers.isSet)(object.id) ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetGaugeQualifyingValueRequest();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    return message;
  }
};
exports.GetGaugeQualifyingValueRequest = GetGaugeQualifyingValueRequest;
function createBaseGetGaugeQualifyingValueResponse() {
  return {
    qualifying_value: _helpers.Long.UZERO
  };
}
var GetGaugeQualifyingValueResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.qualifying_value.isZero()) {
      writer.uint32(8).uint64(message.qualifying_value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetGaugeQualifyingValueResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.qualifying_value = reader.uint64();
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
      qualifying_value: (0, _helpers.isSet)(object.qualifying_value) ? _helpers.Long.fromValue(object.qualifying_value) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetGaugeQualifyingValueResponse();
    message.qualifying_value = object.qualifying_value !== undefined && object.qualifying_value !== null ? _helpers.Long.fromValue(object.qualifying_value) : _helpers.Long.UZERO;
    return message;
  }
};
exports.GetGaugeQualifyingValueResponse = GetGaugeQualifyingValueResponse;
function createBaseGetGaugesRequest() {
  return {
    status: 0,
    denom: ""
  };
}
var GetGaugesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetGaugesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        case 2:
          message.denom = reader.string();
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
      status: (0, _helpers.isSet)(object.status) ? gaugeStatusFromJSON(object.status) : -1,
      denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$status, _object$denom;
    var message = createBaseGetGaugesRequest();
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
exports.GetGaugesRequest = GetGaugesRequest;
function createBaseGetGaugesResponse() {
  return {
    gauges: []
  };
}
var GetGaugesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.gauges),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _gauge.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseGetGaugesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauges.push(_gauge.Gauge.decode(reader, reader.uint32()));
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
      gauges: Array.isArray(object === null || object === void 0 ? void 0 : object.gauges) ? object.gauges.map(function (e) {
        return _gauge.Gauge.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$gauges;
    var message = createBaseGetGaugesResponse();
    message.gauges = ((_object$gauges = object.gauges) === null || _object$gauges === void 0 ? void 0 : _object$gauges.map(function (e) {
      return _gauge.Gauge.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GetGaugesResponse = GetGaugesResponse;
function createBaseGetStakeByIDRequest() {
  return {
    stake_id: _helpers.Long.UZERO
  };
}
var GetStakeByIDRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.stake_id.isZero()) {
      writer.uint32(8).uint64(message.stake_id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetStakeByIDRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake_id = reader.uint64();
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
      stake_id: (0, _helpers.isSet)(object.stake_id) ? _helpers.Long.fromValue(object.stake_id) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetStakeByIDRequest();
    message.stake_id = object.stake_id !== undefined && object.stake_id !== null ? _helpers.Long.fromValue(object.stake_id) : _helpers.Long.UZERO;
    return message;
  }
};
exports.GetStakeByIDRequest = GetStakeByIDRequest;
function createBaseGetStakeByIDResponse() {
  return {
    stake: _stake.Stake.fromPartial({})
  };
}
var GetStakeByIDResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.stake !== undefined) {
      _stake.Stake.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetStakeByIDResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake = _stake.Stake.decode(reader, reader.uint32());
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
      stake: (0, _helpers.isSet)(object.stake) ? _stake.Stake.fromJSON(object.stake) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetStakeByIDResponse();
    message.stake = object.stake !== undefined && object.stake !== null ? _stake.Stake.fromPartial(object.stake) : undefined;
    return message;
  }
};
exports.GetStakeByIDResponse = GetStakeByIDResponse;
function createBaseGetStakesRequest() {
  return {
    owner: ""
  };
}
var GetStakesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetStakesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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
      owner: (0, _helpers.isSet)(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$owner;
    var message = createBaseGetStakesRequest();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    return message;
  }
};
exports.GetStakesRequest = GetStakesRequest;
function createBaseGetStakesResponse() {
  return {
    stakes: []
  };
}
var GetStakesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.stakes),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _stake.Stake.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseGetStakesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakes.push(_stake.Stake.decode(reader, reader.uint32()));
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
      stakes: Array.isArray(object === null || object === void 0 ? void 0 : object.stakes) ? object.stakes.map(function (e) {
        return _stake.Stake.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$stakes;
    var message = createBaseGetStakesResponse();
    message.stakes = ((_object$stakes = object.stakes) === null || _object$stakes === void 0 ? void 0 : _object$stakes.map(function (e) {
      return _stake.Stake.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GetStakesResponse = GetStakesResponse;
function createBaseGetFutureRewardEstimateRequest() {
  return {
    owner: "",
    stake_ids: [],
    num_epochs: _helpers.Long.ZERO
  };
}
var GetFutureRewardEstimateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    writer.uint32(18).fork();
    var _iterator5 = _createForOfIteratorHelper(message.stake_ids),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    writer.ldelim();
    if (!message.num_epochs.isZero()) {
      writer.uint32(24).int64(message.num_epochs);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetFutureRewardEstimateRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stake_ids.push(reader.uint64());
            }
          } else {
            message.stake_ids.push(reader.uint64());
          }
          break;
        case 3:
          message.num_epochs = reader.int64();
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
      stake_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.stake_ids) ? object.stake_ids.map(function (e) {
        return _helpers.Long.fromValue(e);
      }) : [],
      num_epochs: (0, _helpers.isSet)(object.num_epochs) ? _helpers.Long.fromValue(object.num_epochs) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$owner2, _object$stake_ids;
    var message = createBaseGetFutureRewardEstimateRequest();
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    message.stake_ids = ((_object$stake_ids = object.stake_ids) === null || _object$stake_ids === void 0 ? void 0 : _object$stake_ids.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    message.num_epochs = object.num_epochs !== undefined && object.num_epochs !== null ? _helpers.Long.fromValue(object.num_epochs) : _helpers.Long.ZERO;
    return message;
  }
};
exports.GetFutureRewardEstimateRequest = GetFutureRewardEstimateRequest;
function createBaseGetFutureRewardEstimateResponse() {
  return {
    coins: []
  };
}
var GetFutureRewardEstimateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.coins),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetFutureRewardEstimateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$coins;
    var message = createBaseGetFutureRewardEstimateResponse();
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GetFutureRewardEstimateResponse = GetFutureRewardEstimateResponse;
function createBaseGetAccountHistoryRequest() {
  return {
    account: ""
  };
}
var GetAccountHistoryRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetAccountHistoryRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
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
      account: (0, _helpers.isSet)(object.account) ? String(object.account) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$account;
    var message = createBaseGetAccountHistoryRequest();
    message.account = (_object$account = object.account) !== null && _object$account !== void 0 ? _object$account : "";
    return message;
  }
};
exports.GetAccountHistoryRequest = GetAccountHistoryRequest;
function createBaseGetAccountHistoryResponse() {
  return {
    coins: []
  };
}
var GetAccountHistoryResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator7 = _createForOfIteratorHelper(message.coins),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseGetAccountHistoryResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$coins2;
    var message = createBaseGetAccountHistoryResponse();
    message.coins = ((_object$coins2 = object.coins) === null || _object$coins2 === void 0 ? void 0 : _object$coins2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GetAccountHistoryResponse = GetAccountHistoryResponse;