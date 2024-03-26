import { TradePairID } from "./trade_pair_id";
import { Long, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PoolReservesKey {
  tradePairID: TradePairID;
  TickIndexTakerToMaker: Long;
  Fee: Long;
}
export interface PoolReserves {
  key: PoolReservesKey;
  reservesMakerDenom: string;
  priceTakerToMaker: string;
  priceOppositeTakerToMaker: string;
}
function createBasePoolReservesKey(): PoolReservesKey {
  return {
    tradePairID: TradePairID.fromPartial({}),
    TickIndexTakerToMaker: Long.ZERO,
    Fee: Long.UZERO
  };
}
export const PoolReservesKey = {
  encode(message: PoolReservesKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradePairID !== undefined) {
      TradePairID.encode(message.tradePairID, writer.uint32(10).fork()).ldelim();
    }
    if (!message.TickIndexTakerToMaker.isZero()) {
      writer.uint32(16).int64(message.TickIndexTakerToMaker);
    }
    if (!message.Fee.isZero()) {
      writer.uint32(24).uint64(message.Fee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolReservesKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolReservesKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradePairID = TradePairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.TickIndexTakerToMaker = (reader.int64() as Long);
          break;
        case 3:
          message.Fee = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolReservesKey {
    return {
      tradePairID: isSet(object.tradePairID) ? TradePairID.fromJSON(object.tradePairID) : undefined,
      TickIndexTakerToMaker: isSet(object.TickIndexTakerToMaker) ? Long.fromValue(object.TickIndexTakerToMaker) : Long.ZERO,
      Fee: isSet(object.Fee) ? Long.fromValue(object.Fee) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<PoolReservesKey>): PoolReservesKey {
    const message = createBasePoolReservesKey();
    message.tradePairID = object.tradePairID !== undefined && object.tradePairID !== null ? TradePairID.fromPartial(object.tradePairID) : undefined;
    message.TickIndexTakerToMaker = object.TickIndexTakerToMaker !== undefined && object.TickIndexTakerToMaker !== null ? Long.fromValue(object.TickIndexTakerToMaker) : Long.ZERO;
    message.Fee = object.Fee !== undefined && object.Fee !== null ? Long.fromValue(object.Fee) : Long.UZERO;
    return message;
  }
};
function createBasePoolReserves(): PoolReserves {
  return {
    key: PoolReservesKey.fromPartial({}),
    reservesMakerDenom: "",
    priceTakerToMaker: "",
    priceOppositeTakerToMaker: ""
  };
}
export const PoolReserves = {
  encode(message: PoolReserves, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      PoolReservesKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservesMakerDenom !== "") {
      writer.uint32(18).string(message.reservesMakerDenom);
    }
    if (message.priceTakerToMaker !== "") {
      writer.uint32(26).string(message.priceTakerToMaker);
    }
    if (message.priceOppositeTakerToMaker !== "") {
      writer.uint32(34).string(message.priceOppositeTakerToMaker);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolReserves {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolReserves();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = PoolReservesKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.reservesMakerDenom = reader.string();
          break;
        case 3:
          message.priceTakerToMaker = reader.string();
          break;
        case 4:
          message.priceOppositeTakerToMaker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolReserves {
    return {
      key: isSet(object.key) ? PoolReservesKey.fromJSON(object.key) : undefined,
      reservesMakerDenom: isSet(object.reservesMakerDenom) ? String(object.reservesMakerDenom) : "",
      priceTakerToMaker: isSet(object.priceTakerToMaker) ? String(object.priceTakerToMaker) : "",
      priceOppositeTakerToMaker: isSet(object.priceOppositeTakerToMaker) ? String(object.priceOppositeTakerToMaker) : ""
    };
  },
  fromPartial(object: DeepPartial<PoolReserves>): PoolReserves {
    const message = createBasePoolReserves();
    message.key = object.key !== undefined && object.key !== null ? PoolReservesKey.fromPartial(object.key) : undefined;
    message.reservesMakerDenom = object.reservesMakerDenom ?? "";
    message.priceTakerToMaker = object.priceTakerToMaker ?? "";
    message.priceOppositeTakerToMaker = object.priceOppositeTakerToMaker ?? "";
    return message;
  }
};