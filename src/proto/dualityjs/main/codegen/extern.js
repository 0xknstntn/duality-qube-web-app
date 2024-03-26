"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRpcEndpointKey = exports.getRpcClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _stargate = require("@cosmjs/stargate");
var _tendermintRpc = require("@cosmjs/tendermint-rpc");
/**
* This file and any referenced files were automatically generated by @cosmology/telescope@0.109.4
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/

var _rpcClients = {};
var getRpcEndpointKey = function getRpcEndpointKey(rpcEndpoint) {
  if (typeof rpcEndpoint === 'string') {
    return rpcEndpoint;
  } else if (!!rpcEndpoint) {
    //@ts-ignore 
    return rpcEndpoint.url;
  }
};
exports.getRpcEndpointKey = getRpcEndpointKey;
var getRpcClient = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(rpcEndpoint) {
    var key, tmClient, client, rpc;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          key = getRpcEndpointKey(rpcEndpoint);
          if (key) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return");
        case 3:
          if (!_rpcClients.hasOwnProperty(key)) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", _rpcClients[key]);
        case 5:
          _context.next = 7;
          return _tendermintRpc.Tendermint34Client.connect(rpcEndpoint);
        case 7:
          tmClient = _context.sent;
          //@ts-ignore
          client = new _stargate.QueryClient(tmClient);
          rpc = (0, _stargate.createProtobufRpcClient)(client);
          _rpcClients[key] = rpc;
          return _context.abrupt("return", rpc);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getRpcClient(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.getRpcClient = getRpcClient;