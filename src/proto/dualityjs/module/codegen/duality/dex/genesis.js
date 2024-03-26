import { Params } from "./params";
import { TickLiquidity } from "./tick_liquidity";
import { LimitOrderTranche } from "./limit_order_tranche";
import { LimitOrderTrancheUser } from "./limit_order_tranche_user";
import { PoolMetadata } from "./pool_metadata";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the dex module's genesis state. */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    tickLiquidityList: undefined,
    inactiveLimitOrderTrancheList: undefined,
    limitOrderTrancheUserList: undefined,
    poolMetadataList: [],
    poolCount: Long.UZERO
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tickLiquidityList) {
      TickLiquidity.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.inactiveLimitOrderTrancheList) {
      LimitOrderTranche.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.limitOrderTrancheUserList) {
      LimitOrderTrancheUser.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolMetadataList) {
      PoolMetadata.encode(v, writer.uint32(42).fork()).ldelim();
    }
    if (!message.poolCount.isZero()) {
      writer.uint32(48).uint64(message.poolCount);
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
          message.tickLiquidityList.push(TickLiquidity.decode(reader, reader.uint32()));
          break;
        case 3:
          message.inactiveLimitOrderTrancheList.push(LimitOrderTranche.decode(reader, reader.uint32()));
          break;
        case 4:
          message.limitOrderTrancheUserList.push(LimitOrderTrancheUser.decode(reader, reader.uint32()));
          break;
        case 5:
          message.poolMetadataList.push(PoolMetadata.decode(reader, reader.uint32()));
          break;
        case 6:
          message.poolCount = reader.uint64();
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
      tickLiquidityList: Array.isArray(object === null || object === void 0 ? void 0 : object.tickLiquidityList) ? object.tickLiquidityList.map(e => TickLiquidity.fromJSON(e)) : [],
      inactiveLimitOrderTrancheList: Array.isArray(object === null || object === void 0 ? void 0 : object.inactiveLimitOrderTrancheList) ? object.inactiveLimitOrderTrancheList.map(e => LimitOrderTranche.fromJSON(e)) : [],
      limitOrderTrancheUserList: Array.isArray(object === null || object === void 0 ? void 0 : object.limitOrderTrancheUserList) ? object.limitOrderTrancheUserList.map(e => LimitOrderTrancheUser.fromJSON(e)) : [],
      poolMetadataList: Array.isArray(object === null || object === void 0 ? void 0 : object.poolMetadataList) ? object.poolMetadataList.map(e => PoolMetadata.fromJSON(e)) : [],
      poolCount: isSet(object.poolCount) ? Long.fromValue(object.poolCount) : Long.UZERO
    };
  },
  fromPartial(object) {
    var _object$tickLiquidity, _object$inactiveLimit, _object$limitOrderTra, _object$poolMetadataL;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tickLiquidityList = ((_object$tickLiquidity = object.tickLiquidityList) === null || _object$tickLiquidity === void 0 ? void 0 : _object$tickLiquidity.map(e => TickLiquidity.fromPartial(e))) || [];
    message.inactiveLimitOrderTrancheList = ((_object$inactiveLimit = object.inactiveLimitOrderTrancheList) === null || _object$inactiveLimit === void 0 ? void 0 : _object$inactiveLimit.map(e => LimitOrderTranche.fromPartial(e))) || [];
    message.limitOrderTrancheUserList = ((_object$limitOrderTra = object.limitOrderTrancheUserList) === null || _object$limitOrderTra === void 0 ? void 0 : _object$limitOrderTra.map(e => LimitOrderTrancheUser.fromPartial(e))) || [];
    message.poolMetadataList = ((_object$poolMetadataL = object.poolMetadataList) === null || _object$poolMetadataL === void 0 ? void 0 : _object$poolMetadataL.map(e => PoolMetadata.fromPartial(e))) || [];
    message.poolCount = object.poolCount !== undefined && object.poolCount !== null ? Long.fromValue(object.poolCount) : Long.UZERO;
    return message;
  }
};