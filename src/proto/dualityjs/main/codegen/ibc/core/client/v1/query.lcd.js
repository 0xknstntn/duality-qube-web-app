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
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.consensusStateHeights = this.consensusStateHeights.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }
  /* ClientState queries an IBC light client. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "clientState",
    value: function () {
      var _clientState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              endpoint = "ibc/core/client/v1/client_states/".concat(params.client_id);
              _context.t0 = _query.QueryClientStateResponse;
              _context.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context.t1 = _context.sent;
              return _context.abrupt("return", _context.t0.fromJSON.call(_context.t0, _context.t1));
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function clientState(_x) {
        return _clientState.apply(this, arguments);
      }
      return clientState;
    }() /* ClientStates queries all the IBC light clients of a chain. */
  }, {
    key: "clientStates",
    value: function () {
      var _clientStates = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var params,
          options,
          endpoint,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "ibc/core/client/v1/client_states";
              _context2.t0 = _query.QueryClientStatesResponse;
              _context2.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              _context2.t1 = _context2.sent;
              return _context2.abrupt("return", _context2.t0.fromJSON.call(_context2.t0, _context2.t1));
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function clientStates() {
        return _clientStates.apply(this, arguments);
      }
      return clientStates;
    }()
    /* ConsensusState queries a consensus state associated with a client state at
     a given height. */
  }, {
    key: "consensusState",
    value: function () {
      var _consensusState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.latest_height) !== "undefined") {
                options.params.latest_height = params.latest_height;
              }
              endpoint = "ibc/core/client/v1/consensus_states/".concat(params.client_id, "/revision/").concat(params.revision_number, "/height/").concat(params.revision_height);
              _context3.t0 = _query.QueryConsensusStateResponse;
              _context3.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context3.t1 = _context3.sent;
              return _context3.abrupt("return", _context3.t0.fromJSON.call(_context3.t0, _context3.t1));
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function consensusState(_x2) {
        return _consensusState.apply(this, arguments);
      }
      return consensusState;
    }()
    /* ConsensusStates queries all the consensus state associated with a given
     client. */
  }, {
    key: "consensusStates",
    value: function () {
      var _consensusStates = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
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
              endpoint = "ibc/core/client/v1/consensus_states/".concat(params.client_id);
              _context4.t0 = _query.QueryConsensusStatesResponse;
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
      function consensusStates(_x3) {
        return _consensusStates.apply(this, arguments);
      }
      return consensusStates;
    }() /* ConsensusStateHeights queries the height of every consensus states associated with a given client. */
  }, {
    key: "consensusStateHeights",
    value: function () {
      var _consensusStateHeights = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "ibc/core/client/v1/consensus_states/".concat(params.client_id, "/heights");
              _context5.t0 = _query.QueryConsensusStateHeightsResponse;
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
      function consensusStateHeights(_x4) {
        return _consensusStateHeights.apply(this, arguments);
      }
      return consensusStateHeights;
    }() /* Status queries the status of an IBC client. */
  }, {
    key: "clientStatus",
    value: function () {
      var _clientStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              endpoint = "ibc/core/client/v1/client_status/".concat(params.client_id);
              _context6.t0 = _query.QueryClientStatusResponse;
              _context6.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context6.t1 = _context6.sent;
              return _context6.abrupt("return", _context6.t0.fromJSON.call(_context6.t0, _context6.t1));
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function clientStatus(_x5) {
        return _clientStatus.apply(this, arguments);
      }
      return clientStatus;
    }() /* ClientParams queries all parameters of the ibc client submodule. */
  }, {
    key: "clientParams",
    value: function () {
      var _clientParams = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var _params,
          endpoint,
          _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _params = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
              endpoint = "ibc/core/client/v1/params";
              _context7.t0 = _query.QueryClientParamsResponse;
              _context7.next = 5;
              return this.req.get(endpoint);
            case 5:
              _context7.t1 = _context7.sent;
              return _context7.abrupt("return", _context7.t0.fromJSON.call(_context7.t0, _context7.t1));
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function clientParams() {
        return _clientParams.apply(this, arguments);
      }
      return clientParams;
    }() /* UpgradedClientState queries an Upgraded IBC light client. */
  }, {
    key: "upgradedClientState",
    value: function () {
      var _upgradedClientState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        var _params,
          endpoint,
          _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _params = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
              endpoint = "ibc/core/client/v1/upgraded_client_states";
              _context8.t0 = _query.QueryUpgradedClientStateResponse;
              _context8.next = 5;
              return this.req.get(endpoint);
            case 5:
              _context8.t1 = _context8.sent;
              return _context8.abrupt("return", _context8.t0.fromJSON.call(_context8.t0, _context8.t1));
            case 7:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function upgradedClientState() {
        return _upgradedClientState.apply(this, arguments);
      }
      return upgradedClientState;
    }() /* UpgradedConsensusState queries an Upgraded IBC consensus state. */
  }, {
    key: "upgradedConsensusState",
    value: function () {
      var _upgradedConsensusState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
        var _params,
          endpoint,
          _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _params = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {};
              endpoint = "ibc/core/client/v1/upgraded_consensus_states";
              _context9.t0 = _query.QueryUpgradedConsensusStateResponse;
              _context9.next = 5;
              return this.req.get(endpoint);
            case 5:
              _context9.t1 = _context9.sent;
              return _context9.abrupt("return", _context9.t0.fromJSON.call(_context9.t0, _context9.t1));
            case 7:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function upgradedConsensusState() {
        return _upgradedConsensusState.apply(this, arguments);
      }
      return upgradedConsensusState;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;