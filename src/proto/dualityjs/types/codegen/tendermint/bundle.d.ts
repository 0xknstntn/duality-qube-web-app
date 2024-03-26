import * as _164 from "./abci/types";
import * as _165 from "./blocksync/types";
import * as _166 from "./consensus/types";
import * as _167 from "./consensus/wal";
import * as _168 from "./crypto/keys";
import * as _169 from "./crypto/proof";
import * as _170 from "./libs/bits/types";
import * as _171 from "./mempool/types";
import * as _172 from "./p2p/conn";
import * as _173 from "./p2p/pex";
import * as _174 from "./p2p/types";
import * as _175 from "./privval/types";
import * as _176 from "./rpc/grpc/types";
import * as _177 from "./state/types";
import * as _178 from "./statesync/types";
import * as _179 from "./store/types";
import * as _180 from "./types/block";
import * as _181 from "./types/canonical";
import * as _182 from "./types/events";
import * as _183 from "./types/evidence";
import * as _184 from "./types/params";
import * as _185 from "./types/types";
import * as _186 from "./types/validator";
import * as _187 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _164.CheckTxType;
        checkTxTypeToJSON(object: _164.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _164.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _164.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _164.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _164.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _164.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _164.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _164.MisbehaviorType;
        misbehaviorTypeToJSON(object: _164.MisbehaviorType): string;
        CheckTxType: typeof _164.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _164.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _164.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _164.ResponseProcessProposal_ProposalStatus;
        MisbehaviorType: typeof _164.MisbehaviorType;
        Request: {
            encode(message: _164.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Request;
            fromJSON(object: any): _164.Request;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    block_version?: string | number | import("long").default;
                    p2p_version?: string | number | import("long").default;
                    abci_version?: string;
                };
                init_chain?: {
                    time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    chain_id?: string;
                    consensus_params?: {
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
                    validators?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").default;
                    }[];
                    app_state_bytes?: Uint8Array;
                    initial_height?: string | number | import("long").default;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: string | number | import("long").default;
                    prove?: boolean;
                };
                begin_block?: {
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
                        type?: _164.MisbehaviorType;
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
                check_tx?: {
                    tx?: Uint8Array;
                    type?: _164.CheckTxType;
                };
                deliver_tx?: {
                    tx?: Uint8Array;
                };
                end_block?: {
                    height?: string | number | import("long").default;
                };
                commit?: {};
                list_snapshots?: {};
                offer_snapshot?: {
                    snapshot?: {
                        height?: string | number | import("long").default;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    app_hash?: Uint8Array;
                };
                load_snapshot_chunk?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunk?: number;
                };
                apply_snapshot_chunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
                prepare_proposal?: {
                    max_tx_bytes?: string | number | import("long").default;
                    txs?: Uint8Array[];
                    local_last_commit?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: string | number | import("long").default;
                            };
                            signed_last_block?: boolean;
                            vote_extension?: Uint8Array;
                        }[];
                    };
                    misbehavior?: {
                        type?: _164.MisbehaviorType;
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
                    height?: string | number | import("long").default;
                    time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    next_validators_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                process_proposal?: {
                    txs?: Uint8Array[];
                    proposed_last_commit?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: string | number | import("long").default;
                            };
                            signed_last_block?: boolean;
                        }[];
                    };
                    misbehavior?: {
                        type?: _164.MisbehaviorType;
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
                    hash?: Uint8Array;
                    height?: string | number | import("long").default;
                    time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    next_validators_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
            }): _164.Request;
        };
        RequestEcho: {
            encode(message: _164.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestEcho;
            fromJSON(object: any): _164.RequestEcho;
            fromPartial(object: {
                message?: string;
            }): _164.RequestEcho;
        };
        RequestFlush: {
            encode(_: _164.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestFlush;
            fromJSON(_: any): _164.RequestFlush;
            fromPartial(_: {}): _164.RequestFlush;
        };
        RequestInfo: {
            encode(message: _164.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestInfo;
            fromJSON(object: any): _164.RequestInfo;
            fromPartial(object: {
                version?: string;
                block_version?: string | number | import("long").default;
                p2p_version?: string | number | import("long").default;
                abci_version?: string;
            }): _164.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _164.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestInitChain;
            fromJSON(object: any): _164.RequestInitChain;
            fromPartial(object: {
                time?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                chain_id?: string;
                consensus_params?: {
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
                validators?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").default;
                }[];
                app_state_bytes?: Uint8Array;
                initial_height?: string | number | import("long").default;
            }): _164.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _164.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestQuery;
            fromJSON(object: any): _164.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long").default;
                prove?: boolean;
            }): _164.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _164.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestBeginBlock;
            fromJSON(object: any): _164.RequestBeginBlock;
            fromPartial(object: {
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
                    type?: _164.MisbehaviorType;
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
            }): _164.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _164.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestCheckTx;
            fromJSON(object: any): _164.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _164.CheckTxType;
            }): _164.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _164.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestDeliverTx;
            fromJSON(object: any): _164.RequestDeliverTx;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _164.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _164.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestEndBlock;
            fromJSON(object: any): _164.RequestEndBlock;
            fromPartial(object: {
                height?: string | number | import("long").default;
            }): _164.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _164.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestCommit;
            fromJSON(_: any): _164.RequestCommit;
            fromPartial(_: {}): _164.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _164.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestListSnapshots;
            fromJSON(_: any): _164.RequestListSnapshots;
            fromPartial(_: {}): _164.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _164.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestOfferSnapshot;
            fromJSON(object: any): _164.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                app_hash?: Uint8Array;
            }): _164.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _164.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestLoadSnapshotChunk;
            fromJSON(object: any): _164.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: string | number | import("long").default;
                format?: number;
                chunk?: number;
            }): _164.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _164.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestApplySnapshotChunk;
            fromJSON(object: any): _164.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _164.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _164.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestPrepareProposal;
            fromJSON(object: any): _164.RequestPrepareProposal;
            fromPartial(object: {
                max_tx_bytes?: string | number | import("long").default;
                txs?: Uint8Array[];
                local_last_commit?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long").default;
                        };
                        signed_last_block?: boolean;
                        vote_extension?: Uint8Array;
                    }[];
                };
                misbehavior?: {
                    type?: _164.MisbehaviorType;
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
                height?: string | number | import("long").default;
                time?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                next_validators_hash?: Uint8Array;
                proposer_address?: Uint8Array;
            }): _164.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _164.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestProcessProposal;
            fromJSON(object: any): _164.RequestProcessProposal;
            fromPartial(object: {
                txs?: Uint8Array[];
                proposed_last_commit?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long").default;
                        };
                        signed_last_block?: boolean;
                    }[];
                };
                misbehavior?: {
                    type?: _164.MisbehaviorType;
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
                hash?: Uint8Array;
                height?: string | number | import("long").default;
                time?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                next_validators_hash?: Uint8Array;
                proposer_address?: Uint8Array;
            }): _164.RequestProcessProposal;
        };
        Response: {
            encode(message: _164.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Response;
            fromJSON(object: any): _164.Response;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    app_version?: string | number | import("long").default;
                    last_block_height?: string | number | import("long").default;
                    last_block_app_hash?: Uint8Array;
                };
                init_chain?: {
                    consensus_params?: {
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
                    validators?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").default;
                    }[];
                    app_hash?: Uint8Array;
                };
                query?: {
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
                };
                begin_block?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                            index?: boolean;
                        }[];
                    }[];
                };
                check_tx?: {
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
                    sender?: string;
                    priority?: string | number | import("long").default;
                    mempool_error?: string;
                };
                deliver_tx?: {
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
                end_block?: {
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
                commit?: {
                    data?: Uint8Array;
                    retain_height?: string | number | import("long").default;
                };
                list_snapshots?: {
                    snapshots?: {
                        height?: string | number | import("long").default;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offer_snapshot?: {
                    result?: _164.ResponseOfferSnapshot_Result;
                };
                load_snapshot_chunk?: {
                    chunk?: Uint8Array;
                };
                apply_snapshot_chunk?: {
                    result?: _164.ResponseApplySnapshotChunk_Result;
                    refetch_chunks?: number[];
                    reject_senders?: string[];
                };
                prepare_proposal?: {
                    txs?: Uint8Array[];
                };
                process_proposal?: {
                    status?: _164.ResponseProcessProposal_ProposalStatus;
                };
            }): _164.Response;
        };
        ResponseException: {
            encode(message: _164.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseException;
            fromJSON(object: any): _164.ResponseException;
            fromPartial(object: {
                error?: string;
            }): _164.ResponseException;
        };
        ResponseEcho: {
            encode(message: _164.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseEcho;
            fromJSON(object: any): _164.ResponseEcho;
            fromPartial(object: {
                message?: string;
            }): _164.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _164.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseFlush;
            fromJSON(_: any): _164.ResponseFlush;
            fromPartial(_: {}): _164.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _164.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseInfo;
            fromJSON(object: any): _164.ResponseInfo;
            fromPartial(object: {
                data?: string;
                version?: string;
                app_version?: string | number | import("long").default;
                last_block_height?: string | number | import("long").default;
                last_block_app_hash?: Uint8Array;
            }): _164.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _164.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseInitChain;
            fromJSON(object: any): _164.ResponseInitChain;
            fromPartial(object: {
                consensus_params?: {
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
                validators?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").default;
                }[];
                app_hash?: Uint8Array;
            }): _164.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _164.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseQuery;
            fromJSON(object: any): _164.ResponseQuery;
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
            }): _164.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _164.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseBeginBlock;
            fromJSON(object: any): _164.ResponseBeginBlock;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                        index?: boolean;
                    }[];
                }[];
            }): _164.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _164.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseCheckTx;
            fromJSON(object: any): _164.ResponseCheckTx;
            fromPartial(object: {
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
                sender?: string;
                priority?: string | number | import("long").default;
                mempool_error?: string;
            }): _164.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _164.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseDeliverTx;
            fromJSON(object: any): _164.ResponseDeliverTx;
            fromPartial(object: {
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
            }): _164.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _164.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseEndBlock;
            fromJSON(object: any): _164.ResponseEndBlock;
            fromPartial(object: {
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
            }): _164.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _164.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseCommit;
            fromJSON(object: any): _164.ResponseCommit;
            fromPartial(object: {
                data?: Uint8Array;
                retain_height?: string | number | import("long").default;
            }): _164.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _164.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseListSnapshots;
            fromJSON(object: any): _164.ResponseListSnapshots;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _164.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _164.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseOfferSnapshot;
            fromJSON(object: any): _164.ResponseOfferSnapshot;
            fromPartial(object: {
                result?: _164.ResponseOfferSnapshot_Result;
            }): _164.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _164.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _164.ResponseLoadSnapshotChunk;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _164.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _164.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseApplySnapshotChunk;
            fromJSON(object: any): _164.ResponseApplySnapshotChunk;
            fromPartial(object: {
                result?: _164.ResponseApplySnapshotChunk_Result;
                refetch_chunks?: number[];
                reject_senders?: string[];
            }): _164.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _164.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponsePrepareProposal;
            fromJSON(object: any): _164.ResponsePrepareProposal;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _164.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _164.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseProcessProposal;
            fromJSON(object: any): _164.ResponseProcessProposal;
            fromPartial(object: {
                status?: _164.ResponseProcessProposal_ProposalStatus;
            }): _164.ResponseProcessProposal;
        };
        CommitInfo: {
            encode(message: _164.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.CommitInfo;
            fromJSON(object: any): _164.CommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").default;
                    };
                    signed_last_block?: boolean;
                }[];
            }): _164.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _164.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ExtendedCommitInfo;
            fromJSON(object: any): _164.ExtendedCommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").default;
                    };
                    signed_last_block?: boolean;
                    vote_extension?: Uint8Array;
                }[];
            }): _164.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _164.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Event;
            fromJSON(object: any): _164.Event;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: string;
                    value?: string;
                    index?: boolean;
                }[];
            }): _164.Event;
        };
        EventAttribute: {
            encode(message: _164.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.EventAttribute;
            fromJSON(object: any): _164.EventAttribute;
            fromPartial(object: {
                key?: string;
                value?: string;
                index?: boolean;
            }): _164.EventAttribute;
        };
        TxResult: {
            encode(message: _164.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.TxResult;
            fromJSON(object: any): _164.TxResult;
            fromPartial(object: {
                height?: string | number | import("long").default;
                index?: number;
                tx?: Uint8Array;
                result?: {
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
            }): _164.TxResult;
        };
        Validator: {
            encode(message: _164.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Validator;
            fromJSON(object: any): _164.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long").default;
            }): _164.Validator;
        };
        ValidatorUpdate: {
            encode(message: _164.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ValidatorUpdate;
            fromJSON(object: any): _164.ValidatorUpdate;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long").default;
            }): _164.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _164.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.VoteInfo;
            fromJSON(object: any): _164.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").default;
                };
                signed_last_block?: boolean;
            }): _164.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _164.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ExtendedVoteInfo;
            fromJSON(object: any): _164.ExtendedVoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").default;
                };
                signed_last_block?: boolean;
                vote_extension?: Uint8Array;
            }): _164.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _164.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Misbehavior;
            fromJSON(object: any): _164.Misbehavior;
            fromPartial(object: {
                type?: _164.MisbehaviorType;
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
            }): _164.Misbehavior;
        };
        Snapshot: {
            encode(message: _164.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Snapshot;
            fromJSON(object: any): _164.Snapshot;
            fromPartial(object: {
                height?: string | number | import("long").default;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _164.Snapshot;
        };
    };
    const blocksync: {
        BlockRequest: {
            encode(message: _165.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.BlockRequest;
            fromJSON(object: any): _165.BlockRequest;
            fromPartial(object: {
                height?: string | number | import("long").default;
            }): _165.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _165.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.NoBlockResponse;
            fromJSON(object: any): _165.NoBlockResponse;
            fromPartial(object: {
                height?: string | number | import("long").default;
            }): _165.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _165.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.BlockResponse;
            fromJSON(object: any): _165.BlockResponse;
            fromPartial(object: {
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
                                    type?: _185.SignedMsgType;
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
                                    type?: _185.SignedMsgType;
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
                                                block_id_flag?: _185.BlockIDFlag;
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
                            block_id_flag?: _185.BlockIDFlag;
                            validator_address?: Uint8Array;
                            timestamp?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            signature?: Uint8Array;
                        }[];
                    };
                };
            }): _165.BlockResponse;
        };
        StatusRequest: {
            encode(_: _165.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.StatusRequest;
            fromJSON(_: any): _165.StatusRequest;
            fromPartial(_: {}): _165.StatusRequest;
        };
        StatusResponse: {
            encode(message: _165.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.StatusResponse;
            fromJSON(object: any): _165.StatusResponse;
            fromPartial(object: {
                height?: string | number | import("long").default;
                base?: string | number | import("long").default;
            }): _165.StatusResponse;
        };
        Message: {
            encode(message: _165.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Message;
            fromJSON(object: any): _165.Message;
            fromPartial(object: {
                block_request?: {
                    height?: string | number | import("long").default;
                };
                no_block_response?: {
                    height?: string | number | import("long").default;
                };
                block_response?: {
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
                                        type?: _185.SignedMsgType;
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
                                        type?: _185.SignedMsgType;
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
                                                    block_id_flag?: _185.BlockIDFlag;
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
                                block_id_flag?: _185.BlockIDFlag;
                                validator_address?: Uint8Array;
                                timestamp?: {
                                    seconds?: string | number | import("long").default;
                                    nanos?: number;
                                };
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                };
                status_request?: {};
                status_response?: {
                    height?: string | number | import("long").default;
                    base?: string | number | import("long").default;
                };
            }): _165.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _167.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgInfo;
            fromJSON(object: any): _167.MsgInfo;
            fromPartial(object: {
                msg?: {
                    new_round_step?: {
                        height?: string | number | import("long").default;
                        round?: number;
                        step?: number;
                        seconds_since_start_time?: string | number | import("long").default;
                        last_commit_round?: number;
                    };
                    new_valid_block?: {
                        height?: string | number | import("long").default;
                        round?: number;
                        block_part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                        block_parts?: {
                            bits?: string | number | import("long").default;
                            elems?: (string | number | import("long").default)[];
                        };
                        is_commit?: boolean;
                    };
                    proposal?: {
                        proposal?: {
                            type?: _185.SignedMsgType;
                            height?: string | number | import("long").default;
                            round?: number;
                            pol_round?: number;
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
                            signature?: Uint8Array;
                        };
                    };
                    proposal_pol?: {
                        height?: string | number | import("long").default;
                        proposal_pol_round?: number;
                        proposal_pol?: {
                            bits?: string | number | import("long").default;
                            elems?: (string | number | import("long").default)[];
                        };
                    };
                    block_part?: {
                        height?: string | number | import("long").default;
                        round?: number;
                        part?: {
                            index?: number;
                            bytes?: Uint8Array;
                            proof?: {
                                total?: string | number | import("long").default;
                                index?: string | number | import("long").default;
                                leaf_hash?: Uint8Array;
                                aunts?: Uint8Array[];
                            };
                        };
                    };
                    vote?: {
                        vote?: {
                            type?: _185.SignedMsgType;
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
                    };
                    has_vote?: {
                        height?: string | number | import("long").default;
                        round?: number;
                        type?: _185.SignedMsgType;
                        index?: number;
                    };
                    vote_set_maj23?: {
                        height?: string | number | import("long").default;
                        round?: number;
                        type?: _185.SignedMsgType;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                    };
                    vote_set_bits?: {
                        height?: string | number | import("long").default;
                        round?: number;
                        type?: _185.SignedMsgType;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        votes?: {
                            bits?: string | number | import("long").default;
                            elems?: (string | number | import("long").default)[];
                        };
                    };
                };
                peer_id?: string;
            }): _167.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _167.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.TimeoutInfo;
            fromJSON(object: any): _167.TimeoutInfo;
            fromPartial(object: {
                duration?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                height?: string | number | import("long").default;
                round?: number;
                step?: number;
            }): _167.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _167.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.EndHeight;
            fromJSON(object: any): _167.EndHeight;
            fromPartial(object: {
                height?: string | number | import("long").default;
            }): _167.EndHeight;
        };
        WALMessage: {
            encode(message: _167.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.WALMessage;
            fromJSON(object: any): _167.WALMessage;
            fromPartial(object: {
                event_data_round_state?: {
                    height?: string | number | import("long").default;
                    round?: number;
                    step?: string;
                };
                msg_info?: {
                    msg?: {
                        new_round_step?: {
                            height?: string | number | import("long").default;
                            round?: number;
                            step?: number;
                            seconds_since_start_time?: string | number | import("long").default;
                            last_commit_round?: number;
                        };
                        new_valid_block?: {
                            height?: string | number | import("long").default;
                            round?: number;
                            block_part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                            block_parts?: {
                                bits?: string | number | import("long").default;
                                elems?: (string | number | import("long").default)[];
                            };
                            is_commit?: boolean;
                        };
                        proposal?: {
                            proposal?: {
                                type?: _185.SignedMsgType;
                                height?: string | number | import("long").default;
                                round?: number;
                                pol_round?: number;
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
                                signature?: Uint8Array;
                            };
                        };
                        proposal_pol?: {
                            height?: string | number | import("long").default;
                            proposal_pol_round?: number;
                            proposal_pol?: {
                                bits?: string | number | import("long").default;
                                elems?: (string | number | import("long").default)[];
                            };
                        };
                        block_part?: {
                            height?: string | number | import("long").default;
                            round?: number;
                            part?: {
                                index?: number;
                                bytes?: Uint8Array;
                                proof?: {
                                    total?: string | number | import("long").default;
                                    index?: string | number | import("long").default;
                                    leaf_hash?: Uint8Array;
                                    aunts?: Uint8Array[];
                                };
                            };
                        };
                        vote?: {
                            vote?: {
                                type?: _185.SignedMsgType;
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
                        };
                        has_vote?: {
                            height?: string | number | import("long").default;
                            round?: number;
                            type?: _185.SignedMsgType;
                            index?: number;
                        };
                        vote_set_maj23?: {
                            height?: string | number | import("long").default;
                            round?: number;
                            type?: _185.SignedMsgType;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                        };
                        vote_set_bits?: {
                            height?: string | number | import("long").default;
                            round?: number;
                            type?: _185.SignedMsgType;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            votes?: {
                                bits?: string | number | import("long").default;
                                elems?: (string | number | import("long").default)[];
                            };
                        };
                    };
                    peer_id?: string;
                };
                timeout_info?: {
                    duration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    height?: string | number | import("long").default;
                    round?: number;
                    step?: number;
                };
                end_height?: {
                    height?: string | number | import("long").default;
                };
            }): _167.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _167.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.TimedWALMessage;
            fromJSON(object: any): _167.TimedWALMessage;
            fromPartial(object: {
                time?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                msg?: {
                    event_data_round_state?: {
                        height?: string | number | import("long").default;
                        round?: number;
                        step?: string;
                    };
                    msg_info?: {
                        msg?: {
                            new_round_step?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                step?: number;
                                seconds_since_start_time?: string | number | import("long").default;
                                last_commit_round?: number;
                            };
                            new_valid_block?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                block_part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                                block_parts?: {
                                    bits?: string | number | import("long").default;
                                    elems?: (string | number | import("long").default)[];
                                };
                                is_commit?: boolean;
                            };
                            proposal?: {
                                proposal?: {
                                    type?: _185.SignedMsgType;
                                    height?: string | number | import("long").default;
                                    round?: number;
                                    pol_round?: number;
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
                                    signature?: Uint8Array;
                                };
                            };
                            proposal_pol?: {
                                height?: string | number | import("long").default;
                                proposal_pol_round?: number;
                                proposal_pol?: {
                                    bits?: string | number | import("long").default;
                                    elems?: (string | number | import("long").default)[];
                                };
                            };
                            block_part?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                part?: {
                                    index?: number;
                                    bytes?: Uint8Array;
                                    proof?: {
                                        total?: string | number | import("long").default;
                                        index?: string | number | import("long").default;
                                        leaf_hash?: Uint8Array;
                                        aunts?: Uint8Array[];
                                    };
                                };
                            };
                            vote?: {
                                vote?: {
                                    type?: _185.SignedMsgType;
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
                            };
                            has_vote?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                type?: _185.SignedMsgType;
                                index?: number;
                            };
                            vote_set_maj23?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                type?: _185.SignedMsgType;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                            };
                            vote_set_bits?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                type?: _185.SignedMsgType;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                votes?: {
                                    bits?: string | number | import("long").default;
                                    elems?: (string | number | import("long").default)[];
                                };
                            };
                        };
                        peer_id?: string;
                    };
                    timeout_info?: {
                        duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        height?: string | number | import("long").default;
                        round?: number;
                        step?: number;
                    };
                    end_height?: {
                        height?: string | number | import("long").default;
                    };
                };
            }): _167.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _166.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.NewRoundStep;
            fromJSON(object: any): _166.NewRoundStep;
            fromPartial(object: {
                height?: string | number | import("long").default;
                round?: number;
                step?: number;
                seconds_since_start_time?: string | number | import("long").default;
                last_commit_round?: number;
            }): _166.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _166.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.NewValidBlock;
            fromJSON(object: any): _166.NewValidBlock;
            fromPartial(object: {
                height?: string | number | import("long").default;
                round?: number;
                block_part_set_header?: {
                    total?: number;
                    hash?: Uint8Array;
                };
                block_parts?: {
                    bits?: string | number | import("long").default;
                    elems?: (string | number | import("long").default)[];
                };
                is_commit?: boolean;
            }): _166.NewValidBlock;
        };
        Proposal: {
            encode(message: _166.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Proposal;
            fromJSON(object: any): _166.Proposal;
            fromPartial(object: {
                proposal?: {
                    type?: _185.SignedMsgType;
                    height?: string | number | import("long").default;
                    round?: number;
                    pol_round?: number;
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
                    signature?: Uint8Array;
                };
            }): _166.Proposal;
        };
        ProposalPOL: {
            encode(message: _166.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.ProposalPOL;
            fromJSON(object: any): _166.ProposalPOL;
            fromPartial(object: {
                height?: string | number | import("long").default;
                proposal_pol_round?: number;
                proposal_pol?: {
                    bits?: string | number | import("long").default;
                    elems?: (string | number | import("long").default)[];
                };
            }): _166.ProposalPOL;
        };
        BlockPart: {
            encode(message: _166.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.BlockPart;
            fromJSON(object: any): _166.BlockPart;
            fromPartial(object: {
                height?: string | number | import("long").default;
                round?: number;
                part?: {
                    index?: number;
                    bytes?: Uint8Array;
                    proof?: {
                        total?: string | number | import("long").default;
                        index?: string | number | import("long").default;
                        leaf_hash?: Uint8Array;
                        aunts?: Uint8Array[];
                    };
                };
            }): _166.BlockPart;
        };
        Vote: {
            encode(message: _166.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Vote;
            fromJSON(object: any): _166.Vote;
            fromPartial(object: {
                vote?: {
                    type?: _185.SignedMsgType;
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
            }): _166.Vote;
        };
        HasVote: {
            encode(message: _166.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.HasVote;
            fromJSON(object: any): _166.HasVote;
            fromPartial(object: {
                height?: string | number | import("long").default;
                round?: number;
                type?: _185.SignedMsgType;
                index?: number;
            }): _166.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _166.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.VoteSetMaj23;
            fromJSON(object: any): _166.VoteSetMaj23;
            fromPartial(object: {
                height?: string | number | import("long").default;
                round?: number;
                type?: _185.SignedMsgType;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
            }): _166.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _166.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.VoteSetBits;
            fromJSON(object: any): _166.VoteSetBits;
            fromPartial(object: {
                height?: string | number | import("long").default;
                round?: number;
                type?: _185.SignedMsgType;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                votes?: {
                    bits?: string | number | import("long").default;
                    elems?: (string | number | import("long").default)[];
                };
            }): _166.VoteSetBits;
        };
        Message: {
            encode(message: _166.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Message;
            fromJSON(object: any): _166.Message;
            fromPartial(object: {
                new_round_step?: {
                    height?: string | number | import("long").default;
                    round?: number;
                    step?: number;
                    seconds_since_start_time?: string | number | import("long").default;
                    last_commit_round?: number;
                };
                new_valid_block?: {
                    height?: string | number | import("long").default;
                    round?: number;
                    block_part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                    block_parts?: {
                        bits?: string | number | import("long").default;
                        elems?: (string | number | import("long").default)[];
                    };
                    is_commit?: boolean;
                };
                proposal?: {
                    proposal?: {
                        type?: _185.SignedMsgType;
                        height?: string | number | import("long").default;
                        round?: number;
                        pol_round?: number;
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
                        signature?: Uint8Array;
                    };
                };
                proposal_pol?: {
                    height?: string | number | import("long").default;
                    proposal_pol_round?: number;
                    proposal_pol?: {
                        bits?: string | number | import("long").default;
                        elems?: (string | number | import("long").default)[];
                    };
                };
                block_part?: {
                    height?: string | number | import("long").default;
                    round?: number;
                    part?: {
                        index?: number;
                        bytes?: Uint8Array;
                        proof?: {
                            total?: string | number | import("long").default;
                            index?: string | number | import("long").default;
                            leaf_hash?: Uint8Array;
                            aunts?: Uint8Array[];
                        };
                    };
                };
                vote?: {
                    vote?: {
                        type?: _185.SignedMsgType;
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
                };
                has_vote?: {
                    height?: string | number | import("long").default;
                    round?: number;
                    type?: _185.SignedMsgType;
                    index?: number;
                };
                vote_set_maj23?: {
                    height?: string | number | import("long").default;
                    round?: number;
                    type?: _185.SignedMsgType;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                };
                vote_set_bits?: {
                    height?: string | number | import("long").default;
                    round?: number;
                    type?: _185.SignedMsgType;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    votes?: {
                        bits?: string | number | import("long").default;
                        elems?: (string | number | import("long").default)[];
                    };
                };
            }): _166.Message;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _169.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Proof;
            fromJSON(object: any): _169.Proof;
            fromPartial(object: {
                total?: string | number | import("long").default;
                index?: string | number | import("long").default;
                leaf_hash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _169.Proof;
        };
        ValueOp: {
            encode(message: _169.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ValueOp;
            fromJSON(object: any): _169.ValueOp;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").default;
                    index?: string | number | import("long").default;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _169.ValueOp;
        };
        DominoOp: {
            encode(message: _169.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.DominoOp;
            fromJSON(object: any): _169.DominoOp;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _169.DominoOp;
        };
        ProofOp: {
            encode(message: _169.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ProofOp;
            fromJSON(object: any): _169.ProofOp;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _169.ProofOp;
        };
        ProofOps: {
            encode(message: _169.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ProofOps;
            fromJSON(object: any): _169.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _169.ProofOps;
        };
        PublicKey: {
            encode(message: _168.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.PublicKey;
            fromJSON(object: any): _168.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _168.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _170.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.BitArray;
                fromJSON(object: any): _170.BitArray;
                fromPartial(object: {
                    bits?: string | number | import("long").default;
                    elems?: (string | number | import("long").default)[];
                }): _170.BitArray;
            };
        };
    }
    const mempool: {
        Txs: {
            encode(message: _171.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Txs;
            fromJSON(object: any): _171.Txs;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _171.Txs;
        };
        Message: {
            encode(message: _171.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Message;
            fromJSON(object: any): _171.Message;
            fromPartial(object: {
                txs?: {
                    txs?: Uint8Array[];
                };
            }): _171.Message;
        };
    };
    const p2p: {
        NetAddress: {
            encode(message: _174.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.NetAddress;
            fromJSON(object: any): _174.NetAddress;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _174.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _174.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ProtocolVersion;
            fromJSON(object: any): _174.ProtocolVersion;
            fromPartial(object: {
                p2p?: string | number | import("long").default;
                block?: string | number | import("long").default;
                app?: string | number | import("long").default;
            }): _174.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _174.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.DefaultNodeInfo;
            fromJSON(object: any): _174.DefaultNodeInfo;
            fromPartial(object: {
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
            }): _174.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _174.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.DefaultNodeInfoOther;
            fromJSON(object: any): _174.DefaultNodeInfoOther;
            fromPartial(object: {
                tx_index?: string;
                rpc_address?: string;
            }): _174.DefaultNodeInfoOther;
        };
        PexRequest: {
            encode(_: _173.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.PexRequest;
            fromJSON(_: any): _173.PexRequest;
            fromPartial(_: {}): _173.PexRequest;
        };
        PexAddrs: {
            encode(message: _173.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.PexAddrs;
            fromJSON(object: any): _173.PexAddrs;
            fromPartial(object: {
                addrs?: {
                    id?: string;
                    ip?: string;
                    port?: number;
                }[];
            }): _173.PexAddrs;
        };
        Message: {
            encode(message: _173.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Message;
            fromJSON(object: any): _173.Message;
            fromPartial(object: {
                pex_request?: {};
                pex_addrs?: {
                    addrs?: {
                        id?: string;
                        ip?: string;
                        port?: number;
                    }[];
                };
            }): _173.Message;
        };
        PacketPing: {
            encode(_: _172.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.PacketPing;
            fromJSON(_: any): _172.PacketPing;
            fromPartial(_: {}): _172.PacketPing;
        };
        PacketPong: {
            encode(_: _172.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.PacketPong;
            fromJSON(_: any): _172.PacketPong;
            fromPartial(_: {}): _172.PacketPong;
        };
        PacketMsg: {
            encode(message: _172.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.PacketMsg;
            fromJSON(object: any): _172.PacketMsg;
            fromPartial(object: {
                channel_id?: number;
                eof?: boolean;
                data?: Uint8Array;
            }): _172.PacketMsg;
        };
        Packet: {
            encode(message: _172.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Packet;
            fromJSON(object: any): _172.Packet;
            fromPartial(object: {
                packet_ping?: {};
                packet_pong?: {};
                packet_msg?: {
                    channel_id?: number;
                    eof?: boolean;
                    data?: Uint8Array;
                };
            }): _172.Packet;
        };
        AuthSigMessage: {
            encode(message: _172.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.AuthSigMessage;
            fromJSON(object: any): _172.AuthSigMessage;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                sig?: Uint8Array;
            }): _172.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _175.Errors;
        errorsToJSON(object: _175.Errors): string;
        Errors: typeof _175.Errors;
        RemoteSignerError: {
            encode(message: _175.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RemoteSignerError;
            fromJSON(object: any): _175.RemoteSignerError;
            fromPartial(object: {
                code?: number;
                description?: string;
            }): _175.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _175.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.PubKeyRequest;
            fromJSON(object: any): _175.PubKeyRequest;
            fromPartial(object: {
                chain_id?: string;
            }): _175.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _175.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.PubKeyResponse;
            fromJSON(object: any): _175.PubKeyResponse;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                error?: {
                    code?: number;
                    description?: string;
                };
            }): _175.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _175.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SignVoteRequest;
            fromJSON(object: any): _175.SignVoteRequest;
            fromPartial(object: {
                vote?: {
                    type?: _185.SignedMsgType;
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
                chain_id?: string;
            }): _175.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _175.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SignedVoteResponse;
            fromJSON(object: any): _175.SignedVoteResponse;
            fromPartial(object: {
                vote?: {
                    type?: _185.SignedMsgType;
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
                error?: {
                    code?: number;
                    description?: string;
                };
            }): _175.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _175.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SignProposalRequest;
            fromJSON(object: any): _175.SignProposalRequest;
            fromPartial(object: {
                proposal?: {
                    type?: _185.SignedMsgType;
                    height?: string | number | import("long").default;
                    round?: number;
                    pol_round?: number;
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
                    signature?: Uint8Array;
                };
                chain_id?: string;
            }): _175.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _175.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.SignedProposalResponse;
            fromJSON(object: any): _175.SignedProposalResponse;
            fromPartial(object: {
                proposal?: {
                    type?: _185.SignedMsgType;
                    height?: string | number | import("long").default;
                    round?: number;
                    pol_round?: number;
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
                    signature?: Uint8Array;
                };
                error?: {
                    code?: number;
                    description?: string;
                };
            }): _175.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _175.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.PingRequest;
            fromJSON(_: any): _175.PingRequest;
            fromPartial(_: {}): _175.PingRequest;
        };
        PingResponse: {
            encode(_: _175.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.PingResponse;
            fromJSON(_: any): _175.PingResponse;
            fromPartial(_: {}): _175.PingResponse;
        };
        Message: {
            encode(message: _175.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Message;
            fromJSON(object: any): _175.Message;
            fromPartial(object: {
                pub_key_request?: {
                    chain_id?: string;
                };
                pub_key_response?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    error?: {
                        code?: number;
                        description?: string;
                    };
                };
                sign_vote_request?: {
                    vote?: {
                        type?: _185.SignedMsgType;
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
                    chain_id?: string;
                };
                signed_vote_response?: {
                    vote?: {
                        type?: _185.SignedMsgType;
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
                    error?: {
                        code?: number;
                        description?: string;
                    };
                };
                sign_proposal_request?: {
                    proposal?: {
                        type?: _185.SignedMsgType;
                        height?: string | number | import("long").default;
                        round?: number;
                        pol_round?: number;
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
                        signature?: Uint8Array;
                    };
                    chain_id?: string;
                };
                signed_proposal_response?: {
                    proposal?: {
                        type?: _185.SignedMsgType;
                        height?: string | number | import("long").default;
                        round?: number;
                        pol_round?: number;
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
                        signature?: Uint8Array;
                    };
                    error?: {
                        code?: number;
                        description?: string;
                    };
                };
                ping_request?: {};
                ping_response?: {};
            }): _175.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _176.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestPing;
                fromJSON(_: any): _176.RequestPing;
                fromPartial(_: {}): _176.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _176.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestBroadcastTx;
                fromJSON(object: any): _176.RequestBroadcastTx;
                fromPartial(object: {
                    tx?: Uint8Array;
                }): _176.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _176.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponsePing;
                fromJSON(_: any): _176.ResponsePing;
                fromPartial(_: {}): _176.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _176.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseBroadcastTx;
                fromJSON(object: any): _176.ResponseBroadcastTx;
                fromPartial(object: {
                    check_tx?: {
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
                        sender?: string;
                        priority?: string | number | import("long").default;
                        mempool_error?: string;
                    };
                    deliver_tx?: {
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
                }): _176.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _177.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ABCIResponses;
            fromJSON(object: any): _177.ABCIResponses;
            fromPartial(object: {
                deliver_txs?: {
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
                }[];
                end_block?: {
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
                begin_block?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                            index?: boolean;
                        }[];
                    }[];
                };
            }): _177.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _177.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ValidatorsInfo;
            fromJSON(object: any): _177.ValidatorsInfo;
            fromPartial(object: {
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
                last_height_changed?: string | number | import("long").default;
            }): _177.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _177.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ConsensusParamsInfo;
            fromJSON(object: any): _177.ConsensusParamsInfo;
            fromPartial(object: {
                consensus_params?: {
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
                last_height_changed?: string | number | import("long").default;
            }): _177.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _177.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ABCIResponsesInfo;
            fromJSON(object: any): _177.ABCIResponsesInfo;
            fromPartial(object: {
                abci_responses?: {
                    deliver_txs?: {
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
                    }[];
                    end_block?: {
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
                    begin_block?: {
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                                index?: boolean;
                            }[];
                        }[];
                    };
                };
                height?: string | number | import("long").default;
            }): _177.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _177.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Version;
            fromJSON(object: any): _177.Version;
            fromPartial(object: {
                consensus?: {
                    block?: string | number | import("long").default;
                    app?: string | number | import("long").default;
                };
                software?: string;
            }): _177.Version;
        };
        State: {
            encode(message: _177.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.State;
            fromJSON(object: any): _177.State;
            fromPartial(object: {
                version?: {
                    consensus?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    software?: string;
                };
                chain_id?: string;
                initial_height?: string | number | import("long").default;
                last_block_height?: string | number | import("long").default;
                last_block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                last_block_time?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                next_validators?: {
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
                validators?: {
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
                last_validators?: {
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
                last_height_validators_changed?: string | number | import("long").default;
                consensus_params?: {
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
                last_height_consensus_params_changed?: string | number | import("long").default;
                last_results_hash?: Uint8Array;
                app_hash?: Uint8Array;
            }): _177.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _178.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Message;
            fromJSON(object: any): _178.Message;
            fromPartial(object: {
                snapshots_request?: {};
                snapshots_response?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                chunk_request?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    index?: number;
                };
                chunk_response?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    index?: number;
                    chunk?: Uint8Array;
                    missing?: boolean;
                };
            }): _178.Message;
        };
        SnapshotsRequest: {
            encode(_: _178.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SnapshotsRequest;
            fromJSON(_: any): _178.SnapshotsRequest;
            fromPartial(_: {}): _178.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _178.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.SnapshotsResponse;
            fromJSON(object: any): _178.SnapshotsResponse;
            fromPartial(object: {
                height?: string | number | import("long").default;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _178.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _178.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ChunkRequest;
            fromJSON(object: any): _178.ChunkRequest;
            fromPartial(object: {
                height?: string | number | import("long").default;
                format?: number;
                index?: number;
            }): _178.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _178.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ChunkResponse;
            fromJSON(object: any): _178.ChunkResponse;
            fromPartial(object: {
                height?: string | number | import("long").default;
                format?: number;
                index?: number;
                chunk?: Uint8Array;
                missing?: boolean;
            }): _178.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _179.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.BlockStoreState;
            fromJSON(object: any): _179.BlockStoreState;
            fromPartial(object: {
                base?: string | number | import("long").default;
                height?: string | number | import("long").default;
            }): _179.BlockStoreState;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _186.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.ValidatorSet;
            fromJSON(object: any): _186.ValidatorSet;
            fromPartial(object: {
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
            }): _186.ValidatorSet;
        };
        Validator: {
            encode(message: _186.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.Validator;
            fromJSON(object: any): _186.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                voting_power?: string | number | import("long").default;
                proposer_priority?: string | number | import("long").default;
            }): _186.Validator;
        };
        SimpleValidator: {
            encode(message: _186.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.SimpleValidator;
            fromJSON(object: any): _186.SimpleValidator;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                voting_power?: string | number | import("long").default;
            }): _186.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _185.BlockIDFlag;
        blockIDFlagToJSON(object: _185.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _185.SignedMsgType;
        signedMsgTypeToJSON(object: _185.SignedMsgType): string;
        BlockIDFlag: typeof _185.BlockIDFlag;
        SignedMsgType: typeof _185.SignedMsgType;
        PartSetHeader: {
            encode(message: _185.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.PartSetHeader;
            fromJSON(object: any): _185.PartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _185.PartSetHeader;
        };
        Part: {
            encode(message: _185.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Part;
            fromJSON(object: any): _185.Part;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").default;
                    index?: string | number | import("long").default;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _185.Part;
        };
        BlockID: {
            encode(message: _185.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.BlockID;
            fromJSON(object: any): _185.BlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                part_set_header?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _185.BlockID;
        };
        Header: {
            encode(message: _185.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Header;
            fromJSON(object: any): _185.Header;
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
                proposer_address?: Uint8Array;
            }): _185.Header;
        };
        Data: {
            encode(message: _185.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Data;
            fromJSON(object: any): _185.Data;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _185.Data;
        };
        Vote: {
            encode(message: _185.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Vote;
            fromJSON(object: any): _185.Vote;
            fromPartial(object: {
                type?: _185.SignedMsgType;
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
            }): _185.Vote;
        };
        Commit: {
            encode(message: _185.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Commit;
            fromJSON(object: any): _185.Commit;
            fromPartial(object: {
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
                    block_id_flag?: _185.BlockIDFlag;
                    validator_address?: Uint8Array;
                    timestamp?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    signature?: Uint8Array;
                }[];
            }): _185.Commit;
        };
        CommitSig: {
            encode(message: _185.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.CommitSig;
            fromJSON(object: any): _185.CommitSig;
            fromPartial(object: {
                block_id_flag?: _185.BlockIDFlag;
                validator_address?: Uint8Array;
                timestamp?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                signature?: Uint8Array;
            }): _185.CommitSig;
        };
        Proposal: {
            encode(message: _185.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Proposal;
            fromJSON(object: any): _185.Proposal;
            fromPartial(object: {
                type?: _185.SignedMsgType;
                height?: string | number | import("long").default;
                round?: number;
                pol_round?: number;
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
                signature?: Uint8Array;
            }): _185.Proposal;
        };
        SignedHeader: {
            encode(message: _185.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.SignedHeader;
            fromJSON(object: any): _185.SignedHeader;
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
                        block_id_flag?: _185.BlockIDFlag;
                        validator_address?: Uint8Array;
                        timestamp?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _185.SignedHeader;
        };
        LightBlock: {
            encode(message: _185.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.LightBlock;
            fromJSON(object: any): _185.LightBlock;
            fromPartial(object: {
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
                            block_id_flag?: _185.BlockIDFlag;
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
            }): _185.LightBlock;
        };
        BlockMeta: {
            encode(message: _185.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.BlockMeta;
            fromJSON(object: any): _185.BlockMeta;
            fromPartial(object: {
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                block_size?: string | number | import("long").default;
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
                num_txs?: string | number | import("long").default;
            }): _185.BlockMeta;
        };
        TxProof: {
            encode(message: _185.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.TxProof;
            fromJSON(object: any): _185.TxProof;
            fromPartial(object: {
                root_hash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").default;
                    index?: string | number | import("long").default;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _185.TxProof;
        };
        ConsensusParams: {
            encode(message: _184.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ConsensusParams;
            fromJSON(object: any): _184.ConsensusParams;
            fromPartial(object: {
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
            }): _184.ConsensusParams;
        };
        BlockParams: {
            encode(message: _184.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.BlockParams;
            fromJSON(object: any): _184.BlockParams;
            fromPartial(object: {
                max_bytes?: string | number | import("long").default;
                max_gas?: string | number | import("long").default;
            }): _184.BlockParams;
        };
        EvidenceParams: {
            encode(message: _184.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.EvidenceParams;
            fromJSON(object: any): _184.EvidenceParams;
            fromPartial(object: {
                max_age_num_blocks?: string | number | import("long").default;
                max_age_duration?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                max_bytes?: string | number | import("long").default;
            }): _184.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _184.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ValidatorParams;
            fromJSON(object: any): _184.ValidatorParams;
            fromPartial(object: {
                pub_key_types?: string[];
            }): _184.ValidatorParams;
        };
        VersionParams: {
            encode(message: _184.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.VersionParams;
            fromJSON(object: any): _184.VersionParams;
            fromPartial(object: {
                app?: string | number | import("long").default;
            }): _184.VersionParams;
        };
        HashedParams: {
            encode(message: _184.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.HashedParams;
            fromJSON(object: any): _184.HashedParams;
            fromPartial(object: {
                block_max_bytes?: string | number | import("long").default;
                block_max_gas?: string | number | import("long").default;
            }): _184.HashedParams;
        };
        Evidence: {
            encode(message: _183.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Evidence;
            fromJSON(object: any): _183.Evidence;
            fromPartial(object: {
                duplicate_vote_evidence?: {
                    vote_a?: {
                        type?: _185.SignedMsgType;
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
                        type?: _185.SignedMsgType;
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
                                    block_id_flag?: _185.BlockIDFlag;
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
            }): _183.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _183.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.DuplicateVoteEvidence;
            fromJSON(object: any): _183.DuplicateVoteEvidence;
            fromPartial(object: {
                vote_a?: {
                    type?: _185.SignedMsgType;
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
                    type?: _185.SignedMsgType;
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
            }): _183.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _183.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.LightClientAttackEvidence;
            fromJSON(object: any): _183.LightClientAttackEvidence;
            fromPartial(object: {
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
                                block_id_flag?: _185.BlockIDFlag;
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
            }): _183.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _183.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.EvidenceList;
            fromJSON(object: any): _183.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: _185.SignedMsgType;
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
                            type?: _185.SignedMsgType;
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
                                        block_id_flag?: _185.BlockIDFlag;
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
            }): _183.EvidenceList;
        };
        EventDataRoundState: {
            encode(message: _182.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.EventDataRoundState;
            fromJSON(object: any): _182.EventDataRoundState;
            fromPartial(object: {
                height?: string | number | import("long").default;
                round?: number;
                step?: string;
            }): _182.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _181.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.CanonicalBlockID;
            fromJSON(object: any): _181.CanonicalBlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                part_set_header?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _181.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _181.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.CanonicalPartSetHeader;
            fromJSON(object: any): _181.CanonicalPartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _181.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _181.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.CanonicalProposal;
            fromJSON(object: any): _181.CanonicalProposal;
            fromPartial(object: {
                type?: _185.SignedMsgType;
                height?: string | number | import("long").default;
                round?: string | number | import("long").default;
                pol_round?: string | number | import("long").default;
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
                chain_id?: string;
            }): _181.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _181.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.CanonicalVote;
            fromJSON(object: any): _181.CanonicalVote;
            fromPartial(object: {
                type?: _185.SignedMsgType;
                height?: string | number | import("long").default;
                round?: string | number | import("long").default;
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
                chain_id?: string;
            }): _181.CanonicalVote;
        };
        Block: {
            encode(message: _180.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Block;
            fromJSON(object: any): _180.Block;
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
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicate_vote_evidence?: {
                            vote_a?: {
                                type?: _185.SignedMsgType;
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
                                type?: _185.SignedMsgType;
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
                                            block_id_flag?: _185.BlockIDFlag;
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
                        block_id_flag?: _185.BlockIDFlag;
                        validator_address?: Uint8Array;
                        timestamp?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _180.Block;
        };
    };
    const version: {
        App: {
            encode(message: _187.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.App;
            fromJSON(object: any): _187.App;
            fromPartial(object: {
                protocol?: string | number | import("long").default;
                software?: string;
            }): _187.App;
        };
        Consensus: {
            encode(message: _187.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Consensus;
            fromJSON(object: any): _187.Consensus;
            fromPartial(object: {
                block?: string | number | import("long").default;
                app?: string | number | import("long").default;
            }): _187.Consensus;
        };
    };
}
