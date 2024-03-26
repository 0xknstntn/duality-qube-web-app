"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _types = require("./types");
var _encoding = require("@cosmjs/encoding");
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmwasm.wasm.v1.MsgStoreCode": {
    aminoType: "wasm/MsgStoreCode",
    toAmino: function toAmino(_ref) {
      var sender = _ref.sender,
        wasm_byte_code = _ref.wasm_byte_code,
        instantiate_permission = _ref.instantiate_permission;
      return {
        sender: sender,
        wasm_byte_code: (0, _encoding.toBase64)(wasm_byte_code),
        instantiate_permission: {
          permission: instantiate_permission.permission,
          addresses: instantiate_permission.addresses
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var sender = _ref2.sender,
        wasm_byte_code = _ref2.wasm_byte_code,
        instantiate_permission = _ref2.instantiate_permission;
      return {
        sender: sender,
        wasm_byte_code: (0, _encoding.fromBase64)(wasm_byte_code),
        instantiate_permission: {
          permission: (0, _types.accessTypeFromJSON)(instantiate_permission.permission),
          addresses: instantiate_permission.addresses
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract": {
    aminoType: "wasm/MsgInstantiateContract",
    toAmino: function toAmino(_ref3) {
      var sender = _ref3.sender,
        admin = _ref3.admin,
        code_id = _ref3.code_id,
        label = _ref3.label,
        msg = _ref3.msg,
        funds = _ref3.funds;
      return {
        sender: sender,
        admin: admin,
        code_id: code_id.toString(),
        label: label,
        msg: JSON.parse((0, _encoding.fromUtf8)(msg)),
        funds: funds.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var sender = _ref4.sender,
        admin = _ref4.admin,
        code_id = _ref4.code_id,
        label = _ref4.label,
        msg = _ref4.msg,
        funds = _ref4.funds;
      return {
        sender: sender,
        admin: admin,
        code_id: _helpers.Long.fromString(code_id),
        label: label,
        msg: (0, _encoding.toUtf8)(JSON.stringify(msg)),
        funds: funds.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
    aminoType: "wasm/MsgInstantiateContract2",
    toAmino: function toAmino(_ref5) {
      var sender = _ref5.sender,
        admin = _ref5.admin,
        code_id = _ref5.code_id,
        label = _ref5.label,
        msg = _ref5.msg,
        funds = _ref5.funds,
        salt = _ref5.salt,
        fix_msg = _ref5.fix_msg;
      return {
        sender: sender,
        admin: admin,
        code_id: code_id.toString(),
        label: label,
        msg: JSON.parse((0, _encoding.fromUtf8)(msg)),
        funds: funds.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        salt: salt,
        fix_msg: fix_msg
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var sender = _ref6.sender,
        admin = _ref6.admin,
        code_id = _ref6.code_id,
        label = _ref6.label,
        msg = _ref6.msg,
        funds = _ref6.funds,
        salt = _ref6.salt,
        fix_msg = _ref6.fix_msg;
      return {
        sender: sender,
        admin: admin,
        code_id: _helpers.Long.fromString(code_id),
        label: label,
        msg: (0, _encoding.toUtf8)(JSON.stringify(msg)),
        funds: funds.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        salt: salt,
        fix_msg: fix_msg
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgExecuteContract": {
    aminoType: "wasm/MsgExecuteContract",
    toAmino: function toAmino(_ref7) {
      var sender = _ref7.sender,
        contract = _ref7.contract,
        msg = _ref7.msg,
        funds = _ref7.funds;
      return {
        sender: sender,
        contract: contract,
        msg: JSON.parse((0, _encoding.fromUtf8)(msg)),
        funds: funds.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var sender = _ref8.sender,
        contract = _ref8.contract,
        msg = _ref8.msg,
        funds = _ref8.funds;
      return {
        sender: sender,
        contract: contract,
        msg: (0, _encoding.toUtf8)(JSON.stringify(msg)),
        funds: funds.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgMigrateContract": {
    aminoType: "wasm/MsgMigrateContract",
    toAmino: function toAmino(_ref9) {
      var sender = _ref9.sender,
        contract = _ref9.contract,
        code_id = _ref9.code_id,
        msg = _ref9.msg;
      return {
        sender: sender,
        contract: contract,
        code_id: code_id.toString(),
        msg: JSON.parse((0, _encoding.fromUtf8)(msg))
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var sender = _ref10.sender,
        contract = _ref10.contract,
        code_id = _ref10.code_id,
        msg = _ref10.msg;
      return {
        sender: sender,
        contract: contract,
        code_id: _helpers.Long.fromString(code_id),
        msg: (0, _encoding.toUtf8)(JSON.stringify(msg))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
    aminoType: "wasm/MsgUpdateAdmin",
    toAmino: function toAmino(_ref11) {
      var sender = _ref11.sender,
        new_admin = _ref11.new_admin,
        contract = _ref11.contract;
      return {
        sender: sender,
        new_admin: new_admin,
        contract: contract
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var sender = _ref12.sender,
        new_admin = _ref12.new_admin,
        contract = _ref12.contract;
      return {
        sender: sender,
        new_admin: new_admin,
        contract: contract
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgClearAdmin": {
    aminoType: "wasm/MsgClearAdmin",
    toAmino: function toAmino(_ref13) {
      var sender = _ref13.sender,
        contract = _ref13.contract;
      return {
        sender: sender,
        contract: contract
      };
    },
    fromAmino: function fromAmino(_ref14) {
      var sender = _ref14.sender,
        contract = _ref14.contract;
      return {
        sender: sender,
        contract: contract
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
    aminoType: "wasm/MsgUpdateInstantiateConfig",
    toAmino: function toAmino(_ref15) {
      var sender = _ref15.sender,
        code_id = _ref15.code_id,
        new_instantiate_permission = _ref15.new_instantiate_permission;
      return {
        sender: sender,
        code_id: code_id.toString(),
        new_instantiate_permission: {
          permission: new_instantiate_permission.permission,
          addresses: new_instantiate_permission.addresses
        }
      };
    },
    fromAmino: function fromAmino(_ref16) {
      var sender = _ref16.sender,
        code_id = _ref16.code_id,
        new_instantiate_permission = _ref16.new_instantiate_permission;
      return {
        sender: sender,
        code_id: _helpers.Long.fromString(code_id),
        new_instantiate_permission: {
          permission: (0, _types.accessTypeFromJSON)(new_instantiate_permission.permission),
          addresses: new_instantiate_permission.addresses
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateParams": {
    aminoType: "wasm/MsgUpdateParams",
    toAmino: function toAmino(_ref17) {
      var authority = _ref17.authority,
        params = _ref17.params;
      return {
        authority: authority,
        params: {
          code_upload_access: {
            permission: params.code_upload_access.permission,
            addresses: params.code_upload_access.addresses
          },
          instantiate_default_permission: params.instantiate_default_permission
        }
      };
    },
    fromAmino: function fromAmino(_ref18) {
      var authority = _ref18.authority,
        params = _ref18.params;
      return {
        authority: authority,
        params: {
          code_upload_access: {
            permission: (0, _types.accessTypeFromJSON)(params.code_upload_access.permission),
            addresses: params.code_upload_access.addresses
          },
          instantiate_default_permission: (0, _types.accessTypeFromJSON)(params.instantiate_default_permission)
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgSudoContract": {
    aminoType: "wasm/MsgSudoContract",
    toAmino: function toAmino(_ref19) {
      var authority = _ref19.authority,
        contract = _ref19.contract,
        msg = _ref19.msg;
      return {
        authority: authority,
        contract: contract,
        msg: JSON.parse((0, _encoding.fromUtf8)(msg))
      };
    },
    fromAmino: function fromAmino(_ref20) {
      var authority = _ref20.authority,
        contract = _ref20.contract,
        msg = _ref20.msg;
      return {
        authority: authority,
        contract: contract,
        msg: (0, _encoding.toUtf8)(JSON.stringify(msg))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgPinCodes": {
    aminoType: "wasm/MsgPinCodes",
    toAmino: function toAmino(_ref21) {
      var authority = _ref21.authority,
        code_ids = _ref21.code_ids;
      return {
        authority: authority,
        code_ids: code_ids.map(function (el0) {
          return el0.toString();
        })
      };
    },
    fromAmino: function fromAmino(_ref22) {
      var authority = _ref22.authority,
        code_ids = _ref22.code_ids;
      return {
        authority: authority,
        code_ids: code_ids.map(function (el0) {
          return _helpers.Long.fromString(el0);
        })
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUnpinCodes": {
    aminoType: "wasm/MsgUnpinCodes",
    toAmino: function toAmino(_ref23) {
      var authority = _ref23.authority,
        code_ids = _ref23.code_ids;
      return {
        authority: authority,
        code_ids: code_ids.map(function (el0) {
          return el0.toString();
        })
      };
    },
    fromAmino: function fromAmino(_ref24) {
      var authority = _ref24.authority,
        code_ids = _ref24.code_ids;
      return {
        authority: authority,
        code_ids: code_ids.map(function (el0) {
          return _helpers.Long.fromString(el0);
        })
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
    aminoType: "wasm/MsgStoreAndInstantiateContract",
    toAmino: function toAmino(_ref25) {
      var authority = _ref25.authority,
        wasm_byte_code = _ref25.wasm_byte_code,
        instantiate_permission = _ref25.instantiate_permission,
        unpin_code = _ref25.unpin_code,
        admin = _ref25.admin,
        label = _ref25.label,
        msg = _ref25.msg,
        funds = _ref25.funds,
        source = _ref25.source,
        builder = _ref25.builder,
        code_hash = _ref25.code_hash;
      return {
        authority: authority,
        wasm_byte_code: (0, _encoding.toBase64)(wasm_byte_code),
        instantiate_permission: {
          permission: instantiate_permission.permission,
          addresses: instantiate_permission.addresses
        },
        unpin_code: unpin_code,
        admin: admin,
        label: label,
        msg: JSON.parse((0, _encoding.fromUtf8)(msg)),
        funds: funds.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        source: source,
        builder: builder,
        code_hash: code_hash
      };
    },
    fromAmino: function fromAmino(_ref26) {
      var authority = _ref26.authority,
        wasm_byte_code = _ref26.wasm_byte_code,
        instantiate_permission = _ref26.instantiate_permission,
        unpin_code = _ref26.unpin_code,
        admin = _ref26.admin,
        label = _ref26.label,
        msg = _ref26.msg,
        funds = _ref26.funds,
        source = _ref26.source,
        builder = _ref26.builder,
        code_hash = _ref26.code_hash;
      return {
        authority: authority,
        wasm_byte_code: (0, _encoding.fromBase64)(wasm_byte_code),
        instantiate_permission: {
          permission: (0, _types.accessTypeFromJSON)(instantiate_permission.permission),
          addresses: instantiate_permission.addresses
        },
        unpin_code: unpin_code,
        admin: admin,
        label: label,
        msg: (0, _encoding.toUtf8)(JSON.stringify(msg)),
        funds: funds.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        source: source,
        builder: builder,
        code_hash: code_hash
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
    aminoType: "wasm/MsgRemoveCodeUploadParamsAddresses",
    toAmino: function toAmino(_ref27) {
      var authority = _ref27.authority,
        addresses = _ref27.addresses;
      return {
        authority: authority,
        addresses: addresses
      };
    },
    fromAmino: function fromAmino(_ref28) {
      var authority = _ref28.authority,
        addresses = _ref28.addresses;
      return {
        authority: authority,
        addresses: addresses
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
    aminoType: "wasm/MsgAddCodeUploadParamsAddresses",
    toAmino: function toAmino(_ref29) {
      var authority = _ref29.authority,
        addresses = _ref29.addresses;
      return {
        authority: authority,
        addresses: addresses
      };
    },
    fromAmino: function fromAmino(_ref30) {
      var authority = _ref30.authority,
        addresses = _ref30.addresses;
      return {
        authority: authority,
        addresses: addresses
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
    aminoType: "wasm/MsgStoreAndMigrateContract",
    toAmino: function toAmino(_ref31) {
      var authority = _ref31.authority,
        wasm_byte_code = _ref31.wasm_byte_code,
        instantiate_permission = _ref31.instantiate_permission,
        contract = _ref31.contract,
        msg = _ref31.msg;
      return {
        authority: authority,
        wasm_byte_code: (0, _encoding.toBase64)(wasm_byte_code),
        instantiate_permission: {
          permission: instantiate_permission.permission,
          addresses: instantiate_permission.addresses
        },
        contract: contract,
        msg: JSON.parse((0, _encoding.fromUtf8)(msg))
      };
    },
    fromAmino: function fromAmino(_ref32) {
      var authority = _ref32.authority,
        wasm_byte_code = _ref32.wasm_byte_code,
        instantiate_permission = _ref32.instantiate_permission,
        contract = _ref32.contract,
        msg = _ref32.msg;
      return {
        authority: authority,
        wasm_byte_code: (0, _encoding.fromBase64)(wasm_byte_code),
        instantiate_permission: {
          permission: (0, _types.accessTypeFromJSON)(instantiate_permission.permission),
          addresses: instantiate_permission.addresses
        },
        contract: contract,
        msg: (0, _encoding.toUtf8)(JSON.stringify(msg))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
    aminoType: "wasm/MsgUpdateContractLabel",
    toAmino: function toAmino(_ref33) {
      var sender = _ref33.sender,
        new_label = _ref33.new_label,
        contract = _ref33.contract;
      return {
        sender: sender,
        new_label: new_label,
        contract: contract
      };
    },
    fromAmino: function fromAmino(_ref34) {
      var sender = _ref34.sender,
        new_label = _ref34.new_label,
        contract = _ref34.contract;
      return {
        sender: sender,
        new_label: new_label,
        contract: contract
      };
    }
  }
};
exports.AminoConverter = AminoConverter;