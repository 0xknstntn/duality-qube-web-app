import * as _108 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _108.ScalarType;
    scalarTypeToJSON(object: _108.ScalarType): string;
    ScalarType: typeof _108.ScalarType;
    InterfaceDescriptor: {
        encode(message: _108.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.InterfaceDescriptor;
        fromJSON(object: any): _108.InterfaceDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _108.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _108.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ScalarDescriptor;
        fromJSON(object: any): _108.ScalarDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
            field_type?: _108.ScalarType[];
        }): _108.ScalarDescriptor;
    };
};
