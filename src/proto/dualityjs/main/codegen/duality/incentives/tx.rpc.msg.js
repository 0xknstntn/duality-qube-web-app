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
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.createGauge = this.createGauge.bind(this);
    this.addToGauge = this.addToGauge.bind(this);
    this.stake = this.stake.bind(this);
    this.unstake = this.unstake.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "createGauge",
    value: function createGauge(request) {
      var data = _tx.MsgCreateGauge.encode(request).finish();
      var promise = this.rpc.request("duality.incentives.Msg", "CreateGauge", data);
      return promise.then(function (data) {
        return _tx.MsgCreateGaugeResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "addToGauge",
    value: function addToGauge(request) {
      var data = _tx.MsgAddToGauge.encode(request).finish();
      var promise = this.rpc.request("duality.incentives.Msg", "AddToGauge", data);
      return promise.then(function (data) {
        return _tx.MsgAddToGaugeResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "stake",
    value: function stake(request) {
      var data = _tx.MsgStake.encode(request).finish();
      var promise = this.rpc.request("duality.incentives.Msg", "Stake", data);
      return promise.then(function (data) {
        return _tx.MsgStakeResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "unstake",
    value: function unstake(request) {
      var data = _tx.MsgUnstake.encode(request).finish();
      var promise = this.rpc.request("duality.incentives.Msg", "Unstake", data);
      return promise.then(function (data) {
        return _tx.MsgUnstakeResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;