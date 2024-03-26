"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmwasm.wasm.v1.MsgStoreCode", _tx.MsgStoreCode], ["/cosmwasm.wasm.v1.MsgInstantiateContract", _tx.MsgInstantiateContract], ["/cosmwasm.wasm.v1.MsgInstantiateContract2", _tx.MsgInstantiateContract2], ["/cosmwasm.wasm.v1.MsgExecuteContract", _tx.MsgExecuteContract], ["/cosmwasm.wasm.v1.MsgMigrateContract", _tx.MsgMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateAdmin", _tx.MsgUpdateAdmin], ["/cosmwasm.wasm.v1.MsgClearAdmin", _tx.MsgClearAdmin], ["/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig", _tx.MsgUpdateInstantiateConfig], ["/cosmwasm.wasm.v1.MsgUpdateParams", _tx.MsgUpdateParams], ["/cosmwasm.wasm.v1.MsgSudoContract", _tx.MsgSudoContract], ["/cosmwasm.wasm.v1.MsgPinCodes", _tx.MsgPinCodes], ["/cosmwasm.wasm.v1.MsgUnpinCodes", _tx.MsgUnpinCodes], ["/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract", _tx.MsgStoreAndInstantiateContract], ["/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses", _tx.MsgRemoveCodeUploadParamsAddresses], ["/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses", _tx.MsgAddCodeUploadParamsAddresses], ["/cosmwasm.wasm.v1.MsgStoreAndMigrateContract", _tx.MsgStoreAndMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateContractLabel", _tx.MsgUpdateContractLabel]];
exports.registry = registry;
var load = function load(protoRegistry) {
  registry.forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      typeUrl = _ref2[0],
      mod = _ref2[1];
    protoRegistry.register(typeUrl, mod);
  });
};
exports.load = load;
var MessageComposer = {
  encoded: {
    storeCode: function storeCode(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: _tx.MsgStoreCode.encode(value).finish()
      };
    },
    instantiateContract: function instantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: _tx.MsgInstantiateContract.encode(value).finish()
      };
    },
    instantiateContract2: function instantiateContract2(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value: _tx.MsgInstantiateContract2.encode(value).finish()
      };
    },
    executeContract: function executeContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: _tx.MsgExecuteContract.encode(value).finish()
      };
    },
    migrateContract: function migrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: _tx.MsgMigrateContract.encode(value).finish()
      };
    },
    updateAdmin: function updateAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: _tx.MsgUpdateAdmin.encode(value).finish()
      };
    },
    clearAdmin: function clearAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: _tx.MsgClearAdmin.encode(value).finish()
      };
    },
    updateInstantiateConfig: function updateInstantiateConfig(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value: _tx.MsgUpdateInstantiateConfig.encode(value).finish()
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.encode(value).finish()
      };
    },
    sudoContract: function sudoContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value: _tx.MsgSudoContract.encode(value).finish()
      };
    },
    pinCodes: function pinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value: _tx.MsgPinCodes.encode(value).finish()
      };
    },
    unpinCodes: function unpinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value: _tx.MsgUnpinCodes.encode(value).finish()
      };
    },
    storeAndInstantiateContract: function storeAndInstantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value: _tx.MsgStoreAndInstantiateContract.encode(value).finish()
      };
    },
    removeCodeUploadParamsAddresses: function removeCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
        value: _tx.MsgRemoveCodeUploadParamsAddresses.encode(value).finish()
      };
    },
    addCodeUploadParamsAddresses: function addCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
        value: _tx.MsgAddCodeUploadParamsAddresses.encode(value).finish()
      };
    },
    storeAndMigrateContract: function storeAndMigrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
        value: _tx.MsgStoreAndMigrateContract.encode(value).finish()
      };
    },
    updateContractLabel: function updateContractLabel(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
        value: _tx.MsgUpdateContractLabel.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    storeCode: function storeCode(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: value
      };
    },
    instantiateContract: function instantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: value
      };
    },
    instantiateContract2: function instantiateContract2(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value: value
      };
    },
    executeContract: function executeContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: value
      };
    },
    migrateContract: function migrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: value
      };
    },
    updateAdmin: function updateAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: value
      };
    },
    clearAdmin: function clearAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: value
      };
    },
    updateInstantiateConfig: function updateInstantiateConfig(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value: value
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value: value
      };
    },
    sudoContract: function sudoContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value: value
      };
    },
    pinCodes: function pinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value: value
      };
    },
    unpinCodes: function unpinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value: value
      };
    },
    storeAndInstantiateContract: function storeAndInstantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value: value
      };
    },
    removeCodeUploadParamsAddresses: function removeCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
        value: value
      };
    },
    addCodeUploadParamsAddresses: function addCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
        value: value
      };
    },
    storeAndMigrateContract: function storeAndMigrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
        value: value
      };
    },
    updateContractLabel: function updateContractLabel(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
        value: value
      };
    }
  },
  fromJSON: {
    storeCode: function storeCode(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: _tx.MsgStoreCode.fromJSON(value)
      };
    },
    instantiateContract: function instantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: _tx.MsgInstantiateContract.fromJSON(value)
      };
    },
    instantiateContract2: function instantiateContract2(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value: _tx.MsgInstantiateContract2.fromJSON(value)
      };
    },
    executeContract: function executeContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: _tx.MsgExecuteContract.fromJSON(value)
      };
    },
    migrateContract: function migrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: _tx.MsgMigrateContract.fromJSON(value)
      };
    },
    updateAdmin: function updateAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: _tx.MsgUpdateAdmin.fromJSON(value)
      };
    },
    clearAdmin: function clearAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: _tx.MsgClearAdmin.fromJSON(value)
      };
    },
    updateInstantiateConfig: function updateInstantiateConfig(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value: _tx.MsgUpdateInstantiateConfig.fromJSON(value)
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.fromJSON(value)
      };
    },
    sudoContract: function sudoContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value: _tx.MsgSudoContract.fromJSON(value)
      };
    },
    pinCodes: function pinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value: _tx.MsgPinCodes.fromJSON(value)
      };
    },
    unpinCodes: function unpinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value: _tx.MsgUnpinCodes.fromJSON(value)
      };
    },
    storeAndInstantiateContract: function storeAndInstantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value: _tx.MsgStoreAndInstantiateContract.fromJSON(value)
      };
    },
    removeCodeUploadParamsAddresses: function removeCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
        value: _tx.MsgRemoveCodeUploadParamsAddresses.fromJSON(value)
      };
    },
    addCodeUploadParamsAddresses: function addCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
        value: _tx.MsgAddCodeUploadParamsAddresses.fromJSON(value)
      };
    },
    storeAndMigrateContract: function storeAndMigrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
        value: _tx.MsgStoreAndMigrateContract.fromJSON(value)
      };
    },
    updateContractLabel: function updateContractLabel(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
        value: _tx.MsgUpdateContractLabel.fromJSON(value)
      };
    }
  },
  fromPartial: {
    storeCode: function storeCode(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: _tx.MsgStoreCode.fromPartial(value)
      };
    },
    instantiateContract: function instantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: _tx.MsgInstantiateContract.fromPartial(value)
      };
    },
    instantiateContract2: function instantiateContract2(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value: _tx.MsgInstantiateContract2.fromPartial(value)
      };
    },
    executeContract: function executeContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: _tx.MsgExecuteContract.fromPartial(value)
      };
    },
    migrateContract: function migrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: _tx.MsgMigrateContract.fromPartial(value)
      };
    },
    updateAdmin: function updateAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: _tx.MsgUpdateAdmin.fromPartial(value)
      };
    },
    clearAdmin: function clearAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: _tx.MsgClearAdmin.fromPartial(value)
      };
    },
    updateInstantiateConfig: function updateInstantiateConfig(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value: _tx.MsgUpdateInstantiateConfig.fromPartial(value)
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.fromPartial(value)
      };
    },
    sudoContract: function sudoContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value: _tx.MsgSudoContract.fromPartial(value)
      };
    },
    pinCodes: function pinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value: _tx.MsgPinCodes.fromPartial(value)
      };
    },
    unpinCodes: function unpinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value: _tx.MsgUnpinCodes.fromPartial(value)
      };
    },
    storeAndInstantiateContract: function storeAndInstantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value: _tx.MsgStoreAndInstantiateContract.fromPartial(value)
      };
    },
    removeCodeUploadParamsAddresses: function removeCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
        value: _tx.MsgRemoveCodeUploadParamsAddresses.fromPartial(value)
      };
    },
    addCodeUploadParamsAddresses: function addCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
        value: _tx.MsgAddCodeUploadParamsAddresses.fromPartial(value)
      };
    },
    storeAndMigrateContract: function storeAndMigrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
        value: _tx.MsgStoreAndMigrateContract.fromPartial(value)
      };
    },
    updateContractLabel: function updateContractLabel(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
        value: _tx.MsgUpdateContractLabel.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;