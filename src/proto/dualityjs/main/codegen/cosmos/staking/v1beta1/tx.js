"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgUndelegateResponse = exports.MsgUndelegate = exports.MsgEditValidatorResponse = exports.MsgEditValidator = exports.MsgDelegateResponse = exports.MsgDelegate = exports.MsgCreateValidatorResponse = exports.MsgCreateValidator = exports.MsgCancelUnbondingDelegationResponse = exports.MsgCancelUnbondingDelegation = exports.MsgBeginRedelegateResponse = exports.MsgBeginRedelegate = void 0;
var _staking = require("./staking");
var _any = require("../../../google/protobuf/any");
var _coin = require("../../base/v1beta1/coin");
var _timestamp = require("../../../google/protobuf/timestamp");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _math = require("@cosmjs/math");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** MsgCreateValidator defines a SDK message for creating a new validator. */

/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */

/** MsgEditValidator defines a SDK message for editing an existing validator. */

/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */

/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */

/** MsgDelegateResponse defines the Msg/Delegate response type. */

/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */

/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */

/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */

/** MsgUndelegateResponse defines the Msg/Undelegate response type. */

/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUnbondingDelegationResponse
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */

function createBaseMsgCreateValidator() {
  return {
    description: _staking.Description.fromPartial({}),
    commission: _staking.CommissionRates.fromPartial({}),
    min_self_delegation: "",
    delegator_address: "",
    validator_address: "",
    pubkey: _any.Any.fromPartial({}),
    value: _coin.Coin.fromPartial({})
  };
}
var MsgCreateValidator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.description !== undefined) {
      _staking.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      _staking.CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
    }
    if (message.min_self_delegation !== "") {
      writer.uint32(26).string(message.min_self_delegation);
    }
    if (message.delegator_address !== "") {
      writer.uint32(34).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(42).string(message.validator_address);
    }
    if (message.pubkey !== undefined) {
      _any.Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
    }
    if (message.value !== undefined) {
      _coin.Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = _staking.Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.commission = _staking.CommissionRates.decode(reader, reader.uint32());
          break;
        case 3:
          message.min_self_delegation = reader.string();
          break;
        case 4:
          message.delegator_address = reader.string();
          break;
        case 5:
          message.validator_address = reader.string();
          break;
        case 6:
          message.pubkey = _any.Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.value = _coin.Coin.decode(reader, reader.uint32());
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
      description: (0, _helpers.isSet)(object.description) ? _staking.Description.fromJSON(object.description) : undefined,
      commission: (0, _helpers.isSet)(object.commission) ? _staking.CommissionRates.fromJSON(object.commission) : undefined,
      min_self_delegation: (0, _helpers.isSet)(object.min_self_delegation) ? String(object.min_self_delegation) : "",
      delegator_address: (0, _helpers.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: (0, _helpers.isSet)(object.validator_address) ? String(object.validator_address) : "",
      pubkey: (0, _helpers.isSet)(object.pubkey) ? _any.Any.fromJSON(object.pubkey) : undefined,
      value: (0, _helpers.isSet)(object.value) ? _coin.Coin.fromJSON(object.value) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$min_self_dele, _object$delegator_add, _object$validator_add;
    var message = createBaseMsgCreateValidator();
    message.description = object.description !== undefined && object.description !== null ? _staking.Description.fromPartial(object.description) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? _staking.CommissionRates.fromPartial(object.commission) : undefined;
    message.min_self_delegation = (_object$min_self_dele = object.min_self_delegation) !== null && _object$min_self_dele !== void 0 ? _object$min_self_dele : "";
    message.delegator_address = (_object$delegator_add = object.delegator_address) !== null && _object$delegator_add !== void 0 ? _object$delegator_add : "";
    message.validator_address = (_object$validator_add = object.validator_address) !== null && _object$validator_add !== void 0 ? _object$validator_add : "";
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? _any.Any.fromPartial(object.pubkey) : undefined;
    message.value = object.value !== undefined && object.value !== null ? _coin.Coin.fromPartial(object.value) : undefined;
    return message;
  }
};
exports.MsgCreateValidator = MsgCreateValidator;
function createBaseMsgCreateValidatorResponse() {
  return {};
}
var MsgCreateValidatorResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateValidatorResponse();
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
    var message = createBaseMsgCreateValidatorResponse();
    return message;
  }
};
exports.MsgCreateValidatorResponse = MsgCreateValidatorResponse;
function createBaseMsgEditValidator() {
  return {
    description: _staking.Description.fromPartial({}),
    validator_address: "",
    commission_rate: "",
    min_self_delegation: ""
  };
}
var MsgEditValidator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.description !== undefined) {
      _staking.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.commission_rate !== "") {
      writer.uint32(26).string(_math.Decimal.fromUserInput(message.commission_rate, 18).atomics);
    }
    if (message.min_self_delegation !== "") {
      writer.uint32(34).string(message.min_self_delegation);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgEditValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = _staking.Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.commission_rate = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.min_self_delegation = reader.string();
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
      description: (0, _helpers.isSet)(object.description) ? _staking.Description.fromJSON(object.description) : undefined,
      validator_address: (0, _helpers.isSet)(object.validator_address) ? String(object.validator_address) : "",
      commission_rate: (0, _helpers.isSet)(object.commission_rate) ? String(object.commission_rate) : "",
      min_self_delegation: (0, _helpers.isSet)(object.min_self_delegation) ? String(object.min_self_delegation) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$validator_add2, _object$commission_ra, _object$min_self_dele2;
    var message = createBaseMsgEditValidator();
    message.description = object.description !== undefined && object.description !== null ? _staking.Description.fromPartial(object.description) : undefined;
    message.validator_address = (_object$validator_add2 = object.validator_address) !== null && _object$validator_add2 !== void 0 ? _object$validator_add2 : "";
    message.commission_rate = (_object$commission_ra = object.commission_rate) !== null && _object$commission_ra !== void 0 ? _object$commission_ra : "";
    message.min_self_delegation = (_object$min_self_dele2 = object.min_self_delegation) !== null && _object$min_self_dele2 !== void 0 ? _object$min_self_dele2 : "";
    return message;
  }
};
exports.MsgEditValidator = MsgEditValidator;
function createBaseMsgEditValidatorResponse() {
  return {};
}
var MsgEditValidatorResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgEditValidatorResponse();
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
    var message = createBaseMsgEditValidatorResponse();
    return message;
  }
};
exports.MsgEditValidatorResponse = MsgEditValidatorResponse;
function createBaseMsgDelegate() {
  return {
    delegator_address: "",
    validator_address: "",
    amount: _coin.Coin.fromPartial({})
  };
}
var MsgDelegate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.amount !== undefined) {
      _coin.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelegate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.amount = _coin.Coin.decode(reader, reader.uint32());
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
      delegator_address: (0, _helpers.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: (0, _helpers.isSet)(object.validator_address) ? String(object.validator_address) : "",
      amount: (0, _helpers.isSet)(object.amount) ? _coin.Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add2, _object$validator_add3;
    var message = createBaseMsgDelegate();
    message.delegator_address = (_object$delegator_add2 = object.delegator_address) !== null && _object$delegator_add2 !== void 0 ? _object$delegator_add2 : "";
    message.validator_address = (_object$validator_add3 = object.validator_address) !== null && _object$validator_add3 !== void 0 ? _object$validator_add3 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
exports.MsgDelegate = MsgDelegate;
function createBaseMsgDelegateResponse() {
  return {};
}
var MsgDelegateResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelegateResponse();
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
    var message = createBaseMsgDelegateResponse();
    return message;
  }
};
exports.MsgDelegateResponse = MsgDelegateResponse;
function createBaseMsgBeginRedelegate() {
  return {
    delegator_address: "",
    validator_src_address: "",
    validator_dst_address: "",
    amount: _coin.Coin.fromPartial({})
  };
}
var MsgBeginRedelegate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_src_address !== "") {
      writer.uint32(18).string(message.validator_src_address);
    }
    if (message.validator_dst_address !== "") {
      writer.uint32(26).string(message.validator_dst_address);
    }
    if (message.amount !== undefined) {
      _coin.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBeginRedelegate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_src_address = reader.string();
          break;
        case 3:
          message.validator_dst_address = reader.string();
          break;
        case 4:
          message.amount = _coin.Coin.decode(reader, reader.uint32());
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
      delegator_address: (0, _helpers.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: (0, _helpers.isSet)(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: (0, _helpers.isSet)(object.validator_dst_address) ? String(object.validator_dst_address) : "",
      amount: (0, _helpers.isSet)(object.amount) ? _coin.Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add3, _object$validator_src, _object$validator_dst;
    var message = createBaseMsgBeginRedelegate();
    message.delegator_address = (_object$delegator_add3 = object.delegator_address) !== null && _object$delegator_add3 !== void 0 ? _object$delegator_add3 : "";
    message.validator_src_address = (_object$validator_src = object.validator_src_address) !== null && _object$validator_src !== void 0 ? _object$validator_src : "";
    message.validator_dst_address = (_object$validator_dst = object.validator_dst_address) !== null && _object$validator_dst !== void 0 ? _object$validator_dst : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
exports.MsgBeginRedelegate = MsgBeginRedelegate;
function createBaseMsgBeginRedelegateResponse() {
  return {
    completion_time: _timestamp.Timestamp.fromPartial({})
  };
}
var MsgBeginRedelegateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.completion_time !== undefined) {
      _timestamp.Timestamp.encode(message.completion_time, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBeginRedelegateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completion_time = _timestamp.Timestamp.decode(reader, reader.uint32());
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
      completion_time: (0, _helpers.isSet)(object.completion_time) ? (0, _helpers.fromJsonTimestamp)(object.completion_time) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgBeginRedelegateResponse();
    message.completion_time = object.completion_time !== undefined && object.completion_time !== null ? _timestamp.Timestamp.fromPartial(object.completion_time) : undefined;
    return message;
  }
};
exports.MsgBeginRedelegateResponse = MsgBeginRedelegateResponse;
function createBaseMsgUndelegate() {
  return {
    delegator_address: "",
    validator_address: "",
    amount: _coin.Coin.fromPartial({})
  };
}
var MsgUndelegate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.amount !== undefined) {
      _coin.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUndelegate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.amount = _coin.Coin.decode(reader, reader.uint32());
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
      delegator_address: (0, _helpers.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: (0, _helpers.isSet)(object.validator_address) ? String(object.validator_address) : "",
      amount: (0, _helpers.isSet)(object.amount) ? _coin.Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add4, _object$validator_add4;
    var message = createBaseMsgUndelegate();
    message.delegator_address = (_object$delegator_add4 = object.delegator_address) !== null && _object$delegator_add4 !== void 0 ? _object$delegator_add4 : "";
    message.validator_address = (_object$validator_add4 = object.validator_address) !== null && _object$validator_add4 !== void 0 ? _object$validator_add4 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
exports.MsgUndelegate = MsgUndelegate;
function createBaseMsgUndelegateResponse() {
  return {
    completion_time: _timestamp.Timestamp.fromPartial({})
  };
}
var MsgUndelegateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.completion_time !== undefined) {
      _timestamp.Timestamp.encode(message.completion_time, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completion_time = _timestamp.Timestamp.decode(reader, reader.uint32());
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
      completion_time: (0, _helpers.isSet)(object.completion_time) ? (0, _helpers.fromJsonTimestamp)(object.completion_time) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgUndelegateResponse();
    message.completion_time = object.completion_time !== undefined && object.completion_time !== null ? _timestamp.Timestamp.fromPartial(object.completion_time) : undefined;
    return message;
  }
};
exports.MsgUndelegateResponse = MsgUndelegateResponse;
function createBaseMsgCancelUnbondingDelegation() {
  return {
    delegator_address: "",
    validator_address: "",
    amount: _coin.Coin.fromPartial({}),
    creation_height: _helpers.Long.ZERO
  };
}
var MsgCancelUnbondingDelegation = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.amount !== undefined) {
      _coin.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (!message.creation_height.isZero()) {
      writer.uint32(32).int64(message.creation_height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCancelUnbondingDelegation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.amount = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.creation_height = reader.int64();
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
      delegator_address: (0, _helpers.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: (0, _helpers.isSet)(object.validator_address) ? String(object.validator_address) : "",
      amount: (0, _helpers.isSet)(object.amount) ? _coin.Coin.fromJSON(object.amount) : undefined,
      creation_height: (0, _helpers.isSet)(object.creation_height) ? _helpers.Long.fromValue(object.creation_height) : _helpers.Long.ZERO
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$delegator_add5, _object$validator_add5;
    var message = createBaseMsgCancelUnbondingDelegation();
    message.delegator_address = (_object$delegator_add5 = object.delegator_address) !== null && _object$delegator_add5 !== void 0 ? _object$delegator_add5 : "";
    message.validator_address = (_object$validator_add5 = object.validator_address) !== null && _object$validator_add5 !== void 0 ? _object$validator_add5 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? _helpers.Long.fromValue(object.creation_height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.MsgCancelUnbondingDelegation = MsgCancelUnbondingDelegation;
function createBaseMsgCancelUnbondingDelegationResponse() {
  return {};
}
var MsgCancelUnbondingDelegationResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCancelUnbondingDelegationResponse();
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
    var message = createBaseMsgCancelUnbondingDelegationResponse();
    return message;
  }
};
exports.MsgCancelUnbondingDelegationResponse = MsgCancelUnbondingDelegationResponse;
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: _staking.Params.fromPartial({})
  };
}
var MsgUpdateParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      _staking.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = _staking.Params.decode(reader, reader.uint32());
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
      authority: (0, _helpers.isSet)(object.authority) ? String(object.authority) : "",
      params: (0, _helpers.isSet)(object.params) ? _staking.Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$authority;
    var message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.params = object.params !== undefined && object.params !== null ? _staking.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.MsgUpdateParams = MsgUpdateParams;
function createBaseMsgUpdateParamsResponse() {
  return {};
}
var MsgUpdateParamsResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParamsResponse();
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
    var message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
exports.MsgUpdateParamsResponse = MsgUpdateParamsResponse;