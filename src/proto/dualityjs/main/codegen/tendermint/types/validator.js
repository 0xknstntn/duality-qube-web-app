"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidatorSet = exports.Validator = exports.SimpleValidator = void 0;
var _keys = require("../crypto/keys");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseValidatorSet() {
  return {
    validators: [],
    proposer: Validator.fromPartial({}),
    total_voting_power: _helpers.Long.ZERO
  };
}
var ValidatorSet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.validators),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Validator.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.proposer !== undefined) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }
    if (!message.total_voting_power.isZero()) {
      writer.uint32(24).int64(message.total_voting_power);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorSet();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.proposer = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.total_voting_power = reader.int64();
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
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return Validator.fromJSON(e);
      }) : [],
      proposer: (0, _helpers.isSet)(object.proposer) ? Validator.fromJSON(object.proposer) : undefined,
      total_voting_power: (0, _helpers.isSet)(object.total_voting_power) ? _helpers.Long.fromValue(object.total_voting_power) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validators;
    var message = createBaseValidatorSet();
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(function (e) {
      return Validator.fromPartial(e);
    })) || [];
    message.proposer = object.proposer !== undefined && object.proposer !== null ? Validator.fromPartial(object.proposer) : undefined;
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? _helpers.Long.fromValue(object.total_voting_power) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ValidatorSet = ValidatorSet;
function createBaseValidator() {
  return {
    address: new Uint8Array(),
    pub_key: _keys.PublicKey.fromPartial({}),
    voting_power: _helpers.Long.ZERO,
    proposer_priority: _helpers.Long.ZERO
  };
}
var Validator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.pub_key !== undefined) {
      _keys.PublicKey.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
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
          message.address = reader.bytes();
          break;
        case 2:
          message.pub_key = _keys.PublicKey.decode(reader, reader.uint32());
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
      address: (0, _helpers.isSet)(object.address) ? (0, _helpers.bytesFromBase64)(object.address) : new Uint8Array(),
      pub_key: (0, _helpers.isSet)(object.pub_key) ? _keys.PublicKey.fromJSON(object.pub_key) : undefined,
      voting_power: (0, _helpers.isSet)(object.voting_power) ? _helpers.Long.fromValue(object.voting_power) : _helpers.Long.ZERO,
      proposer_priority: (0, _helpers.isSet)(object.proposer_priority) ? _helpers.Long.fromValue(object.proposer_priority) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : new Uint8Array();
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? _keys.PublicKey.fromPartial(object.pub_key) : undefined;
    message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? _helpers.Long.fromValue(object.voting_power) : _helpers.Long.ZERO;
    message.proposer_priority = object.proposer_priority !== undefined && object.proposer_priority !== null ? _helpers.Long.fromValue(object.proposer_priority) : _helpers.Long.ZERO;
    return message;
  }
};
exports.Validator = Validator;
function createBaseSimpleValidator() {
  return {
    pub_key: _keys.PublicKey.fromPartial({}),
    voting_power: _helpers.Long.ZERO
  };
}
var SimpleValidator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pub_key !== undefined) {
      _keys.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (!message.voting_power.isZero()) {
      writer.uint32(16).int64(message.voting_power);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSimpleValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key = _keys.PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.voting_power = reader.int64();
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
      pub_key: (0, _helpers.isSet)(object.pub_key) ? _keys.PublicKey.fromJSON(object.pub_key) : undefined,
      voting_power: (0, _helpers.isSet)(object.voting_power) ? _helpers.Long.fromValue(object.voting_power) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSimpleValidator();
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? _keys.PublicKey.fromPartial(object.pub_key) : undefined;
    message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? _helpers.Long.fromValue(object.voting_power) : _helpers.Long.ZERO;
    return message;
  }
};
exports.SimpleValidator = SimpleValidator;