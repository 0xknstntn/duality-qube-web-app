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
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }
  /* EpochInfos provide running epochInfos */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "epochInfos",
    value: function () {
      var _epochInfos = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _params,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              endpoint = "duality/epochs/epochs";
              _context.t0 = _query.QueryEpochsInfoResponse;
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
      function epochInfos() {
        return _epochInfos.apply(this, arguments);
      }
      return epochInfos;
    }() /* CurrentEpoch provide current epoch of specified identifier */
  }, {
    key: "currentEpoch",
    value: function () {
      var _currentEpoch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.identifier) !== "undefined") {
                options.params.identifier = params.identifier;
              }
              endpoint = "duality/epochs/current_epoch";
              _context2.t0 = _query.QueryCurrentEpochResponse;
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
      function currentEpoch(_x) {
        return _currentEpoch.apply(this, arguments);
      }
      return currentEpoch;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;