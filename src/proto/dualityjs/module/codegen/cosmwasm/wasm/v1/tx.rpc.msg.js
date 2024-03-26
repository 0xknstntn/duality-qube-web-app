import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgInstantiateContract2, MsgInstantiateContract2Response, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgUpdateAdminResponse, MsgClearAdmin, MsgClearAdminResponse, MsgUpdateInstantiateConfig, MsgUpdateInstantiateConfigResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgSudoContract, MsgSudoContractResponse, MsgPinCodes, MsgPinCodesResponse, MsgUnpinCodes, MsgUnpinCodesResponse, MsgStoreAndInstantiateContract, MsgStoreAndInstantiateContractResponse, MsgRemoveCodeUploadParamsAddresses, MsgRemoveCodeUploadParamsAddressesResponse, MsgAddCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddressesResponse, MsgStoreAndMigrateContract, MsgStoreAndMigrateContractResponse, MsgUpdateContractLabel, MsgUpdateContractLabelResponse } from "./tx";
/** Msg defines the wasm Msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
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
  storeCode(request) {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
    return promise.then(data => MsgStoreCodeResponse.decode(new _m0.Reader(data)));
  }
  instantiateContract(request) {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
    return promise.then(data => MsgInstantiateContractResponse.decode(new _m0.Reader(data)));
  }
  instantiateContract2(request) {
    const data = MsgInstantiateContract2.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract2", data);
    return promise.then(data => MsgInstantiateContract2Response.decode(new _m0.Reader(data)));
  }
  executeContract(request) {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
    return promise.then(data => MsgExecuteContractResponse.decode(new _m0.Reader(data)));
  }
  migrateContract(request) {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
    return promise.then(data => MsgMigrateContractResponse.decode(new _m0.Reader(data)));
  }
  updateAdmin(request) {
    const data = MsgUpdateAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
    return promise.then(data => MsgUpdateAdminResponse.decode(new _m0.Reader(data)));
  }
  clearAdmin(request) {
    const data = MsgClearAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
    return promise.then(data => MsgClearAdminResponse.decode(new _m0.Reader(data)));
  }
  updateInstantiateConfig(request) {
    const data = MsgUpdateInstantiateConfig.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateInstantiateConfig", data);
    return promise.then(data => MsgUpdateInstantiateConfigResponse.decode(new _m0.Reader(data)));
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  sudoContract(request) {
    const data = MsgSudoContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "SudoContract", data);
    return promise.then(data => MsgSudoContractResponse.decode(new _m0.Reader(data)));
  }
  pinCodes(request) {
    const data = MsgPinCodes.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "PinCodes", data);
    return promise.then(data => MsgPinCodesResponse.decode(new _m0.Reader(data)));
  }
  unpinCodes(request) {
    const data = MsgUnpinCodes.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UnpinCodes", data);
    return promise.then(data => MsgUnpinCodesResponse.decode(new _m0.Reader(data)));
  }
  storeAndInstantiateContract(request) {
    const data = MsgStoreAndInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreAndInstantiateContract", data);
    return promise.then(data => MsgStoreAndInstantiateContractResponse.decode(new _m0.Reader(data)));
  }
  removeCodeUploadParamsAddresses(request) {
    const data = MsgRemoveCodeUploadParamsAddresses.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "RemoveCodeUploadParamsAddresses", data);
    return promise.then(data => MsgRemoveCodeUploadParamsAddressesResponse.decode(new _m0.Reader(data)));
  }
  addCodeUploadParamsAddresses(request) {
    const data = MsgAddCodeUploadParamsAddresses.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "AddCodeUploadParamsAddresses", data);
    return promise.then(data => MsgAddCodeUploadParamsAddressesResponse.decode(new _m0.Reader(data)));
  }
  storeAndMigrateContract(request) {
    const data = MsgStoreAndMigrateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreAndMigrateContract", data);
    return promise.then(data => MsgStoreAndMigrateContractResponse.decode(new _m0.Reader(data)));
  }
  updateContractLabel(request) {
    const data = MsgUpdateContractLabel.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateContractLabel", data);
    return promise.then(data => MsgUpdateContractLabelResponse.decode(new _m0.Reader(data)));
  }
}