import { AccessConfig } from "./types";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 */

/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */

/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */

/** CodeGrant a granted permission for a single code */

/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */

/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */

/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */

/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */

/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */

/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */

/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */

function createBaseStoreCodeAuthorization() {
  return {
    grants: []
  };
}
export const StoreCodeAuthorization = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.grants) {
      CodeGrant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(CodeGrant.decode(reader, reader.uint32()));
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
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(e => CodeGrant.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$grants;
    const message = createBaseStoreCodeAuthorization();
    message.grants = ((_object$grants = object.grants) === null || _object$grants === void 0 ? void 0 : _object$grants.map(e => CodeGrant.fromPartial(e))) || [];
    return message;
  }
};
function createBaseContractExecutionAuthorization() {
  return {
    grants: []
  };
}
export const ContractExecutionAuthorization = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.grants) {
      ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractExecutionAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
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
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(e => ContractGrant.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$grants2;
    const message = createBaseContractExecutionAuthorization();
    message.grants = ((_object$grants2 = object.grants) === null || _object$grants2 === void 0 ? void 0 : _object$grants2.map(e => ContractGrant.fromPartial(e))) || [];
    return message;
  }
};
function createBaseContractMigrationAuthorization() {
  return {
    grants: []
  };
}
export const ContractMigrationAuthorization = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.grants) {
      ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractMigrationAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
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
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(e => ContractGrant.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$grants3;
    const message = createBaseContractMigrationAuthorization();
    message.grants = ((_object$grants3 = object.grants) === null || _object$grants3 === void 0 ? void 0 : _object$grants3.map(e => ContractGrant.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCodeGrant() {
  return {
    code_hash: new Uint8Array(),
    instantiate_permission: AccessConfig.fromPartial({})
  };
}
export const CodeGrant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.code_hash.length !== 0) {
      writer.uint32(10).bytes(message.code_hash);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_hash = reader.bytes();
          break;
        case 2:
          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
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
      code_hash: isSet(object.code_hash) ? bytesFromBase64(object.code_hash) : new Uint8Array(),
      instantiate_permission: isSet(object.instantiate_permission) ? AccessConfig.fromJSON(object.instantiate_permission) : undefined
    };
  },
  fromPartial(object) {
    var _object$code_hash;
    const message = createBaseCodeGrant();
    message.code_hash = (_object$code_hash = object.code_hash) !== null && _object$code_hash !== void 0 ? _object$code_hash : new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    return message;
  }
};
function createBaseContractGrant() {
  return {
    contract: "",
    limit: Any.fromPartial({}),
    filter: Any.fromPartial({})
  };
}
export const ContractGrant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.limit !== undefined) {
      Any.encode(message.limit, writer.uint32(18).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      Any.encode(message.filter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.limit = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.filter = Any.decode(reader, reader.uint32());
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
      contract: isSet(object.contract) ? String(object.contract) : "",
      limit: isSet(object.limit) ? Any.fromJSON(object.limit) : undefined,
      filter: isSet(object.filter) ? Any.fromJSON(object.filter) : undefined
    };
  },
  fromPartial(object) {
    var _object$contract;
    const message = createBaseContractGrant();
    message.contract = (_object$contract = object.contract) !== null && _object$contract !== void 0 ? _object$contract : "";
    message.limit = object.limit !== undefined && object.limit !== null ? Any.fromPartial(object.limit) : undefined;
    message.filter = object.filter !== undefined && object.filter !== null ? Any.fromPartial(object.filter) : undefined;
    return message;
  }
};
function createBaseMaxCallsLimit() {
  return {
    remaining: Long.UZERO
  };
}
export const MaxCallsLimit = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.remaining.isZero()) {
      writer.uint32(8).uint64(message.remaining);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxCallsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remaining = reader.uint64();
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
      remaining: isSet(object.remaining) ? Long.fromValue(object.remaining) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseMaxCallsLimit();
    message.remaining = object.remaining !== undefined && object.remaining !== null ? Long.fromValue(object.remaining) : Long.UZERO;
    return message;
  }
};
function createBaseMaxFundsLimit() {
  return {
    amounts: []
  };
}
export const MaxFundsLimit = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.amounts) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxFundsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
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
      amounts: Array.isArray(object === null || object === void 0 ? void 0 : object.amounts) ? object.amounts.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$amounts;
    const message = createBaseMaxFundsLimit();
    message.amounts = ((_object$amounts = object.amounts) === null || _object$amounts === void 0 ? void 0 : _object$amounts.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCombinedLimit() {
  return {
    calls_remaining: Long.UZERO,
    amounts: []
  };
}
export const CombinedLimit = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.calls_remaining.isZero()) {
      writer.uint32(8).uint64(message.calls_remaining);
    }
    for (const v of message.amounts) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCombinedLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.calls_remaining = reader.uint64();
          break;
        case 2:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
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
      calls_remaining: isSet(object.calls_remaining) ? Long.fromValue(object.calls_remaining) : Long.UZERO,
      amounts: Array.isArray(object === null || object === void 0 ? void 0 : object.amounts) ? object.amounts.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$amounts2;
    const message = createBaseCombinedLimit();
    message.calls_remaining = object.calls_remaining !== undefined && object.calls_remaining !== null ? Long.fromValue(object.calls_remaining) : Long.UZERO;
    message.amounts = ((_object$amounts2 = object.amounts) === null || _object$amounts2 === void 0 ? void 0 : _object$amounts2.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAllowAllMessagesFilter() {
  return {};
}
export const AllowAllMessagesFilter = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowAllMessagesFilter();
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
    const message = createBaseAllowAllMessagesFilter();
    return message;
  }
};
function createBaseAcceptedMessageKeysFilter() {
  return {
    keys: []
  };
}
export const AcceptedMessageKeysFilter = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.keys) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessageKeysFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.string());
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
      keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$keys;
    const message = createBaseAcceptedMessageKeysFilter();
    message.keys = ((_object$keys = object.keys) === null || _object$keys === void 0 ? void 0 : _object$keys.map(e => e)) || [];
    return message;
  }
};
function createBaseAcceptedMessagesFilter() {
  return {
    messages: []
  };
}
export const AcceptedMessagesFilter = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.messages) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessagesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(reader.bytes());
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
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(e => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object) {
    var _object$messages;
    const message = createBaseAcceptedMessagesFilter();
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(e => e)) || [];
    return message;
  }
};