"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _1 = _interopRequireWildcard(require("../confio/proofs"));
var _2 = _interopRequireWildcard(require("./ics23/v1/proofs"));
var _3 = _interopRequireWildcard(require("./app/runtime/v1alpha1/module"));
var _4 = _interopRequireWildcard(require("./app/v1alpha1/config"));
var _5 = _interopRequireWildcard(require("./app/v1alpha1/module"));
var _6 = _interopRequireWildcard(require("./app/v1alpha1/query"));
var _7 = _interopRequireWildcard(require("./auth/v1beta1/auth"));
var _8 = _interopRequireWildcard(require("./auth/v1beta1/genesis"));
var _9 = _interopRequireWildcard(require("./auth/v1beta1/query"));
var _10 = _interopRequireWildcard(require("./auth/v1beta1/tx"));
var _11 = _interopRequireWildcard(require("./authz/v1beta1/authz"));
var _12 = _interopRequireWildcard(require("./authz/v1beta1/event"));
var _13 = _interopRequireWildcard(require("./authz/v1beta1/genesis"));
var _14 = _interopRequireWildcard(require("./authz/v1beta1/query"));
var _15 = _interopRequireWildcard(require("./authz/v1beta1/tx"));
var _16 = _interopRequireWildcard(require("./autocli/v1/options"));
var _17 = _interopRequireWildcard(require("./autocli/v1/query"));
var _18 = _interopRequireWildcard(require("./bank/v1beta1/authz"));
var _19 = _interopRequireWildcard(require("./bank/v1beta1/bank"));
var _20 = _interopRequireWildcard(require("./bank/v1beta1/genesis"));
var _21 = _interopRequireWildcard(require("./bank/v1beta1/query"));
var _22 = _interopRequireWildcard(require("./bank/v1beta1/tx"));
var _23 = _interopRequireWildcard(require("./base/abci/v1beta1/abci"));
var _24 = _interopRequireWildcard(require("./base/kv/v1beta1/kv"));
var _25 = _interopRequireWildcard(require("./base/node/v1beta1/query"));
var _26 = _interopRequireWildcard(require("./base/query/v1beta1/pagination"));
var _27 = _interopRequireWildcard(require("./base/reflection/v1beta1/reflection"));
var _28 = _interopRequireWildcard(require("./base/reflection/v2alpha1/reflection"));
var _29 = _interopRequireWildcard(require("./base/snapshots/v1beta1/snapshot"));
var _30 = _interopRequireWildcard(require("./base/store/v1beta1/commit_info"));
var _31 = _interopRequireWildcard(require("./base/store/v1beta1/listening"));
var _32 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query"));
var _33 = _interopRequireWildcard(require("./base/tendermint/v1beta1/types"));
var _34 = _interopRequireWildcard(require("./base/v1beta1/coin"));
var _35 = _interopRequireWildcard(require("./capability/v1beta1/capability"));
var _36 = _interopRequireWildcard(require("./capability/v1beta1/genesis"));
var _37 = _interopRequireWildcard(require("./consensus/v1/query"));
var _38 = _interopRequireWildcard(require("./consensus/v1/tx"));
var _39 = _interopRequireWildcard(require("./crisis/v1beta1/genesis"));
var _40 = _interopRequireWildcard(require("./crisis/v1beta1/tx"));
var _41 = _interopRequireWildcard(require("./crypto/ed25519/keys"));
var _42 = _interopRequireWildcard(require("./crypto/hd/v1/hd"));
var _43 = _interopRequireWildcard(require("./crypto/keyring/v1/record"));
var _44 = _interopRequireWildcard(require("./crypto/multisig/keys"));
var _45 = _interopRequireWildcard(require("./crypto/secp256k1/keys"));
var _46 = _interopRequireWildcard(require("./crypto/secp256r1/keys"));
var _47 = _interopRequireWildcard(require("./distribution/v1beta1/distribution"));
var _48 = _interopRequireWildcard(require("./distribution/v1beta1/genesis"));
var _49 = _interopRequireWildcard(require("./distribution/v1beta1/query"));
var _50 = _interopRequireWildcard(require("./distribution/v1beta1/tx"));
var _51 = _interopRequireWildcard(require("./evidence/v1beta1/evidence"));
var _52 = _interopRequireWildcard(require("./evidence/v1beta1/genesis"));
var _53 = _interopRequireWildcard(require("./evidence/v1beta1/query"));
var _54 = _interopRequireWildcard(require("./evidence/v1beta1/tx"));
var _55 = _interopRequireWildcard(require("./feegrant/v1beta1/feegrant"));
var _56 = _interopRequireWildcard(require("./feegrant/v1beta1/genesis"));
var _57 = _interopRequireWildcard(require("./feegrant/v1beta1/query"));
var _58 = _interopRequireWildcard(require("./feegrant/v1beta1/tx"));
var _59 = _interopRequireWildcard(require("./genutil/v1beta1/genesis"));
var _60 = _interopRequireWildcard(require("./gov/v1/genesis"));
var _61 = _interopRequireWildcard(require("./gov/v1/gov"));
var _62 = _interopRequireWildcard(require("./gov/v1/query"));
var _63 = _interopRequireWildcard(require("./gov/v1/tx"));
var _64 = _interopRequireWildcard(require("./gov/v1beta1/genesis"));
var _65 = _interopRequireWildcard(require("./gov/v1beta1/gov"));
var _66 = _interopRequireWildcard(require("./gov/v1beta1/query"));
var _67 = _interopRequireWildcard(require("./gov/v1beta1/tx"));
var _68 = _interopRequireWildcard(require("./group/v1/events"));
var _69 = _interopRequireWildcard(require("./group/v1/genesis"));
var _70 = _interopRequireWildcard(require("./group/v1/query"));
var _71 = _interopRequireWildcard(require("./group/v1/tx"));
var _72 = _interopRequireWildcard(require("./group/v1/types"));
var _73 = _interopRequireWildcard(require("./mint/v1beta1/genesis"));
var _74 = _interopRequireWildcard(require("./mint/v1beta1/mint"));
var _75 = _interopRequireWildcard(require("./mint/v1beta1/query"));
var _76 = _interopRequireWildcard(require("./mint/v1beta1/tx"));
var _77 = _interopRequireWildcard(require("./msg/v1/msg"));
var _78 = _interopRequireWildcard(require("./nft/v1beta1/event"));
var _79 = _interopRequireWildcard(require("./nft/v1beta1/genesis"));
var _80 = _interopRequireWildcard(require("./nft/v1beta1/nft"));
var _81 = _interopRequireWildcard(require("./nft/v1beta1/query"));
var _82 = _interopRequireWildcard(require("./nft/v1beta1/tx"));
var _83 = _interopRequireWildcard(require("./orm/query/v1alpha1/query"));
var _84 = _interopRequireWildcard(require("./orm/v1/orm"));
var _85 = _interopRequireWildcard(require("./orm/v1alpha1/schema"));
var _86 = _interopRequireWildcard(require("./params/v1beta1/params"));
var _87 = _interopRequireWildcard(require("./params/v1beta1/query"));
var _88 = _interopRequireWildcard(require("./query/v1/query"));
var _89 = _interopRequireWildcard(require("./reflection/v1/reflection"));
var _90 = _interopRequireWildcard(require("./slashing/v1beta1/genesis"));
var _91 = _interopRequireWildcard(require("./slashing/v1beta1/query"));
var _92 = _interopRequireWildcard(require("./slashing/v1beta1/slashing"));
var _93 = _interopRequireWildcard(require("./slashing/v1beta1/tx"));
var _94 = _interopRequireWildcard(require("./staking/v1beta1/authz"));
var _95 = _interopRequireWildcard(require("./staking/v1beta1/genesis"));
var _96 = _interopRequireWildcard(require("./staking/v1beta1/query"));
var _97 = _interopRequireWildcard(require("./staking/v1beta1/staking"));
var _98 = _interopRequireWildcard(require("./staking/v1beta1/tx"));
var _99 = _interopRequireWildcard(require("./tx/config/v1/config"));
var _100 = _interopRequireWildcard(require("./tx/signing/v1beta1/signing"));
var _101 = _interopRequireWildcard(require("./tx/v1beta1/service"));
var _102 = _interopRequireWildcard(require("./tx/v1beta1/tx"));
var _103 = _interopRequireWildcard(require("./upgrade/v1beta1/query"));
var _104 = _interopRequireWildcard(require("./upgrade/v1beta1/tx"));
var _105 = _interopRequireWildcard(require("./upgrade/v1beta1/upgrade"));
var _106 = _interopRequireWildcard(require("./vesting/v1beta1/tx"));
var _107 = _interopRequireWildcard(require("./vesting/v1beta1/vesting"));
var _188 = _interopRequireWildcard(require("./auth/v1beta1/tx.amino"));
var _189 = _interopRequireWildcard(require("./authz/v1beta1/tx.amino"));
var _190 = _interopRequireWildcard(require("./bank/v1beta1/tx.amino"));
var _191 = _interopRequireWildcard(require("./consensus/v1/tx.amino"));
var _192 = _interopRequireWildcard(require("./crisis/v1beta1/tx.amino"));
var _193 = _interopRequireWildcard(require("./distribution/v1beta1/tx.amino"));
var _194 = _interopRequireWildcard(require("./evidence/v1beta1/tx.amino"));
var _195 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.amino"));
var _196 = _interopRequireWildcard(require("./gov/v1/tx.amino"));
var _197 = _interopRequireWildcard(require("./gov/v1beta1/tx.amino"));
var _198 = _interopRequireWildcard(require("./group/v1/tx.amino"));
var _199 = _interopRequireWildcard(require("./mint/v1beta1/tx.amino"));
var _200 = _interopRequireWildcard(require("./nft/v1beta1/tx.amino"));
var _201 = _interopRequireWildcard(require("./slashing/v1beta1/tx.amino"));
var _202 = _interopRequireWildcard(require("./staking/v1beta1/tx.amino"));
var _203 = _interopRequireWildcard(require("./upgrade/v1beta1/tx.amino"));
var _204 = _interopRequireWildcard(require("./vesting/v1beta1/tx.amino"));
var _205 = _interopRequireWildcard(require("./auth/v1beta1/tx.registry"));
var _206 = _interopRequireWildcard(require("./authz/v1beta1/tx.registry"));
var _207 = _interopRequireWildcard(require("./bank/v1beta1/tx.registry"));
var _208 = _interopRequireWildcard(require("./consensus/v1/tx.registry"));
var _209 = _interopRequireWildcard(require("./crisis/v1beta1/tx.registry"));
var _210 = _interopRequireWildcard(require("./distribution/v1beta1/tx.registry"));
var _211 = _interopRequireWildcard(require("./evidence/v1beta1/tx.registry"));
var _212 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.registry"));
var _213 = _interopRequireWildcard(require("./gov/v1/tx.registry"));
var _214 = _interopRequireWildcard(require("./gov/v1beta1/tx.registry"));
var _215 = _interopRequireWildcard(require("./group/v1/tx.registry"));
var _216 = _interopRequireWildcard(require("./mint/v1beta1/tx.registry"));
var _217 = _interopRequireWildcard(require("./nft/v1beta1/tx.registry"));
var _218 = _interopRequireWildcard(require("./slashing/v1beta1/tx.registry"));
var _219 = _interopRequireWildcard(require("./staking/v1beta1/tx.registry"));
var _220 = _interopRequireWildcard(require("./upgrade/v1beta1/tx.registry"));
var _221 = _interopRequireWildcard(require("./vesting/v1beta1/tx.registry"));
var _222 = _interopRequireWildcard(require("./auth/v1beta1/query.lcd"));
var _223 = _interopRequireWildcard(require("./authz/v1beta1/query.lcd"));
var _224 = _interopRequireWildcard(require("./bank/v1beta1/query.lcd"));
var _225 = _interopRequireWildcard(require("./base/node/v1beta1/query.lcd"));
var _226 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query.lcd"));
var _227 = _interopRequireWildcard(require("./consensus/v1/query.lcd"));
var _228 = _interopRequireWildcard(require("./distribution/v1beta1/query.lcd"));
var _229 = _interopRequireWildcard(require("./evidence/v1beta1/query.lcd"));
var _230 = _interopRequireWildcard(require("./feegrant/v1beta1/query.lcd"));
var _231 = _interopRequireWildcard(require("./gov/v1/query.lcd"));
var _232 = _interopRequireWildcard(require("./gov/v1beta1/query.lcd"));
var _233 = _interopRequireWildcard(require("./group/v1/query.lcd"));
var _234 = _interopRequireWildcard(require("./mint/v1beta1/query.lcd"));
var _235 = _interopRequireWildcard(require("./nft/v1beta1/query.lcd"));
var _236 = _interopRequireWildcard(require("./params/v1beta1/query.lcd"));
var _237 = _interopRequireWildcard(require("./slashing/v1beta1/query.lcd"));
var _238 = _interopRequireWildcard(require("./staking/v1beta1/query.lcd"));
var _239 = _interopRequireWildcard(require("./tx/v1beta1/service.lcd"));
var _240 = _interopRequireWildcard(require("./upgrade/v1beta1/query.lcd"));
var _241 = _interopRequireWildcard(require("./app/v1alpha1/query.rpc.Query"));
var _242 = _interopRequireWildcard(require("./auth/v1beta1/query.rpc.Query"));
var _243 = _interopRequireWildcard(require("./authz/v1beta1/query.rpc.Query"));
var _244 = _interopRequireWildcard(require("./autocli/v1/query.rpc.Query"));
var _245 = _interopRequireWildcard(require("./bank/v1beta1/query.rpc.Query"));
var _246 = _interopRequireWildcard(require("./base/node/v1beta1/query.rpc.Service"));
var _247 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query.rpc.Service"));
var _248 = _interopRequireWildcard(require("./consensus/v1/query.rpc.Query"));
var _249 = _interopRequireWildcard(require("./distribution/v1beta1/query.rpc.Query"));
var _250 = _interopRequireWildcard(require("./evidence/v1beta1/query.rpc.Query"));
var _251 = _interopRequireWildcard(require("./feegrant/v1beta1/query.rpc.Query"));
var _252 = _interopRequireWildcard(require("./gov/v1/query.rpc.Query"));
var _253 = _interopRequireWildcard(require("./gov/v1beta1/query.rpc.Query"));
var _254 = _interopRequireWildcard(require("./group/v1/query.rpc.Query"));
var _255 = _interopRequireWildcard(require("./mint/v1beta1/query.rpc.Query"));
var _256 = _interopRequireWildcard(require("./nft/v1beta1/query.rpc.Query"));
var _257 = _interopRequireWildcard(require("./orm/query/v1alpha1/query.rpc.Query"));
var _258 = _interopRequireWildcard(require("./params/v1beta1/query.rpc.Query"));
var _259 = _interopRequireWildcard(require("./slashing/v1beta1/query.rpc.Query"));
var _260 = _interopRequireWildcard(require("./staking/v1beta1/query.rpc.Query"));
var _261 = _interopRequireWildcard(require("./tx/v1beta1/service.rpc.Service"));
var _262 = _interopRequireWildcard(require("./upgrade/v1beta1/query.rpc.Query"));
var _263 = _interopRequireWildcard(require("./auth/v1beta1/tx.rpc.msg"));
var _264 = _interopRequireWildcard(require("./authz/v1beta1/tx.rpc.msg"));
var _265 = _interopRequireWildcard(require("./bank/v1beta1/tx.rpc.msg"));
var _266 = _interopRequireWildcard(require("./consensus/v1/tx.rpc.msg"));
var _267 = _interopRequireWildcard(require("./crisis/v1beta1/tx.rpc.msg"));
var _268 = _interopRequireWildcard(require("./distribution/v1beta1/tx.rpc.msg"));
var _269 = _interopRequireWildcard(require("./evidence/v1beta1/tx.rpc.msg"));
var _270 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.rpc.msg"));
var _271 = _interopRequireWildcard(require("./gov/v1/tx.rpc.msg"));
var _272 = _interopRequireWildcard(require("./gov/v1beta1/tx.rpc.msg"));
var _273 = _interopRequireWildcard(require("./group/v1/tx.rpc.msg"));
var _274 = _interopRequireWildcard(require("./mint/v1beta1/tx.rpc.msg"));
var _275 = _interopRequireWildcard(require("./nft/v1beta1/tx.rpc.msg"));
var _276 = _interopRequireWildcard(require("./slashing/v1beta1/tx.rpc.msg"));
var _277 = _interopRequireWildcard(require("./staking/v1beta1/tx.rpc.msg"));
var _278 = _interopRequireWildcard(require("./upgrade/v1beta1/tx.rpc.msg"));
var _279 = _interopRequireWildcard(require("./vesting/v1beta1/tx.rpc.msg"));
var _315 = _interopRequireWildcard(require("./lcd"));
var _316 = _interopRequireWildcard(require("./rpc.query"));
var _317 = _interopRequireWildcard(require("./rpc.tx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var cosmos;
exports.cosmos = cosmos;
(function (_cosmos) {
  var ics23;
  (function (_ics) {
    var v1 = _ics.v1 = _objectSpread(_objectSpread({}, _1), _2);
  })(ics23 || (ics23 = _cosmos.ics23 || (_cosmos.ics23 = {})));
  var app;
  (function (_app) {
    var runtime;
    (function (_runtime) {
      var v1alpha1 = _runtime.v1alpha1 = _objectSpread({}, _3);
    })(runtime || (runtime = _app.runtime || (_app.runtime = {})));
    var v1alpha1 = _app.v1alpha1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _4), _5), _6), _241);
  })(app || (app = _cosmos.app || (_cosmos.app = {})));
  var auth;
  (function (_auth) {
    var v1beta1 = _auth.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _7), _8), _9), _10), _188), _205), _222), _242), _263);
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));
  var authz;
  (function (_authz) {
    var v1beta1 = _authz.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _11), _12), _13), _14), _15), _189), _206), _223), _243), _264);
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
  var autocli;
  (function (_autocli) {
    var v1 = _autocli.v1 = _objectSpread(_objectSpread(_objectSpread({}, _16), _17), _244);
  })(autocli || (autocli = _cosmos.autocli || (_cosmos.autocli = {})));
  var bank;
  (function (_bank) {
    var v1beta1 = _bank.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _18), _19), _20), _21), _22), _190), _207), _224), _245), _265);
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
  var base;
  (function (_base) {
    var abci;
    (function (_abci) {
      var v1beta1 = _abci.v1beta1 = _objectSpread({}, _23);
    })(abci || (abci = _base.abci || (_base.abci = {})));
    var kv;
    (function (_kv) {
      var v1beta1 = _kv.v1beta1 = _objectSpread({}, _24);
    })(kv || (kv = _base.kv || (_base.kv = {})));
    var node;
    (function (_node) {
      var v1beta1 = _node.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _25), _225), _246);
    })(node || (node = _base.node || (_base.node = {})));
    var query;
    (function (_query) {
      var v1beta1 = _query.v1beta1 = _objectSpread({}, _26);
    })(query || (query = _base.query || (_base.query = {})));
    var reflection;
    (function (_reflection) {
      var v1beta1 = _reflection.v1beta1 = _objectSpread({}, _27);
      var v2alpha1 = _reflection.v2alpha1 = _objectSpread({}, _28);
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
    var snapshots;
    (function (_snapshots) {
      var v1beta1 = _snapshots.v1beta1 = _objectSpread({}, _29);
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
    var store;
    (function (_store) {
      var v1beta1 = _store.v1beta1 = _objectSpread(_objectSpread({}, _30), _31);
    })(store || (store = _base.store || (_base.store = {})));
    var tendermint;
    (function (_tendermint) {
      var v1beta1 = _tendermint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _32), _33), _226), _247);
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));
    var v1beta1 = _base.v1beta1 = _objectSpread({}, _34);
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
  var capability;
  (function (_capability) {
    var v1beta1 = _capability.v1beta1 = _objectSpread(_objectSpread({}, _35), _36);
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
  var consensus;
  (function (_consensus) {
    var v1 = _consensus.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _37), _38), _191), _208), _227), _248), _266);
  })(consensus || (consensus = _cosmos.consensus || (_cosmos.consensus = {})));
  var crisis;
  (function (_crisis) {
    var v1beta1 = _crisis.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _39), _40), _192), _209), _267);
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));
  var crypto;
  (function (_crypto) {
    var ed25519 = _crypto.ed25519 = _objectSpread({}, _41);
    var hd;
    (function (_hd) {
      var v1 = _hd.v1 = _objectSpread({}, _42);
    })(hd || (hd = _crypto.hd || (_crypto.hd = {})));
    var keyring;
    (function (_keyring) {
      var v1 = _keyring.v1 = _objectSpread({}, _43);
    })(keyring || (keyring = _crypto.keyring || (_crypto.keyring = {})));
    var multisig = _crypto.multisig = _objectSpread({}, _44);
    var secp256k1 = _crypto.secp256k1 = _objectSpread({}, _45);
    var secp256r1 = _crypto.secp256r1 = _objectSpread({}, _46);
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));
  var distribution;
  (function (_distribution) {
    var v1beta1 = _distribution.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _47), _48), _49), _50), _193), _210), _228), _249), _268);
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
  var evidence;
  (function (_evidence) {
    var v1beta1 = _evidence.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _51), _52), _53), _54), _194), _211), _229), _250), _269);
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
  var feegrant;
  (function (_feegrant) {
    var v1beta1 = _feegrant.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _55), _56), _57), _58), _195), _212), _230), _251), _270);
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));
  var genutil;
  (function (_genutil) {
    var v1beta1 = _genutil.v1beta1 = _objectSpread({}, _59);
  })(genutil || (genutil = _cosmos.genutil || (_cosmos.genutil = {})));
  var gov;
  (function (_gov) {
    var v1 = _gov.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _60), _61), _62), _63), _196), _213), _231), _252), _271);
    var v1beta1 = _gov.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _64), _65), _66), _67), _197), _214), _232), _253), _272);
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
  var group;
  (function (_group) {
    var v1 = _group.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _68), _69), _70), _71), _72), _198), _215), _233), _254), _273);
  })(group || (group = _cosmos.group || (_cosmos.group = {})));
  var mint;
  (function (_mint) {
    var v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _73), _74), _75), _76), _199), _216), _234), _255), _274);
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));
  var msg;
  (function (_msg) {
    var v1 = _msg.v1 = _objectSpread({}, _77);
  })(msg || (msg = _cosmos.msg || (_cosmos.msg = {})));
  var nft;
  (function (_nft) {
    var v1beta1 = _nft.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _78), _79), _80), _81), _82), _200), _217), _235), _256), _275);
  })(nft || (nft = _cosmos.nft || (_cosmos.nft = {})));
  var orm;
  (function (_orm) {
    var query;
    (function (_query2) {
      var v1alpha1 = _query2.v1alpha1 = _objectSpread(_objectSpread({}, _83), _257);
    })(query || (query = _orm.query || (_orm.query = {})));
    var v1 = _orm.v1 = _objectSpread({}, _84);
    var v1alpha1 = _orm.v1alpha1 = _objectSpread({}, _85);
  })(orm || (orm = _cosmos.orm || (_cosmos.orm = {})));
  var params;
  (function (_params) {
    var v1beta1 = _params.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _86), _87), _236), _258);
  })(params || (params = _cosmos.params || (_cosmos.params = {})));
  var query;
  (function (_query3) {
    var v1 = _query3.v1 = _objectSpread({}, _88);
  })(query || (query = _cosmos.query || (_cosmos.query = {})));
  var reflection;
  (function (_reflection2) {
    var v1 = _reflection2.v1 = _objectSpread({}, _89);
  })(reflection || (reflection = _cosmos.reflection || (_cosmos.reflection = {})));
  var slashing;
  (function (_slashing) {
    var v1beta1 = _slashing.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _90), _91), _92), _93), _201), _218), _237), _259), _276);
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
  var staking;
  (function (_staking) {
    var v1beta1 = _staking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _94), _95), _96), _97), _98), _202), _219), _238), _260), _277);
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
  var tx;
  (function (_tx) {
    var config;
    (function (_config) {
      var v1 = _config.v1 = _objectSpread({}, _99);
    })(config || (config = _tx.config || (_tx.config = {})));
    var signing;
    (function (_signing) {
      var v1beta1 = _signing.v1beta1 = _objectSpread({}, _100);
    })(signing || (signing = _tx.signing || (_tx.signing = {})));
    var v1beta1 = _tx.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _101), _102), _239), _261);
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
  var upgrade;
  (function (_upgrade) {
    var v1beta1 = _upgrade.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _103), _104), _105), _203), _220), _240), _262), _278);
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
  var vesting;
  (function (_vesting) {
    var v1beta1 = _vesting.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _106), _107), _204), _221), _279);
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
  var ClientFactory = _cosmos.ClientFactory = _objectSpread(_objectSpread(_objectSpread({}, _315), _316), _317);
})(cosmos || (exports.cosmos = cosmos = {}));