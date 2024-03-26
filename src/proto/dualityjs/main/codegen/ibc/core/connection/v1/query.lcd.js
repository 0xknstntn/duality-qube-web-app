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
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
    this.connectionParams = this.connectionParams.bind(this);
  }
  /* Connection queries an IBC connection end. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "connection",
    value: function () {
      var _connection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              endpoint = "ibc/core/connection/v1/connections/".concat(params.connection_id);
              _context.t0 = _query.QueryConnectionResponse;
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
      function connection(_x) {
        return _connection.apply(this, arguments);
      }
      return connection;
    }() /* Connections queries all the IBC connections of a chain. */
  }, {
    key: "connections",
    value: function () {
      var _connections = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
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
              endpoint = "ibc/core/connection/v1/connections";
              _context2.t0 = _query.QueryConnectionsResponse;
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
      function connections() {
        return _connections.apply(this, arguments);
      }
      return connections;
    }()
    /* ClientConnections queries the connection paths associated with a client
     state. */
  }, {
    key: "clientConnections",
    value: function () {
      var _clientConnections = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              endpoint = "ibc/core/connection/v1/client_connections/".concat(params.client_id);
              _context3.t0 = _query.QueryClientConnectionsResponse;
              _context3.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context3.t1 = _context3.sent;
              return _context3.abrupt("return", _context3.t0.fromJSON.call(_context3.t0, _context3.t1));
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function clientConnections(_x2) {
        return _clientConnections.apply(this, arguments);
      }
      return clientConnections;
    }()
    /* ConnectionClientState queries the client state associated with the
     connection. */
  }, {
    key: "connectionClientState",
    value: function () {
      var _connectionClientState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              endpoint = "ibc/core/connection/v1/connections/".concat(params.connection_id, "/client_state");
              _context4.t0 = _query.QueryConnectionClientStateResponse;
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
      function connectionClientState(_x3) {
        return _connectionClientState.apply(this, arguments);
      }
      return connectionClientState;
    }()
    /* ConnectionConsensusState queries the consensus state associated with the
     connection. */
  }, {
    key: "connectionConsensusState",
    value: function () {
      var _connectionConsensusState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              endpoint = "ibc/core/connection/v1/connections/".concat(params.connection_id, "/consensus_state/revision/").concat(params.revision_number, "/height/").concat(params.revision_height);
              _context5.t0 = _query.QueryConnectionConsensusStateResponse;
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
      function connectionConsensusState(_x4) {
        return _connectionConsensusState.apply(this, arguments);
      }
      return connectionConsensusState;
    }() /* ConnectionParams queries all parameters of the ibc connection submodule. */
  }, {
    key: "connectionParams",
    value: function () {
      var _connectionParams = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var _params,
          endpoint,
          _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _params = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
              endpoint = "ibc/core/connection/v1/params";
              _context6.t0 = _query.QueryConnectionParamsResponse;
              _context6.next = 5;
              return this.req.get(endpoint);
            case 5:
              _context6.t1 = _context6.sent;
              return _context6.abrupt("return", _context6.t0.fromJSON.call(_context6.t0, _context6.t1));
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function connectionParams() {
        return _connectionParams.apply(this, arguments);
      }
      return connectionParams;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;