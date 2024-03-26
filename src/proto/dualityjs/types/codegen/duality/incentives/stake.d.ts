import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Stake records what coins are staked when by who for the purpose of
 * calculating gauge reward distributions.
 */
export interface Stake {
    /** ID is the "autoincrementing" id of the stake, assigned at creation. */
    ID: Long;
    /**
     * owner is the account originating the stake. Only the owner can withdraw
     * coins from the stake.
     */
    owner: string;
    /** start_time is the time at which the coins in the lock were staked. */
    start_time: Timestamp;
    /** coins are the tokens staked, and managed by the module account. */
    coins: Coin[];
    /**
     * start_dist_epoch is the dist epoch (defaulting to the day) at which the
     * coins in the lock were staked. This is used by distribution logic to filter
     * on stakes that have existed for longer than the distribution period (you
     * can only qualify for today's rewards if you staked your LP tokens
     * yesterday). We use int64 instead of uint64 to make testing easier.
     */
    start_dist_epoch: Long;
}
export declare const Stake: {
    encode(message: Stake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Stake;
    fromJSON(object: any): Stake;
    fromPartial(object: DeepPartial<Stake>): Stake;
};
