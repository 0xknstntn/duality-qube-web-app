import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgDeposit, MsgDepositResponse, MsgWithdrawal, MsgWithdrawalResponse, MsgPlaceLimitOrder, MsgPlaceLimitOrderResponse, MsgWithdrawFilledLimitOrder, MsgWithdrawFilledLimitOrderResponse, MsgCancelLimitOrder, MsgCancelLimitOrderResponse, MsgMultiHopSwap, MsgMultiHopSwapResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  withdrawal(request: MsgWithdrawal): Promise<MsgWithdrawalResponse>;
  placeLimitOrder(request: MsgPlaceLimitOrder): Promise<MsgPlaceLimitOrderResponse>;
  withdrawFilledLimitOrder(request: MsgWithdrawFilledLimitOrder): Promise<MsgWithdrawFilledLimitOrderResponse>;
  cancelLimitOrder(request: MsgCancelLimitOrder): Promise<MsgCancelLimitOrderResponse>;
  multiHopSwap(request: MsgMultiHopSwap): Promise<MsgMultiHopSwapResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.deposit = this.deposit.bind(this);
    this.withdrawal = this.withdrawal.bind(this);
    this.placeLimitOrder = this.placeLimitOrder.bind(this);
    this.withdrawFilledLimitOrder = this.withdrawFilledLimitOrder.bind(this);
    this.cancelLimitOrder = this.cancelLimitOrder.bind(this);
    this.multiHopSwap = this.multiHopSwap.bind(this);
  }
  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }
  withdrawal(request: MsgWithdrawal): Promise<MsgWithdrawalResponse> {
    const data = MsgWithdrawal.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Msg", "Withdrawal", data);
    return promise.then(data => MsgWithdrawalResponse.decode(new _m0.Reader(data)));
  }
  placeLimitOrder(request: MsgPlaceLimitOrder): Promise<MsgPlaceLimitOrderResponse> {
    const data = MsgPlaceLimitOrder.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Msg", "PlaceLimitOrder", data);
    return promise.then(data => MsgPlaceLimitOrderResponse.decode(new _m0.Reader(data)));
  }
  withdrawFilledLimitOrder(request: MsgWithdrawFilledLimitOrder): Promise<MsgWithdrawFilledLimitOrderResponse> {
    const data = MsgWithdrawFilledLimitOrder.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Msg", "WithdrawFilledLimitOrder", data);
    return promise.then(data => MsgWithdrawFilledLimitOrderResponse.decode(new _m0.Reader(data)));
  }
  cancelLimitOrder(request: MsgCancelLimitOrder): Promise<MsgCancelLimitOrderResponse> {
    const data = MsgCancelLimitOrder.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Msg", "CancelLimitOrder", data);
    return promise.then(data => MsgCancelLimitOrderResponse.decode(new _m0.Reader(data)));
  }
  multiHopSwap(request: MsgMultiHopSwap): Promise<MsgMultiHopSwapResponse> {
    const data = MsgMultiHopSwap.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Msg", "MultiHopSwap", data);
    return promise.then(data => MsgMultiHopSwapResponse.decode(new _m0.Reader(data)));
  }
}