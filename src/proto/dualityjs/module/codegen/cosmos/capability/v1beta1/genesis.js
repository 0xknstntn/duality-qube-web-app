import { CapabilityOwners } from "./capability";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisOwners defines the capability owners with their corresponding index. */

/** GenesisState defines the capability module's genesis state. */

function createBaseGenesisOwners() {
  return {
    index: Long.UZERO,
    index_owners: CapabilityOwners.fromPartial({})
  };
}
export const GenesisOwners = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.index_owners !== undefined) {
      CapabilityOwners.encode(message.index_owners, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisOwners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.index_owners = CapabilityOwners.decode(reader, reader.uint32());
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
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      index_owners: isSet(object.index_owners) ? CapabilityOwners.fromJSON(object.index_owners) : undefined
    };
  },
  fromPartial(object) {
    const message = createBaseGenesisOwners();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.index_owners = object.index_owners !== undefined && object.index_owners !== null ? CapabilityOwners.fromPartial(object.index_owners) : undefined;
    return message;
  }
};
function createBaseGenesisState() {
  return {
    index: Long.UZERO,
    owners: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    for (const v of message.owners) {
      GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
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
          message.index = reader.uint64();
          break;
        case 2:
          message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
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
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners) ? object.owners.map(e => GenesisOwners.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$owners;
    const message = createBaseGenesisState();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.owners = ((_object$owners = object.owners) === null || _object$owners === void 0 ? void 0 : _object$owners.map(e => GenesisOwners.fromPartial(e))) || [];
    return message;
  }
};