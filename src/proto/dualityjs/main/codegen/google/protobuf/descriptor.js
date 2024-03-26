"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.ServiceOptions = exports.ServiceDescriptorProto = exports.OneofOptions = exports.OneofDescriptorProto = exports.MethodOptions_IdempotencyLevel = exports.MethodOptions = exports.MethodDescriptorProto = exports.MessageOptions = exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.FileOptions_OptimizeMode = exports.FileOptions = exports.FileDescriptorSet = exports.FileDescriptorProto = exports.FieldOptions_JSType = exports.FieldOptions_CType = exports.FieldOptions = exports.FieldDescriptorProto_Type = exports.FieldDescriptorProto_Label = exports.FieldDescriptorProto = exports.ExtensionRangeOptions = exports.EnumValueOptions = exports.EnumValueDescriptorProto = exports.EnumOptions = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = void 0;
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var FieldDescriptorProto_Type = /*#__PURE__*/function (FieldDescriptorProto_Type) {
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldDescriptorProto_Type;
}({});
exports.FieldDescriptorProto_Type = FieldDescriptorProto_Type;
function fieldDescriptorProto_TypeFromJSON(object) {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return FieldDescriptorProto_Type.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return FieldDescriptorProto_Type.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return FieldDescriptorProto_Type.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return FieldDescriptorProto_Type.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return FieldDescriptorProto_Type.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return FieldDescriptorProto_Type.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return FieldDescriptorProto_Type.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return FieldDescriptorProto_Type.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return FieldDescriptorProto_Type.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return FieldDescriptorProto_Type.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return FieldDescriptorProto_Type.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return FieldDescriptorProto_Type.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return FieldDescriptorProto_Type.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return FieldDescriptorProto_Type.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return FieldDescriptorProto_Type.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return FieldDescriptorProto_Type.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return FieldDescriptorProto_Type.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return FieldDescriptorProto_Type.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Type.UNRECOGNIZED;
  }
}
function fieldDescriptorProto_TypeToJSON(object) {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case FieldDescriptorProto_Type.TYPE_INT64:
      return "TYPE_INT64";
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return "TYPE_UINT64";
    case FieldDescriptorProto_Type.TYPE_INT32:
      return "TYPE_INT32";
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return "TYPE_BOOL";
    case FieldDescriptorProto_Type.TYPE_STRING:
      return "TYPE_STRING";
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return "TYPE_GROUP";
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return "TYPE_BYTES";
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return "TYPE_UINT32";
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return "TYPE_ENUM";
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return "TYPE_SINT32";
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return "TYPE_SINT64";
    case FieldDescriptorProto_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var FieldDescriptorProto_Label = /*#__PURE__*/function (FieldDescriptorProto_Label) {
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldDescriptorProto_Label;
}({});
exports.FieldDescriptorProto_Label = FieldDescriptorProto_Label;
function fieldDescriptorProto_LabelFromJSON(object) {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return FieldDescriptorProto_Label.LABEL_OPTIONAL;
    case 2:
    case "LABEL_REQUIRED":
      return FieldDescriptorProto_Label.LABEL_REQUIRED;
    case 3:
    case "LABEL_REPEATED":
      return FieldDescriptorProto_Label.LABEL_REPEATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Label.UNRECOGNIZED;
  }
}
function fieldDescriptorProto_LabelToJSON(object) {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return "LABEL_OPTIONAL";
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return "LABEL_REQUIRED";
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return "LABEL_REPEATED";
    case FieldDescriptorProto_Label.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Generated classes can be optimized for speed or code size. */
var FileOptions_OptimizeMode = /*#__PURE__*/function (FileOptions_OptimizeMode) {
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FileOptions_OptimizeMode;
}({});
exports.FileOptions_OptimizeMode = FileOptions_OptimizeMode;
function fileOptions_OptimizeModeFromJSON(object) {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileOptions_OptimizeMode.UNRECOGNIZED;
  }
}
function fileOptions_OptimizeModeToJSON(object) {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    case FileOptions_OptimizeMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var FieldOptions_CType = /*#__PURE__*/function (FieldOptions_CType) {
  FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
  FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
  FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
  FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldOptions_CType;
}({});
exports.FieldOptions_CType = FieldOptions_CType;
function fieldOptions_CTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_CType.UNRECOGNIZED;
  }
}
function fieldOptions_CTypeToJSON(object) {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    case FieldOptions_CType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var FieldOptions_JSType = /*#__PURE__*/function (FieldOptions_JSType) {
  FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
  FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
  FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
  FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldOptions_JSType;
}({});
exports.FieldOptions_JSType = FieldOptions_JSType;
function fieldOptions_JSTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_JSType.UNRECOGNIZED;
  }
}
function fieldOptions_JSTypeToJSON(object) {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    case FieldOptions_JSType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
var MethodOptions_IdempotencyLevel = /*#__PURE__*/function (MethodOptions_IdempotencyLevel) {
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return MethodOptions_IdempotencyLevel;
}({});
exports.MethodOptions_IdempotencyLevel = MethodOptions_IdempotencyLevel;
function methodOptions_IdempotencyLevelFromJSON(object) {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
    case 1:
    case "NO_SIDE_EFFECTS":
      return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
    case 2:
    case "IDEMPOTENT":
      return MethodOptions_IdempotencyLevel.IDEMPOTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
  }
}
function methodOptions_IdempotencyLevelToJSON(object) {
  switch (object) {
    case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
      return "IDEMPOTENCY_UNKNOWN";
    case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
      return "NO_SIDE_EFFECTS";
    case MethodOptions_IdempotencyLevel.IDEMPOTENT:
      return "IDEMPOTENT";
    case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */

/** Describes a complete .proto file. */

/** Describes a message type. */

/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */

/** Describes a field within a message. */

/** Describes a oneof. */

/** Describes an enum type. */

/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */

/** Describes a value within an enum. */

/** Describes a service. */

/** Describes a method of a service. */

/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */

/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * "foo.(bar.baz).qux".
 */

/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */

/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */

function createBaseFileDescriptorSet() {
  return {
    file: []
  };
}
var FileDescriptorSet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.file),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      file: Array.isArray(object === null || object === void 0 ? void 0 : object.file) ? object.file.map(function (e) {
        return FileDescriptorProto.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$file;
    var message = createBaseFileDescriptorSet();
    message.file = ((_object$file = object.file) === null || _object$file === void 0 ? void 0 : _object$file.map(function (e) {
      return FileDescriptorProto.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.FileDescriptorSet = FileDescriptorSet;
function createBaseFileDescriptorProto() {
  return {
    name: "",
    "package": "",
    dependency: [],
    public_dependency: [],
    weak_dependency: [],
    message_type: [],
    enum_type: [],
    service: [],
    extension: [],
    options: FileOptions.fromPartial({}),
    source_code_info: SourceCodeInfo.fromPartial({}),
    syntax: ""
  };
}
var FileDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message["package"] !== "") {
      writer.uint32(18).string(message["package"]);
    }
    var _iterator2 = _createForOfIteratorHelper(message.dependency),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(26).string(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    writer.uint32(82).fork();
    var _iterator3 = _createForOfIteratorHelper(message.public_dependency),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        writer.int32(_v);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    writer.ldelim();
    writer.uint32(90).fork();
    var _iterator4 = _createForOfIteratorHelper(message.weak_dependency),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v2 = _step4.value;
        writer.int32(_v2);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    writer.ldelim();
    var _iterator5 = _createForOfIteratorHelper(message.message_type),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v3 = _step5.value;
        DescriptorProto.encode(_v3, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var _iterator6 = _createForOfIteratorHelper(message.enum_type),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v4 = _step6.value;
        EnumDescriptorProto.encode(_v4, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    var _iterator7 = _createForOfIteratorHelper(message.service),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _v5 = _step7.value;
        ServiceDescriptorProto.encode(_v5, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    var _iterator8 = _createForOfIteratorHelper(message.extension),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _v6 = _step8.value;
        FieldDescriptorProto.encode(_v6, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.source_code_info !== undefined) {
      SourceCodeInfo.encode(message.source_code_info, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message["package"] = reader.string();
          break;
        case 3:
          message.dependency.push(reader.string());
          break;
        case 10:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.public_dependency.push(reader.int32());
            }
          } else {
            message.public_dependency.push(reader.int32());
          }
          break;
        case 11:
          if ((tag & 7) === 2) {
            var _end = reader.uint32() + reader.pos;
            while (reader.pos < _end) {
              message.weak_dependency.push(reader.int32());
            }
          } else {
            message.weak_dependency.push(reader.int32());
          }
          break;
        case 4:
          message.message_type.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enum_type.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 8:
          message.options = FileOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.source_code_info = SourceCodeInfo.decode(reader, reader.uint32());
          break;
        case 12:
          message.syntax = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      "package": (0, _helpers.isSet)(object["package"]) ? String(object["package"]) : "",
      dependency: Array.isArray(object === null || object === void 0 ? void 0 : object.dependency) ? object.dependency.map(function (e) {
        return String(e);
      }) : [],
      public_dependency: Array.isArray(object === null || object === void 0 ? void 0 : object.public_dependency) ? object.public_dependency.map(function (e) {
        return Number(e);
      }) : [],
      weak_dependency: Array.isArray(object === null || object === void 0 ? void 0 : object.weak_dependency) ? object.weak_dependency.map(function (e) {
        return Number(e);
      }) : [],
      message_type: Array.isArray(object === null || object === void 0 ? void 0 : object.message_type) ? object.message_type.map(function (e) {
        return DescriptorProto.fromJSON(e);
      }) : [],
      enum_type: Array.isArray(object === null || object === void 0 ? void 0 : object.enum_type) ? object.enum_type.map(function (e) {
        return EnumDescriptorProto.fromJSON(e);
      }) : [],
      service: Array.isArray(object === null || object === void 0 ? void 0 : object.service) ? object.service.map(function (e) {
        return ServiceDescriptorProto.fromJSON(e);
      }) : [],
      extension: Array.isArray(object === null || object === void 0 ? void 0 : object.extension) ? object.extension.map(function (e) {
        return FieldDescriptorProto.fromJSON(e);
      }) : [],
      options: (0, _helpers.isSet)(object.options) ? FileOptions.fromJSON(object.options) : undefined,
      source_code_info: (0, _helpers.isSet)(object.source_code_info) ? SourceCodeInfo.fromJSON(object.source_code_info) : undefined,
      syntax: (0, _helpers.isSet)(object.syntax) ? String(object.syntax) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$package, _object$dependency, _object$public_depend, _object$weak_dependen, _object$message_type, _object$enum_type, _object$service, _object$extension, _object$syntax;
    var message = createBaseFileDescriptorProto();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message["package"] = (_object$package = object["package"]) !== null && _object$package !== void 0 ? _object$package : "";
    message.dependency = ((_object$dependency = object.dependency) === null || _object$dependency === void 0 ? void 0 : _object$dependency.map(function (e) {
      return e;
    })) || [];
    message.public_dependency = ((_object$public_depend = object.public_dependency) === null || _object$public_depend === void 0 ? void 0 : _object$public_depend.map(function (e) {
      return e;
    })) || [];
    message.weak_dependency = ((_object$weak_dependen = object.weak_dependency) === null || _object$weak_dependen === void 0 ? void 0 : _object$weak_dependen.map(function (e) {
      return e;
    })) || [];
    message.message_type = ((_object$message_type = object.message_type) === null || _object$message_type === void 0 ? void 0 : _object$message_type.map(function (e) {
      return DescriptorProto.fromPartial(e);
    })) || [];
    message.enum_type = ((_object$enum_type = object.enum_type) === null || _object$enum_type === void 0 ? void 0 : _object$enum_type.map(function (e) {
      return EnumDescriptorProto.fromPartial(e);
    })) || [];
    message.service = ((_object$service = object.service) === null || _object$service === void 0 ? void 0 : _object$service.map(function (e) {
      return ServiceDescriptorProto.fromPartial(e);
    })) || [];
    message.extension = ((_object$extension = object.extension) === null || _object$extension === void 0 ? void 0 : _object$extension.map(function (e) {
      return FieldDescriptorProto.fromPartial(e);
    })) || [];
    message.options = object.options !== undefined && object.options !== null ? FileOptions.fromPartial(object.options) : undefined;
    message.source_code_info = object.source_code_info !== undefined && object.source_code_info !== null ? SourceCodeInfo.fromPartial(object.source_code_info) : undefined;
    message.syntax = (_object$syntax = object.syntax) !== null && _object$syntax !== void 0 ? _object$syntax : "";
    return message;
  }
};
exports.FileDescriptorProto = FileDescriptorProto;
function createBaseDescriptorProto() {
  return {
    name: "",
    field: [],
    extension: [],
    nested_type: [],
    enum_type: [],
    extension_range: [],
    oneof_decl: [],
    options: MessageOptions.fromPartial({}),
    reserved_range: [],
    reserved_name: []
  };
}
var DescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    var _iterator9 = _createForOfIteratorHelper(message.field),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    var _iterator10 = _createForOfIteratorHelper(message.extension),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var _v7 = _step10.value;
        FieldDescriptorProto.encode(_v7, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    var _iterator11 = _createForOfIteratorHelper(message.nested_type),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _v8 = _step11.value;
        DescriptorProto.encode(_v8, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    var _iterator12 = _createForOfIteratorHelper(message.enum_type),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _v9 = _step12.value;
        EnumDescriptorProto.encode(_v9, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    var _iterator13 = _createForOfIteratorHelper(message.extension_range),
      _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var _v10 = _step13.value;
        DescriptorProto_ExtensionRange.encode(_v10, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
    var _iterator14 = _createForOfIteratorHelper(message.oneof_decl),
      _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var _v11 = _step14.value;
        OneofDescriptorProto.encode(_v11, writer.uint32(66).fork()).ldelim();
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    var _iterator15 = _createForOfIteratorHelper(message.reserved_range),
      _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var _v12 = _step15.value;
        DescriptorProto_ReservedRange.encode(_v12, writer.uint32(74).fork()).ldelim();
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    var _iterator16 = _createForOfIteratorHelper(message.reserved_name),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var _v13 = _step16.value;
        writer.uint32(82).string(_v13);
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nested_type.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enum_type.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.extension_range.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          break;
        case 8:
          message.oneof_decl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.options = MessageOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.reserved_range.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          break;
        case 10:
          message.reserved_name.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      field: Array.isArray(object === null || object === void 0 ? void 0 : object.field) ? object.field.map(function (e) {
        return FieldDescriptorProto.fromJSON(e);
      }) : [],
      extension: Array.isArray(object === null || object === void 0 ? void 0 : object.extension) ? object.extension.map(function (e) {
        return FieldDescriptorProto.fromJSON(e);
      }) : [],
      nested_type: Array.isArray(object === null || object === void 0 ? void 0 : object.nested_type) ? object.nested_type.map(function (e) {
        return DescriptorProto.fromJSON(e);
      }) : [],
      enum_type: Array.isArray(object === null || object === void 0 ? void 0 : object.enum_type) ? object.enum_type.map(function (e) {
        return EnumDescriptorProto.fromJSON(e);
      }) : [],
      extension_range: Array.isArray(object === null || object === void 0 ? void 0 : object.extension_range) ? object.extension_range.map(function (e) {
        return DescriptorProto_ExtensionRange.fromJSON(e);
      }) : [],
      oneof_decl: Array.isArray(object === null || object === void 0 ? void 0 : object.oneof_decl) ? object.oneof_decl.map(function (e) {
        return OneofDescriptorProto.fromJSON(e);
      }) : [],
      options: (0, _helpers.isSet)(object.options) ? MessageOptions.fromJSON(object.options) : undefined,
      reserved_range: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_range) ? object.reserved_range.map(function (e) {
        return DescriptorProto_ReservedRange.fromJSON(e);
      }) : [],
      reserved_name: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_name) ? object.reserved_name.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name2, _object$field, _object$extension2, _object$nested_type, _object$enum_type2, _object$extension_ran, _object$oneof_decl, _object$reserved_rang, _object$reserved_name;
    var message = createBaseDescriptorProto();
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.field = ((_object$field = object.field) === null || _object$field === void 0 ? void 0 : _object$field.map(function (e) {
      return FieldDescriptorProto.fromPartial(e);
    })) || [];
    message.extension = ((_object$extension2 = object.extension) === null || _object$extension2 === void 0 ? void 0 : _object$extension2.map(function (e) {
      return FieldDescriptorProto.fromPartial(e);
    })) || [];
    message.nested_type = ((_object$nested_type = object.nested_type) === null || _object$nested_type === void 0 ? void 0 : _object$nested_type.map(function (e) {
      return DescriptorProto.fromPartial(e);
    })) || [];
    message.enum_type = ((_object$enum_type2 = object.enum_type) === null || _object$enum_type2 === void 0 ? void 0 : _object$enum_type2.map(function (e) {
      return EnumDescriptorProto.fromPartial(e);
    })) || [];
    message.extension_range = ((_object$extension_ran = object.extension_range) === null || _object$extension_ran === void 0 ? void 0 : _object$extension_ran.map(function (e) {
      return DescriptorProto_ExtensionRange.fromPartial(e);
    })) || [];
    message.oneof_decl = ((_object$oneof_decl = object.oneof_decl) === null || _object$oneof_decl === void 0 ? void 0 : _object$oneof_decl.map(function (e) {
      return OneofDescriptorProto.fromPartial(e);
    })) || [];
    message.options = object.options !== undefined && object.options !== null ? MessageOptions.fromPartial(object.options) : undefined;
    message.reserved_range = ((_object$reserved_rang = object.reserved_range) === null || _object$reserved_rang === void 0 ? void 0 : _object$reserved_rang.map(function (e) {
      return DescriptorProto_ReservedRange.fromPartial(e);
    })) || [];
    message.reserved_name = ((_object$reserved_name = object.reserved_name) === null || _object$reserved_name === void 0 ? void 0 : _object$reserved_name.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.DescriptorProto = DescriptorProto;
function createBaseDescriptorProto_ExtensionRange() {
  return {
    start: 0,
    end: 0,
    options: ExtensionRangeOptions.fromPartial({})
  };
}
var DescriptorProto_ExtensionRange = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== undefined) {
      ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        case 3:
          message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      start: (0, _helpers.isSet)(object.start) ? Number(object.start) : 0,
      end: (0, _helpers.isSet)(object.end) ? Number(object.end) : 0,
      options: (0, _helpers.isSet)(object.options) ? ExtensionRangeOptions.fromJSON(object.options) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$start, _object$end;
    var message = createBaseDescriptorProto_ExtensionRange();
    message.start = (_object$start = object.start) !== null && _object$start !== void 0 ? _object$start : 0;
    message.end = (_object$end = object.end) !== null && _object$end !== void 0 ? _object$end : 0;
    message.options = object.options !== undefined && object.options !== null ? ExtensionRangeOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
exports.DescriptorProto_ExtensionRange = DescriptorProto_ExtensionRange;
function createBaseDescriptorProto_ReservedRange() {
  return {
    start: 0,
    end: 0
  };
}
var DescriptorProto_ReservedRange = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      start: (0, _helpers.isSet)(object.start) ? Number(object.start) : 0,
      end: (0, _helpers.isSet)(object.end) ? Number(object.end) : 0
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$start2, _object$end2;
    var message = createBaseDescriptorProto_ReservedRange();
    message.start = (_object$start2 = object.start) !== null && _object$start2 !== void 0 ? _object$start2 : 0;
    message.end = (_object$end2 = object.end) !== null && _object$end2 !== void 0 ? _object$end2 : 0;
    return message;
  }
};
exports.DescriptorProto_ReservedRange = DescriptorProto_ReservedRange;
function createBaseExtensionRangeOptions() {
  return {
    uninterpreted_option: []
  };
}
var ExtensionRangeOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator17 = _createForOfIteratorHelper(message.uninterpreted_option),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var v = _step17.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$uninterpreted;
    var message = createBaseExtensionRangeOptions();
    message.uninterpreted_option = ((_object$uninterpreted = object.uninterpreted_option) === null || _object$uninterpreted === void 0 ? void 0 : _object$uninterpreted.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ExtensionRangeOptions = ExtensionRangeOptions;
function createBaseFieldDescriptorProto() {
  return {
    name: "",
    number: 0,
    label: 1,
    type: 1,
    type_name: "",
    extendee: "",
    default_value: "",
    oneof_index: 0,
    json_name: "",
    options: FieldOptions.fromPartial({})
  };
}
var FieldDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.type_name !== "") {
      writer.uint32(50).string(message.type_name);
    }
    if (message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.default_value !== "") {
      writer.uint32(58).string(message.default_value);
    }
    if (message.oneof_index !== 0) {
      writer.uint32(72).int32(message.oneof_index);
    }
    if (message.json_name !== "") {
      writer.uint32(82).string(message.json_name);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.number = reader.int32();
          break;
        case 4:
          message.label = reader.int32();
          break;
        case 5:
          message.type = reader.int32();
          break;
        case 6:
          message.type_name = reader.string();
          break;
        case 2:
          message.extendee = reader.string();
          break;
        case 7:
          message.default_value = reader.string();
          break;
        case 9:
          message.oneof_index = reader.int32();
          break;
        case 10:
          message.json_name = reader.string();
          break;
        case 8:
          message.options = FieldOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      number: (0, _helpers.isSet)(object.number) ? Number(object.number) : 0,
      label: (0, _helpers.isSet)(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : -1,
      type: (0, _helpers.isSet)(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : -1,
      type_name: (0, _helpers.isSet)(object.type_name) ? String(object.type_name) : "",
      extendee: (0, _helpers.isSet)(object.extendee) ? String(object.extendee) : "",
      default_value: (0, _helpers.isSet)(object.default_value) ? String(object.default_value) : "",
      oneof_index: (0, _helpers.isSet)(object.oneof_index) ? Number(object.oneof_index) : 0,
      json_name: (0, _helpers.isSet)(object.json_name) ? String(object.json_name) : "",
      options: (0, _helpers.isSet)(object.options) ? FieldOptions.fromJSON(object.options) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name3, _object$number, _object$label, _object$type, _object$type_name, _object$extendee, _object$default_value, _object$oneof_index, _object$json_name;
    var message = createBaseFieldDescriptorProto();
    message.name = (_object$name3 = object.name) !== null && _object$name3 !== void 0 ? _object$name3 : "";
    message.number = (_object$number = object.number) !== null && _object$number !== void 0 ? _object$number : 0;
    message.label = (_object$label = object.label) !== null && _object$label !== void 0 ? _object$label : 1;
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 1;
    message.type_name = (_object$type_name = object.type_name) !== null && _object$type_name !== void 0 ? _object$type_name : "";
    message.extendee = (_object$extendee = object.extendee) !== null && _object$extendee !== void 0 ? _object$extendee : "";
    message.default_value = (_object$default_value = object.default_value) !== null && _object$default_value !== void 0 ? _object$default_value : "";
    message.oneof_index = (_object$oneof_index = object.oneof_index) !== null && _object$oneof_index !== void 0 ? _object$oneof_index : 0;
    message.json_name = (_object$json_name = object.json_name) !== null && _object$json_name !== void 0 ? _object$json_name : "";
    message.options = object.options !== undefined && object.options !== null ? FieldOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
exports.FieldDescriptorProto = FieldDescriptorProto;
function createBaseOneofDescriptorProto() {
  return {
    name: "",
    options: OneofOptions.fromPartial({})
  };
}
var OneofDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.options = OneofOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      options: (0, _helpers.isSet)(object.options) ? OneofOptions.fromJSON(object.options) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name4;
    var message = createBaseOneofDescriptorProto();
    message.name = (_object$name4 = object.name) !== null && _object$name4 !== void 0 ? _object$name4 : "";
    message.options = object.options !== undefined && object.options !== null ? OneofOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
exports.OneofDescriptorProto = OneofDescriptorProto;
function createBaseEnumDescriptorProto() {
  return {
    name: "",
    value: [],
    options: EnumOptions.fromPartial({}),
    reserved_range: [],
    reserved_name: []
  };
}
var EnumDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    var _iterator18 = _createForOfIteratorHelper(message.value),
      _step18;
    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var v = _step18.value;
        EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    var _iterator19 = _createForOfIteratorHelper(message.reserved_range),
      _step19;
    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        var _v14 = _step19.value;
        EnumDescriptorProto_EnumReservedRange.encode(_v14, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
    var _iterator20 = _createForOfIteratorHelper(message.reserved_name),
      _step20;
    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
        var _v15 = _step20.value;
        writer.uint32(42).string(_v15);
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = EnumOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.reserved_range.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reserved_name.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      value: Array.isArray(object === null || object === void 0 ? void 0 : object.value) ? object.value.map(function (e) {
        return EnumValueDescriptorProto.fromJSON(e);
      }) : [],
      options: (0, _helpers.isSet)(object.options) ? EnumOptions.fromJSON(object.options) : undefined,
      reserved_range: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_range) ? object.reserved_range.map(function (e) {
        return EnumDescriptorProto_EnumReservedRange.fromJSON(e);
      }) : [],
      reserved_name: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_name) ? object.reserved_name.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name5, _object$value, _object$reserved_rang2, _object$reserved_name2;
    var message = createBaseEnumDescriptorProto();
    message.name = (_object$name5 = object.name) !== null && _object$name5 !== void 0 ? _object$name5 : "";
    message.value = ((_object$value = object.value) === null || _object$value === void 0 ? void 0 : _object$value.map(function (e) {
      return EnumValueDescriptorProto.fromPartial(e);
    })) || [];
    message.options = object.options !== undefined && object.options !== null ? EnumOptions.fromPartial(object.options) : undefined;
    message.reserved_range = ((_object$reserved_rang2 = object.reserved_range) === null || _object$reserved_rang2 === void 0 ? void 0 : _object$reserved_rang2.map(function (e) {
      return EnumDescriptorProto_EnumReservedRange.fromPartial(e);
    })) || [];
    message.reserved_name = ((_object$reserved_name2 = object.reserved_name) === null || _object$reserved_name2 === void 0 ? void 0 : _object$reserved_name2.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.EnumDescriptorProto = EnumDescriptorProto;
function createBaseEnumDescriptorProto_EnumReservedRange() {
  return {
    start: 0,
    end: 0
  };
}
var EnumDescriptorProto_EnumReservedRange = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      start: (0, _helpers.isSet)(object.start) ? Number(object.start) : 0,
      end: (0, _helpers.isSet)(object.end) ? Number(object.end) : 0
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$start3, _object$end3;
    var message = createBaseEnumDescriptorProto_EnumReservedRange();
    message.start = (_object$start3 = object.start) !== null && _object$start3 !== void 0 ? _object$start3 : 0;
    message.end = (_object$end3 = object.end) !== null && _object$end3 !== void 0 ? _object$end3 : 0;
    return message;
  }
};
exports.EnumDescriptorProto_EnumReservedRange = EnumDescriptorProto_EnumReservedRange;
function createBaseEnumValueDescriptorProto() {
  return {
    name: "",
    number: 0,
    options: EnumValueOptions.fromPartial({})
  };
}
var EnumValueDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.options = EnumValueOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      number: (0, _helpers.isSet)(object.number) ? Number(object.number) : 0,
      options: (0, _helpers.isSet)(object.options) ? EnumValueOptions.fromJSON(object.options) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name6, _object$number2;
    var message = createBaseEnumValueDescriptorProto();
    message.name = (_object$name6 = object.name) !== null && _object$name6 !== void 0 ? _object$name6 : "";
    message.number = (_object$number2 = object.number) !== null && _object$number2 !== void 0 ? _object$number2 : 0;
    message.options = object.options !== undefined && object.options !== null ? EnumValueOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
exports.EnumValueDescriptorProto = EnumValueDescriptorProto;
function createBaseServiceDescriptorProto() {
  return {
    name: "",
    method: [],
    options: ServiceOptions.fromPartial({})
  };
}
var ServiceDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    var _iterator21 = _createForOfIteratorHelper(message.method),
      _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
        var v = _step21.value;
        MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = ServiceOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      method: Array.isArray(object === null || object === void 0 ? void 0 : object.method) ? object.method.map(function (e) {
        return MethodDescriptorProto.fromJSON(e);
      }) : [],
      options: (0, _helpers.isSet)(object.options) ? ServiceOptions.fromJSON(object.options) : undefined
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name7, _object$method;
    var message = createBaseServiceDescriptorProto();
    message.name = (_object$name7 = object.name) !== null && _object$name7 !== void 0 ? _object$name7 : "";
    message.method = ((_object$method = object.method) === null || _object$method === void 0 ? void 0 : _object$method.map(function (e) {
      return MethodDescriptorProto.fromPartial(e);
    })) || [];
    message.options = object.options !== undefined && object.options !== null ? ServiceOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
exports.ServiceDescriptorProto = ServiceDescriptorProto;
function createBaseMethodDescriptorProto() {
  return {
    name: "",
    input_type: "",
    output_type: "",
    options: MethodOptions.fromPartial({}),
    client_streaming: false,
    server_streaming: false
  };
}
var MethodDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.input_type !== "") {
      writer.uint32(18).string(message.input_type);
    }
    if (message.output_type !== "") {
      writer.uint32(26).string(message.output_type);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.client_streaming === true) {
      writer.uint32(40).bool(message.client_streaming);
    }
    if (message.server_streaming === true) {
      writer.uint32(48).bool(message.server_streaming);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.input_type = reader.string();
          break;
        case 3:
          message.output_type = reader.string();
          break;
        case 4:
          message.options = MethodOptions.decode(reader, reader.uint32());
          break;
        case 5:
          message.client_streaming = reader.bool();
          break;
        case 6:
          message.server_streaming = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      input_type: (0, _helpers.isSet)(object.input_type) ? String(object.input_type) : "",
      output_type: (0, _helpers.isSet)(object.output_type) ? String(object.output_type) : "",
      options: (0, _helpers.isSet)(object.options) ? MethodOptions.fromJSON(object.options) : undefined,
      client_streaming: (0, _helpers.isSet)(object.client_streaming) ? Boolean(object.client_streaming) : false,
      server_streaming: (0, _helpers.isSet)(object.server_streaming) ? Boolean(object.server_streaming) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name8, _object$input_type, _object$output_type, _object$client_stream, _object$server_stream;
    var message = createBaseMethodDescriptorProto();
    message.name = (_object$name8 = object.name) !== null && _object$name8 !== void 0 ? _object$name8 : "";
    message.input_type = (_object$input_type = object.input_type) !== null && _object$input_type !== void 0 ? _object$input_type : "";
    message.output_type = (_object$output_type = object.output_type) !== null && _object$output_type !== void 0 ? _object$output_type : "";
    message.options = object.options !== undefined && object.options !== null ? MethodOptions.fromPartial(object.options) : undefined;
    message.client_streaming = (_object$client_stream = object.client_streaming) !== null && _object$client_stream !== void 0 ? _object$client_stream : false;
    message.server_streaming = (_object$server_stream = object.server_streaming) !== null && _object$server_stream !== void 0 ? _object$server_stream : false;
    return message;
  }
};
exports.MethodDescriptorProto = MethodDescriptorProto;
function createBaseFileOptions() {
  return {
    java_package: "",
    java_outer_classname: "",
    java_multiple_files: false,
    java_generate_equals_and_hash: false,
    java_string_check_utf8: false,
    optimize_for: 1,
    go_package: "",
    cc_generic_services: false,
    java_generic_services: false,
    py_generic_services: false,
    php_generic_services: false,
    deprecated: false,
    cc_enable_arenas: false,
    objc_class_prefix: "",
    csharp_namespace: "",
    swift_prefix: "",
    php_class_prefix: "",
    php_namespace: "",
    php_metadata_namespace: "",
    ruby_package: "",
    uninterpreted_option: []
  };
}
var FileOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.java_package !== "") {
      writer.uint32(10).string(message.java_package);
    }
    if (message.java_outer_classname !== "") {
      writer.uint32(66).string(message.java_outer_classname);
    }
    if (message.java_multiple_files === true) {
      writer.uint32(80).bool(message.java_multiple_files);
    }
    if (message.java_generate_equals_and_hash === true) {
      writer.uint32(160).bool(message.java_generate_equals_and_hash);
    }
    if (message.java_string_check_utf8 === true) {
      writer.uint32(216).bool(message.java_string_check_utf8);
    }
    if (message.optimize_for !== 1) {
      writer.uint32(72).int32(message.optimize_for);
    }
    if (message.go_package !== "") {
      writer.uint32(90).string(message.go_package);
    }
    if (message.cc_generic_services === true) {
      writer.uint32(128).bool(message.cc_generic_services);
    }
    if (message.java_generic_services === true) {
      writer.uint32(136).bool(message.java_generic_services);
    }
    if (message.py_generic_services === true) {
      writer.uint32(144).bool(message.py_generic_services);
    }
    if (message.php_generic_services === true) {
      writer.uint32(336).bool(message.php_generic_services);
    }
    if (message.deprecated === true) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.cc_enable_arenas === true) {
      writer.uint32(248).bool(message.cc_enable_arenas);
    }
    if (message.objc_class_prefix !== "") {
      writer.uint32(290).string(message.objc_class_prefix);
    }
    if (message.csharp_namespace !== "") {
      writer.uint32(298).string(message.csharp_namespace);
    }
    if (message.swift_prefix !== "") {
      writer.uint32(314).string(message.swift_prefix);
    }
    if (message.php_class_prefix !== "") {
      writer.uint32(322).string(message.php_class_prefix);
    }
    if (message.php_namespace !== "") {
      writer.uint32(330).string(message.php_namespace);
    }
    if (message.php_metadata_namespace !== "") {
      writer.uint32(354).string(message.php_metadata_namespace);
    }
    if (message.ruby_package !== "") {
      writer.uint32(362).string(message.ruby_package);
    }
    var _iterator22 = _createForOfIteratorHelper(message.uninterpreted_option),
      _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
        var v = _step22.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFileOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.java_package = reader.string();
          break;
        case 8:
          message.java_outer_classname = reader.string();
          break;
        case 10:
          message.java_multiple_files = reader.bool();
          break;
        case 20:
          message.java_generate_equals_and_hash = reader.bool();
          break;
        case 27:
          message.java_string_check_utf8 = reader.bool();
          break;
        case 9:
          message.optimize_for = reader.int32();
          break;
        case 11:
          message.go_package = reader.string();
          break;
        case 16:
          message.cc_generic_services = reader.bool();
          break;
        case 17:
          message.java_generic_services = reader.bool();
          break;
        case 18:
          message.py_generic_services = reader.bool();
          break;
        case 42:
          message.php_generic_services = reader.bool();
          break;
        case 23:
          message.deprecated = reader.bool();
          break;
        case 31:
          message.cc_enable_arenas = reader.bool();
          break;
        case 36:
          message.objc_class_prefix = reader.string();
          break;
        case 37:
          message.csharp_namespace = reader.string();
          break;
        case 39:
          message.swift_prefix = reader.string();
          break;
        case 40:
          message.php_class_prefix = reader.string();
          break;
        case 41:
          message.php_namespace = reader.string();
          break;
        case 44:
          message.php_metadata_namespace = reader.string();
          break;
        case 45:
          message.ruby_package = reader.string();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      java_package: (0, _helpers.isSet)(object.java_package) ? String(object.java_package) : "",
      java_outer_classname: (0, _helpers.isSet)(object.java_outer_classname) ? String(object.java_outer_classname) : "",
      java_multiple_files: (0, _helpers.isSet)(object.java_multiple_files) ? Boolean(object.java_multiple_files) : false,
      java_generate_equals_and_hash: (0, _helpers.isSet)(object.java_generate_equals_and_hash) ? Boolean(object.java_generate_equals_and_hash) : false,
      java_string_check_utf8: (0, _helpers.isSet)(object.java_string_check_utf8) ? Boolean(object.java_string_check_utf8) : false,
      optimize_for: (0, _helpers.isSet)(object.optimize_for) ? fileOptions_OptimizeModeFromJSON(object.optimize_for) : -1,
      go_package: (0, _helpers.isSet)(object.go_package) ? String(object.go_package) : "",
      cc_generic_services: (0, _helpers.isSet)(object.cc_generic_services) ? Boolean(object.cc_generic_services) : false,
      java_generic_services: (0, _helpers.isSet)(object.java_generic_services) ? Boolean(object.java_generic_services) : false,
      py_generic_services: (0, _helpers.isSet)(object.py_generic_services) ? Boolean(object.py_generic_services) : false,
      php_generic_services: (0, _helpers.isSet)(object.php_generic_services) ? Boolean(object.php_generic_services) : false,
      deprecated: (0, _helpers.isSet)(object.deprecated) ? Boolean(object.deprecated) : false,
      cc_enable_arenas: (0, _helpers.isSet)(object.cc_enable_arenas) ? Boolean(object.cc_enable_arenas) : false,
      objc_class_prefix: (0, _helpers.isSet)(object.objc_class_prefix) ? String(object.objc_class_prefix) : "",
      csharp_namespace: (0, _helpers.isSet)(object.csharp_namespace) ? String(object.csharp_namespace) : "",
      swift_prefix: (0, _helpers.isSet)(object.swift_prefix) ? String(object.swift_prefix) : "",
      php_class_prefix: (0, _helpers.isSet)(object.php_class_prefix) ? String(object.php_class_prefix) : "",
      php_namespace: (0, _helpers.isSet)(object.php_namespace) ? String(object.php_namespace) : "",
      php_metadata_namespace: (0, _helpers.isSet)(object.php_metadata_namespace) ? String(object.php_metadata_namespace) : "",
      ruby_package: (0, _helpers.isSet)(object.ruby_package) ? String(object.ruby_package) : "",
      uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$java_package, _object$java_outer_cl, _object$java_multiple, _object$java_generate, _object$java_string_c, _object$optimize_for, _object$go_package, _object$cc_generic_se, _object$java_generic_, _object$py_generic_se, _object$php_generic_s, _object$deprecated, _object$cc_enable_are, _object$objc_class_pr, _object$csharp_namesp, _object$swift_prefix, _object$php_class_pre, _object$php_namespace, _object$php_metadata_, _object$ruby_package, _object$uninterpreted2;
    var message = createBaseFileOptions();
    message.java_package = (_object$java_package = object.java_package) !== null && _object$java_package !== void 0 ? _object$java_package : "";
    message.java_outer_classname = (_object$java_outer_cl = object.java_outer_classname) !== null && _object$java_outer_cl !== void 0 ? _object$java_outer_cl : "";
    message.java_multiple_files = (_object$java_multiple = object.java_multiple_files) !== null && _object$java_multiple !== void 0 ? _object$java_multiple : false;
    message.java_generate_equals_and_hash = (_object$java_generate = object.java_generate_equals_and_hash) !== null && _object$java_generate !== void 0 ? _object$java_generate : false;
    message.java_string_check_utf8 = (_object$java_string_c = object.java_string_check_utf8) !== null && _object$java_string_c !== void 0 ? _object$java_string_c : false;
    message.optimize_for = (_object$optimize_for = object.optimize_for) !== null && _object$optimize_for !== void 0 ? _object$optimize_for : 1;
    message.go_package = (_object$go_package = object.go_package) !== null && _object$go_package !== void 0 ? _object$go_package : "";
    message.cc_generic_services = (_object$cc_generic_se = object.cc_generic_services) !== null && _object$cc_generic_se !== void 0 ? _object$cc_generic_se : false;
    message.java_generic_services = (_object$java_generic_ = object.java_generic_services) !== null && _object$java_generic_ !== void 0 ? _object$java_generic_ : false;
    message.py_generic_services = (_object$py_generic_se = object.py_generic_services) !== null && _object$py_generic_se !== void 0 ? _object$py_generic_se : false;
    message.php_generic_services = (_object$php_generic_s = object.php_generic_services) !== null && _object$php_generic_s !== void 0 ? _object$php_generic_s : false;
    message.deprecated = (_object$deprecated = object.deprecated) !== null && _object$deprecated !== void 0 ? _object$deprecated : false;
    message.cc_enable_arenas = (_object$cc_enable_are = object.cc_enable_arenas) !== null && _object$cc_enable_are !== void 0 ? _object$cc_enable_are : false;
    message.objc_class_prefix = (_object$objc_class_pr = object.objc_class_prefix) !== null && _object$objc_class_pr !== void 0 ? _object$objc_class_pr : "";
    message.csharp_namespace = (_object$csharp_namesp = object.csharp_namespace) !== null && _object$csharp_namesp !== void 0 ? _object$csharp_namesp : "";
    message.swift_prefix = (_object$swift_prefix = object.swift_prefix) !== null && _object$swift_prefix !== void 0 ? _object$swift_prefix : "";
    message.php_class_prefix = (_object$php_class_pre = object.php_class_prefix) !== null && _object$php_class_pre !== void 0 ? _object$php_class_pre : "";
    message.php_namespace = (_object$php_namespace = object.php_namespace) !== null && _object$php_namespace !== void 0 ? _object$php_namespace : "";
    message.php_metadata_namespace = (_object$php_metadata_ = object.php_metadata_namespace) !== null && _object$php_metadata_ !== void 0 ? _object$php_metadata_ : "";
    message.ruby_package = (_object$ruby_package = object.ruby_package) !== null && _object$ruby_package !== void 0 ? _object$ruby_package : "";
    message.uninterpreted_option = ((_object$uninterpreted2 = object.uninterpreted_option) === null || _object$uninterpreted2 === void 0 ? void 0 : _object$uninterpreted2.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.FileOptions = FileOptions;
function createBaseMessageOptions() {
  return {
    message_set_wire_format: false,
    no_standard_descriptor_accessor: false,
    deprecated: false,
    map_entry: false,
    uninterpreted_option: []
  };
}
var MessageOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.message_set_wire_format === true) {
      writer.uint32(8).bool(message.message_set_wire_format);
    }
    if (message.no_standard_descriptor_accessor === true) {
      writer.uint32(16).bool(message.no_standard_descriptor_accessor);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.map_entry === true) {
      writer.uint32(56).bool(message.map_entry);
    }
    var _iterator23 = _createForOfIteratorHelper(message.uninterpreted_option),
      _step23;
    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
        var v = _step23.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMessageOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message_set_wire_format = reader.bool();
          break;
        case 2:
          message.no_standard_descriptor_accessor = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 7:
          message.map_entry = reader.bool();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      message_set_wire_format: (0, _helpers.isSet)(object.message_set_wire_format) ? Boolean(object.message_set_wire_format) : false,
      no_standard_descriptor_accessor: (0, _helpers.isSet)(object.no_standard_descriptor_accessor) ? Boolean(object.no_standard_descriptor_accessor) : false,
      deprecated: (0, _helpers.isSet)(object.deprecated) ? Boolean(object.deprecated) : false,
      map_entry: (0, _helpers.isSet)(object.map_entry) ? Boolean(object.map_entry) : false,
      uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$message_set_w, _object$no_standard_d, _object$deprecated2, _object$map_entry, _object$uninterpreted3;
    var message = createBaseMessageOptions();
    message.message_set_wire_format = (_object$message_set_w = object.message_set_wire_format) !== null && _object$message_set_w !== void 0 ? _object$message_set_w : false;
    message.no_standard_descriptor_accessor = (_object$no_standard_d = object.no_standard_descriptor_accessor) !== null && _object$no_standard_d !== void 0 ? _object$no_standard_d : false;
    message.deprecated = (_object$deprecated2 = object.deprecated) !== null && _object$deprecated2 !== void 0 ? _object$deprecated2 : false;
    message.map_entry = (_object$map_entry = object.map_entry) !== null && _object$map_entry !== void 0 ? _object$map_entry : false;
    message.uninterpreted_option = ((_object$uninterpreted3 = object.uninterpreted_option) === null || _object$uninterpreted3 === void 0 ? void 0 : _object$uninterpreted3.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MessageOptions = MessageOptions;
function createBaseFieldOptions() {
  return {
    ctype: 1,
    packed: false,
    jstype: 1,
    lazy: false,
    deprecated: false,
    weak: false,
    uninterpreted_option: []
  };
}
var FieldOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.ctype !== 1) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed === true) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== 1) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy === true) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak === true) {
      writer.uint32(80).bool(message.weak);
    }
    var _iterator24 = _createForOfIteratorHelper(message.uninterpreted_option),
      _step24;
    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
        var v = _step24.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFieldOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctype = reader.int32();
          break;
        case 2:
          message.packed = reader.bool();
          break;
        case 6:
          message.jstype = reader.int32();
          break;
        case 5:
          message.lazy = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 10:
          message.weak = reader.bool();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      ctype: (0, _helpers.isSet)(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : -1,
      packed: (0, _helpers.isSet)(object.packed) ? Boolean(object.packed) : false,
      jstype: (0, _helpers.isSet)(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : -1,
      lazy: (0, _helpers.isSet)(object.lazy) ? Boolean(object.lazy) : false,
      deprecated: (0, _helpers.isSet)(object.deprecated) ? Boolean(object.deprecated) : false,
      weak: (0, _helpers.isSet)(object.weak) ? Boolean(object.weak) : false,
      uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$ctype, _object$packed, _object$jstype, _object$lazy, _object$deprecated3, _object$weak, _object$uninterpreted4;
    var message = createBaseFieldOptions();
    message.ctype = (_object$ctype = object.ctype) !== null && _object$ctype !== void 0 ? _object$ctype : 1;
    message.packed = (_object$packed = object.packed) !== null && _object$packed !== void 0 ? _object$packed : false;
    message.jstype = (_object$jstype = object.jstype) !== null && _object$jstype !== void 0 ? _object$jstype : 1;
    message.lazy = (_object$lazy = object.lazy) !== null && _object$lazy !== void 0 ? _object$lazy : false;
    message.deprecated = (_object$deprecated3 = object.deprecated) !== null && _object$deprecated3 !== void 0 ? _object$deprecated3 : false;
    message.weak = (_object$weak = object.weak) !== null && _object$weak !== void 0 ? _object$weak : false;
    message.uninterpreted_option = ((_object$uninterpreted4 = object.uninterpreted_option) === null || _object$uninterpreted4 === void 0 ? void 0 : _object$uninterpreted4.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.FieldOptions = FieldOptions;
function createBaseOneofOptions() {
  return {
    uninterpreted_option: []
  };
}
var OneofOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator25 = _createForOfIteratorHelper(message.uninterpreted_option),
      _step25;
    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
        var v = _step25.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseOneofOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$uninterpreted5;
    var message = createBaseOneofOptions();
    message.uninterpreted_option = ((_object$uninterpreted5 = object.uninterpreted_option) === null || _object$uninterpreted5 === void 0 ? void 0 : _object$uninterpreted5.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.OneofOptions = OneofOptions;
function createBaseEnumOptions() {
  return {
    allow_alias: false,
    deprecated: false,
    uninterpreted_option: []
  };
}
var EnumOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.allow_alias === true) {
      writer.uint32(16).bool(message.allow_alias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    var _iterator26 = _createForOfIteratorHelper(message.uninterpreted_option),
      _step26;
    try {
      for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
        var v = _step26.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator26.e(err);
    } finally {
      _iterator26.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.allow_alias = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      allow_alias: (0, _helpers.isSet)(object.allow_alias) ? Boolean(object.allow_alias) : false,
      deprecated: (0, _helpers.isSet)(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$allow_alias, _object$deprecated4, _object$uninterpreted6;
    var message = createBaseEnumOptions();
    message.allow_alias = (_object$allow_alias = object.allow_alias) !== null && _object$allow_alias !== void 0 ? _object$allow_alias : false;
    message.deprecated = (_object$deprecated4 = object.deprecated) !== null && _object$deprecated4 !== void 0 ? _object$deprecated4 : false;
    message.uninterpreted_option = ((_object$uninterpreted6 = object.uninterpreted_option) === null || _object$uninterpreted6 === void 0 ? void 0 : _object$uninterpreted6.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.EnumOptions = EnumOptions;
function createBaseEnumValueOptions() {
  return {
    deprecated: false,
    uninterpreted_option: []
  };
}
var EnumValueOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    var _iterator27 = _createForOfIteratorHelper(message.uninterpreted_option),
      _step27;
    try {
      for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
        var v = _step27.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator27.e(err);
    } finally {
      _iterator27.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      deprecated: (0, _helpers.isSet)(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$deprecated5, _object$uninterpreted7;
    var message = createBaseEnumValueOptions();
    message.deprecated = (_object$deprecated5 = object.deprecated) !== null && _object$deprecated5 !== void 0 ? _object$deprecated5 : false;
    message.uninterpreted_option = ((_object$uninterpreted7 = object.uninterpreted_option) === null || _object$uninterpreted7 === void 0 ? void 0 : _object$uninterpreted7.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.EnumValueOptions = EnumValueOptions;
function createBaseServiceOptions() {
  return {
    deprecated: false,
    uninterpreted_option: []
  };
}
var ServiceOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    var _iterator28 = _createForOfIteratorHelper(message.uninterpreted_option),
      _step28;
    try {
      for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
        var v = _step28.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator28.e(err);
    } finally {
      _iterator28.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseServiceOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      deprecated: (0, _helpers.isSet)(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$deprecated6, _object$uninterpreted8;
    var message = createBaseServiceOptions();
    message.deprecated = (_object$deprecated6 = object.deprecated) !== null && _object$deprecated6 !== void 0 ? _object$deprecated6 : false;
    message.uninterpreted_option = ((_object$uninterpreted8 = object.uninterpreted_option) === null || _object$uninterpreted8 === void 0 ? void 0 : _object$uninterpreted8.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ServiceOptions = ServiceOptions;
function createBaseMethodOptions() {
  return {
    deprecated: false,
    idempotency_level: 1,
    uninterpreted_option: []
  };
}
var MethodOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotency_level !== 1) {
      writer.uint32(272).int32(message.idempotency_level);
    }
    var _iterator29 = _createForOfIteratorHelper(message.uninterpreted_option),
      _step29;
    try {
      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
        var v = _step29.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator29.e(err);
    } finally {
      _iterator29.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMethodOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 34:
          message.idempotency_level = reader.int32();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      deprecated: (0, _helpers.isSet)(object.deprecated) ? Boolean(object.deprecated) : false,
      idempotency_level: (0, _helpers.isSet)(object.idempotency_level) ? methodOptions_IdempotencyLevelFromJSON(object.idempotency_level) : -1,
      uninterpreted_option: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$deprecated7, _object$idempotency_l, _object$uninterpreted9;
    var message = createBaseMethodOptions();
    message.deprecated = (_object$deprecated7 = object.deprecated) !== null && _object$deprecated7 !== void 0 ? _object$deprecated7 : false;
    message.idempotency_level = (_object$idempotency_l = object.idempotency_level) !== null && _object$idempotency_l !== void 0 ? _object$idempotency_l : 1;
    message.uninterpreted_option = ((_object$uninterpreted9 = object.uninterpreted_option) === null || _object$uninterpreted9 === void 0 ? void 0 : _object$uninterpreted9.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MethodOptions = MethodOptions;
function createBaseUninterpretedOption() {
  return {
    name: [],
    identifier_value: "",
    positive_int_value: _helpers.Long.UZERO,
    negative_int_value: _helpers.Long.ZERO,
    double_value: 0,
    string_value: new Uint8Array(),
    aggregate_value: ""
  };
}
var UninterpretedOption = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator30 = _createForOfIteratorHelper(message.name),
      _step30;
    try {
      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
        var v = _step30.value;
        UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator30.e(err);
    } finally {
      _iterator30.f();
    }
    if (message.identifier_value !== "") {
      writer.uint32(26).string(message.identifier_value);
    }
    if (!message.positive_int_value.isZero()) {
      writer.uint32(32).uint64(message.positive_int_value);
    }
    if (!message.negative_int_value.isZero()) {
      writer.uint32(40).int64(message.negative_int_value);
    }
    if (message.double_value !== 0) {
      writer.uint32(49)["double"](message.double_value);
    }
    if (message.string_value.length !== 0) {
      writer.uint32(58).bytes(message.string_value);
    }
    if (message.aggregate_value !== "") {
      writer.uint32(66).string(message.aggregate_value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          break;
        case 3:
          message.identifier_value = reader.string();
          break;
        case 4:
          message.positive_int_value = reader.uint64();
          break;
        case 5:
          message.negative_int_value = reader.int64();
          break;
        case 6:
          message.double_value = reader["double"]();
          break;
        case 7:
          message.string_value = reader.bytes();
          break;
        case 8:
          message.aggregate_value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      name: Array.isArray(object === null || object === void 0 ? void 0 : object.name) ? object.name.map(function (e) {
        return UninterpretedOption_NamePart.fromJSON(e);
      }) : [],
      identifier_value: (0, _helpers.isSet)(object.identifier_value) ? String(object.identifier_value) : "",
      positive_int_value: (0, _helpers.isSet)(object.positive_int_value) ? _helpers.Long.fromValue(object.positive_int_value) : _helpers.Long.UZERO,
      negative_int_value: (0, _helpers.isSet)(object.negative_int_value) ? _helpers.Long.fromValue(object.negative_int_value) : _helpers.Long.ZERO,
      double_value: (0, _helpers.isSet)(object.double_value) ? Number(object.double_value) : 0,
      string_value: (0, _helpers.isSet)(object.string_value) ? (0, _helpers.bytesFromBase64)(object.string_value) : new Uint8Array(),
      aggregate_value: (0, _helpers.isSet)(object.aggregate_value) ? String(object.aggregate_value) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name9, _object$identifier_va, _object$double_value, _object$string_value, _object$aggregate_val;
    var message = createBaseUninterpretedOption();
    message.name = ((_object$name9 = object.name) === null || _object$name9 === void 0 ? void 0 : _object$name9.map(function (e) {
      return UninterpretedOption_NamePart.fromPartial(e);
    })) || [];
    message.identifier_value = (_object$identifier_va = object.identifier_value) !== null && _object$identifier_va !== void 0 ? _object$identifier_va : "";
    message.positive_int_value = object.positive_int_value !== undefined && object.positive_int_value !== null ? _helpers.Long.fromValue(object.positive_int_value) : _helpers.Long.UZERO;
    message.negative_int_value = object.negative_int_value !== undefined && object.negative_int_value !== null ? _helpers.Long.fromValue(object.negative_int_value) : _helpers.Long.ZERO;
    message.double_value = (_object$double_value = object.double_value) !== null && _object$double_value !== void 0 ? _object$double_value : 0;
    message.string_value = (_object$string_value = object.string_value) !== null && _object$string_value !== void 0 ? _object$string_value : new Uint8Array();
    message.aggregate_value = (_object$aggregate_val = object.aggregate_value) !== null && _object$aggregate_val !== void 0 ? _object$aggregate_val : "";
    return message;
  }
};
exports.UninterpretedOption = UninterpretedOption;
function createBaseUninterpretedOption_NamePart() {
  return {
    name_part: "",
    is_extension: false
  };
}
var UninterpretedOption_NamePart = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name_part !== "") {
      writer.uint32(10).string(message.name_part);
    }
    if (message.is_extension === true) {
      writer.uint32(16).bool(message.is_extension);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name_part = reader.string();
          break;
        case 2:
          message.is_extension = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      name_part: (0, _helpers.isSet)(object.name_part) ? String(object.name_part) : "",
      is_extension: (0, _helpers.isSet)(object.is_extension) ? Boolean(object.is_extension) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$name_part, _object$is_extension;
    var message = createBaseUninterpretedOption_NamePart();
    message.name_part = (_object$name_part = object.name_part) !== null && _object$name_part !== void 0 ? _object$name_part : "";
    message.is_extension = (_object$is_extension = object.is_extension) !== null && _object$is_extension !== void 0 ? _object$is_extension : false;
    return message;
  }
};
exports.UninterpretedOption_NamePart = UninterpretedOption_NamePart;
function createBaseSourceCodeInfo() {
  return {
    location: []
  };
}
var SourceCodeInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator31 = _createForOfIteratorHelper(message.location),
      _step31;
    try {
      for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
        var v = _step31.value;
        SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator31.e(err);
    } finally {
      _iterator31.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      location: Array.isArray(object === null || object === void 0 ? void 0 : object.location) ? object.location.map(function (e) {
        return SourceCodeInfo_Location.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$location;
    var message = createBaseSourceCodeInfo();
    message.location = ((_object$location = object.location) === null || _object$location === void 0 ? void 0 : _object$location.map(function (e) {
      return SourceCodeInfo_Location.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.SourceCodeInfo = SourceCodeInfo;
function createBaseSourceCodeInfo_Location() {
  return {
    path: [],
    span: [],
    leading_comments: "",
    trailing_comments: "",
    leading_detached_comments: []
  };
}
var SourceCodeInfo_Location = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();
    var _iterator32 = _createForOfIteratorHelper(message.path),
      _step32;
    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var v = _step32.value;
        writer.int32(v);
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }
    writer.ldelim();
    writer.uint32(18).fork();
    var _iterator33 = _createForOfIteratorHelper(message.span),
      _step33;
    try {
      for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
        var _v16 = _step33.value;
        writer.int32(_v16);
      }
    } catch (err) {
      _iterator33.e(err);
    } finally {
      _iterator33.f();
    }
    writer.ldelim();
    if (message.leading_comments !== "") {
      writer.uint32(26).string(message.leading_comments);
    }
    if (message.trailing_comments !== "") {
      writer.uint32(34).string(message.trailing_comments);
    }
    var _iterator34 = _createForOfIteratorHelper(message.leading_detached_comments),
      _step34;
    try {
      for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
        var _v17 = _step34.value;
        writer.uint32(50).string(_v17);
      }
    } catch (err) {
      _iterator34.e(err);
    } finally {
      _iterator34.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            var _end2 = reader.uint32() + reader.pos;
            while (reader.pos < _end2) {
              message.span.push(reader.int32());
            }
          } else {
            message.span.push(reader.int32());
          }
          break;
        case 3:
          message.leading_comments = reader.string();
          break;
        case 4:
          message.trailing_comments = reader.string();
          break;
        case 6:
          message.leading_detached_comments.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(function (e) {
        return Number(e);
      }) : [],
      span: Array.isArray(object === null || object === void 0 ? void 0 : object.span) ? object.span.map(function (e) {
        return Number(e);
      }) : [],
      leading_comments: (0, _helpers.isSet)(object.leading_comments) ? String(object.leading_comments) : "",
      trailing_comments: (0, _helpers.isSet)(object.trailing_comments) ? String(object.trailing_comments) : "",
      leading_detached_comments: Array.isArray(object === null || object === void 0 ? void 0 : object.leading_detached_comments) ? object.leading_detached_comments.map(function (e) {
        return String(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$path, _object$span, _object$leading_comme, _object$trailing_comm, _object$leading_detac;
    var message = createBaseSourceCodeInfo_Location();
    message.path = ((_object$path = object.path) === null || _object$path === void 0 ? void 0 : _object$path.map(function (e) {
      return e;
    })) || [];
    message.span = ((_object$span = object.span) === null || _object$span === void 0 ? void 0 : _object$span.map(function (e) {
      return e;
    })) || [];
    message.leading_comments = (_object$leading_comme = object.leading_comments) !== null && _object$leading_comme !== void 0 ? _object$leading_comme : "";
    message.trailing_comments = (_object$trailing_comm = object.trailing_comments) !== null && _object$trailing_comm !== void 0 ? _object$trailing_comm : "";
    message.leading_detached_comments = ((_object$leading_detac = object.leading_detached_comments) === null || _object$leading_detac === void 0 ? void 0 : _object$leading_detac.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.SourceCodeInfo_Location = SourceCodeInfo_Location;
function createBaseGeneratedCodeInfo() {
  return {
    annotation: []
  };
}
var GeneratedCodeInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator35 = _createForOfIteratorHelper(message.annotation),
      _step35;
    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
        var v = _step35.value;
        GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      annotation: Array.isArray(object === null || object === void 0 ? void 0 : object.annotation) ? object.annotation.map(function (e) {
        return GeneratedCodeInfo_Annotation.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$annotation;
    var message = createBaseGeneratedCodeInfo();
    message.annotation = ((_object$annotation = object.annotation) === null || _object$annotation === void 0 ? void 0 : _object$annotation.map(function (e) {
      return GeneratedCodeInfo_Annotation.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GeneratedCodeInfo = GeneratedCodeInfo;
function createBaseGeneratedCodeInfo_Annotation() {
  return {
    path: [],
    source_file: "",
    begin: 0,
    end: 0
  };
}
var GeneratedCodeInfo_Annotation = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();
    var _iterator36 = _createForOfIteratorHelper(message.path),
      _step36;
    try {
      for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
        var v = _step36.value;
        writer.int32(v);
      }
    } catch (err) {
      _iterator36.e(err);
    } finally {
      _iterator36.f();
    }
    writer.ldelim();
    if (message.source_file !== "") {
      writer.uint32(18).string(message.source_file);
    }
    if (message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          message.source_file = reader.string();
          break;
        case 3:
          message.begin = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(function (e) {
        return Number(e);
      }) : [],
      source_file: (0, _helpers.isSet)(object.source_file) ? String(object.source_file) : "",
      begin: (0, _helpers.isSet)(object.begin) ? Number(object.begin) : 0,
      end: (0, _helpers.isSet)(object.end) ? Number(object.end) : 0
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$path2, _object$source_file, _object$begin, _object$end4;
    var message = createBaseGeneratedCodeInfo_Annotation();
    message.path = ((_object$path2 = object.path) === null || _object$path2 === void 0 ? void 0 : _object$path2.map(function (e) {
      return e;
    })) || [];
    message.source_file = (_object$source_file = object.source_file) !== null && _object$source_file !== void 0 ? _object$source_file : "";
    message.begin = (_object$begin = object.begin) !== null && _object$begin !== void 0 ? _object$begin : 0;
    message.end = (_object$end4 = object.end) !== null && _object$end4 !== void 0 ? _object$end4 : 0;
    return message;
  }
};
exports.GeneratedCodeInfo_Annotation = GeneratedCodeInfo_Annotation;