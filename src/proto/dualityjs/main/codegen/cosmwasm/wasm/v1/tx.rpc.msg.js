"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _tx = require("./tx");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Msg defines the wasm Msg service. */
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.storeCode = this.storeCode.bind(this);
    this.instantiateContract = this.instantiateContract.bind(this);
    this.instantiateContract2 = this.instantiateContract2.bind(this);
    this.executeContract = this.executeContract.bind(this);
    this.migrateContract = this.migrateContract.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.clearAdmin = this.clearAdmin.bind(this);
    this.updateInstantiateConfig = this.updateInstantiateConfig.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.sudoContract = this.sudoContract.bind(this);
    this.pinCodes = this.pinCodes.bind(this);
    this.unpinCodes = this.unpinCodes.bind(this);
    this.storeAndInstantiateContract = this.storeAndInstantiateContract.bind(this);
    this.removeCodeUploadParamsAddresses = this.removeCodeUploadParamsAddresses.bind(this);
    this.addCodeUploadParamsAddresses = this.addCodeUploadParamsAddresses.bind(this);
    this.storeAndMigrateContract = this.storeAndMigrateContract.bind(this);
    this.updateContractLabel = this.updateContractLabel.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "storeCode",
    value: function storeCode(request) {
      var data = _tx.MsgStoreCode.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
      return promise.then(function (data) {
        return _tx.MsgStoreCodeResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "instantiateContract",
    value: function instantiateContract(request) {
      var data = _tx.MsgInstantiateContract.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
      return promise.then(function (data) {
        return _tx.MsgInstantiateContractResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "instantiateContract2",
    value: function instantiateContract2(request) {
      var data = _tx.MsgInstantiateContract2.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract2", data);
      return promise.then(function (data) {
        return _tx.MsgInstantiateContract2Response.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "executeContract",
    value: function executeContract(request) {
      var data = _tx.MsgExecuteContract.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
      return promise.then(function (data) {
        return _tx.MsgExecuteContractResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "migrateContract",
    value: function migrateContract(request) {
      var data = _tx.MsgMigrateContract.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
      return promise.then(function (data) {
        return _tx.MsgMigrateContractResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateAdmin",
    value: function updateAdmin(request) {
      var data = _tx.MsgUpdateAdmin.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateAdminResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "clearAdmin",
    value: function clearAdmin(request) {
      var data = _tx.MsgClearAdmin.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
      return promise.then(function (data) {
        return _tx.MsgClearAdminResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateInstantiateConfig",
    value: function updateInstantiateConfig(request) {
      var data = _tx.MsgUpdateInstantiateConfig.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateInstantiateConfig", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateInstantiateConfigResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateParams",
    value: function updateParams(request) {
      var data = _tx.MsgUpdateParams.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateParams", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "sudoContract",
    value: function sudoContract(request) {
      var data = _tx.MsgSudoContract.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "SudoContract", data);
      return promise.then(function (data) {
        return _tx.MsgSudoContractResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "pinCodes",
    value: function pinCodes(request) {
      var data = _tx.MsgPinCodes.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "PinCodes", data);
      return promise.then(function (data) {
        return _tx.MsgPinCodesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "unpinCodes",
    value: function unpinCodes(request) {
      var data = _tx.MsgUnpinCodes.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UnpinCodes", data);
      return promise.then(function (data) {
        return _tx.MsgUnpinCodesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "storeAndInstantiateContract",
    value: function storeAndInstantiateContract(request) {
      var data = _tx.MsgStoreAndInstantiateContract.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreAndInstantiateContract", data);
      return promise.then(function (data) {
        return _tx.MsgStoreAndInstantiateContractResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "removeCodeUploadParamsAddresses",
    value: function removeCodeUploadParamsAddresses(request) {
      var data = _tx.MsgRemoveCodeUploadParamsAddresses.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "RemoveCodeUploadParamsAddresses", data);
      return promise.then(function (data) {
        return _tx.MsgRemoveCodeUploadParamsAddressesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "addCodeUploadParamsAddresses",
    value: function addCodeUploadParamsAddresses(request) {
      var data = _tx.MsgAddCodeUploadParamsAddresses.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "AddCodeUploadParamsAddresses", data);
      return promise.then(function (data) {
        return _tx.MsgAddCodeUploadParamsAddressesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "storeAndMigrateContract",
    value: function storeAndMigrateContract(request) {
      var data = _tx.MsgStoreAndMigrateContract.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreAndMigrateContract", data);
      return promise.then(function (data) {
        return _tx.MsgStoreAndMigrateContractResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateContractLabel",
    value: function updateContractLabel(request) {
      var data = _tx.MsgUpdateContractLabel.encode(request).finish();
      var promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateContractLabel", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateContractLabelResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;