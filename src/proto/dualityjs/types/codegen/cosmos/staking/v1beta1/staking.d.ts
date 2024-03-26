import { Header } from "../../../tendermint/types/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
import { ValidatorUpdate } from "../../../tendermint/abci/types";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BondStatus is the status of a validator. */
export declare enum BondStatus {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BOND_STATUS_UNSPECIFIED = 0,
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BOND_STATUS_UNBONDED = 1,
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BOND_STATUS_UNBONDING = 2,
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BOND_STATUS_BONDED = 3,
    UNRECOGNIZED = -1
}
export declare function bondStatusFromJSON(object: any): BondStatus;
export declare function bondStatusToJSON(object: BondStatus): string;
/** Infraction indicates the infraction a validator commited. */
export declare enum Infraction {
    /** INFRACTION_UNSPECIFIED - UNSPECIFIED defines an empty infraction. */
    INFRACTION_UNSPECIFIED = 0,
    /** INFRACTION_DOUBLE_SIGN - DOUBLE_SIGN defines a validator that double-signs a block. */
    INFRACTION_DOUBLE_SIGN = 1,
    /** INFRACTION_DOWNTIME - DOWNTIME defines a validator that missed signing too many blocks. */
    INFRACTION_DOWNTIME = 2,
    UNRECOGNIZED = -1
}
export declare function infractionFromJSON(object: any): Infraction;
export declare function infractionToJSON(object: Infraction): string;
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
    header: Header;
    valset: Validator[];
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
    /** rate is the commission rate charged to delegators, as a fraction. */
    rate: string;
    /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
    max_rate: string;
    /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
    max_change_rate: string;
}
/** Commission defines commission parameters for a given validator. */
export interface Commission {
    /** commission_rates defines the initial commission rates to be used for creating a validator. */
    commission_rates: CommissionRates;
    /** update_time is the last time the commission rate was changed. */
    update_time: Timestamp;
}
/** Description defines a validator description. */
export interface Description {
    /** moniker defines a human-readable name for the validator. */
    moniker: string;
    /** identity defines an optional identity signature (ex. UPort or Keybase). */
    identity: string;
    /** website defines an optional website link. */
    website: string;
    /** security_contact defines an optional email for security contact. */
    security_contact: string;
    /** details define other optional details. */
    details: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address: string;
    /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
    consensus_pubkey: Any;
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed: boolean;
    /** status is the validator status (bonded/unbonding/unbonded). */
    status: BondStatus;
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares: string;
    /** description defines the description terms for the validator. */
    description: Description;
    /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
    unbonding_height: Long;
    /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
    unbonding_time: Timestamp;
    /** commission defines the commission parameters. */
    commission: Commission;
    /**
     * min_self_delegation is the validator's self declared minimum self delegation.
     *
     * Since: cosmos-sdk 0.46
     */
    min_self_delegation: string;
    /** strictly positive if this validator's unbonding has been stopped by external modules */
    unbonding_on_hold_ref_count: Long;
    /** list of unbonding ids, each uniquely identifing an unbonding of this validator */
    unbonding_ids: Long[];
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
    addresses: string[];
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
    delegator_address: string;
    validator_address: string;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
    pairs: DVPair[];
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
    triplets: DVVTriplet[];
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address: string;
    /** shares define the delegation shares received. */
    shares: string;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address: string;
    /** entries are the unbonding delegation entries. */
    entries: UnbondingDelegationEntry[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
    /** creation_height is the height which the unbonding took place. */
    creation_height: Long;
    /** completion_time is the unix time for unbonding completion. */
    completion_time: Timestamp;
    /** initial_balance defines the tokens initially scheduled to receive at completion. */
    initial_balance: string;
    /** balance defines the tokens to receive at completion. */
    balance: string;
    /** Incrementing id that uniquely identifies this entry */
    unbonding_id: Long;
    /** Strictly positive if this entry's unbonding has been stopped by external modules */
    unbonding_on_hold_ref_count: Long;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
    /** creation_height  defines the height which the redelegation took place. */
    creation_height: Long;
    /** completion_time defines the unix time for redelegation completion. */
    completion_time: Timestamp;
    /** initial_balance defines the initial balance when redelegation started. */
    initial_balance: string;
    /** shares_dst is the amount of destination-validator shares created by redelegation. */
    shares_dst: string;
    /** Incrementing id that uniquely identifies this entry */
    unbonding_id: Long;
    /** Strictly positive if this entry's unbonding has been stopped by external modules */
    unbonding_on_hold_ref_count: Long;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address: string;
    /** validator_src_address is the validator redelegation source operator address. */
    validator_src_address: string;
    /** validator_dst_address is the validator redelegation destination operator address. */
    validator_dst_address: string;
    /** entries are the redelegation entries. */
    entries: RedelegationEntry[];
}
/** Params defines the parameters for the x/staking module. */
export interface Params {
    /** unbonding_time is the time duration of unbonding. */
    unbonding_time: Duration;
    /** max_validators is the maximum number of validators. */
    max_validators: number;
    /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
    max_entries: number;
    /** historical_entries is the number of historical entries to persist. */
    historical_entries: number;
    /** bond_denom defines the bondable coin denomination. */
    bond_denom: string;
    /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
    min_commission_rate: string;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
    delegation: Delegation;
    balance: Coin;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
    redelegation_entry: RedelegationEntry;
    balance: string;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
    redelegation: Redelegation;
    entries: RedelegationEntryResponse[];
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
    not_bonded_tokens: string;
    bonded_tokens: string;
}
/**
 * ValidatorUpdates defines an array of abci.ValidatorUpdate objects.
 * TODO: explore moving this to proto/cosmos/base to separate modules from tendermint dependence
 */
export interface ValidatorUpdates {
    updates: ValidatorUpdate[];
}
export declare const HistoricalInfo: {
    encode(message: HistoricalInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalInfo;
    fromJSON(object: any): HistoricalInfo;
    fromPartial(object: DeepPartial<HistoricalInfo>): HistoricalInfo;
};
export declare const CommissionRates: {
    encode(message: CommissionRates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommissionRates;
    fromJSON(object: any): CommissionRates;
    fromPartial(object: DeepPartial<CommissionRates>): CommissionRates;
};
export declare const Commission: {
    encode(message: Commission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Commission;
    fromJSON(object: any): Commission;
    fromPartial(object: DeepPartial<Commission>): Commission;
};
export declare const Description: {
    encode(message: Description, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Description;
    fromJSON(object: any): Description;
    fromPartial(object: DeepPartial<Description>): Description;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
export declare const ValAddresses: {
    encode(message: ValAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValAddresses;
    fromJSON(object: any): ValAddresses;
    fromPartial(object: DeepPartial<ValAddresses>): ValAddresses;
};
export declare const DVPair: {
    encode(message: DVPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DVPair;
    fromJSON(object: any): DVPair;
    fromPartial(object: DeepPartial<DVPair>): DVPair;
};
export declare const DVPairs: {
    encode(message: DVPairs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DVPairs;
    fromJSON(object: any): DVPairs;
    fromPartial(object: DeepPartial<DVPairs>): DVPairs;
};
export declare const DVVTriplet: {
    encode(message: DVVTriplet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplet;
    fromJSON(object: any): DVVTriplet;
    fromPartial(object: DeepPartial<DVVTriplet>): DVVTriplet;
};
export declare const DVVTriplets: {
    encode(message: DVVTriplets, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplets;
    fromJSON(object: any): DVVTriplets;
    fromPartial(object: DeepPartial<DVVTriplets>): DVVTriplets;
};
export declare const Delegation: {
    encode(message: Delegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegation;
    fromJSON(object: any): Delegation;
    fromPartial(object: DeepPartial<Delegation>): Delegation;
};
export declare const UnbondingDelegation: {
    encode(message: UnbondingDelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegation;
    fromJSON(object: any): UnbondingDelegation;
    fromPartial(object: DeepPartial<UnbondingDelegation>): UnbondingDelegation;
};
export declare const UnbondingDelegationEntry: {
    encode(message: UnbondingDelegationEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegationEntry;
    fromJSON(object: any): UnbondingDelegationEntry;
    fromPartial(object: DeepPartial<UnbondingDelegationEntry>): UnbondingDelegationEntry;
};
export declare const RedelegationEntry: {
    encode(message: RedelegationEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry;
    fromJSON(object: any): RedelegationEntry;
    fromPartial(object: DeepPartial<RedelegationEntry>): RedelegationEntry;
};
export declare const Redelegation: {
    encode(message: Redelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation;
    fromJSON(object: any): Redelegation;
    fromPartial(object: DeepPartial<Redelegation>): Redelegation;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const DelegationResponse: {
    encode(message: DelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationResponse;
    fromJSON(object: any): DelegationResponse;
    fromPartial(object: DeepPartial<DelegationResponse>): DelegationResponse;
};
export declare const RedelegationEntryResponse: {
    encode(message: RedelegationEntryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntryResponse;
    fromJSON(object: any): RedelegationEntryResponse;
    fromPartial(object: DeepPartial<RedelegationEntryResponse>): RedelegationEntryResponse;
};
export declare const RedelegationResponse: {
    encode(message: RedelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationResponse;
    fromJSON(object: any): RedelegationResponse;
    fromPartial(object: DeepPartial<RedelegationResponse>): RedelegationResponse;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    fromPartial(object: DeepPartial<Pool>): Pool;
};
export declare const ValidatorUpdates: {
    encode(message: ValidatorUpdates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdates;
    fromJSON(object: any): ValidatorUpdates;
    fromPartial(object: DeepPartial<ValidatorUpdates>): ValidatorUpdates;
};