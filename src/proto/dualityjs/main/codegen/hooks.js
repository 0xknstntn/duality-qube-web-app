"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRpcQueryHooks = void 0;
var _CosmosAppV1alpha1Queryrpc = _interopRequireWildcard(require("./cosmos/app/v1alpha1/query.rpc.Query"));
var _CosmosAuthV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/auth/v1beta1/query.rpc.Query"));
var _CosmosAuthzV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/authz/v1beta1/query.rpc.Query"));
var _CosmosAutocliV1Queryrpc = _interopRequireWildcard(require("./cosmos/autocli/v1/query.rpc.Query"));
var _CosmosBankV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/bank/v1beta1/query.rpc.Query"));
var _CosmosBaseNodeV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/base/node/v1beta1/query.rpc.Service"));
var _CosmosBaseTendermintV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/base/tendermint/v1beta1/query.rpc.Service"));
var _CosmosConsensusV1Queryrpc = _interopRequireWildcard(require("./cosmos/consensus/v1/query.rpc.Query"));
var _CosmosDistributionV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/distribution/v1beta1/query.rpc.Query"));
var _CosmosEvidenceV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/evidence/v1beta1/query.rpc.Query"));
var _CosmosFeegrantV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/feegrant/v1beta1/query.rpc.Query"));
var _CosmosGovV1Queryrpc = _interopRequireWildcard(require("./cosmos/gov/v1/query.rpc.Query"));
var _CosmosGovV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/gov/v1beta1/query.rpc.Query"));
var _CosmosGroupV1Queryrpc = _interopRequireWildcard(require("./cosmos/group/v1/query.rpc.Query"));
var _CosmosMintV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/mint/v1beta1/query.rpc.Query"));
var _CosmosNftV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/nft/v1beta1/query.rpc.Query"));
var _CosmosOrmQueryV1alpha1Queryrpc = _interopRequireWildcard(require("./cosmos/orm/query/v1alpha1/query.rpc.Query"));
var _CosmosParamsV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/params/v1beta1/query.rpc.Query"));
var _CosmosSlashingV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/slashing/v1beta1/query.rpc.Query"));
var _CosmosStakingV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/staking/v1beta1/query.rpc.Query"));
var _CosmosTxV1beta1Servicerpc = _interopRequireWildcard(require("./cosmos/tx/v1beta1/service.rpc.Service"));
var _CosmosUpgradeV1beta1Queryrpc = _interopRequireWildcard(require("./cosmos/upgrade/v1beta1/query.rpc.Query"));
var _CosmwasmWasmV1Queryrpc = _interopRequireWildcard(require("./cosmwasm/wasm/v1/query.rpc.Query"));
var _DualityDexQueryrpc = _interopRequireWildcard(require("./duality/dex/query.rpc.Query"));
var _DualityEpochsQueryrpc = _interopRequireWildcard(require("./duality/epochs/query.rpc.Query"));
var _DualityIncentivesQueryrpc = _interopRequireWildcard(require("./duality/incentives/query.rpc.Query"));
var _IbcApplicationsTransferV1Queryrpc = _interopRequireWildcard(require("./ibc/applications/transfer/v1/query.rpc.Query"));
var _IbcCoreChannelV1Queryrpc = _interopRequireWildcard(require("./ibc/core/channel/v1/query.rpc.Query"));
var _IbcCoreClientV1Queryrpc = _interopRequireWildcard(require("./ibc/core/client/v1/query.rpc.Query"));
var _IbcCoreConnectionV1Queryrpc = _interopRequireWildcard(require("./ibc/core/connection/v1/query.rpc.Query"));
var _PobBuilderV1Queryrpc = _interopRequireWildcard(require("./pob/builder/v1/query.rpc.Query"));
var _RouterV1Queryrpc = _interopRequireWildcard(require("./router/v1/query.rpc.Query"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var createRpcQueryHooks = function createRpcQueryHooks(_ref) {
  var rpc = _ref.rpc;
  return {
    cosmos: {
      app: {
        v1alpha1: _CosmosAppV1alpha1Queryrpc.createRpcQueryHooks(rpc)
      },
      auth: {
        v1beta1: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      authz: {
        v1beta1: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      autocli: {
        v1: _CosmosAutocliV1Queryrpc.createRpcQueryHooks(rpc)
      },
      bank: {
        v1beta1: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      base: {
        node: {
          v1beta1: _CosmosBaseNodeV1beta1Queryrpc.createRpcQueryHooks(rpc)
        },
        tendermint: {
          v1beta1: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      consensus: {
        v1: _CosmosConsensusV1Queryrpc.createRpcQueryHooks(rpc)
      },
      distribution: {
        v1beta1: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      evidence: {
        v1beta1: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      feegrant: {
        v1beta1: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      gov: {
        v1: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc),
        v1beta1: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      group: {
        v1: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc)
      },
      mint: {
        v1beta1: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      nft: {
        v1beta1: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      orm: {
        query: {
          v1alpha1: _CosmosOrmQueryV1alpha1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      params: {
        v1beta1: _CosmosParamsV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      slashing: {
        v1beta1: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      staking: {
        v1beta1: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      tx: {
        v1beta1: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc)
      },
      upgrade: {
        v1beta1: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    cosmwasm: {
      wasm: {
        v1: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    duality: {
      dex: _DualityDexQueryrpc.createRpcQueryHooks(rpc),
      epochs: _DualityEpochsQueryrpc.createRpcQueryHooks(rpc),
      incentives: _DualityIncentivesQueryrpc.createRpcQueryHooks(rpc)
    },
    ibc: {
      applications: {
        transfer: {
          v1: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      core: {
        channel: {
          v1: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc)
        },
        client: {
          v1: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc)
        },
        connection: {
          v1: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc)
        }
      }
    },
    pob: {
      builder: {
        v1: _PobBuilderV1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    router: {
      v1: _RouterV1Queryrpc.createRpcQueryHooks(rpc)
    }
  };
};
exports.createRpcQueryHooks = createRpcQueryHooks;