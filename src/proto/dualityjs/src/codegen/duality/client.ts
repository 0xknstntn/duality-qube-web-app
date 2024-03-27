import { GeneratedType, Registry, OfflineSigner } from '@cosmjs/proto-signing';
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from '@cosmjs/stargate';
import { HttpEndpoint } from '@cosmjs/tendermint-rpc';
import * as dualityDexTxRegistry from './dex/tx.registry';
import * as dualityIncentivesTxRegistry from './incentives/tx.registry';
import * as dualityDexTxAmino from './dex/tx.amino';
import * as dualityIncentivesTxAmino from './incentives/tx.amino';
export const dualityAminoConverters = {
  ...dualityDexTxAmino.AminoConverter,
  ...dualityIncentivesTxAmino.AminoConverter
};
export const dualityProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...dualityDexTxRegistry.registry, ...dualityIncentivesTxRegistry.registry];
export const getSigningDualityClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...dualityProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...dualityAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningDualityClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningDualityClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};