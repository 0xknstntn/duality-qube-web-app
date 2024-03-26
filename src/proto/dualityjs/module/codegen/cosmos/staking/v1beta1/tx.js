import { Description, CommissionRates, Params } from "./staking";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
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
    description: Description.fromPartial({}),
    commission: CommissionRates.fromPartial({}),
    min_self_delegation: "",
    delegator_address: "",
    validator_address: "",
    pubkey: Any.fromPartial({}),
    value: Coin.fromPartial({})
  };
}
export const MsgCreateValidator = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
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
      Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.commission = CommissionRates.decode(reader, reader.uint32());
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
          message.pubkey = Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      commission: isSet(object.commission) ? CommissionRates.fromJSON(object.commission) : undefined,
      min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : "",
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      pubkey: isSet(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined,
      value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object) {
    var _object$min_self_dele, _object$delegator_add, _object$validator_add;
    const message = createBaseMsgCreateValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
    message.min_self_delegation = (_object$min_self_dele = object.min_self_delegation) !== null && _object$min_self_dele !== void 0 ? _object$min_self_dele : "";
    message.delegator_address = (_object$delegator_add = object.delegator_address) !== null && _object$delegator_add !== void 0 ? _object$delegator_add : "";
    message.validator_address = (_object$validator_add = object.validator_address) !== null && _object$validator_add !== void 0 ? _object$validator_add : "";
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseMsgCreateValidatorResponse() {
  return {};
}
export const MsgCreateValidatorResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  }
};
function createBaseMsgEditValidator() {
  return {
    description: Description.fromPartial({}),
    validator_address: "",
    commission_rate: "",
    min_self_delegation: ""
  };
}
export const MsgEditValidator = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.commission_rate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.commission_rate, 18).atomics);
    }
    if (message.min_self_delegation !== "") {
      writer.uint32(34).string(message.min_self_delegation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.commission_rate = Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromJSON(object) {
    return {
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      commission_rate: isSet(object.commission_rate) ? String(object.commission_rate) : "",
      min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : ""
    };
  },
  fromPartial(object) {
    var _object$validator_add2, _object$commission_ra, _object$min_self_dele2;
    const message = createBaseMsgEditValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.validator_address = (_object$validator_add2 = object.validator_address) !== null && _object$validator_add2 !== void 0 ? _object$validator_add2 : "";
    message.commission_rate = (_object$commission_ra = object.commission_rate) !== null && _object$commission_ra !== void 0 ? _object$commission_ra : "";
    message.min_self_delegation = (_object$min_self_dele2 = object.min_self_delegation) !== null && _object$min_self_dele2 !== void 0 ? _object$min_self_dele2 : "";
    return message;
  }
};
function createBaseMsgEditValidatorResponse() {
  return {};
}
export const MsgEditValidatorResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  }
};
function createBaseMsgDelegate() {
  return {
    delegator_address: "",
    validator_address: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgDelegate = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object) {
    var _object$delegator_add2, _object$validator_add3;
    const message = createBaseMsgDelegate();
    message.delegator_address = (_object$delegator_add2 = object.delegator_address) !== null && _object$delegator_add2 !== void 0 ? _object$delegator_add2 : "";
    message.validator_address = (_object$validator_add3 = object.validator_address) !== null && _object$validator_add3 !== void 0 ? _object$validator_add3 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgDelegateResponse() {
  return {};
}
export const MsgDelegateResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgDelegateResponse();
    return message;
  }
};
function createBaseMsgBeginRedelegate() {
  return {
    delegator_address: "",
    validator_src_address: "",
    validator_dst_address: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgBeginRedelegate = {
  encode(message, writer = _m0.Writer.create()) {
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
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object) {
    var _object$delegator_add3, _object$validator_src, _object$validator_dst;
    const message = createBaseMsgBeginRedelegate();
    message.delegator_address = (_object$delegator_add3 = object.delegator_address) !== null && _object$delegator_add3 !== void 0 ? _object$delegator_add3 : "";
    message.validator_src_address = (_object$validator_src = object.validator_src_address) !== null && _object$validator_src !== void 0 ? _object$validator_src : "";
    message.validator_dst_address = (_object$validator_dst = object.validator_dst_address) !== null && _object$validator_dst !== void 0 ? _object$validator_dst : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgBeginRedelegateResponse() {
  return {
    completion_time: Timestamp.fromPartial({})
  };
}
export const MsgBeginRedelegateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.completion_time !== undefined) {
      Timestamp.encode(message.completion_time, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completion_time = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseMsgBeginRedelegateResponse();
    message.completion_time = object.completion_time !== undefined && object.completion_time !== null ? Timestamp.fromPartial(object.completion_time) : undefined;
    return message;
  }
};
function createBaseMsgUndelegate() {
  return {
    delegator_address: "",
    validator_address: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgUndelegate = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object) {
    var _object$delegator_add4, _object$validator_add4;
    const message = createBaseMsgUndelegate();
    message.delegator_address = (_object$delegator_add4 = object.delegator_address) !== null && _object$delegator_add4 !== void 0 ? _object$delegator_add4 : "";
    message.validator_address = (_object$validator_add4 = object.validator_address) !== null && _object$validator_add4 !== void 0 ? _object$validator_add4 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgUndelegateResponse() {
  return {
    completion_time: Timestamp.fromPartial({})
  };
}
export const MsgUndelegateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.completion_time !== undefined) {
      Timestamp.encode(message.completion_time, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completion_time = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseMsgUndelegateResponse();
    message.completion_time = object.completion_time !== undefined && object.completion_time !== null ? Timestamp.fromPartial(object.completion_time) : undefined;
    return message;
  }
};
function createBaseMsgCancelUnbondingDelegation() {
  return {
    delegator_address: "",
    validator_address: "",
    amount: Coin.fromPartial({}),
    creation_height: Long.ZERO
  };
}
export const MsgCancelUnbondingDelegation = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (!message.creation_height.isZero()) {
      writer.uint32(32).int64(message.creation_height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
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
  fromJSON(object) {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      creation_height: isSet(object.creation_height) ? Long.fromValue(object.creation_height) : Long.ZERO
    };
  },
  fromPartial(object) {
    var _object$delegator_add5, _object$validator_add5;
    const message = createBaseMsgCancelUnbondingDelegation();
    message.delegator_address = (_object$delegator_add5 = object.delegator_address) !== null && _object$delegator_add5 !== void 0 ? _object$delegator_add5 : "";
    message.validator_address = (_object$validator_add5 = object.validator_address) !== null && _object$validator_add5 !== void 0 ? _object$validator_add5 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? Long.fromValue(object.creation_height) : Long.ZERO;
    return message;
  }
};
function createBaseMsgCancelUnbondingDelegationResponse() {
  return {};
}
export const MsgCancelUnbondingDelegationResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgCancelUnbondingDelegationResponse();
    return message;
  }
};
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object) {
    var _object$authority;
    const message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  fromPartial(_) {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};