import { AccessConfig } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreCodeProposal. To submit WASM code to the system,
 * a simple MsgStoreCode can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContractProposal. To instantiate a contract,
 * a simple MsgInstantiateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContract2Proposal. To instantiate contract 2,
 * a simple MsgInstantiateContract2 can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit MigrateContractProposal. To migrate a contract,
 * a simple MsgMigrateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit SudoContractProposal. To call sudo on a contract,
 * a simple MsgSudoContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ExecuteContractProposal. To call execute on a contract,
 * a simple MsgExecuteContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateAdminProposal. To set an admin for a contract,
 * a simple MsgUpdateAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ClearAdminProposal. To clear the admin of a contract,
 * a simple MsgClearAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit PinCodesProposal. To pin a set of code ids in the wasmvm
 * cache, a simple MsgPinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UnpinCodesProposal. To unpin a set of code ids in the wasmvm
 * cache, a simple MsgUnpinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateInstantiateConfigProposal. To update instantiate config
 * to a set of code ids, a simple MsgUpdateInstantiateConfig can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreAndInstantiateContractProposal. To store and instantiate
 * the contract, a simple MsgStoreAndInstantiateContract can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
function createBaseStoreCodeProposal() {
  return {
    title: "",
    description: "",
    run_as: "",
    wasm_byte_code: new Uint8Array(),
    instantiate_permission: AccessConfig.fromPartial({}),
    unpin_code: false,
    source: "",
    builder: "",
    code_hash: new Uint8Array()
  };
}
export const StoreCodeProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(34).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(58).fork()).ldelim();
    }
    if (message.unpin_code === true) {
      writer.uint32(64).bool(message.unpin_code);
    }
    if (message.source !== "") {
      writer.uint32(74).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(82).string(message.builder);
    }
    if (message.code_hash.length !== 0) {
      writer.uint32(90).bytes(message.code_hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.wasm_byte_code = reader.bytes();
          break;
        case 7:
          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 8:
          message.unpin_code = reader.bool();
          break;
        case 9:
          message.source = reader.string();
          break;
        case 10:
          message.builder = reader.string();
          break;
        case 11:
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      wasm_byte_code: isSet(object.wasm_byte_code) ? bytesFromBase64(object.wasm_byte_code) : new Uint8Array(),
      instantiate_permission: isSet(object.instantiate_permission) ? AccessConfig.fromJSON(object.instantiate_permission) : undefined,
      unpin_code: isSet(object.unpin_code) ? Boolean(object.unpin_code) : false,
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      code_hash: isSet(object.code_hash) ? bytesFromBase64(object.code_hash) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$title, _object$description, _object$run_as, _object$wasm_byte_cod, _object$unpin_code, _object$source, _object$builder, _object$code_hash;
    const message = createBaseStoreCodeProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.run_as = (_object$run_as = object.run_as) !== null && _object$run_as !== void 0 ? _object$run_as : "";
    message.wasm_byte_code = (_object$wasm_byte_cod = object.wasm_byte_code) !== null && _object$wasm_byte_cod !== void 0 ? _object$wasm_byte_cod : new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    message.unpin_code = (_object$unpin_code = object.unpin_code) !== null && _object$unpin_code !== void 0 ? _object$unpin_code : false;
    message.source = (_object$source = object.source) !== null && _object$source !== void 0 ? _object$source : "";
    message.builder = (_object$builder = object.builder) !== null && _object$builder !== void 0 ? _object$builder : "";
    message.code_hash = (_object$code_hash = object.code_hash) !== null && _object$code_hash !== void 0 ? _object$code_hash : new Uint8Array();
    return message;
  }
};
function createBaseInstantiateContractProposal() {
  return {
    title: "",
    description: "",
    run_as: "",
    admin: "",
    code_id: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const InstantiateContractProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(40).uint64(message.code_id);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.code_id = reader.uint64();
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.msg = reader.bytes();
          break;
        case 8:
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      code_id: isSet(object.code_id) ? Long.fromValue(object.code_id) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$title2, _object$description2, _object$run_as2, _object$admin, _object$label, _object$msg, _object$funds;
    const message = createBaseInstantiateContractProposal();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.run_as = (_object$run_as2 = object.run_as) !== null && _object$run_as2 !== void 0 ? _object$run_as2 : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.label = (_object$label = object.label) !== null && _object$label !== void 0 ? _object$label : "";
    message.msg = (_object$msg = object.msg) !== null && _object$msg !== void 0 ? _object$msg : new Uint8Array();
    message.funds = ((_object$funds = object.funds) === null || _object$funds === void 0 ? void 0 : _object$funds.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseInstantiateContract2Proposal() {
  return {
    title: "",
    description: "",
    run_as: "",
    admin: "",
    code_id: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fix_msg: false
  };
}
export const InstantiateContract2Proposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(40).uint64(message.code_id);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(66).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(74).bytes(message.salt);
    }
    if (message.fix_msg === true) {
      writer.uint32(80).bool(message.fix_msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContract2Proposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.code_id = reader.uint64();
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.msg = reader.bytes();
          break;
        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.salt = reader.bytes();
          break;
        case 10:
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
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
    var _object$title3, _object$description3, _object$run_as3, _object$admin2, _object$label2, _object$msg2, _object$funds2, _object$salt, _object$fix_msg;
    const message = createBaseInstantiateContract2Proposal();
    message.title = (_object$title3 = object.title) !== null && _object$title3 !== void 0 ? _object$title3 : "";
    message.description = (_object$description3 = object.description) !== null && _object$description3 !== void 0 ? _object$description3 : "";
    message.run_as = (_object$run_as3 = object.run_as) !== null && _object$run_as3 !== void 0 ? _object$run_as3 : "";
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
function createBaseMigrateContractProposal() {
  return {
    title: "",
    description: "",
    contract: "",
    code_id: Long.UZERO,
    msg: new Uint8Array()
  };
}
export const MigrateContractProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (!message.code_id.isZero()) {
      writer.uint32(40).uint64(message.code_id);
    }
    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.code_id = reader.uint64();
          break;
        case 6:
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      code_id: isSet(object.code_id) ? Long.fromValue(object.code_id) : Long.UZERO,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$title4, _object$description4, _object$contract, _object$msg3;
    const message = createBaseMigrateContractProposal();
    message.title = (_object$title4 = object.title) !== null && _object$title4 !== void 0 ? _object$title4 : "";
    message.description = (_object$description4 = object.description) !== null && _object$description4 !== void 0 ? _object$description4 : "";
    message.contract = (_object$contract = object.contract) !== null && _object$contract !== void 0 ? _object$contract : "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.msg = (_object$msg3 = object.msg) !== null && _object$msg3 !== void 0 ? _object$msg3 : new Uint8Array();
    return message;
  }
};
function createBaseSudoContractProposal() {
  return {
    title: "",
    description: "",
    contract: "",
    msg: new Uint8Array()
  };
}
export const SudoContractProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contract = reader.string();
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$title5, _object$description5, _object$contract2, _object$msg4;
    const message = createBaseSudoContractProposal();
    message.title = (_object$title5 = object.title) !== null && _object$title5 !== void 0 ? _object$title5 : "";
    message.description = (_object$description5 = object.description) !== null && _object$description5 !== void 0 ? _object$description5 : "";
    message.contract = (_object$contract2 = object.contract) !== null && _object$contract2 !== void 0 ? _object$contract2 : "";
    message.msg = (_object$msg4 = object.msg) !== null && _object$msg4 !== void 0 ? _object$msg4 : new Uint8Array();
    return message;
  }
};
function createBaseExecuteContractProposal() {
  return {
    title: "",
    description: "",
    run_as: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const ExecuteContractProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
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
    const message = createBaseExecuteContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.contract = reader.string();
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map(e => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$title6, _object$description6, _object$run_as4, _object$contract3, _object$msg5, _object$funds3;
    const message = createBaseExecuteContractProposal();
    message.title = (_object$title6 = object.title) !== null && _object$title6 !== void 0 ? _object$title6 : "";
    message.description = (_object$description6 = object.description) !== null && _object$description6 !== void 0 ? _object$description6 : "";
    message.run_as = (_object$run_as4 = object.run_as) !== null && _object$run_as4 !== void 0 ? _object$run_as4 : "";
    message.contract = (_object$contract3 = object.contract) !== null && _object$contract3 !== void 0 ? _object$contract3 : "";
    message.msg = (_object$msg5 = object.msg) !== null && _object$msg5 !== void 0 ? _object$msg5 : new Uint8Array();
    message.funds = ((_object$funds3 = object.funds) === null || _object$funds3 === void 0 ? void 0 : _object$funds3.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseUpdateAdminProposal() {
  return {
    title: "",
    description: "",
    new_admin: "",
    contract: ""
  };
}
export const UpdateAdminProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.new_admin !== "") {
      writer.uint32(26).string(message.new_admin);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.new_admin = reader.string();
          break;
        case 4:
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      new_admin: isSet(object.new_admin) ? String(object.new_admin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object) {
    var _object$title7, _object$description7, _object$new_admin, _object$contract4;
    const message = createBaseUpdateAdminProposal();
    message.title = (_object$title7 = object.title) !== null && _object$title7 !== void 0 ? _object$title7 : "";
    message.description = (_object$description7 = object.description) !== null && _object$description7 !== void 0 ? _object$description7 : "";
    message.new_admin = (_object$new_admin = object.new_admin) !== null && _object$new_admin !== void 0 ? _object$new_admin : "";
    message.contract = (_object$contract4 = object.contract) !== null && _object$contract4 !== void 0 ? _object$contract4 : "";
    return message;
  }
};
function createBaseClearAdminProposal() {
  return {
    title: "",
    description: "",
    contract: ""
  };
}
export const ClearAdminProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearAdminProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object) {
    var _object$title8, _object$description8, _object$contract5;
    const message = createBaseClearAdminProposal();
    message.title = (_object$title8 = object.title) !== null && _object$title8 !== void 0 ? _object$title8 : "";
    message.description = (_object$description8 = object.description) !== null && _object$description8 !== void 0 ? _object$description8 : "";
    message.contract = (_object$contract5 = object.contract) !== null && _object$contract5 !== void 0 ? _object$contract5 : "";
    return message;
  }
};
function createBasePinCodesProposal() {
  return {
    title: "",
    description: "",
    code_ids: []
  };
}
export const PinCodesProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.code_ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinCodesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      code_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.code_ids) ? object.code_ids.map(e => Long.fromValue(e)) : []
    };
  },
  fromPartial(object) {
    var _object$title9, _object$description9, _object$code_ids;
    const message = createBasePinCodesProposal();
    message.title = (_object$title9 = object.title) !== null && _object$title9 !== void 0 ? _object$title9 : "";
    message.description = (_object$description9 = object.description) !== null && _object$description9 !== void 0 ? _object$description9 : "";
    message.code_ids = ((_object$code_ids = object.code_ids) === null || _object$code_ids === void 0 ? void 0 : _object$code_ids.map(e => Long.fromValue(e))) || [];
    return message;
  }
};
function createBaseUnpinCodesProposal() {
  return {
    title: "",
    description: "",
    code_ids: []
  };
}
export const UnpinCodesProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.code_ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpinCodesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      code_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.code_ids) ? object.code_ids.map(e => Long.fromValue(e)) : []
    };
  },
  fromPartial(object) {
    var _object$title10, _object$description10, _object$code_ids2;
    const message = createBaseUnpinCodesProposal();
    message.title = (_object$title10 = object.title) !== null && _object$title10 !== void 0 ? _object$title10 : "";
    message.description = (_object$description10 = object.description) !== null && _object$description10 !== void 0 ? _object$description10 : "";
    message.code_ids = ((_object$code_ids2 = object.code_ids) === null || _object$code_ids2 === void 0 ? void 0 : _object$code_ids2.map(e => Long.fromValue(e))) || [];
    return message;
  }
};
function createBaseAccessConfigUpdate() {
  return {
    code_id: Long.UZERO,
    instantiate_permission: AccessConfig.fromPartial({})
  };
}
export const AccessConfigUpdate = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.code_id.isZero()) {
      writer.uint32(8).uint64(message.code_id);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessConfigUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
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
      code_id: isSet(object.code_id) ? Long.fromValue(object.code_id) : Long.UZERO,
      instantiate_permission: isSet(object.instantiate_permission) ? AccessConfig.fromJSON(object.instantiate_permission) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseAccessConfigUpdate();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    return message;
  }
};
function createBaseUpdateInstantiateConfigProposal() {
  return {
    title: "",
    description: "",
    access_config_updates: []
  };
}
export const UpdateInstantiateConfigProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.access_config_updates) {
      AccessConfigUpdate.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstantiateConfigProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.access_config_updates.push(AccessConfigUpdate.decode(reader, reader.uint32()));
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      access_config_updates: Array.isArray(object === null || object === void 0 ? void 0 : object.access_config_updates) ? object.access_config_updates.map(e => AccessConfigUpdate.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$title11, _object$description11, _object$access_config;
    const message = createBaseUpdateInstantiateConfigProposal();
    message.title = (_object$title11 = object.title) !== null && _object$title11 !== void 0 ? _object$title11 : "";
    message.description = (_object$description11 = object.description) !== null && _object$description11 !== void 0 ? _object$description11 : "";
    message.access_config_updates = ((_object$access_config = object.access_config_updates) === null || _object$access_config === void 0 ? void 0 : _object$access_config.map(e => AccessConfigUpdate.fromPartial(e))) || [];
    return message;
  }
};
function createBaseStoreAndInstantiateContractProposal() {
  return {
    title: "",
    description: "",
    run_as: "",
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
export const StoreAndInstantiateContractProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(34).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(42).fork()).ldelim();
    }
    if (message.unpin_code === true) {
      writer.uint32(48).bool(message.unpin_code);
    }
    if (message.admin !== "") {
      writer.uint32(58).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(66).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(74).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(82).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(90).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(98).string(message.builder);
    }
    if (message.code_hash.length !== 0) {
      writer.uint32(106).bytes(message.code_hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreAndInstantiateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.run_as = reader.string();
          break;
        case 4:
          message.wasm_byte_code = reader.bytes();
          break;
        case 5:
          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 6:
          message.unpin_code = reader.bool();
          break;
        case 7:
          message.admin = reader.string();
          break;
        case 8:
          message.label = reader.string();
          break;
        case 9:
          message.msg = reader.bytes();
          break;
        case 10:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 11:
          message.source = reader.string();
          break;
        case 12:
          message.builder = reader.string();
          break;
        case 13:
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
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
    var _object$title12, _object$description12, _object$run_as5, _object$wasm_byte_cod2, _object$unpin_code2, _object$admin3, _object$label3, _object$msg6, _object$funds4, _object$source2, _object$builder2, _object$code_hash2;
    const message = createBaseStoreAndInstantiateContractProposal();
    message.title = (_object$title12 = object.title) !== null && _object$title12 !== void 0 ? _object$title12 : "";
    message.description = (_object$description12 = object.description) !== null && _object$description12 !== void 0 ? _object$description12 : "";
    message.run_as = (_object$run_as5 = object.run_as) !== null && _object$run_as5 !== void 0 ? _object$run_as5 : "";
    message.wasm_byte_code = (_object$wasm_byte_cod2 = object.wasm_byte_code) !== null && _object$wasm_byte_cod2 !== void 0 ? _object$wasm_byte_cod2 : new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    message.unpin_code = (_object$unpin_code2 = object.unpin_code) !== null && _object$unpin_code2 !== void 0 ? _object$unpin_code2 : false;
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    message.label = (_object$label3 = object.label) !== null && _object$label3 !== void 0 ? _object$label3 : "";
    message.msg = (_object$msg6 = object.msg) !== null && _object$msg6 !== void 0 ? _object$msg6 : new Uint8Array();
    message.funds = ((_object$funds4 = object.funds) === null || _object$funds4 === void 0 ? void 0 : _object$funds4.map(e => Coin.fromPartial(e))) || [];
    message.source = (_object$source2 = object.source) !== null && _object$source2 !== void 0 ? _object$source2 : "";
    message.builder = (_object$builder2 = object.builder) !== null && _object$builder2 !== void 0 ? _object$builder2 : "";
    message.code_hash = (_object$code_hash2 = object.code_hash) !== null && _object$code_hash2 !== void 0 ? _object$code_hash2 : new Uint8Array();
    return message;
  }
};