"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = exports.GenesisState = void 0;
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
var _math = require("@cosmjs/math");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** GenesisState defines the genesis state of the x/builder module. */

/** Params defines the parameters of the x/builder module. */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({})
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
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
      params: (0, _helpers.isSet)(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.GenesisState = GenesisState;
function createBaseParams() {
  return {
    max_bundle_size: 0,
    escrow_account_address: "",
    reserve_fee: _coin.Coin.fromPartial({}),
    min_bid_increment: _coin.Coin.fromPartial({}),
    front_running_protection: false,
    proposer_fee: ""
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.max_bundle_size !== 0) {
      writer.uint32(8).uint32(message.max_bundle_size);
    }
    if (message.escrow_account_address !== "") {
      writer.uint32(18).string(message.escrow_account_address);
    }
    if (message.reserve_fee !== undefined) {
      _coin.Coin.encode(message.reserve_fee, writer.uint32(26).fork()).ldelim();
    }
    if (message.min_bid_increment !== undefined) {
      _coin.Coin.encode(message.min_bid_increment, writer.uint32(34).fork()).ldelim();
    }
    if (message.front_running_protection === true) {
      writer.uint32(40).bool(message.front_running_protection);
    }
    if (message.proposer_fee !== "") {
      writer.uint32(50).string(_math.Decimal.fromUserInput(message.proposer_fee, 18).atomics);
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
          message.max_bundle_size = reader.uint32();
          break;
        case 2:
          message.escrow_account_address = reader.string();
          break;
        case 3:
          message.reserve_fee = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.min_bid_increment = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.front_running_protection = reader.bool();
          break;
        case 6:
          message.proposer_fee = _math.Decimal.fromAtomics(reader.string(), 18).toString();
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
      max_bundle_size: (0, _helpers.isSet)(object.max_bundle_size) ? Number(object.max_bundle_size) : 0,
      escrow_account_address: (0, _helpers.isSet)(object.escrow_account_address) ? String(object.escrow_account_address) : "",
      reserve_fee: (0, _helpers.isSet)(object.reserve_fee) ? _coin.Coin.fromJSON(object.reserve_fee) : undefined,
      min_bid_increment: (0, _helpers.isSet)(object.min_bid_increment) ? _coin.Coin.fromJSON(object.min_bid_increment) : undefined,
      front_running_protection: (0, _helpers.isSet)(object.front_running_protection) ? Boolean(object.front_running_protection) : false,
      proposer_fee: (0, _helpers.isSet)(object.proposer_fee) ? String(object.proposer_fee) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$max_bundle_si, _object$escrow_accoun, _object$front_running, _object$proposer_fee;
    var message = createBaseParams();
    message.max_bundle_size = (_object$max_bundle_si = object.max_bundle_size) !== null && _object$max_bundle_si !== void 0 ? _object$max_bundle_si : 0;
    message.escrow_account_address = (_object$escrow_accoun = object.escrow_account_address) !== null && _object$escrow_accoun !== void 0 ? _object$escrow_accoun : "";
    message.reserve_fee = object.reserve_fee !== undefined && object.reserve_fee !== null ? _coin.Coin.fromPartial(object.reserve_fee) : undefined;
    message.min_bid_increment = object.min_bid_increment !== undefined && object.min_bid_increment !== null ? _coin.Coin.fromPartial(object.min_bid_increment) : undefined;
    message.front_running_protection = (_object$front_running = object.front_running_protection) !== null && _object$front_running !== void 0 ? _object$front_running : false;
    message.proposer_fee = (_object$proposer_fee = object.proposer_fee) !== null && _object$proposer_fee !== void 0 ? _object$proposer_fee : "";
    return message;
  }
};
exports.Params = Params;