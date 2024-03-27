import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination';
import { MultiHopRoute, LimitOrderType, limitOrderTypeFromJSON } from './tx';
import { Timestamp } from '../../google/protobuf/timestamp';
import { Params } from './params';
import { LimitOrderTrancheUser } from './limit_order_tranche_user';
import { LimitOrderTranche } from './limit_order_tranche';
import { DepositRecord } from './deposit_record';
import { TickLiquidity } from './tick_liquidity';
import { PoolReserves } from './pool_reserves';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Pool } from './pool';
import { PoolMetadata } from './pool_metadata';
import { Long, DeepPartial, isSet, fromJsonTimestamp } from '../../helpers';
import * as _m0 from 'protobufjs/minimal';
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryGetLimitOrderTrancheUserRequest {
  address: string;
  trancheKey: string;
}
export interface QueryGetLimitOrderTrancheUserResponse {
  LimitOrderTrancheUser?: LimitOrderTrancheUser;
}
export interface QueryAllLimitOrderTrancheUserRequest {
  pagination: PageRequest;
}
export interface QueryAllLimitOrderTrancheUserResponse {
  LimitOrderTrancheUser?: LimitOrderTrancheUser[];
  pagination: PageResponse;
}
export interface QueryGetLimitOrderTrancheRequest {
  pairID: string;
  tickIndex: Long;
  tokenIn: string;
  trancheKey: string;
}
export interface QueryGetLimitOrderTrancheResponse {
  LimitOrderTranche?: LimitOrderTranche;
}
export interface QueryAllLimitOrderTrancheRequest {
  pairID: string;
  tokenIn: string;
  pagination: PageRequest;
}
export interface QueryAllLimitOrderTrancheResponse {
  LimitOrderTranche?: LimitOrderTranche[];
  pagination: PageResponse;
}
export interface QueryAllUserDepositsRequest {
  address: string;
  pagination: PageRequest;
}
export interface QueryAllUserDepositsResponse {
  Deposits?: DepositRecord[];
  pagination: PageResponse;
}
export interface QueryAllUserLimitOrdersRequest {
  address: string;
  pagination: PageRequest;
}
export interface QueryAllUserLimitOrdersResponse {
  limitOrders?: LimitOrderTrancheUser[];
  pagination: PageResponse;
}
export interface QueryAllTickLiquidityRequest {
  pairID: string;
  tokenIn: string;
  pagination: PageRequest;
}
export interface QueryAllTickLiquidityResponse {
  tickLiquidity?: TickLiquidity[];
  pagination: PageResponse;
}
export interface QueryGetInactiveLimitOrderTrancheRequest {
  pairID: string;
  tokenIn: string;
  tickIndex: Long;
  trancheKey: string;
}
export interface QueryGetInactiveLimitOrderTrancheResponse {
  inactiveLimitOrderTranche?: LimitOrderTranche;
}
export interface QueryAllInactiveLimitOrderTrancheRequest {
  pagination: PageRequest;
}
export interface QueryAllInactiveLimitOrderTrancheResponse {
  inactiveLimitOrderTranche?: LimitOrderTranche[];
  pagination: PageResponse;
}
export interface QueryAllPoolReservesRequest {
  pairID: string;
  tokenIn: string;
  pagination: PageRequest;
}
export interface QueryAllPoolReservesResponse {
  poolReserves?: PoolReserves[];
  pagination: PageResponse;
}
export interface QueryGetPoolReservesRequest {
  pairID: string;
  tokenIn: string;
  tickIndex: Long;
  fee: Long;
}
export interface QueryGetPoolReservesResponse {
  poolReserves?: PoolReserves;
}
export interface QueryEstimateMultiHopSwapRequest {
  creator: string;
  receiver: string;
  routes: MultiHopRoute[];
  amountIn: string;
  exitLimitPrice: string;
  /**
   * If pickBestRoute == true then all routes are run and the route with the best price is chosen
   * otherwise, the first succesful route is used.
   */
  pickBestRoute: boolean;
}
export interface QueryEstimateMultiHopSwapResponse {
  coinOut: Coin;
}
export interface QueryEstimatePlaceLimitOrderRequest {
  creator: string;
  receiver: string;
  tokenIn: string;
  tokenOut: string;
  tickIndexInToOut: Long;
  amountIn: string;
  orderType: LimitOrderType;
  /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
  expirationTime?: Timestamp;
  maxAmountOut?: string;
}
export interface QueryEstimatePlaceLimitOrderResponse {
  /**
   * Total amount of coin used for the limit order
   * You can derive makerLimitInCoin using the equation: totalInCoin = swapInCoin + makerLimitInCoin
   */
  totalInCoin: Coin;
  /** Total amount of the token in that was immediately swapped for swapOutCoin */
  swapInCoin: Coin;
  /**
   * Total amount of coin received from the taker portion of the limit order
   * This is the amount of coin immediately available in the users account after executing the
   * limit order. It does not include any future proceeds from the maker portion which will have withdrawn in the future
   */
  swapOutCoin: Coin;
}
export interface QueryPoolRequest {
  pairID: string;
  tickIndex: Long;
  fee: Long;
}
export interface QueryPoolByIDRequest {
  poolID: Long;
}
export interface QueryPoolResponse {
  pool?: Pool;
}
export interface QueryGetPoolMetadataRequest {
  id: Long;
}
export interface QueryGetPoolMetadataResponse {
  PoolMetadata: PoolMetadata;
}
export interface QueryAllPoolMetadataRequest {
  pagination: PageRequest;
}
export interface QueryAllPoolMetadataResponse {
  PoolMetadata: PoolMetadata[];
  pagination: PageResponse;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryGetLimitOrderTrancheUserRequest(): QueryGetLimitOrderTrancheUserRequest {
  return {
    address: '',
    trancheKey: ''
  };
}
export const QueryGetLimitOrderTrancheUserRequest = {
  encode(message: QueryGetLimitOrderTrancheUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.trancheKey !== '') {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLimitOrderTrancheUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetLimitOrderTrancheUserRequest {
    return {
      address: isSet(object.address) ? String(object.address) : '',
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ''
    };
  },
  fromPartial(object: DeepPartial<QueryGetLimitOrderTrancheUserRequest>): QueryGetLimitOrderTrancheUserRequest {
    const message = createBaseQueryGetLimitOrderTrancheUserRequest();
    message.address = object.address ?? '';
    message.trancheKey = object.trancheKey ?? '';
    return message;
  }
};
function createBaseQueryGetLimitOrderTrancheUserResponse(): QueryGetLimitOrderTrancheUserResponse {
  return {
    LimitOrderTrancheUser: undefined
  };
}
export const QueryGetLimitOrderTrancheUserResponse = {
  encode(message: QueryGetLimitOrderTrancheUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.LimitOrderTrancheUser !== undefined) {
      LimitOrderTrancheUser.encode(message.LimitOrderTrancheUser, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLimitOrderTrancheUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LimitOrderTrancheUser = LimitOrderTrancheUser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetLimitOrderTrancheUserResponse {
    return {
      LimitOrderTrancheUser: isSet(object.LimitOrderTrancheUser) ? LimitOrderTrancheUser.fromJSON(object.LimitOrderTrancheUser) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryGetLimitOrderTrancheUserResponse>): QueryGetLimitOrderTrancheUserResponse {
    const message = createBaseQueryGetLimitOrderTrancheUserResponse();
    message.LimitOrderTrancheUser = object.LimitOrderTrancheUser !== undefined && object.LimitOrderTrancheUser !== null ? LimitOrderTrancheUser.fromPartial(object.LimitOrderTrancheUser) : undefined;
    return message;
  }
};
function createBaseQueryAllLimitOrderTrancheUserRequest(): QueryAllLimitOrderTrancheUserRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllLimitOrderTrancheUserRequest = {
  encode(message: QueryAllLimitOrderTrancheUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheUserRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllLimitOrderTrancheUserRequest>): QueryAllLimitOrderTrancheUserRequest {
    const message = createBaseQueryAllLimitOrderTrancheUserRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllLimitOrderTrancheUserResponse(): QueryAllLimitOrderTrancheUserResponse {
  return {
    LimitOrderTrancheUser: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllLimitOrderTrancheUserResponse = {
  encode(message: QueryAllLimitOrderTrancheUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.LimitOrderTrancheUser) {
      LimitOrderTrancheUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LimitOrderTrancheUser.push(LimitOrderTrancheUser.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheUserResponse {
    return {
      LimitOrderTrancheUser: Array.isArray(object?.LimitOrderTrancheUser) ? object.LimitOrderTrancheUser.map((e: any) => LimitOrderTrancheUser.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllLimitOrderTrancheUserResponse>): QueryAllLimitOrderTrancheUserResponse {
    const message = createBaseQueryAllLimitOrderTrancheUserResponse();
    message.LimitOrderTrancheUser = object.LimitOrderTrancheUser?.map(e => LimitOrderTrancheUser.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetLimitOrderTrancheRequest(): QueryGetLimitOrderTrancheRequest {
  return {
    pairID: '',
    tickIndex: Long.ZERO,
    tokenIn: '',
    trancheKey: ''
  };
}
export const QueryGetLimitOrderTrancheRequest = {
  encode(message: QueryGetLimitOrderTrancheRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairID !== '') {
      writer.uint32(10).string(message.pairID);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.tokenIn !== '') {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.trancheKey !== '') {
      writer.uint32(34).string(message.trancheKey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLimitOrderTrancheRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tickIndex = (reader.int64() as Long);
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetLimitOrderTrancheRequest {
    return {
      pairID: isSet(object.pairID) ? String(object.pairID) : '',
      tickIndex: isSet(object.tickIndex) ? Long.fromValue(object.tickIndex) : Long.ZERO,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : '',
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ''
    };
  },
  fromPartial(object: DeepPartial<QueryGetLimitOrderTrancheRequest>): QueryGetLimitOrderTrancheRequest {
    const message = createBaseQueryGetLimitOrderTrancheRequest();
    message.pairID = object.pairID ?? '';
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    message.tokenIn = object.tokenIn ?? '';
    message.trancheKey = object.trancheKey ?? '';
    return message;
  }
};
function createBaseQueryGetLimitOrderTrancheResponse(): QueryGetLimitOrderTrancheResponse {
  return {
    LimitOrderTranche: undefined
  };
}
export const QueryGetLimitOrderTrancheResponse = {
  encode(message: QueryGetLimitOrderTrancheResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.LimitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.LimitOrderTranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLimitOrderTrancheResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LimitOrderTranche = LimitOrderTranche.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetLimitOrderTrancheResponse {
    return {
      LimitOrderTranche: isSet(object.LimitOrderTranche) ? LimitOrderTranche.fromJSON(object.LimitOrderTranche) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryGetLimitOrderTrancheResponse>): QueryGetLimitOrderTrancheResponse {
    const message = createBaseQueryGetLimitOrderTrancheResponse();
    message.LimitOrderTranche = object.LimitOrderTranche !== undefined && object.LimitOrderTranche !== null ? LimitOrderTranche.fromPartial(object.LimitOrderTranche) : undefined;
    return message;
  }
};
function createBaseQueryAllLimitOrderTrancheRequest(): QueryAllLimitOrderTrancheRequest {
  return {
    pairID: '',
    tokenIn: '',
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllLimitOrderTrancheRequest = {
  encode(message: QueryAllLimitOrderTrancheRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairID !== '') {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== '') {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLimitOrderTrancheRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheRequest {
    return {
      pairID: isSet(object.pairID) ? String(object.pairID) : '',
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : '',
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllLimitOrderTrancheRequest>): QueryAllLimitOrderTrancheRequest {
    const message = createBaseQueryAllLimitOrderTrancheRequest();
    message.pairID = object.pairID ?? '';
    message.tokenIn = object.tokenIn ?? '';
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllLimitOrderTrancheResponse(): QueryAllLimitOrderTrancheResponse {
  return {
    LimitOrderTranche: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllLimitOrderTrancheResponse = {
  encode(message: QueryAllLimitOrderTrancheResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.LimitOrderTranche) {
      LimitOrderTranche.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLimitOrderTrancheResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LimitOrderTranche.push(LimitOrderTranche.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheResponse {
    return {
      LimitOrderTranche: Array.isArray(object?.LimitOrderTranche) ? object.LimitOrderTranche.map((e: any) => LimitOrderTranche.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllLimitOrderTrancheResponse>): QueryAllLimitOrderTrancheResponse {
    const message = createBaseQueryAllLimitOrderTrancheResponse();
    message.LimitOrderTranche = object.LimitOrderTranche?.map(e => LimitOrderTranche.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUserDepositsRequest(): QueryAllUserDepositsRequest {
  return {
    address: '',
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllUserDepositsRequest = {
  encode(message: QueryAllUserDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllUserDepositsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : '',
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllUserDepositsRequest>): QueryAllUserDepositsRequest {
    const message = createBaseQueryAllUserDepositsRequest();
    message.address = object.address ?? '';
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUserDepositsResponse(): QueryAllUserDepositsResponse {
  return {
    Deposits: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllUserDepositsResponse = {
  encode(message: QueryAllUserDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Deposits) {
      DepositRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Deposits.push(DepositRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllUserDepositsResponse {
    return {
      Deposits: Array.isArray(object?.Deposits) ? object.Deposits.map((e: any) => DepositRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllUserDepositsResponse>): QueryAllUserDepositsResponse {
    const message = createBaseQueryAllUserDepositsResponse();
    message.Deposits = object.Deposits?.map(e => DepositRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUserLimitOrdersRequest(): QueryAllUserLimitOrdersRequest {
  return {
    address: '',
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllUserLimitOrdersRequest = {
  encode(message: QueryAllUserLimitOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserLimitOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserLimitOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllUserLimitOrdersRequest {
    return {
      address: isSet(object.address) ? String(object.address) : '',
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllUserLimitOrdersRequest>): QueryAllUserLimitOrdersRequest {
    const message = createBaseQueryAllUserLimitOrdersRequest();
    message.address = object.address ?? '';
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUserLimitOrdersResponse(): QueryAllUserLimitOrdersResponse {
  return {
    limitOrders: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllUserLimitOrdersResponse = {
  encode(message: QueryAllUserLimitOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.limitOrders) {
      LimitOrderTrancheUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserLimitOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserLimitOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrders.push(LimitOrderTrancheUser.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllUserLimitOrdersResponse {
    return {
      limitOrders: Array.isArray(object?.limitOrders) ? object.limitOrders.map((e: any) => LimitOrderTrancheUser.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllUserLimitOrdersResponse>): QueryAllUserLimitOrdersResponse {
    const message = createBaseQueryAllUserLimitOrdersResponse();
    message.limitOrders = object.limitOrders?.map(e => LimitOrderTrancheUser.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllTickLiquidityRequest(): QueryAllTickLiquidityRequest {
  return {
    pairID: '',
    tokenIn: '',
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllTickLiquidityRequest = {
  encode(message: QueryAllTickLiquidityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairID !== '') {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== '') {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTickLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTickLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllTickLiquidityRequest {
    return {
      pairID: isSet(object.pairID) ? String(object.pairID) : '',
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : '',
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllTickLiquidityRequest>): QueryAllTickLiquidityRequest {
    const message = createBaseQueryAllTickLiquidityRequest();
    message.pairID = object.pairID ?? '';
    message.tokenIn = object.tokenIn ?? '';
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllTickLiquidityResponse(): QueryAllTickLiquidityResponse {
  return {
    tickLiquidity: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllTickLiquidityResponse = {
  encode(message: QueryAllTickLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tickLiquidity) {
      TickLiquidity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTickLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTickLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tickLiquidity.push(TickLiquidity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllTickLiquidityResponse {
    return {
      tickLiquidity: Array.isArray(object?.tickLiquidity) ? object.tickLiquidity.map((e: any) => TickLiquidity.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllTickLiquidityResponse>): QueryAllTickLiquidityResponse {
    const message = createBaseQueryAllTickLiquidityResponse();
    message.tickLiquidity = object.tickLiquidity?.map(e => TickLiquidity.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetInactiveLimitOrderTrancheRequest(): QueryGetInactiveLimitOrderTrancheRequest {
  return {
    pairID: '',
    tokenIn: '',
    tickIndex: Long.ZERO,
    trancheKey: ''
  };
}
export const QueryGetInactiveLimitOrderTrancheRequest = {
  encode(message: QueryGetInactiveLimitOrderTrancheRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairID !== '') {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== '') {
      writer.uint32(18).string(message.tokenIn);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(24).int64(message.tickIndex);
    }
    if (message.trancheKey !== '') {
      writer.uint32(34).string(message.trancheKey);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInactiveLimitOrderTrancheRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tickIndex = (reader.int64() as Long);
          break;
        case 4:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetInactiveLimitOrderTrancheRequest {
    return {
      pairID: isSet(object.pairID) ? String(object.pairID) : '',
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : '',
      tickIndex: isSet(object.tickIndex) ? Long.fromValue(object.tickIndex) : Long.ZERO,
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ''
    };
  },
  fromPartial(object: DeepPartial<QueryGetInactiveLimitOrderTrancheRequest>): QueryGetInactiveLimitOrderTrancheRequest {
    const message = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    message.pairID = object.pairID ?? '';
    message.tokenIn = object.tokenIn ?? '';
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    message.trancheKey = object.trancheKey ?? '';
    return message;
  }
};
function createBaseQueryGetInactiveLimitOrderTrancheResponse(): QueryGetInactiveLimitOrderTrancheResponse {
  return {
    inactiveLimitOrderTranche: undefined
  };
}
export const QueryGetInactiveLimitOrderTrancheResponse = {
  encode(message: QueryGetInactiveLimitOrderTrancheResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inactiveLimitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.inactiveLimitOrderTranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInactiveLimitOrderTrancheResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inactiveLimitOrderTranche = LimitOrderTranche.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetInactiveLimitOrderTrancheResponse {
    return {
      inactiveLimitOrderTranche: isSet(object.inactiveLimitOrderTranche) ? LimitOrderTranche.fromJSON(object.inactiveLimitOrderTranche) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryGetInactiveLimitOrderTrancheResponse>): QueryGetInactiveLimitOrderTrancheResponse {
    const message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    message.inactiveLimitOrderTranche = object.inactiveLimitOrderTranche !== undefined && object.inactiveLimitOrderTranche !== null ? LimitOrderTranche.fromPartial(object.inactiveLimitOrderTranche) : undefined;
    return message;
  }
};
function createBaseQueryAllInactiveLimitOrderTrancheRequest(): QueryAllInactiveLimitOrderTrancheRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllInactiveLimitOrderTrancheRequest = {
  encode(message: QueryAllInactiveLimitOrderTrancheRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInactiveLimitOrderTrancheRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllInactiveLimitOrderTrancheRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllInactiveLimitOrderTrancheRequest>): QueryAllInactiveLimitOrderTrancheRequest {
    const message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllInactiveLimitOrderTrancheResponse(): QueryAllInactiveLimitOrderTrancheResponse {
  return {
    inactiveLimitOrderTranche: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllInactiveLimitOrderTrancheResponse = {
  encode(message: QueryAllInactiveLimitOrderTrancheResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inactiveLimitOrderTranche) {
      LimitOrderTranche.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInactiveLimitOrderTrancheResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inactiveLimitOrderTranche.push(LimitOrderTranche.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllInactiveLimitOrderTrancheResponse {
    return {
      inactiveLimitOrderTranche: Array.isArray(object?.inactiveLimitOrderTranche) ? object.inactiveLimitOrderTranche.map((e: any) => LimitOrderTranche.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllInactiveLimitOrderTrancheResponse>): QueryAllInactiveLimitOrderTrancheResponse {
    const message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    message.inactiveLimitOrderTranche = object.inactiveLimitOrderTranche?.map(e => LimitOrderTranche.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolReservesRequest(): QueryAllPoolReservesRequest {
  return {
    pairID: '',
    tokenIn: '',
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllPoolReservesRequest = {
  encode(message: QueryAllPoolReservesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairID !== '') {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== '') {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolReservesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolReservesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolReservesRequest {
    return {
      pairID: isSet(object.pairID) ? String(object.pairID) : '',
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : '',
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllPoolReservesRequest>): QueryAllPoolReservesRequest {
    const message = createBaseQueryAllPoolReservesRequest();
    message.pairID = object.pairID ?? '';
    message.tokenIn = object.tokenIn ?? '';
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolReservesResponse(): QueryAllPoolReservesResponse {
  return {
    poolReserves: undefined,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllPoolReservesResponse = {
  encode(message: QueryAllPoolReservesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolReserves) {
      PoolReserves.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolReservesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolReservesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves.push(PoolReserves.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolReservesResponse {
    return {
      poolReserves: Array.isArray(object?.poolReserves) ? object.poolReserves.map((e: any) => PoolReserves.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllPoolReservesResponse>): QueryAllPoolReservesResponse {
    const message = createBaseQueryAllPoolReservesResponse();
    message.poolReserves = object.poolReserves?.map(e => PoolReserves.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetPoolReservesRequest(): QueryGetPoolReservesRequest {
  return {
    pairID: '',
    tokenIn: '',
    tickIndex: Long.ZERO,
    fee: Long.UZERO
  };
}
export const QueryGetPoolReservesRequest = {
  encode(message: QueryGetPoolReservesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairID !== '') {
      writer.uint32(10).string(message.pairID);
    }
    if (message.tokenIn !== '') {
      writer.uint32(18).string(message.tokenIn);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(24).int64(message.tickIndex);
    }
    if (!message.fee.isZero()) {
      writer.uint32(32).uint64(message.fee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolReservesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolReservesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tickIndex = (reader.int64() as Long);
          break;
        case 4:
          message.fee = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolReservesRequest {
    return {
      pairID: isSet(object.pairID) ? String(object.pairID) : '',
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : '',
      tickIndex: isSet(object.tickIndex) ? Long.fromValue(object.tickIndex) : Long.ZERO,
      fee: isSet(object.fee) ? Long.fromValue(object.fee) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<QueryGetPoolReservesRequest>): QueryGetPoolReservesRequest {
    const message = createBaseQueryGetPoolReservesRequest();
    message.pairID = object.pairID ?? '';
    message.tokenIn = object.tokenIn ?? '';
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    message.fee = object.fee !== undefined && object.fee !== null ? Long.fromValue(object.fee) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetPoolReservesResponse(): QueryGetPoolReservesResponse {
  return {
    poolReserves: undefined
  };
}
export const QueryGetPoolReservesResponse = {
  encode(message: QueryGetPoolReservesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolReserves !== undefined) {
      PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolReservesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolReservesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves = PoolReserves.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolReservesResponse {
    return {
      poolReserves: isSet(object.poolReserves) ? PoolReserves.fromJSON(object.poolReserves) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryGetPoolReservesResponse>): QueryGetPoolReservesResponse {
    const message = createBaseQueryGetPoolReservesResponse();
    message.poolReserves = object.poolReserves !== undefined && object.poolReserves !== null ? PoolReserves.fromPartial(object.poolReserves) : undefined;
    return message;
  }
};
function createBaseQueryEstimateMultiHopSwapRequest(): QueryEstimateMultiHopSwapRequest {
  return {
    creator: '',
    receiver: '',
    routes: [],
    amountIn: '',
    exitLimitPrice: '',
    pickBestRoute: false
  };
}
export const QueryEstimateMultiHopSwapRequest = {
  encode(message: QueryEstimateMultiHopSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== '') {
      writer.uint32(18).string(message.receiver);
    }
    for (const v of message.routes) {
      MultiHopRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountIn !== '') {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.exitLimitPrice !== '') {
      writer.uint32(42).string(message.exitLimitPrice);
    }
    if (message.pickBestRoute === true) {
      writer.uint32(48).bool(message.pickBestRoute);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimateMultiHopSwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateMultiHopSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.routes.push(MultiHopRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.amountIn = reader.string();
          break;
        case 5:
          message.exitLimitPrice = reader.string();
          break;
        case 6:
          message.pickBestRoute = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimateMultiHopSwapRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      receiver: isSet(object.receiver) ? String(object.receiver) : '',
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => MultiHopRoute.fromJSON(e)) : [],
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : '',
      exitLimitPrice: isSet(object.exitLimitPrice) ? String(object.exitLimitPrice) : '',
      pickBestRoute: isSet(object.pickBestRoute) ? Boolean(object.pickBestRoute) : false
    };
  },
  fromPartial(object: DeepPartial<QueryEstimateMultiHopSwapRequest>): QueryEstimateMultiHopSwapRequest {
    const message = createBaseQueryEstimateMultiHopSwapRequest();
    message.creator = object.creator ?? '';
    message.receiver = object.receiver ?? '';
    message.routes = object.routes?.map(e => MultiHopRoute.fromPartial(e)) || [];
    message.amountIn = object.amountIn ?? '';
    message.exitLimitPrice = object.exitLimitPrice ?? '';
    message.pickBestRoute = object.pickBestRoute ?? false;
    return message;
  }
};
function createBaseQueryEstimateMultiHopSwapResponse(): QueryEstimateMultiHopSwapResponse {
  return {
    coinOut: Coin.fromPartial({})
  };
}
export const QueryEstimateMultiHopSwapResponse = {
  encode(message: QueryEstimateMultiHopSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coinOut !== undefined) {
      Coin.encode(message.coinOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimateMultiHopSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateMultiHopSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimateMultiHopSwapResponse {
    return {
      coinOut: isSet(object.coinOut) ? Coin.fromJSON(object.coinOut) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryEstimateMultiHopSwapResponse>): QueryEstimateMultiHopSwapResponse {
    const message = createBaseQueryEstimateMultiHopSwapResponse();
    message.coinOut = object.coinOut !== undefined && object.coinOut !== null ? Coin.fromPartial(object.coinOut) : undefined;
    return message;
  }
};
function createBaseQueryEstimatePlaceLimitOrderRequest(): QueryEstimatePlaceLimitOrderRequest {
  return {
    creator: '',
    receiver: '',
    tokenIn: '',
    tokenOut: '',
    tickIndexInToOut: Long.ZERO,
    amountIn: '',
    orderType: 0,
    expirationTime: undefined,
    maxAmountOut: undefined
  };
}
export const QueryEstimatePlaceLimitOrderRequest = {
  encode(message: QueryEstimatePlaceLimitOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== '') {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenIn !== '') {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== '') {
      writer.uint32(34).string(message.tokenOut);
    }
    if (!message.tickIndexInToOut.isZero()) {
      writer.uint32(40).int64(message.tickIndexInToOut);
    }
    if (message.amountIn !== '') {
      writer.uint32(50).string(message.amountIn);
    }
    if (message.orderType !== 0) {
      writer.uint32(56).int32(message.orderType);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.maxAmountOut !== undefined) {
      writer.uint32(74).string(message.maxAmountOut);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimatePlaceLimitOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatePlaceLimitOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.tickIndexInToOut = (reader.int64() as Long);
          break;
        case 6:
          message.amountIn = reader.string();
          break;
        case 7:
          message.orderType = (reader.int32() as any);
          break;
        case 8:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.maxAmountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimatePlaceLimitOrderRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      receiver: isSet(object.receiver) ? String(object.receiver) : '',
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : '',
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : '',
      tickIndexInToOut: isSet(object.tickIndexInToOut) ? Long.fromValue(object.tickIndexInToOut) : Long.ZERO,
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : '',
      orderType: isSet(object.orderType) ? limitOrderTypeFromJSON(object.orderType) : -1,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      maxAmountOut: isSet(object.maxAmountOut) ? String(object.maxAmountOut) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryEstimatePlaceLimitOrderRequest>): QueryEstimatePlaceLimitOrderRequest {
    const message = createBaseQueryEstimatePlaceLimitOrderRequest();
    message.creator = object.creator ?? '';
    message.receiver = object.receiver ?? '';
    message.tokenIn = object.tokenIn ?? '';
    message.tokenOut = object.tokenOut ?? '';
    message.tickIndexInToOut = object.tickIndexInToOut !== undefined && object.tickIndexInToOut !== null ? Long.fromValue(object.tickIndexInToOut) : Long.ZERO;
    message.amountIn = object.amountIn ?? '';
    message.orderType = object.orderType ?? 0;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.maxAmountOut = object.maxAmountOut ?? undefined;
    return message;
  }
};
function createBaseQueryEstimatePlaceLimitOrderResponse(): QueryEstimatePlaceLimitOrderResponse {
  return {
    totalInCoin: Coin.fromPartial({}),
    swapInCoin: Coin.fromPartial({}),
    swapOutCoin: Coin.fromPartial({})
  };
}
export const QueryEstimatePlaceLimitOrderResponse = {
  encode(message: QueryEstimatePlaceLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalInCoin !== undefined) {
      Coin.encode(message.totalInCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapInCoin !== undefined) {
      Coin.encode(message.swapInCoin, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapOutCoin !== undefined) {
      Coin.encode(message.swapOutCoin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimatePlaceLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatePlaceLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalInCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.swapInCoin = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.swapOutCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimatePlaceLimitOrderResponse {
    return {
      totalInCoin: isSet(object.totalInCoin) ? Coin.fromJSON(object.totalInCoin) : undefined,
      swapInCoin: isSet(object.swapInCoin) ? Coin.fromJSON(object.swapInCoin) : undefined,
      swapOutCoin: isSet(object.swapOutCoin) ? Coin.fromJSON(object.swapOutCoin) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryEstimatePlaceLimitOrderResponse>): QueryEstimatePlaceLimitOrderResponse {
    const message = createBaseQueryEstimatePlaceLimitOrderResponse();
    message.totalInCoin = object.totalInCoin !== undefined && object.totalInCoin !== null ? Coin.fromPartial(object.totalInCoin) : undefined;
    message.swapInCoin = object.swapInCoin !== undefined && object.swapInCoin !== null ? Coin.fromPartial(object.swapInCoin) : undefined;
    message.swapOutCoin = object.swapOutCoin !== undefined && object.swapOutCoin !== null ? Coin.fromPartial(object.swapOutCoin) : undefined;
    return message;
  }
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    pairID: '',
    tickIndex: Long.ZERO,
    fee: Long.UZERO
  };
}
export const QueryPoolRequest = {
  encode(message: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairID !== '') {
      writer.uint32(10).string(message.pairID);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (!message.fee.isZero()) {
      writer.uint32(24).uint64(message.fee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairID = reader.string();
          break;
        case 2:
          message.tickIndex = (reader.int64() as Long);
          break;
        case 3:
          message.fee = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolRequest {
    return {
      pairID: isSet(object.pairID) ? String(object.pairID) : '',
      tickIndex: isSet(object.tickIndex) ? Long.fromValue(object.tickIndex) : Long.ZERO,
      fee: isSet(object.fee) ? Long.fromValue(object.fee) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.pairID = object.pairID ?? '';
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    message.fee = object.fee !== undefined && object.fee !== null ? Long.fromValue(object.fee) : Long.UZERO;
    return message;
  }
};
function createBaseQueryPoolByIDRequest(): QueryPoolByIDRequest {
  return {
    poolID: Long.UZERO
  };
}
export const QueryPoolByIDRequest = {
  encode(message: QueryPoolByIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolID.isZero()) {
      writer.uint32(8).uint64(message.poolID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolID = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolByIDRequest {
    return {
      poolID: isSet(object.poolID) ? Long.fromValue(object.poolID) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<QueryPoolByIDRequest>): QueryPoolByIDRequest {
    const message = createBaseQueryPoolByIDRequest();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? Long.fromValue(object.poolID) : Long.UZERO;
    return message;
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}
export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  }
};
function createBaseQueryGetPoolMetadataRequest(): QueryGetPoolMetadataRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryGetPoolMetadataRequest = {
  encode(message: QueryGetPoolMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolMetadataRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: DeepPartial<QueryGetPoolMetadataRequest>): QueryGetPoolMetadataRequest {
    const message = createBaseQueryGetPoolMetadataRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetPoolMetadataResponse(): QueryGetPoolMetadataResponse {
  return {
    PoolMetadata: PoolMetadata.fromPartial({})
  };
}
export const QueryGetPoolMetadataResponse = {
  encode(message: QueryGetPoolMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.PoolMetadata !== undefined) {
      PoolMetadata.encode(message.PoolMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PoolMetadata = PoolMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolMetadataResponse {
    return {
      PoolMetadata: isSet(object.PoolMetadata) ? PoolMetadata.fromJSON(object.PoolMetadata) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryGetPoolMetadataResponse>): QueryGetPoolMetadataResponse {
    const message = createBaseQueryGetPoolMetadataResponse();
    message.PoolMetadata = object.PoolMetadata !== undefined && object.PoolMetadata !== null ? PoolMetadata.fromPartial(object.PoolMetadata) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolMetadataRequest(): QueryAllPoolMetadataRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllPoolMetadataRequest = {
  encode(message: QueryAllPoolMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolMetadataRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllPoolMetadataRequest>): QueryAllPoolMetadataRequest {
    const message = createBaseQueryAllPoolMetadataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllPoolMetadataResponse(): QueryAllPoolMetadataResponse {
  return {
    PoolMetadata: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllPoolMetadataResponse = {
  encode(message: QueryAllPoolMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.PoolMetadata) {
      PoolMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PoolMetadata.push(PoolMetadata.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolMetadataResponse {
    return {
      PoolMetadata: Array.isArray(object?.PoolMetadata) ? object.PoolMetadata.map((e: any) => PoolMetadata.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: DeepPartial<QueryAllPoolMetadataResponse>): QueryAllPoolMetadataResponse {
    const message = createBaseQueryAllPoolMetadataResponse();
    message.PoolMetadata = object.PoolMetadata?.map(e => PoolMetadata.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};