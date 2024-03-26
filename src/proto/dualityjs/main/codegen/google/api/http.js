"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpRule = exports.Http = exports.CustomHttpPattern = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Defines the HTTP configuration for an API service. It contains a list of
 * [HttpRule][google.api.HttpRule], each specifying the mapping of an RPC method
 * to one or more HTTP REST API methods.
 */

/**
 * # gRPC Transcoding
 * 
 * gRPC Transcoding is a feature for mapping between a gRPC method and one or
 * more HTTP REST endpoints. It allows developers to build a single API service
 * that supports both gRPC APIs and REST APIs. Many systems, including [Google
 * APIs](https://github.com/googleapis/googleapis),
 * [Cloud Endpoints](https://cloud.google.com/endpoints), [gRPC
 * Gateway](https://github.com/grpc-ecosystem/grpc-gateway),
 * and [Envoy](https://github.com/envoyproxy/envoy) proxy support this feature
 * and use it for large scale production services.
 * 
 * `HttpRule` defines the schema of the gRPC/REST mapping. The mapping specifies
 * how different portions of the gRPC request message are mapped to the URL
 * path, URL query parameters, and HTTP request body. It also controls how the
 * gRPC response message is mapped to the HTTP response body. `HttpRule` is
 * typically specified as an `google.api.http` annotation on the gRPC method.
 * 
 * Each mapping specifies a URL path template and an HTTP method. The path
 * template may refer to one or more fields in the gRPC request message, as long
 * as each field is a non-repeated field with a primitive (non-message) type.
 * The path template controls how fields of the request message are mapped to
 * the URL path.
 * 
 * Example:
 * 
 *     service Messaging {
 *       rpc GetMessage(GetMessageRequest) returns (Message) {
 *         option (google.api.http) = {
 *             get: "/v1/{name=messages/*}"
 *         };
 *       }
 *     }
 *     message GetMessageRequest {
 *       string name = 1; // Mapped to URL path.
 *     }
 *     message Message {
 *       string text = 1; // The resource content.
 *     }
 * 
 * This enables an HTTP REST to gRPC mapping as below:
 * 
 * HTTP | gRPC
 * -----|-----
 * `GET /v1/messages/123456`  | `GetMessage(name: "messages/123456")`
 * 
 * Any fields in the request message which are not bound by the path template
 * automatically become HTTP query parameters if there is no HTTP request body.
 * For example:
 * 
 *     service Messaging {
 *       rpc GetMessage(GetMessageRequest) returns (Message) {
 *         option (google.api.http) = {
 *             get:"/v1/messages/{message_id}"
 *         };
 *       }
 *     }
 *     message GetMessageRequest {
 *       message SubMessage {
 *         string subfield = 1;
 *       }
 *       string message_id = 1; // Mapped to URL path.
 *       int64 revision = 2;    // Mapped to URL query parameter `revision`.
 *       SubMessage sub = 3;    // Mapped to URL query parameter `sub.subfield`.
 *     }
 * 
 * This enables a HTTP JSON to RPC mapping as below:
 * 
 * HTTP | gRPC
 * -----|-----
 * `GET /v1/messages/123456?revision=2&sub.subfield=foo` |
 * `GetMessage(message_id: "123456" revision: 2 sub: SubMessage(subfield:
 * "foo"))`
 * 
 * Note that fields which are mapped to URL query parameters must have a
 * primitive type or a repeated primitive type or a non-repeated message type.
 * In the case of a repeated type, the parameter can be repeated in the URL
 * as `...?param=A&param=B`. In the case of a message type, each field of the
 * message is mapped to a separate parameter, such as
 * `...?foo.a=A&foo.b=B&foo.c=C`.
 * 
 * For HTTP methods that allow a request body, the `body` field
 * specifies the mapping. Consider a REST update method on the
 * message resource collection:
 * 
 *     service Messaging {
 *       rpc UpdateMessage(UpdateMessageRequest) returns (Message) {
 *         option (google.api.http) = {
 *           patch: "/v1/messages/{message_id}"
 *           body: "message"
 *         };
 *       }
 *     }
 *     message UpdateMessageRequest {
 *       string message_id = 1; // mapped to the URL
 *       Message message = 2;   // mapped to the body
 *     }
 * 
 * The following HTTP JSON to RPC mapping is enabled, where the
 * representation of the JSON in the request body is determined by
 * protos JSON encoding:
 * 
 * HTTP | gRPC
 * -----|-----
 * `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id:
 * "123456" message { text: "Hi!" })`
 * 
 * The special name `*` can be used in the body mapping to define that
 * every field not bound by the path template should be mapped to the
 * request body.  This enables the following alternative definition of
 * the update method:
 * 
 *     service Messaging {
 *       rpc UpdateMessage(Message) returns (Message) {
 *         option (google.api.http) = {
 *           patch: "/v1/messages/{message_id}"
 *           body: "*"
 *         };
 *       }
 *     }
 *     message Message {
 *       string message_id = 1;
 *       string text = 2;
 *     }
 * 
 * 
 * The following HTTP JSON to RPC mapping is enabled:
 * 
 * HTTP | gRPC
 * -----|-----
 * `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id:
 * "123456" text: "Hi!")`
 * 
 * Note that when using `*` in the body mapping, it is not possible to
 * have HTTP parameters, as all fields not bound by the path end in
 * the body. This makes this option more rarely used in practice when
 * defining REST APIs. The common usage of `*` is in custom methods
 * which don't use the URL at all for transferring data.
 * 
 * It is possible to define multiple HTTP methods for one RPC by using
 * the `additional_bindings` option. Example:
 * 
 *     service Messaging {
 *       rpc GetMessage(GetMessageRequest) returns (Message) {
 *         option (google.api.http) = {
 *           get: "/v1/messages/{message_id}"
 *           additional_bindings {
 *             get: "/v1/users/{user_id}/messages/{message_id}"
 *           }
 *         };
 *       }
 *     }
 *     message GetMessageRequest {
 *       string message_id = 1;
 *       string user_id = 2;
 *     }
 * 
 * This enables the following two alternative HTTP JSON to RPC mappings:
 * 
 * HTTP | gRPC
 * -----|-----
 * `GET /v1/messages/123456` | `GetMessage(message_id: "123456")`
 * `GET /v1/users/me/messages/123456` | `GetMessage(user_id: "me" message_id:
 * "123456")`
 * 
 * ## Rules for HTTP mapping
 * 
 * 1. Leaf request fields (recursive expansion nested messages in the request
 *    message) are classified into three categories:
 *    - Fields referred by the path template. They are passed via the URL path.
 *    - Fields referred by the [HttpRule.body][google.api.HttpRule.body]. They
 *    are passed via the HTTP
 *      request body.
 *    - All other fields are passed via the URL query parameters, and the
 *      parameter name is the field path in the request message. A repeated
 *      field can be represented as multiple query parameters under the same
 *      name.
 *  2. If [HttpRule.body][google.api.HttpRule.body] is "*", there is no URL
 *  query parameter, all fields
 *     are passed via URL path and HTTP request body.
 *  3. If [HttpRule.body][google.api.HttpRule.body] is omitted, there is no HTTP
 *  request body, all
 *     fields are passed via URL path and URL query parameters.
 * 
 * ### Path template syntax
 * 
 *     Template = "/" Segments [ Verb ] ;
 *     Segments = Segment { "/" Segment } ;
 *     Segment  = "*" | "**" | LITERAL | Variable ;
 *     Variable = "{" FieldPath [ "=" Segments ] "}" ;
 *     FieldPath = IDENT { "." IDENT } ;
 *     Verb     = ":" LITERAL ;
 * 
 * The syntax `*` matches a single URL path segment. The syntax `**` matches
 * zero or more URL path segments, which must be the last part of the URL path
 * except the `Verb`.
 * 
 * The syntax `Variable` matches part of the URL path as specified by its
 * template. A variable template must not contain other variables. If a variable
 * matches a single path segment, its template may be omitted, e.g. `{var}`
 * is equivalent to `{var=*}`.
 * 
 * The syntax `LITERAL` matches literal text in the URL path. If the `LITERAL`
 * contains any reserved character, such characters should be percent-encoded
 * before the matching.
 * 
 * If a variable contains exactly one path segment, such as `"{var}"` or
 * `"{var=*}"`, when such a variable is expanded into a URL path on the client
 * side, all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. The
 * server side does the reverse decoding. Such variables show up in the
 * [Discovery
 * Document](https://developers.google.com/discovery/v1/reference/apis) as
 * `{var}`.
 * 
 * If a variable contains multiple path segments, such as `"{var=foo/*}"`
 * or `"{var=**}"`, when such a variable is expanded into a URL path on the
 * client side, all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded.
 * The server side does the reverse decoding, except "%2F" and "%2f" are left
 * unchanged. Such variables show up in the
 * [Discovery
 * Document](https://developers.google.com/discovery/v1/reference/apis) as
 * `{+var}`.
 * 
 * ## Using gRPC API Service Configuration
 * 
 * gRPC API Service Configuration (service config) is a configuration language
 * for configuring a gRPC service to become a user-facing product. The
 * service config is simply the YAML representation of the `google.api.Service`
 * proto message.
 * 
 * As an alternative to annotating your proto file, you can configure gRPC
 * transcoding in your service config YAML files. You do this by specifying a
 * `HttpRule` that maps the gRPC method to a REST endpoint, achieving the same
 * effect as the proto annotation. This can be particularly useful if you
 * have a proto that is reused in multiple services. Note that any transcoding
 * specified in the service config will override any matching transcoding
 * configuration in the proto.
 * 
 * Example:
 * 
 *     http:
 *       rules:
 *         # Selects a gRPC method and applies HttpRule to it.
 *         - selector: example.v1.Messaging.GetMessage
 *           get: /v1/messages/{message_id}/{sub.subfield}
 * 
 * ## Special notes
 * 
 * When gRPC Transcoding is used to map a gRPC to JSON REST endpoints, the
 * proto to JSON conversion must follow the [proto3
 * specification](https://developers.google.com/protocol-buffers/docs/proto3#json).
 * 
 * While the single segment variable follows the semantics of
 * [RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String
 * Expansion, the multi segment variable **does not** follow RFC 6570 Section
 * 3.2.3 Reserved Expansion. The reason is that the Reserved Expansion
 * does not expand special characters like `?` and `#`, which would lead
 * to invalid URLs. As the result, gRPC Transcoding uses a custom encoding
 * for multi segment variables.
 * 
 * The path variables **must not** refer to any repeated or mapped field,
 * because client libraries are not capable of handling such variable expansion.
 * 
 * The path variables **must not** capture the leading "/" character. The reason
 * is that the most common use case "{var}" does not capture the leading "/"
 * character. For consistency, all path variables must share the same behavior.
 * 
 * Repeated message fields must not be mapped to URL query parameters, because
 * no client library can support such complicated mapping.
 * 
 * If an API needs to use a JSON array for request or response body, it can map
 * the request or response body to a repeated field. However, some gRPC
 * Transcoding implementations may not support this feature.
 */

/** A custom pattern is used for defining custom HTTP verb. */

function createBaseHttp() {
  return {
    rules: [],
    fully_decode_reserved_expansion: false
  };
}
var Http = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.rules),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.fully_decode_reserved_expansion === true) {
      writer.uint32(16).bool(message.fully_decode_reserved_expansion);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHttp();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(HttpRule.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fully_decode_reserved_expansion = reader.bool();
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
      rules: Array.isArray(object === null || object === void 0 ? void 0 : object.rules) ? object.rules.map(function (e) {
        return HttpRule.fromJSON(e);
      }) : [],
      fully_decode_reserved_expansion: (0, _helpers.isSet)(object.fully_decode_reserved_expansion) ? Boolean(object.fully_decode_reserved_expansion) : false
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$rules, _object$fully_decode_;
    var message = createBaseHttp();
    message.rules = ((_object$rules = object.rules) === null || _object$rules === void 0 ? void 0 : _object$rules.map(function (e) {
      return HttpRule.fromPartial(e);
    })) || [];
    message.fully_decode_reserved_expansion = (_object$fully_decode_ = object.fully_decode_reserved_expansion) !== null && _object$fully_decode_ !== void 0 ? _object$fully_decode_ : false;
    return message;
  }
};
exports.Http = Http;
function createBaseHttpRule() {
  return {
    selector: "",
    get: undefined,
    put: undefined,
    post: undefined,
    "delete": undefined,
    patch: undefined,
    custom: undefined,
    body: "",
    response_body: "",
    additional_bindings: []
  };
}
var HttpRule = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.get !== undefined) {
      writer.uint32(18).string(message.get);
    }
    if (message.put !== undefined) {
      writer.uint32(26).string(message.put);
    }
    if (message.post !== undefined) {
      writer.uint32(34).string(message.post);
    }
    if (message["delete"] !== undefined) {
      writer.uint32(42).string(message["delete"]);
    }
    if (message.patch !== undefined) {
      writer.uint32(50).string(message.patch);
    }
    if (message.custom !== undefined) {
      CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
    }
    if (message.body !== "") {
      writer.uint32(58).string(message.body);
    }
    if (message.response_body !== "") {
      writer.uint32(98).string(message.response_body);
    }
    var _iterator2 = _createForOfIteratorHelper(message.additional_bindings),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHttpRule();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.get = reader.string();
          break;
        case 3:
          message.put = reader.string();
          break;
        case 4:
          message.post = reader.string();
          break;
        case 5:
          message["delete"] = reader.string();
          break;
        case 6:
          message.patch = reader.string();
          break;
        case 8:
          message.custom = CustomHttpPattern.decode(reader, reader.uint32());
          break;
        case 7:
          message.body = reader.string();
          break;
        case 12:
          message.response_body = reader.string();
          break;
        case 11:
          message.additional_bindings.push(HttpRule.decode(reader, reader.uint32()));
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
      selector: (0, _helpers.isSet)(object.selector) ? String(object.selector) : "",
      get: (0, _helpers.isSet)(object.get) ? String(object.get) : undefined,
      put: (0, _helpers.isSet)(object.put) ? String(object.put) : undefined,
      post: (0, _helpers.isSet)(object.post) ? String(object.post) : undefined,
      "delete": (0, _helpers.isSet)(object["delete"]) ? String(object["delete"]) : undefined,
      patch: (0, _helpers.isSet)(object.patch) ? String(object.patch) : undefined,
      custom: (0, _helpers.isSet)(object.custom) ? CustomHttpPattern.fromJSON(object.custom) : undefined,
      body: (0, _helpers.isSet)(object.body) ? String(object.body) : "",
      response_body: (0, _helpers.isSet)(object.response_body) ? String(object.response_body) : "",
      additional_bindings: Array.isArray(object === null || object === void 0 ? void 0 : object.additional_bindings) ? object.additional_bindings.map(function (e) {
        return HttpRule.fromJSON(e);
      }) : []
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$selector, _object$get, _object$put, _object$post, _object$delete, _object$patch, _object$body, _object$response_body, _object$additional_bi;
    var message = createBaseHttpRule();
    message.selector = (_object$selector = object.selector) !== null && _object$selector !== void 0 ? _object$selector : "";
    message.get = (_object$get = object.get) !== null && _object$get !== void 0 ? _object$get : undefined;
    message.put = (_object$put = object.put) !== null && _object$put !== void 0 ? _object$put : undefined;
    message.post = (_object$post = object.post) !== null && _object$post !== void 0 ? _object$post : undefined;
    message["delete"] = (_object$delete = object["delete"]) !== null && _object$delete !== void 0 ? _object$delete : undefined;
    message.patch = (_object$patch = object.patch) !== null && _object$patch !== void 0 ? _object$patch : undefined;
    message.custom = object.custom !== undefined && object.custom !== null ? CustomHttpPattern.fromPartial(object.custom) : undefined;
    message.body = (_object$body = object.body) !== null && _object$body !== void 0 ? _object$body : "";
    message.response_body = (_object$response_body = object.response_body) !== null && _object$response_body !== void 0 ? _object$response_body : "";
    message.additional_bindings = ((_object$additional_bi = object.additional_bindings) === null || _object$additional_bi === void 0 ? void 0 : _object$additional_bi.map(function (e) {
      return HttpRule.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.HttpRule = HttpRule;
function createBaseCustomHttpPattern() {
  return {
    kind: "",
    path: ""
  };
}
var CustomHttpPattern = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCustomHttpPattern();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;
        case 2:
          message.path = reader.string();
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
      kind: (0, _helpers.isSet)(object.kind) ? String(object.kind) : "",
      path: (0, _helpers.isSet)(object.path) ? String(object.path) : ""
    };
  },
  fromPartial: function fromPartial(object) {
    var _object$kind, _object$path;
    var message = createBaseCustomHttpPattern();
    message.kind = (_object$kind = object.kind) !== null && _object$kind !== void 0 ? _object$kind : "";
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    return message;
  }
};
exports.CustomHttpPattern = CustomHttpPattern;