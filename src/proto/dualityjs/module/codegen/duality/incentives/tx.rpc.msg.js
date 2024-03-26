import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateGauge, MsgCreateGaugeResponse, MsgAddToGauge, MsgAddToGaugeResponse, MsgStake, MsgStakeResponse, MsgUnstake, MsgUnstakeResponse } from "./tx";
export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.createGauge = this.createGauge.bind(this);
    this.addToGauge = this.addToGauge.bind(this);
    this.stake = this.stake.bind(this);
    this.unstake = this.unstake.bind(this);
  }
  createGauge(request) {
    const data = MsgCreateGauge.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Msg", "CreateGauge", data);
    return promise.then(data => MsgCreateGaugeResponse.decode(new _m0.Reader(data)));
  }
  addToGauge(request) {
    const data = MsgAddToGauge.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Msg", "AddToGauge", data);
    return promise.then(data => MsgAddToGaugeResponse.decode(new _m0.Reader(data)));
  }
  stake(request) {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Msg", "Stake", data);
    return promise.then(data => MsgStakeResponse.decode(new _m0.Reader(data)));
  }
  unstake(request) {
    const data = MsgUnstake.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Msg", "Unstake", data);
    return promise.then(data => MsgUnstakeResponse.decode(new _m0.Reader(data)));
  }
}