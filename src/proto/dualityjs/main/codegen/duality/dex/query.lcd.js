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
var _helpers = require("../../helpers");
var _query = require("./query");
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.limitOrderTrancheUser = this.limitOrderTrancheUser.bind(this);
    this.limitOrderTrancheUserAll = this.limitOrderTrancheUserAll.bind(this);
    this.limitOrderTrancheUserAllByAddress = this.limitOrderTrancheUserAllByAddress.bind(this);
    this.limitOrderTranche = this.limitOrderTranche.bind(this);
    this.limitOrderTrancheAll = this.limitOrderTrancheAll.bind(this);
    this.userDepositsAll = this.userDepositsAll.bind(this);
    this.tickLiquidityAll = this.tickLiquidityAll.bind(this);
    this.inactiveLimitOrderTranche = this.inactiveLimitOrderTranche.bind(this);
    this.inactiveLimitOrderTrancheAll = this.inactiveLimitOrderTrancheAll.bind(this);
    this.poolReservesAll = this.poolReservesAll.bind(this);
    this.poolReserves = this.poolReserves.bind(this);
    this.estimateMultiHopSwap = this.estimateMultiHopSwap.bind(this);
    this.estimatePlaceLimitOrder = this.estimatePlaceLimitOrder.bind(this);
    this.pool = this.pool.bind(this);
    this.poolByID = this.poolByID.bind(this);
    this.poolMetadata = this.poolMetadata.bind(this);
    this.poolMetadataAll = this.poolMetadataAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _params,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              endpoint = "duality/dex/params";
              _context.t0 = _query.QueryParamsResponse;
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
      function params() {
        return _params2.apply(this, arguments);
      }
      return params;
    }() /* Queries a LimitOrderTrancheUser by index. */
  }, {
    key: "limitOrderTrancheUser",
    value: function () {
      var _limitOrderTrancheUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "duality/dex/limit_order_tranche_user/".concat(params.address, "/").concat(params.trancheKey);
              _context2.t0 = _query.QueryGetLimitOrderTrancheUserResponse;
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
      function limitOrderTrancheUser(_x) {
        return _limitOrderTrancheUser.apply(this, arguments);
      }
      return limitOrderTrancheUser;
    }() /* Queries a list of LimitOrderTrancheMap items. */
  }, {
    key: "limitOrderTrancheUserAll",
    value: function () {
      var _limitOrderTrancheUserAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var params,
          options,
          endpoint,
          _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "duality/dex/limit_order_tranche_user";
              _context3.t0 = _query.QueryAllLimitOrderTrancheUserResponse;
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
      function limitOrderTrancheUserAll() {
        return _limitOrderTrancheUserAll.apply(this, arguments);
      }
      return limitOrderTrancheUserAll;
    }() /* Queries a list of LimitOrderTrancheUser items for a given address. */
  }, {
    key: "limitOrderTrancheUserAllByAddress",
    value: function () {
      var _limitOrderTrancheUserAllByAddress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "duality/dex/user/limit_orders/".concat(params.address);
              _context4.t0 = _query.QueryAllUserLimitOrdersResponse;
              _context4.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context4.t1 = _context4.sent;
              return _context4.abrupt("return", _context4.t0.fromJSON.call(_context4.t0, _context4.t1));
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function limitOrderTrancheUserAllByAddress(_x2) {
        return _limitOrderTrancheUserAllByAddress.apply(this, arguments);
      }
      return limitOrderTrancheUserAllByAddress;
    }() /* Queries a LimitOrderTranche by index. */
  }, {
    key: "limitOrderTranche",
    value: function () {
      var _limitOrderTranche = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              endpoint = "duality/dex/limit_order_tranche/".concat(params.pairID, "/").concat(params.tokenIn, "/").concat(params.tickIndex, "/").concat(params.trancheKey);
              _context5.t0 = _query.QueryGetLimitOrderTrancheResponse;
              _context5.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context5.t1 = _context5.sent;
              return _context5.abrupt("return", _context5.t0.fromJSON.call(_context5.t0, _context5.t1));
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function limitOrderTranche(_x3) {
        return _limitOrderTranche.apply(this, arguments);
      }
      return limitOrderTranche;
    }() /* Queries a list of LimitOrderTranche items for a given pairID / TokenIn combination. */
  }, {
    key: "limitOrderTrancheAll",
    value: function () {
      var _limitOrderTrancheAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "duality/dex/limit_order_tranche/".concat(params.pairID, "/").concat(params.tokenIn);
              _context6.t0 = _query.QueryAllLimitOrderTrancheResponse;
              _context6.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context6.t1 = _context6.sent;
              return _context6.abrupt("return", _context6.t0.fromJSON.call(_context6.t0, _context6.t1));
            case 8:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function limitOrderTrancheAll(_x4) {
        return _limitOrderTrancheAll.apply(this, arguments);
      }
      return limitOrderTrancheAll;
    }() /* Queries a list of UserDeposits items. */
  }, {
    key: "userDepositsAll",
    value: function () {
      var _userDepositsAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "duality/dex/user/deposits/".concat(params.address);
              _context7.t0 = _query.QueryAllUserDepositsResponse;
              _context7.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context7.t1 = _context7.sent;
              return _context7.abrupt("return", _context7.t0.fromJSON.call(_context7.t0, _context7.t1));
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function userDepositsAll(_x5) {
        return _userDepositsAll.apply(this, arguments);
      }
      return userDepositsAll;
    }() /* Queries a list of TickLiquidity items. */
  }, {
    key: "tickLiquidityAll",
    value: function () {
      var _tickLiquidityAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "duality/dex/tick_liquidity/".concat(params.pairID, "/").concat(params.tokenIn);
              _context8.t0 = _query.QueryAllTickLiquidityResponse;
              _context8.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context8.t1 = _context8.sent;
              return _context8.abrupt("return", _context8.t0.fromJSON.call(_context8.t0, _context8.t1));
            case 8:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function tickLiquidityAll(_x6) {
        return _tickLiquidityAll.apply(this, arguments);
      }
      return tickLiquidityAll;
    }() /* Queries a InactiveLimitOrderTranche by index. */
  }, {
    key: "inactiveLimitOrderTranche",
    value: function () {
      var _inactiveLimitOrderTranche = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              endpoint = "duality/dex/filled_limit_order_tranche/".concat(params.pairID, "/").concat(params.tokenIn, "/").concat(params.tickIndex, "/").concat(params.trancheKey);
              _context9.t0 = _query.QueryGetInactiveLimitOrderTrancheResponse;
              _context9.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context9.t1 = _context9.sent;
              return _context9.abrupt("return", _context9.t0.fromJSON.call(_context9.t0, _context9.t1));
            case 6:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function inactiveLimitOrderTranche(_x7) {
        return _inactiveLimitOrderTranche.apply(this, arguments);
      }
      return inactiveLimitOrderTranche;
    }() /* Queries a list of InactiveLimitOrderTranche items. */
  }, {
    key: "inactiveLimitOrderTrancheAll",
    value: function () {
      var _inactiveLimitOrderTrancheAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        var params,
          options,
          endpoint,
          _args10 = arguments;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              params = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "duality/dex/filled_limit_order_tranche";
              _context10.t0 = _query.QueryAllInactiveLimitOrderTrancheResponse;
              _context10.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              _context10.t1 = _context10.sent;
              return _context10.abrupt("return", _context10.t0.fromJSON.call(_context10.t0, _context10.t1));
            case 9:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function inactiveLimitOrderTrancheAll() {
        return _inactiveLimitOrderTrancheAll.apply(this, arguments);
      }
      return inactiveLimitOrderTrancheAll;
    }() /* Queries a list of PoolReserves items. */
  }, {
    key: "poolReservesAll",
    value: function () {
      var _poolReservesAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "duality/dex/pool_reserves/".concat(params.pairID, "/").concat(params.tokenIn);
              _context11.t0 = _query.QueryAllPoolReservesResponse;
              _context11.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context11.t1 = _context11.sent;
              return _context11.abrupt("return", _context11.t0.fromJSON.call(_context11.t0, _context11.t1));
            case 8:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function poolReservesAll(_x8) {
        return _poolReservesAll.apply(this, arguments);
      }
      return poolReservesAll;
    }() /* Queries a PoolReserve by index */
  }, {
    key: "poolReserves",
    value: function () {
      var _poolReserves = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              endpoint = "duality/dex/pool_reserves/".concat(params.pairID, "/").concat(params.tokenIn, "/").concat(params.tickIndex, "/").concat(params.fee);
              _context12.t0 = _query.QueryGetPoolReservesResponse;
              _context12.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context12.t1 = _context12.sent;
              return _context12.abrupt("return", _context12.t0.fromJSON.call(_context12.t0, _context12.t1));
            case 6:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function poolReserves(_x9) {
        return _poolReserves.apply(this, arguments);
      }
      return poolReserves;
    }() /* Queries the simulated result of a multihop swap */
  }, {
    key: "estimateMultiHopSwap",
    value: function () {
      var _estimateMultiHopSwap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.creator) !== "undefined") {
                options.params.creator = params.creator;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.receiver) !== "undefined") {
                options.params.receiver = params.receiver;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.routes) !== "undefined") {
                options.params.routes = params.routes;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.amountIn) !== "undefined") {
                options.params.amountIn = params.amountIn;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.exitLimitPrice) !== "undefined") {
                options.params.exitLimitPrice = params.exitLimitPrice;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.pickBestRoute) !== "undefined") {
                options.params.pickBestRoute = params.pickBestRoute;
              }
              endpoint = "duality/dex/estimate_multi_hop_swap";
              _context13.t0 = _query.QueryEstimateMultiHopSwapResponse;
              _context13.next = 11;
              return this.req.get(endpoint, options);
            case 11:
              _context13.t1 = _context13.sent;
              return _context13.abrupt("return", _context13.t0.fromJSON.call(_context13.t0, _context13.t1));
            case 13:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function estimateMultiHopSwap(_x10) {
        return _estimateMultiHopSwap.apply(this, arguments);
      }
      return estimateMultiHopSwap;
    }() /* Queries the simulated result of a multihop swap */
  }, {
    key: "estimatePlaceLimitOrder",
    value: function () {
      var _estimatePlaceLimitOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.creator) !== "undefined") {
                options.params.creator = params.creator;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.receiver) !== "undefined") {
                options.params.receiver = params.receiver;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.tokenIn) !== "undefined") {
                options.params.tokenIn = params.tokenIn;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.tokenOut) !== "undefined") {
                options.params.tokenOut = params.tokenOut;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.tickIndexInToOut) !== "undefined") {
                options.params.tickIndexInToOut = params.tickIndexInToOut;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.amountIn) !== "undefined") {
                options.params.amountIn = params.amountIn;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.orderType) !== "undefined") {
                options.params.orderType = params.orderType;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.expirationTime) !== "undefined") {
                options.params.expirationTime = params.expirationTime;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.maxAmountOut) !== "undefined") {
                options.params.maxAmountOut = params.maxAmountOut;
              }
              endpoint = "duality/dex/estimate_place_limit_order";
              _context14.t0 = _query.QueryEstimatePlaceLimitOrderResponse;
              _context14.next = 14;
              return this.req.get(endpoint, options);
            case 14:
              _context14.t1 = _context14.sent;
              return _context14.abrupt("return", _context14.t0.fromJSON.call(_context14.t0, _context14.t1));
            case 16:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function estimatePlaceLimitOrder(_x11) {
        return _estimatePlaceLimitOrder.apply(this, arguments);
      }
      return estimatePlaceLimitOrder;
    }() /* Queries a pool by pair, tick and fee */
  }, {
    key: "pool",
    value: function () {
      var _pool = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              endpoint = "duality/dex/pool/".concat(params.pairID, "/").concat(params.tickIndex, "/").concat(params.fee);
              _context15.t0 = _query.QueryPoolResponse;
              _context15.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context15.t1 = _context15.sent;
              return _context15.abrupt("return", _context15.t0.fromJSON.call(_context15.t0, _context15.t1));
            case 6:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function pool(_x12) {
        return _pool.apply(this, arguments);
      }
      return pool;
    }() /* Queries a pool by ID */
  }, {
    key: "poolByID",
    value: function () {
      var _poolByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              endpoint = "duality/dex/pool/".concat(params.poolID);
              _context16.t0 = _query.QueryPoolResponse;
              _context16.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context16.t1 = _context16.sent;
              return _context16.abrupt("return", _context16.t0.fromJSON.call(_context16.t0, _context16.t1));
            case 6:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function poolByID(_x13) {
        return _poolByID.apply(this, arguments);
      }
      return poolByID;
    }() /* Queries a PoolMetadata by ID */
  }, {
    key: "poolMetadata",
    value: function () {
      var _poolMetadata = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              endpoint = "duality/dex/pool_metadata/".concat(params.id);
              _context17.t0 = _query.QueryGetPoolMetadataResponse;
              _context17.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context17.t1 = _context17.sent;
              return _context17.abrupt("return", _context17.t0.fromJSON.call(_context17.t0, _context17.t1));
            case 6:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function poolMetadata(_x14) {
        return _poolMetadata.apply(this, arguments);
      }
      return poolMetadata;
    }() /* Queries a list of PoolMetadata items. */
  }, {
    key: "poolMetadataAll",
    value: function () {
      var _poolMetadataAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
        var params,
          options,
          endpoint,
          _args18 = arguments;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              params = _args18.length > 0 && _args18[0] !== undefined ? _args18[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "duality/dex/pool_metadata";
              _context18.t0 = _query.QueryAllPoolMetadataResponse;
              _context18.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              _context18.t1 = _context18.sent;
              return _context18.abrupt("return", _context18.t0.fromJSON.call(_context18.t0, _context18.t1));
            case 9:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this);
      }));
      function poolMetadataAll() {
        return _poolMetadataAll.apply(this, arguments);
      }
      return poolMetadataAll;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;