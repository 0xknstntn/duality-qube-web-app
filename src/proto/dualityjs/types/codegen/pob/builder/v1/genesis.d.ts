import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the genesis state of the x/builder module. */
export interface GenesisState {
    /** GenesisState defines the genesis state of the x/builder module. */
    params: Params;
}
/** Params defines the parameters of the x/builder module. */
export interface Params {
    /**
     * max_bundle_size is the maximum number of transactions that can be bundled
     * in a single bundle.
     */
    max_bundle_size: number;
    /**
     * escrow_account_address is the address of the account that will receive a
     * portion of the bid proceeds.
     */
    escrow_account_address: string;
    /** reserve_fee specifies the bid floor for the auction. */
    reserve_fee: Coin;
    /**
     * min_bid_increment specifies the minimum amount that the next bid must be
     * greater than the previous bid.
     */
    min_bid_increment: Coin;
    /**
     * front_running_protection specifies whether front running and sandwich
     * attack protection is enabled.
     */
    front_running_protection: boolean;
    /**
     * proposer_fee defines the portion of the winning bid that goes to the block
     * proposer that proposed the block.
     */
    proposer_fee: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
