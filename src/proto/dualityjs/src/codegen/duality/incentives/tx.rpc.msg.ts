import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateGauge, MsgCreateGaugeResponse, MsgAddToGauge, MsgAddToGaugeResponse, MsgStake, MsgStakeResponse, MsgUnstake, MsgUnstakeResponse } from "./tx";
export interface Msg {
  /** Create an incentive program */
  createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
  /** Add rewards to an existing incentives program */
  addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
  /** Deposit LP tokens to the module, qualifying for rewards from gauges */
  stake(request: MsgStake): Promise<MsgStakeResponse>;
  /** Withdraw LP tokens from the module, forfeiting future rewards from gauges */
  unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createGauge = this.createGauge.bind(this);
    this.addToGauge = this.addToGauge.bind(this);
    this.stake = this.stake.bind(this);
    this.unstake = this.unstake.bind(this);
  }
  createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse> {
    const data = MsgCreateGauge.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Msg", "CreateGauge", data);
    return promise.then(data => MsgCreateGaugeResponse.decode(new _m0.Reader(data)));
  }
  addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse> {
    const data = MsgAddToGauge.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Msg", "AddToGauge", data);
    return promise.then(data => MsgAddToGaugeResponse.decode(new _m0.Reader(data)));
  }
  stake(request: MsgStake): Promise<MsgStakeResponse> {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Msg", "Stake", data);
    return promise.then(data => MsgStakeResponse.decode(new _m0.Reader(data)));
  }
  unstake(request: MsgUnstake): Promise<MsgUnstakeResponse> {
    const data = MsgUnstake.encode(request).finish();
    const promise = this.rpc.request("duality.incentives.Msg", "Unstake", data);
    return promise.then(data => MsgUnstakeResponse.decode(new _m0.Reader(data)));
  }
}