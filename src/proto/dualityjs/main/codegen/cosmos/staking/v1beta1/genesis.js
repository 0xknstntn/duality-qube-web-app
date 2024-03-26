"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LastValidatorPower = exports.GenesisState = void 0;
var _staking = require("./staking");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState defines the staking module's genesis state. */

/** LastValidatorPower required for validator set update logic. */

function createBaseGenesisState() {
  return {
    params: _staking.Params.fromPartial({}),
    last_total_power: new Uint8Array(),
    last_validator_powers: [],
    validators: [],
    delegations: [],
    unbonding_delegations: [],
    redelegations: [],
    exported: false
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _staking.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.last_total_power.length !== 0) {
      writer.uint32(18).bytes(message.last_total_power);
    }
    var _iterator = _createForOfIteratorHelper(message.last_validator_powers),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.validators),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _staking.Validator.encode(_v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.delegations),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _staking.Delegation.encode(_v2, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var _iterator4 = _createForOfIteratorHelper(message.unbonding_delegations),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        _staking.UnbondingDelegation.encode(_v3, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.redelegations),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v4 = _step5.value;
        _staking.Redelegation.encode(_v4, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _staking.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.last_total_power = reader.bytes();
          break;
        case 3:
          message.last_validator_powers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;
        case 4:
          message.validators.push(_staking.Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(_staking.Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.unbonding_delegations.push(_staking.UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.redelegations.push(_staking.Redelegation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.exported = reader.bool();
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
      params: (0, _helpers.isSet)(object.params) ? _staking.Params.fromJSON(object.params) : undefined,
      last_total_power: (0, _helpers.isSet)(object.last_total_power) ? (0, _helpers.bytesFromBase64)(object.last_total_power) : new Uint8Array(),
      last_validator_powers: Array.isArray(object === null || object === void 0 ? void 0 : object.last_validator_powers) ? object.last_validator_powers.map(function (e) {
        return LastValidatorPower.fromJSON(e);
      }) : [],
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return _staking.Validator.fromJSON(e);
      }) : [],
      delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations) ? object.delegations.map(function (e) {
        return _staking.Delegation.fromJSON(e);
      }) : [],
      unbonding_delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_delegations) ? object.unbonding_delegations.map(function (e) {
        return _staking.UnbondingDelegation.fromJSON(e);
      }) : [],
      redelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegations) ? object.redelegations.map(function (e) {
        return _staking.Redelegation.fromJSON(e);
      }) : [],
      exported: (0, _helpers.isSet)(object.exported) ? Boolean(object.exported) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$last_total_po, _object$last_validato, _object$validators, _object$delegations, _object$unbonding_del, _object$redelegations, _object$exported;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _staking.Params.fromPartial(object.params) : undefined;
    message.last_total_power = (_object$last_total_po = object.last_total_power) !== null && _object$last_total_po !== void 0 ? _object$last_total_po : new Uint8Array();
    message.last_validator_powers = ((_object$last_validato = object.last_validator_powers) === null || _object$last_validato === void 0 ? void 0 : _object$last_validato.map(function (e) {
      return LastValidatorPower.fromPartial(e);
    })) || [];
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(function (e) {
      return _staking.Validator.fromPartial(e);
    })) || [];
    message.delegations = ((_object$delegations = object.delegations) === null || _object$delegations === void 0 ? void 0 : _object$delegations.map(function (e) {
      return _staking.Delegation.fromPartial(e);
    })) || [];
    message.unbonding_delegations = ((_object$unbonding_del = object.unbonding_delegations) === null || _object$unbonding_del === void 0 ? void 0 : _object$unbonding_del.map(function (e) {
      return _staking.UnbondingDelegation.fromPartial(e);
    })) || [];
    message.redelegations = ((_object$redelegations = object.redelegations) === null || _object$redelegations === void 0 ? void 0 : _object$redelegations.map(function (e) {
      return _staking.Redelegation.fromPartial(e);
    })) || [];
    message.exported = (_object$exported = object.exported) !== null && _object$exported !== void 0 ? _object$exported : false;
    return message;
  }
};
exports.GenesisState = GenesisState;
function createBaseLastValidatorPower() {
  return {
    address: "",
    power: _helpers.Long.ZERO
  };
}
var LastValidatorPower = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLastValidatorPower();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.power = reader.int64();
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
      power: (0, _helpers.isSet)(object.power) ? _helpers.Long.fromValue(object.power) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseLastValidatorPower();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.power = object.power !== undefined && object.power !== null ? _helpers.Long.fromValue(object.power) : _helpers.Long.ZERO;
    return message;
  }
};
exports.LastValidatorPower = LastValidatorPower;