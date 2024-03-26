import { Any } from "../protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../helpers";
/**
 * Message that represents an arbitrary HTTP body. It should only be used for
 * payload formats that can't be represented as JSON, such as raw binary or
 * an HTML page.
 * 
 * 
 * This message can be used both in streaming and non-streaming API methods in
 * the request as well as the response.
 * 
 * It can be used as a top-level request field, which is convenient if one
 * wants to extract parameters from either the URL or HTTP template into the
 * request fields and also want access to the raw HTTP body.
 * 
 * Example:
 * 
 *     message GetResourceRequest {
 *       // A unique request id.
 *       string request_id = 1;
 * 
 *       // The raw HTTP body is bound to this field.
 *       google.api.HttpBody http_body = 2;
 * 
 *     }
 * 
 *     service ResourceService {
 *       rpc GetResource(GetResourceRequest)
 *         returns (google.api.HttpBody);
 *       rpc UpdateResource(google.api.HttpBody)
 *         returns (google.protobuf.Empty);
 * 
 *     }
 * 
 * Example with streaming methods:
 * 
 *     service CaldavService {
 *       rpc GetCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *       rpc UpdateCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 * 
 *     }
 * 
 * Use of this type only changes how the request and response bodies are
 * handled, all other features will continue to work unchanged.
 */

function createBaseHttpBody() {
  return {
    content_type: "",
    data: new Uint8Array(),
    extensions: []
  };
}
export const HttpBody = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.content_type !== "") {
      writer.uint32(10).string(message.content_type);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    for (const v of message.extensions) {
      Any.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content_type = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.extensions.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      content_type: isSet(object.content_type) ? String(object.content_type) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      extensions: Array.isArray(object === null || object === void 0 ? void 0 : object.extensions) ? object.extensions.map(e => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object) {
    var _object$content_type, _object$data, _object$extensions;
    const message = createBaseHttpBody();
    message.content_type = (_object$content_type = object.content_type) !== null && _object$content_type !== void 0 ? _object$content_type : "";
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.extensions = ((_object$extensions = object.extensions) === null || _object$extensions === void 0 ? void 0 : _object$extensions.map(e => Any.fromPartial(e))) || [];
    return message;
  }
};