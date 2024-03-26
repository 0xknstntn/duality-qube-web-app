import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgAuctionBid, MsgAuctionBidResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the x/builder Msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.auctionBid = this.auctionBid.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  auctionBid(request) {
    const data = MsgAuctionBid.encode(request).finish();
    const promise = this.rpc.request("pob.builder.v1.Msg", "AuctionBid", data);
    return promise.then(data => MsgAuctionBidResponse.decode(new _m0.Reader(data)));
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pob.builder.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}