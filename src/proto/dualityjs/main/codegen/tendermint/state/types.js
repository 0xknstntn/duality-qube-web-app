"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Version = exports.ValidatorsInfo = exports.State = exports.ConsensusParamsInfo = exports.ABCIResponsesInfo = exports.ABCIResponses = void 0;
var _types = require("../abci/types");
var _validator = require("../types/validator");
var _params = require("../types/params");
var _types2 = require("../version/types");
var _types3 = require("../types/types");
var _timestamp = require("../../google/protobuf/timestamp");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */

/** ValidatorsInfo represents the latest validator set, or the last height it changed */

/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */

function createBaseABCIResponses() {
  return {
    deliver_txs: [],
    end_block: _types.ResponseEndBlock.fromPartial({}),
    begin_block: _types.ResponseBeginBlock.fromPartial({})
  };
}
var ABCIResponses = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.deliver_txs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _types.ResponseDeliverTx.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.end_block !== undefined) {
      _types.ResponseEndBlock.encode(message.end_block, writer.uint32(18).fork()).ldelim();
    }
    if (message.begin_block !== undefined) {
      _types.ResponseBeginBlock.encode(message.begin_block, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseABCIResponses();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deliver_txs.push(_types.ResponseDeliverTx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.end_block = _types.ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.begin_block = _types.ResponseBeginBlock.decode(reader, reader.uint32());
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
      deliver_txs: Array.isArray(object === null || object === void 0 ? void 0 : object.deliver_txs) ? object.deliver_txs.map(function (e) {
        return _types.ResponseDeliverTx.fromJSON(e);
      }) : [],
      end_block: (0, _helpers.isSet)(object.end_block) ? _types.ResponseEndBlock.fromJSON(object.end_block) : undefined,
      begin_block: (0, _helpers.isSet)(object.begin_block) ? _types.ResponseBeginBlock.fromJSON(object.begin_block) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$deliver_txs;
    var message = createBaseABCIResponses();
    message.deliver_txs = ((_object$deliver_txs = object.deliver_txs) === null || _object$deliver_txs === void 0 ? void 0 : _object$deliver_txs.map(function (e) {
      return _types.ResponseDeliverTx.fromPartial(e);
    })) || [];
    message.end_block = object.end_block !== undefined && object.end_block !== null ? _types.ResponseEndBlock.fromPartial(object.end_block) : undefined;
    message.begin_block = object.begin_block !== undefined && object.begin_block !== null ? _types.ResponseBeginBlock.fromPartial(object.begin_block) : undefined;
    return message;
  }
};
exports.ABCIResponses = ABCIResponses;
function createBaseValidatorsInfo() {
  return {
    validator_set: _validator.ValidatorSet.fromPartial({}),
    last_height_changed: _helpers.Long.ZERO
  };
}
var ValidatorsInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator_set !== undefined) {
      _validator.ValidatorSet.encode(message.validator_set, writer.uint32(10).fork()).ldelim();
    }
    if (!message.last_height_changed.isZero()) {
      writer.uint32(16).int64(message.last_height_changed);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorsInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_set = _validator.ValidatorSet.decode(reader, reader.uint32());
          break;
        case 2:
          message.last_height_changed = reader.int64();
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
      validator_set: (0, _helpers.isSet)(object.validator_set) ? _validator.ValidatorSet.fromJSON(object.validator_set) : undefined,
      last_height_changed: (0, _helpers.isSet)(object.last_height_changed) ? _helpers.Long.fromValue(object.last_height_changed) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseValidatorsInfo();
    message.validator_set = object.validator_set !== undefined && object.validator_set !== null ? _validator.ValidatorSet.fromPartial(object.validator_set) : undefined;
    message.last_height_changed = object.last_height_changed !== undefined && object.last_height_changed !== null ? _helpers.Long.fromValue(object.last_height_changed) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ValidatorsInfo = ValidatorsInfo;
function createBaseConsensusParamsInfo() {
  return {
    consensus_params: _params.ConsensusParams.fromPartial({}),
    last_height_changed: _helpers.Long.ZERO
  };
}
var ConsensusParamsInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.consensus_params !== undefined) {
      _params.ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.last_height_changed.isZero()) {
      writer.uint32(16).int64(message.last_height_changed);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConsensusParamsInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_params = _params.ConsensusParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.last_height_changed = reader.int64();
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
      consensus_params: (0, _helpers.isSet)(object.consensus_params) ? _params.ConsensusParams.fromJSON(object.consensus_params) : undefined,
      last_height_changed: (0, _helpers.isSet)(object.last_height_changed) ? _helpers.Long.fromValue(object.last_height_changed) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseConsensusParamsInfo();
    message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? _params.ConsensusParams.fromPartial(object.consensus_params) : undefined;
    message.last_height_changed = object.last_height_changed !== undefined && object.last_height_changed !== null ? _helpers.Long.fromValue(object.last_height_changed) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ConsensusParamsInfo = ConsensusParamsInfo;
function createBaseABCIResponsesInfo() {
  return {
    abci_responses: ABCIResponses.fromPartial({}),
    height: _helpers.Long.ZERO
  };
}
var ABCIResponsesInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.abci_responses !== undefined) {
      ABCIResponses.encode(message.abci_responses, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseABCIResponsesInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abci_responses = ABCIResponses.decode(reader, reader.uint32());
          break;
        case 2:
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
      abci_responses: (0, _helpers.isSet)(object.abci_responses) ? ABCIResponses.fromJSON(object.abci_responses) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseABCIResponsesInfo();
    message.abci_responses = object.abci_responses !== undefined && object.abci_responses !== null ? ABCIResponses.fromPartial(object.abci_responses) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ABCIResponsesInfo = ABCIResponsesInfo;
function createBaseVersion() {
  return {
    consensus: _types2.Consensus.fromPartial({}),
    software: ""
  };
}
var Version = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.consensus !== undefined) {
      _types2.Consensus.encode(message.consensus, writer.uint32(10).fork()).ldelim();
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVersion();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus = _types2.Consensus.decode(reader, reader.uint32());
          break;
        case 2:
          message.software = reader.string();
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
      consensus: (0, _helpers.isSet)(object.consensus) ? _types2.Consensus.fromJSON(object.consensus) : undefined,
      software: (0, _helpers.isSet)(object.software) ? String(object.software) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$software;
    var message = createBaseVersion();
    message.consensus = object.consensus !== undefined && object.consensus !== null ? _types2.Consensus.fromPartial(object.consensus) : undefined;
    message.software = (_object$software = object.software) !== null && _object$software !== void 0 ? _object$software : "";
    return message;
  }
};
exports.Version = Version;
function createBaseState() {
  return {
    version: Version.fromPartial({}),
    chain_id: "",
    initial_height: _helpers.Long.ZERO,
    last_block_height: _helpers.Long.ZERO,
    last_block_id: _types3.BlockID.fromPartial({}),
    last_block_time: _timestamp.Timestamp.fromPartial({}),
    next_validators: _validator.ValidatorSet.fromPartial({}),
    validators: _validator.ValidatorSet.fromPartial({}),
    last_validators: _validator.ValidatorSet.fromPartial({}),
    last_height_validators_changed: _helpers.Long.ZERO,
    consensus_params: _params.ConsensusParams.fromPartial({}),
    last_height_consensus_params_changed: _helpers.Long.ZERO,
    last_results_hash: new Uint8Array(),
    app_hash: new Uint8Array()
  };
}
var State = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    if (!message.initial_height.isZero()) {
      writer.uint32(112).int64(message.initial_height);
    }
    if (!message.last_block_height.isZero()) {
      writer.uint32(24).int64(message.last_block_height);
    }
    if (message.last_block_id !== undefined) {
      _types3.BlockID.encode(message.last_block_id, writer.uint32(34).fork()).ldelim();
    }
    if (message.last_block_time !== undefined) {
      _timestamp.Timestamp.encode(message.last_block_time, writer.uint32(42).fork()).ldelim();
    }
    if (message.next_validators !== undefined) {
      _validator.ValidatorSet.encode(message.next_validators, writer.uint32(50).fork()).ldelim();
    }
    if (message.validators !== undefined) {
      _validator.ValidatorSet.encode(message.validators, writer.uint32(58).fork()).ldelim();
    }
    if (message.last_validators !== undefined) {
      _validator.ValidatorSet.encode(message.last_validators, writer.uint32(66).fork()).ldelim();
    }
    if (!message.last_height_validators_changed.isZero()) {
      writer.uint32(72).int64(message.last_height_validators_changed);
    }
    if (message.consensus_params !== undefined) {
      _params.ConsensusParams.encode(message.consensus_params, writer.uint32(82).fork()).ldelim();
    }
    if (!message.last_height_consensus_params_changed.isZero()) {
      writer.uint32(88).int64(message.last_height_consensus_params_changed);
    }
    if (message.last_results_hash.length !== 0) {
      writer.uint32(98).bytes(message.last_results_hash);
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(106).bytes(message.app_hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 2:
          message.chain_id = reader.string();
          break;
        case 14:
          message.initial_height = reader.int64();
          break;
        case 3:
          message.last_block_height = reader.int64();
          break;
        case 4:
          message.last_block_id = _types3.BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.last_block_time = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.next_validators = _validator.ValidatorSet.decode(reader, reader.uint32());
          break;
        case 7:
          message.validators = _validator.ValidatorSet.decode(reader, reader.uint32());
          break;
        case 8:
          message.last_validators = _validator.ValidatorSet.decode(reader, reader.uint32());
          break;
        case 9:
          message.last_height_validators_changed = reader.int64();
          break;
        case 10:
          message.consensus_params = _params.ConsensusParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.last_height_consensus_params_changed = reader.int64();
          break;
        case 12:
          message.last_results_hash = reader.bytes();
          break;
        case 13:
          message.app_hash = reader.bytes();
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
      version: (0, _helpers.isSet)(object.version) ? Version.fromJSON(object.version) : undefined,
      chain_id: (0, _helpers.isSet)(object.chain_id) ? String(object.chain_id) : "",
      initial_height: (0, _helpers.isSet)(object.initial_height) ? _helpers.Long.fromValue(object.initial_height) : _helpers.Long.ZERO,
      last_block_height: (0, _helpers.isSet)(object.last_block_height) ? _helpers.Long.fromValue(object.last_block_height) : _helpers.Long.ZERO,
      last_block_id: (0, _helpers.isSet)(object.last_block_id) ? _types3.BlockID.fromJSON(object.last_block_id) : undefined,
      last_block_time: (0, _helpers.isSet)(object.last_block_time) ? (0, _helpers.fromJsonTimestamp)(object.last_block_time) : undefined,
      next_validators: (0, _helpers.isSet)(object.next_validators) ? _validator.ValidatorSet.fromJSON(object.next_validators) : undefined,
      validators: (0, _helpers.isSet)(object.validators) ? _validator.ValidatorSet.fromJSON(object.validators) : undefined,
      last_validators: (0, _helpers.isSet)(object.last_validators) ? _validator.ValidatorSet.fromJSON(object.last_validators) : undefined,
      last_height_validators_changed: (0, _helpers.isSet)(object.last_height_validators_changed) ? _helpers.Long.fromValue(object.last_height_validators_changed) : _helpers.Long.ZERO,
      consensus_params: (0, _helpers.isSet)(object.consensus_params) ? _params.ConsensusParams.fromJSON(object.consensus_params) : undefined,
      last_height_consensus_params_changed: (0, _helpers.isSet)(object.last_height_consensus_params_changed) ? _helpers.Long.fromValue(object.last_height_consensus_params_changed) : _helpers.Long.ZERO,
      last_results_hash: (0, _helpers.isSet)(object.last_results_hash) ? (0, _helpers.bytesFromBase64)(object.last_results_hash) : new Uint8Array(),
      app_hash: (0, _helpers.isSet)(object.app_hash) ? (0, _helpers.bytesFromBase64)(object.app_hash) : new Uint8Array()
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$chain_id, _object$last_results_, _object$app_hash;
    var message = createBaseState();
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.chain_id = (_object$chain_id = object.chain_id) !== null && _object$chain_id !== void 0 ? _object$chain_id : "";
    message.initial_height = object.initial_height !== undefined && object.initial_height !== null ? _helpers.Long.fromValue(object.initial_height) : _helpers.Long.ZERO;
    message.last_block_height = object.last_block_height !== undefined && object.last_block_height !== null ? _helpers.Long.fromValue(object.last_block_height) : _helpers.Long.ZERO;
    message.last_block_id = object.last_block_id !== undefined && object.last_block_id !== null ? _types3.BlockID.fromPartial(object.last_block_id) : undefined;
    message.last_block_time = object.last_block_time !== undefined && object.last_block_time !== null ? _timestamp.Timestamp.fromPartial(object.last_block_time) : undefined;
    message.next_validators = object.next_validators !== undefined && object.next_validators !== null ? _validator.ValidatorSet.fromPartial(object.next_validators) : undefined;
    message.validators = object.validators !== undefined && object.validators !== null ? _validator.ValidatorSet.fromPartial(object.validators) : undefined;
    message.last_validators = object.last_validators !== undefined && object.last_validators !== null ? _validator.ValidatorSet.fromPartial(object.last_validators) : undefined;
    message.last_height_validators_changed = object.last_height_validators_changed !== undefined && object.last_height_validators_changed !== null ? _helpers.Long.fromValue(object.last_height_validators_changed) : _helpers.Long.ZERO;
    message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? _params.ConsensusParams.fromPartial(object.consensus_params) : undefined;
    message.last_height_consensus_params_changed = object.last_height_consensus_params_changed !== undefined && object.last_height_consensus_params_changed !== null ? _helpers.Long.fromValue(object.last_height_consensus_params_changed) : _helpers.Long.ZERO;
    message.last_results_hash = (_object$last_results_ = object.last_results_hash) !== null && _object$last_results_ !== void 0 ? _object$last_results_ : new Uint8Array();
    message.app_hash = (_object$app_hash = object.app_hash) !== null && _object$app_hash !== void 0 ? _object$app_hash : new Uint8Array();
    return message;
  }
};
exports.State = State;