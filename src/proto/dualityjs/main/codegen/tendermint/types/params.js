"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionParams = exports.ValidatorParams = exports.HashedParams = exports.EvidenceParams = exports.ConsensusParams = exports.BlockParams = void 0;
var _duration = require("../../google/protobuf/duration");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */

/** BlockParams contains limits on the block size. */

/** EvidenceParams determine how we handle evidence of malfeasance. */

/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */

/** VersionParams contains the ABCI application version. */

/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */

function createBaseConsensusParams() {
  return {
    block: BlockParams.fromPartial({}),
    evidence: EvidenceParams.fromPartial({}),
    validator: ValidatorParams.fromPartial({}),
    version: VersionParams.fromPartial({})
  };
}
var ConsensusParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConsensusParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
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
      block: (0, _helpers.isSet)(object.block) ? BlockParams.fromJSON(object.block) : undefined,
      evidence: (0, _helpers.isSet)(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
      validator: (0, _helpers.isSet)(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
      version: (0, _helpers.isSet)(object.version) ? VersionParams.fromJSON(object.version) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
    return message;
  }
};
exports.ConsensusParams = ConsensusParams;
function createBaseBlockParams() {
  return {
    max_bytes: _helpers.Long.ZERO,
    max_gas: _helpers.Long.ZERO
  };
}
var BlockParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.max_bytes.isZero()) {
      writer.uint32(8).int64(message.max_bytes);
    }
    if (!message.max_gas.isZero()) {
      writer.uint32(16).int64(message.max_gas);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_bytes = reader.int64();
          break;
        case 2:
          message.max_gas = reader.int64();
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
      max_bytes: (0, _helpers.isSet)(object.max_bytes) ? _helpers.Long.fromValue(object.max_bytes) : _helpers.Long.ZERO,
      max_gas: (0, _helpers.isSet)(object.max_gas) ? _helpers.Long.fromValue(object.max_gas) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockParams();
    message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? _helpers.Long.fromValue(object.max_bytes) : _helpers.Long.ZERO;
    message.max_gas = object.max_gas !== undefined && object.max_gas !== null ? _helpers.Long.fromValue(object.max_gas) : _helpers.Long.ZERO;
    return message;
  }
};
exports.BlockParams = BlockParams;
function createBaseEvidenceParams() {
  return {
    max_age_num_blocks: _helpers.Long.ZERO,
    max_age_duration: _duration.Duration.fromPartial({}),
    max_bytes: _helpers.Long.ZERO
  };
}
var EvidenceParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.max_age_num_blocks.isZero()) {
      writer.uint32(8).int64(message.max_age_num_blocks);
    }
    if (message.max_age_duration !== undefined) {
      _duration.Duration.encode(message.max_age_duration, writer.uint32(18).fork()).ldelim();
    }
    if (!message.max_bytes.isZero()) {
      writer.uint32(24).int64(message.max_bytes);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEvidenceParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_age_num_blocks = reader.int64();
          break;
        case 2:
          message.max_age_duration = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.max_bytes = reader.int64();
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
      max_age_num_blocks: (0, _helpers.isSet)(object.max_age_num_blocks) ? _helpers.Long.fromValue(object.max_age_num_blocks) : _helpers.Long.ZERO,
      max_age_duration: (0, _helpers.isSet)(object.max_age_duration) ? _duration.Duration.fromJSON(object.max_age_duration) : undefined,
      max_bytes: (0, _helpers.isSet)(object.max_bytes) ? _helpers.Long.fromValue(object.max_bytes) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEvidenceParams();
    message.max_age_num_blocks = object.max_age_num_blocks !== undefined && object.max_age_num_blocks !== null ? _helpers.Long.fromValue(object.max_age_num_blocks) : _helpers.Long.ZERO;
    message.max_age_duration = object.max_age_duration !== undefined && object.max_age_duration !== null ? _duration.Duration.fromPartial(object.max_age_duration) : undefined;
    message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? _helpers.Long.fromValue(object.max_bytes) : _helpers.Long.ZERO;
    return message;
  }
};
exports.EvidenceParams = EvidenceParams;
function createBaseValidatorParams() {
  return {
    pub_key_types: []
  };
}
var ValidatorParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.pub_key_types),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key_types.push(reader.string());
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
      pub_key_types: Array.isArray(object === null || object === void 0 ? void 0 : object.pub_key_types) ? object.pub_key_types.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$pub_key_types;
    var message = createBaseValidatorParams();
    message.pub_key_types = ((_object$pub_key_types = object.pub_key_types) === null || _object$pub_key_types === void 0 ? void 0 : _object$pub_key_types.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ValidatorParams = ValidatorParams;
function createBaseVersionParams() {
  return {
    app: _helpers.Long.UZERO
  };
}
var VersionParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.app.isZero()) {
      writer.uint32(8).uint64(message.app);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVersionParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.app = reader.uint64();
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
      app: (0, _helpers.isSet)(object.app) ? _helpers.Long.fromValue(object.app) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseVersionParams();
    message.app = object.app !== undefined && object.app !== null ? _helpers.Long.fromValue(object.app) : _helpers.Long.UZERO;
    return message;
  }
};
exports.VersionParams = VersionParams;
function createBaseHashedParams() {
  return {
    block_max_bytes: _helpers.Long.ZERO,
    block_max_gas: _helpers.Long.ZERO
  };
}
var HashedParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.block_max_bytes.isZero()) {
      writer.uint32(8).int64(message.block_max_bytes);
    }
    if (!message.block_max_gas.isZero()) {
      writer.uint32(16).int64(message.block_max_gas);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHashedParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_max_bytes = reader.int64();
          break;
        case 2:
          message.block_max_gas = reader.int64();
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
      block_max_bytes: (0, _helpers.isSet)(object.block_max_bytes) ? _helpers.Long.fromValue(object.block_max_bytes) : _helpers.Long.ZERO,
      block_max_gas: (0, _helpers.isSet)(object.block_max_gas) ? _helpers.Long.fromValue(object.block_max_gas) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseHashedParams();
    message.block_max_bytes = object.block_max_bytes !== undefined && object.block_max_bytes !== null ? _helpers.Long.fromValue(object.block_max_bytes) : _helpers.Long.ZERO;
    message.block_max_gas = object.block_max_gas !== undefined && object.block_max_gas !== null ? _helpers.Long.fromValue(object.block_max_gas) : _helpers.Long.ZERO;
    return message;
  }
};
exports.HashedParams = HashedParams;