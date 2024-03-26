import { Any } from "../../../google/protobuf/any";
import { signModeFromJSON } from "../signing/v1beta1/signing";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig";
import { Coin } from "../../base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Tx is the standard type used for broadcasting transactions. */

/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 */

/** SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT. */

/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 * 
 * Since: cosmos-sdk 0.46
 */

/** TxBody is the body of a transaction that all signers sign over. */

/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 */

/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 */

/** ModeInfo describes the signing mode of a single or nested multisig signer. */

/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 */

/** Multi is the mode info for a multisig public key */

/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 */

/**
 * Tip is the tip used for meta-transactions.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 * 
 * Since: cosmos-sdk 0.46
 */

function createBaseTx() {
  return {
    body: TxBody.fromPartial({}),
    auth_info: AuthInfo.fromPartial({}),
    signatures: []
  };
}
export const Tx = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.body !== undefined) {
      TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.auth_info !== undefined) {
      AuthInfo.encode(message.auth_info, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = TxBody.decode(reader, reader.uint32());
          break;
        case 2:
          message.auth_info = AuthInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.signatures.push(reader.bytes());
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
      body: isSet(object.body) ? TxBody.fromJSON(object.body) : undefined,
      auth_info: isSet(object.auth_info) ? AuthInfo.fromJSON(object.auth_info) : undefined,
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(e => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object) {
    var _object$signatures;
    const message = createBaseTx();
    message.body = object.body !== undefined && object.body !== null ? TxBody.fromPartial(object.body) : undefined;
    message.auth_info = object.auth_info !== undefined && object.auth_info !== null ? AuthInfo.fromPartial(object.auth_info) : undefined;
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map(e => e)) || [];
    return message;
  }
};
function createBaseTxRaw() {
  return {
    body_bytes: new Uint8Array(),
    auth_info_bytes: new Uint8Array(),
    signatures: []
  };
}
export const TxRaw = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.body_bytes.length !== 0) {
      writer.uint32(10).bytes(message.body_bytes);
    }
    if (message.auth_info_bytes.length !== 0) {
      writer.uint32(18).bytes(message.auth_info_bytes);
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxRaw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body_bytes = reader.bytes();
          break;
        case 2:
          message.auth_info_bytes = reader.bytes();
          break;
        case 3:
          message.signatures.push(reader.bytes());
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
      body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(),
      auth_info_bytes: isSet(object.auth_info_bytes) ? bytesFromBase64(object.auth_info_bytes) : new Uint8Array(),
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(e => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object) {
    var _object$body_bytes, _object$auth_info_byt, _object$signatures2;
    const message = createBaseTxRaw();
    message.body_bytes = (_object$body_bytes = object.body_bytes) !== null && _object$body_bytes !== void 0 ? _object$body_bytes : new Uint8Array();
    message.auth_info_bytes = (_object$auth_info_byt = object.auth_info_bytes) !== null && _object$auth_info_byt !== void 0 ? _object$auth_info_byt : new Uint8Array();
    message.signatures = ((_object$signatures2 = object.signatures) === null || _object$signatures2 === void 0 ? void 0 : _object$signatures2.map(e => e)) || [];
    return message;
  }
};
function createBaseSignDoc() {
  return {
    body_bytes: new Uint8Array(),
    auth_info_bytes: new Uint8Array(),
    chain_id: "",
    account_number: Long.UZERO
  };
}
export const SignDoc = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.body_bytes.length !== 0) {
      writer.uint32(10).bytes(message.body_bytes);
    }
    if (message.auth_info_bytes.length !== 0) {
      writer.uint32(18).bytes(message.auth_info_bytes);
    }
    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }
    if (!message.account_number.isZero()) {
      writer.uint32(32).uint64(message.account_number);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body_bytes = reader.bytes();
          break;
        case 2:
          message.auth_info_bytes = reader.bytes();
          break;
        case 3:
          message.chain_id = reader.string();
          break;
        case 4:
          message.account_number = reader.uint64();
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
      body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(),
      auth_info_bytes: isSet(object.auth_info_bytes) ? bytesFromBase64(object.auth_info_bytes) : new Uint8Array(),
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      account_number: isSet(object.account_number) ? Long.fromValue(object.account_number) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$body_bytes2, _object$auth_info_byt2, _object$chain_id;
    const message = createBaseSignDoc();
    message.body_bytes = (_object$body_bytes2 = object.body_bytes) !== null && _object$body_bytes2 !== void 0 ? _object$body_bytes2 : new Uint8Array();
    message.auth_info_bytes = (_object$auth_info_byt2 = object.auth_info_bytes) !== null && _object$auth_info_byt2 !== void 0 ? _object$auth_info_byt2 : new Uint8Array();
    message.chain_id = (_object$chain_id = object.chain_id) !== null && _object$chain_id !== void 0 ? _object$chain_id : "";
    message.account_number = object.account_number !== undefined && object.account_number !== null ? Long.fromValue(object.account_number) : Long.UZERO;
    return message;
  }
};
function createBaseSignDocDirectAux() {
  return {
    body_bytes: new Uint8Array(),
    public_key: Any.fromPartial({}),
    chain_id: "",
    account_number: Long.UZERO,
    sequence: Long.UZERO,
    tip: Tip.fromPartial({})
  };
}
export const SignDocDirectAux = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.body_bytes.length !== 0) {
      writer.uint32(10).bytes(message.body_bytes);
    }
    if (message.public_key !== undefined) {
      Any.encode(message.public_key, writer.uint32(18).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }
    if (!message.account_number.isZero()) {
      writer.uint32(32).uint64(message.account_number);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(40).uint64(message.sequence);
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignDocDirectAux();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body_bytes = reader.bytes();
          break;
        case 2:
          message.public_key = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.chain_id = reader.string();
          break;
        case 4:
          message.account_number = reader.uint64();
          break;
        case 5:
          message.sequence = reader.uint64();
          break;
        case 6:
          message.tip = Tip.decode(reader, reader.uint32());
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
      body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(),
      public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      account_number: isSet(object.account_number) ? Long.fromValue(object.account_number) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      tip: isSet(object.tip) ? Tip.fromJSON(object.tip) : undefined
    };
  },
  fromPartial(object) {
    var _object$body_bytes3, _object$chain_id2;
    const message = createBaseSignDocDirectAux();
    message.body_bytes = (_object$body_bytes3 = object.body_bytes) !== null && _object$body_bytes3 !== void 0 ? _object$body_bytes3 : new Uint8Array();
    message.public_key = object.public_key !== undefined && object.public_key !== null ? Any.fromPartial(object.public_key) : undefined;
    message.chain_id = (_object$chain_id2 = object.chain_id) !== null && _object$chain_id2 !== void 0 ? _object$chain_id2 : "";
    message.account_number = object.account_number !== undefined && object.account_number !== null ? Long.fromValue(object.account_number) : Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
    return message;
  }
};
function createBaseTxBody() {
  return {
    messages: [],
    memo: "",
    timeout_height: Long.UZERO,
    extension_options: [],
    non_critical_extension_options: []
  };
}
export const TxBody = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.messages) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    if (!message.timeout_height.isZero()) {
      writer.uint32(24).uint64(message.timeout_height);
    }
    for (const v of message.extension_options) {
      Any.encode(v, writer.uint32(8186).fork()).ldelim();
    }
    for (const v of message.non_critical_extension_options) {
      Any.encode(v, writer.uint32(16378).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.memo = reader.string();
          break;
        case 3:
          message.timeout_height = reader.uint64();
          break;
        case 1023:
          message.extension_options.push(Any.decode(reader, reader.uint32()));
          break;
        case 2047:
          message.non_critical_extension_options.push(Any.decode(reader, reader.uint32()));
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
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(e => Any.fromJSON(e)) : [],
      memo: isSet(object.memo) ? String(object.memo) : "",
      timeout_height: isSet(object.timeout_height) ? Long.fromValue(object.timeout_height) : Long.UZERO,
      extension_options: Array.isArray(object === null || object === void 0 ? void 0 : object.extension_options) ? object.extension_options.map(e => Any.fromJSON(e)) : [],
      non_critical_extension_options: Array.isArray(object === null || object === void 0 ? void 0 : object.non_critical_extension_options) ? object.non_critical_extension_options.map(e => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$messages, _object$memo, _object$extension_opt, _object$non_critical_;
    const message = createBaseTxBody();
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(e => Any.fromPartial(e))) || [];
    message.memo = (_object$memo = object.memo) !== null && _object$memo !== void 0 ? _object$memo : "";
    message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? Long.fromValue(object.timeout_height) : Long.UZERO;
    message.extension_options = ((_object$extension_opt = object.extension_options) === null || _object$extension_opt === void 0 ? void 0 : _object$extension_opt.map(e => Any.fromPartial(e))) || [];
    message.non_critical_extension_options = ((_object$non_critical_ = object.non_critical_extension_options) === null || _object$non_critical_ === void 0 ? void 0 : _object$non_critical_.map(e => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAuthInfo() {
  return {
    signer_infos: [],
    fee: Fee.fromPartial({}),
    tip: Tip.fromPartial({})
  };
}
export const AuthInfo = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.signer_infos) {
      SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer_infos.push(SignerInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 3:
          message.tip = Tip.decode(reader, reader.uint32());
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
      signer_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.signer_infos) ? object.signer_infos.map(e => SignerInfo.fromJSON(e)) : [],
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      tip: isSet(object.tip) ? Tip.fromJSON(object.tip) : undefined
    };
  },
  fromPartial(object) {
    var _object$signer_infos;
    const message = createBaseAuthInfo();
    message.signer_infos = ((_object$signer_infos = object.signer_infos) === null || _object$signer_infos === void 0 ? void 0 : _object$signer_infos.map(e => SignerInfo.fromPartial(e))) || [];
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
    return message;
  }
};
function createBaseSignerInfo() {
  return {
    public_key: Any.fromPartial({}),
    mode_info: ModeInfo.fromPartial({}),
    sequence: Long.UZERO
  };
}
export const SignerInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.public_key !== undefined) {
      Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.mode_info !== undefined) {
      ModeInfo.encode(message.mode_info, writer.uint32(18).fork()).ldelim();
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.public_key = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.mode_info = ModeInfo.decode(reader, reader.uint32());
          break;
        case 3:
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
      public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
      mode_info: isSet(object.mode_info) ? ModeInfo.fromJSON(object.mode_info) : undefined,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },
  fromPartial(object) {
    const message = createBaseSignerInfo();
    message.public_key = object.public_key !== undefined && object.public_key !== null ? Any.fromPartial(object.public_key) : undefined;
    message.mode_info = object.mode_info !== undefined && object.mode_info !== null ? ModeInfo.fromPartial(object.mode_info) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }
};
function createBaseModeInfo() {
  return {
    single: undefined,
    multi: undefined
  };
}
export const ModeInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.single !== undefined) {
      ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = ModeInfo_Single.decode(reader, reader.uint32());
          break;
        case 2:
          message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
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
      single: isSet(object.single) ? ModeInfo_Single.fromJSON(object.single) : undefined,
      multi: isSet(object.multi) ? ModeInfo_Multi.fromJSON(object.multi) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseModeInfo();
    message.single = object.single !== undefined && object.single !== null ? ModeInfo_Single.fromPartial(object.single) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? ModeInfo_Multi.fromPartial(object.multi) : undefined;
    return message;
  }
};
function createBaseModeInfo_Single() {
  return {
    mode: 0
  };
}
export const ModeInfo_Single = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo_Single();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32();
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
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : -1
    };
  },
  fromPartial(object) {
    var _object$mode;
    const message = createBaseModeInfo_Single();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    return message;
  }
};
function createBaseModeInfo_Multi() {
  return {
    bitarray: CompactBitArray.fromPartial({}),
    mode_infos: []
  };
}
export const ModeInfo_Multi = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.bitarray !== undefined) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.mode_infos) {
      ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo_Multi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          break;
        case 2:
          message.mode_infos.push(ModeInfo.decode(reader, reader.uint32()));
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
      bitarray: isSet(object.bitarray) ? CompactBitArray.fromJSON(object.bitarray) : undefined,
      mode_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.mode_infos) ? object.mode_infos.map(e => ModeInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$mode_infos;
    const message = createBaseModeInfo_Multi();
    message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
    message.mode_infos = ((_object$mode_infos = object.mode_infos) === null || _object$mode_infos === void 0 ? void 0 : _object$mode_infos.map(e => ModeInfo.fromPartial(e))) || [];
    return message;
  }
};
function createBaseFee() {
  return {
    amount: [],
    gas_limit: Long.UZERO,
    payer: "",
    granter: ""
  };
}
export const Fee = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (!message.gas_limit.isZero()) {
      writer.uint32(16).uint64(message.gas_limit);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.granter !== "") {
      writer.uint32(34).string(message.granter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.gas_limit = reader.uint64();
          break;
        case 3:
          message.payer = reader.string();
          break;
        case 4:
          message.granter = reader.string();
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
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(e => Coin.fromJSON(e)) : [],
      gas_limit: isSet(object.gas_limit) ? Long.fromValue(object.gas_limit) : Long.UZERO,
      payer: isSet(object.payer) ? String(object.payer) : "",
      granter: isSet(object.granter) ? String(object.granter) : ""
    };
  },
  fromPartial(object) {
    var _object$amount, _object$payer, _object$granter;
    const message = createBaseFee();
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(e => Coin.fromPartial(e))) || [];
    message.gas_limit = object.gas_limit !== undefined && object.gas_limit !== null ? Long.fromValue(object.gas_limit) : Long.UZERO;
    message.payer = (_object$payer = object.payer) !== null && _object$payer !== void 0 ? _object$payer : "";
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    return message;
  }
};
function createBaseTip() {
  return {
    amount: [],
    tipper: ""
  };
}
export const Tip = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.tipper !== "") {
      writer.uint32(18).string(message.tipper);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tipper = reader.string();
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
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(e => Coin.fromJSON(e)) : [],
      tipper: isSet(object.tipper) ? String(object.tipper) : ""
    };
  },
  fromPartial(object) {
    var _object$amount2, _object$tipper;
    const message = createBaseTip();
    message.amount = ((_object$amount2 = object.amount) === null || _object$amount2 === void 0 ? void 0 : _object$amount2.map(e => Coin.fromPartial(e))) || [];
    message.tipper = (_object$tipper = object.tipper) !== null && _object$tipper !== void 0 ? _object$tipper : "";
    return message;
  }
};
function createBaseAuxSignerData() {
  return {
    address: "",
    sign_doc: SignDocDirectAux.fromPartial({}),
    mode: 0,
    sig: new Uint8Array()
  };
}
export const AuxSignerData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.sign_doc !== undefined) {
      SignDocDirectAux.encode(message.sign_doc, writer.uint32(18).fork()).ldelim();
    }
    if (message.mode !== 0) {
      writer.uint32(24).int32(message.mode);
    }
    if (message.sig.length !== 0) {
      writer.uint32(34).bytes(message.sig);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxSignerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.sign_doc = SignDocDirectAux.decode(reader, reader.uint32());
          break;
        case 3:
          message.mode = reader.int32();
          break;
        case 4:
          message.sig = reader.bytes();
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
      sign_doc: isSet(object.sign_doc) ? SignDocDirectAux.fromJSON(object.sign_doc) : undefined,
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : -1,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$address, _object$mode2, _object$sig;
    const message = createBaseAuxSignerData();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.sign_doc = object.sign_doc !== undefined && object.sign_doc !== null ? SignDocDirectAux.fromPartial(object.sign_doc) : undefined;
    message.mode = (_object$mode2 = object.mode) !== null && _object$mode2 !== void 0 ? _object$mode2 : 0;
    message.sig = (_object$sig = object.sig) !== null && _object$sig !== void 0 ? _object$sig : new Uint8Array();
    return message;
  }
};