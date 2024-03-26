"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = exports.Minter = void 0;
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _math = require("@cosmjs/math");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Minter represents the minting state. */

/** Params defines the parameters for the x/mint module. */

function createBaseMinter() {
  return {
    inflation: "",
    annual_provisions: ""
  };
}
var Minter = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.inflation !== "") {
      writer.uint32(10).string(_math.Decimal.fromUserInput(message.inflation, 18).atomics);
    }
    if (message.annual_provisions !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.annual_provisions, 18).atomics);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMinter();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.annual_provisions = _math.Decimal.fromAtomics(reader.string(), 18).toString();
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
      inflation: (0, _helpers.isSet)(object.inflation) ? String(object.inflation) : "",
      annual_provisions: (0, _helpers.isSet)(object.annual_provisions) ? String(object.annual_provisions) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$inflation, _object$annual_provis;
    var message = createBaseMinter();
    message.inflation = (_object$inflation = object.inflation) !== null && _object$inflation !== void 0 ? _object$inflation : "";
    message.annual_provisions = (_object$annual_provis = object.annual_provisions) !== null && _object$annual_provis !== void 0 ? _object$annual_provis : "";
    return message;
  }
};
exports.Minter = Minter;
function createBaseParams() {
  return {
    mint_denom: "",
    inflation_rate_change: "",
    inflation_max: "",
    inflation_min: "",
    goal_bonded: "",
    blocks_per_year: _helpers.Long.UZERO
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.mint_denom !== "") {
      writer.uint32(10).string(message.mint_denom);
    }
    if (message.inflation_rate_change !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.inflation_rate_change, 18).atomics);
    }
    if (message.inflation_max !== "") {
      writer.uint32(26).string(_math.Decimal.fromUserInput(message.inflation_max, 18).atomics);
    }
    if (message.inflation_min !== "") {
      writer.uint32(34).string(_math.Decimal.fromUserInput(message.inflation_min, 18).atomics);
    }
    if (message.goal_bonded !== "") {
      writer.uint32(42).string(_math.Decimal.fromUserInput(message.goal_bonded, 18).atomics);
    }
    if (!message.blocks_per_year.isZero()) {
      writer.uint32(48).uint64(message.blocks_per_year);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mint_denom = reader.string();
          break;
        case 2:
          message.inflation_rate_change = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.inflation_max = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.inflation_min = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.goal_bonded = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.blocks_per_year = reader.uint64();
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
      mint_denom: (0, _helpers.isSet)(object.mint_denom) ? String(object.mint_denom) : "",
      inflation_rate_change: (0, _helpers.isSet)(object.inflation_rate_change) ? String(object.inflation_rate_change) : "",
      inflation_max: (0, _helpers.isSet)(object.inflation_max) ? String(object.inflation_max) : "",
      inflation_min: (0, _helpers.isSet)(object.inflation_min) ? String(object.inflation_min) : "",
      goal_bonded: (0, _helpers.isSet)(object.goal_bonded) ? String(object.goal_bonded) : "",
      blocks_per_year: (0, _helpers.isSet)(object.blocks_per_year) ? _helpers.Long.fromValue(object.blocks_per_year) : _helpers.Long.UZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$mint_denom, _object$inflation_rat, _object$inflation_max, _object$inflation_min, _object$goal_bonded;
    var message = createBaseParams();
    message.mint_denom = (_object$mint_denom = object.mint_denom) !== null && _object$mint_denom !== void 0 ? _object$mint_denom : "";
    message.inflation_rate_change = (_object$inflation_rat = object.inflation_rate_change) !== null && _object$inflation_rat !== void 0 ? _object$inflation_rat : "";
    message.inflation_max = (_object$inflation_max = object.inflation_max) !== null && _object$inflation_max !== void 0 ? _object$inflation_max : "";
    message.inflation_min = (_object$inflation_min = object.inflation_min) !== null && _object$inflation_min !== void 0 ? _object$inflation_min : "";
    message.goal_bonded = (_object$goal_bonded = object.goal_bonded) !== null && _object$goal_bonded !== void 0 ? _object$goal_bonded : "";
    message.blocks_per_year = object.blocks_per_year !== undefined && object.blocks_per_year !== null ? _helpers.Long.fromValue(object.blocks_per_year) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Params = Params;