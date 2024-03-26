import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, isSet } from "../../../../helpers";
/**
 * MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
 * See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers
 * signed and with which modes.
 */

/**
 * CompactBitArray is an implementation of a space efficient bit array.
 * This is used to ensure that the encoded data takes up a minimal amount of
 * space after proto encoding.
 * This is not thread safe, and is not intended for concurrent usage.
 */

function createBaseMultiSignature() {
  return {
    signatures: []
  };
}
export const MultiSignature = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.signatures) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(e => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object) {
    var _object$signatures;
    const message = createBaseMultiSignature();
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map(e => e)) || [];
    return message;
  }
};
function createBaseCompactBitArray() {
  return {
    extra_bits_stored: 0,
    elems: new Uint8Array()
  };
}
export const CompactBitArray = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.extra_bits_stored !== 0) {
      writer.uint32(8).uint32(message.extra_bits_stored);
    }
    if (message.elems.length !== 0) {
      writer.uint32(18).bytes(message.elems);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompactBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extra_bits_stored = reader.uint32();
          break;
        case 2:
          message.elems = reader.bytes();
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
      extra_bits_stored: isSet(object.extra_bits_stored) ? Number(object.extra_bits_stored) : 0,
      elems: isSet(object.elems) ? bytesFromBase64(object.elems) : new Uint8Array()
    };
  },
  fromPartial(object) {
    var _object$extra_bits_st, _object$elems;
    const message = createBaseCompactBitArray();
    message.extra_bits_stored = (_object$extra_bits_st = object.extra_bits_stored) !== null && _object$extra_bits_st !== void 0 ? _object$extra_bits_st : 0;
    message.elems = (_object$elems = object.elems) !== null && _object$elems !== void 0 ? _object$elems : new Uint8Array();
    return message;
  }
};