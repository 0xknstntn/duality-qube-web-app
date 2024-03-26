import { Any } from "../../../google/protobuf/any";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */

/** ModuleAccount defines an account for modules that holds coins on a pool. */

/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 * 
 * Since: cosmos-sdk 0.47
 */

/** Params defines the parameters for the auth module. */

function createBaseBaseAccount() {
  return {
    address: "",
    pub_key: Any.fromPartial({}),
    account_number: Long.UZERO,
    sequence: Long.UZERO
  };
}
export const BaseAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pub_key !== undefined) {
      Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
    }
    if (!message.account_number.isZero()) {
      writer.uint32(24).uint64(message.account_number);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pub_key = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.account_number = reader.uint64();
          break;
        case 4:
          message.sequence = reader.uint64();
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
      address: isSet(object.address) ? String(object.address) : "",
      pub_key: isSet(object.pub_key) ? Any.fromJSON(object.pub_key) : undefined,
      account_number: isSet(object.account_number) ? Long.fromValue(object.account_number) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseBaseAccount();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? Any.fromPartial(object.pub_key) : undefined;
    message.account_number = object.account_number !== undefined && object.account_number !== null ? Long.fromValue(object.account_number) : Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }
};
function createBaseModuleAccount() {
  return {
    base_account: BaseAccount.fromPartial({}),
    name: "",
    permissions: []
  };
}
export const ModuleAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.base_account !== undefined) {
      BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_account = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.permissions.push(reader.string());
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
      base_account: isSet(object.base_account) ? BaseAccount.fromJSON(object.base_account) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      permissions: Array.isArray(object === null || object === void 0 ? void 0 : object.permissions) ? object.permissions.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$name, _object$permissions;
    const message = createBaseModuleAccount();
    message.base_account = object.base_account !== undefined && object.base_account !== null ? BaseAccount.fromPartial(object.base_account) : undefined;
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.permissions = ((_object$permissions = object.permissions) === null || _object$permissions === void 0 ? void 0 : _object$permissions.map(e => e)) || [];
    return message;
  }
};
function createBaseModuleCredential() {
  return {
    module_name: "",
    derivation_keys: []
  };
}
export const ModuleCredential = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.module_name !== "") {
      writer.uint32(10).string(message.module_name);
    }
    for (const v of message.derivation_keys) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module_name = reader.string();
          break;
        case 2:
          message.derivation_keys.push(reader.bytes());
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
      module_name: isSet(object.module_name) ? String(object.module_name) : "",
      derivation_keys: Array.isArray(object === null || object === void 0 ? void 0 : object.derivation_keys) ? object.derivation_keys.map(e => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object) {
    var _object$module_name, _object$derivation_ke;
    const message = createBaseModuleCredential();
    message.module_name = (_object$module_name = object.module_name) !== null && _object$module_name !== void 0 ? _object$module_name : "";
    message.derivation_keys = ((_object$derivation_ke = object.derivation_keys) === null || _object$derivation_ke === void 0 ? void 0 : _object$derivation_ke.map(e => e)) || [];
    return message;
  }
};
function createBaseParams() {
  return {
    max_memo_characters: Long.UZERO,
    tx_sig_limit: Long.UZERO,
    tx_size_cost_per_byte: Long.UZERO,
    sig_verify_cost_ed25519: Long.UZERO,
    sig_verify_cost_secp256k1: Long.UZERO
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.max_memo_characters.isZero()) {
      writer.uint32(8).uint64(message.max_memo_characters);
    }
    if (!message.tx_sig_limit.isZero()) {
      writer.uint32(16).uint64(message.tx_sig_limit);
    }
    if (!message.tx_size_cost_per_byte.isZero()) {
      writer.uint32(24).uint64(message.tx_size_cost_per_byte);
    }
    if (!message.sig_verify_cost_ed25519.isZero()) {
      writer.uint32(32).uint64(message.sig_verify_cost_ed25519);
    }
    if (!message.sig_verify_cost_secp256k1.isZero()) {
      writer.uint32(40).uint64(message.sig_verify_cost_secp256k1);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_memo_characters = reader.uint64();
          break;
        case 2:
          message.tx_sig_limit = reader.uint64();
          break;
        case 3:
          message.tx_size_cost_per_byte = reader.uint64();
          break;
        case 4:
          message.sig_verify_cost_ed25519 = reader.uint64();
          break;
        case 5:
          message.sig_verify_cost_secp256k1 = reader.uint64();
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
      max_memo_characters: isSet(object.max_memo_characters) ? Long.fromValue(object.max_memo_characters) : Long.UZERO,
      tx_sig_limit: isSet(object.tx_sig_limit) ? Long.fromValue(object.tx_sig_limit) : Long.UZERO,
      tx_size_cost_per_byte: isSet(object.tx_size_cost_per_byte) ? Long.fromValue(object.tx_size_cost_per_byte) : Long.UZERO,
      sig_verify_cost_ed25519: isSet(object.sig_verify_cost_ed25519) ? Long.fromValue(object.sig_verify_cost_ed25519) : Long.UZERO,
      sig_verify_cost_secp256k1: isSet(object.sig_verify_cost_secp256k1) ? Long.fromValue(object.sig_verify_cost_secp256k1) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.max_memo_characters = object.max_memo_characters !== undefined && object.max_memo_characters !== null ? Long.fromValue(object.max_memo_characters) : Long.UZERO;
    message.tx_sig_limit = object.tx_sig_limit !== undefined && object.tx_sig_limit !== null ? Long.fromValue(object.tx_sig_limit) : Long.UZERO;
    message.tx_size_cost_per_byte = object.tx_size_cost_per_byte !== undefined && object.tx_size_cost_per_byte !== null ? Long.fromValue(object.tx_size_cost_per_byte) : Long.UZERO;
    message.sig_verify_cost_ed25519 = object.sig_verify_cost_ed25519 !== undefined && object.sig_verify_cost_ed25519 !== null ? Long.fromValue(object.sig_verify_cost_ed25519) : Long.UZERO;
    message.sig_verify_cost_secp256k1 = object.sig_verify_cost_secp256k1 !== undefined && object.sig_verify_cost_secp256k1 !== null ? Long.fromValue(object.sig_verify_cost_secp256k1) : Long.UZERO;
    return message;
  }
};