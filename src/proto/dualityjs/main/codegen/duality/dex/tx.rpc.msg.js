"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _tx = require("./tx");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Msg defines the Msg service. */
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.deposit = this.deposit.bind(this);
    this.withdrawal = this.withdrawal.bind(this);
    this.placeLimitOrder = this.placeLimitOrder.bind(this);
    this.withdrawFilledLimitOrder = this.withdrawFilledLimitOrder.bind(this);
    this.cancelLimitOrder = this.cancelLimitOrder.bind(this);
    this.multiHopSwap = this.multiHopSwap.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "deposit",
    value: function deposit(request) {
      var data = _tx.MsgDeposit.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Msg", "Deposit", data);
      return promise.then(function (data) {
        return _tx.MsgDepositResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "withdrawal",
    value: function withdrawal(request) {
      var data = _tx.MsgWithdrawal.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Msg", "Withdrawal", data);
      return promise.then(function (data) {
        return _tx.MsgWithdrawalResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "placeLimitOrder",
    value: function placeLimitOrder(request) {
      var data = _tx.MsgPlaceLimitOrder.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Msg", "PlaceLimitOrder", data);
      return promise.then(function (data) {
        return _tx.MsgPlaceLimitOrderResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "withdrawFilledLimitOrder",
    value: function withdrawFilledLimitOrder(request) {
      var data = _tx.MsgWithdrawFilledLimitOrder.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Msg", "WithdrawFilledLimitOrder", data);
      return promise.then(function (data) {
        return _tx.MsgWithdrawFilledLimitOrderResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "cancelLimitOrder",
    value: function cancelLimitOrder(request) {
      var data = _tx.MsgCancelLimitOrder.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Msg", "CancelLimitOrder", data);
      return promise.then(function (data) {
        return _tx.MsgCancelLimitOrderResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "multiHopSwap",
    value: function multiHopSwap(request) {
      var data = _tx.MsgMultiHopSwap.encode(request).finish();
      var promise = this.rpc.request("duality.dex.Msg", "MultiHopSwap", data);
      return promise.then(function (data) {
        return _tx.MsgMultiHopSwapResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;