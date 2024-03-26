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
var _helpers = require("../../../helpers");
var _query = require("./query");
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractHistory = this.contractHistory.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractState = this.smartContractState.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.pinnedCodes = this.pinnedCodes.bind(this);
    this.params = this.params.bind(this);
    this.contractsByCreator = this.contractsByCreator.bind(this);
  }
  /* ContractInfo gets the contract meta data */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "contractInfo",
    value: function () {
      var _contractInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              endpoint = "cosmwasm/wasm/v1/contract/".concat(params.address);
              _context.t0 = _query.QueryContractInfoResponse;
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
      function contractInfo(_x) {
        return _contractInfo.apply(this, arguments);
      }
      return contractInfo;
    }() /* ContractHistory gets the contract code history */
  }, {
    key: "contractHistory",
    value: function () {
      var _contractHistory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmwasm/wasm/v1/contract/".concat(params.address, "/history");
              _context2.t0 = _query.QueryContractHistoryResponse;
              _context2.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context2.t1 = _context2.sent;
              return _context2.abrupt("return", _context2.t0.fromJSON.call(_context2.t0, _context2.t1));
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function contractHistory(_x2) {
        return _contractHistory.apply(this, arguments);
      }
      return contractHistory;
    }() /* ContractsByCode lists all smart contracts for a code id */
  }, {
    key: "contractsByCode",
    value: function () {
      var _contractsByCode = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmwasm/wasm/v1/code/".concat(params.code_id, "/contracts");
              _context3.t0 = _query.QueryContractsByCodeResponse;
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
      function contractsByCode(_x3) {
        return _contractsByCode.apply(this, arguments);
      }
      return contractsByCode;
    }() /* AllContractState gets all raw store data for a single contract */
  }, {
    key: "allContractState",
    value: function () {
      var _allContractState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
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
              endpoint = "cosmwasm/wasm/v1/contract/".concat(params.address, "/state");
              _context4.t0 = _query.QueryAllContractStateResponse;
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
      function allContractState(_x4) {
        return _allContractState.apply(this, arguments);
      }
      return allContractState;
    }() /* RawContractState gets single key from the raw store data of a contract */
  }, {
    key: "rawContractState",
    value: function () {
      var _rawContractState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              endpoint = "cosmwasm/wasm/v1/contract/".concat(params.address, "/raw/").concat(params.query_data);
              _context5.t0 = _query.QueryRawContractStateResponse;
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
      function rawContractState(_x5) {
        return _rawContractState.apply(this, arguments);
      }
      return rawContractState;
    }() /* SmartContractState get smart query result from the contract */
  }, {
    key: "smartContractState",
    value: function () {
      var _smartContractState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              endpoint = "cosmwasm/wasm/v1/contract/".concat(params.address, "/smart/").concat(params.query_data);
              _context6.t0 = _query.QuerySmartContractStateResponse;
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
      function smartContractState(_x6) {
        return _smartContractState.apply(this, arguments);
      }
      return smartContractState;
    }() /* Code gets the binary code and metadata for a singe wasm code */
  }, {
    key: "code",
    value: function () {
      var _code = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              endpoint = "cosmwasm/wasm/v1/code/".concat(params.code_id);
              _context7.t0 = _query.QueryCodeResponse;
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
      function code(_x7) {
        return _code.apply(this, arguments);
      }
      return code;
    }() /* Codes gets the metadata for all stored wasm codes */
  }, {
    key: "codes",
    value: function () {
      var _codes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        var params,
          options,
          endpoint,
          _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              params = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmwasm/wasm/v1/code";
              _context8.t0 = _query.QueryCodesResponse;
              _context8.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              _context8.t1 = _context8.sent;
              return _context8.abrupt("return", _context8.t0.fromJSON.call(_context8.t0, _context8.t1));
            case 9:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function codes() {
        return _codes.apply(this, arguments);
      }
      return codes;
    }() /* PinnedCodes gets the pinned code ids */
  }, {
    key: "pinnedCodes",
    value: function () {
      var _pinnedCodes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
        var params,
          options,
          endpoint,
          _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              params = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmwasm/wasm/v1/codes/pinned";
              _context9.t0 = _query.QueryPinnedCodesResponse;
              _context9.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              _context9.t1 = _context9.sent;
              return _context9.abrupt("return", _context9.t0.fromJSON.call(_context9.t0, _context9.t1));
            case 9:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function pinnedCodes() {
        return _pinnedCodes.apply(this, arguments);
      }
      return pinnedCodes;
    }() /* Params gets the module params */
  }, {
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        var _params,
          endpoint,
          _args10 = arguments;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _params = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {};
              endpoint = "cosmwasm/wasm/v1/codes/params";
              _context10.t0 = _query.QueryParamsResponse;
              _context10.next = 5;
              return this.req.get(endpoint);
            case 5:
              _context10.t1 = _context10.sent;
              return _context10.abrupt("return", _context10.t0.fromJSON.call(_context10.t0, _context10.t1));
            case 7:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function params() {
        return _params2.apply(this, arguments);
      }
      return params;
    }() /* ContractsByCreator gets the contracts by creator */
  }, {
    key: "contractsByCreator",
    value: function () {
      var _contractsByCreator = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params) {
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
              endpoint = "cosmwasm/wasm/v1/contracts/creator/".concat(params.creator_address);
              _context11.t0 = _query.QueryContractsByCreatorResponse;
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
      function contractsByCreator(_x8) {
        return _contractsByCreator.apply(this, arguments);
      }
      return contractsByCreator;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;