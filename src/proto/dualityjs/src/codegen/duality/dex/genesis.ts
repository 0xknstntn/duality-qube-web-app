import { Params } from "./params";
import { TickLiquidity } from "./tick_liquidity";
import { LimitOrderTranche } from "./limit_order_tranche";
import { LimitOrderTrancheUser } from "./limit_order_tranche_user";
import { PoolMetadata } from "./pool_metadata";
import { Long, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
  params: Params;
  tickLiquidityList?: TickLiquidity[];
  inactiveLimitOrderTrancheList?: LimitOrderTranche[];
  limitOrderTrancheUserList?: LimitOrderTrancheUser[];
  poolMetadataList: PoolMetadata[];
  poolCount: Long;
}
function createBaseGenesisState(): GenesisState {
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
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tickLiquidityList) {
      TickLiquidity.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.inactiveLimitOrderTrancheList) {
      LimitOrderTranche.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.limitOrderTrancheUserList) {
      LimitOrderTrancheUser.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolMetadataList) {
      PoolMetadata.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.poolCount.isZero()) {
      writer.uint32(48).uint64(message.poolCount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
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
          message.poolCount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      tickLiquidityList: Array.isArray(object?.tickLiquidityList) ? object.tickLiquidityList.map((e: any) => TickLiquidity.fromJSON(e)) : [],
      inactiveLimitOrderTrancheList: Array.isArray(object?.inactiveLimitOrderTrancheList) ? object.inactiveLimitOrderTrancheList.map((e: any) => LimitOrderTranche.fromJSON(e)) : [],
      limitOrderTrancheUserList: Array.isArray(object?.limitOrderTrancheUserList) ? object.limitOrderTrancheUserList.map((e: any) => LimitOrderTrancheUser.fromJSON(e)) : [],
      poolMetadataList: Array.isArray(object?.poolMetadataList) ? object.poolMetadataList.map((e: any) => PoolMetadata.fromJSON(e)) : [],
      poolCount: isSet(object.poolCount) ? Long.fromValue(object.poolCount) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tickLiquidityList = object.tickLiquidityList?.map(e => TickLiquidity.fromPartial(e)) || [];
    message.inactiveLimitOrderTrancheList = object.inactiveLimitOrderTrancheList?.map(e => LimitOrderTranche.fromPartial(e)) || [];
    message.limitOrderTrancheUserList = object.limitOrderTrancheUserList?.map(e => LimitOrderTrancheUser.fromPartial(e)) || [];
    message.poolMetadataList = object.poolMetadataList?.map(e => PoolMetadata.fromPartial(e)) || [];
    message.poolCount = object.poolCount !== undefined && object.poolCount !== null ? Long.fromValue(object.poolCount) : Long.UZERO;
    return message;
  }
};