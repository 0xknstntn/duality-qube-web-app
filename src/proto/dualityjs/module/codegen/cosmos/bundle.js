import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import * as _1 from "../confio/proofs";
import * as _2 from "./ics23/v1/proofs";
import * as _3 from "./app/runtime/v1alpha1/module";
import * as _4 from "./app/v1alpha1/config";
import * as _5 from "./app/v1alpha1/module";
import * as _6 from "./app/v1alpha1/query";
import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./auth/v1beta1/tx";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./autocli/v1/options";
import * as _17 from "./autocli/v1/query";
import * as _18 from "./bank/v1beta1/authz";
import * as _19 from "./bank/v1beta1/bank";
import * as _20 from "./bank/v1beta1/genesis";
import * as _21 from "./bank/v1beta1/query";
import * as _22 from "./bank/v1beta1/tx";
import * as _23 from "./base/abci/v1beta1/abci";
import * as _24 from "./base/kv/v1beta1/kv";
import * as _25 from "./base/node/v1beta1/query";
import * as _26 from "./base/query/v1beta1/pagination";
import * as _27 from "./base/reflection/v1beta1/reflection";
import * as _28 from "./base/reflection/v2alpha1/reflection";
import * as _29 from "./base/snapshots/v1beta1/snapshot";
import * as _30 from "./base/store/v1beta1/commit_info";
import * as _31 from "./base/store/v1beta1/listening";
import * as _32 from "./base/tendermint/v1beta1/query";
import * as _33 from "./base/tendermint/v1beta1/types";
import * as _34 from "./base/v1beta1/coin";
import * as _35 from "./capability/v1beta1/capability";
import * as _36 from "./capability/v1beta1/genesis";
import * as _37 from "./consensus/v1/query";
import * as _38 from "./consensus/v1/tx";
import * as _39 from "./crisis/v1beta1/genesis";
import * as _40 from "./crisis/v1beta1/tx";
import * as _41 from "./crypto/ed25519/keys";
import * as _42 from "./crypto/hd/v1/hd";
import * as _43 from "./crypto/keyring/v1/record";
import * as _44 from "./crypto/multisig/keys";
import * as _45 from "./crypto/secp256k1/keys";
import * as _46 from "./crypto/secp256r1/keys";
import * as _47 from "./distribution/v1beta1/distribution";
import * as _48 from "./distribution/v1beta1/genesis";
import * as _49 from "./distribution/v1beta1/query";
import * as _50 from "./distribution/v1beta1/tx";
import * as _51 from "./evidence/v1beta1/evidence";
import * as _52 from "./evidence/v1beta1/genesis";
import * as _53 from "./evidence/v1beta1/query";
import * as _54 from "./evidence/v1beta1/tx";
import * as _55 from "./feegrant/v1beta1/feegrant";
import * as _56 from "./feegrant/v1beta1/genesis";
import * as _57 from "./feegrant/v1beta1/query";
import * as _58 from "./feegrant/v1beta1/tx";
import * as _59 from "./genutil/v1beta1/genesis";
import * as _60 from "./gov/v1/genesis";
import * as _61 from "./gov/v1/gov";
import * as _62 from "./gov/v1/query";
import * as _63 from "./gov/v1/tx";
import * as _64 from "./gov/v1beta1/genesis";
import * as _65 from "./gov/v1beta1/gov";
import * as _66 from "./gov/v1beta1/query";
import * as _67 from "./gov/v1beta1/tx";
import * as _68 from "./group/v1/events";
import * as _69 from "./group/v1/genesis";
import * as _70 from "./group/v1/query";
import * as _71 from "./group/v1/tx";
import * as _72 from "./group/v1/types";
import * as _73 from "./mint/v1beta1/genesis";
import * as _74 from "./mint/v1beta1/mint";
import * as _75 from "./mint/v1beta1/query";
import * as _76 from "./mint/v1beta1/tx";
import * as _77 from "./msg/v1/msg";
import * as _78 from "./nft/v1beta1/event";
import * as _79 from "./nft/v1beta1/genesis";
import * as _80 from "./nft/v1beta1/nft";
import * as _81 from "./nft/v1beta1/query";
import * as _82 from "./nft/v1beta1/tx";
import * as _83 from "./orm/query/v1alpha1/query";
import * as _84 from "./orm/v1/orm";
import * as _85 from "./orm/v1alpha1/schema";
import * as _86 from "./params/v1beta1/params";
import * as _87 from "./params/v1beta1/query";
import * as _88 from "./query/v1/query";
import * as _89 from "./reflection/v1/reflection";
import * as _90 from "./slashing/v1beta1/genesis";
import * as _91 from "./slashing/v1beta1/query";
import * as _92 from "./slashing/v1beta1/slashing";
import * as _93 from "./slashing/v1beta1/tx";
import * as _94 from "./staking/v1beta1/authz";
import * as _95 from "./staking/v1beta1/genesis";
import * as _96 from "./staking/v1beta1/query";
import * as _97 from "./staking/v1beta1/staking";
import * as _98 from "./staking/v1beta1/tx";
import * as _99 from "./tx/config/v1/config";
import * as _100 from "./tx/signing/v1beta1/signing";
import * as _101 from "./tx/v1beta1/service";
import * as _102 from "./tx/v1beta1/tx";
import * as _103 from "./upgrade/v1beta1/query";
import * as _104 from "./upgrade/v1beta1/tx";
import * as _105 from "./upgrade/v1beta1/upgrade";
import * as _106 from "./vesting/v1beta1/tx";
import * as _107 from "./vesting/v1beta1/vesting";
import * as _188 from "./auth/v1beta1/tx.amino";
import * as _189 from "./authz/v1beta1/tx.amino";
import * as _190 from "./bank/v1beta1/tx.amino";
import * as _191 from "./consensus/v1/tx.amino";
import * as _192 from "./crisis/v1beta1/tx.amino";
import * as _193 from "./distribution/v1beta1/tx.amino";
import * as _194 from "./evidence/v1beta1/tx.amino";
import * as _195 from "./feegrant/v1beta1/tx.amino";
import * as _196 from "./gov/v1/tx.amino";
import * as _197 from "./gov/v1beta1/tx.amino";
import * as _198 from "./group/v1/tx.amino";
import * as _199 from "./mint/v1beta1/tx.amino";
import * as _200 from "./nft/v1beta1/tx.amino";
import * as _201 from "./slashing/v1beta1/tx.amino";
import * as _202 from "./staking/v1beta1/tx.amino";
import * as _203 from "./upgrade/v1beta1/tx.amino";
import * as _204 from "./vesting/v1beta1/tx.amino";
import * as _205 from "./auth/v1beta1/tx.registry";
import * as _206 from "./authz/v1beta1/tx.registry";
import * as _207 from "./bank/v1beta1/tx.registry";
import * as _208 from "./consensus/v1/tx.registry";
import * as _209 from "./crisis/v1beta1/tx.registry";
import * as _210 from "./distribution/v1beta1/tx.registry";
import * as _211 from "./evidence/v1beta1/tx.registry";
import * as _212 from "./feegrant/v1beta1/tx.registry";
import * as _213 from "./gov/v1/tx.registry";
import * as _214 from "./gov/v1beta1/tx.registry";
import * as _215 from "./group/v1/tx.registry";
import * as _216 from "./mint/v1beta1/tx.registry";
import * as _217 from "./nft/v1beta1/tx.registry";
import * as _218 from "./slashing/v1beta1/tx.registry";
import * as _219 from "./staking/v1beta1/tx.registry";
import * as _220 from "./upgrade/v1beta1/tx.registry";
import * as _221 from "./vesting/v1beta1/tx.registry";
import * as _222 from "./auth/v1beta1/query.lcd";
import * as _223 from "./authz/v1beta1/query.lcd";
import * as _224 from "./bank/v1beta1/query.lcd";
import * as _225 from "./base/node/v1beta1/query.lcd";
import * as _226 from "./base/tendermint/v1beta1/query.lcd";
import * as _227 from "./consensus/v1/query.lcd";
import * as _228 from "./distribution/v1beta1/query.lcd";
import * as _229 from "./evidence/v1beta1/query.lcd";
import * as _230 from "./feegrant/v1beta1/query.lcd";
import * as _231 from "./gov/v1/query.lcd";
import * as _232 from "./gov/v1beta1/query.lcd";
import * as _233 from "./group/v1/query.lcd";
import * as _234 from "./mint/v1beta1/query.lcd";
import * as _235 from "./nft/v1beta1/query.lcd";
import * as _236 from "./params/v1beta1/query.lcd";
import * as _237 from "./slashing/v1beta1/query.lcd";
import * as _238 from "./staking/v1beta1/query.lcd";
import * as _239 from "./tx/v1beta1/service.lcd";
import * as _240 from "./upgrade/v1beta1/query.lcd";
import * as _241 from "./app/v1alpha1/query.rpc.Query";
import * as _242 from "./auth/v1beta1/query.rpc.Query";
import * as _243 from "./authz/v1beta1/query.rpc.Query";
import * as _244 from "./autocli/v1/query.rpc.Query";
import * as _245 from "./bank/v1beta1/query.rpc.Query";
import * as _246 from "./base/node/v1beta1/query.rpc.Service";
import * as _247 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _248 from "./consensus/v1/query.rpc.Query";
import * as _249 from "./distribution/v1beta1/query.rpc.Query";
import * as _250 from "./evidence/v1beta1/query.rpc.Query";
import * as _251 from "./feegrant/v1beta1/query.rpc.Query";
import * as _252 from "./gov/v1/query.rpc.Query";
import * as _253 from "./gov/v1beta1/query.rpc.Query";
import * as _254 from "./group/v1/query.rpc.Query";
import * as _255 from "./mint/v1beta1/query.rpc.Query";
import * as _256 from "./nft/v1beta1/query.rpc.Query";
import * as _257 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _258 from "./params/v1beta1/query.rpc.Query";
import * as _259 from "./slashing/v1beta1/query.rpc.Query";
import * as _260 from "./staking/v1beta1/query.rpc.Query";
import * as _261 from "./tx/v1beta1/service.rpc.Service";
import * as _262 from "./upgrade/v1beta1/query.rpc.Query";
import * as _263 from "./auth/v1beta1/tx.rpc.msg";
import * as _264 from "./authz/v1beta1/tx.rpc.msg";
import * as _265 from "./bank/v1beta1/tx.rpc.msg";
import * as _266 from "./consensus/v1/tx.rpc.msg";
import * as _267 from "./crisis/v1beta1/tx.rpc.msg";
import * as _268 from "./distribution/v1beta1/tx.rpc.msg";
import * as _269 from "./evidence/v1beta1/tx.rpc.msg";
import * as _270 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _271 from "./gov/v1/tx.rpc.msg";
import * as _272 from "./gov/v1beta1/tx.rpc.msg";
import * as _273 from "./group/v1/tx.rpc.msg";
import * as _274 from "./mint/v1beta1/tx.rpc.msg";
import * as _275 from "./nft/v1beta1/tx.rpc.msg";
import * as _276 from "./slashing/v1beta1/tx.rpc.msg";
import * as _277 from "./staking/v1beta1/tx.rpc.msg";
import * as _278 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _279 from "./vesting/v1beta1/tx.rpc.msg";
import * as _315 from "./lcd";
import * as _316 from "./rpc.query";
import * as _317 from "./rpc.tx";
export let cosmos;
(function (_cosmos) {
  let ics23;
  (function (_ics) {
    const v1 = _ics.v1 = _objectSpread(_objectSpread({}, _1), _2);
  })(ics23 || (ics23 = _cosmos.ics23 || (_cosmos.ics23 = {})));
  let app;
  (function (_app) {
    let runtime;
    (function (_runtime) {
      const v1alpha1 = _runtime.v1alpha1 = _objectSpread({}, _3);
    })(runtime || (runtime = _app.runtime || (_app.runtime = {})));
    const v1alpha1 = _app.v1alpha1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _4), _5), _6), _241);
  })(app || (app = _cosmos.app || (_cosmos.app = {})));
  let auth;
  (function (_auth) {
    const v1beta1 = _auth.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _7), _8), _9), _10), _188), _205), _222), _242), _263);
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));
  let authz;
  (function (_authz) {
    const v1beta1 = _authz.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _11), _12), _13), _14), _15), _189), _206), _223), _243), _264);
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
  let autocli;
  (function (_autocli) {
    const v1 = _autocli.v1 = _objectSpread(_objectSpread(_objectSpread({}, _16), _17), _244);
  })(autocli || (autocli = _cosmos.autocli || (_cosmos.autocli = {})));
  let bank;
  (function (_bank) {
    const v1beta1 = _bank.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _18), _19), _20), _21), _22), _190), _207), _224), _245), _265);
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
  let base;
  (function (_base) {
    let abci;
    (function (_abci) {
      const v1beta1 = _abci.v1beta1 = _objectSpread({}, _23);
    })(abci || (abci = _base.abci || (_base.abci = {})));
    let kv;
    (function (_kv) {
      const v1beta1 = _kv.v1beta1 = _objectSpread({}, _24);
    })(kv || (kv = _base.kv || (_base.kv = {})));
    let node;
    (function (_node) {
      const v1beta1 = _node.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _25), _225), _246);
    })(node || (node = _base.node || (_base.node = {})));
    let query;
    (function (_query) {
      const v1beta1 = _query.v1beta1 = _objectSpread({}, _26);
    })(query || (query = _base.query || (_base.query = {})));
    let reflection;
    (function (_reflection) {
      const v1beta1 = _reflection.v1beta1 = _objectSpread({}, _27);
      const v2alpha1 = _reflection.v2alpha1 = _objectSpread({}, _28);
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
    let snapshots;
    (function (_snapshots) {
      const v1beta1 = _snapshots.v1beta1 = _objectSpread({}, _29);
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
    let store;
    (function (_store) {
      const v1beta1 = _store.v1beta1 = _objectSpread(_objectSpread({}, _30), _31);
    })(store || (store = _base.store || (_base.store = {})));
    let tendermint;
    (function (_tendermint) {
      const v1beta1 = _tendermint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _32), _33), _226), _247);
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));
    const v1beta1 = _base.v1beta1 = _objectSpread({}, _34);
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
  let capability;
  (function (_capability) {
    const v1beta1 = _capability.v1beta1 = _objectSpread(_objectSpread({}, _35), _36);
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
  let consensus;
  (function (_consensus) {
    const v1 = _consensus.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _37), _38), _191), _208), _227), _248), _266);
  })(consensus || (consensus = _cosmos.consensus || (_cosmos.consensus = {})));
  let crisis;
  (function (_crisis) {
    const v1beta1 = _crisis.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _39), _40), _192), _209), _267);
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));
  let crypto;
  (function (_crypto) {
    const ed25519 = _crypto.ed25519 = _objectSpread({}, _41);
    let hd;
    (function (_hd) {
      const v1 = _hd.v1 = _objectSpread({}, _42);
    })(hd || (hd = _crypto.hd || (_crypto.hd = {})));
    let keyring;
    (function (_keyring) {
      const v1 = _keyring.v1 = _objectSpread({}, _43);
    })(keyring || (keyring = _crypto.keyring || (_crypto.keyring = {})));
    const multisig = _crypto.multisig = _objectSpread({}, _44);
    const secp256k1 = _crypto.secp256k1 = _objectSpread({}, _45);
    const secp256r1 = _crypto.secp256r1 = _objectSpread({}, _46);
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));
  let distribution;
  (function (_distribution) {
    const v1beta1 = _distribution.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _47), _48), _49), _50), _193), _210), _228), _249), _268);
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
  let evidence;
  (function (_evidence) {
    const v1beta1 = _evidence.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _51), _52), _53), _54), _194), _211), _229), _250), _269);
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
  let feegrant;
  (function (_feegrant) {
    const v1beta1 = _feegrant.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _55), _56), _57), _58), _195), _212), _230), _251), _270);
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));
  let genutil;
  (function (_genutil) {
    const v1beta1 = _genutil.v1beta1 = _objectSpread({}, _59);
  })(genutil || (genutil = _cosmos.genutil || (_cosmos.genutil = {})));
  let gov;
  (function (_gov) {
    const v1 = _gov.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _60), _61), _62), _63), _196), _213), _231), _252), _271);
    const v1beta1 = _gov.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _64), _65), _66), _67), _197), _214), _232), _253), _272);
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
  let group;
  (function (_group) {
    const v1 = _group.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _68), _69), _70), _71), _72), _198), _215), _233), _254), _273);
  })(group || (group = _cosmos.group || (_cosmos.group = {})));
  let mint;
  (function (_mint) {
    const v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _73), _74), _75), _76), _199), _216), _234), _255), _274);
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));
  let msg;
  (function (_msg) {
    const v1 = _msg.v1 = _objectSpread({}, _77);
  })(msg || (msg = _cosmos.msg || (_cosmos.msg = {})));
  let nft;
  (function (_nft) {
    const v1beta1 = _nft.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _78), _79), _80), _81), _82), _200), _217), _235), _256), _275);
  })(nft || (nft = _cosmos.nft || (_cosmos.nft = {})));
  let orm;
  (function (_orm) {
    let query;
    (function (_query2) {
      const v1alpha1 = _query2.v1alpha1 = _objectSpread(_objectSpread({}, _83), _257);
    })(query || (query = _orm.query || (_orm.query = {})));
    const v1 = _orm.v1 = _objectSpread({}, _84);
    const v1alpha1 = _orm.v1alpha1 = _objectSpread({}, _85);
  })(orm || (orm = _cosmos.orm || (_cosmos.orm = {})));
  let params;
  (function (_params) {
    const v1beta1 = _params.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _86), _87), _236), _258);
  })(params || (params = _cosmos.params || (_cosmos.params = {})));
  let query;
  (function (_query3) {
    const v1 = _query3.v1 = _objectSpread({}, _88);
  })(query || (query = _cosmos.query || (_cosmos.query = {})));
  let reflection;
  (function (_reflection2) {
    const v1 = _reflection2.v1 = _objectSpread({}, _89);
  })(reflection || (reflection = _cosmos.reflection || (_cosmos.reflection = {})));
  let slashing;
  (function (_slashing) {
    const v1beta1 = _slashing.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _90), _91), _92), _93), _201), _218), _237), _259), _276);
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
  let staking;
  (function (_staking) {
    const v1beta1 = _staking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _94), _95), _96), _97), _98), _202), _219), _238), _260), _277);
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
  let tx;
  (function (_tx) {
    let config;
    (function (_config) {
      const v1 = _config.v1 = _objectSpread({}, _99);
    })(config || (config = _tx.config || (_tx.config = {})));
    let signing;
    (function (_signing) {
      const v1beta1 = _signing.v1beta1 = _objectSpread({}, _100);
    })(signing || (signing = _tx.signing || (_tx.signing = {})));
    const v1beta1 = _tx.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _101), _102), _239), _261);
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
  let upgrade;
  (function (_upgrade) {
    const v1beta1 = _upgrade.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _103), _104), _105), _203), _220), _240), _262), _278);
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
  let vesting;
  (function (_vesting) {
    const v1beta1 = _vesting.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _106), _107), _204), _221), _279);
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
  const ClientFactory = _cosmos.ClientFactory = _objectSpread(_objectSpread(_objectSpread({}, _315), _316), _317);
})(cosmos || (cosmos = {}));