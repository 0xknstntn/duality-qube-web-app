import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as cosmosAuthV1beta1TxRegistry from "./auth/v1beta1/tx.registry";
import * as cosmosAuthzV1beta1TxRegistry from "./authz/v1beta1/tx.registry";
import * as cosmosBankV1beta1TxRegistry from "./bank/v1beta1/tx.registry";
import * as cosmosConsensusV1TxRegistry from "./consensus/v1/tx.registry";
import * as cosmosCrisisV1beta1TxRegistry from "./crisis/v1beta1/tx.registry";
import * as cosmosDistributionV1beta1TxRegistry from "./distribution/v1beta1/tx.registry";
import * as cosmosEvidenceV1beta1TxRegistry from "./evidence/v1beta1/tx.registry";
import * as cosmosFeegrantV1beta1TxRegistry from "./feegrant/v1beta1/tx.registry";
import * as cosmosGovV1TxRegistry from "./gov/v1/tx.registry";
import * as cosmosGovV1beta1TxRegistry from "./gov/v1beta1/tx.registry";
import * as cosmosGroupV1TxRegistry from "./group/v1/tx.registry";
import * as cosmosMintV1beta1TxRegistry from "./mint/v1beta1/tx.registry";
import * as cosmosNftV1beta1TxRegistry from "./nft/v1beta1/tx.registry";
import * as cosmosSlashingV1beta1TxRegistry from "./slashing/v1beta1/tx.registry";
import * as cosmosStakingV1beta1TxRegistry from "./staking/v1beta1/tx.registry";
import * as cosmosUpgradeV1beta1TxRegistry from "./upgrade/v1beta1/tx.registry";
import * as cosmosVestingV1beta1TxRegistry from "./vesting/v1beta1/tx.registry";
import * as cosmosAuthV1beta1TxAmino from "./auth/v1beta1/tx.amino";
import * as cosmosAuthzV1beta1TxAmino from "./authz/v1beta1/tx.amino";
import * as cosmosBankV1beta1TxAmino from "./bank/v1beta1/tx.amino";
import * as cosmosConsensusV1TxAmino from "./consensus/v1/tx.amino";
import * as cosmosCrisisV1beta1TxAmino from "./crisis/v1beta1/tx.amino";
import * as cosmosDistributionV1beta1TxAmino from "./distribution/v1beta1/tx.amino";
import * as cosmosEvidenceV1beta1TxAmino from "./evidence/v1beta1/tx.amino";
import * as cosmosFeegrantV1beta1TxAmino from "./feegrant/v1beta1/tx.amino";
import * as cosmosGovV1TxAmino from "./gov/v1/tx.amino";
import * as cosmosGovV1beta1TxAmino from "./gov/v1beta1/tx.amino";
import * as cosmosGroupV1TxAmino from "./group/v1/tx.amino";
import * as cosmosMintV1beta1TxAmino from "./mint/v1beta1/tx.amino";
import * as cosmosNftV1beta1TxAmino from "./nft/v1beta1/tx.amino";
import * as cosmosSlashingV1beta1TxAmino from "./slashing/v1beta1/tx.amino";
import * as cosmosStakingV1beta1TxAmino from "./staking/v1beta1/tx.amino";
import * as cosmosUpgradeV1beta1TxAmino from "./upgrade/v1beta1/tx.amino";
import * as cosmosVestingV1beta1TxAmino from "./vesting/v1beta1/tx.amino";
export const cosmosAminoConverters = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, cosmosAuthV1beta1TxAmino.AminoConverter), cosmosAuthzV1beta1TxAmino.AminoConverter), cosmosBankV1beta1TxAmino.AminoConverter), cosmosConsensusV1TxAmino.AminoConverter), cosmosCrisisV1beta1TxAmino.AminoConverter), cosmosDistributionV1beta1TxAmino.AminoConverter), cosmosEvidenceV1beta1TxAmino.AminoConverter), cosmosFeegrantV1beta1TxAmino.AminoConverter), cosmosGovV1TxAmino.AminoConverter), cosmosGovV1beta1TxAmino.AminoConverter), cosmosGroupV1TxAmino.AminoConverter), cosmosMintV1beta1TxAmino.AminoConverter), cosmosNftV1beta1TxAmino.AminoConverter), cosmosSlashingV1beta1TxAmino.AminoConverter), cosmosStakingV1beta1TxAmino.AminoConverter), cosmosUpgradeV1beta1TxAmino.AminoConverter), cosmosVestingV1beta1TxAmino.AminoConverter);
export const cosmosProtoRegistry = [...cosmosAuthV1beta1TxRegistry.registry, ...cosmosAuthzV1beta1TxRegistry.registry, ...cosmosBankV1beta1TxRegistry.registry, ...cosmosConsensusV1TxRegistry.registry, ...cosmosCrisisV1beta1TxRegistry.registry, ...cosmosDistributionV1beta1TxRegistry.registry, ...cosmosEvidenceV1beta1TxRegistry.registry, ...cosmosFeegrantV1beta1TxRegistry.registry, ...cosmosGovV1TxRegistry.registry, ...cosmosGovV1beta1TxRegistry.registry, ...cosmosGroupV1TxRegistry.registry, ...cosmosMintV1beta1TxRegistry.registry, ...cosmosNftV1beta1TxRegistry.registry, ...cosmosSlashingV1beta1TxRegistry.registry, ...cosmosStakingV1beta1TxRegistry.registry, ...cosmosUpgradeV1beta1TxRegistry.registry, ...cosmosVestingV1beta1TxRegistry.registry];
export const getSigningCosmosClientOptions = () => {
  const registry = new Registry([...cosmosProtoRegistry]);
  const aminoTypes = new AminoTypes(_objectSpread({}, cosmosAminoConverters));
  return {
    registry,
    aminoTypes
  };
};
export const getSigningCosmosClient = async ({
  rpcEndpoint,
  signer
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningCosmosClientOptions();
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry,
    aminoTypes
  });
  return client;
};