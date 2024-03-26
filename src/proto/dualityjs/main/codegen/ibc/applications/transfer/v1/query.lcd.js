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
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
    this.denomHash = this.denomHash.bind(this);
    this.escrowAddress = this.escrowAddress.bind(this);
    this.totalEscrowForDenom = this.totalEscrowForDenom.bind(this);
  }
  /* DenomTrace queries a denomination trace information. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "denomTrace",
    value: function () {
      var _denomTrace = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.hash) !== "undefined") {
                options.params.hash = params.hash;
              }
              endpoint = "ibc/apps/transfer/v1/denom_traces/".concat(params.hash);
              _context.t0 = _query.QueryDenomTraceResponse;
              _context.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context.t1 = _context.sent;
              return _context.abrupt("return", _context.t0.fromJSON.call(_context.t0, _context.t1));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function denomTrace(_x) {
        return _denomTrace.apply(this, arguments);
      }
      return denomTrace;
    }() /* DenomTraces queries all denomination traces. */
  }, {
    key: "denomTraces",
    value: function () {
      var _denomTraces = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
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
              endpoint = "ibc/apps/transfer/v1/denom_traces";
              _context2.t0 = _query.QueryDenomTracesResponse;
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
      function denomTraces() {
        return _denomTraces.apply(this, arguments);
      }
      return denomTraces;
    }() /* Params queries all parameters of the ibc-transfer module. */
  }, {
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _params,
          endpoint,
          _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
              endpoint = "ibc/apps/transfer/v1/params";
              _context3.t0 = _query.QueryParamsResponse;
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
      function params() {
        return _params2.apply(this, arguments);
      }
      return params;
    }() /* DenomHash queries a denomination hash information. */
  }, {
    key: "denomHash",
    value: function () {
      var _denomHash = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.trace) !== "undefined") {
                options.params.trace = params.trace;
              }
              endpoint = "ibc/apps/transfer/v1/denom_hashes/".concat(params.trace);
              _context4.t0 = _query.QueryDenomHashResponse;
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
      function denomHash(_x2) {
        return _denomHash.apply(this, arguments);
      }
      return denomHash;
    }() /* EscrowAddress returns the escrow address for a particular port and channel id. */
  }, {
    key: "escrowAddress",
    value: function () {
      var _escrowAddress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              endpoint = "ibc/apps/transfer/v1/channels/".concat(params.channel_id, "/ports/").concat(params.port_id, "/escrow_address");
              _context5.t0 = _query.QueryEscrowAddressResponse;
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
      function escrowAddress(_x3) {
        return _escrowAddress.apply(this, arguments);
      }
      return escrowAddress;
    }() /* TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
  }, {
    key: "totalEscrowForDenom",
    value: function () {
      var _totalEscrowForDenom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              endpoint = "ibc/apps/transfer/v1/denoms/".concat(params.denom, "/total_escrow");
              _context6.t0 = _query.QueryTotalEscrowForDenomResponse;
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
      function totalEscrowForDenom(_x4) {
        return _totalEscrowForDenom.apply(this, arguments);
      }
      return totalEscrowForDenom;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;