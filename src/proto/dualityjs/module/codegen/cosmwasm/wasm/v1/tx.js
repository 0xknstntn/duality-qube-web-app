import { AccessConfig, Params } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgStoreCode submit Wasm code to the system */

/** MsgStoreCodeResponse returns store result data. */

/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */

/** MsgInstantiateContractResponse return instantiation result data */

/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */

/** MsgInstantiateContract2Response return instantiation result data */

/** MsgExecuteContract submits the given message data to a smart contract */

/** MsgExecuteContractResponse returns execution result data. */

/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */

/** MsgMigrateContractResponse returns contract migration result data. */

/** MsgUpdateAdmin sets a new admin for a smart contract */

/** MsgUpdateAdminResponse returns empty data */

/** MsgClearAdmin removes any admin stored for a smart contract */

/** MsgClearAdminResponse returns empty data */

/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */

/** MsgUpdateInstantiateConfigResponse returns empty data */

/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 * 
 * Since: 0.40
 */

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: 0.40
 */

/**
 * MsgSudoContract is the MsgSudoContract request type.
 * 
 * Since: 0.40
 */

/**
 * MsgSudoContractResponse defines the response structure for executing a
 * MsgSudoContract message.
 * 
 * Since: 0.40
 */

/**
 * MsgPinCodes is the MsgPinCodes request type.
 * 
 * Since: 0.40
 */

/**
 * MsgPinCodesResponse defines the response structure for executing a
 * MsgPinCodes message.
 * 
 * Since: 0.40
 */

/**
 * MsgUnpinCodes is the MsgUnpinCodes request type.
 * 
 * Since: 0.40
 */

/**
 * MsgUnpinCodesResponse defines the response structure for executing a
 * MsgUnpinCodes message.
 * 
 * Since: 0.40
 */

/**
 * MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
 * request type.
 * 
 * Since: 0.40
 */

/**
 * MsgStoreAndInstantiateContractResponse defines the response structure
 * for executing a MsgStoreAndInstantiateContract message.
 * 
 * Since: 0.40
 */

/**
 * MsgAddCodeUploadParamsAddresses is the
 * MsgAddCodeUploadParamsAddresses request type.
 */

/**
 * MsgAddCodeUploadParamsAddressesResponse defines the response
 * structure for executing a MsgAddCodeUploadParamsAddresses message.
 */

/**
 * MsgRemoveCodeUploadParamsAddresses is the
 * MsgRemoveCodeUploadParamsAddresses request type.
 */

/**
 * MsgRemoveCodeUploadParamsAddressesResponse defines the response
 * structure for executing a MsgRemoveCodeUploadParamsAddresses message.
 */

/**
 * MsgStoreAndMigrateContract is the MsgStoreAndMigrateContract
 * request type.
 * 
 * Since: 0.42
 */

/**
 * MsgStoreAndMigrateContractResponse defines the response structure
 * for executing a MsgStoreAndMigrateContract message.
 * 
 * Since: 0.42
 */

/** MsgUpdateContractLabel sets a new label for a smart contract */

/** MsgUpdateContractLabelResponse returns empty data */

function createBaseMsgStoreCode() {
  return {
    sender: "",
    wasm_byte_code: new Uint8Array(),
    instantiate_permission: AccessConfig.fromPartial({})
  };
}
export const MsgStoreCode = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(18).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wasm_byte_code = reader.bytes();
          break;
        case 5:
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      wasm_byte_code: isSet(object.wasm_byte_code) ? bytesFromBase64(object.wasm_byte_code) : new Uint8Array(),
      instantiate_permission: isSet(object.instantiate_permission) ? AccessConfig.fromJSON(object.instantiate_permission) : undefined
    };
  },
  fromPartial(object) {
    var _object$sender, _object$wasm_byte_cod;
    const message = createBaseMsgStoreCode();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.wasm_byte_code = (_object$wasm_byte_cod = object.wasm_byte_code) !== null && _object$wasm_byte_cod !== void 0 ? _object$wasm_byte_cod : new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    return message;
  }
};
function createBaseMsgStoreCodeResponse() {
  return {
    code_id: Long.UZERO,
    checksum: new Uint8Array()
  };
}
export const MsgStoreCodeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.code_id.isZero()) {
      writer.uint32(8).uint64(message.code_id);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;
        case 2:
          message.checksum = reader.bytes();
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
      code_id: isSet(object.code_id) ? Long.fromValue(object.code_id) : Long.UZERO,
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$checksum;
    const message = createBaseMsgStoreCodeResponse();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.checksum = (_object$checksum = object.checksum) !== null && _object$checksum !== void 0 ? _object$checksum : new Uint8Array();
    return message;
  }
};
function createBaseMsgInstantiateContract() {
  return {
    sender: "",
    admin: "",
    code_id: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const MsgInstantiateContract = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(24).uint64(message.code_id);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.code_id = reader.uint64();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      code_id: isSet(object.code_id) ? Long.fromValue(object.code_id) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$sender2, _object$admin, _object$label, _object$msg, _object$funds;
    const message = createBaseMsgInstantiateContract();
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.label = (_object$label = object.label) !== null && _object$label !== void 0 ? _object$label : "";
    message.msg = (_object$msg = object.msg) !== null && _object$msg !== void 0 ? _object$msg : new Uint8Array();
    message.funds = ((_object$funds = object.funds) === null || _object$funds === void 0 ? void 0 : _object$funds.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgInstantiateContractResponse() {
  return {
    address: "",
    data: new Uint8Array()
  };
}
export const MsgInstantiateContractResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$address, _object$data;
    const message = createBaseMsgInstantiateContractResponse();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    return message;
  }
};
function createBaseMsgInstantiateContract2() {
  return {
    sender: "",
    admin: "",
    code_id: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fix_msg: false
  };
}
export const MsgInstantiateContract2 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(24).uint64(message.code_id);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(50).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(58).bytes(message.salt);
    }
    if (message.fix_msg === true) {
      writer.uint32(64).bool(message.fix_msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.code_id = reader.uint64();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.salt = reader.bytes();
          break;
        case 8:
          message.fix_msg = reader.bool();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      code_id: isSet(object.code_id) ? Long.fromValue(object.code_id) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(e => Coin.fromJSON(e)) : [],
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      fix_msg: isSet(object.fix_msg) ? Boolean(object.fix_msg) : false
    };
  },
  fromPartial(object) {
    var _object$sender3, _object$admin2, _object$label2, _object$msg2, _object$funds2, _object$salt, _object$fix_msg;
    const message = createBaseMsgInstantiateContract2();
    message.sender = (_object$sender3 = object.sender) !== null && _object$sender3 !== void 0 ? _object$sender3 : "";
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.label = (_object$label2 = object.label) !== null && _object$label2 !== void 0 ? _object$label2 : "";
    message.msg = (_object$msg2 = object.msg) !== null && _object$msg2 !== void 0 ? _object$msg2 : new Uint8Array();
    message.funds = ((_object$funds2 = object.funds) === null || _object$funds2 === void 0 ? void 0 : _object$funds2.map(e => Coin.fromPartial(e))) || [];
    message.salt = (_object$salt = object.salt) !== null && _object$salt !== void 0 ? _object$salt : new Uint8Array();
    message.fix_msg = (_object$fix_msg = object.fix_msg) !== null && _object$fix_msg !== void 0 ? _object$fix_msg : false;
    return message;
  }
};
function createBaseMsgInstantiateContract2Response() {
  return {
    address: "",
    data: new Uint8Array()
  };
}
export const MsgInstantiateContract2Response = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$address2, _object$data2;
    const message = createBaseMsgInstantiateContract2Response();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    return message;
  }
};
function createBaseMsgExecuteContract() {
  return {
    sender: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const MsgExecuteContract = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.msg = reader.bytes();
          break;
        case 5:
          message.funds.push(Coin.decode(reader, reader.uint32()));
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$sender4, _object$contract, _object$msg3, _object$funds3;
    const message = createBaseMsgExecuteContract();
    message.sender = (_object$sender4 = object.sender) !== null && _object$sender4 !== void 0 ? _object$sender4 : "";
    message.contract = (_object$contract = object.contract) !== null && _object$contract !== void 0 ? _object$contract : "";
    message.msg = (_object$msg3 = object.msg) !== null && _object$msg3 !== void 0 ? _object$msg3 : new Uint8Array();
    message.funds = ((_object$funds3 = object.funds) === null || _object$funds3 === void 0 ? void 0 : _object$funds3.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgExecuteContractResponse() {
  return {
    data: new Uint8Array()
  };
}
export const MsgExecuteContractResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$data3;
    const message = createBaseMsgExecuteContractResponse();
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    return message;
  }
};
function createBaseMsgMigrateContract() {
  return {
    sender: "",
    contract: "",
    code_id: Long.UZERO,
    msg: new Uint8Array()
  };
}
export const MsgMigrateContract = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(24).uint64(message.code_id);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.code_id = reader.uint64();
          break;
        case 4:
          message.msg = reader.bytes();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      code_id: isSet(object.code_id) ? Long.fromValue(object.code_id) : Long.UZERO,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$sender5, _object$contract2, _object$msg4;
    const message = createBaseMsgMigrateContract();
    message.sender = (_object$sender5 = object.sender) !== null && _object$sender5 !== void 0 ? _object$sender5 : "";
    message.contract = (_object$contract2 = object.contract) !== null && _object$contract2 !== void 0 ? _object$contract2 : "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.msg = (_object$msg4 = object.msg) !== null && _object$msg4 !== void 0 ? _object$msg4 : new Uint8Array();
    return message;
  }
};
function createBaseMsgMigrateContractResponse() {
  return {
    data: new Uint8Array()
  };
}
export const MsgMigrateContractResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$data4;
    const message = createBaseMsgMigrateContractResponse();
    message.data = (_object$data4 = object.data) !== null && _object$data4 !== void 0 ? _object$data4 : new Uint8Array();
    return message;
  }
};
function createBaseMsgUpdateAdmin() {
  return {
    sender: "",
    new_admin: "",
    contract: ""
  };
}
export const MsgUpdateAdmin = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.new_admin !== "") {
      writer.uint32(18).string(message.new_admin);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.new_admin = reader.string();
          break;
        case 3:
          message.contract = reader.string();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      new_admin: isSet(object.new_admin) ? String(object.new_admin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object) {
    var _object$sender6, _object$new_admin, _object$contract3;
    const message = createBaseMsgUpdateAdmin();
    message.sender = (_object$sender6 = object.sender) !== null && _object$sender6 !== void 0 ? _object$sender6 : "";
    message.new_admin = (_object$new_admin = object.new_admin) !== null && _object$new_admin !== void 0 ? _object$new_admin : "";
    message.contract = (_object$contract3 = object.contract) !== null && _object$contract3 !== void 0 ? _object$contract3 : "";
    return message;
  }
};
function createBaseMsgUpdateAdminResponse() {
  return {};
}
export const MsgUpdateAdminResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdminResponse();
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
    const message = createBaseMsgUpdateAdminResponse();
    return message;
  }
};
function createBaseMsgClearAdmin() {
  return {
    sender: "",
    contract: ""
  };
}
export const MsgClearAdmin = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 3:
          message.contract = reader.string();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object) {
    var _object$sender7, _object$contract4;
    const message = createBaseMsgClearAdmin();
    message.sender = (_object$sender7 = object.sender) !== null && _object$sender7 !== void 0 ? _object$sender7 : "";
    message.contract = (_object$contract4 = object.contract) !== null && _object$contract4 !== void 0 ? _object$contract4 : "";
    return message;
  }
};
function createBaseMsgClearAdminResponse() {
  return {};
}
export const MsgClearAdminResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdminResponse();
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
    const message = createBaseMsgClearAdminResponse();
    return message;
  }
};
function createBaseMsgUpdateInstantiateConfig() {
  return {
    sender: "",
    code_id: Long.UZERO,
    new_instantiate_permission: AccessConfig.fromPartial({})
  };
}
export const MsgUpdateInstantiateConfig = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(16).uint64(message.code_id);
    }
    if (message.new_instantiate_permission !== undefined) {
      AccessConfig.encode(message.new_instantiate_permission, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInstantiateConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.code_id = reader.uint64();
          break;
        case 3:
          message.new_instantiate_permission = AccessConfig.decode(reader, reader.uint32());
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      code_id: isSet(object.code_id) ? Long.fromValue(object.code_id) : Long.UZERO,
      new_instantiate_permission: isSet(object.new_instantiate_permission) ? AccessConfig.fromJSON(object.new_instantiate_permission) : undefined
    };
  },
  fromPartial(object) {
    var _object$sender8;
    const message = createBaseMsgUpdateInstantiateConfig();
    message.sender = (_object$sender8 = object.sender) !== null && _object$sender8 !== void 0 ? _object$sender8 : "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.new_instantiate_permission = object.new_instantiate_permission !== undefined && object.new_instantiate_permission !== null ? AccessConfig.fromPartial(object.new_instantiate_permission) : undefined;
    return message;
  }
};
function createBaseMsgUpdateInstantiateConfigResponse() {
  return {};
}
export const MsgUpdateInstantiateConfigResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInstantiateConfigResponse();
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
    const message = createBaseMsgUpdateInstantiateConfigResponse();
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
function createBaseMsgSudoContract() {
  return {
    authority: "",
    contract: "",
    msg: new Uint8Array()
  };
}
export const MsgSudoContract = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSudoContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.msg = reader.bytes();
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
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$authority2, _object$contract5, _object$msg5;
    const message = createBaseMsgSudoContract();
    message.authority = (_object$authority2 = object.authority) !== null && _object$authority2 !== void 0 ? _object$authority2 : "";
    message.contract = (_object$contract5 = object.contract) !== null && _object$contract5 !== void 0 ? _object$contract5 : "";
    message.msg = (_object$msg5 = object.msg) !== null && _object$msg5 !== void 0 ? _object$msg5 : new Uint8Array();
    return message;
  }
};
function createBaseMsgSudoContractResponse() {
  return {
    data: new Uint8Array()
  };
}
export const MsgSudoContractResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSudoContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$data5;
    const message = createBaseMsgSudoContractResponse();
    message.data = (_object$data5 = object.data) !== null && _object$data5 !== void 0 ? _object$data5 : new Uint8Array();
    return message;
  }
};
function createBaseMsgPinCodes() {
  return {
    authority: "",
    code_ids: []
  };
}
export const MsgPinCodes = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    writer.uint32(18).fork();
    for (const v of message.code_ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPinCodes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.code_ids.push(reader.uint64());
            }
          } else {
            message.code_ids.push(reader.uint64());
          }
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
      code_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.code_ids) ? object.code_ids.map(e => Long.fromValue(e)) : []
    };
  },
  fromPartial(object) {
    var _object$authority3, _object$code_ids;
    const message = createBaseMsgPinCodes();
    message.authority = (_object$authority3 = object.authority) !== null && _object$authority3 !== void 0 ? _object$authority3 : "";
    message.code_ids = ((_object$code_ids = object.code_ids) === null || _object$code_ids === void 0 ? void 0 : _object$code_ids.map(e => Long.fromValue(e))) || [];
    return message;
  }
};
function createBaseMsgPinCodesResponse() {
  return {};
}
export const MsgPinCodesResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPinCodesResponse();
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
    const message = createBaseMsgPinCodesResponse();
    return message;
  }
};
function createBaseMsgUnpinCodes() {
  return {
    authority: "",
    code_ids: []
  };
}
export const MsgUnpinCodes = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    writer.uint32(18).fork();
    for (const v of message.code_ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinCodes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.code_ids.push(reader.uint64());
            }
          } else {
            message.code_ids.push(reader.uint64());
          }
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
      code_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.code_ids) ? object.code_ids.map(e => Long.fromValue(e)) : []
    };
  },
  fromPartial(object) {
    var _object$authority4, _object$code_ids2;
    const message = createBaseMsgUnpinCodes();
    message.authority = (_object$authority4 = object.authority) !== null && _object$authority4 !== void 0 ? _object$authority4 : "";
    message.code_ids = ((_object$code_ids2 = object.code_ids) === null || _object$code_ids2 === void 0 ? void 0 : _object$code_ids2.map(e => Long.fromValue(e))) || [];
    return message;
  }
};
function createBaseMsgUnpinCodesResponse() {
  return {};
}
export const MsgUnpinCodesResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinCodesResponse();
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
    const message = createBaseMsgUnpinCodesResponse();
    return message;
  }
};
function createBaseMsgStoreAndInstantiateContract() {
  return {
    authority: "",
    wasm_byte_code: new Uint8Array(),
    instantiate_permission: AccessConfig.fromPartial({}),
    unpin_code: false,
    admin: "",
    label: "",
    msg: new Uint8Array(),
    funds: [],
    source: "",
    builder: "",
    code_hash: new Uint8Array()
  };
}
export const MsgStoreAndInstantiateContract = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(26).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(34).fork()).ldelim();
    }
    if (message.unpin_code === true) {
      writer.uint32(40).bool(message.unpin_code);
    }
    if (message.admin !== "") {
      writer.uint32(50).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(58).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(66).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(74).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(82).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(90).string(message.builder);
    }
    if (message.code_hash.length !== 0) {
      writer.uint32(98).bytes(message.code_hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreAndInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.wasm_byte_code = reader.bytes();
          break;
        case 4:
          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 5:
          message.unpin_code = reader.bool();
          break;
        case 6:
          message.admin = reader.string();
          break;
        case 7:
          message.label = reader.string();
          break;
        case 8:
          message.msg = reader.bytes();
          break;
        case 9:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.source = reader.string();
          break;
        case 11:
          message.builder = reader.string();
          break;
        case 12:
          message.code_hash = reader.bytes();
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
      wasm_byte_code: isSet(object.wasm_byte_code) ? bytesFromBase64(object.wasm_byte_code) : new Uint8Array(),
      instantiate_permission: isSet(object.instantiate_permission) ? AccessConfig.fromJSON(object.instantiate_permission) : undefined,
      unpin_code: isSet(object.unpin_code) ? Boolean(object.unpin_code) : false,
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(e => Coin.fromJSON(e)) : [],
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      code_hash: isSet(object.code_hash) ? bytesFromBase64(object.code_hash) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$authority5, _object$wasm_byte_cod2, _object$unpin_code, _object$admin3, _object$label3, _object$msg6, _object$funds4, _object$source, _object$builder, _object$code_hash;
    const message = createBaseMsgStoreAndInstantiateContract();
    message.authority = (_object$authority5 = object.authority) !== null && _object$authority5 !== void 0 ? _object$authority5 : "";
    message.wasm_byte_code = (_object$wasm_byte_cod2 = object.wasm_byte_code) !== null && _object$wasm_byte_cod2 !== void 0 ? _object$wasm_byte_cod2 : new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    message.unpin_code = (_object$unpin_code = object.unpin_code) !== null && _object$unpin_code !== void 0 ? _object$unpin_code : false;
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    message.label = (_object$label3 = object.label) !== null && _object$label3 !== void 0 ? _object$label3 : "";
    message.msg = (_object$msg6 = object.msg) !== null && _object$msg6 !== void 0 ? _object$msg6 : new Uint8Array();
    message.funds = ((_object$funds4 = object.funds) === null || _object$funds4 === void 0 ? void 0 : _object$funds4.map(e => Coin.fromPartial(e))) || [];
    message.source = (_object$source = object.source) !== null && _object$source !== void 0 ? _object$source : "";
    message.builder = (_object$builder = object.builder) !== null && _object$builder !== void 0 ? _object$builder : "";
    message.code_hash = (_object$code_hash = object.code_hash) !== null && _object$code_hash !== void 0 ? _object$code_hash : new Uint8Array();
    return message;
  }
};
function createBaseMsgStoreAndInstantiateContractResponse() {
  return {
    address: "",
    data: new Uint8Array()
  };
}
export const MsgStoreAndInstantiateContractResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreAndInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$address3, _object$data6;
    const message = createBaseMsgStoreAndInstantiateContractResponse();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.data = (_object$data6 = object.data) !== null && _object$data6 !== void 0 ? _object$data6 : new Uint8Array();
    return message;
  }
};
function createBaseMsgAddCodeUploadParamsAddresses() {
  return {
    authority: "",
    addresses: []
  };
}
export const MsgAddCodeUploadParamsAddresses = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCodeUploadParamsAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
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
      addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$authority6, _object$addresses;
    const message = createBaseMsgAddCodeUploadParamsAddresses();
    message.authority = (_object$authority6 = object.authority) !== null && _object$authority6 !== void 0 ? _object$authority6 : "";
    message.addresses = ((_object$addresses = object.addresses) === null || _object$addresses === void 0 ? void 0 : _object$addresses.map(e => e)) || [];
    return message;
  }
};
function createBaseMsgAddCodeUploadParamsAddressesResponse() {
  return {};
}
export const MsgAddCodeUploadParamsAddressesResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCodeUploadParamsAddressesResponse();
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
    const message = createBaseMsgAddCodeUploadParamsAddressesResponse();
    return message;
  }
};
function createBaseMsgRemoveCodeUploadParamsAddresses() {
  return {
    authority: "",
    addresses: []
  };
}
export const MsgRemoveCodeUploadParamsAddresses = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCodeUploadParamsAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
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
      addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map(e => String(e)) : []
    };
  },
  fromPartial(object) {
    var _object$authority7, _object$addresses2;
    const message = createBaseMsgRemoveCodeUploadParamsAddresses();
    message.authority = (_object$authority7 = object.authority) !== null && _object$authority7 !== void 0 ? _object$authority7 : "";
    message.addresses = ((_object$addresses2 = object.addresses) === null || _object$addresses2 === void 0 ? void 0 : _object$addresses2.map(e => e)) || [];
    return message;
  }
};
function createBaseMsgRemoveCodeUploadParamsAddressesResponse() {
  return {};
}
export const MsgRemoveCodeUploadParamsAddressesResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCodeUploadParamsAddressesResponse();
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
    const message = createBaseMsgRemoveCodeUploadParamsAddressesResponse();
    return message;
  }
};
function createBaseMsgStoreAndMigrateContract() {
  return {
    authority: "",
    wasm_byte_code: new Uint8Array(),
    instantiate_permission: AccessConfig.fromPartial({}),
    contract: "",
    msg: new Uint8Array()
  };
}
export const MsgStoreAndMigrateContract = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(18).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(26).fork()).ldelim();
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreAndMigrateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.wasm_byte_code = reader.bytes();
          break;
        case 3:
          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
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
      wasm_byte_code: isSet(object.wasm_byte_code) ? bytesFromBase64(object.wasm_byte_code) : new Uint8Array(),
      instantiate_permission: isSet(object.instantiate_permission) ? AccessConfig.fromJSON(object.instantiate_permission) : undefined,
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$authority8, _object$wasm_byte_cod3, _object$contract6, _object$msg7;
    const message = createBaseMsgStoreAndMigrateContract();
    message.authority = (_object$authority8 = object.authority) !== null && _object$authority8 !== void 0 ? _object$authority8 : "";
    message.wasm_byte_code = (_object$wasm_byte_cod3 = object.wasm_byte_code) !== null && _object$wasm_byte_cod3 !== void 0 ? _object$wasm_byte_cod3 : new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    message.contract = (_object$contract6 = object.contract) !== null && _object$contract6 !== void 0 ? _object$contract6 : "";
    message.msg = (_object$msg7 = object.msg) !== null && _object$msg7 !== void 0 ? _object$msg7 : new Uint8Array();
    return message;
  }
};
function createBaseMsgStoreAndMigrateContractResponse() {
  return {
    code_id: Long.UZERO,
    checksum: new Uint8Array(),
    data: new Uint8Array()
  };
}
export const MsgStoreAndMigrateContractResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.code_id.isZero()) {
      writer.uint32(8).uint64(message.code_id);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreAndMigrateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;
        case 2:
          message.checksum = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
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
      code_id: isSet(object.code_id) ? Long.fromValue(object.code_id) : Long.UZERO,
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$checksum2, _object$data7;
    const message = createBaseMsgStoreAndMigrateContractResponse();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.checksum = (_object$checksum2 = object.checksum) !== null && _object$checksum2 !== void 0 ? _object$checksum2 : new Uint8Array();
    message.data = (_object$data7 = object.data) !== null && _object$data7 !== void 0 ? _object$data7 : new Uint8Array();
    return message;
  }
};
function createBaseMsgUpdateContractLabel() {
  return {
    sender: "",
    new_label: "",
    contract: ""
  };
}
export const MsgUpdateContractLabel = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.new_label !== "") {
      writer.uint32(18).string(message.new_label);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateContractLabel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.new_label = reader.string();
          break;
        case 3:
          message.contract = reader.string();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      new_label: isSet(object.new_label) ? String(object.new_label) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object) {
    var _object$sender9, _object$new_label, _object$contract7;
    const message = createBaseMsgUpdateContractLabel();
    message.sender = (_object$sender9 = object.sender) !== null && _object$sender9 !== void 0 ? _object$sender9 : "";
    message.new_label = (_object$new_label = object.new_label) !== null && _object$new_label !== void 0 ? _object$new_label : "";
    message.contract = (_object$contract7 = object.contract) !== null && _object$contract7 !== void 0 ? _object$contract7 : "";
    return message;
  }
};
function createBaseMsgUpdateContractLabelResponse() {
  return {};
}
export const MsgUpdateContractLabelResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateContractLabelResponse();
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
    const message = createBaseMsgUpdateContractLabelResponse();
    return message;
  }
};