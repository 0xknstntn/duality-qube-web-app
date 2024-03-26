"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryPoolByIDRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryGetPoolReservesResponse = exports.QueryGetPoolReservesRequest = exports.QueryGetPoolMetadataResponse = exports.QueryGetPoolMetadataRequest = exports.QueryGetLimitOrderTrancheUserResponse = exports.QueryGetLimitOrderTrancheUserRequest = exports.QueryGetLimitOrderTrancheResponse = exports.QueryGetLimitOrderTrancheRequest = exports.QueryGetInactiveLimitOrderTrancheResponse = exports.QueryGetInactiveLimitOrderTrancheRequest = exports.QueryEstimatePlaceLimitOrderResponse = exports.QueryEstimatePlaceLimitOrderRequest = exports.QueryEstimateMultiHopSwapResponse = exports.QueryEstimateMultiHopSwapRequest = exports.QueryAllUserLimitOrdersResponse = exports.QueryAllUserLimitOrdersRequest = exports.QueryAllUserDepositsResponse = exports.QueryAllUserDepositsRequest = exports.QueryAllTickLiquidityResponse = exports.QueryAllTickLiquidityRequest = exports.QueryAllPoolReservesResponse = exports.QueryAllPoolReservesRequest = exports.QueryAllPoolMetadataResponse = exports.QueryAllPoolMetadataRequest = exports.QueryAllLimitOrderTrancheUserResponse = exports.QueryAllLimitOrderTrancheUserRequest = exports.QueryAllLimitOrderTrancheResponse = exports.QueryAllLimitOrderTrancheRequest = exports.QueryAllInactiveLimitOrderTrancheResponse = exports.QueryAllInactiveLimitOrderTrancheRequest = void 0;
var _pagination = require("../../cosmos/base/query/v1beta1/pagination");
var _tx = require("./tx");
var _timestamp = require("../../google/protobuf/timestamp");
var _params = require("./params");
var _limit_order_tranche_user = require("./limit_order_tranche_user");
var _limit_order_tranche = require("./limit_order_tranche");
var _deposit_record = require("./deposit_record");
var _tick_liquidity = require("./tick_liquidity");
var _pool_reserves = require("./pool_reserves");
var _coin = require("../../cosmos/base/v1beta1/coin");
var _pool = require("./pool");
var _pool_metadata = require("./pool_metadata");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
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
    var message = createBaseQueryParamsRequest();
    return message;
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: _params.Params.fromPartial({})
  };
}
var QueryParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      params: (0, _helpers.isSet)(object.params) ? _params.Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryGetLimitOrderTrancheUserRequest() {
  return {
    address: "",
    trancheKey: ""
  };
}
var QueryGetLimitOrderTrancheUserRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetLimitOrderTrancheUserRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      trancheKey: (0, _helpers.isSet)(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$trancheKey;
    var message = createBaseQueryGetLimitOrderTrancheUserRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.trancheKey = (_object$trancheKey = object.trancheKey) !== null && _object$trancheKey !== void 0 ? _object$trancheKey : "";
    return message;
  }
};
exports.QueryGetLimitOrderTrancheUserRequest = QueryGetLimitOrderTrancheUserRequest;
function createBaseQueryGetLimitOrderTrancheUserResponse() {
  return {
    LimitOrderTrancheUser: undefined
  };
}
var QueryGetLimitOrderTrancheUserResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.LimitOrderTrancheUser !== undefined) {
      _limit_order_tranche_user.LimitOrderTrancheUser.encode(message.LimitOrderTrancheUser, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetLimitOrderTrancheUserResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LimitOrderTrancheUser = _limit_order_tranche_user.LimitOrderTrancheUser.decode(reader, reader.uint32());
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
      LimitOrderTrancheUser: (0, _helpers.isSet)(object.LimitOrderTrancheUser) ? _limit_order_tranche_user.LimitOrderTrancheUser.fromJSON(object.LimitOrderTrancheUser) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetLimitOrderTrancheUserResponse();
    message.LimitOrderTrancheUser = object.LimitOrderTrancheUser !== undefined && object.LimitOrderTrancheUser !== null ? _limit_order_tranche_user.LimitOrderTrancheUser.fromPartial(object.LimitOrderTrancheUser) : undefined;
    return message;
  }
};
exports.QueryGetLimitOrderTrancheUserResponse = QueryGetLimitOrderTrancheUserResponse;
function createBaseQueryAllLimitOrderTrancheUserRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryAllLimitOrderTrancheUserRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllLimitOrderTrancheUserRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryAllLimitOrderTrancheUserRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllLimitOrderTrancheUserRequest = QueryAllLimitOrderTrancheUserRequest;
function createBaseQueryAllLimitOrderTrancheUserResponse() {
  return {
    LimitOrderTrancheUser: undefined,
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryAllLimitOrderTrancheUserResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.LimitOrderTrancheUser),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _limit_order_tranche_user.LimitOrderTrancheUser.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllLimitOrderTrancheUserResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LimitOrderTrancheUser.push(_limit_order_tranche_user.LimitOrderTrancheUser.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      LimitOrderTrancheUser: Array.isArray(object === null || object === void 0 ? void 0 : object.LimitOrderTrancheUser) ? object.LimitOrderTrancheUser.map(function (e) {
        return _limit_order_tranche_user.LimitOrderTrancheUser.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$LimitOrderTra;
    var message = createBaseQueryAllLimitOrderTrancheUserResponse();
    message.LimitOrderTrancheUser = ((_object$LimitOrderTra = object.LimitOrderTrancheUser) === null || _object$LimitOrderTra === void 0 ? void 0 : _object$LimitOrderTra.map(function (e) {
      return _limit_order_tranche_user.LimitOrderTrancheUser.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllLimitOrderTrancheUserResponse = QueryAllLimitOrderTrancheUserResponse;
function createBaseQueryGetLimitOrderTrancheRequest() {
  return {
    pairID: "",
    tickIndex: _helpers.Long.ZERO,
    tokenIn: "",
    trancheKey: ""
  };
}
var QueryGetLimitOrderTrancheRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.trancheKey !== "") {
      writer.uint32(34).string(message.trancheKey);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetLimitOrderTrancheRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
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
      pairID: (0, _helpers.isSet)(object.pairID) ? String(object.pairID) : "",
      tickIndex: (0, _helpers.isSet)(object.tickIndex) ? _helpers.Long.fromValue(object.tickIndex) : _helpers.Long.ZERO,
      tokenIn: (0, _helpers.isSet)(object.tokenIn) ? String(object.tokenIn) : "",
      trancheKey: (0, _helpers.isSet)(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$pairID, _object$tokenIn, _object$trancheKey2;
    var message = createBaseQueryGetLimitOrderTrancheRequest();
    message.pairID = (_object$pairID = object.pairID) !== null && _object$pairID !== void 0 ? _object$pairID : "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? _helpers.Long.fromValue(object.tickIndex) : _helpers.Long.ZERO;
    message.tokenIn = (_object$tokenIn = object.tokenIn) !== null && _object$tokenIn !== void 0 ? _object$tokenIn : "";
    message.trancheKey = (_object$trancheKey2 = object.trancheKey) !== null && _object$trancheKey2 !== void 0 ? _object$trancheKey2 : "";
    return message;
  }
};
exports.QueryGetLimitOrderTrancheRequest = QueryGetLimitOrderTrancheRequest;
function createBaseQueryGetLimitOrderTrancheResponse() {
  return {
    LimitOrderTranche: undefined
  };
}
var QueryGetLimitOrderTrancheResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.LimitOrderTranche !== undefined) {
      _limit_order_tranche.LimitOrderTranche.encode(message.LimitOrderTranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetLimitOrderTrancheResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LimitOrderTranche = _limit_order_tranche.LimitOrderTranche.decode(reader, reader.uint32());
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
      LimitOrderTranche: (0, _helpers.isSet)(object.LimitOrderTranche) ? _limit_order_tranche.LimitOrderTranche.fromJSON(object.LimitOrderTranche) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetLimitOrderTrancheResponse();
    message.LimitOrderTranche = object.LimitOrderTranche !== undefined && object.LimitOrderTranche !== null ? _limit_order_tranche.LimitOrderTranche.fromPartial(object.LimitOrderTranche) : undefined;
    return message;
  }
};
exports.QueryGetLimitOrderTrancheResponse = QueryGetLimitOrderTrancheResponse;
function createBaseQueryAllLimitOrderTrancheRequest() {
  return {
    pairID: "",
    tokenIn: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryAllLimitOrderTrancheRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllLimitOrderTrancheRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pairID: (0, _helpers.isSet)(object.pairID) ? String(object.pairID) : "",
      tokenIn: (0, _helpers.isSet)(object.tokenIn) ? String(object.tokenIn) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$pairID2, _object$tokenIn2;
    var message = createBaseQueryAllLimitOrderTrancheRequest();
    message.pairID = (_object$pairID2 = object.pairID) !== null && _object$pairID2 !== void 0 ? _object$pairID2 : "";
    message.tokenIn = (_object$tokenIn2 = object.tokenIn) !== null && _object$tokenIn2 !== void 0 ? _object$tokenIn2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllLimitOrderTrancheRequest = QueryAllLimitOrderTrancheRequest;
function createBaseQueryAllLimitOrderTrancheResponse() {
  return {
    LimitOrderTranche: undefined,
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryAllLimitOrderTrancheResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.LimitOrderTranche),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _limit_order_tranche.LimitOrderTranche.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllLimitOrderTrancheResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LimitOrderTranche.push(_limit_order_tranche.LimitOrderTranche.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      LimitOrderTranche: Array.isArray(object === null || object === void 0 ? void 0 : object.LimitOrderTranche) ? object.LimitOrderTranche.map(function (e) {
        return _limit_order_tranche.LimitOrderTranche.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$LimitOrderTra2;
    var message = createBaseQueryAllLimitOrderTrancheResponse();
    message.LimitOrderTranche = ((_object$LimitOrderTra2 = object.LimitOrderTranche) === null || _object$LimitOrderTra2 === void 0 ? void 0 : _object$LimitOrderTra2.map(function (e) {
      return _limit_order_tranche.LimitOrderTranche.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllLimitOrderTrancheResponse = QueryAllLimitOrderTrancheResponse;
function createBaseQueryAllUserDepositsRequest() {
  return {
    address: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryAllUserDepositsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllUserDepositsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address2;
    var message = createBaseQueryAllUserDepositsRequest();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllUserDepositsRequest = QueryAllUserDepositsRequest;
function createBaseQueryAllUserDepositsResponse() {
  return {
    Deposits: undefined,
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryAllUserDepositsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.Deposits),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _deposit_record.DepositRecord.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllUserDepositsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Deposits.push(_deposit_record.DepositRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      Deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.Deposits) ? object.Deposits.map(function (e) {
        return _deposit_record.DepositRecord.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$Deposits;
    var message = createBaseQueryAllUserDepositsResponse();
    message.Deposits = ((_object$Deposits = object.Deposits) === null || _object$Deposits === void 0 ? void 0 : _object$Deposits.map(function (e) {
      return _deposit_record.DepositRecord.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllUserDepositsResponse = QueryAllUserDepositsResponse;
function createBaseQueryAllUserLimitOrdersRequest() {
  return {
    address: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryAllUserLimitOrdersRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllUserLimitOrdersRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address3;
    var message = createBaseQueryAllUserLimitOrdersRequest();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllUserLimitOrdersRequest = QueryAllUserLimitOrdersRequest;
function createBaseQueryAllUserLimitOrdersResponse() {
  return {
    limitOrders: undefined,
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryAllUserLimitOrdersResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.limitOrders),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _limit_order_tranche_user.LimitOrderTrancheUser.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllUserLimitOrdersResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrders.push(_limit_order_tranche_user.LimitOrderTrancheUser.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      limitOrders: Array.isArray(object === null || object === void 0 ? void 0 : object.limitOrders) ? object.limitOrders.map(function (e) {
        return _limit_order_tranche_user.LimitOrderTrancheUser.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$limitOrders;
    var message = createBaseQueryAllUserLimitOrdersResponse();
    message.limitOrders = ((_object$limitOrders = object.limitOrders) === null || _object$limitOrders === void 0 ? void 0 : _object$limitOrders.map(function (e) {
      return _limit_order_tranche_user.LimitOrderTrancheUser.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllUserLimitOrdersResponse = QueryAllUserLimitOrdersResponse;
function createBaseQueryAllTickLiquidityRequest() {
  return {
    pairID: "",
    tokenIn: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryAllTickLiquidityRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllTickLiquidityRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pairID: (0, _helpers.isSet)(object.pairID) ? String(object.pairID) : "",
      tokenIn: (0, _helpers.isSet)(object.tokenIn) ? String(object.tokenIn) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$pairID3, _object$tokenIn3;
    var message = createBaseQueryAllTickLiquidityRequest();
    message.pairID = (_object$pairID3 = object.pairID) !== null && _object$pairID3 !== void 0 ? _object$pairID3 : "";
    message.tokenIn = (_object$tokenIn3 = object.tokenIn) !== null && _object$tokenIn3 !== void 0 ? _object$tokenIn3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllTickLiquidityRequest = QueryAllTickLiquidityRequest;
function createBaseQueryAllTickLiquidityResponse() {
  return {
    tickLiquidity: undefined,
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryAllTickLiquidityResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.tickLiquidity),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _tick_liquidity.TickLiquidity.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllTickLiquidityResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tickLiquidity.push(_tick_liquidity.TickLiquidity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      tickLiquidity: Array.isArray(object === null || object === void 0 ? void 0 : object.tickLiquidity) ? object.tickLiquidity.map(function (e) {
        return _tick_liquidity.TickLiquidity.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$tickLiquidity;
    var message = createBaseQueryAllTickLiquidityResponse();
    message.tickLiquidity = ((_object$tickLiquidity = object.tickLiquidity) === null || _object$tickLiquidity === void 0 ? void 0 : _object$tickLiquidity.map(function (e) {
      return _tick_liquidity.TickLiquidity.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllTickLiquidityResponse = QueryAllTickLiquidityResponse;
function createBaseQueryGetInactiveLimitOrderTrancheRequest() {
  return {
    pairID: "",
    tokenIn: "",
    tickIndex: _helpers.Long.ZERO,
    trancheKey: ""
  };
}
var QueryGetInactiveLimitOrderTrancheRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(24).int64(message.tickIndex);
    }
    if (message.trancheKey !== "") {
      writer.uint32(34).string(message.trancheKey);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tickIndex = reader.int64();
          break;
        case 4:
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
      pairID: (0, _helpers.isSet)(object.pairID) ? String(object.pairID) : "",
      tokenIn: (0, _helpers.isSet)(object.tokenIn) ? String(object.tokenIn) : "",
      tickIndex: (0, _helpers.isSet)(object.tickIndex) ? _helpers.Long.fromValue(object.tickIndex) : _helpers.Long.ZERO,
      trancheKey: (0, _helpers.isSet)(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$pairID4, _object$tokenIn4, _object$trancheKey3;
    var message = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    message.pairID = (_object$pairID4 = object.pairID) !== null && _object$pairID4 !== void 0 ? _object$pairID4 : "";
    message.tokenIn = (_object$tokenIn4 = object.tokenIn) !== null && _object$tokenIn4 !== void 0 ? _object$tokenIn4 : "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? _helpers.Long.fromValue(object.tickIndex) : _helpers.Long.ZERO;
    message.trancheKey = (_object$trancheKey3 = object.trancheKey) !== null && _object$trancheKey3 !== void 0 ? _object$trancheKey3 : "";
    return message;
  }
};
exports.QueryGetInactiveLimitOrderTrancheRequest = QueryGetInactiveLimitOrderTrancheRequest;
function createBaseQueryGetInactiveLimitOrderTrancheResponse() {
  return {
    inactiveLimitOrderTranche: undefined
  };
}
var QueryGetInactiveLimitOrderTrancheResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.inactiveLimitOrderTranche !== undefined) {
      _limit_order_tranche.LimitOrderTranche.encode(message.inactiveLimitOrderTranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inactiveLimitOrderTranche = _limit_order_tranche.LimitOrderTranche.decode(reader, reader.uint32());
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
      inactiveLimitOrderTranche: (0, _helpers.isSet)(object.inactiveLimitOrderTranche) ? _limit_order_tranche.LimitOrderTranche.fromJSON(object.inactiveLimitOrderTranche) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    message.inactiveLimitOrderTranche = object.inactiveLimitOrderTranche !== undefined && object.inactiveLimitOrderTranche !== null ? _limit_order_tranche.LimitOrderTranche.fromPartial(object.inactiveLimitOrderTranche) : undefined;
    return message;
  }
};
exports.QueryGetInactiveLimitOrderTrancheResponse = QueryGetInactiveLimitOrderTrancheResponse;
function createBaseQueryAllInactiveLimitOrderTrancheRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryAllInactiveLimitOrderTrancheRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllInactiveLimitOrderTrancheRequest = QueryAllInactiveLimitOrderTrancheRequest;
function createBaseQueryAllInactiveLimitOrderTrancheResponse() {
  return {
    inactiveLimitOrderTranche: undefined,
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryAllInactiveLimitOrderTrancheResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.inactiveLimitOrderTranche),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _limit_order_tranche.LimitOrderTranche.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inactiveLimitOrderTranche.push(_limit_order_tranche.LimitOrderTranche.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      inactiveLimitOrderTranche: Array.isArray(object === null || object === void 0 ? void 0 : object.inactiveLimitOrderTranche) ? object.inactiveLimitOrderTranche.map(function (e) {
        return _limit_order_tranche.LimitOrderTranche.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$inactiveLimit;
    var message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    message.inactiveLimitOrderTranche = ((_object$inactiveLimit = object.inactiveLimitOrderTranche) === null || _object$inactiveLimit === void 0 ? void 0 : _object$inactiveLimit.map(function (e) {
      return _limit_order_tranche.LimitOrderTranche.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllInactiveLimitOrderTrancheResponse = QueryAllInactiveLimitOrderTrancheResponse;
function createBaseQueryAllPoolReservesRequest() {
  return {
    pairID: "",
    tokenIn: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryAllPoolReservesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllPoolReservesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pairID: (0, _helpers.isSet)(object.pairID) ? String(object.pairID) : "",
      tokenIn: (0, _helpers.isSet)(object.tokenIn) ? String(object.tokenIn) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$pairID5, _object$tokenIn5;
    var message = createBaseQueryAllPoolReservesRequest();
    message.pairID = (_object$pairID5 = object.pairID) !== null && _object$pairID5 !== void 0 ? _object$pairID5 : "";
    message.tokenIn = (_object$tokenIn5 = object.tokenIn) !== null && _object$tokenIn5 !== void 0 ? _object$tokenIn5 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllPoolReservesRequest = QueryAllPoolReservesRequest;
function createBaseQueryAllPoolReservesResponse() {
  return {
    poolReserves: undefined,
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryAllPoolReservesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator7 = _createForOfIteratorHelper(message.poolReserves),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        _pool_reserves.PoolReserves.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllPoolReservesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves.push(_pool_reserves.PoolReserves.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      poolReserves: Array.isArray(object === null || object === void 0 ? void 0 : object.poolReserves) ? object.poolReserves.map(function (e) {
        return _pool_reserves.PoolReserves.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$poolReserves;
    var message = createBaseQueryAllPoolReservesResponse();
    message.poolReserves = ((_object$poolReserves = object.poolReserves) === null || _object$poolReserves === void 0 ? void 0 : _object$poolReserves.map(function (e) {
      return _pool_reserves.PoolReserves.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllPoolReservesResponse = QueryAllPoolReservesResponse;
function createBaseQueryGetPoolReservesRequest() {
  return {
    pairID: "",
    tokenIn: "",
    tickIndex: _helpers.Long.ZERO,
    fee: _helpers.Long.UZERO
  };
}
var QueryGetPoolReservesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(24).int64(message.tickIndex);
    }
    if (!message.fee.isZero()) {
      writer.uint32(32).uint64(message.fee);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetPoolReservesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tickIndex = reader.int64();
          break;
        case 4:
          message.fee = reader.uint64();
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
      pairID: (0, _helpers.isSet)(object.pairID) ? String(object.pairID) : "",
      tokenIn: (0, _helpers.isSet)(object.tokenIn) ? String(object.tokenIn) : "",
      tickIndex: (0, _helpers.isSet)(object.tickIndex) ? _helpers.Long.fromValue(object.tickIndex) : _helpers.Long.ZERO,
      fee: (0, _helpers.isSet)(object.fee) ? _helpers.Long.fromValue(object.fee) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$pairID6, _object$tokenIn6;
    var message = createBaseQueryGetPoolReservesRequest();
    message.pairID = (_object$pairID6 = object.pairID) !== null && _object$pairID6 !== void 0 ? _object$pairID6 : "";
    message.tokenIn = (_object$tokenIn6 = object.tokenIn) !== null && _object$tokenIn6 !== void 0 ? _object$tokenIn6 : "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? _helpers.Long.fromValue(object.tickIndex) : _helpers.Long.ZERO;
    message.fee = object.fee !== undefined && object.fee !== null ? _helpers.Long.fromValue(object.fee) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryGetPoolReservesRequest = QueryGetPoolReservesRequest;
function createBaseQueryGetPoolReservesResponse() {
  return {
    poolReserves: undefined
  };
}
var QueryGetPoolReservesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.poolReserves !== undefined) {
      _pool_reserves.PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetPoolReservesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves = _pool_reserves.PoolReserves.decode(reader, reader.uint32());
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
      poolReserves: (0, _helpers.isSet)(object.poolReserves) ? _pool_reserves.PoolReserves.fromJSON(object.poolReserves) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetPoolReservesResponse();
    message.poolReserves = object.poolReserves !== undefined && object.poolReserves !== null ? _pool_reserves.PoolReserves.fromPartial(object.poolReserves) : undefined;
    return message;
  }
};
exports.QueryGetPoolReservesResponse = QueryGetPoolReservesResponse;
function createBaseQueryEstimateMultiHopSwapRequest() {
  return {
    creator: "",
    receiver: "",
    routes: [],
    amountIn: "",
    exitLimitPrice: "",
    pickBestRoute: false
  };
}
var QueryEstimateMultiHopSwapRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    var _iterator8 = _createForOfIteratorHelper(message.routes),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        _tx.MultiHopRoute.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
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
    var message = createBaseQueryEstimateMultiHopSwapRequest();
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
          message.routes.push(_tx.MultiHopRoute.decode(reader, reader.uint32()));
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
        return _tx.MultiHopRoute.fromJSON(e);
      }) : [],
      amountIn: (0, _helpers.isSet)(object.amountIn) ? String(object.amountIn) : "",
      exitLimitPrice: (0, _helpers.isSet)(object.exitLimitPrice) ? String(object.exitLimitPrice) : "",
      pickBestRoute: (0, _helpers.isSet)(object.pickBestRoute) ? Boolean(object.pickBestRoute) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$creator, _object$receiver, _object$routes, _object$amountIn, _object$exitLimitPric, _object$pickBestRoute;
    var message = createBaseQueryEstimateMultiHopSwapRequest();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.receiver = (_object$receiver = object.receiver) !== null && _object$receiver !== void 0 ? _object$receiver : "";
    message.routes = ((_object$routes = object.routes) === null || _object$routes === void 0 ? void 0 : _object$routes.map(function (e) {
      return _tx.MultiHopRoute.fromPartial(e);
    })) || [];
    message.amountIn = (_object$amountIn = object.amountIn) !== null && _object$amountIn !== void 0 ? _object$amountIn : "";
    message.exitLimitPrice = (_object$exitLimitPric = object.exitLimitPrice) !== null && _object$exitLimitPric !== void 0 ? _object$exitLimitPric : "";
    message.pickBestRoute = (_object$pickBestRoute = object.pickBestRoute) !== null && _object$pickBestRoute !== void 0 ? _object$pickBestRoute : false;
    return message;
  }
};
exports.QueryEstimateMultiHopSwapRequest = QueryEstimateMultiHopSwapRequest;
function createBaseQueryEstimateMultiHopSwapResponse() {
  return {
    coinOut: _coin.Coin.fromPartial({})
  };
}
var QueryEstimateMultiHopSwapResponse = {
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
    var message = createBaseQueryEstimateMultiHopSwapResponse();
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
    var message = createBaseQueryEstimateMultiHopSwapResponse();
    message.coinOut = object.coinOut !== undefined && object.coinOut !== null ? _coin.Coin.fromPartial(object.coinOut) : undefined;
    return message;
  }
};
exports.QueryEstimateMultiHopSwapResponse = QueryEstimateMultiHopSwapResponse;
function createBaseQueryEstimatePlaceLimitOrderRequest() {
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
var QueryEstimatePlaceLimitOrderRequest = {
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
      writer.uint32(50).string(message.amountIn);
    }
    if (message.orderType !== 0) {
      writer.uint32(56).int32(message.orderType);
    }
    if (message.expirationTime !== undefined) {
      _timestamp.Timestamp.encode(message.expirationTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.maxAmountOut !== undefined) {
      writer.uint32(74).string(message.maxAmountOut);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryEstimatePlaceLimitOrderRequest();
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
        case 6:
          message.amountIn = reader.string();
          break;
        case 7:
          message.orderType = reader.int32();
          break;
        case 8:
          message.expirationTime = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
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
      orderType: (0, _helpers.isSet)(object.orderType) ? (0, _tx.limitOrderTypeFromJSON)(object.orderType) : -1,
      expirationTime: (0, _helpers.isSet)(object.expirationTime) ? (0, _helpers.fromJsonTimestamp)(object.expirationTime) : undefined,
      maxAmountOut: (0, _helpers.isSet)(object.maxAmountOut) ? String(object.maxAmountOut) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2, _object$receiver2, _object$tokenIn7, _object$tokenOut, _object$amountIn2, _object$orderType, _object$maxAmountOut;
    var message = createBaseQueryEstimatePlaceLimitOrderRequest();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.receiver = (_object$receiver2 = object.receiver) !== null && _object$receiver2 !== void 0 ? _object$receiver2 : "";
    message.tokenIn = (_object$tokenIn7 = object.tokenIn) !== null && _object$tokenIn7 !== void 0 ? _object$tokenIn7 : "";
    message.tokenOut = (_object$tokenOut = object.tokenOut) !== null && _object$tokenOut !== void 0 ? _object$tokenOut : "";
    message.tickIndexInToOut = object.tickIndexInToOut !== undefined && object.tickIndexInToOut !== null ? _helpers.Long.fromValue(object.tickIndexInToOut) : _helpers.Long.ZERO;
    message.amountIn = (_object$amountIn2 = object.amountIn) !== null && _object$amountIn2 !== void 0 ? _object$amountIn2 : "";
    message.orderType = (_object$orderType = object.orderType) !== null && _object$orderType !== void 0 ? _object$orderType : 0;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? _timestamp.Timestamp.fromPartial(object.expirationTime) : undefined;
    message.maxAmountOut = (_object$maxAmountOut = object.maxAmountOut) !== null && _object$maxAmountOut !== void 0 ? _object$maxAmountOut : undefined;
    return message;
  }
};
exports.QueryEstimatePlaceLimitOrderRequest = QueryEstimatePlaceLimitOrderRequest;
function createBaseQueryEstimatePlaceLimitOrderResponse() {
  return {
    totalInCoin: _coin.Coin.fromPartial({}),
    swapInCoin: _coin.Coin.fromPartial({}),
    swapOutCoin: _coin.Coin.fromPartial({})
  };
}
var QueryEstimatePlaceLimitOrderResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.totalInCoin !== undefined) {
      _coin.Coin.encode(message.totalInCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapInCoin !== undefined) {
      _coin.Coin.encode(message.swapInCoin, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapOutCoin !== undefined) {
      _coin.Coin.encode(message.swapOutCoin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryEstimatePlaceLimitOrderResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalInCoin = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.swapInCoin = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.swapOutCoin = _coin.Coin.decode(reader, reader.uint32());
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
      totalInCoin: (0, _helpers.isSet)(object.totalInCoin) ? _coin.Coin.fromJSON(object.totalInCoin) : undefined,
      swapInCoin: (0, _helpers.isSet)(object.swapInCoin) ? _coin.Coin.fromJSON(object.swapInCoin) : undefined,
      swapOutCoin: (0, _helpers.isSet)(object.swapOutCoin) ? _coin.Coin.fromJSON(object.swapOutCoin) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryEstimatePlaceLimitOrderResponse();
    message.totalInCoin = object.totalInCoin !== undefined && object.totalInCoin !== null ? _coin.Coin.fromPartial(object.totalInCoin) : undefined;
    message.swapInCoin = object.swapInCoin !== undefined && object.swapInCoin !== null ? _coin.Coin.fromPartial(object.swapInCoin) : undefined;
    message.swapOutCoin = object.swapOutCoin !== undefined && object.swapOutCoin !== null ? _coin.Coin.fromPartial(object.swapOutCoin) : undefined;
    return message;
  }
};
exports.QueryEstimatePlaceLimitOrderResponse = QueryEstimatePlaceLimitOrderResponse;
function createBaseQueryPoolRequest() {
  return {
    pairID: "",
    tickIndex: _helpers.Long.ZERO,
    fee: _helpers.Long.UZERO
  };
}
var QueryPoolRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pairID !== "") {
      writer.uint32(10).string(message.pairID);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (!message.fee.isZero()) {
      writer.uint32(24).uint64(message.fee);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        case 3:
          message.fee = reader.uint64();
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
      pairID: (0, _helpers.isSet)(object.pairID) ? String(object.pairID) : "",
      tickIndex: (0, _helpers.isSet)(object.tickIndex) ? _helpers.Long.fromValue(object.tickIndex) : _helpers.Long.ZERO,
      fee: (0, _helpers.isSet)(object.fee) ? _helpers.Long.fromValue(object.fee) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$pairID7;
    var message = createBaseQueryPoolRequest();
    message.pairID = (_object$pairID7 = object.pairID) !== null && _object$pairID7 !== void 0 ? _object$pairID7 : "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? _helpers.Long.fromValue(object.tickIndex) : _helpers.Long.ZERO;
    message.fee = object.fee !== undefined && object.fee !== null ? _helpers.Long.fromValue(object.fee) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryPoolRequest = QueryPoolRequest;
function createBaseQueryPoolByIDRequest() {
  return {
    poolID: _helpers.Long.UZERO
  };
}
var QueryPoolByIDRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.poolID.isZero()) {
      writer.uint32(8).uint64(message.poolID);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolByIDRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolID = reader.uint64();
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
      poolID: (0, _helpers.isSet)(object.poolID) ? _helpers.Long.fromValue(object.poolID) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryPoolByIDRequest();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? _helpers.Long.fromValue(object.poolID) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryPoolByIDRequest = QueryPoolByIDRequest;
function createBaseQueryPoolResponse() {
  return {
    pool: undefined
  };
}
var QueryPoolResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pool !== undefined) {
      _pool.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = _pool.Pool.decode(reader, reader.uint32());
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
      pool: (0, _helpers.isSet)(object.pool) ? _pool.Pool.fromJSON(object.pool) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? _pool.Pool.fromPartial(object.pool) : undefined;
    return message;
  }
};
exports.QueryPoolResponse = QueryPoolResponse;
function createBaseQueryGetPoolMetadataRequest() {
  return {
    id: _helpers.Long.UZERO
  };
}
var QueryGetPoolMetadataRequest = {
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
    var message = createBaseQueryGetPoolMetadataRequest();
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
    var message = createBaseQueryGetPoolMetadataRequest();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryGetPoolMetadataRequest = QueryGetPoolMetadataRequest;
function createBaseQueryGetPoolMetadataResponse() {
  return {
    PoolMetadata: _pool_metadata.PoolMetadata.fromPartial({})
  };
}
var QueryGetPoolMetadataResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.PoolMetadata !== undefined) {
      _pool_metadata.PoolMetadata.encode(message.PoolMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetPoolMetadataResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PoolMetadata = _pool_metadata.PoolMetadata.decode(reader, reader.uint32());
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
      PoolMetadata: (0, _helpers.isSet)(object.PoolMetadata) ? _pool_metadata.PoolMetadata.fromJSON(object.PoolMetadata) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetPoolMetadataResponse();
    message.PoolMetadata = object.PoolMetadata !== undefined && object.PoolMetadata !== null ? _pool_metadata.PoolMetadata.fromPartial(object.PoolMetadata) : undefined;
    return message;
  }
};
exports.QueryGetPoolMetadataResponse = QueryGetPoolMetadataResponse;
function createBaseQueryAllPoolMetadataRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryAllPoolMetadataRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllPoolMetadataRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryAllPoolMetadataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllPoolMetadataRequest = QueryAllPoolMetadataRequest;
function createBaseQueryAllPoolMetadataResponse() {
  return {
    PoolMetadata: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryAllPoolMetadataResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator9 = _createForOfIteratorHelper(message.PoolMetadata),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        _pool_metadata.PoolMetadata.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllPoolMetadataResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PoolMetadata.push(_pool_metadata.PoolMetadata.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      PoolMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.PoolMetadata) ? object.PoolMetadata.map(function (e) {
        return _pool_metadata.PoolMetadata.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$PoolMetadata;
    var message = createBaseQueryAllPoolMetadataResponse();
    message.PoolMetadata = ((_object$PoolMetadata = object.PoolMetadata) === null || _object$PoolMetadata === void 0 ? void 0 : _object$PoolMetadata.map(function (e) {
      return _pool_metadata.PoolMetadata.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllPoolMetadataResponse = QueryAllPoolMetadataResponse;