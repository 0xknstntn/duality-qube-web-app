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
var _helpers = require("../../../../helpers");
var _query = require("./query");
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.getNodeInfo = this.getNodeInfo.bind(this);
    this.getSyncing = this.getSyncing.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
    this.aBCIQuery = this.aBCIQuery.bind(this);
  }
  /* GetNodeInfo queries the current node info. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "getNodeInfo",
    value: function () {
      var _getNodeInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _params,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              endpoint = "cosmos/base/tendermint/v1beta1/node_info";
              _context.t0 = _query.GetNodeInfoResponse;
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
      function getNodeInfo() {
        return _getNodeInfo.apply(this, arguments);
      }
      return getNodeInfo;
    }() /* GetSyncing queries node syncing. */
  }, {
    key: "getSyncing",
    value: function () {
      var _getSyncing = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _params,
          endpoint,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              endpoint = "cosmos/base/tendermint/v1beta1/syncing";
              _context2.t0 = _query.GetSyncingResponse;
              _context2.next = 5;
              return this.req.get(endpoint);
            case 5:
              _context2.t1 = _context2.sent;
              return _context2.abrupt("return", _context2.t0.fromJSON.call(_context2.t0, _context2.t1));
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getSyncing() {
        return _getSyncing.apply(this, arguments);
      }
      return getSyncing;
    }() /* GetLatestBlock returns the latest block. */
  }, {
    key: "getLatestBlock",
    value: function () {
      var _getLatestBlock = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _params,
          endpoint,
          _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
              endpoint = "cosmos/base/tendermint/v1beta1/blocks/latest";
              _context3.t0 = _query.GetLatestBlockResponse;
              _context3.next = 5;
              return this.req.get(endpoint);
            case 5:
              _context3.t1 = _context3.sent;
              return _context3.abrupt("return", _context3.t0.fromJSON.call(_context3.t0, _context3.t1));
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getLatestBlock() {
        return _getLatestBlock.apply(this, arguments);
      }
      return getLatestBlock;
    }() /* GetBlockByHeight queries block for given height. */
  }, {
    key: "getBlockByHeight",
    value: function () {
      var _getBlockByHeight = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              endpoint = "cosmos/base/tendermint/v1beta1/blocks/".concat(params.height);
              _context4.t0 = _query.GetBlockByHeightResponse;
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
      function getBlockByHeight(_x) {
        return _getBlockByHeight.apply(this, arguments);
      }
      return getBlockByHeight;
    }() /* GetLatestValidatorSet queries latest validator-set. */
  }, {
    key: "getLatestValidatorSet",
    value: function () {
      var _getLatestValidatorSet = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var params,
          options,
          endpoint,
          _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              params = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/base/tendermint/v1beta1/validatorsets/latest";
              _context5.t0 = _query.GetLatestValidatorSetResponse;
              _context5.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              _context5.t1 = _context5.sent;
              return _context5.abrupt("return", _context5.t0.fromJSON.call(_context5.t0, _context5.t1));
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getLatestValidatorSet() {
        return _getLatestValidatorSet.apply(this, arguments);
      }
      return getLatestValidatorSet;
    }() /* GetValidatorSetByHeight queries validator-set at a given height. */
  }, {
    key: "getValidatorSetByHeight",
    value: function () {
      var _getValidatorSetByHeight = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
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
              endpoint = "cosmos/base/tendermint/v1beta1/validatorsets/".concat(params.height);
              _context6.t0 = _query.GetValidatorSetByHeightResponse;
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
      function getValidatorSetByHeight(_x2) {
        return _getValidatorSetByHeight.apply(this, arguments);
      }
      return getValidatorSetByHeight;
    }()
    /* ABCIQuery defines a query handler that supports ABCI queries directly to the
     application, bypassing Tendermint completely. The ABCI query must contain
     a valid and supported path, including app, custom, p2p, and store.
    
     Since: cosmos-sdk 0.46 */
  }, {
    key: "aBCIQuery",
    value: function () {
      var _aBCIQuery = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.data) !== "undefined") {
                options.params.data = params.data;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.path) !== "undefined") {
                options.params.path = params.path;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.height) !== "undefined") {
                options.params.height = params.height;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.prove) !== "undefined") {
                options.params.prove = params.prove;
              }
              endpoint = "cosmos/base/tendermint/v1beta1/abci_query";
              _context7.t0 = _query.ABCIQueryResponse;
              _context7.next = 9;
              return this.req.get(endpoint, options);
            case 9:
              _context7.t1 = _context7.sent;
              return _context7.abrupt("return", _context7.t0.fromJSON.call(_context7.t0, _context7.t1));
            case 11:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function aBCIQuery(_x3) {
        return _aBCIQuery.apply(this, arguments);
      }
      return aBCIQuery;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;