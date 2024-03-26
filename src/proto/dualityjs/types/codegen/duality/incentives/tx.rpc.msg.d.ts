import { Rpc } from "../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
    addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
    stake(request: MsgStake): Promise<MsgStakeResponse>;
    unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
}
