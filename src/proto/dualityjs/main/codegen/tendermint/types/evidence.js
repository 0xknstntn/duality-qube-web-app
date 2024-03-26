"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightClientAttackEvidence = exports.EvidenceList = exports.Evidence = exports.DuplicateVoteEvidence = void 0;
var _types = require("./types");
var _timestamp = require("../../google/protobuf/timestamp");
var _validator = require("./validator");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */

/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */

function createBaseEvidence() {
  return {
    duplicate_vote_evidence: undefined,
    light_client_attack_evidence: undefined
  };
}
var Evidence = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.duplicate_vote_evidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicate_vote_evidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.light_client_attack_evidence !== undefined) {
      LightClientAttackEvidence.encode(message.light_client_attack_evidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEvidence();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duplicate_vote_evidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;
        case 2:
          message.light_client_attack_evidence = LightClientAttackEvidence.decode(reader, reader.uint32());
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
      duplicate_vote_evidence: (0, _helpers.isSet)(object.duplicate_vote_evidence) ? DuplicateVoteEvidence.fromJSON(object.duplicate_vote_evidence) : undefined,
      light_client_attack_evidence: (0, _helpers.isSet)(object.light_client_attack_evidence) ? LightClientAttackEvidence.fromJSON(object.light_client_attack_evidence) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEvidence();
    message.duplicate_vote_evidence = object.duplicate_vote_evidence !== undefined && object.duplicate_vote_evidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicate_vote_evidence) : undefined;
    message.light_client_attack_evidence = object.light_client_attack_evidence !== undefined && object.light_client_attack_evidence !== null ? LightClientAttackEvidence.fromPartial(object.light_client_attack_evidence) : undefined;
    return message;
  }
};
exports.Evidence = Evidence;
function createBaseDuplicateVoteEvidence() {
  return {
    vote_a: _types.Vote.fromPartial({}),
    vote_b: _types.Vote.fromPartial({}),
    total_voting_power: _helpers.Long.ZERO,
    validator_power: _helpers.Long.ZERO,
    timestamp: _timestamp.Timestamp.fromPartial({})
  };
}
var DuplicateVoteEvidence = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.vote_a !== undefined) {
      _types.Vote.encode(message.vote_a, writer.uint32(10).fork()).ldelim();
    }
    if (message.vote_b !== undefined) {
      _types.Vote.encode(message.vote_b, writer.uint32(18).fork()).ldelim();
    }
    if (!message.total_voting_power.isZero()) {
      writer.uint32(24).int64(message.total_voting_power);
    }
    if (!message.validator_power.isZero()) {
      writer.uint32(32).int64(message.validator_power);
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDuplicateVoteEvidence();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote_a = _types.Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.vote_b = _types.Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.total_voting_power = reader.int64();
          break;
        case 4:
          message.validator_power = reader.int64();
          break;
        case 5:
          message.timestamp = _timestamp.Timestamp.decode(reader, reader.uint32());
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
      vote_a: (0, _helpers.isSet)(object.vote_a) ? _types.Vote.fromJSON(object.vote_a) : undefined,
      vote_b: (0, _helpers.isSet)(object.vote_b) ? _types.Vote.fromJSON(object.vote_b) : undefined,
      total_voting_power: (0, _helpers.isSet)(object.total_voting_power) ? _helpers.Long.fromValue(object.total_voting_power) : _helpers.Long.ZERO,
      validator_power: (0, _helpers.isSet)(object.validator_power) ? _helpers.Long.fromValue(object.validator_power) : _helpers.Long.ZERO,
      timestamp: (0, _helpers.isSet)(object.timestamp) ? (0, _helpers.fromJsonTimestamp)(object.timestamp) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseDuplicateVoteEvidence();
    message.vote_a = object.vote_a !== undefined && object.vote_a !== null ? _types.Vote.fromPartial(object.vote_a) : undefined;
    message.vote_b = object.vote_b !== undefined && object.vote_b !== null ? _types.Vote.fromPartial(object.vote_b) : undefined;
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? _helpers.Long.fromValue(object.total_voting_power) : _helpers.Long.ZERO;
    message.validator_power = object.validator_power !== undefined && object.validator_power !== null ? _helpers.Long.fromValue(object.validator_power) : _helpers.Long.ZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? _timestamp.Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }
};
exports.DuplicateVoteEvidence = DuplicateVoteEvidence;
function createBaseLightClientAttackEvidence() {
  return {
    conflicting_block: _types.LightBlock.fromPartial({}),
    common_height: _helpers.Long.ZERO,
    byzantine_validators: [],
    total_voting_power: _helpers.Long.ZERO,
    timestamp: _timestamp.Timestamp.fromPartial({})
  };
}
var LightClientAttackEvidence = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.conflicting_block !== undefined) {
      _types.LightBlock.encode(message.conflicting_block, writer.uint32(10).fork()).ldelim();
    }
    if (!message.common_height.isZero()) {
      writer.uint32(16).int64(message.common_height);
    }
    var _iterator = _createForOfIteratorHelper(message.byzantine_validators),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _validator.Validator.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!message.total_voting_power.isZero()) {
      writer.uint32(32).int64(message.total_voting_power);
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLightClientAttackEvidence();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflicting_block = _types.LightBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.common_height = reader.int64();
          break;
        case 3:
          message.byzantine_validators.push(_validator.Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.total_voting_power = reader.int64();
          break;
        case 5:
          message.timestamp = _timestamp.Timestamp.decode(reader, reader.uint32());
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
      conflicting_block: (0, _helpers.isSet)(object.conflicting_block) ? _types.LightBlock.fromJSON(object.conflicting_block) : undefined,
      common_height: (0, _helpers.isSet)(object.common_height) ? _helpers.Long.fromValue(object.common_height) : _helpers.Long.ZERO,
      byzantine_validators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantine_validators) ? object.byzantine_validators.map(function (e) {
        return _validator.Validator.fromJSON(e);
      }) : [],
      total_voting_power: (0, _helpers.isSet)(object.total_voting_power) ? _helpers.Long.fromValue(object.total_voting_power) : _helpers.Long.ZERO,
      timestamp: (0, _helpers.isSet)(object.timestamp) ? (0, _helpers.fromJsonTimestamp)(object.timestamp) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$byzantine_val;
    var message = createBaseLightClientAttackEvidence();
    message.conflicting_block = object.conflicting_block !== undefined && object.conflicting_block !== null ? _types.LightBlock.fromPartial(object.conflicting_block) : undefined;
    message.common_height = object.common_height !== undefined && object.common_height !== null ? _helpers.Long.fromValue(object.common_height) : _helpers.Long.ZERO;
    message.byzantine_validators = ((_object$byzantine_val = object.byzantine_validators) === null || _object$byzantine_val === void 0 ? void 0 : _object$byzantine_val.map(function (e) {
      return _validator.Validator.fromPartial(e);
    })) || [];
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? _helpers.Long.fromValue(object.total_voting_power) : _helpers.Long.ZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? _timestamp.Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }
};
exports.LightClientAttackEvidence = LightClientAttackEvidence;
function createBaseEvidenceList() {
  return {
    evidence: []
  };
}
var EvidenceList = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.evidence),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        Evidence.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseEvidenceList();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
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
      evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence) ? object.evidence.map(function (e) {
        return Evidence.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$evidence;
    var message = createBaseEvidenceList();
    message.evidence = ((_object$evidence = object.evidence) === null || _object$evidence === void 0 ? void 0 : _object$evidence.map(function (e) {
      return Evidence.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.EvidenceList = EvidenceList;