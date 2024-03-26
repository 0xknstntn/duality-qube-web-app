"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LCDQueryClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _query = require("./query");
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.getModuleStatus = this.getModuleStatus.bind(this);
    this.getGaugeByID = this.getGaugeByID.bind(this);
    this.getGauges = this.getGauges.bind(this);
    this.getStakeByID = this.getStakeByID.bind(this);
    this.getStakes = this.getStakes.bind(this);
    this.getFutureRewardEstimate = this.getFutureRewardEstimate.bind(this);
    this.getAccountHistory = this.getAccountHistory.bind(this);
    this.getGaugeQualifyingValue = this.getGaugeQualifyingValue.bind(this);
  }
  /* GetModuleStatus returns a rundown of coins in the module and their status */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "getModuleStatus",
    value: function () {
      var _getModuleStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _params,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              endpoint = "duality/incentives/v1beta1/module_status";
              _context.t0 = _query.GetModuleStatusResponse;
              _context.next = 5;
              return this.req.get(endpoint);
            case 5:
              _context.t1 = _context.sent;
              return _context.abrupt("return", _context.t0.fromJSON.call(_context.t0, _context.t1));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getModuleStatus() {
        return _getModuleStatus.apply(this, arguments);
      }
      return getModuleStatus;
    }() /* GetGaugeByID returns a gauge by its ID */
  }, {
    key: "getGaugeByID",
    value: function () {
      var _getGaugeByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "duality/incentives/v1beta1/gauges/".concat(params.id);
              _context2.t0 = _query.GetGaugeByIDResponse;
              _context2.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context2.t1 = _context2.sent;
              return _context2.abrupt("return", _context2.t0.fromJSON.call(_context2.t0, _context2.t1));
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getGaugeByID(_x) {
        return _getGaugeByID.apply(this, arguments);
      }
      return getGaugeByID;
    }() /* GetGauges returns gauges according to the filter provided */
  }, {
    key: "getGauges",
    value: function () {
      var _getGauges = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.status) !== "undefined") {
                options.params.status = params.status;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              endpoint = "duality/incentives/v1beta1/gauges";
              _context3.t0 = _query.GetGaugesResponse;
              _context3.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              _context3.t1 = _context3.sent;
              return _context3.abrupt("return", _context3.t0.fromJSON.call(_context3.t0, _context3.t1));
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getGauges(_x2) {
        return _getGauges.apply(this, arguments);
      }
      return getGauges;
    }() /* GetStakeByID returns a stake by its ID */
  }, {
    key: "getStakeByID",
    value: function () {
      var _getStakeByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              endpoint = "duality/incentives/stakes/".concat(params.stake_id);
              _context4.t0 = _query.GetStakeByIDResponse;
              _context4.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context4.t1 = _context4.sent;
              return _context4.abrupt("return", _context4.t0.fromJSON.call(_context4.t0, _context4.t1));
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getStakeByID(_x3) {
        return _getStakeByID.apply(this, arguments);
      }
      return getStakeByID;
    }() /* GetStakes returns stakes by the filter provided. At least one filter must be provided. */
  }, {
    key: "getStakes",
    value: function () {
      var _getStakes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.owner) !== "undefined") {
                options.params.owner = params.owner;
              }
              endpoint = "duality/incentives/stakes";
              _context5.t0 = _query.GetStakesResponse;
              _context5.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context5.t1 = _context5.sent;
              return _context5.abrupt("return", _context5.t0.fromJSON.call(_context5.t0, _context5.t1));
            case 8:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getStakes(_x4) {
        return _getStakes.apply(this, arguments);
      }
      return getStakes;
    }()
    /* GetFutureRewardsEstimate returns an estimate of the rewards from now until a specified
     time in the future. The requestor either provides an address or a set of locks
     for which they want to find the associated rewards. */
  }, {
    key: "getFutureRewardEstimate",
    value: function () {
      var _getFutureRewardEstimate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.stake_ids) !== "undefined") {
                options.params.stake_ids = params.stake_ids;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.num_epochs) !== "undefined") {
                options.params.num_epochs = params.num_epochs;
              }
              endpoint = "duality/incentives/v1beta1/future_rewards_estimate/".concat(params.owner);
              _context6.t0 = _query.GetFutureRewardEstimateResponse;
              _context6.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              _context6.t1 = _context6.sent;
              return _context6.abrupt("return", _context6.t0.fromJSON.call(_context6.t0, _context6.t1));
            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function getFutureRewardEstimate(_x5) {
        return _getFutureRewardEstimate.apply(this, arguments);
      }
      return getFutureRewardEstimate;
    }() /* GetAccountHistory returns the total accumulated rewards per denom for a given user. */
  }, {
    key: "getAccountHistory",
    value: function () {
      var _getAccountHistory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              endpoint = "duality/incentives/v1beta1/account_history/".concat(params.account);
              _context7.t0 = _query.GetAccountHistoryResponse;
              _context7.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context7.t1 = _context7.sent;
              return _context7.abrupt("return", _context7.t0.fromJSON.call(_context7.t0, _context7.t1));
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function getAccountHistory(_x6) {
        return _getAccountHistory.apply(this, arguments);
      }
      return getAccountHistory;
    }()
    /* Returns the total amount of value currently qualifying for the gauge. This is useful for calculating
     the prospective future rewards of staking. */
  }, {
    key: "getGaugeQualifyingValue",
    value: function () {
      var _getGaugeQualifyingValue = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              endpoint = "duality/incentives/v1beta1/get_gauge_qualifying_value/".concat(params.id);
              _context8.t0 = _query.GetGaugeQualifyingValueResponse;
              _context8.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context8.t1 = _context8.sent;
              return _context8.abrupt("return", _context8.t0.fromJSON.call(_context8.t0, _context8.t1));
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function getGaugeQualifyingValue(_x7) {
        return _getGaugeQualifyingValue.apply(this, arguments);
      }
      return getGaugeQualifyingValue;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;