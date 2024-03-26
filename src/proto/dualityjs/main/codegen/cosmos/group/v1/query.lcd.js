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
    this.groupInfo = this.groupInfo.bind(this);
    this.groupPolicyInfo = this.groupPolicyInfo.bind(this);
    this.groupMembers = this.groupMembers.bind(this);
    this.groupsByAdmin = this.groupsByAdmin.bind(this);
    this.groupPoliciesByGroup = this.groupPoliciesByGroup.bind(this);
    this.groupPoliciesByAdmin = this.groupPoliciesByAdmin.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalsByGroupPolicy = this.proposalsByGroupPolicy.bind(this);
    this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
    this.votesByProposal = this.votesByProposal.bind(this);
    this.votesByVoter = this.votesByVoter.bind(this);
    this.groupsByMember = this.groupsByMember.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
    this.groups = this.groups.bind(this);
  }
  /* GroupInfo queries group info based on group id. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "groupInfo",
    value: function () {
      var _groupInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              endpoint = "cosmos/group/v1/group_info/".concat(params.group_id);
              _context.t0 = _query.QueryGroupInfoResponse;
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
      function groupInfo(_x) {
        return _groupInfo.apply(this, arguments);
      }
      return groupInfo;
    }() /* GroupPolicyInfo queries group policy info based on account address of group policy. */
  }, {
    key: "groupPolicyInfo",
    value: function () {
      var _groupPolicyInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "cosmos/group/v1/group_policy_info/".concat(params.address);
              _context2.t0 = _query.QueryGroupPolicyInfoResponse;
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
      function groupPolicyInfo(_x2) {
        return _groupPolicyInfo.apply(this, arguments);
      }
      return groupPolicyInfo;
    }() /* GroupMembers queries members of a group by group id. */
  }, {
    key: "groupMembers",
    value: function () {
      var _groupMembers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
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
              endpoint = "cosmos/group/v1/group_members/".concat(params.group_id);
              _context3.t0 = _query.QueryGroupMembersResponse;
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
      function groupMembers(_x3) {
        return _groupMembers.apply(this, arguments);
      }
      return groupMembers;
    }() /* GroupsByAdmin queries groups by admin address. */
  }, {
    key: "groupsByAdmin",
    value: function () {
      var _groupsByAdmin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
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
              endpoint = "cosmos/group/v1/groups_by_admin/".concat(params.admin);
              _context4.t0 = _query.QueryGroupsByAdminResponse;
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
      function groupsByAdmin(_x4) {
        return _groupsByAdmin.apply(this, arguments);
      }
      return groupsByAdmin;
    }() /* GroupPoliciesByGroup queries group policies by group id. */
  }, {
    key: "groupPoliciesByGroup",
    value: function () {
      var _groupPoliciesByGroup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
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
              endpoint = "cosmos/group/v1/group_policies_by_group/".concat(params.group_id);
              _context5.t0 = _query.QueryGroupPoliciesByGroupResponse;
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
      function groupPoliciesByGroup(_x5) {
        return _groupPoliciesByGroup.apply(this, arguments);
      }
      return groupPoliciesByGroup;
    }() /* GroupPoliciesByAdmin queries group policies by admin address. */
  }, {
    key: "groupPoliciesByAdmin",
    value: function () {
      var _groupPoliciesByAdmin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
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
              endpoint = "cosmos/group/v1/group_policies_by_admin/".concat(params.admin);
              _context6.t0 = _query.QueryGroupPoliciesByAdminResponse;
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
      function groupPoliciesByAdmin(_x6) {
        return _groupPoliciesByAdmin.apply(this, arguments);
      }
      return groupPoliciesByAdmin;
    }() /* Proposal queries a proposal based on proposal id. */
  }, {
    key: "proposal",
    value: function () {
      var _proposal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              endpoint = "cosmos/group/v1/proposal/".concat(params.proposal_id);
              _context7.t0 = _query.QueryProposalResponse;
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
      function proposal(_x7) {
        return _proposal.apply(this, arguments);
      }
      return proposal;
    }() /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  }, {
    key: "proposalsByGroupPolicy",
    value: function () {
      var _proposalsByGroupPolicy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
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
              endpoint = "cosmos/group/v1/proposals_by_group_policy/".concat(params.address);
              _context8.t0 = _query.QueryProposalsByGroupPolicyResponse;
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
      function proposalsByGroupPolicy(_x8) {
        return _proposalsByGroupPolicy.apply(this, arguments);
      }
      return proposalsByGroupPolicy;
    }() /* VoteByProposalVoter queries a vote by proposal id and voter. */
  }, {
    key: "voteByProposalVoter",
    value: function () {
      var _voteByProposalVoter = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              endpoint = "cosmos/group/v1/vote_by_proposal_voter/".concat(params.proposal_id, "/").concat(params.voter);
              _context9.t0 = _query.QueryVoteByProposalVoterResponse;
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
      function voteByProposalVoter(_x9) {
        return _voteByProposalVoter.apply(this, arguments);
      }
      return voteByProposalVoter;
    }() /* VotesByProposal queries a vote by proposal id. */
  }, {
    key: "votesByProposal",
    value: function () {
      var _votesByProposal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/group/v1/votes_by_proposal/".concat(params.proposal_id);
              _context10.t0 = _query.QueryVotesByProposalResponse;
              _context10.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context10.t1 = _context10.sent;
              return _context10.abrupt("return", _context10.t0.fromJSON.call(_context10.t0, _context10.t1));
            case 8:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function votesByProposal(_x10) {
        return _votesByProposal.apply(this, arguments);
      }
      return votesByProposal;
    }() /* VotesByVoter queries a vote by voter. */
  }, {
    key: "votesByVoter",
    value: function () {
      var _votesByVoter = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params) {
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
              endpoint = "cosmos/group/v1/votes_by_voter/".concat(params.voter);
              _context11.t0 = _query.QueryVotesByVoterResponse;
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
      function votesByVoter(_x11) {
        return _votesByVoter.apply(this, arguments);
      }
      return votesByVoter;
    }() /* GroupsByMember queries groups by member address. */
  }, {
    key: "groupsByMember",
    value: function () {
      var _groupsByMember = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/group/v1/groups_by_member/".concat(params.address);
              _context12.t0 = _query.QueryGroupsByMemberResponse;
              _context12.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              _context12.t1 = _context12.sent;
              return _context12.abrupt("return", _context12.t0.fromJSON.call(_context12.t0, _context12.t1));
            case 8:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function groupsByMember(_x12) {
        return _groupsByMember.apply(this, arguments);
      }
      return groupsByMember;
    }()
    /* TallyResult returns the tally result of a proposal. If the proposal is
     still in voting period, then this query computes the current tally state,
     which might not be final. On the other hand, if the proposal is final,
     then it simply returns the `final_tally_result` state stored in the
     proposal itself. */
  }, {
    key: "tallyResult",
    value: function () {
      var _tallyResult = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              endpoint = "cosmos/group/v1/proposals/".concat(params.proposal_id, "/tally");
              _context13.t0 = _query.QueryTallyResultResponse;
              _context13.next = 4;
              return this.req.get(endpoint);
            case 4:
              _context13.t1 = _context13.sent;
              return _context13.abrupt("return", _context13.t0.fromJSON.call(_context13.t0, _context13.t1));
            case 6:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function tallyResult(_x13) {
        return _tallyResult.apply(this, arguments);
      }
      return tallyResult;
    }()
    /* Groups queries all groups in state.
    
     Since: cosmos-sdk 0.47.1 */
  }, {
    key: "groups",
    value: function () {
      var _groups = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14() {
        var params,
          options,
          endpoint,
          _args14 = arguments;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              params = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/group/v1/groups";
              _context14.t0 = _query.QueryGroupsResponse;
              _context14.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              _context14.t1 = _context14.sent;
              return _context14.abrupt("return", _context14.t0.fromJSON.call(_context14.t0, _context14.t1));
            case 9:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function groups() {
        return _groups.apply(this, arguments);
      }
      return groups;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;