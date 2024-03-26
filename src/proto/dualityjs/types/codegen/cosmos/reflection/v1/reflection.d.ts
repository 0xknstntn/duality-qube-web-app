import { FileDescriptorProto } from "../../../google/protobuf/descriptor";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
    /** files is the file descriptors. */
    files: FileDescriptorProto[];
}
export declare const FileDescriptorsRequest: {
    encode(_: FileDescriptorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorsRequest;
    fromJSON(_: any): FileDescriptorsRequest;
    fromPartial(_: DeepPartial<FileDescriptorsRequest>): FileDescriptorsRequest;
};
export declare const FileDescriptorsResponse: {
    encode(message: FileDescriptorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorsResponse;
    fromJSON(object: any): FileDescriptorsResponse;
    fromPartial(object: DeepPartial<FileDescriptorsResponse>): FileDescriptorsResponse;
};
