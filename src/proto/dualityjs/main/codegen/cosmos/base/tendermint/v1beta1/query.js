"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionInfo = exports.Validator = exports.ProofOps = exports.ProofOp = exports.Module = exports.GetValidatorSetByHeightResponse = exports.GetValidatorSetByHeightRequest = exports.GetSyncingResponse = exports.GetSyncingRequest = exports.GetNodeInfoResponse = exports.GetNodeInfoRequest = exports.GetLatestValidatorSetResponse = exports.GetLatestValidatorSetRequest = exports.GetLatestBlockResponse = exports.GetLatestBlockRequest = exports.GetBlockByHeightResponse = exports.GetBlockByHeightRequest = exports.ABCIQueryResponse = exports.ABCIQueryRequest = void 0;
var _pagination = require("../../query/v1beta1/pagination");
var _any = require("../../../../google/protobuf/any");
var _types = require("../../../../tendermint/types/types");
var _block = require("../../../../tendermint/types/block");
var _types2 = require("./types");
var _types3 = require("../../../../tendermint/p2p/types");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */

/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */

/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */

/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */

/** Validator is the type for the validator-set. */

/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */

/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */

/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */

/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */

/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */

/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */

/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */

/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */

/** VersionInfo is the type for the GetNodeInfoResponse message. */

/** Module is the type for VersionInfo */

/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */

/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 * 
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */

/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 * 
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 */

/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 * 
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 */

function createBaseGetValidatorSetByHeightRequest() {
  return {
    height: _helpers.Long.ZERO,
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var GetValidatorSetByHeightRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetValidatorSetByHeightRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetValidatorSetByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetValidatorSetByHeightRequest = GetValidatorSetByHeightRequest;
function createBaseGetValidatorSetByHeightResponse() {
  return {
    block_height: _helpers.Long.ZERO,
    validators: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var GetValidatorSetByHeightResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.block_height.isZero()) {
      writer.uint32(8).int64(message.block_height);
    }
    var _iterator = _createForOfIteratorHelper(message.validators),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Validator.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetValidatorSetByHeightResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_height = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
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
      block_height: (0, _helpers.isSet)(object.block_height) ? _helpers.Long.fromValue(object.block_height) : _helpers.Long.ZERO,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return Validator.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validators;
    var message = createBaseGetValidatorSetByHeightResponse();
    message.block_height = object.block_height !== undefined && object.block_height !== null ? _helpers.Long.fromValue(object.block_height) : _helpers.Long.ZERO;
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(function (e) {
      return Validator.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetValidatorSetByHeightResponse = GetValidatorSetByHeightResponse;
function createBaseGetLatestValidatorSetRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var GetLatestValidatorSetRequest = {
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
    var message = createBaseGetLatestValidatorSetRequest();
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
    var message = createBaseGetLatestValidatorSetRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetLatestValidatorSetRequest = GetLatestValidatorSetRequest;
function createBaseGetLatestValidatorSetResponse() {
  return {
    block_height: _helpers.Long.ZERO,
    validators: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var GetLatestValidatorSetResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.block_height.isZero()) {
      writer.uint32(8).int64(message.block_height);
    }
    var _iterator2 = _createForOfIteratorHelper(message.validators),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        Validator.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestValidatorSetResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_height = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
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
      block_height: (0, _helpers.isSet)(object.block_height) ? _helpers.Long.fromValue(object.block_height) : _helpers.Long.ZERO,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return Validator.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validators2;
    var message = createBaseGetLatestValidatorSetResponse();
    message.block_height = object.block_height !== undefined && object.block_height !== null ? _helpers.Long.fromValue(object.block_height) : _helpers.Long.ZERO;
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map(function (e) {
      return Validator.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetLatestValidatorSetResponse = GetLatestValidatorSetResponse;
function createBaseValidator() {
  return {
    address: "",
    pub_key: _any.Any.fromPartial({}),
    voting_power: _helpers.Long.ZERO,
    proposer_priority: _helpers.Long.ZERO
  };
}
var Validator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pub_key !== undefined) {
      _any.Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
    }
    if (!message.voting_power.isZero()) {
      writer.uint32(24).int64(message.voting_power);
    }
    if (!message.proposer_priority.isZero()) {
      writer.uint32(32).int64(message.proposer_priority);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pub_key = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.voting_power = reader.int64();
          break;
        case 4:
          message.proposer_priority = reader.int64();
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
      pub_key: (0, _helpers.isSet)(object.pub_key) ? _any.Any.fromJSON(object.pub_key) : undefined,
      voting_power: (0, _helpers.isSet)(object.voting_power) ? _helpers.Long.fromValue(object.voting_power) : _helpers.Long.ZERO,
      proposer_priority: (0, _helpers.isSet)(object.proposer_priority) ? _helpers.Long.fromValue(object.proposer_priority) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? _any.Any.fromPartial(object.pub_key) : undefined;
    message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? _helpers.Long.fromValue(object.voting_power) : _helpers.Long.ZERO;
    message.proposer_priority = object.proposer_priority !== undefined && object.proposer_priority !== null ? _helpers.Long.fromValue(object.proposer_priority) : _helpers.Long.ZERO;
    return message;
  }
};
exports.Validator = Validator;
function createBaseGetBlockByHeightRequest() {
  return {
    height: _helpers.Long.ZERO
  };
}
var GetBlockByHeightRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetBlockByHeightRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetBlockByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.GetBlockByHeightRequest = GetBlockByHeightRequest;
function createBaseGetBlockByHeightResponse() {
  return {
    block_id: _types.BlockID.fromPartial({}),
    block: _block.Block.fromPartial({}),
    sdk_block: _types2.Block.fromPartial({})
  };
}
var GetBlockByHeightResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.block_id !== undefined) {
      _types.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      _block.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdk_block !== undefined) {
      _types2.Block.encode(message.sdk_block, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_id = _types.BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = _block.Block.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdk_block = _types2.Block.decode(reader, reader.uint32());
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
      block_id: (0, _helpers.isSet)(object.block_id) ? _types.BlockID.fromJSON(object.block_id) : undefined,
      block: (0, _helpers.isSet)(object.block) ? _block.Block.fromJSON(object.block) : undefined,
      sdk_block: (0, _helpers.isSet)(object.sdk_block) ? _types2.Block.fromJSON(object.sdk_block) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetBlockByHeightResponse();
    message.block_id = object.block_id !== undefined && object.block_id !== null ? _types.BlockID.fromPartial(object.block_id) : undefined;
    message.block = object.block !== undefined && object.block !== null ? _block.Block.fromPartial(object.block) : undefined;
    message.sdk_block = object.sdk_block !== undefined && object.sdk_block !== null ? _types2.Block.fromPartial(object.sdk_block) : undefined;
    return message;
  }
};
exports.GetBlockByHeightResponse = GetBlockByHeightResponse;
function createBaseGetLatestBlockRequest() {
  return {};
}
var GetLatestBlockRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestBlockRequest();
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
    var message = createBaseGetLatestBlockRequest();
    return message;
  }
};
exports.GetLatestBlockRequest = GetLatestBlockRequest;
function createBaseGetLatestBlockResponse() {
  return {
    block_id: _types.BlockID.fromPartial({}),
    block: _block.Block.fromPartial({}),
    sdk_block: _types2.Block.fromPartial({})
  };
}
var GetLatestBlockResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.block_id !== undefined) {
      _types.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      _block.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdk_block !== undefined) {
      _types2.Block.encode(message.sdk_block, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_id = _types.BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = _block.Block.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdk_block = _types2.Block.decode(reader, reader.uint32());
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
      block_id: (0, _helpers.isSet)(object.block_id) ? _types.BlockID.fromJSON(object.block_id) : undefined,
      block: (0, _helpers.isSet)(object.block) ? _block.Block.fromJSON(object.block) : undefined,
      sdk_block: (0, _helpers.isSet)(object.sdk_block) ? _types2.Block.fromJSON(object.sdk_block) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetLatestBlockResponse();
    message.block_id = object.block_id !== undefined && object.block_id !== null ? _types.BlockID.fromPartial(object.block_id) : undefined;
    message.block = object.block !== undefined && object.block !== null ? _block.Block.fromPartial(object.block) : undefined;
    message.sdk_block = object.sdk_block !== undefined && object.sdk_block !== null ? _types2.Block.fromPartial(object.sdk_block) : undefined;
    return message;
  }
};
exports.GetLatestBlockResponse = GetLatestBlockResponse;
function createBaseGetSyncingRequest() {
  return {};
}
var GetSyncingRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetSyncingRequest();
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
    var message = createBaseGetSyncingRequest();
    return message;
  }
};
exports.GetSyncingRequest = GetSyncingRequest;
function createBaseGetSyncingResponse() {
  return {
    syncing: false
  };
}
var GetSyncingResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetSyncingResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
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
      syncing: (0, _helpers.isSet)(object.syncing) ? Boolean(object.syncing) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$syncing;
    var message = createBaseGetSyncingResponse();
    message.syncing = (_object$syncing = object.syncing) !== null && _object$syncing !== void 0 ? _object$syncing : false;
    return message;
  }
};
exports.GetSyncingResponse = GetSyncingResponse;
function createBaseGetNodeInfoRequest() {
  return {};
}
var GetNodeInfoRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetNodeInfoRequest();
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
    var message = createBaseGetNodeInfoRequest();
    return message;
  }
};
exports.GetNodeInfoRequest = GetNodeInfoRequest;
function createBaseGetNodeInfoResponse() {
  return {
    default_node_info: _types3.DefaultNodeInfo.fromPartial({}),
    application_version: VersionInfo.fromPartial({})
  };
}
var GetNodeInfoResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.default_node_info !== undefined) {
      _types3.DefaultNodeInfo.encode(message.default_node_info, writer.uint32(10).fork()).ldelim();
    }
    if (message.application_version !== undefined) {
      VersionInfo.encode(message.application_version, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.default_node_info = _types3.DefaultNodeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.application_version = VersionInfo.decode(reader, reader.uint32());
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
      default_node_info: (0, _helpers.isSet)(object.default_node_info) ? _types3.DefaultNodeInfo.fromJSON(object.default_node_info) : undefined,
      application_version: (0, _helpers.isSet)(object.application_version) ? VersionInfo.fromJSON(object.application_version) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetNodeInfoResponse();
    message.default_node_info = object.default_node_info !== undefined && object.default_node_info !== null ? _types3.DefaultNodeInfo.fromPartial(object.default_node_info) : undefined;
    message.application_version = object.application_version !== undefined && object.application_version !== null ? VersionInfo.fromPartial(object.application_version) : undefined;
    return message;
  }
};
exports.GetNodeInfoResponse = GetNodeInfoResponse;
function createBaseVersionInfo() {
  return {
    name: "",
    app_name: "",
    version: "",
    git_commit: "",
    build_tags: "",
    go_version: "",
    build_deps: [],
    cosmos_sdk_version: ""
  };
}
var VersionInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.app_name !== "") {
      writer.uint32(18).string(message.app_name);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.git_commit !== "") {
      writer.uint32(34).string(message.git_commit);
    }
    if (message.build_tags !== "") {
      writer.uint32(42).string(message.build_tags);
    }
    if (message.go_version !== "") {
      writer.uint32(50).string(message.go_version);
    }
    var _iterator3 = _createForOfIteratorHelper(message.build_deps),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        Module.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.cosmos_sdk_version !== "") {
      writer.uint32(66).string(message.cosmos_sdk_version);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVersionInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.app_name = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.git_commit = reader.string();
          break;
        case 5:
          message.build_tags = reader.string();
          break;
        case 6:
          message.go_version = reader.string();
          break;
        case 7:
          message.build_deps.push(Module.decode(reader, reader.uint32()));
          break;
        case 8:
          message.cosmos_sdk_version = reader.string();
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
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      app_name: (0, _helpers.isSet)(object.app_name) ? String(object.app_name) : "",
      version: (0, _helpers.isSet)(object.version) ? String(object.version) : "",
      git_commit: (0, _helpers.isSet)(object.git_commit) ? String(object.git_commit) : "",
      build_tags: (0, _helpers.isSet)(object.build_tags) ? String(object.build_tags) : "",
      go_version: (0, _helpers.isSet)(object.go_version) ? String(object.go_version) : "",
      build_deps: Array.isArray(object === null || object === void 0 ? void 0 : object.build_deps) ? object.build_deps.map(function (e) {
        return Module.fromJSON(e);
      }) : [],
      cosmos_sdk_version: (0, _helpers.isSet)(object.cosmos_sdk_version) ? String(object.cosmos_sdk_version) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$app_name, _object$version, _object$git_commit, _object$build_tags, _object$go_version, _object$build_deps, _object$cosmos_sdk_ve;
    var message = createBaseVersionInfo();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.app_name = (_object$app_name = object.app_name) !== null && _object$app_name !== void 0 ? _object$app_name : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.git_commit = (_object$git_commit = object.git_commit) !== null && _object$git_commit !== void 0 ? _object$git_commit : "";
    message.build_tags = (_object$build_tags = object.build_tags) !== null && _object$build_tags !== void 0 ? _object$build_tags : "";
    message.go_version = (_object$go_version = object.go_version) !== null && _object$go_version !== void 0 ? _object$go_version : "";
    message.build_deps = ((_object$build_deps = object.build_deps) === null || _object$build_deps === void 0 ? void 0 : _object$build_deps.map(function (e) {
      return Module.fromPartial(e);
    })) || [];
    message.cosmos_sdk_version = (_object$cosmos_sdk_ve = object.cosmos_sdk_version) !== null && _object$cosmos_sdk_ve !== void 0 ? _object$cosmos_sdk_ve : "";
    return message;
  }
};
exports.VersionInfo = VersionInfo;
function createBaseModule() {
  return {
    path: "",
    version: "",
    sum: ""
  };
}
var Module = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModule();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
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
      path: (0, _helpers.isSet)(object.path) ? String(object.path) : "",
      version: (0, _helpers.isSet)(object.version) ? String(object.version) : "",
      sum: (0, _helpers.isSet)(object.sum) ? String(object.sum) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$path, _object$version2, _object$sum;
    var message = createBaseModule();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.sum = (_object$sum = object.sum) !== null && _object$sum !== void 0 ? _object$sum : "";
    return message;
  }
};
exports.Module = Module;
function createBaseABCIQueryRequest() {
  return {
    data: new Uint8Array(),
    path: "",
    height: _helpers.Long.ZERO,
    prove: false
  };
}
var ABCIQueryRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseABCIQueryRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
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
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array(),
      path: (0, _helpers.isSet)(object.path) ? String(object.path) : "",
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      prove: (0, _helpers.isSet)(object.prove) ? Boolean(object.prove) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$data, _object$path2, _object$prove;
    var message = createBaseABCIQueryRequest();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.path = (_object$path2 = object.path) !== null && _object$path2 !== void 0 ? _object$path2 : "";
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.prove = (_object$prove = object.prove) !== null && _object$prove !== void 0 ? _object$prove : false;
    return message;
  }
};
exports.ABCIQueryRequest = ABCIQueryRequest;
function createBaseABCIQueryResponse() {
  return {
    code: 0,
    log: "",
    info: "",
    index: _helpers.Long.ZERO,
    key: new Uint8Array(),
    value: new Uint8Array(),
    proof_ops: ProofOps.fromPartial({}),
    height: _helpers.Long.ZERO,
    codespace: ""
  };
}
var ABCIQueryResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proof_ops !== undefined) {
      ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseABCIQueryResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proof_ops = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
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
      code: (0, _helpers.isSet)(object.code) ? Number(object.code) : 0,
      log: (0, _helpers.isSet)(object.log) ? String(object.log) : "",
      info: (0, _helpers.isSet)(object.info) ? String(object.info) : "",
      index: (0, _helpers.isSet)(object.index) ? _helpers.Long.fromValue(object.index) : _helpers.Long.ZERO,
      key: (0, _helpers.isSet)(object.key) ? (0, _helpers.bytesFromBase64)(object.key) : new Uint8Array(),
      value: (0, _helpers.isSet)(object.value) ? (0, _helpers.bytesFromBase64)(object.value) : new Uint8Array(),
      proof_ops: (0, _helpers.isSet)(object.proof_ops) ? ProofOps.fromJSON(object.proof_ops) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      codespace: (0, _helpers.isSet)(object.codespace) ? String(object.codespace) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$code, _object$log, _object$info, _object$key, _object$value, _object$codespace;
    var message = createBaseABCIQueryResponse();
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    message.index = object.index !== undefined && object.index !== null ? _helpers.Long.fromValue(object.index) : _helpers.Long.ZERO;
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? ProofOps.fromPartial(object.proof_ops) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    return message;
  }
};
exports.ABCIQueryResponse = ABCIQueryResponse;
function createBaseProofOp() {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
var ProofOp = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProofOp();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
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
      type: (0, _helpers.isSet)(object.type) ? String(object.type) : "",
      key: (0, _helpers.isSet)(object.key) ? (0, _helpers.bytesFromBase64)(object.key) : new Uint8Array(),
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$type, _object$key2, _object$data2;
    var message = createBaseProofOp();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    return message;
  }
};
exports.ProofOp = ProofOp;
function createBaseProofOps() {
  return {
    ops: []
  };
}
var ProofOps = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.ops),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseProofOps();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
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
      ops: Array.isArray(object === null || object === void 0 ? void 0 : object.ops) ? object.ops.map(function (e) {
        return ProofOp.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$ops;
    var message = createBaseProofOps();
    message.ops = ((_object$ops = object.ops) === null || _object$ops === void 0 ? void 0 : _object$ops.map(function (e) {
      return ProofOp.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ProofOps = ProofOps;