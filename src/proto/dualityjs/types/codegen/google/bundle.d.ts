import * as _141 from "./api/http";
import * as _142 from "./api/httpbody";
import * as _143 from "./protobuf/any";
import * as _144 from "./protobuf/descriptor";
import * as _145 from "./protobuf/duration";
import * as _146 from "./protobuf/empty";
import * as _147 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _142.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.HttpBody;
            fromJSON(object: any): _142.HttpBody;
            fromPartial(object: {
                content_type?: string;
                data?: Uint8Array;
                extensions?: {
                    type_url?: string;
                    value?: Uint8Array;
                }[];
            }): _142.HttpBody;
        };
        Http: {
            encode(message: _141.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Http;
            fromJSON(object: any): _141.Http;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    response_body?: string;
                    additional_bindings?: any[];
                }[];
                fully_decode_reserved_expansion?: boolean;
            }): _141.Http;
        };
        HttpRule: {
            encode(message: _141.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.HttpRule;
            fromJSON(object: any): _141.HttpRule;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                response_body?: string;
                additional_bindings?: any[];
            }): _141.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _141.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.CustomHttpPattern;
            fromJSON(object: any): _141.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _141.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _147.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Timestamp;
            fromJSON(object: any): _147.Timestamp;
            fromPartial(object: {
                seconds?: string | number | import("long").default;
                nanos?: number;
            }): _147.Timestamp;
        };
        Empty: {
            encode(_: _146.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Empty;
            fromJSON(_: any): _146.Empty;
            fromPartial(_: {}): _146.Empty;
        };
        Duration: {
            encode(message: _145.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Duration;
            fromJSON(object: any): _145.Duration;
            fromPartial(object: {
                seconds?: string | number | import("long").default;
                nanos?: number;
            }): _145.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _144.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _144.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _144.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _144.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _144.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _144.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _144.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _144.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _144.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _144.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _144.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _144.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _144.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _144.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _144.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _144.FieldOptions_CType;
        FieldOptions_JSType: typeof _144.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _144.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _144.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.FileDescriptorSet;
            fromJSON(object: any): _144.FileDescriptorSet;
            fromPartial(object: {
                file?: {
                    name?: string;
                    package?: string;
                    dependency?: string[];
                    public_dependency?: number[];
                    weak_dependency?: number[];
                    message_type?: {
                        name?: string;
                        field?: {
                            name?: string;
                            number?: number;
                            label?: _144.FieldDescriptorProto_Label;
                            type?: _144.FieldDescriptorProto_Type;
                            type_name?: string;
                            extendee?: string;
                            default_value?: string;
                            oneof_index?: number;
                            json_name?: string;
                            options?: {
                                ctype?: _144.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _144.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").default;
                                    negative_int_value?: string | number | import("long").default;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: _144.FieldDescriptorProto_Label;
                            type?: _144.FieldDescriptorProto_Type;
                            type_name?: string;
                            extendee?: string;
                            default_value?: string;
                            oneof_index?: number;
                            json_name?: string;
                            options?: {
                                ctype?: _144.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _144.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").default;
                                    negative_int_value?: string | number | import("long").default;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        nested_type?: any[];
                        enum_type?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpreted_option?: {
                                        name?: {
                                            name_part?: string;
                                            is_extension?: boolean;
                                        }[];
                                        identifier_value?: string;
                                        positive_int_value?: string | number | import("long").default;
                                        negative_int_value?: string | number | import("long").default;
                                        double_value?: number;
                                        string_value?: Uint8Array;
                                        aggregate_value?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allow_alias?: boolean;
                                deprecated?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").default;
                                    negative_int_value?: string | number | import("long").default;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                            reserved_range?: {
                                start?: number;
                                end?: number;
                            }[];
                            reserved_name?: string[];
                        }[];
                        extension_range?: {
                            start?: number;
                            end?: number;
                            options?: {
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").default;
                                    negative_int_value?: string | number | import("long").default;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        oneof_decl?: {
                            name?: string;
                            options?: {
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").default;
                                    negative_int_value?: string | number | import("long").default;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            message_set_wire_format?: boolean;
                            no_standard_descriptor_accessor?: boolean;
                            deprecated?: boolean;
                            map_entry?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").default;
                                negative_int_value?: string | number | import("long").default;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        reserved_range?: {
                            start?: number;
                            end?: number;
                        }[];
                        reserved_name?: string[];
                    }[];
                    enum_type?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").default;
                                    negative_int_value?: string | number | import("long").default;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allow_alias?: boolean;
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").default;
                                negative_int_value?: string | number | import("long").default;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        reserved_range?: {
                            start?: number;
                            end?: number;
                        }[];
                        reserved_name?: string[];
                    }[];
                    service?: {
                        name?: string;
                        method?: {
                            name?: string;
                            input_type?: string;
                            output_type?: string;
                            options?: {
                                deprecated?: boolean;
                                idempotency_level?: _144.MethodOptions_IdempotencyLevel;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").default;
                                    negative_int_value?: string | number | import("long").default;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                            client_streaming?: boolean;
                            server_streaming?: boolean;
                        }[];
                        options?: {
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").default;
                                negative_int_value?: string | number | import("long").default;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _144.FieldDescriptorProto_Label;
                        type?: _144.FieldDescriptorProto_Type;
                        type_name?: string;
                        extendee?: string;
                        default_value?: string;
                        oneof_index?: number;
                        json_name?: string;
                        options?: {
                            ctype?: _144.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _144.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").default;
                                negative_int_value?: string | number | import("long").default;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        java_package?: string;
                        java_outer_classname?: string;
                        java_multiple_files?: boolean;
                        java_generate_equals_and_hash?: boolean;
                        java_string_check_utf8?: boolean;
                        optimize_for?: _144.FileOptions_OptimizeMode;
                        go_package?: string;
                        cc_generic_services?: boolean;
                        java_generic_services?: boolean;
                        py_generic_services?: boolean;
                        php_generic_services?: boolean;
                        deprecated?: boolean;
                        cc_enable_arenas?: boolean;
                        objc_class_prefix?: string;
                        csharp_namespace?: string;
                        swift_prefix?: string;
                        php_class_prefix?: string;
                        php_namespace?: string;
                        php_metadata_namespace?: string;
                        ruby_package?: string;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").default;
                            negative_int_value?: string | number | import("long").default;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    source_code_info?: {
                        location?: {
                            path?: number[];
                            span?: number[];
                            leading_comments?: string;
                            trailing_comments?: string;
                            leading_detached_comments?: string[];
                        }[];
                    };
                    syntax?: string;
                }[];
            }): _144.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _144.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.FileDescriptorProto;
            fromJSON(object: any): _144.FileDescriptorProto;
            fromPartial(object: {
                name?: string;
                package?: string;
                dependency?: string[];
                public_dependency?: number[];
                weak_dependency?: number[];
                message_type?: {
                    name?: string;
                    field?: {
                        name?: string;
                        number?: number;
                        label?: _144.FieldDescriptorProto_Label;
                        type?: _144.FieldDescriptorProto_Type;
                        type_name?: string;
                        extendee?: string;
                        default_value?: string;
                        oneof_index?: number;
                        json_name?: string;
                        options?: {
                            ctype?: _144.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _144.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").default;
                                negative_int_value?: string | number | import("long").default;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _144.FieldDescriptorProto_Label;
                        type?: _144.FieldDescriptorProto_Type;
                        type_name?: string;
                        extendee?: string;
                        default_value?: string;
                        oneof_index?: number;
                        json_name?: string;
                        options?: {
                            ctype?: _144.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _144.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").default;
                                negative_int_value?: string | number | import("long").default;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    nested_type?: any[];
                    enum_type?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").default;
                                    negative_int_value?: string | number | import("long").default;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allow_alias?: boolean;
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").default;
                                negative_int_value?: string | number | import("long").default;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        reserved_range?: {
                            start?: number;
                            end?: number;
                        }[];
                        reserved_name?: string[];
                    }[];
                    extension_range?: {
                        start?: number;
                        end?: number;
                        options?: {
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").default;
                                negative_int_value?: string | number | import("long").default;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    oneof_decl?: {
                        name?: string;
                        options?: {
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").default;
                                negative_int_value?: string | number | import("long").default;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        message_set_wire_format?: boolean;
                        no_standard_descriptor_accessor?: boolean;
                        deprecated?: boolean;
                        map_entry?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").default;
                            negative_int_value?: string | number | import("long").default;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    reserved_range?: {
                        start?: number;
                        end?: number;
                    }[];
                    reserved_name?: string[];
                }[];
                enum_type?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").default;
                                negative_int_value?: string | number | import("long").default;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allow_alias?: boolean;
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").default;
                            negative_int_value?: string | number | import("long").default;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    reserved_range?: {
                        start?: number;
                        end?: number;
                    }[];
                    reserved_name?: string[];
                }[];
                service?: {
                    name?: string;
                    method?: {
                        name?: string;
                        input_type?: string;
                        output_type?: string;
                        options?: {
                            deprecated?: boolean;
                            idempotency_level?: _144.MethodOptions_IdempotencyLevel;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").default;
                                negative_int_value?: string | number | import("long").default;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        client_streaming?: boolean;
                        server_streaming?: boolean;
                    }[];
                    options?: {
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").default;
                            negative_int_value?: string | number | import("long").default;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _144.FieldDescriptorProto_Label;
                    type?: _144.FieldDescriptorProto_Type;
                    type_name?: string;
                    extendee?: string;
                    default_value?: string;
                    oneof_index?: number;
                    json_name?: string;
                    options?: {
                        ctype?: _144.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _144.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").default;
                            negative_int_value?: string | number | import("long").default;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                options?: {
                    java_package?: string;
                    java_outer_classname?: string;
                    java_multiple_files?: boolean;
                    java_generate_equals_and_hash?: boolean;
                    java_string_check_utf8?: boolean;
                    optimize_for?: _144.FileOptions_OptimizeMode;
                    go_package?: string;
                    cc_generic_services?: boolean;
                    java_generic_services?: boolean;
                    py_generic_services?: boolean;
                    php_generic_services?: boolean;
                    deprecated?: boolean;
                    cc_enable_arenas?: boolean;
                    objc_class_prefix?: string;
                    csharp_namespace?: string;
                    swift_prefix?: string;
                    php_class_prefix?: string;
                    php_namespace?: string;
                    php_metadata_namespace?: string;
                    ruby_package?: string;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").default;
                        negative_int_value?: string | number | import("long").default;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                source_code_info?: {
                    location?: {
                        path?: number[];
                        span?: number[];
                        leading_comments?: string;
                        trailing_comments?: string;
                        leading_detached_comments?: string[];
                    }[];
                };
                syntax?: string;
            }): _144.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _144.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.DescriptorProto;
            fromJSON(object: any): _144.DescriptorProto;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _144.FieldDescriptorProto_Label;
                    type?: _144.FieldDescriptorProto_Type;
                    type_name?: string;
                    extendee?: string;
                    default_value?: string;
                    oneof_index?: number;
                    json_name?: string;
                    options?: {
                        ctype?: _144.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _144.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").default;
                            negative_int_value?: string | number | import("long").default;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _144.FieldDescriptorProto_Label;
                    type?: _144.FieldDescriptorProto_Type;
                    type_name?: string;
                    extendee?: string;
                    default_value?: string;
                    oneof_index?: number;
                    json_name?: string;
                    options?: {
                        ctype?: _144.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _144.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").default;
                            negative_int_value?: string | number | import("long").default;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                nested_type?: any[];
                enum_type?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").default;
                                negative_int_value?: string | number | import("long").default;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allow_alias?: boolean;
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").default;
                            negative_int_value?: string | number | import("long").default;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    reserved_range?: {
                        start?: number;
                        end?: number;
                    }[];
                    reserved_name?: string[];
                }[];
                extension_range?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").default;
                            negative_int_value?: string | number | import("long").default;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                oneof_decl?: {
                    name?: string;
                    options?: {
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").default;
                            negative_int_value?: string | number | import("long").default;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                options?: {
                    message_set_wire_format?: boolean;
                    no_standard_descriptor_accessor?: boolean;
                    deprecated?: boolean;
                    map_entry?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").default;
                        negative_int_value?: string | number | import("long").default;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                reserved_range?: {
                    start?: number;
                    end?: number;
                }[];
                reserved_name?: string[];
            }): _144.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _144.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _144.DescriptorProto_ExtensionRange;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").default;
                        negative_int_value?: string | number | import("long").default;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _144.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _144.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.DescriptorProto_ReservedRange;
            fromJSON(object: any): _144.DescriptorProto_ReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _144.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _144.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ExtensionRangeOptions;
            fromJSON(object: any): _144.ExtensionRangeOptions;
            fromPartial(object: {
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").default;
                    negative_int_value?: string | number | import("long").default;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _144.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _144.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.FieldDescriptorProto;
            fromJSON(object: any): _144.FieldDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _144.FieldDescriptorProto_Label;
                type?: _144.FieldDescriptorProto_Type;
                type_name?: string;
                extendee?: string;
                default_value?: string;
                oneof_index?: number;
                json_name?: string;
                options?: {
                    ctype?: _144.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _144.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").default;
                        negative_int_value?: string | number | import("long").default;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _144.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _144.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.OneofDescriptorProto;
            fromJSON(object: any): _144.OneofDescriptorProto;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").default;
                        negative_int_value?: string | number | import("long").default;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _144.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _144.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EnumDescriptorProto;
            fromJSON(object: any): _144.EnumDescriptorProto;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").default;
                            negative_int_value?: string | number | import("long").default;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                options?: {
                    allow_alias?: boolean;
                    deprecated?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").default;
                        negative_int_value?: string | number | import("long").default;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                reserved_range?: {
                    start?: number;
                    end?: number;
                }[];
                reserved_name?: string[];
            }): _144.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _144.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _144.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _144.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _144.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EnumValueDescriptorProto;
            fromJSON(object: any): _144.EnumValueDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").default;
                        negative_int_value?: string | number | import("long").default;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _144.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _144.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ServiceDescriptorProto;
            fromJSON(object: any): _144.ServiceDescriptorProto;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    input_type?: string;
                    output_type?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotency_level?: _144.MethodOptions_IdempotencyLevel;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").default;
                            negative_int_value?: string | number | import("long").default;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    client_streaming?: boolean;
                    server_streaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").default;
                        negative_int_value?: string | number | import("long").default;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _144.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _144.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MethodDescriptorProto;
            fromJSON(object: any): _144.MethodDescriptorProto;
            fromPartial(object: {
                name?: string;
                input_type?: string;
                output_type?: string;
                options?: {
                    deprecated?: boolean;
                    idempotency_level?: _144.MethodOptions_IdempotencyLevel;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").default;
                        negative_int_value?: string | number | import("long").default;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                client_streaming?: boolean;
                server_streaming?: boolean;
            }): _144.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _144.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.FileOptions;
            fromJSON(object: any): _144.FileOptions;
            fromPartial(object: {
                java_package?: string;
                java_outer_classname?: string;
                java_multiple_files?: boolean;
                java_generate_equals_and_hash?: boolean;
                java_string_check_utf8?: boolean;
                optimize_for?: _144.FileOptions_OptimizeMode;
                go_package?: string;
                cc_generic_services?: boolean;
                java_generic_services?: boolean;
                py_generic_services?: boolean;
                php_generic_services?: boolean;
                deprecated?: boolean;
                cc_enable_arenas?: boolean;
                objc_class_prefix?: string;
                csharp_namespace?: string;
                swift_prefix?: string;
                php_class_prefix?: string;
                php_namespace?: string;
                php_metadata_namespace?: string;
                ruby_package?: string;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").default;
                    negative_int_value?: string | number | import("long").default;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _144.FileOptions;
        };
        MessageOptions: {
            encode(message: _144.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MessageOptions;
            fromJSON(object: any): _144.MessageOptions;
            fromPartial(object: {
                message_set_wire_format?: boolean;
                no_standard_descriptor_accessor?: boolean;
                deprecated?: boolean;
                map_entry?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").default;
                    negative_int_value?: string | number | import("long").default;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _144.MessageOptions;
        };
        FieldOptions: {
            encode(message: _144.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.FieldOptions;
            fromJSON(object: any): _144.FieldOptions;
            fromPartial(object: {
                ctype?: _144.FieldOptions_CType;
                packed?: boolean;
                jstype?: _144.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").default;
                    negative_int_value?: string | number | import("long").default;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _144.FieldOptions;
        };
        OneofOptions: {
            encode(message: _144.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.OneofOptions;
            fromJSON(object: any): _144.OneofOptions;
            fromPartial(object: {
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").default;
                    negative_int_value?: string | number | import("long").default;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _144.OneofOptions;
        };
        EnumOptions: {
            encode(message: _144.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EnumOptions;
            fromJSON(object: any): _144.EnumOptions;
            fromPartial(object: {
                allow_alias?: boolean;
                deprecated?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").default;
                    negative_int_value?: string | number | import("long").default;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _144.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _144.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EnumValueOptions;
            fromJSON(object: any): _144.EnumValueOptions;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").default;
                    negative_int_value?: string | number | import("long").default;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _144.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _144.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ServiceOptions;
            fromJSON(object: any): _144.ServiceOptions;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").default;
                    negative_int_value?: string | number | import("long").default;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _144.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _144.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MethodOptions;
            fromJSON(object: any): _144.MethodOptions;
            fromPartial(object: {
                deprecated?: boolean;
                idempotency_level?: _144.MethodOptions_IdempotencyLevel;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").default;
                    negative_int_value?: string | number | import("long").default;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _144.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _144.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.UninterpretedOption;
            fromJSON(object: any): _144.UninterpretedOption;
            fromPartial(object: {
                name?: {
                    name_part?: string;
                    is_extension?: boolean;
                }[];
                identifier_value?: string;
                positive_int_value?: string | number | import("long").default;
                negative_int_value?: string | number | import("long").default;
                double_value?: number;
                string_value?: Uint8Array;
                aggregate_value?: string;
            }): _144.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _144.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.UninterpretedOption_NamePart;
            fromJSON(object: any): _144.UninterpretedOption_NamePart;
            fromPartial(object: {
                name_part?: string;
                is_extension?: boolean;
            }): _144.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _144.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.SourceCodeInfo;
            fromJSON(object: any): _144.SourceCodeInfo;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leading_comments?: string;
                    trailing_comments?: string;
                    leading_detached_comments?: string[];
                }[];
            }): _144.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _144.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.SourceCodeInfo_Location;
            fromJSON(object: any): _144.SourceCodeInfo_Location;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leading_comments?: string;
                trailing_comments?: string;
                leading_detached_comments?: string[];
            }): _144.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _144.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GeneratedCodeInfo;
            fromJSON(object: any): _144.GeneratedCodeInfo;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    source_file?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _144.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _144.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _144.GeneratedCodeInfo_Annotation;
            fromPartial(object: {
                path?: number[];
                source_file?: string;
                begin?: number;
                end?: number;
            }): _144.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _143.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Any;
            fromJSON(object: any): _143.Any;
            fromPartial(object: {
                type_url?: string;
                value?: Uint8Array;
            }): _143.Any;
        };
    };
}
