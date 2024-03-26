import * as _2 from "./ics23/v1/proofs";
import * as _3 from "./app/runtime/v1alpha1/module";
import * as _4 from "./app/v1alpha1/config";
import * as _5 from "./app/v1alpha1/module";
import * as _6 from "./app/v1alpha1/query";
import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./auth/v1beta1/tx";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./autocli/v1/options";
import * as _17 from "./autocli/v1/query";
import * as _18 from "./bank/v1beta1/authz";
import * as _19 from "./bank/v1beta1/bank";
import * as _20 from "./bank/v1beta1/genesis";
import * as _21 from "./bank/v1beta1/query";
import * as _22 from "./bank/v1beta1/tx";
import * as _23 from "./base/abci/v1beta1/abci";
import * as _24 from "./base/kv/v1beta1/kv";
import * as _25 from "./base/node/v1beta1/query";
import * as _26 from "./base/query/v1beta1/pagination";
import * as _27 from "./base/reflection/v1beta1/reflection";
import * as _28 from "./base/reflection/v2alpha1/reflection";
import * as _29 from "./base/snapshots/v1beta1/snapshot";
import * as _30 from "./base/store/v1beta1/commit_info";
import * as _31 from "./base/store/v1beta1/listening";
import * as _32 from "./base/tendermint/v1beta1/query";
import * as _33 from "./base/tendermint/v1beta1/types";
import * as _34 from "./base/v1beta1/coin";
import * as _35 from "./capability/v1beta1/capability";
import * as _36 from "./capability/v1beta1/genesis";
import * as _37 from "./consensus/v1/query";
import * as _38 from "./consensus/v1/tx";
import * as _39 from "./crisis/v1beta1/genesis";
import * as _40 from "./crisis/v1beta1/tx";
import * as _41 from "./crypto/ed25519/keys";
import * as _42 from "./crypto/hd/v1/hd";
import * as _43 from "./crypto/keyring/v1/record";
import * as _44 from "./crypto/multisig/keys";
import * as _45 from "./crypto/secp256k1/keys";
import * as _46 from "./crypto/secp256r1/keys";
import * as _47 from "./distribution/v1beta1/distribution";
import * as _48 from "./distribution/v1beta1/genesis";
import * as _49 from "./distribution/v1beta1/query";
import * as _50 from "./distribution/v1beta1/tx";
import * as _51 from "./evidence/v1beta1/evidence";
import * as _52 from "./evidence/v1beta1/genesis";
import * as _53 from "./evidence/v1beta1/query";
import * as _54 from "./evidence/v1beta1/tx";
import * as _55 from "./feegrant/v1beta1/feegrant";
import * as _56 from "./feegrant/v1beta1/genesis";
import * as _57 from "./feegrant/v1beta1/query";
import * as _58 from "./feegrant/v1beta1/tx";
import * as _59 from "./genutil/v1beta1/genesis";
import * as _60 from "./gov/v1/genesis";
import * as _61 from "./gov/v1/gov";
import * as _62 from "./gov/v1/query";
import * as _63 from "./gov/v1/tx";
import * as _64 from "./gov/v1beta1/genesis";
import * as _65 from "./gov/v1beta1/gov";
import * as _66 from "./gov/v1beta1/query";
import * as _67 from "./gov/v1beta1/tx";
import * as _68 from "./group/v1/events";
import * as _69 from "./group/v1/genesis";
import * as _70 from "./group/v1/query";
import * as _71 from "./group/v1/tx";
import * as _72 from "./group/v1/types";
import * as _73 from "./mint/v1beta1/genesis";
import * as _74 from "./mint/v1beta1/mint";
import * as _75 from "./mint/v1beta1/query";
import * as _76 from "./mint/v1beta1/tx";
import * as _78 from "./nft/v1beta1/event";
import * as _79 from "./nft/v1beta1/genesis";
import * as _80 from "./nft/v1beta1/nft";
import * as _81 from "./nft/v1beta1/query";
import * as _82 from "./nft/v1beta1/tx";
import * as _83 from "./orm/query/v1alpha1/query";
import * as _84 from "./orm/v1/orm";
import * as _85 from "./orm/v1alpha1/schema";
import * as _86 from "./params/v1beta1/params";
import * as _87 from "./params/v1beta1/query";
import * as _89 from "./reflection/v1/reflection";
import * as _90 from "./slashing/v1beta1/genesis";
import * as _91 from "./slashing/v1beta1/query";
import * as _92 from "./slashing/v1beta1/slashing";
import * as _93 from "./slashing/v1beta1/tx";
import * as _94 from "./staking/v1beta1/authz";
import * as _95 from "./staking/v1beta1/genesis";
import * as _96 from "./staking/v1beta1/query";
import * as _97 from "./staking/v1beta1/staking";
import * as _98 from "./staking/v1beta1/tx";
import * as _99 from "./tx/config/v1/config";
import * as _100 from "./tx/signing/v1beta1/signing";
import * as _101 from "./tx/v1beta1/service";
import * as _102 from "./tx/v1beta1/tx";
import * as _103 from "./upgrade/v1beta1/query";
import * as _104 from "./upgrade/v1beta1/tx";
import * as _105 from "./upgrade/v1beta1/upgrade";
import * as _106 from "./vesting/v1beta1/tx";
import * as _107 from "./vesting/v1beta1/vesting";
import * as _222 from "./auth/v1beta1/query.lcd";
import * as _223 from "./authz/v1beta1/query.lcd";
import * as _224 from "./bank/v1beta1/query.lcd";
import * as _225 from "./base/node/v1beta1/query.lcd";
import * as _226 from "./base/tendermint/v1beta1/query.lcd";
import * as _227 from "./consensus/v1/query.lcd";
import * as _228 from "./distribution/v1beta1/query.lcd";
import * as _229 from "./evidence/v1beta1/query.lcd";
import * as _230 from "./feegrant/v1beta1/query.lcd";
import * as _231 from "./gov/v1/query.lcd";
import * as _232 from "./gov/v1beta1/query.lcd";
import * as _233 from "./group/v1/query.lcd";
import * as _234 from "./mint/v1beta1/query.lcd";
import * as _235 from "./nft/v1beta1/query.lcd";
import * as _236 from "./params/v1beta1/query.lcd";
import * as _237 from "./slashing/v1beta1/query.lcd";
import * as _238 from "./staking/v1beta1/query.lcd";
import * as _239 from "./tx/v1beta1/service.lcd";
import * as _240 from "./upgrade/v1beta1/query.lcd";
import * as _241 from "./app/v1alpha1/query.rpc.Query";
import * as _242 from "./auth/v1beta1/query.rpc.Query";
import * as _243 from "./authz/v1beta1/query.rpc.Query";
import * as _244 from "./autocli/v1/query.rpc.Query";
import * as _245 from "./bank/v1beta1/query.rpc.Query";
import * as _246 from "./base/node/v1beta1/query.rpc.Service";
import * as _247 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _248 from "./consensus/v1/query.rpc.Query";
import * as _249 from "./distribution/v1beta1/query.rpc.Query";
import * as _250 from "./evidence/v1beta1/query.rpc.Query";
import * as _251 from "./feegrant/v1beta1/query.rpc.Query";
import * as _252 from "./gov/v1/query.rpc.Query";
import * as _253 from "./gov/v1beta1/query.rpc.Query";
import * as _254 from "./group/v1/query.rpc.Query";
import * as _255 from "./mint/v1beta1/query.rpc.Query";
import * as _256 from "./nft/v1beta1/query.rpc.Query";
import * as _257 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _258 from "./params/v1beta1/query.rpc.Query";
import * as _259 from "./slashing/v1beta1/query.rpc.Query";
import * as _260 from "./staking/v1beta1/query.rpc.Query";
import * as _261 from "./tx/v1beta1/service.rpc.Service";
import * as _262 from "./upgrade/v1beta1/query.rpc.Query";
import * as _263 from "./auth/v1beta1/tx.rpc.msg";
import * as _264 from "./authz/v1beta1/tx.rpc.msg";
import * as _265 from "./bank/v1beta1/tx.rpc.msg";
import * as _266 from "./consensus/v1/tx.rpc.msg";
import * as _267 from "./crisis/v1beta1/tx.rpc.msg";
import * as _268 from "./distribution/v1beta1/tx.rpc.msg";
import * as _269 from "./evidence/v1beta1/tx.rpc.msg";
import * as _270 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _271 from "./gov/v1/tx.rpc.msg";
import * as _272 from "./gov/v1beta1/tx.rpc.msg";
import * as _273 from "./group/v1/tx.rpc.msg";
import * as _274 from "./mint/v1beta1/tx.rpc.msg";
import * as _275 from "./nft/v1beta1/tx.rpc.msg";
import * as _276 from "./slashing/v1beta1/tx.rpc.msg";
import * as _277 from "./staking/v1beta1/tx.rpc.msg";
import * as _278 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _279 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace ics23 {
        const v1: {
            hashOpFromJSON(object: any): _2.HashOp;
            hashOpToJSON(object: _2.HashOp): string;
            lengthOpFromJSON(object: any): _2.LengthOp;
            lengthOpToJSON(object: _2.LengthOp): string;
            HashOp: typeof _2.HashOp;
            LengthOp: typeof _2.LengthOp;
            ExistenceProof: {
                encode(message: _2.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ExistenceProof;
                fromJSON(object: any): _2.ExistenceProof;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _2.HashOp;
                        prehash_key?: _2.HashOp;
                        prehash_value?: _2.HashOp;
                        length?: _2.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _2.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                }): _2.ExistenceProof;
            };
            NonExistenceProof: {
                encode(message: _2.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.NonExistenceProof;
                fromJSON(object: any): _2.NonExistenceProof;
                fromPartial(object: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _2.HashOp;
                            prehash_key?: _2.HashOp;
                            prehash_value?: _2.HashOp;
                            length?: _2.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _2.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _2.HashOp;
                            prehash_key?: _2.HashOp;
                            prehash_value?: _2.HashOp;
                            length?: _2.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _2.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                }): _2.NonExistenceProof;
            };
            CommitmentProof: {
                encode(message: _2.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.CommitmentProof;
                fromJSON(object: any): _2.CommitmentProof;
                fromPartial(object: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _2.HashOp;
                            prehash_key?: _2.HashOp;
                            prehash_value?: _2.HashOp;
                            length?: _2.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _2.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _2.HashOp;
                                prehash_key?: _2.HashOp;
                                prehash_value?: _2.HashOp;
                                length?: _2.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _2.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _2.HashOp;
                                prehash_key?: _2.HashOp;
                                prehash_value?: _2.HashOp;
                                length?: _2.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _2.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                    batch?: {
                        entries?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: _2.HashOp;
                                    prehash_key?: _2.HashOp;
                                    prehash_value?: _2.HashOp;
                                    length?: _2.LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: _2.HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: _2.HashOp;
                                        prehash_key?: _2.HashOp;
                                        prehash_value?: _2.HashOp;
                                        length?: _2.LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: _2.HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: _2.HashOp;
                                        prehash_key?: _2.HashOp;
                                        prehash_value?: _2.HashOp;
                                        length?: _2.LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: _2.HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                        }[];
                    };
                    compressed?: {
                        entries?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: _2.HashOp;
                                    prehash_key?: _2.HashOp;
                                    prehash_value?: _2.HashOp;
                                    length?: _2.LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: number[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: _2.HashOp;
                                        prehash_key?: _2.HashOp;
                                        prehash_value?: _2.HashOp;
                                        length?: _2.LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: number[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: _2.HashOp;
                                        prehash_key?: _2.HashOp;
                                        prehash_value?: _2.HashOp;
                                        length?: _2.LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: number[];
                                };
                            };
                        }[];
                        lookup_inners?: {
                            hash?: _2.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                }): _2.CommitmentProof;
            };
            LeafOp: {
                encode(message: _2.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.LeafOp;
                fromJSON(object: any): _2.LeafOp;
                fromPartial(object: {
                    hash?: _2.HashOp;
                    prehash_key?: _2.HashOp;
                    prehash_value?: _2.HashOp;
                    length?: _2.LengthOp;
                    prefix?: Uint8Array;
                }): _2.LeafOp;
            };
            InnerOp: {
                encode(message: _2.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.InnerOp;
                fromJSON(object: any): _2.InnerOp;
                fromPartial(object: {
                    hash?: _2.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }): _2.InnerOp;
            };
            ProofSpec: {
                encode(message: _2.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ProofSpec;
                fromJSON(object: any): _2.ProofSpec;
                fromPartial(object: {
                    leaf_spec?: {
                        hash?: _2.HashOp;
                        prehash_key?: _2.HashOp;
                        prehash_value?: _2.HashOp;
                        length?: _2.LengthOp;
                        prefix?: Uint8Array;
                    };
                    inner_spec?: {
                        child_order?: number[];
                        child_size?: number;
                        min_prefix_length?: number;
                        max_prefix_length?: number;
                        empty_child?: Uint8Array;
                        hash?: _2.HashOp;
                    };
                    max_depth?: number;
                    min_depth?: number;
                    prehash_key_before_comparison?: boolean;
                }): _2.ProofSpec;
            };
            InnerSpec: {
                encode(message: _2.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.InnerSpec;
                fromJSON(object: any): _2.InnerSpec;
                fromPartial(object: {
                    child_order?: number[];
                    child_size?: number;
                    min_prefix_length?: number;
                    max_prefix_length?: number;
                    empty_child?: Uint8Array;
                    hash?: _2.HashOp;
                }): _2.InnerSpec;
            };
            BatchProof: {
                encode(message: _2.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.BatchProof;
                fromJSON(object: any): _2.BatchProof;
                fromPartial(object: {
                    entries?: {
                        exist?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _2.HashOp;
                                prehash_key?: _2.HashOp;
                                prehash_value?: _2.HashOp;
                                length?: _2.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _2.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        nonexist?: {
                            key?: Uint8Array;
                            left?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: _2.HashOp;
                                    prehash_key?: _2.HashOp;
                                    prehash_value?: _2.HashOp;
                                    length?: _2.LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: _2.HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            right?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: _2.HashOp;
                                    prehash_key?: _2.HashOp;
                                    prehash_value?: _2.HashOp;
                                    length?: _2.LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: _2.HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        };
                    }[];
                }): _2.BatchProof;
            };
            BatchEntry: {
                encode(message: _2.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.BatchEntry;
                fromJSON(object: any): _2.BatchEntry;
                fromPartial(object: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _2.HashOp;
                            prehash_key?: _2.HashOp;
                            prehash_value?: _2.HashOp;
                            length?: _2.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _2.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _2.HashOp;
                                prehash_key?: _2.HashOp;
                                prehash_value?: _2.HashOp;
                                length?: _2.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _2.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _2.HashOp;
                                prehash_key?: _2.HashOp;
                                prehash_value?: _2.HashOp;
                                length?: _2.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _2.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }): _2.BatchEntry;
            };
            CompressedBatchProof: {
                encode(message: _2.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.CompressedBatchProof;
                fromJSON(object: any): _2.CompressedBatchProof;
                fromPartial(object: {
                    entries?: {
                        exist?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _2.HashOp;
                                prehash_key?: _2.HashOp;
                                prehash_value?: _2.HashOp;
                                length?: _2.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        nonexist?: {
                            key?: Uint8Array;
                            left?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: _2.HashOp;
                                    prehash_key?: _2.HashOp;
                                    prehash_value?: _2.HashOp;
                                    length?: _2.LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: number[];
                            };
                            right?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: _2.HashOp;
                                    prehash_key?: _2.HashOp;
                                    prehash_value?: _2.HashOp;
                                    length?: _2.LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: number[];
                            };
                        };
                    }[];
                    lookup_inners?: {
                        hash?: _2.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                }): _2.CompressedBatchProof;
            };
            CompressedBatchEntry: {
                encode(message: _2.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.CompressedBatchEntry;
                fromJSON(object: any): _2.CompressedBatchEntry;
                fromPartial(object: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _2.HashOp;
                            prehash_key?: _2.HashOp;
                            prehash_value?: _2.HashOp;
                            length?: _2.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _2.HashOp;
                                prehash_key?: _2.HashOp;
                                prehash_value?: _2.HashOp;
                                length?: _2.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _2.HashOp;
                                prehash_key?: _2.HashOp;
                                prehash_value?: _2.HashOp;
                                length?: _2.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }): _2.CompressedBatchEntry;
            };
            CompressedExistenceProof: {
                encode(message: _2.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.CompressedExistenceProof;
                fromJSON(object: any): _2.CompressedExistenceProof;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _2.HashOp;
                        prehash_key?: _2.HashOp;
                        prehash_value?: _2.HashOp;
                        length?: _2.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                }): _2.CompressedExistenceProof;
            };
            CompressedNonExistenceProof: {
                encode(message: _2.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.CompressedNonExistenceProof;
                fromJSON(object: any): _2.CompressedNonExistenceProof;
                fromPartial(object: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _2.HashOp;
                            prehash_key?: _2.HashOp;
                            prehash_value?: _2.HashOp;
                            length?: _2.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _2.HashOp;
                            prehash_key?: _2.HashOp;
                            prehash_value?: _2.HashOp;
                            length?: _2.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                }): _2.CompressedNonExistenceProof;
            };
        };
    }
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    encode(message: _3.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Module;
                    fromJSON(object: any): _3.Module;
                    fromPartial(object: {
                        app_name?: string;
                        begin_blockers?: string[];
                        end_blockers?: string[];
                        init_genesis?: string[];
                        export_genesis?: string[];
                        override_store_keys?: {
                            module_name?: string;
                            kv_store_key?: string;
                        }[];
                    }): _3.Module;
                };
                StoreKeyConfig: {
                    encode(message: _3.StoreKeyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.StoreKeyConfig;
                    fromJSON(object: any): _3.StoreKeyConfig;
                    fromPartial(object: {
                        module_name?: string;
                        kv_store_key?: string;
                    }): _3.StoreKeyConfig;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _6.QueryConfigRequest): Promise<_6.QueryConfigResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useConfig: <TData = _6.QueryConfigResponse>({ request, options }: _241.UseConfigQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            };
            QueryConfigRequest: {
                encode(_: _6.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryConfigRequest;
                fromJSON(_: any): _6.QueryConfigRequest;
                fromPartial(_: {}): _6.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _6.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryConfigResponse;
                fromJSON(object: any): _6.QueryConfigResponse;
                fromPartial(object: {
                    config?: {
                        modules?: {
                            name?: string;
                            config?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            golang_bindings?: {
                                interface_type?: string;
                                implementation?: string;
                            }[];
                        }[];
                        golang_bindings?: {
                            interface_type?: string;
                            implementation?: string;
                        }[];
                    };
                }): _6.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _5.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ModuleDescriptor;
                fromJSON(object: any): _5.ModuleDescriptor;
                fromPartial(object: {
                    go_import?: string;
                    use_package?: {
                        name?: string;
                        revision?: number;
                    }[];
                    can_migrate_from?: {
                        module?: string;
                    }[];
                }): _5.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _5.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.PackageReference;
                fromJSON(object: any): _5.PackageReference;
                fromPartial(object: {
                    name?: string;
                    revision?: number;
                }): _5.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _5.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MigrateFromInfo;
                fromJSON(object: any): _5.MigrateFromInfo;
                fromPartial(object: {
                    module?: string;
                }): _5.MigrateFromInfo;
            };
            Config: {
                encode(message: _4.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Config;
                fromJSON(object: any): _4.Config;
                fromPartial(object: {
                    modules?: {
                        name?: string;
                        config?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        golang_bindings?: {
                            interface_type?: string;
                            implementation?: string;
                        }[];
                    }[];
                    golang_bindings?: {
                        interface_type?: string;
                        implementation?: string;
                    }[];
                }): _4.Config;
            };
            ModuleConfig: {
                encode(message: _4.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.ModuleConfig;
                fromJSON(object: any): _4.ModuleConfig;
                fromPartial(object: {
                    name?: string;
                    config?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    golang_bindings?: {
                        interface_type?: string;
                        implementation?: string;
                    }[];
                }): _4.ModuleConfig;
            };
            GolangBinding: {
                encode(message: _4.GolangBinding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GolangBinding;
                fromJSON(object: any): _4.GolangBinding;
                fromPartial(object: {
                    interface_type?: string;
                    implementation?: string;
                }): _4.GolangBinding;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            MsgClientImpl: typeof _263.MsgClientImpl;
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                accountAddressByID(request: _9.QueryAccountAddressByIDRequest): Promise<_9.QueryAccountAddressByIDResponse>;
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                moduleAccounts(request?: _9.QueryModuleAccountsRequest): Promise<_9.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _9.Bech32PrefixRequest): Promise<_9.Bech32PrefixResponse>;
                addressBytesToString(request: _9.AddressBytesToStringRequest): Promise<_9.AddressBytesToStringResponse>;
                addressStringToBytes(request: _9.AddressStringToBytesRequest): Promise<_9.AddressStringToBytesResponse>;
                accountInfo(request: _9.QueryAccountInfoRequest): Promise<_9.QueryAccountInfoResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useAccounts: <TData = _9.QueryAccountsResponse>({ request, options }: _242.UseAccountsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useAccount: <TData_1 = _9.QueryAccountResponse>({ request, options }: _242.UseAccountQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useAccountAddressByID: <TData_2 = _9.QueryAccountAddressByIDResponse>({ request, options }: _242.UseAccountAddressByIDQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useParams: <TData_3 = _9.QueryParamsResponse>({ request, options }: _242.UseParamsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useModuleAccounts: <TData_4 = _9.QueryModuleAccountsResponse>({ request, options }: _242.UseModuleAccountsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useModuleAccountByName: <TData_5 = _9.QueryModuleAccountByNameResponse>({ request, options }: _242.UseModuleAccountByNameQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useBech32Prefix: <TData_6 = _9.Bech32PrefixResponse>({ request, options }: _242.UseBech32PrefixQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useAddressBytesToString: <TData_7 = _9.AddressBytesToStringResponse>({ request, options }: _242.UseAddressBytesToStringQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                useAddressStringToBytes: <TData_8 = _9.AddressStringToBytesResponse>({ request, options }: _242.UseAddressStringToBytesQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                useAccountInfo: <TData_9 = _9.QueryAccountInfoResponse>({ request, options }: _242.UseAccountInfoQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _10.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            max_memo_characters: string;
                            tx_sig_limit: string;
                            tx_size_cost_per_byte: string;
                            sig_verify_cost_ed25519: string;
                            sig_verify_cost_secp256k1: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            max_memo_characters: string;
                            tx_sig_limit: string;
                            tx_size_cost_per_byte: string;
                            sig_verify_cost_ed25519: string;
                            sig_verify_cost_secp256k1: string;
                        };
                    }) => _10.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _10.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgUpdateParams;
                fromJSON(object: any): _10.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        max_memo_characters?: string | number | import("long").default;
                        tx_sig_limit?: string | number | import("long").default;
                        tx_size_cost_per_byte?: string | number | import("long").default;
                        sig_verify_cost_ed25519?: string | number | import("long").default;
                        sig_verify_cost_secp256k1?: string | number | import("long").default;
                    };
                }): _10.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _10.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgUpdateParamsResponse;
                fromJSON(_: any): _10.MsgUpdateParamsResponse;
                fromPartial(_: {}): _10.MsgUpdateParamsResponse;
            };
            QueryAccountsRequest: {
                encode(message: _9.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountsRequest;
                fromJSON(object: any): _9.QueryAccountsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _9.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _9.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountsResponse;
                fromJSON(object: any): _9.QueryAccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _9.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _9.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountRequest;
                fromJSON(object: any): _9.QueryAccountRequest;
                fromPartial(object: {
                    address?: string;
                }): _9.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _9.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountResponse;
                fromJSON(object: any): _9.QueryAccountResponse;
                fromPartial(object: {
                    account?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _9.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _9.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryParamsRequest;
                fromJSON(_: any): _9.QueryParamsRequest;
                fromPartial(_: {}): _9.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _9.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryParamsResponse;
                fromJSON(object: any): _9.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        max_memo_characters?: string | number | import("long").default;
                        tx_sig_limit?: string | number | import("long").default;
                        tx_size_cost_per_byte?: string | number | import("long").default;
                        sig_verify_cost_ed25519?: string | number | import("long").default;
                        sig_verify_cost_secp256k1?: string | number | import("long").default;
                    };
                }): _9.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _9.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryModuleAccountsRequest;
                fromJSON(_: any): _9.QueryModuleAccountsRequest;
                fromPartial(_: {}): _9.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _9.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryModuleAccountsResponse;
                fromJSON(object: any): _9.QueryModuleAccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _9.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _9.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _9.QueryModuleAccountByNameRequest;
                fromPartial(object: {
                    name?: string;
                }): _9.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _9.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _9.QueryModuleAccountByNameResponse;
                fromPartial(object: {
                    account?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _9.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _9.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Bech32PrefixRequest;
                fromJSON(_: any): _9.Bech32PrefixRequest;
                fromPartial(_: {}): _9.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _9.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Bech32PrefixResponse;
                fromJSON(object: any): _9.Bech32PrefixResponse;
                fromPartial(object: {
                    bech32_prefix?: string;
                }): _9.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _9.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AddressBytesToStringRequest;
                fromJSON(object: any): _9.AddressBytesToStringRequest;
                fromPartial(object: {
                    address_bytes?: Uint8Array;
                }): _9.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _9.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AddressBytesToStringResponse;
                fromJSON(object: any): _9.AddressBytesToStringResponse;
                fromPartial(object: {
                    address_string?: string;
                }): _9.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _9.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AddressStringToBytesRequest;
                fromJSON(object: any): _9.AddressStringToBytesRequest;
                fromPartial(object: {
                    address_string?: string;
                }): _9.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _9.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AddressStringToBytesResponse;
                fromJSON(object: any): _9.AddressStringToBytesResponse;
                fromPartial(object: {
                    address_bytes?: Uint8Array;
                }): _9.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _9.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _9.QueryAccountAddressByIDRequest;
                fromPartial(object: {
                    id?: string | number | import("long").default;
                    account_id?: string | number | import("long").default;
                }): _9.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _9.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _9.QueryAccountAddressByIDResponse;
                fromPartial(object: {
                    account_address?: string;
                }): _9.QueryAccountAddressByIDResponse;
            };
            QueryAccountInfoRequest: {
                encode(message: _9.QueryAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountInfoRequest;
                fromJSON(object: any): _9.QueryAccountInfoRequest;
                fromPartial(object: {
                    address?: string;
                }): _9.QueryAccountInfoRequest;
            };
            QueryAccountInfoResponse: {
                encode(message: _9.QueryAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountInfoResponse;
                fromJSON(object: any): _9.QueryAccountInfoResponse;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        account_number?: string | number | import("long").default;
                        sequence?: string | number | import("long").default;
                    };
                }): _9.QueryAccountInfoResponse;
            };
            GenesisState: {
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenesisState;
                fromJSON(object: any): _8.GenesisState;
                fromPartial(object: {
                    params?: {
                        max_memo_characters?: string | number | import("long").default;
                        tx_sig_limit?: string | number | import("long").default;
                        tx_size_cost_per_byte?: string | number | import("long").default;
                        sig_verify_cost_ed25519?: string | number | import("long").default;
                        sig_verify_cost_secp256k1?: string | number | import("long").default;
                    };
                    accounts?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _8.GenesisState;
            };
            BaseAccount: {
                encode(message: _7.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.BaseAccount;
                fromJSON(object: any): _7.BaseAccount;
                fromPartial(object: {
                    address?: string;
                    pub_key?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    account_number?: string | number | import("long").default;
                    sequence?: string | number | import("long").default;
                }): _7.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _7.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ModuleAccount;
                fromJSON(object: any): _7.ModuleAccount;
                fromPartial(object: {
                    base_account?: {
                        address?: string;
                        pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        account_number?: string | number | import("long").default;
                        sequence?: string | number | import("long").default;
                    };
                    name?: string;
                    permissions?: string[];
                }): _7.ModuleAccount;
            };
            ModuleCredential: {
                encode(message: _7.ModuleCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ModuleCredential;
                fromJSON(object: any): _7.ModuleCredential;
                fromPartial(object: {
                    module_name?: string;
                    derivation_keys?: Uint8Array[];
                }): _7.ModuleCredential;
            };
            Params: {
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Params;
                fromJSON(object: any): _7.Params;
                fromPartial(object: {
                    max_memo_characters?: string | number | import("long").default;
                    tx_sig_limit?: string | number | import("long").default;
                    tx_size_cost_per_byte?: string | number | import("long").default;
                    sig_verify_cost_ed25519?: string | number | import("long").default;
                    sig_verify_cost_secp256k1?: string | number | import("long").default;
                }): _7.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _264.MsgClientImpl;
            QueryClientImpl: typeof _243.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _14.QueryGrantsRequest): Promise<_14.QueryGrantsResponse>;
                granterGrants(request: _14.QueryGranterGrantsRequest): Promise<_14.QueryGranterGrantsResponse>;
                granteeGrants(request: _14.QueryGranteeGrantsRequest): Promise<_14.QueryGranteeGrantsResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useGrants: <TData = _14.QueryGrantsResponse>({ request, options }: _243.UseGrantsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useGranterGrants: <TData_1 = _14.QueryGranterGrantsResponse>({ request, options }: _243.UseGranterGrantsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useGranteeGrants: <TData_2 = _14.QueryGranteeGrantsResponse>({ request, options }: _243.UseGranteeGrantsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _15.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _15.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _15.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _15.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msg_type_url }: _15.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _15.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _15.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgGrant;
                fromJSON(object: any): _15.MsgGrant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                }): _15.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _15.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgExecResponse;
                fromJSON(object: any): _15.MsgExecResponse;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _15.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _15.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgExec;
                fromJSON(object: any): _15.MsgExec;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _15.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _15.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgGrantResponse;
                fromJSON(_: any): _15.MsgGrantResponse;
                fromPartial(_: {}): _15.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _15.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgRevoke;
                fromJSON(object: any): _15.MsgRevoke;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msg_type_url?: string;
                }): _15.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _15.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgRevokeResponse;
                fromJSON(_: any): _15.MsgRevokeResponse;
                fromPartial(_: {}): _15.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _14.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryGrantsRequest;
                fromJSON(object: any): _14.QueryGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msg_type_url?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _14.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _14.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryGrantsResponse;
                fromJSON(object: any): _14.QueryGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _14.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _14.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryGranterGrantsRequest;
                fromJSON(object: any): _14.QueryGranterGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _14.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _14.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryGranterGrantsResponse;
                fromJSON(object: any): _14.QueryGranterGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _14.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _14.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryGranteeGrantsRequest;
                fromJSON(object: any): _14.QueryGranteeGrantsRequest;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _14.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _14.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryGranteeGrantsResponse;
                fromJSON(object: any): _14.QueryGranteeGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _14.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _13.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GenesisState;
                fromJSON(object: any): _13.GenesisState;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                }): _13.GenesisState;
            };
            EventGrant: {
                encode(message: _12.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.EventGrant;
                fromJSON(object: any): _12.EventGrant;
                fromPartial(object: {
                    msg_type_url?: string;
                    granter?: string;
                    grantee?: string;
                }): _12.EventGrant;
            };
            EventRevoke: {
                encode(message: _12.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.EventRevoke;
                fromJSON(object: any): _12.EventRevoke;
                fromPartial(object: {
                    msg_type_url?: string;
                    granter?: string;
                    grantee?: string;
                }): _12.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _11.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GenericAuthorization;
                fromJSON(object: any): _11.GenericAuthorization;
                fromPartial(object: {
                    msg?: string;
                }): _11.GenericAuthorization;
            };
            Grant: {
                encode(message: _11.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Grant;
                fromJSON(object: any): _11.Grant;
                fromPartial(object: {
                    authorization?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    expiration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _11.Grant;
            };
            GrantAuthorization: {
                encode(message: _11.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GrantAuthorization;
                fromJSON(object: any): _11.GrantAuthorization;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    expiration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _11.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _11.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GrantQueueItem;
                fromJSON(object: any): _11.GrantQueueItem;
                fromPartial(object: {
                    msg_type_urls?: string[];
                }): _11.GrantQueueItem;
            };
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _244.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _17.AppOptionsRequest): Promise<_17.AppOptionsResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useAppOptions: <TData = _17.AppOptionsResponse>({ request, options }: _244.UseAppOptionsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            };
            AppOptionsRequest: {
                encode(_: _17.AppOptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AppOptionsRequest;
                fromJSON(_: any): _17.AppOptionsRequest;
                fromPartial(_: {}): _17.AppOptionsRequest;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _17.AppOptionsResponse_ModuleOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AppOptionsResponse_ModuleOptionsEntry;
                fromJSON(object: any): _17.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: {
                    key?: string;
                    value?: {
                        tx?: {
                            service?: string;
                            rpc_command_options?: {
                                rpc_method?: string;
                                use?: string;
                                long?: string;
                                short?: string;
                                example?: string;
                                alias?: string[];
                                suggest_for?: string[];
                                deprecated?: string;
                                version?: string;
                                flag_options?: {
                                    [x: string]: {
                                        name?: string;
                                        shorthand?: string;
                                        usage?: string;
                                        default_value?: string;
                                        no_opt_default_value?: string;
                                        deprecated?: string;
                                        shorthand_deprecated?: string;
                                        hidden?: boolean;
                                    };
                                };
                                positional_args?: {
                                    proto_field?: string;
                                    varargs?: boolean;
                                }[];
                                skip?: boolean;
                            }[];
                            sub_commands?: {
                                [x: string]: any;
                            };
                        };
                        query?: {
                            service?: string;
                            rpc_command_options?: {
                                rpc_method?: string;
                                use?: string;
                                long?: string;
                                short?: string;
                                example?: string;
                                alias?: string[];
                                suggest_for?: string[];
                                deprecated?: string;
                                version?: string;
                                flag_options?: {
                                    [x: string]: {
                                        name?: string;
                                        shorthand?: string;
                                        usage?: string;
                                        default_value?: string;
                                        no_opt_default_value?: string;
                                        deprecated?: string;
                                        shorthand_deprecated?: string;
                                        hidden?: boolean;
                                    };
                                };
                                positional_args?: {
                                    proto_field?: string;
                                    varargs?: boolean;
                                }[];
                                skip?: boolean;
                            }[];
                            sub_commands?: {
                                [x: string]: any;
                            };
                        };
                    };
                }): _17.AppOptionsResponse_ModuleOptionsEntry;
            };
            AppOptionsResponse: {
                encode(message: _17.AppOptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AppOptionsResponse;
                fromJSON(object: any): _17.AppOptionsResponse;
                fromPartial(object: {
                    module_options?: {
                        [x: string]: {
                            tx?: {
                                service?: string;
                                rpc_command_options?: {
                                    rpc_method?: string;
                                    use?: string;
                                    long?: string;
                                    short?: string;
                                    example?: string;
                                    alias?: string[];
                                    suggest_for?: string[];
                                    deprecated?: string;
                                    version?: string;
                                    flag_options?: {
                                        [x: string]: {
                                            name?: string;
                                            shorthand?: string;
                                            usage?: string;
                                            default_value?: string;
                                            no_opt_default_value?: string;
                                            deprecated?: string;
                                            shorthand_deprecated?: string;
                                            hidden?: boolean;
                                        };
                                    };
                                    positional_args?: {
                                        proto_field?: string;
                                        varargs?: boolean;
                                    }[];
                                    skip?: boolean;
                                }[];
                                sub_commands?: {
                                    [x: string]: any;
                                };
                            };
                            query?: {
                                service?: string;
                                rpc_command_options?: {
                                    rpc_method?: string;
                                    use?: string;
                                    long?: string;
                                    short?: string;
                                    example?: string;
                                    alias?: string[];
                                    suggest_for?: string[];
                                    deprecated?: string;
                                    version?: string;
                                    flag_options?: {
                                        [x: string]: {
                                            name?: string;
                                            shorthand?: string;
                                            usage?: string;
                                            default_value?: string;
                                            no_opt_default_value?: string;
                                            deprecated?: string;
                                            shorthand_deprecated?: string;
                                            hidden?: boolean;
                                        };
                                    };
                                    positional_args?: {
                                        proto_field?: string;
                                        varargs?: boolean;
                                    }[];
                                    skip?: boolean;
                                }[];
                                sub_commands?: {
                                    [x: string]: any;
                                };
                            };
                        };
                    };
                }): _17.AppOptionsResponse;
            };
            ModuleOptions: {
                encode(message: _16.ModuleOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ModuleOptions;
                fromJSON(object: any): _16.ModuleOptions;
                fromPartial(object: {
                    tx?: {
                        service?: string;
                        rpc_command_options?: {
                            rpc_method?: string;
                            use?: string;
                            long?: string;
                            short?: string;
                            example?: string;
                            alias?: string[];
                            suggest_for?: string[];
                            deprecated?: string;
                            version?: string;
                            flag_options?: {
                                [x: string]: {
                                    name?: string;
                                    shorthand?: string;
                                    usage?: string;
                                    default_value?: string;
                                    no_opt_default_value?: string;
                                    deprecated?: string;
                                    shorthand_deprecated?: string;
                                    hidden?: boolean;
                                };
                            };
                            positional_args?: {
                                proto_field?: string;
                                varargs?: boolean;
                            }[];
                            skip?: boolean;
                        }[];
                        sub_commands?: {
                            [x: string]: any;
                        };
                    };
                    query?: {
                        service?: string;
                        rpc_command_options?: {
                            rpc_method?: string;
                            use?: string;
                            long?: string;
                            short?: string;
                            example?: string;
                            alias?: string[];
                            suggest_for?: string[];
                            deprecated?: string;
                            version?: string;
                            flag_options?: {
                                [x: string]: {
                                    name?: string;
                                    shorthand?: string;
                                    usage?: string;
                                    default_value?: string;
                                    no_opt_default_value?: string;
                                    deprecated?: string;
                                    shorthand_deprecated?: string;
                                    hidden?: boolean;
                                };
                            };
                            positional_args?: {
                                proto_field?: string;
                                varargs?: boolean;
                            }[];
                            skip?: boolean;
                        }[];
                        sub_commands?: {
                            [x: string]: any;
                        };
                    };
                }): _16.ModuleOptions;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _16.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ServiceCommandDescriptor_SubCommandsEntry;
                fromJSON(object: any): _16.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: {
                    key?: string;
                    value?: {
                        service?: string;
                        rpc_command_options?: {
                            rpc_method?: string;
                            use?: string;
                            long?: string;
                            short?: string;
                            example?: string;
                            alias?: string[];
                            suggest_for?: string[];
                            deprecated?: string;
                            version?: string;
                            flag_options?: {
                                [x: string]: {
                                    name?: string;
                                    shorthand?: string;
                                    usage?: string;
                                    default_value?: string;
                                    no_opt_default_value?: string;
                                    deprecated?: string;
                                    shorthand_deprecated?: string;
                                    hidden?: boolean;
                                };
                            };
                            positional_args?: {
                                proto_field?: string;
                                varargs?: boolean;
                            }[];
                            skip?: boolean;
                        }[];
                        sub_commands?: {
                            [x: string]: any;
                        };
                    };
                }): _16.ServiceCommandDescriptor_SubCommandsEntry;
            };
            ServiceCommandDescriptor: {
                encode(message: _16.ServiceCommandDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ServiceCommandDescriptor;
                fromJSON(object: any): _16.ServiceCommandDescriptor;
                fromPartial(object: {
                    service?: string;
                    rpc_command_options?: {
                        rpc_method?: string;
                        use?: string;
                        long?: string;
                        short?: string;
                        example?: string;
                        alias?: string[];
                        suggest_for?: string[];
                        deprecated?: string;
                        version?: string;
                        flag_options?: {
                            [x: string]: {
                                name?: string;
                                shorthand?: string;
                                usage?: string;
                                default_value?: string;
                                no_opt_default_value?: string;
                                deprecated?: string;
                                shorthand_deprecated?: string;
                                hidden?: boolean;
                            };
                        };
                        positional_args?: {
                            proto_field?: string;
                            varargs?: boolean;
                        }[];
                        skip?: boolean;
                    }[];
                    sub_commands?: {
                        [x: string]: any;
                    };
                }): _16.ServiceCommandDescriptor;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _16.RpcCommandOptions_FlagOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.RpcCommandOptions_FlagOptionsEntry;
                fromJSON(object: any): _16.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: {
                    key?: string;
                    value?: {
                        name?: string;
                        shorthand?: string;
                        usage?: string;
                        default_value?: string;
                        no_opt_default_value?: string;
                        deprecated?: string;
                        shorthand_deprecated?: string;
                        hidden?: boolean;
                    };
                }): _16.RpcCommandOptions_FlagOptionsEntry;
            };
            RpcCommandOptions: {
                encode(message: _16.RpcCommandOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.RpcCommandOptions;
                fromJSON(object: any): _16.RpcCommandOptions;
                fromPartial(object: {
                    rpc_method?: string;
                    use?: string;
                    long?: string;
                    short?: string;
                    example?: string;
                    alias?: string[];
                    suggest_for?: string[];
                    deprecated?: string;
                    version?: string;
                    flag_options?: {
                        [x: string]: {
                            name?: string;
                            shorthand?: string;
                            usage?: string;
                            default_value?: string;
                            no_opt_default_value?: string;
                            deprecated?: string;
                            shorthand_deprecated?: string;
                            hidden?: boolean;
                        };
                    };
                    positional_args?: {
                        proto_field?: string;
                        varargs?: boolean;
                    }[];
                    skip?: boolean;
                }): _16.RpcCommandOptions;
            };
            FlagOptions: {
                encode(message: _16.FlagOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.FlagOptions;
                fromJSON(object: any): _16.FlagOptions;
                fromPartial(object: {
                    name?: string;
                    shorthand?: string;
                    usage?: string;
                    default_value?: string;
                    no_opt_default_value?: string;
                    deprecated?: string;
                    shorthand_deprecated?: string;
                    hidden?: boolean;
                }): _16.FlagOptions;
            };
            PositionalArgDescriptor: {
                encode(message: _16.PositionalArgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PositionalArgDescriptor;
                fromJSON(object: any): _16.PositionalArgDescriptor;
                fromPartial(object: {
                    proto_field?: string;
                    varargs?: boolean;
                }): _16.PositionalArgDescriptor;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _265.MsgClientImpl;
            QueryClientImpl: typeof _245.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _21.QueryBalanceRequest): Promise<_21.QueryBalanceResponse>;
                allBalances(request: _21.QueryAllBalancesRequest): Promise<_21.QueryAllBalancesResponse>;
                spendableBalances(request: _21.QuerySpendableBalancesRequest): Promise<_21.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _21.QuerySpendableBalanceByDenomRequest): Promise<_21.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _21.QueryTotalSupplyRequest): Promise<_21.QueryTotalSupplyResponse>;
                supplyOf(request: _21.QuerySupplyOfRequest): Promise<_21.QuerySupplyOfResponse>;
                params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                denomMetadata(request: _21.QueryDenomMetadataRequest): Promise<_21.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _21.QueryDenomsMetadataRequest): Promise<_21.QueryDenomsMetadataResponse>;
                denomOwners(request: _21.QueryDenomOwnersRequest): Promise<_21.QueryDenomOwnersResponse>;
                sendEnabled(request: _21.QuerySendEnabledRequest): Promise<_21.QuerySendEnabledResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useBalance: <TData = _21.QueryBalanceResponse>({ request, options }: _245.UseBalanceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useAllBalances: <TData_1 = _21.QueryAllBalancesResponse>({ request, options }: _245.UseAllBalancesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useSpendableBalances: <TData_2 = _21.QuerySpendableBalancesResponse>({ request, options }: _245.UseSpendableBalancesQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useSpendableBalanceByDenom: <TData_3 = _21.QuerySpendableBalanceByDenomResponse>({ request, options }: _245.UseSpendableBalanceByDenomQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useTotalSupply: <TData_4 = _21.QueryTotalSupplyResponse>({ request, options }: _245.UseTotalSupplyQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useSupplyOf: <TData_5 = _21.QuerySupplyOfResponse>({ request, options }: _245.UseSupplyOfQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useParams: <TData_6 = _21.QueryParamsResponse>({ request, options }: _245.UseParamsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useDenomMetadata: <TData_7 = _21.QueryDenomMetadataResponse>({ request, options }: _245.UseDenomMetadataQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                useDenomsMetadata: <TData_8 = _21.QueryDenomsMetadataResponse>({ request, options }: _245.UseDenomsMetadataQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                useDenomOwners: <TData_9 = _21.QueryDenomOwnersResponse>({ request, options }: _245.UseDenomOwnersQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
                useSendEnabled: <TData_10 = _21.QuerySendEnabledResponse>({ request, options }: _245.UseSendEnabledQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _22.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _22.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _22.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _22.MsgSend): {
                        typeUrl: string;
                        value: _22.MsgSend;
                    };
                    multiSend(value: _22.MsgMultiSend): {
                        typeUrl: string;
                        value: _22.MsgMultiSend;
                    };
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: _22.MsgUpdateParams;
                    };
                    setSendEnabled(value: _22.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _22.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _22.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _22.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _22.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _22.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _22.MsgSend): {
                        typeUrl: string;
                        value: _22.MsgSend;
                    };
                    multiSend(value: _22.MsgMultiSend): {
                        typeUrl: string;
                        value: _22.MsgMultiSend;
                    };
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: _22.MsgUpdateParams;
                    };
                    setSendEnabled(value: _22.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _22.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ from_address, to_address, amount }: _22.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _22.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _22.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _22.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _22.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            send_enabled: {
                                denom: string;
                                enabled: boolean;
                            }[];
                            default_send_enabled: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            send_enabled: {
                                denom: string;
                                enabled: boolean;
                            }[];
                            default_send_enabled: boolean;
                        };
                    }) => _22.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: ({ authority, send_enabled, use_default_for }: _22.MsgSetSendEnabled) => {
                        authority: string;
                        send_enabled: {
                            denom: string;
                            enabled: boolean;
                        }[];
                        use_default_for: string[];
                    };
                    fromAmino: ({ authority, send_enabled, use_default_for }: {
                        authority: string;
                        send_enabled: {
                            denom: string;
                            enabled: boolean;
                        }[];
                        use_default_for: string[];
                    }) => _22.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                encode(message: _22.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgSend;
                fromJSON(object: any): _22.MsgSend;
                fromPartial(object: {
                    from_address?: string;
                    to_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _22.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _22.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgSendResponse;
                fromJSON(_: any): _22.MsgSendResponse;
                fromPartial(_: {}): _22.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _22.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgMultiSend;
                fromJSON(object: any): _22.MsgMultiSend;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _22.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _22.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgMultiSendResponse;
                fromJSON(_: any): _22.MsgMultiSendResponse;
                fromPartial(_: {}): _22.MsgMultiSendResponse;
            };
            MsgUpdateParams: {
                encode(message: _22.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgUpdateParams;
                fromJSON(object: any): _22.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        send_enabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        default_send_enabled?: boolean;
                    };
                }): _22.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _22.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgUpdateParamsResponse;
                fromJSON(_: any): _22.MsgUpdateParamsResponse;
                fromPartial(_: {}): _22.MsgUpdateParamsResponse;
            };
            MsgSetSendEnabled: {
                encode(message: _22.MsgSetSendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgSetSendEnabled;
                fromJSON(object: any): _22.MsgSetSendEnabled;
                fromPartial(object: {
                    authority?: string;
                    send_enabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    use_default_for?: string[];
                }): _22.MsgSetSendEnabled;
            };
            MsgSetSendEnabledResponse: {
                encode(_: _22.MsgSetSendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgSetSendEnabledResponse;
                fromJSON(_: any): _22.MsgSetSendEnabledResponse;
                fromPartial(_: {}): _22.MsgSetSendEnabledResponse;
            };
            QueryBalanceRequest: {
                encode(message: _21.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryBalanceRequest;
                fromJSON(object: any): _21.QueryBalanceRequest;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _21.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _21.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryBalanceResponse;
                fromJSON(object: any): _21.QueryBalanceResponse;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _21.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _21.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryAllBalancesRequest;
                fromJSON(object: any): _21.QueryAllBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _21.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _21.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryAllBalancesResponse;
                fromJSON(object: any): _21.QueryAllBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _21.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _21.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QuerySpendableBalancesRequest;
                fromJSON(object: any): _21.QuerySpendableBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _21.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _21.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QuerySpendableBalancesResponse;
                fromJSON(object: any): _21.QuerySpendableBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _21.QuerySpendableBalancesResponse;
            };
            QuerySpendableBalanceByDenomRequest: {
                encode(message: _21.QuerySpendableBalanceByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QuerySpendableBalanceByDenomRequest;
                fromJSON(object: any): _21.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _21.QuerySpendableBalanceByDenomRequest;
            };
            QuerySpendableBalanceByDenomResponse: {
                encode(message: _21.QuerySpendableBalanceByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QuerySpendableBalanceByDenomResponse;
                fromJSON(object: any): _21.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _21.QuerySpendableBalanceByDenomResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _21.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryTotalSupplyRequest;
                fromJSON(object: any): _21.QueryTotalSupplyRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _21.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _21.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryTotalSupplyResponse;
                fromJSON(object: any): _21.QueryTotalSupplyResponse;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _21.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _21.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QuerySupplyOfRequest;
                fromJSON(object: any): _21.QuerySupplyOfRequest;
                fromPartial(object: {
                    denom?: string;
                }): _21.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _21.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QuerySupplyOfResponse;
                fromJSON(object: any): _21.QuerySupplyOfResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _21.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _21.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryParamsRequest;
                fromJSON(_: any): _21.QueryParamsRequest;
                fromPartial(_: {}): _21.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _21.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryParamsResponse;
                fromJSON(object: any): _21.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        send_enabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        default_send_enabled?: boolean;
                    };
                }): _21.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _21.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryDenomsMetadataRequest;
                fromJSON(object: any): _21.QueryDenomsMetadataRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _21.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _21.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryDenomsMetadataResponse;
                fromJSON(object: any): _21.QueryDenomsMetadataResponse;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denom_units?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uri_hash?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _21.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _21.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryDenomMetadataRequest;
                fromJSON(object: any): _21.QueryDenomMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _21.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _21.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryDenomMetadataResponse;
                fromJSON(object: any): _21.QueryDenomMetadataResponse;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denom_units?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uri_hash?: string;
                    };
                }): _21.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _21.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryDenomOwnersRequest;
                fromJSON(object: any): _21.QueryDenomOwnersRequest;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _21.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _21.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.DenomOwner;
                fromJSON(object: any): _21.DenomOwner;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _21.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _21.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryDenomOwnersResponse;
                fromJSON(object: any): _21.QueryDenomOwnersResponse;
                fromPartial(object: {
                    denom_owners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _21.QueryDenomOwnersResponse;
            };
            QuerySendEnabledRequest: {
                encode(message: _21.QuerySendEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QuerySendEnabledRequest;
                fromJSON(object: any): _21.QuerySendEnabledRequest;
                fromPartial(object: {
                    denoms?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _21.QuerySendEnabledRequest;
            };
            QuerySendEnabledResponse: {
                encode(message: _21.QuerySendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QuerySendEnabledResponse;
                fromJSON(object: any): _21.QuerySendEnabledResponse;
                fromPartial(object: {
                    send_enabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _21.QuerySendEnabledResponse;
            };
            GenesisState: {
                encode(message: _20.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.GenesisState;
                fromJSON(object: any): _20.GenesisState;
                fromPartial(object: {
                    params?: {
                        send_enabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        default_send_enabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denom_metadata?: {
                        description?: string;
                        denom_units?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uri_hash?: string;
                    }[];
                    send_enabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                }): _20.GenesisState;
            };
            Balance: {
                encode(message: _20.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Balance;
                fromJSON(object: any): _20.Balance;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _20.Balance;
            };
            Params: {
                encode(message: _19.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Params;
                fromJSON(object: any): _19.Params;
                fromPartial(object: {
                    send_enabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    default_send_enabled?: boolean;
                }): _19.Params;
            };
            SendEnabled: {
                encode(message: _19.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SendEnabled;
                fromJSON(object: any): _19.SendEnabled;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _19.SendEnabled;
            };
            Input: {
                encode(message: _19.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Input;
                fromJSON(object: any): _19.Input;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _19.Input;
            };
            Output: {
                encode(message: _19.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Output;
                fromJSON(object: any): _19.Output;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _19.Output;
            };
            Supply: {
                encode(message: _19.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Supply;
                fromJSON(object: any): _19.Supply;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _19.Supply;
            };
            DenomUnit: {
                encode(message: _19.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.DenomUnit;
                fromJSON(object: any): _19.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _19.DenomUnit;
            };
            Metadata: {
                encode(message: _19.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Metadata;
                fromJSON(object: any): _19.Metadata;
                fromPartial(object: {
                    description?: string;
                    denom_units?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uri_hash?: string;
                }): _19.Metadata;
            };
            SendAuthorization: {
                encode(message: _18.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SendAuthorization;
                fromJSON(object: any): _18.SendAuthorization;
                fromPartial(object: {
                    spend_limit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    allow_list?: string[];
                }): _18.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _23.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.TxResponse;
                    fromJSON(object: any): _23.TxResponse;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        raw_log?: string;
                        logs?: {
                            msg_index?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gas_wanted?: string | number | import("long").default;
                        gas_used?: string | number | import("long").default;
                        tx?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                    }): _23.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _23.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ABCIMessageLog;
                    fromJSON(object: any): _23.ABCIMessageLog;
                    fromPartial(object: {
                        msg_index?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _23.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _23.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.StringEvent;
                    fromJSON(object: any): _23.StringEvent;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _23.StringEvent;
                };
                Attribute: {
                    encode(message: _23.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Attribute;
                    fromJSON(object: any): _23.Attribute;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _23.Attribute;
                };
                GasInfo: {
                    encode(message: _23.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GasInfo;
                    fromJSON(object: any): _23.GasInfo;
                    fromPartial(object: {
                        gas_wanted?: string | number | import("long").default;
                        gas_used?: string | number | import("long").default;
                    }): _23.GasInfo;
                };
                Result: {
                    encode(message: _23.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Result;
                    fromJSON(object: any): _23.Result;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                        msg_responses?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                    }): _23.Result;
                };
                SimulationResponse: {
                    encode(message: _23.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SimulationResponse;
                    fromJSON(object: any): _23.SimulationResponse;
                    fromPartial(object: {
                        gas_info?: {
                            gas_wanted?: string | number | import("long").default;
                            gas_used?: string | number | import("long").default;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                    index?: boolean;
                                }[];
                            }[];
                            msg_responses?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _23.SimulationResponse;
                };
                MsgData: {
                    encode(message: _23.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgData;
                    fromJSON(object: any): _23.MsgData;
                    fromPartial(object: {
                        msg_type?: string;
                        data?: Uint8Array;
                    }): _23.MsgData;
                };
                TxMsgData: {
                    encode(message: _23.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.TxMsgData;
                    fromJSON(object: any): _23.TxMsgData;
                    fromPartial(object: {
                        data?: {
                            msg_type?: string;
                            data?: Uint8Array;
                        }[];
                        msg_responses?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                    }): _23.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _23.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SearchTxsResult;
                    fromJSON(object: any): _23.SearchTxsResult;
                    fromPartial(object: {
                        total_count?: string | number | import("long").default;
                        count?: string | number | import("long").default;
                        page_number?: string | number | import("long").default;
                        page_total?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        txs?: {
                            height?: string | number | import("long").default;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            raw_log?: string;
                            logs?: {
                                msg_index?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gas_wanted?: string | number | import("long").default;
                            gas_used?: string | number | import("long").default;
                            tx?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _23.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _24.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Pairs;
                    fromJSON(object: any): _24.Pairs;
                    fromPartial(object: {
                        pairs?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _24.Pairs;
                };
                Pair: {
                    encode(message: _24.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Pair;
                    fromJSON(object: any): _24.Pair;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _24.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _246.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _25.ConfigRequest): Promise<_25.ConfigResponse>;
                };
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useConfig: <TData = _25.ConfigResponse>({ request, options }: _246.UseConfigQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                };
                LCDQueryClient: typeof _225.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _25.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ConfigRequest;
                    fromJSON(_: any): _25.ConfigRequest;
                    fromPartial(_: {}): _25.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _25.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ConfigResponse;
                    fromJSON(object: any): _25.ConfigResponse;
                    fromPartial(object: {
                        minimum_gas_price?: string;
                    }): _25.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _26.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.PageRequest;
                    fromJSON(object: any): _26.PageRequest;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    }): _26.PageRequest;
                };
                PageResponse: {
                    encode(message: _26.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.PageResponse;
                    fromJSON(object: any): _26.PageResponse;
                    fromPartial(object: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    }): _26.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _27.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ListAllInterfacesRequest;
                    fromJSON(_: any): _27.ListAllInterfacesRequest;
                    fromPartial(_: {}): _27.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _27.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ListAllInterfacesResponse;
                    fromJSON(object: any): _27.ListAllInterfacesResponse;
                    fromPartial(object: {
                        interface_names?: string[];
                    }): _27.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _27.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ListImplementationsRequest;
                    fromJSON(object: any): _27.ListImplementationsRequest;
                    fromPartial(object: {
                        interface_name?: string;
                    }): _27.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _27.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ListImplementationsResponse;
                    fromJSON(object: any): _27.ListImplementationsResponse;
                    fromPartial(object: {
                        implementation_message_names?: string[];
                    }): _27.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _28.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.AppDescriptor;
                    fromJSON(object: any): _28.AppDescriptor;
                    fromPartial(object: {
                        authn?: {
                            sign_modes?: {
                                name?: string;
                                number?: number;
                                authn_info_provider_method_fullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interface_accepting_messages?: {
                                    fullname?: string;
                                    field_descriptor_names?: string[];
                                }[];
                                interface_implementers?: {
                                    fullname?: string;
                                    type_url?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32_account_address_prefix?: string;
                        };
                        query_services?: {
                            query_services?: {
                                fullname?: string;
                                is_module?: boolean;
                                methods?: {
                                    name?: string;
                                    full_query_path?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msg_type_url?: string;
                            }[];
                        };
                    }): _28.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _28.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.TxDescriptor;
                    fromJSON(object: any): _28.TxDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msg_type_url?: string;
                        }[];
                    }): _28.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _28.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.AuthnDescriptor;
                    fromJSON(object: any): _28.AuthnDescriptor;
                    fromPartial(object: {
                        sign_modes?: {
                            name?: string;
                            number?: number;
                            authn_info_provider_method_fullname?: string;
                        }[];
                    }): _28.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _28.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.SigningModeDescriptor;
                    fromJSON(object: any): _28.SigningModeDescriptor;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authn_info_provider_method_fullname?: string;
                    }): _28.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _28.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ChainDescriptor;
                    fromJSON(object: any): _28.ChainDescriptor;
                    fromPartial(object: {
                        id?: string;
                    }): _28.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _28.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.CodecDescriptor;
                    fromJSON(object: any): _28.CodecDescriptor;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interface_accepting_messages?: {
                                fullname?: string;
                                field_descriptor_names?: string[];
                            }[];
                            interface_implementers?: {
                                fullname?: string;
                                type_url?: string;
                            }[];
                        }[];
                    }): _28.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _28.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.InterfaceDescriptor;
                    fromJSON(object: any): _28.InterfaceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        interface_accepting_messages?: {
                            fullname?: string;
                            field_descriptor_names?: string[];
                        }[];
                        interface_implementers?: {
                            fullname?: string;
                            type_url?: string;
                        }[];
                    }): _28.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _28.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _28.InterfaceImplementerDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        type_url?: string;
                    }): _28.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _28.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _28.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        field_descriptor_names?: string[];
                    }): _28.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _28.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ConfigurationDescriptor;
                    fromJSON(object: any): _28.ConfigurationDescriptor;
                    fromPartial(object: {
                        bech32_account_address_prefix?: string;
                    }): _28.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _28.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgDescriptor;
                    fromJSON(object: any): _28.MsgDescriptor;
                    fromPartial(object: {
                        msg_type_url?: string;
                    }): _28.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _28.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _28.GetAuthnDescriptorRequest;
                    fromPartial(_: {}): _28.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _28.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _28.GetAuthnDescriptorResponse;
                    fromPartial(object: {
                        authn?: {
                            sign_modes?: {
                                name?: string;
                                number?: number;
                                authn_info_provider_method_fullname?: string;
                            }[];
                        };
                    }): _28.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _28.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetChainDescriptorRequest;
                    fromJSON(_: any): _28.GetChainDescriptorRequest;
                    fromPartial(_: {}): _28.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _28.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetChainDescriptorResponse;
                    fromJSON(object: any): _28.GetChainDescriptorResponse;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _28.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _28.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetCodecDescriptorRequest;
                    fromJSON(_: any): _28.GetCodecDescriptorRequest;
                    fromPartial(_: {}): _28.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _28.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetCodecDescriptorResponse;
                    fromJSON(object: any): _28.GetCodecDescriptorResponse;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interface_accepting_messages?: {
                                    fullname?: string;
                                    field_descriptor_names?: string[];
                                }[];
                                interface_implementers?: {
                                    fullname?: string;
                                    type_url?: string;
                                }[];
                            }[];
                        };
                    }): _28.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _28.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _28.GetConfigurationDescriptorRequest;
                    fromPartial(_: {}): _28.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _28.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _28.GetConfigurationDescriptorResponse;
                    fromPartial(object: {
                        config?: {
                            bech32_account_address_prefix?: string;
                        };
                    }): _28.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _28.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _28.GetQueryServicesDescriptorRequest;
                    fromPartial(_: {}): _28.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _28.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _28.GetQueryServicesDescriptorResponse;
                    fromPartial(object: {
                        queries?: {
                            query_services?: {
                                fullname?: string;
                                is_module?: boolean;
                                methods?: {
                                    name?: string;
                                    full_query_path?: string;
                                }[];
                            }[];
                        };
                    }): _28.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _28.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetTxDescriptorRequest;
                    fromJSON(_: any): _28.GetTxDescriptorRequest;
                    fromPartial(_: {}): _28.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _28.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetTxDescriptorResponse;
                    fromJSON(object: any): _28.GetTxDescriptorResponse;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msg_type_url?: string;
                            }[];
                        };
                    }): _28.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _28.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryServicesDescriptor;
                    fromJSON(object: any): _28.QueryServicesDescriptor;
                    fromPartial(object: {
                        query_services?: {
                            fullname?: string;
                            is_module?: boolean;
                            methods?: {
                                name?: string;
                                full_query_path?: string;
                            }[];
                        }[];
                    }): _28.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _28.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryServiceDescriptor;
                    fromJSON(object: any): _28.QueryServiceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        is_module?: boolean;
                        methods?: {
                            name?: string;
                            full_query_path?: string;
                        }[];
                    }): _28.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _28.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryMethodDescriptor;
                    fromJSON(object: any): _28.QueryMethodDescriptor;
                    fromPartial(object: {
                        name?: string;
                        full_query_path?: string;
                    }): _28.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _29.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Snapshot;
                    fromJSON(object: any): _29.Snapshot;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: {
                            chunk_hashes?: Uint8Array[];
                        };
                    }): _29.Snapshot;
                };
                Metadata: {
                    encode(message: _29.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Metadata;
                    fromJSON(object: any): _29.Metadata;
                    fromPartial(object: {
                        chunk_hashes?: Uint8Array[];
                    }): _29.Metadata;
                };
                SnapshotItem: {
                    encode(message: _29.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotItem;
                    fromJSON(object: any): _29.SnapshotItem;
                    fromPartial(object: {
                        store?: {
                            name?: string;
                        };
                        iavl?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            version?: string | number | import("long").default;
                            height?: number;
                        };
                        extension?: {
                            name?: string;
                            format?: number;
                        };
                        extension_payload?: {
                            payload?: Uint8Array;
                        };
                        kv?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        };
                        schema?: {
                            keys?: Uint8Array[];
                        };
                    }): _29.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _29.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotStoreItem;
                    fromJSON(object: any): _29.SnapshotStoreItem;
                    fromPartial(object: {
                        name?: string;
                    }): _29.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _29.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotIAVLItem;
                    fromJSON(object: any): _29.SnapshotIAVLItem;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        version?: string | number | import("long").default;
                        height?: number;
                    }): _29.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _29.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotExtensionMeta;
                    fromJSON(object: any): _29.SnapshotExtensionMeta;
                    fromPartial(object: {
                        name?: string;
                        format?: number;
                    }): _29.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _29.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotExtensionPayload;
                    fromJSON(object: any): _29.SnapshotExtensionPayload;
                    fromPartial(object: {
                        payload?: Uint8Array;
                    }): _29.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _29.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotKVItem;
                    fromJSON(object: any): _29.SnapshotKVItem;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _29.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _29.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotSchema;
                    fromJSON(object: any): _29.SnapshotSchema;
                    fromPartial(object: {
                        keys?: Uint8Array[];
                    }): _29.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _31.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.StoreKVPair;
                    fromJSON(object: any): _31.StoreKVPair;
                    fromPartial(object: {
                        store_key?: string;
                        delete?: boolean;
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _31.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _31.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.BlockMetadata;
                    fromJSON(object: any): _31.BlockMetadata;
                    fromPartial(object: {
                        request_begin_block?: {
                            hash?: Uint8Array;
                            header?: {
                                version?: {
                                    block?: string | number | import("long").default;
                                    app?: string | number | import("long").default;
                                };
                                chain_id?: string;
                                height?: string | number | import("long").default;
                                time?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: Uint8Array;
                            };
                            last_commit_info?: {
                                round?: number;
                                votes?: {
                                    validator?: {
                                        address?: Uint8Array;
                                        power?: string | number | import("long").default;
                                    };
                                    signed_last_block?: boolean;
                                }[];
                            };
                            byzantine_validators?: {
                                type?: import("../tendermint/abci/types").MisbehaviorType;
                                validator?: {
                                    address?: Uint8Array;
                                    power?: string | number | import("long").default;
                                };
                                height?: string | number | import("long").default;
                                time?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                total_voting_power?: string | number | import("long").default;
                            }[];
                        };
                        response_begin_block?: {
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                    index?: boolean;
                                }[];
                            }[];
                        };
                        deliver_txs?: {
                            request?: {
                                tx?: Uint8Array;
                            };
                            response?: {
                                code?: number;
                                data?: Uint8Array;
                                log?: string;
                                info?: string;
                                gas_wanted?: string | number | import("long").default;
                                gas_used?: string | number | import("long").default;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                        index?: boolean;
                                    }[];
                                }[];
                                codespace?: string;
                            };
                        }[];
                        request_end_block?: {
                            height?: string | number | import("long").default;
                        };
                        response_end_block?: {
                            validator_updates?: {
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                power?: string | number | import("long").default;
                            }[];
                            consensus_param_updates?: {
                                block?: {
                                    max_bytes?: string | number | import("long").default;
                                    max_gas?: string | number | import("long").default;
                                };
                                evidence?: {
                                    max_age_num_blocks?: string | number | import("long").default;
                                    max_age_duration?: {
                                        seconds?: string | number | import("long").default;
                                        nanos?: number;
                                    };
                                    max_bytes?: string | number | import("long").default;
                                };
                                validator?: {
                                    pub_key_types?: string[];
                                };
                                version?: {
                                    app?: string | number | import("long").default;
                                };
                            };
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                    index?: boolean;
                                }[];
                            }[];
                        };
                        response_commit?: {
                            data?: Uint8Array;
                            retain_height?: string | number | import("long").default;
                        };
                    }): _31.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _31.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.BlockMetadata_DeliverTx;
                    fromJSON(object: any): _31.BlockMetadata_DeliverTx;
                    fromPartial(object: {
                        request?: {
                            tx?: Uint8Array;
                        };
                        response?: {
                            code?: number;
                            data?: Uint8Array;
                            log?: string;
                            info?: string;
                            gas_wanted?: string | number | import("long").default;
                            gas_used?: string | number | import("long").default;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                    index?: boolean;
                                }[];
                            }[];
                            codespace?: string;
                        };
                    }): _31.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _30.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.CommitInfo;
                    fromJSON(object: any): _30.CommitInfo;
                    fromPartial(object: {
                        version?: string | number | import("long").default;
                        store_infos?: {
                            name?: string;
                            commit_id?: {
                                version?: string | number | import("long").default;
                                hash?: Uint8Array;
                            };
                        }[];
                        timestamp?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }): _30.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _30.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.StoreInfo;
                    fromJSON(object: any): _30.StoreInfo;
                    fromPartial(object: {
                        name?: string;
                        commit_id?: {
                            version?: string | number | import("long").default;
                            hash?: Uint8Array;
                        };
                    }): _30.StoreInfo;
                };
                CommitID: {
                    encode(message: _30.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.CommitID;
                    fromJSON(object: any): _30.CommitID;
                    fromPartial(object: {
                        version?: string | number | import("long").default;
                        hash?: Uint8Array;
                    }): _30.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _247.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _32.GetNodeInfoRequest): Promise<_32.GetNodeInfoResponse>;
                    getSyncing(request?: _32.GetSyncingRequest): Promise<_32.GetSyncingResponse>;
                    getLatestBlock(request?: _32.GetLatestBlockRequest): Promise<_32.GetLatestBlockResponse>;
                    getBlockByHeight(request: _32.GetBlockByHeightRequest): Promise<_32.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _32.GetLatestValidatorSetRequest): Promise<_32.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _32.GetValidatorSetByHeightRequest): Promise<_32.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _32.ABCIQueryRequest): Promise<_32.ABCIQueryResponse>;
                };
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useGetNodeInfo: <TData = _32.GetNodeInfoResponse>({ request, options }: _247.UseGetNodeInfoQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useGetSyncing: <TData_1 = _32.GetSyncingResponse>({ request, options }: _247.UseGetSyncingQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useGetLatestBlock: <TData_2 = _32.GetLatestBlockResponse>({ request, options }: _247.UseGetLatestBlockQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useGetBlockByHeight: <TData_3 = _32.GetBlockByHeightResponse>({ request, options }: _247.UseGetBlockByHeightQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useGetLatestValidatorSet: <TData_4 = _32.GetLatestValidatorSetResponse>({ request, options }: _247.UseGetLatestValidatorSetQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                    useGetValidatorSetByHeight: <TData_5 = _32.GetValidatorSetByHeightResponse>({ request, options }: _247.UseGetValidatorSetByHeightQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                    useABCIQuery: <TData_6 = _32.ABCIQueryResponse>({ request, options }: _247.UseABCIQueryQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                };
                LCDQueryClient: typeof _226.LCDQueryClient;
                Block: {
                    encode(message: _33.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Block;
                    fromJSON(object: any): _33.Block;
                    fromPartial(object: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").default;
                                app?: string | number | import("long").default;
                            };
                            chain_id?: string;
                            height?: string | number | import("long").default;
                            time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            last_block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            last_commit_hash?: Uint8Array;
                            data_hash?: Uint8Array;
                            validators_hash?: Uint8Array;
                            next_validators_hash?: Uint8Array;
                            consensus_hash?: Uint8Array;
                            app_hash?: Uint8Array;
                            last_results_hash?: Uint8Array;
                            evidence_hash?: Uint8Array;
                            proposer_address?: string;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicate_vote_evidence?: {
                                    vote_a?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long").default;
                                        round?: number;
                                        block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: {
                                            seconds?: string | number | import("long").default;
                                            nanos?: number;
                                        };
                                        validator_address?: Uint8Array;
                                        validator_index?: number;
                                        signature?: Uint8Array;
                                    };
                                    vote_b?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long").default;
                                        round?: number;
                                        block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: {
                                            seconds?: string | number | import("long").default;
                                            nanos?: number;
                                        };
                                        validator_address?: Uint8Array;
                                        validator_index?: number;
                                        signature?: Uint8Array;
                                    };
                                    total_voting_power?: string | number | import("long").default;
                                    validator_power?: string | number | import("long").default;
                                    timestamp?: {
                                        seconds?: string | number | import("long").default;
                                        nanos?: number;
                                    };
                                };
                                light_client_attack_evidence?: {
                                    conflicting_block?: {
                                        signed_header?: {
                                            header?: {
                                                version?: {
                                                    block?: string | number | import("long").default;
                                                    app?: string | number | import("long").default;
                                                };
                                                chain_id?: string;
                                                height?: string | number | import("long").default;
                                                time?: {
                                                    seconds?: string | number | import("long").default;
                                                    nanos?: number;
                                                };
                                                last_block_id?: {
                                                    hash?: Uint8Array;
                                                    part_set_header?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                last_commit_hash?: Uint8Array;
                                                data_hash?: Uint8Array;
                                                validators_hash?: Uint8Array;
                                                next_validators_hash?: Uint8Array;
                                                consensus_hash?: Uint8Array;
                                                app_hash?: Uint8Array;
                                                last_results_hash?: Uint8Array;
                                                evidence_hash?: Uint8Array;
                                                proposer_address?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: string | number | import("long").default;
                                                round?: number;
                                                block_id?: {
                                                    hash?: Uint8Array;
                                                    part_set_header?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validator_address?: Uint8Array;
                                                    timestamp?: {
                                                        seconds?: string | number | import("long").default;
                                                        nanos?: number;
                                                    };
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validator_set?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pub_key?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                voting_power?: string | number | import("long").default;
                                                proposer_priority?: string | number | import("long").default;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pub_key?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                voting_power?: string | number | import("long").default;
                                                proposer_priority?: string | number | import("long").default;
                                            };
                                            total_voting_power?: string | number | import("long").default;
                                        };
                                    };
                                    common_height?: string | number | import("long").default;
                                    byzantine_validators?: {
                                        address?: Uint8Array;
                                        pub_key?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        voting_power?: string | number | import("long").default;
                                        proposer_priority?: string | number | import("long").default;
                                    }[];
                                    total_voting_power?: string | number | import("long").default;
                                    timestamp?: {
                                        seconds?: string | number | import("long").default;
                                        nanos?: number;
                                    };
                                };
                            }[];
                        };
                        last_commit?: {
                            height?: string | number | import("long").default;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                validator_address?: Uint8Array;
                                timestamp?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                signature?: Uint8Array;
                            }[];
                        };
                    }): _33.Block;
                };
                Header: {
                    encode(message: _33.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Header;
                    fromJSON(object: any): _33.Header;
                    fromPartial(object: {
                        version?: {
                            block?: string | number | import("long").default;
                            app?: string | number | import("long").default;
                        };
                        chain_id?: string;
                        height?: string | number | import("long").default;
                        time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        last_block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        last_commit_hash?: Uint8Array;
                        data_hash?: Uint8Array;
                        validators_hash?: Uint8Array;
                        next_validators_hash?: Uint8Array;
                        consensus_hash?: Uint8Array;
                        app_hash?: Uint8Array;
                        last_results_hash?: Uint8Array;
                        evidence_hash?: Uint8Array;
                        proposer_address?: string;
                    }): _33.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _32.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _32.GetValidatorSetByHeightRequest;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _32.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _32.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _32.GetValidatorSetByHeightResponse;
                    fromPartial(object: {
                        block_height?: string | number | import("long").default;
                        validators?: {
                            address?: string;
                            pub_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            voting_power?: string | number | import("long").default;
                            proposer_priority?: string | number | import("long").default;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _32.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _32.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _32.GetLatestValidatorSetRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _32.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _32.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _32.GetLatestValidatorSetResponse;
                    fromPartial(object: {
                        block_height?: string | number | import("long").default;
                        validators?: {
                            address?: string;
                            pub_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            voting_power?: string | number | import("long").default;
                            proposer_priority?: string | number | import("long").default;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _32.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _32.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Validator;
                    fromJSON(object: any): _32.Validator;
                    fromPartial(object: {
                        address?: string;
                        pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        voting_power?: string | number | import("long").default;
                        proposer_priority?: string | number | import("long").default;
                    }): _32.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _32.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetBlockByHeightRequest;
                    fromJSON(object: any): _32.GetBlockByHeightRequest;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                    }): _32.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _32.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetBlockByHeightResponse;
                    fromJSON(object: any): _32.GetBlockByHeightResponse;
                    fromPartial(object: {
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").default;
                                    app?: string | number | import("long").default;
                                };
                                chain_id?: string;
                                height?: string | number | import("long").default;
                                time?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicate_vote_evidence?: {
                                        vote_a?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            block_id?: {
                                                hash?: Uint8Array;
                                                part_set_header?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: string | number | import("long").default;
                                                nanos?: number;
                                            };
                                            validator_address?: Uint8Array;
                                            validator_index?: number;
                                            signature?: Uint8Array;
                                        };
                                        vote_b?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            block_id?: {
                                                hash?: Uint8Array;
                                                part_set_header?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: string | number | import("long").default;
                                                nanos?: number;
                                            };
                                            validator_address?: Uint8Array;
                                            validator_index?: number;
                                            signature?: Uint8Array;
                                        };
                                        total_voting_power?: string | number | import("long").default;
                                        validator_power?: string | number | import("long").default;
                                        timestamp?: {
                                            seconds?: string | number | import("long").default;
                                            nanos?: number;
                                        };
                                    };
                                    light_client_attack_evidence?: {
                                        conflicting_block?: {
                                            signed_header?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").default;
                                                        app?: string | number | import("long").default;
                                                    };
                                                    chain_id?: string;
                                                    height?: string | number | import("long").default;
                                                    time?: {
                                                        seconds?: string | number | import("long").default;
                                                        nanos?: number;
                                                    };
                                                    last_block_id?: {
                                                        hash?: Uint8Array;
                                                        part_set_header?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    last_commit_hash?: Uint8Array;
                                                    data_hash?: Uint8Array;
                                                    validators_hash?: Uint8Array;
                                                    next_validators_hash?: Uint8Array;
                                                    consensus_hash?: Uint8Array;
                                                    app_hash?: Uint8Array;
                                                    last_results_hash?: Uint8Array;
                                                    evidence_hash?: Uint8Array;
                                                    proposer_address?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: string | number | import("long").default;
                                                    round?: number;
                                                    block_id?: {
                                                        hash?: Uint8Array;
                                                        part_set_header?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validator_address?: Uint8Array;
                                                        timestamp?: {
                                                            seconds?: string | number | import("long").default;
                                                            nanos?: number;
                                                        };
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validator_set?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pub_key?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    voting_power?: string | number | import("long").default;
                                                    proposer_priority?: string | number | import("long").default;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pub_key?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    voting_power?: string | number | import("long").default;
                                                    proposer_priority?: string | number | import("long").default;
                                                };
                                                total_voting_power?: string | number | import("long").default;
                                            };
                                        };
                                        common_height?: string | number | import("long").default;
                                        byzantine_validators?: {
                                            address?: Uint8Array;
                                            pub_key?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            voting_power?: string | number | import("long").default;
                                            proposer_priority?: string | number | import("long").default;
                                        }[];
                                        total_voting_power?: string | number | import("long").default;
                                        timestamp?: {
                                            seconds?: string | number | import("long").default;
                                            nanos?: number;
                                        };
                                    };
                                }[];
                            };
                            last_commit?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                    validator_address?: Uint8Array;
                                    timestamp?: {
                                        seconds?: string | number | import("long").default;
                                        nanos?: number;
                                    };
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        sdk_block?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").default;
                                    app?: string | number | import("long").default;
                                };
                                chain_id?: string;
                                height?: string | number | import("long").default;
                                time?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: string;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicate_vote_evidence?: {
                                        vote_a?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            block_id?: {
                                                hash?: Uint8Array;
                                                part_set_header?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: string | number | import("long").default;
                                                nanos?: number;
                                            };
                                            validator_address?: Uint8Array;
                                            validator_index?: number;
                                            signature?: Uint8Array;
                                        };
                                        vote_b?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            block_id?: {
                                                hash?: Uint8Array;
                                                part_set_header?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: string | number | import("long").default;
                                                nanos?: number;
                                            };
                                            validator_address?: Uint8Array;
                                            validator_index?: number;
                                            signature?: Uint8Array;
                                        };
                                        total_voting_power?: string | number | import("long").default;
                                        validator_power?: string | number | import("long").default;
                                        timestamp?: {
                                            seconds?: string | number | import("long").default;
                                            nanos?: number;
                                        };
                                    };
                                    light_client_attack_evidence?: {
                                        conflicting_block?: {
                                            signed_header?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").default;
                                                        app?: string | number | import("long").default;
                                                    };
                                                    chain_id?: string;
                                                    height?: string | number | import("long").default;
                                                    time?: {
                                                        seconds?: string | number | import("long").default;
                                                        nanos?: number;
                                                    };
                                                    last_block_id?: {
                                                        hash?: Uint8Array;
                                                        part_set_header?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    last_commit_hash?: Uint8Array;
                                                    data_hash?: Uint8Array;
                                                    validators_hash?: Uint8Array;
                                                    next_validators_hash?: Uint8Array;
                                                    consensus_hash?: Uint8Array;
                                                    app_hash?: Uint8Array;
                                                    last_results_hash?: Uint8Array;
                                                    evidence_hash?: Uint8Array;
                                                    proposer_address?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: string | number | import("long").default;
                                                    round?: number;
                                                    block_id?: {
                                                        hash?: Uint8Array;
                                                        part_set_header?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validator_address?: Uint8Array;
                                                        timestamp?: {
                                                            seconds?: string | number | import("long").default;
                                                            nanos?: number;
                                                        };
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validator_set?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pub_key?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    voting_power?: string | number | import("long").default;
                                                    proposer_priority?: string | number | import("long").default;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pub_key?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    voting_power?: string | number | import("long").default;
                                                    proposer_priority?: string | number | import("long").default;
                                                };
                                                total_voting_power?: string | number | import("long").default;
                                            };
                                        };
                                        common_height?: string | number | import("long").default;
                                        byzantine_validators?: {
                                            address?: Uint8Array;
                                            pub_key?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            voting_power?: string | number | import("long").default;
                                            proposer_priority?: string | number | import("long").default;
                                        }[];
                                        total_voting_power?: string | number | import("long").default;
                                        timestamp?: {
                                            seconds?: string | number | import("long").default;
                                            nanos?: number;
                                        };
                                    };
                                }[];
                            };
                            last_commit?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                    validator_address?: Uint8Array;
                                    timestamp?: {
                                        seconds?: string | number | import("long").default;
                                        nanos?: number;
                                    };
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _32.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _32.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetLatestBlockRequest;
                    fromJSON(_: any): _32.GetLatestBlockRequest;
                    fromPartial(_: {}): _32.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _32.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetLatestBlockResponse;
                    fromJSON(object: any): _32.GetLatestBlockResponse;
                    fromPartial(object: {
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").default;
                                    app?: string | number | import("long").default;
                                };
                                chain_id?: string;
                                height?: string | number | import("long").default;
                                time?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicate_vote_evidence?: {
                                        vote_a?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            block_id?: {
                                                hash?: Uint8Array;
                                                part_set_header?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: string | number | import("long").default;
                                                nanos?: number;
                                            };
                                            validator_address?: Uint8Array;
                                            validator_index?: number;
                                            signature?: Uint8Array;
                                        };
                                        vote_b?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            block_id?: {
                                                hash?: Uint8Array;
                                                part_set_header?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: string | number | import("long").default;
                                                nanos?: number;
                                            };
                                            validator_address?: Uint8Array;
                                            validator_index?: number;
                                            signature?: Uint8Array;
                                        };
                                        total_voting_power?: string | number | import("long").default;
                                        validator_power?: string | number | import("long").default;
                                        timestamp?: {
                                            seconds?: string | number | import("long").default;
                                            nanos?: number;
                                        };
                                    };
                                    light_client_attack_evidence?: {
                                        conflicting_block?: {
                                            signed_header?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").default;
                                                        app?: string | number | import("long").default;
                                                    };
                                                    chain_id?: string;
                                                    height?: string | number | import("long").default;
                                                    time?: {
                                                        seconds?: string | number | import("long").default;
                                                        nanos?: number;
                                                    };
                                                    last_block_id?: {
                                                        hash?: Uint8Array;
                                                        part_set_header?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    last_commit_hash?: Uint8Array;
                                                    data_hash?: Uint8Array;
                                                    validators_hash?: Uint8Array;
                                                    next_validators_hash?: Uint8Array;
                                                    consensus_hash?: Uint8Array;
                                                    app_hash?: Uint8Array;
                                                    last_results_hash?: Uint8Array;
                                                    evidence_hash?: Uint8Array;
                                                    proposer_address?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: string | number | import("long").default;
                                                    round?: number;
                                                    block_id?: {
                                                        hash?: Uint8Array;
                                                        part_set_header?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validator_address?: Uint8Array;
                                                        timestamp?: {
                                                            seconds?: string | number | import("long").default;
                                                            nanos?: number;
                                                        };
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validator_set?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pub_key?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    voting_power?: string | number | import("long").default;
                                                    proposer_priority?: string | number | import("long").default;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pub_key?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    voting_power?: string | number | import("long").default;
                                                    proposer_priority?: string | number | import("long").default;
                                                };
                                                total_voting_power?: string | number | import("long").default;
                                            };
                                        };
                                        common_height?: string | number | import("long").default;
                                        byzantine_validators?: {
                                            address?: Uint8Array;
                                            pub_key?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            voting_power?: string | number | import("long").default;
                                            proposer_priority?: string | number | import("long").default;
                                        }[];
                                        total_voting_power?: string | number | import("long").default;
                                        timestamp?: {
                                            seconds?: string | number | import("long").default;
                                            nanos?: number;
                                        };
                                    };
                                }[];
                            };
                            last_commit?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                    validator_address?: Uint8Array;
                                    timestamp?: {
                                        seconds?: string | number | import("long").default;
                                        nanos?: number;
                                    };
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        sdk_block?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").default;
                                    app?: string | number | import("long").default;
                                };
                                chain_id?: string;
                                height?: string | number | import("long").default;
                                time?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: string;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicate_vote_evidence?: {
                                        vote_a?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            block_id?: {
                                                hash?: Uint8Array;
                                                part_set_header?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: string | number | import("long").default;
                                                nanos?: number;
                                            };
                                            validator_address?: Uint8Array;
                                            validator_index?: number;
                                            signature?: Uint8Array;
                                        };
                                        vote_b?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            block_id?: {
                                                hash?: Uint8Array;
                                                part_set_header?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: string | number | import("long").default;
                                                nanos?: number;
                                            };
                                            validator_address?: Uint8Array;
                                            validator_index?: number;
                                            signature?: Uint8Array;
                                        };
                                        total_voting_power?: string | number | import("long").default;
                                        validator_power?: string | number | import("long").default;
                                        timestamp?: {
                                            seconds?: string | number | import("long").default;
                                            nanos?: number;
                                        };
                                    };
                                    light_client_attack_evidence?: {
                                        conflicting_block?: {
                                            signed_header?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").default;
                                                        app?: string | number | import("long").default;
                                                    };
                                                    chain_id?: string;
                                                    height?: string | number | import("long").default;
                                                    time?: {
                                                        seconds?: string | number | import("long").default;
                                                        nanos?: number;
                                                    };
                                                    last_block_id?: {
                                                        hash?: Uint8Array;
                                                        part_set_header?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    last_commit_hash?: Uint8Array;
                                                    data_hash?: Uint8Array;
                                                    validators_hash?: Uint8Array;
                                                    next_validators_hash?: Uint8Array;
                                                    consensus_hash?: Uint8Array;
                                                    app_hash?: Uint8Array;
                                                    last_results_hash?: Uint8Array;
                                                    evidence_hash?: Uint8Array;
                                                    proposer_address?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: string | number | import("long").default;
                                                    round?: number;
                                                    block_id?: {
                                                        hash?: Uint8Array;
                                                        part_set_header?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validator_address?: Uint8Array;
                                                        timestamp?: {
                                                            seconds?: string | number | import("long").default;
                                                            nanos?: number;
                                                        };
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validator_set?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pub_key?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    voting_power?: string | number | import("long").default;
                                                    proposer_priority?: string | number | import("long").default;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pub_key?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    voting_power?: string | number | import("long").default;
                                                    proposer_priority?: string | number | import("long").default;
                                                };
                                                total_voting_power?: string | number | import("long").default;
                                            };
                                        };
                                        common_height?: string | number | import("long").default;
                                        byzantine_validators?: {
                                            address?: Uint8Array;
                                            pub_key?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            voting_power?: string | number | import("long").default;
                                            proposer_priority?: string | number | import("long").default;
                                        }[];
                                        total_voting_power?: string | number | import("long").default;
                                        timestamp?: {
                                            seconds?: string | number | import("long").default;
                                            nanos?: number;
                                        };
                                    };
                                }[];
                            };
                            last_commit?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                    validator_address?: Uint8Array;
                                    timestamp?: {
                                        seconds?: string | number | import("long").default;
                                        nanos?: number;
                                    };
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _32.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _32.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetSyncingRequest;
                    fromJSON(_: any): _32.GetSyncingRequest;
                    fromPartial(_: {}): _32.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _32.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetSyncingResponse;
                    fromJSON(object: any): _32.GetSyncingResponse;
                    fromPartial(object: {
                        syncing?: boolean;
                    }): _32.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _32.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetNodeInfoRequest;
                    fromJSON(_: any): _32.GetNodeInfoRequest;
                    fromPartial(_: {}): _32.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _32.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetNodeInfoResponse;
                    fromJSON(object: any): _32.GetNodeInfoResponse;
                    fromPartial(object: {
                        default_node_info?: {
                            protocol_version?: {
                                p2p?: string | number | import("long").default;
                                block?: string | number | import("long").default;
                                app?: string | number | import("long").default;
                            };
                            default_node_id?: string;
                            listen_addr?: string;
                            network?: string;
                            version?: string;
                            channels?: Uint8Array;
                            moniker?: string;
                            other?: {
                                tx_index?: string;
                                rpc_address?: string;
                            };
                        };
                        application_version?: {
                            name?: string;
                            app_name?: string;
                            version?: string;
                            git_commit?: string;
                            build_tags?: string;
                            go_version?: string;
                            build_deps?: {
                                path?: string;
                                version?: string;
                                sum?: string;
                            }[];
                            cosmos_sdk_version?: string;
                        };
                    }): _32.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _32.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.VersionInfo;
                    fromJSON(object: any): _32.VersionInfo;
                    fromPartial(object: {
                        name?: string;
                        app_name?: string;
                        version?: string;
                        git_commit?: string;
                        build_tags?: string;
                        go_version?: string;
                        build_deps?: {
                            path?: string;
                            version?: string;
                            sum?: string;
                        }[];
                        cosmos_sdk_version?: string;
                    }): _32.VersionInfo;
                };
                Module: {
                    encode(message: _32.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Module;
                    fromJSON(object: any): _32.Module;
                    fromPartial(object: {
                        path?: string;
                        version?: string;
                        sum?: string;
                    }): _32.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _32.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ABCIQueryRequest;
                    fromJSON(object: any): _32.ABCIQueryRequest;
                    fromPartial(object: {
                        data?: Uint8Array;
                        path?: string;
                        height?: string | number | import("long").default;
                        prove?: boolean;
                    }): _32.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _32.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ABCIQueryResponse;
                    fromJSON(object: any): _32.ABCIQueryResponse;
                    fromPartial(object: {
                        code?: number;
                        log?: string;
                        info?: string;
                        index?: string | number | import("long").default;
                        key?: Uint8Array;
                        value?: Uint8Array;
                        proof_ops?: {
                            ops?: {
                                type?: string;
                                key?: Uint8Array;
                                data?: Uint8Array;
                            }[];
                        };
                        height?: string | number | import("long").default;
                        codespace?: string;
                    }): _32.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _32.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ProofOp;
                    fromJSON(object: any): _32.ProofOp;
                    fromPartial(object: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }): _32.ProofOp;
                };
                ProofOps: {
                    encode(message: _32.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ProofOps;
                    fromJSON(object: any): _32.ProofOps;
                    fromPartial(object: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    }): _32.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _34.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Coin;
                fromJSON(object: any): _34.Coin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _34.Coin;
            };
            DecCoin: {
                encode(message: _34.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DecCoin;
                fromJSON(object: any): _34.DecCoin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _34.DecCoin;
            };
            IntProto: {
                encode(message: _34.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.IntProto;
                fromJSON(object: any): _34.IntProto;
                fromPartial(object: {
                    int?: string;
                }): _34.IntProto;
            };
            DecProto: {
                encode(message: _34.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DecProto;
                fromJSON(object: any): _34.DecProto;
                fromPartial(object: {
                    dec?: string;
                }): _34.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _36.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.GenesisOwners;
                fromJSON(object: any): _36.GenesisOwners;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                    index_owners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _36.GenesisOwners;
            };
            GenesisState: {
                encode(message: _36.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.GenesisState;
                fromJSON(object: any): _36.GenesisState;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                    owners?: {
                        index?: string | number | import("long").default;
                        index_owners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _36.GenesisState;
            };
            Capability: {
                encode(message: _35.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Capability;
                fromJSON(object: any): _35.Capability;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                }): _35.Capability;
            };
            Owner: {
                encode(message: _35.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Owner;
                fromJSON(object: any): _35.Owner;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _35.Owner;
            };
            CapabilityOwners: {
                encode(message: _35.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.CapabilityOwners;
                fromJSON(object: any): _35.CapabilityOwners;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _35.CapabilityOwners;
            };
        };
    }
    namespace consensus {
        const v1: {
            MsgClientImpl: typeof _266.MsgClientImpl;
            QueryClientImpl: typeof _248.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useParams: <TData = _37.QueryParamsResponse>({ request, options }: _248.UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _38.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _38.MsgUpdateParams): {
                        typeUrl: string;
                        value: _38.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _38.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _38.MsgUpdateParams): {
                        typeUrl: string;
                        value: _38.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, block, evidence, validator }: _38.MsgUpdateParams) => {
                        authority: string;
                        block: {
                            max_bytes: string;
                            max_gas: string;
                        };
                        evidence: {
                            max_age_num_blocks: string;
                            max_age_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            max_bytes: string;
                        };
                        validator: {
                            pub_key_types: string[];
                        };
                    };
                    fromAmino: ({ authority, block, evidence, validator }: {
                        authority: string;
                        block: {
                            max_bytes: string;
                            max_gas: string;
                        };
                        evidence: {
                            max_age_num_blocks: string;
                            max_age_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            max_bytes: string;
                        };
                        validator: {
                            pub_key_types: string[];
                        };
                    }) => _38.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _38.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgUpdateParams;
                fromJSON(object: any): _38.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string;
                    block?: {
                        max_bytes?: string | number | import("long").default;
                        max_gas?: string | number | import("long").default;
                    };
                    evidence?: {
                        max_age_num_blocks?: string | number | import("long").default;
                        max_age_duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        max_bytes?: string | number | import("long").default;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                }): _38.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _38.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgUpdateParamsResponse;
                fromJSON(_: any): _38.MsgUpdateParamsResponse;
                fromPartial(_: {}): _38.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _37.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryParamsRequest;
                fromJSON(_: any): _37.QueryParamsRequest;
                fromPartial(_: {}): _37.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _37.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryParamsResponse;
                fromJSON(object: any): _37.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        block?: {
                            max_bytes?: string | number | import("long").default;
                            max_gas?: string | number | import("long").default;
                        };
                        evidence?: {
                            max_age_num_blocks?: string | number | import("long").default;
                            max_age_duration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            max_bytes?: string | number | import("long").default;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app?: string | number | import("long").default;
                        };
                    };
                }): _37.QueryParamsResponse;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _267.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _40.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _40.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _40.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _40.MsgVerifyInvariant;
                    };
                    updateParams(value: _40.MsgUpdateParams): {
                        typeUrl: string;
                        value: _40.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _40.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _40.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _40.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _40.MsgVerifyInvariant;
                    };
                    updateParams(value: _40.MsgUpdateParams): {
                        typeUrl: string;
                        value: _40.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariant_module_name, invariant_route }: _40.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _40.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, constant_fee }: _40.MsgUpdateParams) => {
                        authority: string;
                        constant_fee: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ authority, constant_fee }: {
                        authority: string;
                        constant_fee: {
                            denom: string;
                            amount: string;
                        };
                    }) => _40.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _40.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgVerifyInvariant;
                fromJSON(object: any): _40.MsgVerifyInvariant;
                fromPartial(object: {
                    sender?: string;
                    invariant_module_name?: string;
                    invariant_route?: string;
                }): _40.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _40.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgVerifyInvariantResponse;
                fromJSON(_: any): _40.MsgVerifyInvariantResponse;
                fromPartial(_: {}): _40.MsgVerifyInvariantResponse;
            };
            MsgUpdateParams: {
                encode(message: _40.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgUpdateParams;
                fromJSON(object: any): _40.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string;
                    constant_fee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _40.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _40.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgUpdateParamsResponse;
                fromJSON(_: any): _40.MsgUpdateParamsResponse;
                fromPartial(_: {}): _40.MsgUpdateParamsResponse;
            };
            GenesisState: {
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GenesisState;
                fromJSON(object: any): _39.GenesisState;
                fromPartial(object: {
                    constant_fee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _39.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _41.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.PubKey;
                fromJSON(object: any): _41.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _41.PubKey;
            };
            PrivKey: {
                encode(message: _41.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.PrivKey;
                fromJSON(object: any): _41.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _41.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _42.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.BIP44Params;
                    fromJSON(object: any): _42.BIP44Params;
                    fromPartial(object: {
                        purpose?: number;
                        coin_type?: number;
                        account?: number;
                        change?: boolean;
                        address_index?: number;
                    }): _42.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _43.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Record;
                    fromJSON(object: any): _43.Record;
                    fromPartial(object: {
                        name?: string;
                        pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            priv_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coin_type?: number;
                                account?: number;
                                change?: boolean;
                                address_index?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _43.Record;
                };
                Record_Local: {
                    encode(message: _43.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Record_Local;
                    fromJSON(object: any): _43.Record_Local;
                    fromPartial(object: {
                        priv_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _43.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _43.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Record_Ledger;
                    fromJSON(object: any): _43.Record_Ledger;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coin_type?: number;
                            account?: number;
                            change?: boolean;
                            address_index?: number;
                        };
                    }): _43.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _43.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Record_Multi;
                    fromJSON(_: any): _43.Record_Multi;
                    fromPartial(_: {}): _43.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _43.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Record_Offline;
                    fromJSON(_: any): _43.Record_Offline;
                    fromPartial(_: {}): _43.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _44.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.LegacyAminoPubKey;
                fromJSON(object: any): _44.LegacyAminoPubKey;
                fromPartial(object: {
                    threshold?: number;
                    public_keys?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _44.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _45.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.PubKey;
                fromJSON(object: any): _45.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _45.PubKey;
            };
            PrivKey: {
                encode(message: _45.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.PrivKey;
                fromJSON(object: any): _45.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _45.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _46.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.PubKey;
                fromJSON(object: any): _46.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _46.PubKey;
            };
            PrivKey: {
                encode(message: _46.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.PrivKey;
                fromJSON(object: any): _46.PrivKey;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _46.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _268.MsgClientImpl;
            QueryClientImpl: typeof _249.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                validatorDistributionInfo(request: _49.QueryValidatorDistributionInfoRequest): Promise<_49.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _49.QueryValidatorOutstandingRewardsRequest): Promise<_49.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _49.QueryValidatorCommissionRequest): Promise<_49.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _49.QueryValidatorSlashesRequest): Promise<_49.QueryValidatorSlashesResponse>;
                delegationRewards(request: _49.QueryDelegationRewardsRequest): Promise<_49.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _49.QueryDelegationTotalRewardsRequest): Promise<_49.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _49.QueryDelegatorValidatorsRequest): Promise<_49.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _49.QueryDelegatorWithdrawAddressRequest): Promise<_49.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _49.QueryCommunityPoolRequest): Promise<_49.QueryCommunityPoolResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useParams: <TData = _49.QueryParamsResponse>({ request, options }: _249.UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useValidatorDistributionInfo: <TData_1 = _49.QueryValidatorDistributionInfoResponse>({ request, options }: _249.UseValidatorDistributionInfoQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useValidatorOutstandingRewards: <TData_2 = _49.QueryValidatorOutstandingRewardsResponse>({ request, options }: _249.UseValidatorOutstandingRewardsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useValidatorCommission: <TData_3 = _49.QueryValidatorCommissionResponse>({ request, options }: _249.UseValidatorCommissionQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useValidatorSlashes: <TData_4 = _49.QueryValidatorSlashesResponse>({ request, options }: _249.UseValidatorSlashesQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useDelegationRewards: <TData_5 = _49.QueryDelegationRewardsResponse>({ request, options }: _249.UseDelegationRewardsQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useDelegationTotalRewards: <TData_6 = _49.QueryDelegationTotalRewardsResponse>({ request, options }: _249.UseDelegationTotalRewardsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useDelegatorValidators: <TData_7 = _49.QueryDelegatorValidatorsResponse>({ request, options }: _249.UseDelegatorValidatorsQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                useDelegatorWithdrawAddress: <TData_8 = _49.QueryDelegatorWithdrawAddressResponse>({ request, options }: _249.UseDelegatorWithdrawAddressQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                useCommunityPool: <TData_9 = _49.QueryCommunityPoolResponse>({ request, options }: _249.UseCommunityPoolQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
            };
            LCDQueryClient: typeof _228.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _50.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _50.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _50.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _50.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _50.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _50.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _50.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _50.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _50.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _50.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _50.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _50.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _50.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _50.MsgFundCommunityPool;
                    };
                    updateParams(value: _50.MsgUpdateParams): {
                        typeUrl: string;
                        value: _50.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _50.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _50.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _50.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _50.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _50.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _50.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _50.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _50.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _50.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _50.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _50.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _50.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _50.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _50.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _50.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _50.MsgFundCommunityPool;
                    };
                    updateParams(value: _50.MsgUpdateParams): {
                        typeUrl: string;
                        value: _50.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _50.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _50.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegator_address, withdraw_address }: _50.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _50.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegator_address, validator_address }: _50.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _50.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validator_address }: _50.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _50.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _50.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _50.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _50.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            community_tax: string;
                            base_proposer_reward: string;
                            bonus_proposer_reward: string;
                            withdraw_addr_enabled: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            community_tax: string;
                            base_proposer_reward: string;
                            bonus_proposer_reward: string;
                            withdraw_addr_enabled: boolean;
                        };
                    }) => _50.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: ({ authority, recipient, amount }: _50.MsgCommunityPoolSpend) => {
                        authority: string;
                        recipient: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ authority, recipient, amount }: {
                        authority: string;
                        recipient: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _50.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _50.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSetWithdrawAddress;
                fromJSON(object: any): _50.MsgSetWithdrawAddress;
                fromPartial(object: {
                    delegator_address?: string;
                    withdraw_address?: string;
                }): _50.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _50.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _50.MsgSetWithdrawAddressResponse;
                fromPartial(_: {}): _50.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _50.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _50.MsgWithdrawDelegatorReward;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                }): _50.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _50.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _50.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _50.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _50.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _50.MsgWithdrawValidatorCommission;
                fromPartial(object: {
                    validator_address?: string;
                }): _50.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _50.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _50.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _50.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _50.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgFundCommunityPool;
                fromJSON(object: any): _50.MsgFundCommunityPool;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _50.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _50.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _50.MsgFundCommunityPoolResponse;
                fromPartial(_: {}): _50.MsgFundCommunityPoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _50.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgUpdateParams;
                fromJSON(object: any): _50.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        community_tax?: string;
                        base_proposer_reward?: string;
                        bonus_proposer_reward?: string;
                        withdraw_addr_enabled?: boolean;
                    };
                }): _50.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _50.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgUpdateParamsResponse;
                fromJSON(_: any): _50.MsgUpdateParamsResponse;
                fromPartial(_: {}): _50.MsgUpdateParamsResponse;
            };
            MsgCommunityPoolSpend: {
                encode(message: _50.MsgCommunityPoolSpend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgCommunityPoolSpend;
                fromJSON(object: any): _50.MsgCommunityPoolSpend;
                fromPartial(object: {
                    authority?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _50.MsgCommunityPoolSpend;
            };
            MsgCommunityPoolSpendResponse: {
                encode(_: _50.MsgCommunityPoolSpendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgCommunityPoolSpendResponse;
                fromJSON(_: any): _50.MsgCommunityPoolSpendResponse;
                fromPartial(_: {}): _50.MsgCommunityPoolSpendResponse;
            };
            QueryParamsRequest: {
                encode(_: _49.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryParamsRequest;
                fromJSON(_: any): _49.QueryParamsRequest;
                fromPartial(_: {}): _49.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _49.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryParamsResponse;
                fromJSON(object: any): _49.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        community_tax?: string;
                        base_proposer_reward?: string;
                        bonus_proposer_reward?: string;
                        withdraw_addr_enabled?: boolean;
                    };
                }): _49.QueryParamsResponse;
            };
            QueryValidatorDistributionInfoRequest: {
                encode(message: _49.QueryValidatorDistributionInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorDistributionInfoRequest;
                fromJSON(object: any): _49.QueryValidatorDistributionInfoRequest;
                fromPartial(object: {
                    validator_address?: string;
                }): _49.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _49.QueryValidatorDistributionInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorDistributionInfoResponse;
                fromJSON(object: any): _49.QueryValidatorDistributionInfoResponse;
                fromPartial(object: {
                    operator_address?: string;
                    self_bond_rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _49.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _49.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _49.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: {
                    validator_address?: string;
                }): _49.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _49.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _49.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _49.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _49.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorCommissionRequest;
                fromJSON(object: any): _49.QueryValidatorCommissionRequest;
                fromPartial(object: {
                    validator_address?: string;
                }): _49.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _49.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorCommissionResponse;
                fromJSON(object: any): _49.QueryValidatorCommissionResponse;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _49.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _49.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorSlashesRequest;
                fromJSON(object: any): _49.QueryValidatorSlashesRequest;
                fromPartial(object: {
                    validator_address?: string;
                    starting_height?: string | number | import("long").default;
                    ending_height?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _49.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _49.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorSlashesResponse;
                fromJSON(object: any): _49.QueryValidatorSlashesResponse;
                fromPartial(object: {
                    slashes?: {
                        validator_period?: string | number | import("long").default;
                        fraction?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _49.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _49.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegationRewardsRequest;
                fromJSON(object: any): _49.QueryDelegationRewardsRequest;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                }): _49.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _49.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegationRewardsResponse;
                fromJSON(object: any): _49.QueryDelegationRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _49.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _49.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _49.QueryDelegationTotalRewardsRequest;
                fromPartial(object: {
                    delegator_address?: string;
                }): _49.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _49.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _49.QueryDelegationTotalRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        validator_address?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _49.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _49.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _49.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegator_address?: string;
                }): _49.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _49.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _49.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: string[];
                }): _49.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _49.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _49.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: {
                    delegator_address?: string;
                }): _49.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _49.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _49.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: {
                    withdraw_address?: string;
                }): _49.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _49.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryCommunityPoolRequest;
                fromJSON(_: any): _49.QueryCommunityPoolRequest;
                fromPartial(_: {}): _49.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _49.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryCommunityPoolResponse;
                fromJSON(object: any): _49.QueryCommunityPoolResponse;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _49.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _48.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.DelegatorWithdrawInfo;
                fromJSON(object: any): _48.DelegatorWithdrawInfo;
                fromPartial(object: {
                    delegator_address?: string;
                    withdraw_address?: string;
                }): _48.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _48.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _48.ValidatorOutstandingRewardsRecord;
                fromPartial(object: {
                    validator_address?: string;
                    outstanding_rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _48.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _48.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _48.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: {
                    validator_address?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _48.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _48.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _48.ValidatorHistoricalRewardsRecord;
                fromPartial(object: {
                    validator_address?: string;
                    period?: string | number | import("long").default;
                    rewards?: {
                        cumulative_reward_ratio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        reference_count?: number;
                    };
                }): _48.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _48.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _48.ValidatorCurrentRewardsRecord;
                fromPartial(object: {
                    validator_address?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: string | number | import("long").default;
                    };
                }): _48.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _48.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.DelegatorStartingInfoRecord;
                fromJSON(object: any): _48.DelegatorStartingInfoRecord;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    starting_info?: {
                        previous_period?: string | number | import("long").default;
                        stake?: string;
                        height?: string | number | import("long").default;
                    };
                }): _48.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _48.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ValidatorSlashEventRecord;
                fromJSON(object: any): _48.ValidatorSlashEventRecord;
                fromPartial(object: {
                    validator_address?: string;
                    height?: string | number | import("long").default;
                    period?: string | number | import("long").default;
                    validator_slash_event?: {
                        validator_period?: string | number | import("long").default;
                        fraction?: string;
                    };
                }): _48.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GenesisState;
                fromJSON(object: any): _48.GenesisState;
                fromPartial(object: {
                    params?: {
                        community_tax?: string;
                        base_proposer_reward?: string;
                        bonus_proposer_reward?: string;
                        withdraw_addr_enabled?: boolean;
                    };
                    fee_pool?: {
                        community_pool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegator_withdraw_infos?: {
                        delegator_address?: string;
                        withdraw_address?: string;
                    }[];
                    previous_proposer?: string;
                    outstanding_rewards?: {
                        validator_address?: string;
                        outstanding_rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validator_accumulated_commissions?: {
                        validator_address?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validator_historical_rewards?: {
                        validator_address?: string;
                        period?: string | number | import("long").default;
                        rewards?: {
                            cumulative_reward_ratio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            reference_count?: number;
                        };
                    }[];
                    validator_current_rewards?: {
                        validator_address?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: string | number | import("long").default;
                        };
                    }[];
                    delegator_starting_infos?: {
                        delegator_address?: string;
                        validator_address?: string;
                        starting_info?: {
                            previous_period?: string | number | import("long").default;
                            stake?: string;
                            height?: string | number | import("long").default;
                        };
                    }[];
                    validator_slash_events?: {
                        validator_address?: string;
                        height?: string | number | import("long").default;
                        period?: string | number | import("long").default;
                        validator_slash_event?: {
                            validator_period?: string | number | import("long").default;
                            fraction?: string;
                        };
                    }[];
                }): _48.GenesisState;
            };
            Params: {
                encode(message: _47.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Params;
                fromJSON(object: any): _47.Params;
                fromPartial(object: {
                    community_tax?: string;
                    base_proposer_reward?: string;
                    bonus_proposer_reward?: string;
                    withdraw_addr_enabled?: boolean;
                }): _47.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _47.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ValidatorHistoricalRewards;
                fromJSON(object: any): _47.ValidatorHistoricalRewards;
                fromPartial(object: {
                    cumulative_reward_ratio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    reference_count?: number;
                }): _47.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _47.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ValidatorCurrentRewards;
                fromJSON(object: any): _47.ValidatorCurrentRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: string | number | import("long").default;
                }): _47.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _47.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ValidatorAccumulatedCommission;
                fromJSON(object: any): _47.ValidatorAccumulatedCommission;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _47.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _47.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ValidatorOutstandingRewards;
                fromJSON(object: any): _47.ValidatorOutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _47.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _47.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ValidatorSlashEvent;
                fromJSON(object: any): _47.ValidatorSlashEvent;
                fromPartial(object: {
                    validator_period?: string | number | import("long").default;
                    fraction?: string;
                }): _47.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _47.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ValidatorSlashEvents;
                fromJSON(object: any): _47.ValidatorSlashEvents;
                fromPartial(object: {
                    validator_slash_events?: {
                        validator_period?: string | number | import("long").default;
                        fraction?: string;
                    }[];
                }): _47.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _47.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.FeePool;
                fromJSON(object: any): _47.FeePool;
                fromPartial(object: {
                    community_pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _47.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _47.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.CommunityPoolSpendProposal;
                fromJSON(object: any): _47.CommunityPoolSpendProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _47.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _47.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.DelegatorStartingInfo;
                fromJSON(object: any): _47.DelegatorStartingInfo;
                fromPartial(object: {
                    previous_period?: string | number | import("long").default;
                    stake?: string;
                    height?: string | number | import("long").default;
                }): _47.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _47.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.DelegationDelegatorReward;
                fromJSON(object: any): _47.DelegationDelegatorReward;
                fromPartial(object: {
                    validator_address?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _47.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _47.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _47.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _47.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _269.MsgClientImpl;
            QueryClientImpl: typeof _250.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _53.QueryEvidenceRequest): Promise<_53.QueryEvidenceResponse>;
                allEvidence(request?: _53.QueryAllEvidenceRequest): Promise<_53.QueryAllEvidenceResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useEvidence: <TData = _53.QueryEvidenceResponse>({ request, options }: _250.UseEvidenceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useAllEvidence: <TData_1 = _53.QueryAllEvidenceResponse>({ request, options }: _250.UseAllEvidenceQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
            };
            LCDQueryClient: typeof _229.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _54.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _54.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _54.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _54.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _54.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _54.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _54.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _54.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _54.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSubmitEvidence;
                fromJSON(object: any): _54.MsgSubmitEvidence;
                fromPartial(object: {
                    submitter?: string;
                    evidence?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _54.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _54.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _54.MsgSubmitEvidenceResponse;
                fromPartial(object: {
                    hash?: Uint8Array;
                }): _54.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _53.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryEvidenceRequest;
                fromJSON(object: any): _53.QueryEvidenceRequest;
                fromPartial(object: {
                    evidence_hash?: Uint8Array;
                    hash?: string;
                }): _53.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _53.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryEvidenceResponse;
                fromJSON(object: any): _53.QueryEvidenceResponse;
                fromPartial(object: {
                    evidence?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _53.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _53.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryAllEvidenceRequest;
                fromJSON(object: any): _53.QueryAllEvidenceRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _53.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _53.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryAllEvidenceResponse;
                fromJSON(object: any): _53.QueryAllEvidenceResponse;
                fromPartial(object: {
                    evidence?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _53.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GenesisState;
                fromJSON(object: any): _52.GenesisState;
                fromPartial(object: {
                    evidence?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _52.GenesisState;
            };
            Equivocation: {
                encode(message: _51.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Equivocation;
                fromJSON(object: any): _51.Equivocation;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                    time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    power?: string | number | import("long").default;
                    consensus_address?: string;
                }): _51.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _270.MsgClientImpl;
            QueryClientImpl: typeof _251.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _57.QueryAllowanceRequest): Promise<_57.QueryAllowanceResponse>;
                allowances(request: _57.QueryAllowancesRequest): Promise<_57.QueryAllowancesResponse>;
                allowancesByGranter(request: _57.QueryAllowancesByGranterRequest): Promise<_57.QueryAllowancesByGranterResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useAllowance: <TData = _57.QueryAllowanceResponse>({ request, options }: _251.UseAllowanceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useAllowances: <TData_1 = _57.QueryAllowancesResponse>({ request, options }: _251.UseAllowancesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useAllowancesByGranter: <TData_2 = _57.QueryAllowancesByGranterResponse>({ request, options }: _251.UseAllowancesByGranterQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
            };
            LCDQueryClient: typeof _230.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _58.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _58.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _58.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _58.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _58.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _58.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _58.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _58.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _58.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _58.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _58.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _58.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _58.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _58.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _58.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _58.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _58.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgGrantAllowance;
                fromJSON(object: any): _58.MsgGrantAllowance;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _58.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _58.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgGrantAllowanceResponse;
                fromJSON(_: any): _58.MsgGrantAllowanceResponse;
                fromPartial(_: {}): _58.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _58.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgRevokeAllowance;
                fromJSON(object: any): _58.MsgRevokeAllowance;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _58.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _58.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _58.MsgRevokeAllowanceResponse;
                fromPartial(_: {}): _58.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _57.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryAllowanceRequest;
                fromJSON(object: any): _57.QueryAllowanceRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _57.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _57.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryAllowanceResponse;
                fromJSON(object: any): _57.QueryAllowanceResponse;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _57.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _57.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryAllowancesRequest;
                fromJSON(object: any): _57.QueryAllowancesRequest;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _57.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _57.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryAllowancesResponse;
                fromJSON(object: any): _57.QueryAllowancesResponse;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _57.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _57.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _57.QueryAllowancesByGranterRequest;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _57.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _57.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _57.QueryAllowancesByGranterResponse;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _57.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GenesisState;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _56.GenesisState;
            };
            BasicAllowance: {
                encode(message: _55.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.BasicAllowance;
                fromJSON(object: any): _55.BasicAllowance;
                fromPartial(object: {
                    spend_limit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _55.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _55.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.PeriodicAllowance;
                fromJSON(object: any): _55.PeriodicAllowance;
                fromPartial(object: {
                    basic?: {
                        spend_limit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    period_spend_limit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period_can_spend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period_reset?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _55.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _55.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.AllowedMsgAllowance;
                fromJSON(object: any): _55.AllowedMsgAllowance;
                fromPartial(object: {
                    allowance?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    allowed_messages?: string[];
                }): _55.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _55.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Grant;
                fromJSON(object: any): _55.Grant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _55.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GenesisState;
                fromJSON(object: any): _59.GenesisState;
                fromPartial(object: {
                    gen_txs?: Uint8Array[];
                }): _59.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _271.MsgClientImpl;
            QueryClientImpl: typeof _252.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                proposals(request: _62.QueryProposalsRequest): Promise<_62.QueryProposalsResponse>;
                vote(request: _62.QueryVoteRequest): Promise<_62.QueryVoteResponse>;
                votes(request: _62.QueryVotesRequest): Promise<_62.QueryVotesResponse>;
                params(request: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                deposit(request: _62.QueryDepositRequest): Promise<_62.QueryDepositResponse>;
                deposits(request: _62.QueryDepositsRequest): Promise<_62.QueryDepositsResponse>;
                tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useProposal: <TData = _62.QueryProposalResponse>({ request, options }: _252.UseProposalQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useProposals: <TData_1 = _62.QueryProposalsResponse>({ request, options }: _252.UseProposalsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useVote: <TData_2 = _62.QueryVoteResponse>({ request, options }: _252.UseVoteQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useVotes: <TData_3 = _62.QueryVotesResponse>({ request, options }: _252.UseVotesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useParams: <TData_4 = _62.QueryParamsResponse>({ request, options }: _252.UseParamsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useDeposit: <TData_5 = _62.QueryDepositResponse>({ request, options }: _252.UseDepositQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useDeposits: <TData_6 = _62.QueryDepositsResponse>({ request, options }: _252.UseDepositsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useTallyResult: <TData_7 = _62.QueryTallyResultResponse>({ request, options }: _252.UseTallyResultQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
            };
            LCDQueryClient: typeof _231.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _63.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _63.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _63.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _63.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _63.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _63.MsgExecLegacyContent;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    voteWeighted(value: _63.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _63.MsgVoteWeighted;
                    };
                    deposit(value: _63.MsgDeposit): {
                        typeUrl: string;
                        value: _63.MsgDeposit;
                    };
                    updateParams(value: _63.MsgUpdateParams): {
                        typeUrl: string;
                        value: _63.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _63.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _63.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _63.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _63.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _63.MsgExecLegacyContent;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    voteWeighted(value: _63.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _63.MsgVoteWeighted;
                    };
                    deposit(value: _63.MsgDeposit): {
                        typeUrl: string;
                        value: _63.MsgDeposit;
                    };
                    updateParams(value: _63.MsgUpdateParams): {
                        typeUrl: string;
                        value: _63.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initial_deposit, proposer, metadata, title, summary }: _63.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                        title: string;
                        summary: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata, title, summary }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                        title: string;
                        summary: string;
                    }) => _63.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _63.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _63.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposal_id, voter, option, metadata }: _63.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _63.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposal_id, voter, options, metadata }: _63.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _63.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposal_id, depositor, amount }: _63.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _63.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _63.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            max_deposit_period: {
                                seconds: string;
                                nanos: number;
                            };
                            voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            quorum: string;
                            threshold: string;
                            veto_threshold: string;
                            min_initial_deposit_ratio: string;
                            burn_vote_quorum: boolean;
                            burn_proposal_deposit_prevote: boolean;
                            burn_vote_veto: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            max_deposit_period: {
                                seconds: string;
                                nanos: number;
                            };
                            voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            quorum: string;
                            threshold: string;
                            veto_threshold: string;
                            min_initial_deposit_ratio: string;
                            burn_vote_quorum: boolean;
                            burn_proposal_deposit_prevote: boolean;
                            burn_vote_veto: boolean;
                        };
                    }) => _63.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                encode(message: _63.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgSubmitProposal;
                fromJSON(object: any): _63.MsgSubmitProposal;
                fromPartial(object: {
                    messages?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    initial_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                    metadata?: string;
                    title?: string;
                    summary?: string;
                }): _63.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _63.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgSubmitProposalResponse;
                fromJSON(object: any): _63.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _63.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _63.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgExecLegacyContent;
                fromJSON(object: any): _63.MsgExecLegacyContent;
                fromPartial(object: {
                    content?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    authority?: string;
                }): _63.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _63.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgExecLegacyContentResponse;
                fromJSON(_: any): _63.MsgExecLegacyContentResponse;
                fromPartial(_: {}): _63.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _63.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgVote;
                fromJSON(object: any): _63.MsgVote;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                    option?: _61.VoteOption;
                    metadata?: string;
                }): _63.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _63.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgVoteResponse;
                fromJSON(_: any): _63.MsgVoteResponse;
                fromPartial(_: {}): _63.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _63.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgVoteWeighted;
                fromJSON(object: any): _63.MsgVoteWeighted;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                    options?: {
                        option?: _61.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _63.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _63.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgVoteWeightedResponse;
                fromJSON(_: any): _63.MsgVoteWeightedResponse;
                fromPartial(_: {}): _63.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _63.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgDeposit;
                fromJSON(object: any): _63.MsgDeposit;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _63.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _63.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgDepositResponse;
                fromJSON(_: any): _63.MsgDepositResponse;
                fromPartial(_: {}): _63.MsgDepositResponse;
            };
            MsgUpdateParams: {
                encode(message: _63.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateParams;
                fromJSON(object: any): _63.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        min_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        max_deposit_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        voting_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        quorum?: string;
                        threshold?: string;
                        veto_threshold?: string;
                        min_initial_deposit_ratio?: string;
                        burn_vote_quorum?: boolean;
                        burn_proposal_deposit_prevote?: boolean;
                        burn_vote_veto?: boolean;
                    };
                }): _63.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _63.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateParamsResponse;
                fromJSON(_: any): _63.MsgUpdateParamsResponse;
                fromPartial(_: {}): _63.MsgUpdateParamsResponse;
            };
            QueryProposalRequest: {
                encode(message: _62.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalRequest;
                fromJSON(object: any): _62.QueryProposalRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _62.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _62.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalResponse;
                fromJSON(object: any): _62.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        id?: string | number | import("long").default;
                        messages?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _61.ProposalStatus;
                        final_tally_result?: {
                            yes_count?: string;
                            abstain_count?: string;
                            no_count?: string;
                            no_with_veto_count?: string;
                        };
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        deposit_end_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        total_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        voting_start_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        voting_end_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        metadata?: string;
                        title?: string;
                        summary?: string;
                        proposer?: string;
                    };
                }): _62.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _62.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalsRequest;
                fromJSON(object: any): _62.QueryProposalsRequest;
                fromPartial(object: {
                    proposal_status?: _61.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _62.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalsResponse;
                fromJSON(object: any): _62.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        id?: string | number | import("long").default;
                        messages?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _61.ProposalStatus;
                        final_tally_result?: {
                            yes_count?: string;
                            abstain_count?: string;
                            no_count?: string;
                            no_with_veto_count?: string;
                        };
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        deposit_end_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        total_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        voting_start_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        voting_end_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        metadata?: string;
                        title?: string;
                        summary?: string;
                        proposer?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _62.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _62.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVoteRequest;
                fromJSON(object: any): _62.QueryVoteRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                }): _62.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _62.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVoteResponse;
                fromJSON(object: any): _62.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        options?: {
                            option?: _61.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _62.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _62.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesRequest;
                fromJSON(object: any): _62.QueryVotesRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _62.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesResponse;
                fromJSON(object: any): _62.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        options?: {
                            option?: _61.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _62.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _62.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryParamsRequest;
                fromJSON(object: any): _62.QueryParamsRequest;
                fromPartial(object: {
                    params_type?: string;
                }): _62.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _62.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryParamsResponse;
                fromJSON(object: any): _62.QueryParamsResponse;
                fromPartial(object: {
                    voting_params?: {
                        voting_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    deposit_params?: {
                        min_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        max_deposit_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    tally_params?: {
                        quorum?: string;
                        threshold?: string;
                        veto_threshold?: string;
                    };
                    params?: {
                        min_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        max_deposit_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        voting_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        quorum?: string;
                        threshold?: string;
                        veto_threshold?: string;
                        min_initial_deposit_ratio?: string;
                        burn_vote_quorum?: boolean;
                        burn_proposal_deposit_prevote?: boolean;
                        burn_vote_veto?: boolean;
                    };
                }): _62.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _62.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDepositRequest;
                fromJSON(object: any): _62.QueryDepositRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    depositor?: string;
                }): _62.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _62.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDepositResponse;
                fromJSON(object: any): _62.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposal_id?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _62.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _62.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDepositsRequest;
                fromJSON(object: any): _62.QueryDepositsRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _62.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDepositsResponse;
                fromJSON(object: any): _62.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposal_id?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _62.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _62.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryTallyResultRequest;
                fromJSON(object: any): _62.QueryTallyResultRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _62.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _62.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryTallyResultResponse;
                fromJSON(object: any): _62.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yes_count?: string;
                        abstain_count?: string;
                        no_count?: string;
                        no_with_veto_count?: string;
                    };
                }): _62.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _61.VoteOption;
            voteOptionToJSON(object: _61.VoteOption): string;
            proposalStatusFromJSON(object: any): _61.ProposalStatus;
            proposalStatusToJSON(object: _61.ProposalStatus): string;
            VoteOption: typeof _61.VoteOption;
            ProposalStatus: typeof _61.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _61.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.WeightedVoteOption;
                fromJSON(object: any): _61.WeightedVoteOption;
                fromPartial(object: {
                    option?: _61.VoteOption;
                    weight?: string;
                }): _61.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _61.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Deposit;
                fromJSON(object: any): _61.Deposit;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _61.Deposit;
            };
            Proposal: {
                encode(message: _61.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Proposal;
                fromJSON(object: any): _61.Proposal;
                fromPartial(object: {
                    id?: string | number | import("long").default;
                    messages?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _61.ProposalStatus;
                    final_tally_result?: {
                        yes_count?: string;
                        abstain_count?: string;
                        no_count?: string;
                        no_with_veto_count?: string;
                    };
                    submit_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    deposit_end_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    total_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    voting_start_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    voting_end_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    metadata?: string;
                    title?: string;
                    summary?: string;
                    proposer?: string;
                }): _61.Proposal;
            };
            TallyResult: {
                encode(message: _61.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.TallyResult;
                fromJSON(object: any): _61.TallyResult;
                fromPartial(object: {
                    yes_count?: string;
                    abstain_count?: string;
                    no_count?: string;
                    no_with_veto_count?: string;
                }): _61.TallyResult;
            };
            Vote: {
                encode(message: _61.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Vote;
                fromJSON(object: any): _61.Vote;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                    options?: {
                        option?: _61.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _61.Vote;
            };
            DepositParams: {
                encode(message: _61.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.DepositParams;
                fromJSON(object: any): _61.DepositParams;
                fromPartial(object: {
                    min_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    max_deposit_period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _61.DepositParams;
            };
            VotingParams: {
                encode(message: _61.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.VotingParams;
                fromJSON(object: any): _61.VotingParams;
                fromPartial(object: {
                    voting_period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _61.VotingParams;
            };
            TallyParams: {
                encode(message: _61.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.TallyParams;
                fromJSON(object: any): _61.TallyParams;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    veto_threshold?: string;
                }): _61.TallyParams;
            };
            Params: {
                encode(message: _61.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Params;
                fromJSON(object: any): _61.Params;
                fromPartial(object: {
                    min_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    max_deposit_period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    voting_period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    quorum?: string;
                    threshold?: string;
                    veto_threshold?: string;
                    min_initial_deposit_ratio?: string;
                    burn_vote_quorum?: boolean;
                    burn_proposal_deposit_prevote?: boolean;
                    burn_vote_veto?: boolean;
                }): _61.Params;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GenesisState;
                fromJSON(object: any): _60.GenesisState;
                fromPartial(object: {
                    starting_proposal_id?: string | number | import("long").default;
                    deposits?: {
                        proposal_id?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        options?: {
                            option?: _61.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: string | number | import("long").default;
                        messages?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _61.ProposalStatus;
                        final_tally_result?: {
                            yes_count?: string;
                            abstain_count?: string;
                            no_count?: string;
                            no_with_veto_count?: string;
                        };
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        deposit_end_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        total_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        voting_start_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        voting_end_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        metadata?: string;
                        title?: string;
                        summary?: string;
                        proposer?: string;
                    }[];
                    deposit_params?: {
                        min_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        max_deposit_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    voting_params?: {
                        voting_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    tally_params?: {
                        quorum?: string;
                        threshold?: string;
                        veto_threshold?: string;
                    };
                    params?: {
                        min_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        max_deposit_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        voting_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        quorum?: string;
                        threshold?: string;
                        veto_threshold?: string;
                        min_initial_deposit_ratio?: string;
                        burn_vote_quorum?: boolean;
                        burn_proposal_deposit_prevote?: boolean;
                        burn_vote_veto?: boolean;
                    };
                }): _60.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _272.MsgClientImpl;
            QueryClientImpl: typeof _253.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _66.QueryProposalRequest): Promise<_66.QueryProposalResponse>;
                proposals(request: _66.QueryProposalsRequest): Promise<_66.QueryProposalsResponse>;
                vote(request: _66.QueryVoteRequest): Promise<_66.QueryVoteResponse>;
                votes(request: _66.QueryVotesRequest): Promise<_66.QueryVotesResponse>;
                params(request: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                deposit(request: _66.QueryDepositRequest): Promise<_66.QueryDepositResponse>;
                deposits(request: _66.QueryDepositsRequest): Promise<_66.QueryDepositsResponse>;
                tallyResult(request: _66.QueryTallyResultRequest): Promise<_66.QueryTallyResultResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useProposal: <TData = _66.QueryProposalResponse>({ request, options }: _253.UseProposalQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useProposals: <TData_1 = _66.QueryProposalsResponse>({ request, options }: _253.UseProposalsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useVote: <TData_2 = _66.QueryVoteResponse>({ request, options }: _253.UseVoteQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useVotes: <TData_3 = _66.QueryVotesResponse>({ request, options }: _253.UseVotesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useParams: <TData_4 = _66.QueryParamsResponse>({ request, options }: _253.UseParamsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useDeposit: <TData_5 = _66.QueryDepositResponse>({ request, options }: _253.UseDepositQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useDeposits: <TData_6 = _66.QueryDepositsResponse>({ request, options }: _253.UseDepositsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useTallyResult: <TData_7 = _66.QueryTallyResultResponse>({ request, options }: _253.UseTallyResultQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
            };
            LCDQueryClient: typeof _232.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _67.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _67.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _67.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _67.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _67.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _67.MsgSubmitProposal;
                    };
                    vote(value: _67.MsgVote): {
                        typeUrl: string;
                        value: _67.MsgVote;
                    };
                    voteWeighted(value: _67.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _67.MsgVoteWeighted;
                    };
                    deposit(value: _67.MsgDeposit): {
                        typeUrl: string;
                        value: _67.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _67.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _67.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _67.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _67.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _67.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _67.MsgSubmitProposal;
                    };
                    vote(value: _67.MsgVote): {
                        typeUrl: string;
                        value: _67.MsgVote;
                    };
                    voteWeighted(value: _67.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _67.MsgVoteWeighted;
                    };
                    deposit(value: _67.MsgDeposit): {
                        typeUrl: string;
                        value: _67.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initial_deposit, proposer }: _67.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _67.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposal_id, voter, option }: _67.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _67.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposal_id, voter, options }: _67.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _67.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposal_id, depositor, amount }: _67.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _67.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _67.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgSubmitProposal;
                fromJSON(object: any): _67.MsgSubmitProposal;
                fromPartial(object: {
                    content?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    initial_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _67.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _67.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgSubmitProposalResponse;
                fromJSON(object: any): _67.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _67.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _67.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgVote;
                fromJSON(object: any): _67.MsgVote;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                    option?: _65.VoteOption;
                }): _67.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _67.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgVoteResponse;
                fromJSON(_: any): _67.MsgVoteResponse;
                fromPartial(_: {}): _67.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _67.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgVoteWeighted;
                fromJSON(object: any): _67.MsgVoteWeighted;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                    options?: {
                        option?: _65.VoteOption;
                        weight?: string;
                    }[];
                }): _67.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _67.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgVoteWeightedResponse;
                fromJSON(_: any): _67.MsgVoteWeightedResponse;
                fromPartial(_: {}): _67.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _67.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgDeposit;
                fromJSON(object: any): _67.MsgDeposit;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _67.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _67.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgDepositResponse;
                fromJSON(_: any): _67.MsgDepositResponse;
                fromPartial(_: {}): _67.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _66.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryProposalRequest;
                fromJSON(object: any): _66.QueryProposalRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _66.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _66.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryProposalResponse;
                fromJSON(object: any): _66.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        proposal_id?: string | number | import("long").default;
                        content?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        status?: _65.ProposalStatus;
                        final_tally_result?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            no_with_veto?: string;
                        };
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        deposit_end_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        total_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        voting_start_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        voting_end_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                }): _66.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _66.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryProposalsRequest;
                fromJSON(object: any): _66.QueryProposalsRequest;
                fromPartial(object: {
                    proposal_status?: _65.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _66.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _66.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryProposalsResponse;
                fromJSON(object: any): _66.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        proposal_id?: string | number | import("long").default;
                        content?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        status?: _65.ProposalStatus;
                        final_tally_result?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            no_with_veto?: string;
                        };
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        deposit_end_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        total_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        voting_start_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        voting_end_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _66.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _66.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryVoteRequest;
                fromJSON(object: any): _66.QueryVoteRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                }): _66.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _66.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryVoteResponse;
                fromJSON(object: any): _66.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        option?: _65.VoteOption;
                        options?: {
                            option?: _65.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _66.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _66.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryVotesRequest;
                fromJSON(object: any): _66.QueryVotesRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _66.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _66.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryVotesResponse;
                fromJSON(object: any): _66.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        option?: _65.VoteOption;
                        options?: {
                            option?: _65.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _66.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _66.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsRequest;
                fromJSON(object: any): _66.QueryParamsRequest;
                fromPartial(object: {
                    params_type?: string;
                }): _66.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _66.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsResponse;
                fromJSON(object: any): _66.QueryParamsResponse;
                fromPartial(object: {
                    voting_params?: {
                        voting_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    deposit_params?: {
                        min_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        max_deposit_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    tally_params?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        veto_threshold?: Uint8Array;
                    };
                }): _66.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _66.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryDepositRequest;
                fromJSON(object: any): _66.QueryDepositRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    depositor?: string;
                }): _66.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _66.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryDepositResponse;
                fromJSON(object: any): _66.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposal_id?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _66.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _66.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryDepositsRequest;
                fromJSON(object: any): _66.QueryDepositsRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _66.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _66.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryDepositsResponse;
                fromJSON(object: any): _66.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposal_id?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _66.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _66.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryTallyResultRequest;
                fromJSON(object: any): _66.QueryTallyResultRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _66.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _66.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryTallyResultResponse;
                fromJSON(object: any): _66.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        no_with_veto?: string;
                    };
                }): _66.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _65.VoteOption;
            voteOptionToJSON(object: _65.VoteOption): string;
            proposalStatusFromJSON(object: any): _65.ProposalStatus;
            proposalStatusToJSON(object: _65.ProposalStatus): string;
            VoteOption: typeof _65.VoteOption;
            ProposalStatus: typeof _65.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _65.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.WeightedVoteOption;
                fromJSON(object: any): _65.WeightedVoteOption;
                fromPartial(object: {
                    option?: _65.VoteOption;
                    weight?: string;
                }): _65.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _65.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.TextProposal;
                fromJSON(object: any): _65.TextProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _65.TextProposal;
            };
            Deposit: {
                encode(message: _65.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Deposit;
                fromJSON(object: any): _65.Deposit;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _65.Deposit;
            };
            Proposal: {
                encode(message: _65.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Proposal;
                fromJSON(object: any): _65.Proposal;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    content?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    status?: _65.ProposalStatus;
                    final_tally_result?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        no_with_veto?: string;
                    };
                    submit_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    deposit_end_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    total_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    voting_start_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    voting_end_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _65.Proposal;
            };
            TallyResult: {
                encode(message: _65.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.TallyResult;
                fromJSON(object: any): _65.TallyResult;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    no_with_veto?: string;
                }): _65.TallyResult;
            };
            Vote: {
                encode(message: _65.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Vote;
                fromJSON(object: any): _65.Vote;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                    option?: _65.VoteOption;
                    options?: {
                        option?: _65.VoteOption;
                        weight?: string;
                    }[];
                }): _65.Vote;
            };
            DepositParams: {
                encode(message: _65.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.DepositParams;
                fromJSON(object: any): _65.DepositParams;
                fromPartial(object: {
                    min_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    max_deposit_period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _65.DepositParams;
            };
            VotingParams: {
                encode(message: _65.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.VotingParams;
                fromJSON(object: any): _65.VotingParams;
                fromPartial(object: {
                    voting_period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _65.VotingParams;
            };
            TallyParams: {
                encode(message: _65.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.TallyParams;
                fromJSON(object: any): _65.TallyParams;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    veto_threshold?: Uint8Array;
                }): _65.TallyParams;
            };
            GenesisState: {
                encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GenesisState;
                fromJSON(object: any): _64.GenesisState;
                fromPartial(object: {
                    starting_proposal_id?: string | number | import("long").default;
                    deposits?: {
                        proposal_id?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        option?: _65.VoteOption;
                        options?: {
                            option?: _65.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposal_id?: string | number | import("long").default;
                        content?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        status?: _65.ProposalStatus;
                        final_tally_result?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            no_with_veto?: string;
                        };
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        deposit_end_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        total_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        voting_start_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        voting_end_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    deposit_params?: {
                        min_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        max_deposit_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    voting_params?: {
                        voting_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    tally_params?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        veto_threshold?: Uint8Array;
                    };
                }): _64.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _273.MsgClientImpl;
            QueryClientImpl: typeof _254.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _70.QueryGroupInfoRequest): Promise<_70.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _70.QueryGroupPolicyInfoRequest): Promise<_70.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _70.QueryGroupMembersRequest): Promise<_70.QueryGroupMembersResponse>;
                groupsByAdmin(request: _70.QueryGroupsByAdminRequest): Promise<_70.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _70.QueryGroupPoliciesByGroupRequest): Promise<_70.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _70.QueryGroupPoliciesByAdminRequest): Promise<_70.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _70.QueryProposalRequest): Promise<_70.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _70.QueryProposalsByGroupPolicyRequest): Promise<_70.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _70.QueryVoteByProposalVoterRequest): Promise<_70.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _70.QueryVotesByProposalRequest): Promise<_70.QueryVotesByProposalResponse>;
                votesByVoter(request: _70.QueryVotesByVoterRequest): Promise<_70.QueryVotesByVoterResponse>;
                groupsByMember(request: _70.QueryGroupsByMemberRequest): Promise<_70.QueryGroupsByMemberResponse>;
                tallyResult(request: _70.QueryTallyResultRequest): Promise<_70.QueryTallyResultResponse>;
                groups(request?: _70.QueryGroupsRequest): Promise<_70.QueryGroupsResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useGroupInfo: <TData = _70.QueryGroupInfoResponse>({ request, options }: _254.UseGroupInfoQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useGroupPolicyInfo: <TData_1 = _70.QueryGroupPolicyInfoResponse>({ request, options }: _254.UseGroupPolicyInfoQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useGroupMembers: <TData_2 = _70.QueryGroupMembersResponse>({ request, options }: _254.UseGroupMembersQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useGroupsByAdmin: <TData_3 = _70.QueryGroupsByAdminResponse>({ request, options }: _254.UseGroupsByAdminQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useGroupPoliciesByGroup: <TData_4 = _70.QueryGroupPoliciesByGroupResponse>({ request, options }: _254.UseGroupPoliciesByGroupQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useGroupPoliciesByAdmin: <TData_5 = _70.QueryGroupPoliciesByAdminResponse>({ request, options }: _254.UseGroupPoliciesByAdminQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useProposal: <TData_6 = _70.QueryProposalResponse>({ request, options }: _254.UseProposalQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useProposalsByGroupPolicy: <TData_7 = _70.QueryProposalsByGroupPolicyResponse>({ request, options }: _254.UseProposalsByGroupPolicyQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                useVoteByProposalVoter: <TData_8 = _70.QueryVoteByProposalVoterResponse>({ request, options }: _254.UseVoteByProposalVoterQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                useVotesByProposal: <TData_9 = _70.QueryVotesByProposalResponse>({ request, options }: _254.UseVotesByProposalQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
                useVotesByVoter: <TData_10 = _70.QueryVotesByVoterResponse>({ request, options }: _254.UseVotesByVoterQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
                useGroupsByMember: <TData_11 = _70.QueryGroupsByMemberResponse>({ request, options }: _254.UseGroupsByMemberQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
                useTallyResult: <TData_12 = _70.QueryTallyResultResponse>({ request, options }: _254.UseTallyResultQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
                useGroups: <TData_13 = _70.QueryGroupsResponse>({ request, options }: _254.UseGroupsQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
            };
            LCDQueryClient: typeof _233.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _71.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _71.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _71.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _71.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _71.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _71.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _71.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _71.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _71.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _71.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _71.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _71.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _71.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _71.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _71.MsgCreateGroup): {
                        typeUrl: string;
                        value: _71.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _71.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _71.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _71.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _71.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _71.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _71.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _71.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _71.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _71.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _71.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _71.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _71.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _71.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _71.MsgWithdrawProposal;
                    };
                    vote(value: _71.MsgVote): {
                        typeUrl: string;
                        value: _71.MsgVote;
                    };
                    exec(value: _71.MsgExec): {
                        typeUrl: string;
                        value: _71.MsgExec;
                    };
                    leaveGroup(value: _71.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _71.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _71.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _71.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _71.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _71.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _71.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _71.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _71.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _71.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _71.MsgCreateGroup): {
                        typeUrl: string;
                        value: _71.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _71.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _71.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _71.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _71.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _71.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _71.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _71.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _71.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _71.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _71.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _71.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _71.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _71.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _71.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _71.MsgWithdrawProposal;
                    };
                    vote(value: _71.MsgVote): {
                        typeUrl: string;
                        value: _71.MsgVote;
                    };
                    exec(value: _71.MsgExec): {
                        typeUrl: string;
                        value: _71.MsgExec;
                    };
                    leaveGroup(value: _71.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _71.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _71.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    }) => _71.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, group_id, member_updates }: _71.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    }) => _71.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, group_id, new_admin }: _71.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _71.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, group_id, metadata }: _71.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _71.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, group_id, metadata, decision_policy }: _71.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _71.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: _71.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _71.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, group_policy_address, new_admin }: _71.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _71.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, group_policy_address, decision_policy }: _71.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_policy_address, decision_policy }: {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _71.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, group_policy_address, metadata }: _71.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _71.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ group_policy_address, proposers, metadata, messages, exec, title, summary }: _71.MsgSubmitProposal) => {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                        title: string;
                        summary: string;
                    };
                    fromAmino: ({ group_policy_address, proposers, metadata, messages, exec, title, summary }: {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                        title: string;
                        summary: string;
                    }) => _71.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposal_id, address }: _71.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _71.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposal_id, voter, option, metadata, exec }: _71.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _71.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposal_id, executor }: _71.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _71.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, group_id }: _71.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _71.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _72.VoteOption;
            voteOptionToJSON(object: _72.VoteOption): string;
            proposalStatusFromJSON(object: any): _72.ProposalStatus;
            proposalStatusToJSON(object: _72.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _72.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _72.ProposalExecutorResult): string;
            VoteOption: typeof _72.VoteOption;
            ProposalStatus: typeof _72.ProposalStatus;
            ProposalExecutorResult: typeof _72.ProposalExecutorResult;
            Member: {
                encode(message: _72.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Member;
                fromJSON(object: any): _72.Member;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: string;
                    added_at?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _72.Member;
            };
            MemberRequest: {
                encode(message: _72.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MemberRequest;
                fromJSON(object: any): _72.MemberRequest;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: string;
                }): _72.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _72.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ThresholdDecisionPolicy;
                fromJSON(object: any): _72.ThresholdDecisionPolicy;
                fromPartial(object: {
                    threshold?: string;
                    windows?: {
                        voting_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        min_execution_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                }): _72.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _72.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.PercentageDecisionPolicy;
                fromJSON(object: any): _72.PercentageDecisionPolicy;
                fromPartial(object: {
                    percentage?: string;
                    windows?: {
                        voting_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        min_execution_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                }): _72.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _72.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.DecisionPolicyWindows;
                fromJSON(object: any): _72.DecisionPolicyWindows;
                fromPartial(object: {
                    voting_period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    min_execution_period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _72.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _72.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GroupInfo;
                fromJSON(object: any): _72.GroupInfo;
                fromPartial(object: {
                    id?: string | number | import("long").default;
                    admin?: string;
                    metadata?: string;
                    version?: string | number | import("long").default;
                    total_weight?: string;
                    created_at?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _72.GroupInfo;
            };
            GroupMember: {
                encode(message: _72.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GroupMember;
                fromJSON(object: any): _72.GroupMember;
                fromPartial(object: {
                    group_id?: string | number | import("long").default;
                    member?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        added_at?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                }): _72.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _72.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GroupPolicyInfo;
                fromJSON(object: any): _72.GroupPolicyInfo;
                fromPartial(object: {
                    address?: string;
                    group_id?: string | number | import("long").default;
                    admin?: string;
                    metadata?: string;
                    version?: string | number | import("long").default;
                    decision_policy?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    created_at?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _72.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _72.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Proposal;
                fromJSON(object: any): _72.Proposal;
                fromPartial(object: {
                    id?: string | number | import("long").default;
                    group_policy_address?: string;
                    metadata?: string;
                    proposers?: string[];
                    submit_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    group_version?: string | number | import("long").default;
                    group_policy_version?: string | number | import("long").default;
                    status?: _72.ProposalStatus;
                    final_tally_result?: {
                        yes_count?: string;
                        abstain_count?: string;
                        no_count?: string;
                        no_with_veto_count?: string;
                    };
                    voting_period_end?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    executor_result?: _72.ProposalExecutorResult;
                    messages?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    title?: string;
                    summary?: string;
                }): _72.Proposal;
            };
            TallyResult: {
                encode(message: _72.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.TallyResult;
                fromJSON(object: any): _72.TallyResult;
                fromPartial(object: {
                    yes_count?: string;
                    abstain_count?: string;
                    no_count?: string;
                    no_with_veto_count?: string;
                }): _72.TallyResult;
            };
            Vote: {
                encode(message: _72.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Vote;
                fromJSON(object: any): _72.Vote;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                    option?: _72.VoteOption;
                    metadata?: string;
                    submit_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _72.Vote;
            };
            execFromJSON(object: any): _71.Exec;
            execToJSON(object: _71.Exec): string;
            Exec: typeof _71.Exec;
            MsgCreateGroup: {
                encode(message: _71.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgCreateGroup;
                fromJSON(object: any): _71.MsgCreateGroup;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                    }[];
                    metadata?: string;
                }): _71.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _71.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgCreateGroupResponse;
                fromJSON(object: any): _71.MsgCreateGroupResponse;
                fromPartial(object: {
                    group_id?: string | number | import("long").default;
                }): _71.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _71.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateGroupMembers;
                fromJSON(object: any): _71.MsgUpdateGroupMembers;
                fromPartial(object: {
                    admin?: string;
                    group_id?: string | number | import("long").default;
                    member_updates?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                    }[];
                }): _71.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _71.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _71.MsgUpdateGroupMembersResponse;
                fromPartial(_: {}): _71.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _71.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateGroupAdmin;
                fromJSON(object: any): _71.MsgUpdateGroupAdmin;
                fromPartial(object: {
                    admin?: string;
                    group_id?: string | number | import("long").default;
                    new_admin?: string;
                }): _71.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _71.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _71.MsgUpdateGroupAdminResponse;
                fromPartial(_: {}): _71.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _71.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateGroupMetadata;
                fromJSON(object: any): _71.MsgUpdateGroupMetadata;
                fromPartial(object: {
                    admin?: string;
                    group_id?: string | number | import("long").default;
                    metadata?: string;
                }): _71.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _71.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _71.MsgUpdateGroupMetadataResponse;
                fromPartial(_: {}): _71.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _71.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgCreateGroupPolicy;
                fromJSON(object: any): _71.MsgCreateGroupPolicy;
                fromPartial(object: {
                    admin?: string;
                    group_id?: string | number | import("long").default;
                    metadata?: string;
                    decision_policy?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _71.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _71.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _71.MsgCreateGroupPolicyResponse;
                fromPartial(object: {
                    address?: string;
                }): _71.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _71.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _71.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: {
                    admin?: string;
                    group_policy_address?: string;
                    new_admin?: string;
                }): _71.MsgUpdateGroupPolicyAdmin;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _71.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _71.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: {}): _71.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _71.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _71.MsgCreateGroupWithPolicy;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                    }[];
                    group_metadata?: string;
                    group_policy_metadata?: string;
                    group_policy_as_admin?: boolean;
                    decision_policy?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _71.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _71.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _71.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: {
                    group_id?: string | number | import("long").default;
                    group_policy_address?: string;
                }): _71.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _71.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _71.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: {
                    admin?: string;
                    group_policy_address?: string;
                    decision_policy?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _71.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _71.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _71.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: {}): _71.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _71.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _71.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: {
                    admin?: string;
                    group_policy_address?: string;
                    metadata?: string;
                }): _71.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _71.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _71.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: {}): _71.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _71.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgSubmitProposal;
                fromJSON(object: any): _71.MsgSubmitProposal;
                fromPartial(object: {
                    group_policy_address?: string;
                    proposers?: string[];
                    metadata?: string;
                    messages?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    exec?: _71.Exec;
                    title?: string;
                    summary?: string;
                }): _71.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _71.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgSubmitProposalResponse;
                fromJSON(object: any): _71.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _71.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _71.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgWithdrawProposal;
                fromJSON(object: any): _71.MsgWithdrawProposal;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    address?: string;
                }): _71.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _71.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgWithdrawProposalResponse;
                fromJSON(_: any): _71.MsgWithdrawProposalResponse;
                fromPartial(_: {}): _71.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _71.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgVote;
                fromJSON(object: any): _71.MsgVote;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                    option?: _72.VoteOption;
                    metadata?: string;
                    exec?: _71.Exec;
                }): _71.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _71.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgVoteResponse;
                fromJSON(_: any): _71.MsgVoteResponse;
                fromPartial(_: {}): _71.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _71.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgExec;
                fromJSON(object: any): _71.MsgExec;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    executor?: string;
                }): _71.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _71.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgExecResponse;
                fromJSON(object: any): _71.MsgExecResponse;
                fromPartial(object: {
                    result?: _72.ProposalExecutorResult;
                }): _71.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _71.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgLeaveGroup;
                fromJSON(object: any): _71.MsgLeaveGroup;
                fromPartial(object: {
                    address?: string;
                    group_id?: string | number | import("long").default;
                }): _71.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _71.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgLeaveGroupResponse;
                fromJSON(_: any): _71.MsgLeaveGroupResponse;
                fromPartial(_: {}): _71.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _70.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupInfoRequest;
                fromJSON(object: any): _70.QueryGroupInfoRequest;
                fromPartial(object: {
                    group_id?: string | number | import("long").default;
                }): _70.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _70.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupInfoResponse;
                fromJSON(object: any): _70.QueryGroupInfoResponse;
                fromPartial(object: {
                    info?: {
                        id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        total_weight?: string;
                        created_at?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                }): _70.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _70.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _70.QueryGroupPolicyInfoRequest;
                fromPartial(object: {
                    address?: string;
                }): _70.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _70.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _70.QueryGroupPolicyInfoResponse;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        group_id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        decision_policy?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        created_at?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                }): _70.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _70.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupMembersRequest;
                fromJSON(object: any): _70.QueryGroupMembersRequest;
                fromPartial(object: {
                    group_id?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _70.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _70.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupMembersResponse;
                fromJSON(object: any): _70.QueryGroupMembersResponse;
                fromPartial(object: {
                    members?: {
                        group_id?: string | number | import("long").default;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            added_at?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _70.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _70.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupsByAdminRequest;
                fromJSON(object: any): _70.QueryGroupsByAdminRequest;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _70.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _70.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupsByAdminResponse;
                fromJSON(object: any): _70.QueryGroupsByAdminResponse;
                fromPartial(object: {
                    groups?: {
                        id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        total_weight?: string;
                        created_at?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _70.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _70.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _70.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: {
                    group_id?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _70.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _70.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _70.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: {
                    group_policies?: {
                        address?: string;
                        group_id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        decision_policy?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        created_at?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _70.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _70.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _70.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _70.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _70.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _70.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: {
                    group_policies?: {
                        address?: string;
                        group_id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        decision_policy?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        created_at?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _70.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _70.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryProposalRequest;
                fromJSON(object: any): _70.QueryProposalRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _70.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _70.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryProposalResponse;
                fromJSON(object: any): _70.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        id?: string | number | import("long").default;
                        group_policy_address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        group_version?: string | number | import("long").default;
                        group_policy_version?: string | number | import("long").default;
                        status?: _72.ProposalStatus;
                        final_tally_result?: {
                            yes_count?: string;
                            abstain_count?: string;
                            no_count?: string;
                            no_with_veto_count?: string;
                        };
                        voting_period_end?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        executor_result?: _72.ProposalExecutorResult;
                        messages?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        title?: string;
                        summary?: string;
                    };
                }): _70.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _70.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _70.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _70.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _70.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _70.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: {
                    proposals?: {
                        id?: string | number | import("long").default;
                        group_policy_address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        group_version?: string | number | import("long").default;
                        group_policy_version?: string | number | import("long").default;
                        status?: _72.ProposalStatus;
                        final_tally_result?: {
                            yes_count?: string;
                            abstain_count?: string;
                            no_count?: string;
                            no_with_veto_count?: string;
                        };
                        voting_period_end?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        executor_result?: _72.ProposalExecutorResult;
                        messages?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        title?: string;
                        summary?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _70.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _70.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _70.QueryVoteByProposalVoterRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                }): _70.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _70.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _70.QueryVoteByProposalVoterResponse;
                fromPartial(object: {
                    vote?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        option?: _72.VoteOption;
                        metadata?: string;
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                }): _70.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _70.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVotesByProposalRequest;
                fromJSON(object: any): _70.QueryVotesByProposalRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _70.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _70.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVotesByProposalResponse;
                fromJSON(object: any): _70.QueryVotesByProposalResponse;
                fromPartial(object: {
                    votes?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        option?: _72.VoteOption;
                        metadata?: string;
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _70.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _70.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVotesByVoterRequest;
                fromJSON(object: any): _70.QueryVotesByVoterRequest;
                fromPartial(object: {
                    voter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _70.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _70.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryVotesByVoterResponse;
                fromJSON(object: any): _70.QueryVotesByVoterResponse;
                fromPartial(object: {
                    votes?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        option?: _72.VoteOption;
                        metadata?: string;
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _70.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _70.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupsByMemberRequest;
                fromJSON(object: any): _70.QueryGroupsByMemberRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _70.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _70.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupsByMemberResponse;
                fromJSON(object: any): _70.QueryGroupsByMemberResponse;
                fromPartial(object: {
                    groups?: {
                        id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        total_weight?: string;
                        created_at?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _70.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _70.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryTallyResultRequest;
                fromJSON(object: any): _70.QueryTallyResultRequest;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _70.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _70.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryTallyResultResponse;
                fromJSON(object: any): _70.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yes_count?: string;
                        abstain_count?: string;
                        no_count?: string;
                        no_with_veto_count?: string;
                    };
                }): _70.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _70.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupsRequest;
                fromJSON(object: any): _70.QueryGroupsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _70.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _70.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryGroupsResponse;
                fromJSON(object: any): _70.QueryGroupsResponse;
                fromPartial(object: {
                    groups?: {
                        id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        total_weight?: string;
                        created_at?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _70.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GenesisState;
                fromJSON(object: any): _69.GenesisState;
                fromPartial(object: {
                    group_seq?: string | number | import("long").default;
                    groups?: {
                        id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        total_weight?: string;
                        created_at?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    group_members?: {
                        group_id?: string | number | import("long").default;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            added_at?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                        };
                    }[];
                    group_policy_seq?: string | number | import("long").default;
                    group_policies?: {
                        address?: string;
                        group_id?: string | number | import("long").default;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").default;
                        decision_policy?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        created_at?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                    proposal_seq?: string | number | import("long").default;
                    proposals?: {
                        id?: string | number | import("long").default;
                        group_policy_address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        group_version?: string | number | import("long").default;
                        group_policy_version?: string | number | import("long").default;
                        status?: _72.ProposalStatus;
                        final_tally_result?: {
                            yes_count?: string;
                            abstain_count?: string;
                            no_count?: string;
                            no_with_veto_count?: string;
                        };
                        voting_period_end?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        executor_result?: _72.ProposalExecutorResult;
                        messages?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        title?: string;
                        summary?: string;
                    }[];
                    votes?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        option?: _72.VoteOption;
                        metadata?: string;
                        submit_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }[];
                }): _69.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _68.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventCreateGroup;
                fromJSON(object: any): _68.EventCreateGroup;
                fromPartial(object: {
                    group_id?: string | number | import("long").default;
                }): _68.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _68.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventUpdateGroup;
                fromJSON(object: any): _68.EventUpdateGroup;
                fromPartial(object: {
                    group_id?: string | number | import("long").default;
                }): _68.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _68.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventCreateGroupPolicy;
                fromJSON(object: any): _68.EventCreateGroupPolicy;
                fromPartial(object: {
                    address?: string;
                }): _68.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _68.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventUpdateGroupPolicy;
                fromJSON(object: any): _68.EventUpdateGroupPolicy;
                fromPartial(object: {
                    address?: string;
                }): _68.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _68.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventSubmitProposal;
                fromJSON(object: any): _68.EventSubmitProposal;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _68.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _68.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventWithdrawProposal;
                fromJSON(object: any): _68.EventWithdrawProposal;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _68.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _68.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventVote;
                fromJSON(object: any): _68.EventVote;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _68.EventVote;
            };
            EventExec: {
                encode(message: _68.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventExec;
                fromJSON(object: any): _68.EventExec;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    result?: _72.ProposalExecutorResult;
                    logs?: string;
                }): _68.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _68.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventLeaveGroup;
                fromJSON(object: any): _68.EventLeaveGroup;
                fromPartial(object: {
                    group_id?: string | number | import("long").default;
                    address?: string;
                }): _68.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _68.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventProposalPruned;
                fromJSON(object: any): _68.EventProposalPruned;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    status?: _72.ProposalStatus;
                    tally_result?: {
                        yes_count?: string;
                        abstain_count?: string;
                        no_count?: string;
                        no_with_veto_count?: string;
                    };
                }): _68.EventProposalPruned;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            MsgClientImpl: typeof _274.MsgClientImpl;
            QueryClientImpl: typeof _255.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                inflation(request?: _75.QueryInflationRequest): Promise<_75.QueryInflationResponse>;
                annualProvisions(request?: _75.QueryAnnualProvisionsRequest): Promise<_75.QueryAnnualProvisionsResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useParams: <TData = _75.QueryParamsResponse>({ request, options }: _255.UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useInflation: <TData_1 = _75.QueryInflationResponse>({ request, options }: _255.UseInflationQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useAnnualProvisions: <TData_2 = _75.QueryAnnualProvisionsResponse>({ request, options }: _255.UseAnnualProvisionsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
            };
            LCDQueryClient: typeof _234.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _76.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _76.MsgUpdateParams): {
                        typeUrl: string;
                        value: _76.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _76.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _76.MsgUpdateParams): {
                        typeUrl: string;
                        value: _76.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _76.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            mint_denom: string;
                            inflation_rate_change: string;
                            inflation_max: string;
                            inflation_min: string;
                            goal_bonded: string;
                            blocks_per_year: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            mint_denom: string;
                            inflation_rate_change: string;
                            inflation_max: string;
                            inflation_min: string;
                            goal_bonded: string;
                            blocks_per_year: string;
                        };
                    }) => _76.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _76.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgUpdateParams;
                fromJSON(object: any): _76.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        mint_denom?: string;
                        inflation_rate_change?: string;
                        inflation_max?: string;
                        inflation_min?: string;
                        goal_bonded?: string;
                        blocks_per_year?: string | number | import("long").default;
                    };
                }): _76.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _76.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgUpdateParamsResponse;
                fromJSON(_: any): _76.MsgUpdateParamsResponse;
                fromPartial(_: {}): _76.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _75.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryParamsRequest;
                fromJSON(_: any): _75.QueryParamsRequest;
                fromPartial(_: {}): _75.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _75.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryParamsResponse;
                fromJSON(object: any): _75.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mint_denom?: string;
                        inflation_rate_change?: string;
                        inflation_max?: string;
                        inflation_min?: string;
                        goal_bonded?: string;
                        blocks_per_year?: string | number | import("long").default;
                    };
                }): _75.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _75.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryInflationRequest;
                fromJSON(_: any): _75.QueryInflationRequest;
                fromPartial(_: {}): _75.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _75.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryInflationResponse;
                fromJSON(object: any): _75.QueryInflationResponse;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _75.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _75.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _75.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _75.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _75.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _75.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annual_provisions?: Uint8Array;
                }): _75.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _74.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Minter;
                fromJSON(object: any): _74.Minter;
                fromPartial(object: {
                    inflation?: string;
                    annual_provisions?: string;
                }): _74.Minter;
            };
            Params: {
                encode(message: _74.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Params;
                fromJSON(object: any): _74.Params;
                fromPartial(object: {
                    mint_denom?: string;
                    inflation_rate_change?: string;
                    inflation_max?: string;
                    inflation_min?: string;
                    goal_bonded?: string;
                    blocks_per_year?: string | number | import("long").default;
                }): _74.Params;
            };
            GenesisState: {
                encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GenesisState;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annual_provisions?: string;
                    };
                    params?: {
                        mint_denom?: string;
                        inflation_rate_change?: string;
                        inflation_max?: string;
                        inflation_min?: string;
                        goal_bonded?: string;
                        blocks_per_year?: string | number | import("long").default;
                    };
                }): _73.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _275.MsgClientImpl;
            QueryClientImpl: typeof _256.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _81.QueryBalanceRequest): Promise<_81.QueryBalanceResponse>;
                owner(request: _81.QueryOwnerRequest): Promise<_81.QueryOwnerResponse>;
                supply(request: _81.QuerySupplyRequest): Promise<_81.QuerySupplyResponse>;
                nFTs(request: _81.QueryNFTsRequest): Promise<_81.QueryNFTsResponse>;
                nFT(request: _81.QueryNFTRequest): Promise<_81.QueryNFTResponse>;
                class(request: _81.QueryClassRequest): Promise<_81.QueryClassResponse>;
                classes(request?: _81.QueryClassesRequest): Promise<_81.QueryClassesResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useBalance: <TData = _81.QueryBalanceResponse>({ request, options }: _256.UseBalanceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useOwner: <TData_1 = _81.QueryOwnerResponse>({ request, options }: _256.UseOwnerQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useSupply: <TData_2 = _81.QuerySupplyResponse>({ request, options }: _256.UseSupplyQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useNFTs: <TData_3 = _81.QueryNFTsResponse>({ request, options }: _256.UseNFTsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useNFT: <TData_4 = _81.QueryNFTResponse>({ request, options }: _256.UseNFTQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useClass: <TData_5 = _81.QueryClassResponse>({ request, options }: _256.UseClassQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useClasses: <TData_6 = _81.QueryClassesResponse>({ request, options }: _256.UseClassesQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
            };
            LCDQueryClient: typeof _235.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _82.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _82.MsgSend): {
                        typeUrl: string;
                        value: _82.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _82.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _82.MsgSend): {
                        typeUrl: string;
                        value: _82.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ class_id, id, sender, receiver }: _82.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _82.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _82.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgSend;
                fromJSON(object: any): _82.MsgSend;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _82.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _82.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgSendResponse;
                fromJSON(_: any): _82.MsgSendResponse;
                fromPartial(_: {}): _82.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _81.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryBalanceRequest;
                fromJSON(object: any): _81.QueryBalanceRequest;
                fromPartial(object: {
                    class_id?: string;
                    owner?: string;
                }): _81.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _81.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryBalanceResponse;
                fromJSON(object: any): _81.QueryBalanceResponse;
                fromPartial(object: {
                    amount?: string | number | import("long").default;
                }): _81.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _81.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryOwnerRequest;
                fromJSON(object: any): _81.QueryOwnerRequest;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                }): _81.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _81.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryOwnerResponse;
                fromJSON(object: any): _81.QueryOwnerResponse;
                fromPartial(object: {
                    owner?: string;
                }): _81.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _81.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QuerySupplyRequest;
                fromJSON(object: any): _81.QuerySupplyRequest;
                fromPartial(object: {
                    class_id?: string;
                }): _81.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _81.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QuerySupplyResponse;
                fromJSON(object: any): _81.QuerySupplyResponse;
                fromPartial(object: {
                    amount?: string | number | import("long").default;
                }): _81.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _81.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryNFTsRequest;
                fromJSON(object: any): _81.QueryNFTsRequest;
                fromPartial(object: {
                    class_id?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _81.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryNFTsResponse;
                fromJSON(object: any): _81.QueryNFTsResponse;
                fromPartial(object: {
                    nfts?: {
                        class_id?: string;
                        id?: string;
                        uri?: string;
                        uri_hash?: string;
                        data?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _81.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _81.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryNFTRequest;
                fromJSON(object: any): _81.QueryNFTRequest;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                }): _81.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _81.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryNFTResponse;
                fromJSON(object: any): _81.QueryNFTResponse;
                fromPartial(object: {
                    nft?: {
                        class_id?: string;
                        id?: string;
                        uri?: string;
                        uri_hash?: string;
                        data?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _81.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _81.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClassRequest;
                fromJSON(object: any): _81.QueryClassRequest;
                fromPartial(object: {
                    class_id?: string;
                }): _81.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _81.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClassResponse;
                fromJSON(object: any): _81.QueryClassResponse;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uri_hash?: string;
                        data?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _81.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _81.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClassesRequest;
                fromJSON(object: any): _81.QueryClassesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _81.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClassesResponse;
                fromJSON(object: any): _81.QueryClassesResponse;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uri_hash?: string;
                        data?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _81.QueryClassesResponse;
            };
            Class: {
                encode(message: _80.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Class;
                fromJSON(object: any): _80.Class;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    symbol?: string;
                    description?: string;
                    uri?: string;
                    uri_hash?: string;
                    data?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _80.Class;
            };
            NFT: {
                encode(message: _80.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.NFT;
                fromJSON(object: any): _80.NFT;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                    uri?: string;
                    uri_hash?: string;
                    data?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _80.NFT;
            };
            GenesisState: {
                encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GenesisState;
                fromJSON(object: any): _79.GenesisState;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uri_hash?: string;
                        data?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    entries?: {
                        owner?: string;
                        nfts?: {
                            class_id?: string;
                            id?: string;
                            uri?: string;
                            uri_hash?: string;
                            data?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                }): _79.GenesisState;
            };
            Entry: {
                encode(message: _79.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Entry;
                fromJSON(object: any): _79.Entry;
                fromPartial(object: {
                    owner?: string;
                    nfts?: {
                        class_id?: string;
                        id?: string;
                        uri?: string;
                        uri_hash?: string;
                        data?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _79.Entry;
            };
            EventSend: {
                encode(message: _78.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EventSend;
                fromJSON(object: any): _78.EventSend;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _78.EventSend;
            };
            EventMint: {
                encode(message: _78.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EventMint;
                fromJSON(object: any): _78.EventMint;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                    owner?: string;
                }): _78.EventMint;
            };
            EventBurn: {
                encode(message: _78.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EventBurn;
                fromJSON(object: any): _78.EventBurn;
                fromPartial(object: {
                    class_id?: string;
                    id?: string;
                    owner?: string;
                }): _78.EventBurn;
            };
        };
    }
    namespace orm {
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _257.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _83.GetRequest): Promise<_83.GetResponse>;
                    list(request: _83.ListRequest): Promise<_83.ListResponse>;
                };
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useGet: <TData = _83.GetResponse>({ request, options }: _257.UseGetQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useList: <TData_1 = _83.ListResponse>({ request, options }: _257.UseListQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                };
                GetRequest: {
                    encode(message: _83.GetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetRequest;
                    fromJSON(object: any): _83.GetRequest;
                    fromPartial(object: {
                        message_name?: string;
                        index?: string;
                        values?: {
                            uint?: string | number | import("long").default;
                            int?: string | number | import("long").default;
                            str?: string;
                            bytes?: Uint8Array;
                            enum?: string;
                            bool?: boolean;
                            timestamp?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            duration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                        }[];
                    }): _83.GetRequest;
                };
                GetResponse: {
                    encode(message: _83.GetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetResponse;
                    fromJSON(object: any): _83.GetResponse;
                    fromPartial(object: {
                        result?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _83.GetResponse;
                };
                ListRequest: {
                    encode(message: _83.ListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ListRequest;
                    fromJSON(object: any): _83.ListRequest;
                    fromPartial(object: {
                        message_name?: string;
                        index?: string;
                        prefix?: {
                            values?: {
                                uint?: string | number | import("long").default;
                                int?: string | number | import("long").default;
                                str?: string;
                                bytes?: Uint8Array;
                                enum?: string;
                                bool?: boolean;
                                timestamp?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                duration?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                            }[];
                        };
                        range?: {
                            start?: {
                                uint?: string | number | import("long").default;
                                int?: string | number | import("long").default;
                                str?: string;
                                bytes?: Uint8Array;
                                enum?: string;
                                bool?: boolean;
                                timestamp?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                duration?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                            }[];
                            end?: {
                                uint?: string | number | import("long").default;
                                int?: string | number | import("long").default;
                                str?: string;
                                bytes?: Uint8Array;
                                enum?: string;
                                bool?: boolean;
                                timestamp?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                duration?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                            }[];
                        };
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _83.ListRequest;
                };
                ListRequest_Prefix: {
                    encode(message: _83.ListRequest_Prefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ListRequest_Prefix;
                    fromJSON(object: any): _83.ListRequest_Prefix;
                    fromPartial(object: {
                        values?: {
                            uint?: string | number | import("long").default;
                            int?: string | number | import("long").default;
                            str?: string;
                            bytes?: Uint8Array;
                            enum?: string;
                            bool?: boolean;
                            timestamp?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            duration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                        }[];
                    }): _83.ListRequest_Prefix;
                };
                ListRequest_Range: {
                    encode(message: _83.ListRequest_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ListRequest_Range;
                    fromJSON(object: any): _83.ListRequest_Range;
                    fromPartial(object: {
                        start?: {
                            uint?: string | number | import("long").default;
                            int?: string | number | import("long").default;
                            str?: string;
                            bytes?: Uint8Array;
                            enum?: string;
                            bool?: boolean;
                            timestamp?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            duration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                        }[];
                        end?: {
                            uint?: string | number | import("long").default;
                            int?: string | number | import("long").default;
                            str?: string;
                            bytes?: Uint8Array;
                            enum?: string;
                            bool?: boolean;
                            timestamp?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            duration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                        }[];
                    }): _83.ListRequest_Range;
                };
                ListResponse: {
                    encode(message: _83.ListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ListResponse;
                    fromJSON(object: any): _83.ListResponse;
                    fromPartial(object: {
                        results?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _83.ListResponse;
                };
                IndexValue: {
                    encode(message: _83.IndexValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.IndexValue;
                    fromJSON(object: any): _83.IndexValue;
                    fromPartial(object: {
                        uint?: string | number | import("long").default;
                        int?: string | number | import("long").default;
                        str?: string;
                        bytes?: Uint8Array;
                        enum?: string;
                        bool?: boolean;
                        timestamp?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    }): _83.IndexValue;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _84.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.TableDescriptor;
                fromJSON(object: any): _84.TableDescriptor;
                fromPartial(object: {
                    primary_key?: {
                        fields?: string;
                        auto_increment?: boolean;
                    };
                    index?: {
                        fields?: string;
                        id?: number;
                        unique?: boolean;
                    }[];
                    id?: number;
                }): _84.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _84.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PrimaryKeyDescriptor;
                fromJSON(object: any): _84.PrimaryKeyDescriptor;
                fromPartial(object: {
                    fields?: string;
                    auto_increment?: boolean;
                }): _84.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _84.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.SecondaryIndexDescriptor;
                fromJSON(object: any): _84.SecondaryIndexDescriptor;
                fromPartial(object: {
                    fields?: string;
                    id?: number;
                    unique?: boolean;
                }): _84.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _84.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.SingletonDescriptor;
                fromJSON(object: any): _84.SingletonDescriptor;
                fromPartial(object: {
                    id?: number;
                }): _84.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _85.StorageType;
            storageTypeToJSON(object: _85.StorageType): string;
            StorageType: typeof _85.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _85.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ModuleSchemaDescriptor;
                fromJSON(object: any): _85.ModuleSchemaDescriptor;
                fromPartial(object: {
                    schema_file?: {
                        id?: number;
                        proto_file_name?: string;
                        storage_type?: _85.StorageType;
                    }[];
                    prefix?: Uint8Array;
                }): _85.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _85.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _85.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: {
                    id?: number;
                    proto_file_name?: string;
                    storage_type?: _85.StorageType;
                }): _85.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _258.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                subspaces(request?: _87.QuerySubspacesRequest): Promise<_87.QuerySubspacesResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useParams: <TData = _87.QueryParamsResponse>({ request, options }: _258.UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useSubspaces: <TData_1 = _87.QuerySubspacesResponse>({ request, options }: _258.UseSubspacesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
            };
            LCDQueryClient: typeof _236.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _87.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsRequest;
                fromJSON(object: any): _87.QueryParamsRequest;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _87.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _87.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsResponse;
                fromJSON(object: any): _87.QueryParamsResponse;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _87.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _87.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QuerySubspacesRequest;
                fromJSON(_: any): _87.QuerySubspacesRequest;
                fromPartial(_: {}): _87.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _87.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QuerySubspacesResponse;
                fromJSON(object: any): _87.QuerySubspacesResponse;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _87.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _87.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Subspace;
                fromJSON(object: any): _87.Subspace;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _87.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _86.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ParameterChangeProposal;
                fromJSON(object: any): _86.ParameterChangeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _86.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _86.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ParamChange;
                fromJSON(object: any): _86.ParamChange;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _86.ParamChange;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                encode(_: _89.FileDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.FileDescriptorsRequest;
                fromJSON(_: any): _89.FileDescriptorsRequest;
                fromPartial(_: {}): _89.FileDescriptorsRequest;
            };
            FileDescriptorsResponse: {
                encode(message: _89.FileDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.FileDescriptorsResponse;
                fromJSON(object: any): _89.FileDescriptorsResponse;
                fromPartial(object: {
                    files?: {
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
                                label?: import("../google/protobuf/descriptor").FieldDescriptorProto_Label;
                                type?: import("../google/protobuf/descriptor").FieldDescriptorProto_Type;
                                type_name?: string;
                                extendee?: string;
                                default_value?: string;
                                oneof_index?: number;
                                json_name?: string;
                                options?: {
                                    ctype?: import("../google/protobuf/descriptor").FieldOptions_CType;
                                    packed?: boolean;
                                    jstype?: import("../google/protobuf/descriptor").FieldOptions_JSType;
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
                                label?: import("../google/protobuf/descriptor").FieldDescriptorProto_Label;
                                type?: import("../google/protobuf/descriptor").FieldDescriptorProto_Type;
                                type_name?: string;
                                extendee?: string;
                                default_value?: string;
                                oneof_index?: number;
                                json_name?: string;
                                options?: {
                                    ctype?: import("../google/protobuf/descriptor").FieldOptions_CType;
                                    packed?: boolean;
                                    jstype?: import("../google/protobuf/descriptor").FieldOptions_JSType;
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
                                    idempotency_level?: import("../google/protobuf/descriptor").MethodOptions_IdempotencyLevel;
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
                            label?: import("../google/protobuf/descriptor").FieldDescriptorProto_Label;
                            type?: import("../google/protobuf/descriptor").FieldDescriptorProto_Type;
                            type_name?: string;
                            extendee?: string;
                            default_value?: string;
                            oneof_index?: number;
                            json_name?: string;
                            options?: {
                                ctype?: import("../google/protobuf/descriptor").FieldOptions_CType;
                                packed?: boolean;
                                jstype?: import("../google/protobuf/descriptor").FieldOptions_JSType;
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
                            optimize_for?: import("../google/protobuf/descriptor").FileOptions_OptimizeMode;
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
                }): _89.FileDescriptorsResponse;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _276.MsgClientImpl;
            QueryClientImpl: typeof _259.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                signingInfo(request: _91.QuerySigningInfoRequest): Promise<_91.QuerySigningInfoResponse>;
                signingInfos(request?: _91.QuerySigningInfosRequest): Promise<_91.QuerySigningInfosResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useParams: <TData = _91.QueryParamsResponse>({ request, options }: _259.UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useSigningInfo: <TData_1 = _91.QuerySigningInfoResponse>({ request, options }: _259.UseSigningInfoQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useSigningInfos: <TData_2 = _91.QuerySigningInfosResponse>({ request, options }: _259.UseSigningInfosQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
            };
            LCDQueryClient: typeof _237.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _93.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _93.MsgUnjail): {
                        typeUrl: string;
                        value: _93.MsgUnjail;
                    };
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _93.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _93.MsgUnjail): {
                        typeUrl: string;
                        value: _93.MsgUnjail;
                    };
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validator_addr }: _93.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _93.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _93.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            signed_blocks_window: string;
                            min_signed_per_window: Uint8Array;
                            downtime_jail_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            slash_fraction_double_sign: Uint8Array;
                            slash_fraction_downtime: Uint8Array;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            signed_blocks_window: string;
                            min_signed_per_window: Uint8Array;
                            downtime_jail_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            slash_fraction_double_sign: Uint8Array;
                            slash_fraction_downtime: Uint8Array;
                        };
                    }) => _93.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                encode(message: _93.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgUnjail;
                fromJSON(object: any): _93.MsgUnjail;
                fromPartial(object: {
                    validator_addr?: string;
                }): _93.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _93.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgUnjailResponse;
                fromJSON(_: any): _93.MsgUnjailResponse;
                fromPartial(_: {}): _93.MsgUnjailResponse;
            };
            MsgUpdateParams: {
                encode(message: _93.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgUpdateParams;
                fromJSON(object: any): _93.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        signed_blocks_window?: string | number | import("long").default;
                        min_signed_per_window?: Uint8Array;
                        downtime_jail_duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        slash_fraction_double_sign?: Uint8Array;
                        slash_fraction_downtime?: Uint8Array;
                    };
                }): _93.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _93.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgUpdateParamsResponse;
                fromJSON(_: any): _93.MsgUpdateParamsResponse;
                fromPartial(_: {}): _93.MsgUpdateParamsResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _92.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ValidatorSigningInfo;
                fromJSON(object: any): _92.ValidatorSigningInfo;
                fromPartial(object: {
                    address?: string;
                    start_height?: string | number | import("long").default;
                    index_offset?: string | number | import("long").default;
                    jailed_until?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    tombstoned?: boolean;
                    missed_blocks_counter?: string | number | import("long").default;
                }): _92.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _92.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Params;
                fromJSON(object: any): _92.Params;
                fromPartial(object: {
                    signed_blocks_window?: string | number | import("long").default;
                    min_signed_per_window?: Uint8Array;
                    downtime_jail_duration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    slash_fraction_double_sign?: Uint8Array;
                    slash_fraction_downtime?: Uint8Array;
                }): _92.Params;
            };
            QueryParamsRequest: {
                encode(_: _91.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsRequest;
                fromJSON(_: any): _91.QueryParamsRequest;
                fromPartial(_: {}): _91.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _91.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsResponse;
                fromJSON(object: any): _91.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        signed_blocks_window?: string | number | import("long").default;
                        min_signed_per_window?: Uint8Array;
                        downtime_jail_duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        slash_fraction_double_sign?: Uint8Array;
                        slash_fraction_downtime?: Uint8Array;
                    };
                }): _91.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _91.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QuerySigningInfoRequest;
                fromJSON(object: any): _91.QuerySigningInfoRequest;
                fromPartial(object: {
                    cons_address?: string;
                }): _91.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _91.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QuerySigningInfoResponse;
                fromJSON(object: any): _91.QuerySigningInfoResponse;
                fromPartial(object: {
                    val_signing_info?: {
                        address?: string;
                        start_height?: string | number | import("long").default;
                        index_offset?: string | number | import("long").default;
                        jailed_until?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        tombstoned?: boolean;
                        missed_blocks_counter?: string | number | import("long").default;
                    };
                }): _91.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _91.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QuerySigningInfosRequest;
                fromJSON(object: any): _91.QuerySigningInfosRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _91.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _91.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QuerySigningInfosResponse;
                fromJSON(object: any): _91.QuerySigningInfosResponse;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        start_height?: string | number | import("long").default;
                        index_offset?: string | number | import("long").default;
                        jailed_until?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        tombstoned?: boolean;
                        missed_blocks_counter?: string | number | import("long").default;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _91.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _90.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.GenesisState;
                fromJSON(object: any): _90.GenesisState;
                fromPartial(object: {
                    params?: {
                        signed_blocks_window?: string | number | import("long").default;
                        min_signed_per_window?: Uint8Array;
                        downtime_jail_duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        slash_fraction_double_sign?: Uint8Array;
                        slash_fraction_downtime?: Uint8Array;
                    };
                    signing_infos?: {
                        address?: string;
                        validator_signing_info?: {
                            address?: string;
                            start_height?: string | number | import("long").default;
                            index_offset?: string | number | import("long").default;
                            jailed_until?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            tombstoned?: boolean;
                            missed_blocks_counter?: string | number | import("long").default;
                        };
                    }[];
                    missed_blocks?: {
                        address?: string;
                        missed_blocks?: {
                            index?: string | number | import("long").default;
                            missed?: boolean;
                        }[];
                    }[];
                }): _90.GenesisState;
            };
            SigningInfo: {
                encode(message: _90.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SigningInfo;
                fromJSON(object: any): _90.SigningInfo;
                fromPartial(object: {
                    address?: string;
                    validator_signing_info?: {
                        address?: string;
                        start_height?: string | number | import("long").default;
                        index_offset?: string | number | import("long").default;
                        jailed_until?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        tombstoned?: boolean;
                        missed_blocks_counter?: string | number | import("long").default;
                    };
                }): _90.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _90.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ValidatorMissedBlocks;
                fromJSON(object: any): _90.ValidatorMissedBlocks;
                fromPartial(object: {
                    address?: string;
                    missed_blocks?: {
                        index?: string | number | import("long").default;
                        missed?: boolean;
                    }[];
                }): _90.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _90.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MissedBlock;
                fromJSON(object: any): _90.MissedBlock;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                    missed?: boolean;
                }): _90.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _277.MsgClientImpl;
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _96.QueryValidatorsRequest): Promise<_96.QueryValidatorsResponse>;
                validator(request: _96.QueryValidatorRequest): Promise<_96.QueryValidatorResponse>;
                validatorDelegations(request: _96.QueryValidatorDelegationsRequest): Promise<_96.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _96.QueryValidatorUnbondingDelegationsRequest): Promise<_96.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _96.QueryDelegationRequest): Promise<_96.QueryDelegationResponse>;
                unbondingDelegation(request: _96.QueryUnbondingDelegationRequest): Promise<_96.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _96.QueryDelegatorDelegationsRequest): Promise<_96.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _96.QueryDelegatorUnbondingDelegationsRequest): Promise<_96.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _96.QueryRedelegationsRequest): Promise<_96.QueryRedelegationsResponse>;
                delegatorValidators(request: _96.QueryDelegatorValidatorsRequest): Promise<_96.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _96.QueryDelegatorValidatorRequest): Promise<_96.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _96.QueryHistoricalInfoRequest): Promise<_96.QueryHistoricalInfoResponse>;
                pool(request?: _96.QueryPoolRequest): Promise<_96.QueryPoolResponse>;
                params(request?: _96.QueryParamsRequest): Promise<_96.QueryParamsResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useValidators: <TData = _96.QueryValidatorsResponse>({ request, options }: _260.UseValidatorsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useValidator: <TData_1 = _96.QueryValidatorResponse>({ request, options }: _260.UseValidatorQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useValidatorDelegations: <TData_2 = _96.QueryValidatorDelegationsResponse>({ request, options }: _260.UseValidatorDelegationsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useValidatorUnbondingDelegations: <TData_3 = _96.QueryValidatorUnbondingDelegationsResponse>({ request, options }: _260.UseValidatorUnbondingDelegationsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useDelegation: <TData_4 = _96.QueryDelegationResponse>({ request, options }: _260.UseDelegationQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useUnbondingDelegation: <TData_5 = _96.QueryUnbondingDelegationResponse>({ request, options }: _260.UseUnbondingDelegationQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useDelegatorDelegations: <TData_6 = _96.QueryDelegatorDelegationsResponse>({ request, options }: _260.UseDelegatorDelegationsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useDelegatorUnbondingDelegations: <TData_7 = _96.QueryDelegatorUnbondingDelegationsResponse>({ request, options }: _260.UseDelegatorUnbondingDelegationsQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                useRedelegations: <TData_8 = _96.QueryRedelegationsResponse>({ request, options }: _260.UseRedelegationsQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                useDelegatorValidators: <TData_9 = _96.QueryDelegatorValidatorsResponse>({ request, options }: _260.UseDelegatorValidatorsQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
                useDelegatorValidator: <TData_10 = _96.QueryDelegatorValidatorResponse>({ request, options }: _260.UseDelegatorValidatorQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
                useHistoricalInfo: <TData_11 = _96.QueryHistoricalInfoResponse>({ request, options }: _260.UseHistoricalInfoQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
                usePool: <TData_12 = _96.QueryPoolResponse>({ request, options }: _260.UsePoolQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
                useParams: <TData_13 = _96.QueryParamsResponse>({ request, options }: _260.UseParamsQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
            };
            LCDQueryClient: typeof _238.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _98.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _98.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _98.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _98.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _98.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _98.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _98.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _98.MsgCreateValidator): {
                        typeUrl: string;
                        value: _98.MsgCreateValidator;
                    };
                    editValidator(value: _98.MsgEditValidator): {
                        typeUrl: string;
                        value: _98.MsgEditValidator;
                    };
                    delegate(value: _98.MsgDelegate): {
                        typeUrl: string;
                        value: _98.MsgDelegate;
                    };
                    beginRedelegate(value: _98.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _98.MsgBeginRedelegate;
                    };
                    undelegate(value: _98.MsgUndelegate): {
                        typeUrl: string;
                        value: _98.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _98.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _98.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _98.MsgUpdateParams): {
                        typeUrl: string;
                        value: _98.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _98.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _98.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _98.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _98.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _98.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _98.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _98.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _98.MsgCreateValidator): {
                        typeUrl: string;
                        value: _98.MsgCreateValidator;
                    };
                    editValidator(value: _98.MsgEditValidator): {
                        typeUrl: string;
                        value: _98.MsgEditValidator;
                    };
                    delegate(value: _98.MsgDelegate): {
                        typeUrl: string;
                        value: _98.MsgDelegate;
                    };
                    beginRedelegate(value: _98.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _98.MsgBeginRedelegate;
                    };
                    undelegate(value: _98.MsgUndelegate): {
                        typeUrl: string;
                        value: _98.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _98.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _98.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _98.MsgUpdateParams): {
                        typeUrl: string;
                        value: _98.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: _98.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: import("@cosmjs/amino").Pubkey;
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: import("@cosmjs/amino").Pubkey;
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _98.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validator_address, commission_rate, min_self_delegation }: _98.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _98.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegator_address, validator_address, amount }: _98.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _98.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: _98.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _98.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegator_address, validator_address, amount }: _98.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _98.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegator_address, validator_address, amount, creation_height }: _98.MsgCancelUnbondingDelegation) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    };
                    fromAmino: ({ delegator_address, validator_address, amount, creation_height }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    }) => _98.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _98.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            unbonding_time: {
                                seconds: string;
                                nanos: number;
                            };
                            max_validators: number;
                            max_entries: number;
                            historical_entries: number;
                            bond_denom: string;
                            min_commission_rate: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            unbonding_time: {
                                seconds: string;
                                nanos: number;
                            };
                            max_validators: number;
                            max_entries: number;
                            historical_entries: number;
                            bond_denom: string;
                            min_commission_rate: string;
                        };
                    }) => _98.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                encode(message: _98.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgCreateValidator;
                fromJSON(object: any): _98.MsgCreateValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        security_contact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        max_rate?: string;
                        max_change_rate?: string;
                    };
                    min_self_delegation?: string;
                    delegator_address?: string;
                    validator_address?: string;
                    pubkey?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _98.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _98.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgCreateValidatorResponse;
                fromJSON(_: any): _98.MsgCreateValidatorResponse;
                fromPartial(_: {}): _98.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _98.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgEditValidator;
                fromJSON(object: any): _98.MsgEditValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        security_contact?: string;
                        details?: string;
                    };
                    validator_address?: string;
                    commission_rate?: string;
                    min_self_delegation?: string;
                }): _98.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _98.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgEditValidatorResponse;
                fromJSON(_: any): _98.MsgEditValidatorResponse;
                fromPartial(_: {}): _98.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _98.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgDelegate;
                fromJSON(object: any): _98.MsgDelegate;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _98.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _98.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgDelegateResponse;
                fromJSON(_: any): _98.MsgDelegateResponse;
                fromPartial(_: {}): _98.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _98.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgBeginRedelegate;
                fromJSON(object: any): _98.MsgBeginRedelegate;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_src_address?: string;
                    validator_dst_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _98.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _98.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgBeginRedelegateResponse;
                fromJSON(object: any): _98.MsgBeginRedelegateResponse;
                fromPartial(object: {
                    completion_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _98.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _98.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgUndelegate;
                fromJSON(object: any): _98.MsgUndelegate;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _98.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _98.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgUndelegateResponse;
                fromJSON(object: any): _98.MsgUndelegateResponse;
                fromPartial(object: {
                    completion_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _98.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _98.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _98.MsgCancelUnbondingDelegation;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    creation_height?: string | number | import("long").default;
                }): _98.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _98.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _98.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: {}): _98.MsgCancelUnbondingDelegationResponse;
            };
            MsgUpdateParams: {
                encode(message: _98.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgUpdateParams;
                fromJSON(object: any): _98.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        unbonding_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        max_validators?: number;
                        max_entries?: number;
                        historical_entries?: number;
                        bond_denom?: string;
                        min_commission_rate?: string;
                    };
                }): _98.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _98.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgUpdateParamsResponse;
                fromJSON(_: any): _98.MsgUpdateParamsResponse;
                fromPartial(_: {}): _98.MsgUpdateParamsResponse;
            };
            bondStatusFromJSON(object: any): _97.BondStatus;
            bondStatusToJSON(object: _97.BondStatus): string;
            infractionFromJSON(object: any): _97.Infraction;
            infractionToJSON(object: _97.Infraction): string;
            BondStatus: typeof _97.BondStatus;
            Infraction: typeof _97.Infraction;
            HistoricalInfo: {
                encode(message: _97.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.HistoricalInfo;
                fromJSON(object: any): _97.HistoricalInfo;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: string | number | import("long").default;
                            app?: string | number | import("long").default;
                        };
                        chain_id?: string;
                        height?: string | number | import("long").default;
                        time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        last_block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        last_commit_hash?: Uint8Array;
                        data_hash?: Uint8Array;
                        validators_hash?: Uint8Array;
                        next_validators_hash?: Uint8Array;
                        consensus_hash?: Uint8Array;
                        app_hash?: Uint8Array;
                        last_results_hash?: Uint8Array;
                        evidence_hash?: Uint8Array;
                        proposer_address?: Uint8Array;
                    };
                    valset?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _97.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                        };
                        min_self_delegation?: string;
                        unbonding_on_hold_ref_count?: string | number | import("long").default;
                        unbonding_ids?: (string | number | import("long").default)[];
                    }[];
                }): _97.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _97.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CommissionRates;
                fromJSON(object: any): _97.CommissionRates;
                fromPartial(object: {
                    rate?: string;
                    max_rate?: string;
                    max_change_rate?: string;
                }): _97.CommissionRates;
            };
            Commission: {
                encode(message: _97.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Commission;
                fromJSON(object: any): _97.Commission;
                fromPartial(object: {
                    commission_rates?: {
                        rate?: string;
                        max_rate?: string;
                        max_change_rate?: string;
                    };
                    update_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _97.Commission;
            };
            Description: {
                encode(message: _97.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Description;
                fromJSON(object: any): _97.Description;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    security_contact?: string;
                    details?: string;
                }): _97.Description;
            };
            Validator: {
                encode(message: _97.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Validator;
                fromJSON(object: any): _97.Validator;
                fromPartial(object: {
                    operator_address?: string;
                    consensus_pubkey?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _97.BondStatus;
                    tokens?: string;
                    delegator_shares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        security_contact?: string;
                        details?: string;
                    };
                    unbonding_height?: string | number | import("long").default;
                    unbonding_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    commission?: {
                        commission_rates?: {
                            rate?: string;
                            max_rate?: string;
                            max_change_rate?: string;
                        };
                        update_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    min_self_delegation?: string;
                    unbonding_on_hold_ref_count?: string | number | import("long").default;
                    unbonding_ids?: (string | number | import("long").default)[];
                }): _97.Validator;
            };
            ValAddresses: {
                encode(message: _97.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ValAddresses;
                fromJSON(object: any): _97.ValAddresses;
                fromPartial(object: {
                    addresses?: string[];
                }): _97.ValAddresses;
            };
            DVPair: {
                encode(message: _97.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.DVPair;
                fromJSON(object: any): _97.DVPair;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                }): _97.DVPair;
            };
            DVPairs: {
                encode(message: _97.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.DVPairs;
                fromJSON(object: any): _97.DVPairs;
                fromPartial(object: {
                    pairs?: {
                        delegator_address?: string;
                        validator_address?: string;
                    }[];
                }): _97.DVPairs;
            };
            DVVTriplet: {
                encode(message: _97.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.DVVTriplet;
                fromJSON(object: any): _97.DVVTriplet;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_src_address?: string;
                    validator_dst_address?: string;
                }): _97.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _97.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.DVVTriplets;
                fromJSON(object: any): _97.DVVTriplets;
                fromPartial(object: {
                    triplets?: {
                        delegator_address?: string;
                        validator_src_address?: string;
                        validator_dst_address?: string;
                    }[];
                }): _97.DVVTriplets;
            };
            Delegation: {
                encode(message: _97.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Delegation;
                fromJSON(object: any): _97.Delegation;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    shares?: string;
                }): _97.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _97.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.UnbondingDelegation;
                fromJSON(object: any): _97.UnbondingDelegation;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    entries?: {
                        creation_height?: string | number | import("long").default;
                        completion_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        initial_balance?: string;
                        balance?: string;
                        unbonding_id?: string | number | import("long").default;
                        unbonding_on_hold_ref_count?: string | number | import("long").default;
                    }[];
                }): _97.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _97.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.UnbondingDelegationEntry;
                fromJSON(object: any): _97.UnbondingDelegationEntry;
                fromPartial(object: {
                    creation_height?: string | number | import("long").default;
                    completion_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    initial_balance?: string;
                    balance?: string;
                    unbonding_id?: string | number | import("long").default;
                    unbonding_on_hold_ref_count?: string | number | import("long").default;
                }): _97.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _97.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.RedelegationEntry;
                fromJSON(object: any): _97.RedelegationEntry;
                fromPartial(object: {
                    creation_height?: string | number | import("long").default;
                    completion_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    initial_balance?: string;
                    shares_dst?: string;
                    unbonding_id?: string | number | import("long").default;
                    unbonding_on_hold_ref_count?: string | number | import("long").default;
                }): _97.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _97.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Redelegation;
                fromJSON(object: any): _97.Redelegation;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_src_address?: string;
                    validator_dst_address?: string;
                    entries?: {
                        creation_height?: string | number | import("long").default;
                        completion_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        initial_balance?: string;
                        shares_dst?: string;
                        unbonding_id?: string | number | import("long").default;
                        unbonding_on_hold_ref_count?: string | number | import("long").default;
                    }[];
                }): _97.Redelegation;
            };
            Params: {
                encode(message: _97.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Params;
                fromJSON(object: any): _97.Params;
                fromPartial(object: {
                    unbonding_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    max_validators?: number;
                    max_entries?: number;
                    historical_entries?: number;
                    bond_denom?: string;
                    min_commission_rate?: string;
                }): _97.Params;
            };
            DelegationResponse: {
                encode(message: _97.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.DelegationResponse;
                fromJSON(object: any): _97.DelegationResponse;
                fromPartial(object: {
                    delegation?: {
                        delegator_address?: string;
                        validator_address?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _97.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _97.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.RedelegationEntryResponse;
                fromJSON(object: any): _97.RedelegationEntryResponse;
                fromPartial(object: {
                    redelegation_entry?: {
                        creation_height?: string | number | import("long").default;
                        completion_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        initial_balance?: string;
                        shares_dst?: string;
                        unbonding_id?: string | number | import("long").default;
                        unbonding_on_hold_ref_count?: string | number | import("long").default;
                    };
                    balance?: string;
                }): _97.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _97.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.RedelegationResponse;
                fromJSON(object: any): _97.RedelegationResponse;
                fromPartial(object: {
                    redelegation?: {
                        delegator_address?: string;
                        validator_src_address?: string;
                        validator_dst_address?: string;
                        entries?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            initial_balance?: string;
                            shares_dst?: string;
                            unbonding_id?: string | number | import("long").default;
                            unbonding_on_hold_ref_count?: string | number | import("long").default;
                        }[];
                    };
                    entries?: {
                        redelegation_entry?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            initial_balance?: string;
                            shares_dst?: string;
                            unbonding_id?: string | number | import("long").default;
                            unbonding_on_hold_ref_count?: string | number | import("long").default;
                        };
                        balance?: string;
                    }[];
                }): _97.RedelegationResponse;
            };
            Pool: {
                encode(message: _97.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Pool;
                fromJSON(object: any): _97.Pool;
                fromPartial(object: {
                    not_bonded_tokens?: string;
                    bonded_tokens?: string;
                }): _97.Pool;
            };
            ValidatorUpdates: {
                encode(message: _97.ValidatorUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ValidatorUpdates;
                fromJSON(object: any): _97.ValidatorUpdates;
                fromPartial(object: {
                    updates?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").default;
                    }[];
                }): _97.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _96.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryValidatorsRequest;
                fromJSON(object: any): _96.QueryValidatorsRequest;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _96.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _96.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryValidatorsResponse;
                fromJSON(object: any): _96.QueryValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _97.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                        };
                        min_self_delegation?: string;
                        unbonding_on_hold_ref_count?: string | number | import("long").default;
                        unbonding_ids?: (string | number | import("long").default)[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _96.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _96.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryValidatorRequest;
                fromJSON(object: any): _96.QueryValidatorRequest;
                fromPartial(object: {
                    validator_addr?: string;
                }): _96.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _96.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryValidatorResponse;
                fromJSON(object: any): _96.QueryValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _97.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                        };
                        min_self_delegation?: string;
                        unbonding_on_hold_ref_count?: string | number | import("long").default;
                        unbonding_ids?: (string | number | import("long").default)[];
                    };
                }): _96.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _96.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _96.QueryValidatorDelegationsRequest;
                fromPartial(object: {
                    validator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _96.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _96.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _96.QueryValidatorDelegationsResponse;
                fromPartial(object: {
                    delegation_responses?: {
                        delegation?: {
                            delegator_address?: string;
                            validator_address?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _96.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _96.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _96.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    validator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _96.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _96.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _96.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbonding_responses?: {
                        delegator_address?: string;
                        validator_address?: string;
                        entries?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            initial_balance?: string;
                            balance?: string;
                            unbonding_id?: string | number | import("long").default;
                            unbonding_on_hold_ref_count?: string | number | import("long").default;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _96.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _96.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryDelegationRequest;
                fromJSON(object: any): _96.QueryDelegationRequest;
                fromPartial(object: {
                    delegator_addr?: string;
                    validator_addr?: string;
                }): _96.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _96.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryDelegationResponse;
                fromJSON(object: any): _96.QueryDelegationResponse;
                fromPartial(object: {
                    delegation_response?: {
                        delegation?: {
                            delegator_address?: string;
                            validator_address?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _96.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _96.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _96.QueryUnbondingDelegationRequest;
                fromPartial(object: {
                    delegator_addr?: string;
                    validator_addr?: string;
                }): _96.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _96.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _96.QueryUnbondingDelegationResponse;
                fromPartial(object: {
                    unbond?: {
                        delegator_address?: string;
                        validator_address?: string;
                        entries?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            initial_balance?: string;
                            balance?: string;
                            unbonding_id?: string | number | import("long").default;
                            unbonding_on_hold_ref_count?: string | number | import("long").default;
                        }[];
                    };
                }): _96.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _96.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _96.QueryDelegatorDelegationsRequest;
                fromPartial(object: {
                    delegator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _96.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _96.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _96.QueryDelegatorDelegationsResponse;
                fromPartial(object: {
                    delegation_responses?: {
                        delegation?: {
                            delegator_address?: string;
                            validator_address?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _96.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _96.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _96.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    delegator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _96.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _96.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _96.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbonding_responses?: {
                        delegator_address?: string;
                        validator_address?: string;
                        entries?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            initial_balance?: string;
                            balance?: string;
                            unbonding_id?: string | number | import("long").default;
                            unbonding_on_hold_ref_count?: string | number | import("long").default;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _96.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _96.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryRedelegationsRequest;
                fromJSON(object: any): _96.QueryRedelegationsRequest;
                fromPartial(object: {
                    delegator_addr?: string;
                    src_validator_addr?: string;
                    dst_validator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _96.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _96.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryRedelegationsResponse;
                fromJSON(object: any): _96.QueryRedelegationsResponse;
                fromPartial(object: {
                    redelegation_responses?: {
                        redelegation?: {
                            delegator_address?: string;
                            validator_src_address?: string;
                            validator_dst_address?: string;
                            entries?: {
                                creation_height?: string | number | import("long").default;
                                completion_time?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                initial_balance?: string;
                                shares_dst?: string;
                                unbonding_id?: string | number | import("long").default;
                                unbonding_on_hold_ref_count?: string | number | import("long").default;
                            }[];
                        };
                        entries?: {
                            redelegation_entry?: {
                                creation_height?: string | number | import("long").default;
                                completion_time?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                initial_balance?: string;
                                shares_dst?: string;
                                unbonding_id?: string | number | import("long").default;
                                unbonding_on_hold_ref_count?: string | number | import("long").default;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _96.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _96.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _96.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _96.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _96.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _96.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _97.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                        };
                        min_self_delegation?: string;
                        unbonding_on_hold_ref_count?: string | number | import("long").default;
                        unbonding_ids?: (string | number | import("long").default)[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _96.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _96.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _96.QueryDelegatorValidatorRequest;
                fromPartial(object: {
                    delegator_addr?: string;
                    validator_addr?: string;
                }): _96.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _96.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _96.QueryDelegatorValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _97.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                        };
                        min_self_delegation?: string;
                        unbonding_on_hold_ref_count?: string | number | import("long").default;
                        unbonding_ids?: (string | number | import("long").default)[];
                    };
                }): _96.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _96.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryHistoricalInfoRequest;
                fromJSON(object: any): _96.QueryHistoricalInfoRequest;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                }): _96.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _96.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryHistoricalInfoResponse;
                fromJSON(object: any): _96.QueryHistoricalInfoResponse;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").default;
                                app?: string | number | import("long").default;
                            };
                            chain_id?: string;
                            height?: string | number | import("long").default;
                            time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            last_block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            last_commit_hash?: Uint8Array;
                            data_hash?: Uint8Array;
                            validators_hash?: Uint8Array;
                            next_validators_hash?: Uint8Array;
                            consensus_hash?: Uint8Array;
                            app_hash?: Uint8Array;
                            last_results_hash?: Uint8Array;
                            evidence_hash?: Uint8Array;
                            proposer_address?: Uint8Array;
                        };
                        valset?: {
                            operator_address?: string;
                            consensus_pubkey?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _97.BondStatus;
                            tokens?: string;
                            delegator_shares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                security_contact?: string;
                                details?: string;
                            };
                            unbonding_height?: string | number | import("long").default;
                            unbonding_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            commission?: {
                                commission_rates?: {
                                    rate?: string;
                                    max_rate?: string;
                                    max_change_rate?: string;
                                };
                                update_time?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                            };
                            min_self_delegation?: string;
                            unbonding_on_hold_ref_count?: string | number | import("long").default;
                            unbonding_ids?: (string | number | import("long").default)[];
                        }[];
                    };
                }): _96.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _96.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryPoolRequest;
                fromJSON(_: any): _96.QueryPoolRequest;
                fromPartial(_: {}): _96.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _96.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryPoolResponse;
                fromJSON(object: any): _96.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        not_bonded_tokens?: string;
                        bonded_tokens?: string;
                    };
                }): _96.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _96.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryParamsRequest;
                fromJSON(_: any): _96.QueryParamsRequest;
                fromPartial(_: {}): _96.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _96.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryParamsResponse;
                fromJSON(object: any): _96.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        unbonding_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        max_validators?: number;
                        max_entries?: number;
                        historical_entries?: number;
                        bond_denom?: string;
                        min_commission_rate?: string;
                    };
                }): _96.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GenesisState;
                fromJSON(object: any): _95.GenesisState;
                fromPartial(object: {
                    params?: {
                        unbonding_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        max_validators?: number;
                        max_entries?: number;
                        historical_entries?: number;
                        bond_denom?: string;
                        min_commission_rate?: string;
                    };
                    last_total_power?: Uint8Array;
                    last_validator_powers?: {
                        address?: string;
                        power?: string | number | import("long").default;
                    }[];
                    validators?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _97.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                        };
                        min_self_delegation?: string;
                        unbonding_on_hold_ref_count?: string | number | import("long").default;
                        unbonding_ids?: (string | number | import("long").default)[];
                    }[];
                    delegations?: {
                        delegator_address?: string;
                        validator_address?: string;
                        shares?: string;
                    }[];
                    unbonding_delegations?: {
                        delegator_address?: string;
                        validator_address?: string;
                        entries?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            initial_balance?: string;
                            balance?: string;
                            unbonding_id?: string | number | import("long").default;
                            unbonding_on_hold_ref_count?: string | number | import("long").default;
                        }[];
                    }[];
                    redelegations?: {
                        delegator_address?: string;
                        validator_src_address?: string;
                        validator_dst_address?: string;
                        entries?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            initial_balance?: string;
                            shares_dst?: string;
                            unbonding_id?: string | number | import("long").default;
                            unbonding_on_hold_ref_count?: string | number | import("long").default;
                        }[];
                    }[];
                    exported?: boolean;
                }): _95.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _95.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.LastValidatorPower;
                fromJSON(object: any): _95.LastValidatorPower;
                fromPartial(object: {
                    address?: string;
                    power?: string | number | import("long").default;
                }): _95.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _94.AuthorizationType;
            authorizationTypeToJSON(object: _94.AuthorizationType): string;
            AuthorizationType: typeof _94.AuthorizationType;
            StakeAuthorization: {
                encode(message: _94.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.StakeAuthorization;
                fromJSON(object: any): _94.StakeAuthorization;
                fromPartial(object: {
                    max_tokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allow_list?: {
                        address?: string[];
                    };
                    deny_list?: {
                        address?: string[];
                    };
                    authorization_type?: _94.AuthorizationType;
                }): _94.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _94.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.StakeAuthorization_Validators;
                fromJSON(object: any): _94.StakeAuthorization_Validators;
                fromPartial(object: {
                    address?: string[];
                }): _94.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    encode(message: _99.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Config;
                    fromJSON(object: any): _99.Config;
                    fromPartial(object: {
                        skip_ante_handler?: boolean;
                        skip_post_handler?: boolean;
                    }): _99.Config;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _100.SignMode;
                signModeToJSON(object: _100.SignMode): string;
                SignMode: typeof _100.SignMode;
                SignatureDescriptors: {
                    encode(message: _100.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.SignatureDescriptors;
                    fromJSON(object: any): _100.SignatureDescriptors;
                    fromPartial(object: {
                        signatures?: {
                            public_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _100.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extra_bits_stored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: string | number | import("long").default;
                        }[];
                    }): _100.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _100.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.SignatureDescriptor;
                    fromJSON(object: any): _100.SignatureDescriptor;
                    fromPartial(object: {
                        public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _100.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extra_bits_stored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: string | number | import("long").default;
                    }): _100.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _100.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.SignatureDescriptor_Data;
                    fromJSON(object: any): _100.SignatureDescriptor_Data;
                    fromPartial(object: {
                        single?: {
                            mode?: _100.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _100.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _100.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _100.SignatureDescriptor_Data_Single;
                    fromPartial(object: {
                        mode?: _100.SignMode;
                        signature?: Uint8Array;
                    }): _100.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _100.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _100.SignatureDescriptor_Data_Multi;
                    fromPartial(object: {
                        bitarray?: {
                            extra_bits_stored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: {
                            single?: {
                                mode?: _100.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: any;
                        }[];
                    }): _100.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _261.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _101.SimulateRequest): Promise<_101.SimulateResponse>;
                getTx(request: _101.GetTxRequest): Promise<_101.GetTxResponse>;
                broadcastTx(request: _101.BroadcastTxRequest): Promise<_101.BroadcastTxResponse>;
                getTxsEvent(request: _101.GetTxsEventRequest): Promise<_101.GetTxsEventResponse>;
                getBlockWithTxs(request: _101.GetBlockWithTxsRequest): Promise<_101.GetBlockWithTxsResponse>;
                txDecode(request: _101.TxDecodeRequest): Promise<_101.TxDecodeResponse>;
                txEncode(request: _101.TxEncodeRequest): Promise<_101.TxEncodeResponse>;
                txEncodeAmino(request: _101.TxEncodeAminoRequest): Promise<_101.TxEncodeAminoResponse>;
                txDecodeAmino(request: _101.TxDecodeAminoRequest): Promise<_101.TxDecodeAminoResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useSimulate: <TData = _101.SimulateResponse>({ request, options }: _261.UseSimulateQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useGetTx: <TData_1 = _101.GetTxResponse>({ request, options }: _261.UseGetTxQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useBroadcastTx: <TData_2 = _101.BroadcastTxResponse>({ request, options }: _261.UseBroadcastTxQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useGetTxsEvent: <TData_3 = _101.GetTxsEventResponse>({ request, options }: _261.UseGetTxsEventQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useGetBlockWithTxs: <TData_4 = _101.GetBlockWithTxsResponse>({ request, options }: _261.UseGetBlockWithTxsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useTxDecode: <TData_5 = _101.TxDecodeResponse>({ request, options }: _261.UseTxDecodeQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useTxEncode: <TData_6 = _101.TxEncodeResponse>({ request, options }: _261.UseTxEncodeQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useTxEncodeAmino: <TData_7 = _101.TxEncodeAminoResponse>({ request, options }: _261.UseTxEncodeAminoQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                useTxDecodeAmino: <TData_8 = _101.TxDecodeAminoResponse>({ request, options }: _261.UseTxDecodeAminoQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
            };
            LCDQueryClient: typeof _239.LCDQueryClient;
            Tx: {
                encode(message: _102.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Tx;
                fromJSON(object: any): _102.Tx;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeout_height?: string | number | import("long").default;
                        extension_options?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        non_critical_extension_options?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    auth_info?: {
                        signer_infos?: {
                            public_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            mode_info?: {
                                single?: {
                                    mode?: _100.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extra_bits_stored?: number;
                                        elems?: Uint8Array;
                                    };
                                    mode_infos?: any[];
                                };
                            };
                            sequence?: string | number | import("long").default;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gas_limit?: string | number | import("long").default;
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _102.Tx;
            };
            TxRaw: {
                encode(message: _102.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.TxRaw;
                fromJSON(object: any): _102.TxRaw;
                fromPartial(object: {
                    body_bytes?: Uint8Array;
                    auth_info_bytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _102.TxRaw;
            };
            SignDoc: {
                encode(message: _102.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.SignDoc;
                fromJSON(object: any): _102.SignDoc;
                fromPartial(object: {
                    body_bytes?: Uint8Array;
                    auth_info_bytes?: Uint8Array;
                    chain_id?: string;
                    account_number?: string | number | import("long").default;
                }): _102.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _102.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.SignDocDirectAux;
                fromJSON(object: any): _102.SignDocDirectAux;
                fromPartial(object: {
                    body_bytes?: Uint8Array;
                    public_key?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    chain_id?: string;
                    account_number?: string | number | import("long").default;
                    sequence?: string | number | import("long").default;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _102.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _102.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.TxBody;
                fromJSON(object: any): _102.TxBody;
                fromPartial(object: {
                    messages?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeout_height?: string | number | import("long").default;
                    extension_options?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    non_critical_extension_options?: {
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _102.TxBody;
            };
            AuthInfo: {
                encode(message: _102.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.AuthInfo;
                fromJSON(object: any): _102.AuthInfo;
                fromPartial(object: {
                    signer_infos?: {
                        public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        mode_info?: {
                            single?: {
                                mode?: _100.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extra_bits_stored?: number;
                                    elems?: Uint8Array;
                                };
                                mode_infos?: any[];
                            };
                        };
                        sequence?: string | number | import("long").default;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gas_limit?: string | number | import("long").default;
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _102.AuthInfo;
            };
            SignerInfo: {
                encode(message: _102.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.SignerInfo;
                fromJSON(object: any): _102.SignerInfo;
                fromPartial(object: {
                    public_key?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    mode_info?: {
                        single?: {
                            mode?: _100.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number;
                                elems?: Uint8Array;
                            };
                            mode_infos?: any[];
                        };
                    };
                    sequence?: string | number | import("long").default;
                }): _102.SignerInfo;
            };
            ModeInfo: {
                encode(message: _102.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ModeInfo;
                fromJSON(object: any): _102.ModeInfo;
                fromPartial(object: {
                    single?: {
                        mode?: _100.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extra_bits_stored?: number;
                            elems?: Uint8Array;
                        };
                        mode_infos?: any[];
                    };
                }): _102.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _102.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ModeInfo_Single;
                fromJSON(object: any): _102.ModeInfo_Single;
                fromPartial(object: {
                    mode?: _100.SignMode;
                }): _102.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _102.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ModeInfo_Multi;
                fromJSON(object: any): _102.ModeInfo_Multi;
                fromPartial(object: {
                    bitarray?: {
                        extra_bits_stored?: number;
                        elems?: Uint8Array;
                    };
                    mode_infos?: {
                        single?: {
                            mode?: _100.SignMode;
                        };
                        multi?: any;
                    }[];
                }): _102.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _102.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Fee;
                fromJSON(object: any): _102.Fee;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gas_limit?: string | number | import("long").default;
                    payer?: string;
                    granter?: string;
                }): _102.Fee;
            };
            Tip: {
                encode(message: _102.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Tip;
                fromJSON(object: any): _102.Tip;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _102.Tip;
            };
            AuxSignerData: {
                encode(message: _102.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.AuxSignerData;
                fromJSON(object: any): _102.AuxSignerData;
                fromPartial(object: {
                    address?: string;
                    sign_doc?: {
                        body_bytes?: Uint8Array;
                        public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        chain_id?: string;
                        account_number?: string | number | import("long").default;
                        sequence?: string | number | import("long").default;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _100.SignMode;
                    sig?: Uint8Array;
                }): _102.AuxSignerData;
            };
            orderByFromJSON(object: any): _101.OrderBy;
            orderByToJSON(object: _101.OrderBy): string;
            broadcastModeFromJSON(object: any): _101.BroadcastMode;
            broadcastModeToJSON(object: _101.BroadcastMode): string;
            OrderBy: typeof _101.OrderBy;
            BroadcastMode: typeof _101.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _101.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GetTxsEventRequest;
                fromJSON(object: any): _101.GetTxsEventRequest;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                    order_by?: _101.OrderBy;
                    page?: string | number | import("long").default;
                    limit?: string | number | import("long").default;
                }): _101.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _101.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GetTxsEventResponse;
                fromJSON(object: any): _101.GetTxsEventResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: string | number | import("long").default;
                            extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _100.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    tx_responses?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        raw_log?: string;
                        logs?: {
                            msg_index?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gas_wanted?: string | number | import("long").default;
                        gas_used?: string | number | import("long").default;
                        tx?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                    total?: string | number | import("long").default;
                }): _101.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _101.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.BroadcastTxRequest;
                fromJSON(object: any): _101.BroadcastTxRequest;
                fromPartial(object: {
                    tx_bytes?: Uint8Array;
                    mode?: _101.BroadcastMode;
                }): _101.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _101.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.BroadcastTxResponse;
                fromJSON(object: any): _101.BroadcastTxResponse;
                fromPartial(object: {
                    tx_response?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        raw_log?: string;
                        logs?: {
                            msg_index?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gas_wanted?: string | number | import("long").default;
                        gas_used?: string | number | import("long").default;
                        tx?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _101.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _101.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.SimulateRequest;
                fromJSON(object: any): _101.SimulateRequest;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: string | number | import("long").default;
                            extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _100.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    tx_bytes?: Uint8Array;
                }): _101.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _101.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.SimulateResponse;
                fromJSON(object: any): _101.SimulateResponse;
                fromPartial(object: {
                    gas_info?: {
                        gas_wanted?: string | number | import("long").default;
                        gas_used?: string | number | import("long").default;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                        msg_responses?: {
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _101.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _101.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GetTxRequest;
                fromJSON(object: any): _101.GetTxRequest;
                fromPartial(object: {
                    hash?: string;
                }): _101.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _101.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GetTxResponse;
                fromJSON(object: any): _101.GetTxResponse;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: string | number | import("long").default;
                            extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _100.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    tx_response?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        raw_log?: string;
                        logs?: {
                            msg_index?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gas_wanted?: string | number | import("long").default;
                        gas_used?: string | number | import("long").default;
                        tx?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _101.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _101.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GetBlockWithTxsRequest;
                fromJSON(object: any): _101.GetBlockWithTxsRequest;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _101.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _101.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GetBlockWithTxsResponse;
                fromJSON(object: any): _101.GetBlockWithTxsResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: string | number | import("long").default;
                            extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _100.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").default;
                                app?: string | number | import("long").default;
                            };
                            chain_id?: string;
                            height?: string | number | import("long").default;
                            time?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            last_block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            last_commit_hash?: Uint8Array;
                            data_hash?: Uint8Array;
                            validators_hash?: Uint8Array;
                            next_validators_hash?: Uint8Array;
                            consensus_hash?: Uint8Array;
                            app_hash?: Uint8Array;
                            last_results_hash?: Uint8Array;
                            evidence_hash?: Uint8Array;
                            proposer_address?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicate_vote_evidence?: {
                                    vote_a?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long").default;
                                        round?: number;
                                        block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: {
                                            seconds?: string | number | import("long").default;
                                            nanos?: number;
                                        };
                                        validator_address?: Uint8Array;
                                        validator_index?: number;
                                        signature?: Uint8Array;
                                    };
                                    vote_b?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long").default;
                                        round?: number;
                                        block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: {
                                            seconds?: string | number | import("long").default;
                                            nanos?: number;
                                        };
                                        validator_address?: Uint8Array;
                                        validator_index?: number;
                                        signature?: Uint8Array;
                                    };
                                    total_voting_power?: string | number | import("long").default;
                                    validator_power?: string | number | import("long").default;
                                    timestamp?: {
                                        seconds?: string | number | import("long").default;
                                        nanos?: number;
                                    };
                                };
                                light_client_attack_evidence?: {
                                    conflicting_block?: {
                                        signed_header?: {
                                            header?: {
                                                version?: {
                                                    block?: string | number | import("long").default;
                                                    app?: string | number | import("long").default;
                                                };
                                                chain_id?: string;
                                                height?: string | number | import("long").default;
                                                time?: {
                                                    seconds?: string | number | import("long").default;
                                                    nanos?: number;
                                                };
                                                last_block_id?: {
                                                    hash?: Uint8Array;
                                                    part_set_header?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                last_commit_hash?: Uint8Array;
                                                data_hash?: Uint8Array;
                                                validators_hash?: Uint8Array;
                                                next_validators_hash?: Uint8Array;
                                                consensus_hash?: Uint8Array;
                                                app_hash?: Uint8Array;
                                                last_results_hash?: Uint8Array;
                                                evidence_hash?: Uint8Array;
                                                proposer_address?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: string | number | import("long").default;
                                                round?: number;
                                                block_id?: {
                                                    hash?: Uint8Array;
                                                    part_set_header?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validator_address?: Uint8Array;
                                                    timestamp?: {
                                                        seconds?: string | number | import("long").default;
                                                        nanos?: number;
                                                    };
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validator_set?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pub_key?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                voting_power?: string | number | import("long").default;
                                                proposer_priority?: string | number | import("long").default;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pub_key?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                voting_power?: string | number | import("long").default;
                                                proposer_priority?: string | number | import("long").default;
                                            };
                                            total_voting_power?: string | number | import("long").default;
                                        };
                                    };
                                    common_height?: string | number | import("long").default;
                                    byzantine_validators?: {
                                        address?: Uint8Array;
                                        pub_key?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        voting_power?: string | number | import("long").default;
                                        proposer_priority?: string | number | import("long").default;
                                    }[];
                                    total_voting_power?: string | number | import("long").default;
                                    timestamp?: {
                                        seconds?: string | number | import("long").default;
                                        nanos?: number;
                                    };
                                };
                            }[];
                        };
                        last_commit?: {
                            height?: string | number | import("long").default;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                validator_address?: Uint8Array;
                                timestamp?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _101.GetBlockWithTxsResponse;
            };
            TxDecodeRequest: {
                encode(message: _101.TxDecodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.TxDecodeRequest;
                fromJSON(object: any): _101.TxDecodeRequest;
                fromPartial(object: {
                    tx_bytes?: Uint8Array;
                }): _101.TxDecodeRequest;
            };
            TxDecodeResponse: {
                encode(message: _101.TxDecodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.TxDecodeResponse;
                fromJSON(object: any): _101.TxDecodeResponse;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: string | number | import("long").default;
                            extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _100.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                }): _101.TxDecodeResponse;
            };
            TxEncodeRequest: {
                encode(message: _101.TxEncodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.TxEncodeRequest;
                fromJSON(object: any): _101.TxEncodeRequest;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: string | number | import("long").default;
                            extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _100.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                }): _101.TxEncodeRequest;
            };
            TxEncodeResponse: {
                encode(message: _101.TxEncodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.TxEncodeResponse;
                fromJSON(object: any): _101.TxEncodeResponse;
                fromPartial(object: {
                    tx_bytes?: Uint8Array;
                }): _101.TxEncodeResponse;
            };
            TxEncodeAminoRequest: {
                encode(message: _101.TxEncodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.TxEncodeAminoRequest;
                fromJSON(object: any): _101.TxEncodeAminoRequest;
                fromPartial(object: {
                    amino_json?: string;
                }): _101.TxEncodeAminoRequest;
            };
            TxEncodeAminoResponse: {
                encode(message: _101.TxEncodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.TxEncodeAminoResponse;
                fromJSON(object: any): _101.TxEncodeAminoResponse;
                fromPartial(object: {
                    amino_binary?: Uint8Array;
                }): _101.TxEncodeAminoResponse;
            };
            TxDecodeAminoRequest: {
                encode(message: _101.TxDecodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.TxDecodeAminoRequest;
                fromJSON(object: any): _101.TxDecodeAminoRequest;
                fromPartial(object: {
                    amino_binary?: Uint8Array;
                }): _101.TxDecodeAminoRequest;
            };
            TxDecodeAminoResponse: {
                encode(message: _101.TxDecodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.TxDecodeAminoResponse;
                fromJSON(object: any): _101.TxDecodeAminoResponse;
                fromPartial(object: {
                    amino_json?: string;
                }): _101.TxDecodeAminoResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _278.MsgClientImpl;
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _103.QueryCurrentPlanRequest): Promise<_103.QueryCurrentPlanResponse>;
                appliedPlan(request: _103.QueryAppliedPlanRequest): Promise<_103.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _103.QueryUpgradedConsensusStateRequest): Promise<_103.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _103.QueryModuleVersionsRequest): Promise<_103.QueryModuleVersionsResponse>;
                authority(request?: _103.QueryAuthorityRequest): Promise<_103.QueryAuthorityResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useCurrentPlan: <TData = _103.QueryCurrentPlanResponse>({ request, options }: _262.UseCurrentPlanQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useAppliedPlan: <TData_1 = _103.QueryAppliedPlanResponse>({ request, options }: _262.UseAppliedPlanQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useUpgradedConsensusState: <TData_2 = _103.QueryUpgradedConsensusStateResponse>({ request, options }: _262.UseUpgradedConsensusStateQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useModuleVersions: <TData_3 = _103.QueryModuleVersionsResponse>({ request, options }: _262.UseModuleVersionsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useAuthority: <TData_4 = _103.QueryAuthorityResponse>({ request, options }: _262.UseAuthorityQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
            };
            LCDQueryClient: typeof _240.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _104.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _104.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _104.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _104.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _104.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _104.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _104.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _104.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _104.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _104.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _104.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _104.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _104.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _104.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _104.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _104.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _105.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Plan;
                fromJSON(object: any): _105.Plan;
                fromPartial(object: {
                    name?: string;
                    time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    height?: string | number | import("long").default;
                    info?: string;
                    upgraded_client_state?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _105.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _105.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SoftwareUpgradeProposal;
                fromJSON(object: any): _105.SoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        height?: string | number | import("long").default;
                        info?: string;
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _105.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _105.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _105.CancelSoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _105.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _105.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ModuleVersion;
                fromJSON(object: any): _105.ModuleVersion;
                fromPartial(object: {
                    name?: string;
                    version?: string | number | import("long").default;
                }): _105.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _104.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgSoftwareUpgrade;
                fromJSON(object: any): _104.MsgSoftwareUpgrade;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        height?: string | number | import("long").default;
                        info?: string;
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _104.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _104.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _104.MsgSoftwareUpgradeResponse;
                fromPartial(_: {}): _104.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _104.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgCancelUpgrade;
                fromJSON(object: any): _104.MsgCancelUpgrade;
                fromPartial(object: {
                    authority?: string;
                }): _104.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _104.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgCancelUpgradeResponse;
                fromJSON(_: any): _104.MsgCancelUpgradeResponse;
                fromPartial(_: {}): _104.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _103.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryCurrentPlanRequest;
                fromJSON(_: any): _103.QueryCurrentPlanRequest;
                fromPartial(_: {}): _103.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _103.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryCurrentPlanResponse;
                fromJSON(object: any): _103.QueryCurrentPlanResponse;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        height?: string | number | import("long").default;
                        info?: string;
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _103.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _103.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryAppliedPlanRequest;
                fromJSON(object: any): _103.QueryAppliedPlanRequest;
                fromPartial(object: {
                    name?: string;
                }): _103.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _103.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryAppliedPlanResponse;
                fromJSON(object: any): _103.QueryAppliedPlanResponse;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                }): _103.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _103.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _103.QueryUpgradedConsensusStateRequest;
                fromPartial(object: {
                    last_height?: string | number | import("long").default;
                }): _103.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _103.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _103.QueryUpgradedConsensusStateResponse;
                fromPartial(object: {
                    upgraded_consensus_state?: Uint8Array;
                }): _103.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _103.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryModuleVersionsRequest;
                fromJSON(object: any): _103.QueryModuleVersionsRequest;
                fromPartial(object: {
                    module_name?: string;
                }): _103.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _103.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryModuleVersionsResponse;
                fromJSON(object: any): _103.QueryModuleVersionsResponse;
                fromPartial(object: {
                    module_versions?: {
                        name?: string;
                        version?: string | number | import("long").default;
                    }[];
                }): _103.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _103.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryAuthorityRequest;
                fromJSON(_: any): _103.QueryAuthorityRequest;
                fromPartial(_: {}): _103.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _103.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryAuthorityResponse;
                fromJSON(object: any): _103.QueryAuthorityResponse;
                fromPartial(object: {
                    address?: string;
                }): _103.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _279.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _106.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _106.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _106.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _106.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _106.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _106.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _106.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _106.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _106.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _106.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _106.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _106.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _106.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _106.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _106.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _106.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _106.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _106.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ from_address, to_address, amount, end_time, delayed }: _106.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _106.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ from_address, to_address, amount }: _106.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _106.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ from_address, to_address, start_time, vesting_periods }: _106.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _106.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _107.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.BaseVestingAccount;
                fromJSON(object: any): _107.BaseVestingAccount;
                fromPartial(object: {
                    base_account?: {
                        address?: string;
                        pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        account_number?: string | number | import("long").default;
                        sequence?: string | number | import("long").default;
                    };
                    original_vesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegated_free?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegated_vesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    end_time?: string | number | import("long").default;
                }): _107.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _107.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ContinuousVestingAccount;
                fromJSON(object: any): _107.ContinuousVestingAccount;
                fromPartial(object: {
                    base_vesting_account?: {
                        base_account?: {
                            address?: string;
                            pub_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            account_number?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        original_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_free?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        end_time?: string | number | import("long").default;
                    };
                    start_time?: string | number | import("long").default;
                }): _107.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _107.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.DelayedVestingAccount;
                fromJSON(object: any): _107.DelayedVestingAccount;
                fromPartial(object: {
                    base_vesting_account?: {
                        base_account?: {
                            address?: string;
                            pub_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            account_number?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        original_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_free?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        end_time?: string | number | import("long").default;
                    };
                }): _107.DelayedVestingAccount;
            };
            Period: {
                encode(message: _107.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Period;
                fromJSON(object: any): _107.Period;
                fromPartial(object: {
                    length?: string | number | import("long").default;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _107.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _107.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PeriodicVestingAccount;
                fromJSON(object: any): _107.PeriodicVestingAccount;
                fromPartial(object: {
                    base_vesting_account?: {
                        base_account?: {
                            address?: string;
                            pub_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            account_number?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        original_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_free?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        end_time?: string | number | import("long").default;
                    };
                    start_time?: string | number | import("long").default;
                    vesting_periods?: {
                        length?: string | number | import("long").default;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _107.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _107.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PermanentLockedAccount;
                fromJSON(object: any): _107.PermanentLockedAccount;
                fromPartial(object: {
                    base_vesting_account?: {
                        base_account?: {
                            address?: string;
                            pub_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            account_number?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        original_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_free?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegated_vesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        end_time?: string | number | import("long").default;
                    };
                }): _107.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _106.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgCreateVestingAccount;
                fromJSON(object: any): _106.MsgCreateVestingAccount;
                fromPartial(object: {
                    from_address?: string;
                    to_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    end_time?: string | number | import("long").default;
                    delayed?: boolean;
                }): _106.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _106.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _106.MsgCreateVestingAccountResponse;
                fromPartial(_: {}): _106.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _106.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _106.MsgCreatePermanentLockedAccount;
                fromPartial(object: {
                    from_address?: string;
                    to_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _106.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _106.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _106.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: {}): _106.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _106.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _106.MsgCreatePeriodicVestingAccount;
                fromPartial(object: {
                    from_address?: string;
                    to_address?: string;
                    start_time?: string | number | import("long").default;
                    vesting_periods?: {
                        length?: string | number | import("long").default;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _106.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _106.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _106.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: {}): _106.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _263.MsgClientImpl;
                };
                authz: {
                    v1beta1: _264.MsgClientImpl;
                };
                bank: {
                    v1beta1: _265.MsgClientImpl;
                };
                consensus: {
                    v1: _266.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _267.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _268.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _269.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _270.MsgClientImpl;
                };
                gov: {
                    v1: _271.MsgClientImpl;
                    v1beta1: _272.MsgClientImpl;
                };
                group: {
                    v1: _273.MsgClientImpl;
                };
                mint: {
                    v1beta1: _274.MsgClientImpl;
                };
                nft: {
                    v1beta1: _275.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _276.MsgClientImpl;
                };
                staking: {
                    v1beta1: _277.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _278.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _279.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _6.QueryConfigRequest): Promise<_6.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                        account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                        accountAddressByID(request: _9.QueryAccountAddressByIDRequest): Promise<_9.QueryAccountAddressByIDResponse>;
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                        moduleAccounts(request?: _9.QueryModuleAccountsRequest): Promise<_9.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _9.Bech32PrefixRequest): Promise<_9.Bech32PrefixResponse>;
                        addressBytesToString(request: _9.AddressBytesToStringRequest): Promise<_9.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _9.AddressStringToBytesRequest): Promise<_9.AddressStringToBytesResponse>;
                        accountInfo(request: _9.QueryAccountInfoRequest): Promise<_9.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _14.QueryGrantsRequest): Promise<_14.QueryGrantsResponse>;
                        granterGrants(request: _14.QueryGranterGrantsRequest): Promise<_14.QueryGranterGrantsResponse>;
                        granteeGrants(request: _14.QueryGranteeGrantsRequest): Promise<_14.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _17.AppOptionsRequest): Promise<_17.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _21.QueryBalanceRequest): Promise<_21.QueryBalanceResponse>;
                        allBalances(request: _21.QueryAllBalancesRequest): Promise<_21.QueryAllBalancesResponse>;
                        spendableBalances(request: _21.QuerySpendableBalancesRequest): Promise<_21.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _21.QuerySpendableBalanceByDenomRequest): Promise<_21.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _21.QueryTotalSupplyRequest): Promise<_21.QueryTotalSupplyResponse>;
                        supplyOf(request: _21.QuerySupplyOfRequest): Promise<_21.QuerySupplyOfResponse>;
                        params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                        denomMetadata(request: _21.QueryDenomMetadataRequest): Promise<_21.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _21.QueryDenomsMetadataRequest): Promise<_21.QueryDenomsMetadataResponse>;
                        denomOwners(request: _21.QueryDenomOwnersRequest): Promise<_21.QueryDenomOwnersResponse>;
                        sendEnabled(request: _21.QuerySendEnabledRequest): Promise<_21.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _25.ConfigRequest): Promise<_25.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _32.GetNodeInfoRequest): Promise<_32.GetNodeInfoResponse>;
                            getSyncing(request?: _32.GetSyncingRequest): Promise<_32.GetSyncingResponse>;
                            getLatestBlock(request?: _32.GetLatestBlockRequest): Promise<_32.GetLatestBlockResponse>;
                            getBlockByHeight(request: _32.GetBlockByHeightRequest): Promise<_32.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _32.GetLatestValidatorSetRequest): Promise<_32.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _32.GetValidatorSetByHeightRequest): Promise<_32.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _32.ABCIQueryRequest): Promise<_32.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                        validatorDistributionInfo(request: _49.QueryValidatorDistributionInfoRequest): Promise<_49.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _49.QueryValidatorOutstandingRewardsRequest): Promise<_49.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _49.QueryValidatorCommissionRequest): Promise<_49.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _49.QueryValidatorSlashesRequest): Promise<_49.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _49.QueryDelegationRewardsRequest): Promise<_49.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _49.QueryDelegationTotalRewardsRequest): Promise<_49.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _49.QueryDelegatorValidatorsRequest): Promise<_49.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _49.QueryDelegatorWithdrawAddressRequest): Promise<_49.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _49.QueryCommunityPoolRequest): Promise<_49.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _53.QueryEvidenceRequest): Promise<_53.QueryEvidenceResponse>;
                        allEvidence(request?: _53.QueryAllEvidenceRequest): Promise<_53.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _57.QueryAllowanceRequest): Promise<_57.QueryAllowanceResponse>;
                        allowances(request: _57.QueryAllowancesRequest): Promise<_57.QueryAllowancesResponse>;
                        allowancesByGranter(request: _57.QueryAllowancesByGranterRequest): Promise<_57.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                        proposals(request: _62.QueryProposalsRequest): Promise<_62.QueryProposalsResponse>;
                        vote(request: _62.QueryVoteRequest): Promise<_62.QueryVoteResponse>;
                        votes(request: _62.QueryVotesRequest): Promise<_62.QueryVotesResponse>;
                        params(request: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                        deposit(request: _62.QueryDepositRequest): Promise<_62.QueryDepositResponse>;
                        deposits(request: _62.QueryDepositsRequest): Promise<_62.QueryDepositsResponse>;
                        tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _66.QueryProposalRequest): Promise<_66.QueryProposalResponse>;
                        proposals(request: _66.QueryProposalsRequest): Promise<_66.QueryProposalsResponse>;
                        vote(request: _66.QueryVoteRequest): Promise<_66.QueryVoteResponse>;
                        votes(request: _66.QueryVotesRequest): Promise<_66.QueryVotesResponse>;
                        params(request: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        deposit(request: _66.QueryDepositRequest): Promise<_66.QueryDepositResponse>;
                        deposits(request: _66.QueryDepositsRequest): Promise<_66.QueryDepositsResponse>;
                        tallyResult(request: _66.QueryTallyResultRequest): Promise<_66.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _70.QueryGroupInfoRequest): Promise<_70.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _70.QueryGroupPolicyInfoRequest): Promise<_70.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _70.QueryGroupMembersRequest): Promise<_70.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _70.QueryGroupsByAdminRequest): Promise<_70.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _70.QueryGroupPoliciesByGroupRequest): Promise<_70.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _70.QueryGroupPoliciesByAdminRequest): Promise<_70.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _70.QueryProposalRequest): Promise<_70.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _70.QueryProposalsByGroupPolicyRequest): Promise<_70.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _70.QueryVoteByProposalVoterRequest): Promise<_70.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _70.QueryVotesByProposalRequest): Promise<_70.QueryVotesByProposalResponse>;
                        votesByVoter(request: _70.QueryVotesByVoterRequest): Promise<_70.QueryVotesByVoterResponse>;
                        groupsByMember(request: _70.QueryGroupsByMemberRequest): Promise<_70.QueryGroupsByMemberResponse>;
                        tallyResult(request: _70.QueryTallyResultRequest): Promise<_70.QueryTallyResultResponse>;
                        groups(request?: _70.QueryGroupsRequest): Promise<_70.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                        inflation(request?: _75.QueryInflationRequest): Promise<_75.QueryInflationResponse>;
                        annualProvisions(request?: _75.QueryAnnualProvisionsRequest): Promise<_75.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _81.QueryBalanceRequest): Promise<_81.QueryBalanceResponse>;
                        owner(request: _81.QueryOwnerRequest): Promise<_81.QueryOwnerResponse>;
                        supply(request: _81.QuerySupplyRequest): Promise<_81.QuerySupplyResponse>;
                        nFTs(request: _81.QueryNFTsRequest): Promise<_81.QueryNFTsResponse>;
                        nFT(request: _81.QueryNFTRequest): Promise<_81.QueryNFTResponse>;
                        class(request: _81.QueryClassRequest): Promise<_81.QueryClassResponse>;
                        classes(request?: _81.QueryClassesRequest): Promise<_81.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _83.GetRequest): Promise<_83.GetResponse>;
                            list(request: _83.ListRequest): Promise<_83.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        subspaces(request?: _87.QuerySubspacesRequest): Promise<_87.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                        signingInfo(request: _91.QuerySigningInfoRequest): Promise<_91.QuerySigningInfoResponse>;
                        signingInfos(request?: _91.QuerySigningInfosRequest): Promise<_91.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _96.QueryValidatorsRequest): Promise<_96.QueryValidatorsResponse>;
                        validator(request: _96.QueryValidatorRequest): Promise<_96.QueryValidatorResponse>;
                        validatorDelegations(request: _96.QueryValidatorDelegationsRequest): Promise<_96.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _96.QueryValidatorUnbondingDelegationsRequest): Promise<_96.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _96.QueryDelegationRequest): Promise<_96.QueryDelegationResponse>;
                        unbondingDelegation(request: _96.QueryUnbondingDelegationRequest): Promise<_96.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _96.QueryDelegatorDelegationsRequest): Promise<_96.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _96.QueryDelegatorUnbondingDelegationsRequest): Promise<_96.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _96.QueryRedelegationsRequest): Promise<_96.QueryRedelegationsResponse>;
                        delegatorValidators(request: _96.QueryDelegatorValidatorsRequest): Promise<_96.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _96.QueryDelegatorValidatorRequest): Promise<_96.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _96.QueryHistoricalInfoRequest): Promise<_96.QueryHistoricalInfoResponse>;
                        pool(request?: _96.QueryPoolRequest): Promise<_96.QueryPoolResponse>;
                        params(request?: _96.QueryParamsRequest): Promise<_96.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _101.SimulateRequest): Promise<_101.SimulateResponse>;
                        getTx(request: _101.GetTxRequest): Promise<_101.GetTxResponse>;
                        broadcastTx(request: _101.BroadcastTxRequest): Promise<_101.BroadcastTxResponse>;
                        getTxsEvent(request: _101.GetTxsEventRequest): Promise<_101.GetTxsEventResponse>;
                        getBlockWithTxs(request: _101.GetBlockWithTxsRequest): Promise<_101.GetBlockWithTxsResponse>;
                        txDecode(request: _101.TxDecodeRequest): Promise<_101.TxDecodeResponse>;
                        txEncode(request: _101.TxEncodeRequest): Promise<_101.TxEncodeResponse>;
                        txEncodeAmino(request: _101.TxEncodeAminoRequest): Promise<_101.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _101.TxDecodeAminoRequest): Promise<_101.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _103.QueryCurrentPlanRequest): Promise<_103.QueryCurrentPlanResponse>;
                        appliedPlan(request: _103.QueryAppliedPlanRequest): Promise<_103.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _103.QueryUpgradedConsensusStateRequest): Promise<_103.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _103.QueryModuleVersionsRequest): Promise<_103.QueryModuleVersionsResponse>;
                        authority(request?: _103.QueryAuthorityRequest): Promise<_103.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _222.LCDQueryClient;
                };
                authz: {
                    v1beta1: _223.LCDQueryClient;
                };
                bank: {
                    v1beta1: _224.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _225.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _226.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _227.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _228.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _229.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _230.LCDQueryClient;
                };
                gov: {
                    v1: _231.LCDQueryClient;
                    v1beta1: _232.LCDQueryClient;
                };
                group: {
                    v1: _233.LCDQueryClient;
                };
                mint: {
                    v1beta1: _234.LCDQueryClient;
                };
                nft: {
                    v1beta1: _235.LCDQueryClient;
                };
                params: {
                    v1beta1: _236.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _237.LCDQueryClient;
                };
                staking: {
                    v1beta1: _238.LCDQueryClient;
                };
                tx: {
                    v1beta1: _239.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _240.LCDQueryClient;
                };
            };
        }>;
    };
}
