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
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }
  /* Proposal queries proposal details based on ProposalID. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "proposal",
    value: function () {
      var _proposal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              endpoint = "cosmos/gov/v1beta1/proposals/".concat(params.proposal_id);
              _context.t0 = _query.QueryProposalResponse;
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
      function proposal(_x) {
        return _proposal.apply(this, arguments);
      }
      return proposal;
    }() /* Proposals queries all proposals based on given status. */
  }, {
    key: "proposals",
    value: function () {
      var _proposals = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.proposal_status) !== "undefined") {
                options.params.proposal_status = params.proposal_status;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.voter) !== "undefined") {
                options.params.voter = params.voter;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.depositor) !== "undefined") {
                options.params.depositor = params.depositor;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/gov/v1beta1/proposals";
              _context2.t0 = _query.QueryProposalsResponse;
              _context2.next = 9;
              return this.req.get(endpoint, options);
            case 9:
              _context2.t1 = _context2.sent;
              return _context2.abrupt("return", _context2.t0.fromJSON.call(_context2.t0, _context2.t1));
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function proposals(_x2) {
        return _proposals.apply(this, arguments);
      }
      return proposals;
    }() /* Vote queries voted information based on proposalID, voterAddr. */
  }, {
    key: "vote",
    value: function () {
      var _vote = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              endpoint = "cosmos/gov/v1beta1/proposals/".concat(params.proposal_id, "/votes/").concat(params.voter);
              _context3.t0 = _query.QueryVoteResponse;
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
      function vote(_x3) {
        return _vote.apply(this, arguments);
      }
      return vote;
    }() /* Votes queries votes of a given proposal. */
  }, {
    key: "votes",
    value: function () {
      var _votes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
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
              endpoint = "cosmos/gov/v1beta1/proposals/".concat(params.proposal_id, "/votes");
              _context4.t0 = _query.QueryVotesResponse;
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
      function votes(_x4) {
        return _votes.apply(this, arguments);
      }
      return votes;
    }() /* Params queries all parameters of the gov module. */
  }, {
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              endpoint = "cosmos/gov/v1beta1/params/".concat(_params.params_type);
              _context5.t0 = _query.QueryParamsResponse;
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
      function params(_x5) {
        return _params2.apply(this, arguments);
      }
      return params;
    }() /* Deposit queries single deposit information based proposalID, depositAddr. */
  }, {
    key: "deposit",
    value: function () {
      var _deposit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              endpoint = "cosmos/gov/v1beta1/proposals/".concat(params.proposal_id, "/deposits/").concat(params.depositor);
              _context6.t0 = _query.QueryDepositResponse;
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
      function deposit(_x6) {
        return _deposit.apply(this, arguments);
      }
      return deposit;
    }() /* Deposits queries all deposits of a single proposal. */
  }, {
    key: "deposits",
    value: function () {
      var _deposits = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
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
              endpoint = "cosmos/gov/v1beta1/proposals/".concat(params.proposal_id, "/deposits");
              _context7.t0 = _query.QueryDepositsResponse;
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
      function deposits(_x7) {
        return _deposits.apply(this, arguments);
      }
      return deposits;
    }() /* TallyResult queries the tally of a proposal vote. */
  }, {
    key: "tallyResult",
    value: function () {
      var _tallyResult = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              endpoint = "cosmos/gov/v1beta1/proposals/".concat(params.proposal_id, "/tally");
              _context8.t0 = _query.QueryTallyResultResponse;
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
      function tallyResult(_x8) {
        return _tallyResult.apply(this, arguments);
      }
      return tallyResult;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;