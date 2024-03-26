import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as dualityDexTxRegistry from "./dex/tx.registry";
import * as dualityIncentivesTxRegistry from "./incentives/tx.registry";
import * as dualityDexTxAmino from "./dex/tx.amino";
import * as dualityIncentivesTxAmino from "./incentives/tx.amino";
export const dualityAminoConverters = _objectSpread(_objectSpread({}, dualityDexTxAmino.AminoConverter), dualityIncentivesTxAmino.AminoConverter);
export const dualityProtoRegistry = [...dualityDexTxRegistry.registry, ...dualityIncentivesTxRegistry.registry];
export const getSigningDualityClientOptions = ({
  defaultTypes = defaultRegistryTypes
} = {}) => {
  const registry = new Registry([...defaultTypes, ...dualityProtoRegistry]);
  const aminoTypes = new AminoTypes(_objectSpread({}, dualityAminoConverters));
  return {
    registry,
    aminoTypes
  };
};
export const getSigningDualityClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningDualityClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry,
    aminoTypes
  });
  return client;
};