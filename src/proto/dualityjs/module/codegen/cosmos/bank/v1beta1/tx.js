import { Coin } from "../../base/v1beta1/coin";
import { Input, Output, Params, SendEnabled } from "./bank";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgSend represents a message to send coins from one account to another. */

/** MsgSendResponse defines the Msg/Send response type. */

/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */

/** MsgMultiSendResponse defines the Msg/MultiSend response type. */

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

/**
 * MsgSetSendEnabled is the Msg/SetSendEnabled request type.
 * 
 * Only entries to add/update/delete need to be included.
 * Existing SendEnabled entries that are not included in this
 * message are left unchanged.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * MsgSetSendEnabledResponse defines the Msg/SetSendEnabled response type.
 * 
 * Since: cosmos-sdk 0.47
 */

function createBaseMsgSend() {
  return {
    from_address: "",
    to_address: "",
    amount: []
  };
}
export const MsgSend = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }
    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;
        case 2:
          message.to_address = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
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
      from_address: isSet(object.from_address) ? String(object.from_address) : "",
      to_address: isSet(object.to_address) ? String(object.to_address) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$from_address, _object$to_address, _object$amount;
    const message = createBaseMsgSend();
    message.from_address = (_object$from_address = object.from_address) !== null && _object$from_address !== void 0 ? _object$from_address : "";
    message.to_address = (_object$to_address = object.to_address) !== null && _object$to_address !== void 0 ? _object$to_address : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgSendResponse() {
  return {};
}
export const MsgSendResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
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
    const message = createBaseMsgSendResponse();
    return message;
  }
};
function createBaseMsgMultiSend() {
  return {
    inputs: [],
    outputs: []
  };
}
export const MsgMultiSend = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.inputs) {
      Input.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      Output.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
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
      inputs: Array.isArray(object === null || object === void 0 ? void 0 : object.inputs) ? object.inputs.map(e => Input.fromJSON(e)) : [],
      outputs: Array.isArray(object === null || object === void 0 ? void 0 : object.outputs) ? object.outputs.map(e => Output.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$inputs, _object$outputs;
    const message = createBaseMsgMultiSend();
    message.inputs = ((_object$inputs = object.inputs) === null || _object$inputs === void 0 ? void 0 : _object$inputs.map(e => Input.fromPartial(e))) || [];
    message.outputs = ((_object$outputs = object.outputs) === null || _object$outputs === void 0 ? void 0 : _object$outputs.map(e => Output.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgMultiSendResponse() {
  return {};
}
export const MsgMultiSendResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendResponse();
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
    const message = createBaseMsgMultiSendResponse();
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
function createBaseMsgSetSendEnabled() {
  return {
    authority: "",
    send_enabled: [],
    use_default_for: []
  };
}
export const MsgSetSendEnabled = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.send_enabled) {
      SendEnabled.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.use_default_for) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSendEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.send_enabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 3:
          message.use_default_for.push(reader.string());
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
      send_enabled: Array.isArray(object === null || object === void 0 ? void 0 : object.send_enabled) ? object.send_enabled.map(e => SendEnabled.fromJSON(e)) : [],
      use_default_for: Array.isArray(object === null || object === void 0 ? void 0 : object.use_default_for) ? object.use_default_for.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$authority2, _object$send_enabled, _object$use_default_f;
    const message = createBaseMsgSetSendEnabled();
    message.authority = (_object$authority2 = object.authority) !== null && _object$authority2 !== void 0 ? _object$authority2 : "";
    message.send_enabled = ((_object$send_enabled = object.send_enabled) === null || _object$send_enabled === void 0 ? void 0 : _object$send_enabled.map(e => SendEnabled.fromPartial(e))) || [];
    message.use_default_for = ((_object$use_default_f = object.use_default_for) === null || _object$use_default_f === void 0 ? void 0 : _object$use_default_f.map(e => e)) || [];
    return message;
  }
};
function createBaseMsgSetSendEnabledResponse() {
  return {};
}
export const MsgSetSendEnabledResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSendEnabledResponse();
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
    const message = createBaseMsgSetSendEnabledResponse();
    return message;
  }
};