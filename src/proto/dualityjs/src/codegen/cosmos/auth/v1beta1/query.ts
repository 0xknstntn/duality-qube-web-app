import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params, BaseAccount } from "./auth";
import { Long, isSet, DeepPartial, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
  /** accounts are the existing accounts */
  accounts: Any[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address defines the address to query for. */
  address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** account defines the account of the corresponding address. */
  account: Any;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsRequest {}
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsResponse {
  accounts: Any[];
}
/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameRequest {
  name: string;
}
/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameResponse {
  account: Any;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixRequest {}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixResponse {
  bech32_prefix: string;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringRequest {
  address_bytes: Uint8Array;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringResponse {
  address_string: string;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesRequest {
  address_string: string;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesResponse {
  address_bytes: Uint8Array;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 * 
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDRequest {
  /**
   * Deprecated, use account_id instead
   * 
   * id is the account number of the address to be queried. This field
   * should have been an uint64 (like all account numbers), and will be
   * updated to uint64 in a future version of the auth query.
   */
  /** @deprecated */
  id: Long;
  /**
   * account_id is the account number of the address to be queried.
   * 
   * Since: cosmos-sdk 0.47
   */
  account_id: Long;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 * 
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDResponse {
  account_address: string;
}
/**
 * QueryAccountInfoRequest is the Query/AccountInfo request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoRequest {
  /** address is the account address string. */
  address: string;
}
/**
 * QueryAccountInfoResponse is the Query/AccountInfo response type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoResponse {
  /** info is the account info which is represented by BaseAccount. */
  info: BaseAccount;
}
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAccountsRequest = {
  encode(message: QueryAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest {
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
  fromJSON(object: any): QueryAccountsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAccountsResponse = {
  encode(message: QueryAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse {
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
  fromJSON(object: any): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: ""
  };
}
export const QueryAccountRequest = {
  encode(message: QueryAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest {
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
  fromJSON(object: any): QueryAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    account: Any.fromPartial({})
  };
}
export const QueryAccountResponse = {
  encode(message: QueryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse {
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
  fromJSON(object: any): QueryAccountResponse {
    return {
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
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
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryModuleAccountsRequest(): QueryModuleAccountsRequest {
  return {};
}
export const QueryModuleAccountsRequest = {
  encode(_: QueryModuleAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsRequest {
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
  fromJSON(_: any): QueryModuleAccountsRequest {
    return {};
  },
  fromPartial(_: DeepPartial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest {
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  }
};
function createBaseQueryModuleAccountsResponse(): QueryModuleAccountsResponse {
  return {
    accounts: []
  };
}
export const QueryModuleAccountsResponse = {
  encode(message: QueryModuleAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsResponse {
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
  fromJSON(object: any): QueryModuleAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse {
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryModuleAccountByNameRequest(): QueryModuleAccountByNameRequest {
  return {
    name: ""
  };
}
export const QueryModuleAccountByNameRequest = {
  encode(message: QueryModuleAccountByNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountByNameRequest {
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
  fromJSON(object: any): QueryModuleAccountByNameRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: DeepPartial<QueryModuleAccountByNameRequest>): QueryModuleAccountByNameRequest {
    const message = createBaseQueryModuleAccountByNameRequest();
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseQueryModuleAccountByNameResponse(): QueryModuleAccountByNameResponse {
  return {
    account: Any.fromPartial({})
  };
}
export const QueryModuleAccountByNameResponse = {
  encode(message: QueryModuleAccountByNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountByNameResponse {
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
  fromJSON(object: any): QueryModuleAccountByNameResponse {
    return {
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryModuleAccountByNameResponse>): QueryModuleAccountByNameResponse {
    const message = createBaseQueryModuleAccountByNameResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    return message;
  }
};
function createBaseBech32PrefixRequest(): Bech32PrefixRequest {
  return {};
}
export const Bech32PrefixRequest = {
  encode(_: Bech32PrefixRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixRequest {
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
  fromJSON(_: any): Bech32PrefixRequest {
    return {};
  },
  fromPartial(_: DeepPartial<Bech32PrefixRequest>): Bech32PrefixRequest {
    const message = createBaseBech32PrefixRequest();
    return message;
  }
};
function createBaseBech32PrefixResponse(): Bech32PrefixResponse {
  return {
    bech32_prefix: ""
  };
}
export const Bech32PrefixResponse = {
  encode(message: Bech32PrefixResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bech32_prefix !== "") {
      writer.uint32(10).string(message.bech32_prefix);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixResponse {
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
  fromJSON(object: any): Bech32PrefixResponse {
    return {
      bech32_prefix: isSet(object.bech32_prefix) ? String(object.bech32_prefix) : ""
    };
  },
  fromPartial(object: DeepPartial<Bech32PrefixResponse>): Bech32PrefixResponse {
    const message = createBaseBech32PrefixResponse();
    message.bech32_prefix = object.bech32_prefix ?? "";
    return message;
  }
};
function createBaseAddressBytesToStringRequest(): AddressBytesToStringRequest {
  return {
    address_bytes: new Uint8Array()
  };
}
export const AddressBytesToStringRequest = {
  encode(message: AddressBytesToStringRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address_bytes.length !== 0) {
      writer.uint32(10).bytes(message.address_bytes);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringRequest {
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
  fromJSON(object: any): AddressBytesToStringRequest {
    return {
      address_bytes: isSet(object.address_bytes) ? bytesFromBase64(object.address_bytes) : new Uint8Array()
    };
  },
  fromPartial(object: DeepPartial<AddressBytesToStringRequest>): AddressBytesToStringRequest {
    const message = createBaseAddressBytesToStringRequest();
    message.address_bytes = object.address_bytes ?? new Uint8Array();
    return message;
  }
};
function createBaseAddressBytesToStringResponse(): AddressBytesToStringResponse {
  return {
    address_string: ""
  };
}
export const AddressBytesToStringResponse = {
  encode(message: AddressBytesToStringResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address_string !== "") {
      writer.uint32(10).string(message.address_string);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringResponse {
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
  fromJSON(object: any): AddressBytesToStringResponse {
    return {
      address_string: isSet(object.address_string) ? String(object.address_string) : ""
    };
  },
  fromPartial(object: DeepPartial<AddressBytesToStringResponse>): AddressBytesToStringResponse {
    const message = createBaseAddressBytesToStringResponse();
    message.address_string = object.address_string ?? "";
    return message;
  }
};
function createBaseAddressStringToBytesRequest(): AddressStringToBytesRequest {
  return {
    address_string: ""
  };
}
export const AddressStringToBytesRequest = {
  encode(message: AddressStringToBytesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address_string !== "") {
      writer.uint32(10).string(message.address_string);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesRequest {
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
  fromJSON(object: any): AddressStringToBytesRequest {
    return {
      address_string: isSet(object.address_string) ? String(object.address_string) : ""
    };
  },
  fromPartial(object: DeepPartial<AddressStringToBytesRequest>): AddressStringToBytesRequest {
    const message = createBaseAddressStringToBytesRequest();
    message.address_string = object.address_string ?? "";
    return message;
  }
};
function createBaseAddressStringToBytesResponse(): AddressStringToBytesResponse {
  return {
    address_bytes: new Uint8Array()
  };
}
export const AddressStringToBytesResponse = {
  encode(message: AddressStringToBytesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address_bytes.length !== 0) {
      writer.uint32(10).bytes(message.address_bytes);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesResponse {
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
  fromJSON(object: any): AddressStringToBytesResponse {
    return {
      address_bytes: isSet(object.address_bytes) ? bytesFromBase64(object.address_bytes) : new Uint8Array()
    };
  },
  fromPartial(object: DeepPartial<AddressStringToBytesResponse>): AddressStringToBytesResponse {
    const message = createBaseAddressStringToBytesResponse();
    message.address_bytes = object.address_bytes ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryAccountAddressByIDRequest(): QueryAccountAddressByIDRequest {
  return {
    id: Long.ZERO,
    account_id: Long.UZERO
  };
}
export const QueryAccountAddressByIDRequest = {
  encode(message: QueryAccountAddressByIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }
    if (!message.account_id.isZero()) {
      writer.uint32(16).uint64(message.account_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAddressByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.int64() as Long);
          break;
        case 2:
          message.account_id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountAddressByIDRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      account_id: isSet(object.account_id) ? Long.fromValue(object.account_id) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<QueryAccountAddressByIDRequest>): QueryAccountAddressByIDRequest {
    const message = createBaseQueryAccountAddressByIDRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.ZERO;
    message.account_id = object.account_id !== undefined && object.account_id !== null ? Long.fromValue(object.account_id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryAccountAddressByIDResponse(): QueryAccountAddressByIDResponse {
  return {
    account_address: ""
  };
}
export const QueryAccountAddressByIDResponse = {
  encode(message: QueryAccountAddressByIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account_address !== "") {
      writer.uint32(10).string(message.account_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAddressByIDResponse {
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
  fromJSON(object: any): QueryAccountAddressByIDResponse {
    return {
      account_address: isSet(object.account_address) ? String(object.account_address) : ""
    };
  },
  fromPartial(object: DeepPartial<QueryAccountAddressByIDResponse>): QueryAccountAddressByIDResponse {
    const message = createBaseQueryAccountAddressByIDResponse();
    message.account_address = object.account_address ?? "";
    return message;
  }
};
function createBaseQueryAccountInfoRequest(): QueryAccountInfoRequest {
  return {
    address: ""
  };
}
export const QueryAccountInfoRequest = {
  encode(message: QueryAccountInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountInfoRequest {
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
  fromJSON(object: any): QueryAccountInfoRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: DeepPartial<QueryAccountInfoRequest>): QueryAccountInfoRequest {
    const message = createBaseQueryAccountInfoRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryAccountInfoResponse(): QueryAccountInfoResponse {
  return {
    info: BaseAccount.fromPartial({})
  };
}
export const QueryAccountInfoResponse = {
  encode(message: QueryAccountInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      BaseAccount.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountInfoResponse {
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
  fromJSON(object: any): QueryAccountInfoResponse {
    return {
      info: isSet(object.info) ? BaseAccount.fromJSON(object.info) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAccountInfoResponse>): QueryAccountInfoResponse {
    const message = createBaseQueryAccountInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? BaseAccount.fromPartial(object.info) : undefined;
    return message;
  }
};