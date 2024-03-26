import { Params, ValidatorSigningInfo } from "./slashing";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the slashing module's genesis state. */

/** SigningInfo stores validator signing info of corresponding address. */

/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */

/** MissedBlock contains height and missed status as boolean. */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    signing_infos: [],
    missed_blocks: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signing_infos) {
      SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.missed_blocks) {
      ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.signing_infos.push(SigningInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.missed_blocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      signing_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.signing_infos) ? object.signing_infos.map(e => SigningInfo.fromJSON(e)) : [],
      missed_blocks: Array.isArray(object === null || object === void 0 ? void 0 : object.missed_blocks) ? object.missed_blocks.map(e => ValidatorMissedBlocks.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$signing_infos, _object$missed_blocks;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.signing_infos = ((_object$signing_infos = object.signing_infos) === null || _object$signing_infos === void 0 ? void 0 : _object$signing_infos.map(e => SigningInfo.fromPartial(e))) || [];
    message.missed_blocks = ((_object$missed_blocks = object.missed_blocks) === null || _object$missed_blocks === void 0 ? void 0 : _object$missed_blocks.map(e => ValidatorMissedBlocks.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSigningInfo() {
  return {
    address: "",
    validator_signing_info: ValidatorSigningInfo.fromPartial({})
  };
}
export const SigningInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.validator_signing_info !== undefined) {
      ValidatorSigningInfo.encode(message.validator_signing_info, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.validator_signing_info = ValidatorSigningInfo.decode(reader, reader.uint32());
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
      validator_signing_info: isSet(object.validator_signing_info) ? ValidatorSigningInfo.fromJSON(object.validator_signing_info) : undefined
    };
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseSigningInfo();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.validator_signing_info = object.validator_signing_info !== undefined && object.validator_signing_info !== null ? ValidatorSigningInfo.fromPartial(object.validator_signing_info) : undefined;
    return message;
  }
};
function createBaseValidatorMissedBlocks() {
  return {
    address: "",
    missed_blocks: []
  };
}
export const ValidatorMissedBlocks = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.missed_blocks) {
      MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMissedBlocks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.missed_blocks.push(MissedBlock.decode(reader, reader.uint32()));
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
      missed_blocks: Array.isArray(object === null || object === void 0 ? void 0 : object.missed_blocks) ? object.missed_blocks.map(e => MissedBlock.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$address2, _object$missed_blocks2;
    const message = createBaseValidatorMissedBlocks();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.missed_blocks = ((_object$missed_blocks2 = object.missed_blocks) === null || _object$missed_blocks2 === void 0 ? void 0 : _object$missed_blocks2.map(e => MissedBlock.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMissedBlock() {
  return {
    index: Long.ZERO,
    missed: false
  };
}
export const MissedBlock = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.index.isZero()) {
      writer.uint32(8).int64(message.index);
    }
    if (message.missed === true) {
      writer.uint32(16).bool(message.missed);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissedBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.int64();
          break;
        case 2:
          message.missed = reader.bool();
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
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.ZERO,
      missed: isSet(object.missed) ? Boolean(object.missed) : false
    };
  },
  fromPartial(object) {
    var _object$missed;
    const message = createBaseMissedBlock();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
    message.missed = (_object$missed = object.missed) !== null && _object$missed !== void 0 ? _object$missed : false;
    return message;
  }
};