import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params, BaseAccount } from "./auth";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

/** QueryAccountRequest is the request type for the Query/Account RPC method. */

/** QueryAccountResponse is the response type for the Query/Account RPC method. */

/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 * 
 * Since: cosmos-sdk 0.46
 */

/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */

/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */

/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 * 
 * Since: cosmos-sdk 0.46.2
 */

/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 * 
 * Since: cosmos-sdk 0.46.2
 */

/**
 * QueryAccountInfoRequest is the Query/AccountInfo request type.
 * 
 * Since: cosmos-sdk 0.47
 */

/**
 * QueryAccountInfoResponse is the Query/AccountInfo response type.
 * 
 * Since: cosmos-sdk 0.47
 */

function createBaseQueryAccountsRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAccountsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAccountsResponse() {
  return {
    accounts: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAccountsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.accounts) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map(e => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object) {
    var _object$accounts;
    const message = createBaseQueryAccountsResponse();
    message.accounts = ((_object$accounts = object.accounts) === null || _object$accounts === void 0 ? void 0 : _object$accounts.map(e => Any.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAccountRequest() {
  return {
    address: ""
  };
}
export const QueryAccountRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseQueryAccountRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
function createBaseQueryAccountResponse() {
  return {
    account: Any.fromPartial({})
  };
}
export const QueryAccountResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
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
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryModuleAccountsRequest() {
  return {};
}
export const QueryModuleAccountsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsRequest();
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
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  }
};
function createBaseQueryModuleAccountsResponse() {
  return {
    accounts: []
  };
}
export const QueryModuleAccountsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.accounts) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
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
      accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map(e => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$accounts2;
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = ((_object$accounts2 = object.accounts) === null || _object$accounts2 === void 0 ? void 0 : _object$accounts2.map(e => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryModuleAccountByNameRequest() {
  return {
    name: ""
  };
}
export const QueryModuleAccountByNameRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
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
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object) {
    var _object$name;
    const message = createBaseQueryModuleAccountByNameRequest();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    return message;
  }
};
function createBaseQueryModuleAccountByNameResponse() {
  return {
    account: Any.fromPartial({})
  };
}
export const QueryModuleAccountByNameResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
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
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryModuleAccountByNameResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    return message;
  }
};
function createBaseBech32PrefixRequest() {
  return {};
}
export const Bech32PrefixRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixRequest();
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
    const message = createBaseBech32PrefixRequest();
    return message;
  }
};
function createBaseBech32PrefixResponse() {
  return {
    bech32_prefix: ""
  };
}
export const Bech32PrefixResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.bech32_prefix !== "") {
      writer.uint32(10).string(message.bech32_prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32_prefix = reader.string();
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
      bech32_prefix: isSet(object.bech32_prefix) ? String(object.bech32_prefix) : ""
    };
  },
  fromPartial(object) {
    var _object$bech32_prefix;
    const message = createBaseBech32PrefixResponse();
    message.bech32_prefix = (_object$bech32_prefix = object.bech32_prefix) !== null && _object$bech32_prefix !== void 0 ? _object$bech32_prefix : "";
    return message;
  }
};
function createBaseAddressBytesToStringRequest() {
  return {
    address_bytes: new Uint8Array()
  };
}
export const AddressBytesToStringRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address_bytes.length !== 0) {
      writer.uint32(10).bytes(message.address_bytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address_bytes = reader.bytes();
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
      address_bytes: isSet(object.address_bytes) ? bytesFromBase64(object.address_bytes) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$address_bytes;
    const message = createBaseAddressBytesToStringRequest();
    message.address_bytes = (_object$address_bytes = object.address_bytes) !== null && _object$address_bytes !== void 0 ? _object$address_bytes : new Uint8Array();
    return message;
  }
};
function createBaseAddressBytesToStringResponse() {
  return {
    address_string: ""
  };
}
export const AddressBytesToStringResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address_string !== "") {
      writer.uint32(10).string(message.address_string);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address_string = reader.string();
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
      address_string: isSet(object.address_string) ? String(object.address_string) : ""
    };
  },
  fromPartial(object) {
    var _object$address_strin;
    const message = createBaseAddressBytesToStringResponse();
    message.address_string = (_object$address_strin = object.address_string) !== null && _object$address_strin !== void 0 ? _object$address_strin : "";
    return message;
  }
};
function createBaseAddressStringToBytesRequest() {
  return {
    address_string: ""
  };
}
export const AddressStringToBytesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address_string !== "") {
      writer.uint32(10).string(message.address_string);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address_string = reader.string();
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
      address_string: isSet(object.address_string) ? String(object.address_string) : ""
    };
  },
  fromPartial(object) {
    var _object$address_strin2;
    const message = createBaseAddressStringToBytesRequest();
    message.address_string = (_object$address_strin2 = object.address_string) !== null && _object$address_strin2 !== void 0 ? _object$address_strin2 : "";
    return message;
  }
};
function createBaseAddressStringToBytesResponse() {
  return {
    address_bytes: new Uint8Array()
  };
}
export const AddressStringToBytesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address_bytes.length !== 0) {
      writer.uint32(10).bytes(message.address_bytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address_bytes = reader.bytes();
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
      address_bytes: isSet(object.address_bytes) ? bytesFromBase64(object.address_bytes) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$address_bytes2;
    const message = createBaseAddressStringToBytesResponse();
    message.address_bytes = (_object$address_bytes2 = object.address_bytes) !== null && _object$address_bytes2 !== void 0 ? _object$address_bytes2 : new Uint8Array();
    return message;
  }
};
function createBaseQueryAccountAddressByIDRequest() {
  return {
    id: Long.ZERO,
    account_id: Long.UZERO
  };
}
export const QueryAccountAddressByIDRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }
    if (!message.account_id.isZero()) {
      writer.uint32(16).uint64(message.account_id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64();
          break;
        case 2:
          message.account_id = reader.uint64();
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      account_id: isSet(object.account_id) ? Long.fromValue(object.account_id) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseQueryAccountAddressByIDRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.ZERO;
    message.account_id = object.account_id !== undefined && object.account_id !== null ? Long.fromValue(object.account_id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryAccountAddressByIDResponse() {
  return {
    account_address: ""
  };
}
export const QueryAccountAddressByIDResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.account_address !== "") {
      writer.uint32(10).string(message.account_address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account_address = reader.string();
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
      account_address: isSet(object.account_address) ? String(object.account_address) : ""
    };
  },
  fromPartial(object) {
    var _object$account_addre;
    const message = createBaseQueryAccountAddressByIDResponse();
    message.account_address = (_object$account_addre = object.account_address) !== null && _object$account_addre !== void 0 ? _object$account_addre : "";
    return message;
  }
};
function createBaseQueryAccountInfoRequest() {
  return {
    address: ""
  };
}
export const QueryAccountInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object) {
    var _object$address2;
    const message = createBaseQueryAccountInfoRequest();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    return message;
  }
};
function createBaseQueryAccountInfoResponse() {
  return {
    info: BaseAccount.fromPartial({})
  };
}
export const QueryAccountInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.info !== undefined) {
      BaseAccount.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = BaseAccount.decode(reader, reader.uint32());
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
      info: isSet(object.info) ? BaseAccount.fromJSON(object.info) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseQueryAccountInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? BaseAccount.fromPartial(object.info) : undefined;
    return message;
  }
};