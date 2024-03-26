import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgDeposit, MsgDepositResponse, MsgWithdrawal, MsgWithdrawalResponse, MsgPlaceLimitOrder, MsgPlaceLimitOrderResponse, MsgWithdrawFilledLimitOrder, MsgWithdrawFilledLimitOrderResponse, MsgCancelLimitOrder, MsgCancelLimitOrderResponse, MsgMultiHopSwap, MsgMultiHopSwapResponse } from "./tx";
/** Msg defines the Msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.deposit = this.deposit.bind(this);
    this.withdrawal = this.withdrawal.bind(this);
    this.placeLimitOrder = this.placeLimitOrder.bind(this);
    this.withdrawFilledLimitOrder = this.withdrawFilledLimitOrder.bind(this);
    this.cancelLimitOrder = this.cancelLimitOrder.bind(this);
    this.multiHopSwap = this.multiHopSwap.bind(this);
  }
  deposit(request) {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }
  withdrawal(request) {
    const data = MsgWithdrawal.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Msg", "Withdrawal", data);
    return promise.then(data => MsgWithdrawalResponse.decode(new _m0.Reader(data)));
  }
  placeLimitOrder(request) {
    const data = MsgPlaceLimitOrder.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Msg", "PlaceLimitOrder", data);
    return promise.then(data => MsgPlaceLimitOrderResponse.decode(new _m0.Reader(data)));
  }
  withdrawFilledLimitOrder(request) {
    const data = MsgWithdrawFilledLimitOrder.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Msg", "WithdrawFilledLimitOrder", data);
    return promise.then(data => MsgWithdrawFilledLimitOrderResponse.decode(new _m0.Reader(data)));
  }
  cancelLimitOrder(request) {
    const data = MsgCancelLimitOrder.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Msg", "CancelLimitOrder", data);
    return promise.then(data => MsgCancelLimitOrderResponse.decode(new _m0.Reader(data)));
  }
  multiHopSwap(request) {
    const data = MsgMultiHopSwap.encode(request).finish();
    const promise = this.rpc.request("duality.dex.Msg", "MultiHopSwap", data);
    return promise.then(data => MsgMultiHopSwapResponse.decode(new _m0.Reader(data)));
  }
}