import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { PairID } from "../dex/pair_id";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Gauge is an object that describes an LP incentivization plan and its state. */
export interface Gauge {
    /** id is the unique ID of a Gauge */
    id: Long;
    /**
     * There are two kinds of gauges: perpetual and non-perpetual. Perpetual
     * gauges describe an incentivization program for which the token rewards
     * distributed on any given day must be added to the gauge prior to that day's
     * distribution using an AddToGauge message.  When distribute is called on a
     * perpetual gauge, all of the remaining rewards in the gauge are distributed.
     * Because of this, all perpetual gauges must have `num_epochs_paid_over` set
     * to 1.  A non-perpetual gauge by contrast distributes its rewards over a
     * schedule as determined by `num_epochs_paid_over`. If a non-perpetual gauge
     * is created with coins=[100atom] and num_epochs_paid_over=10, this means
     * that for 10 days (10 epochs) the gauge will distribute 10atom each day to
     * the staked LP positions qualifying for the gauge.
     */
    is_perpetual: boolean;
    /**
     * distribute_to describes a set of staked LP positions that should be
     * distributed to from this gauge.
     */
    distribute_to: QueryCondition;
    /**
     * coins describes the total amount of coins that have been added to this
     * gauge for distribution.
     */
    coins: Coin[];
    /**
     * start_time describes when this gauge should begin distributing rewards.
     * This allows gauge creators to schedule gauges into the future, in the event
     * that an earlier gauge is expected to expire.
     */
    start_time: Timestamp;
    /**
     * num_epochs_paid_over is the number of total epochs (days) the rewards in
     * this gauge will be distributed over.
     */
    num_epochs_paid_over: Long;
    /**
     * filled_epochs describes the number of epochs distribution have been completed
     * already
     */
    filled_epochs: Long;
    /**
     * distributed_coins describes coins that have been distributed already from
     * this gauge.
     */
    distributed_coins: Coin[];
    /**
     * pricing_tick is necessary for fairly distributing rewards over a range of
     * ticks.  Without pricing_tick, we might naively distribute rewards in
     * proportion to the number of deposit shares staked within the gauge's
     * qualifying tick range.
     *
     * For example, a gauge with a distribute_to tick range of [-10, 10] would
     * distribute to staked LP tokens where both tick-fee and tick+fee are within
     * [-10, 10]. Let's say for pair "tokenA<>tokenB", the current trading tick is
     * 0. If Alice were to LP (10tokenA, 0tokenB) @ tick -8, fee 2, this would
     * mean Alice would be issued 10 shares (10 + 0 * 1.0001^-8), since shares are
     * in terms of token0. Let's further assume Bob LPs (0tokenA, 10tokenB) @ tick
     * 8, fee 2, such that Bob is issued 10.008 shares (0 + 10 * 1.0001^8). Under
     * this naive approach, if Alice and Bob were to stake their shares, Bob would
     * receive more in rewards, purely on the basis of the relative locations of
     * their liquidity.
     *
     * This disparity originates in the fact that LP deposit denominations are not
     * fungible across ticks. To avoid this, we can use a single price throughout
     * the gauge's tick range for relating the relative value of token0 and
     * token1, as specified by pricing_tick.
     *
     * Let's run through the earier example using the more sophisticated approach,
     * where the gauge has pricing_tick set to 0. For the purpose of calculating
     * reward distribution weight, Alice's shares are worth 10 + 0 * 1.0001^0 = 10
     * and Bob's shares are worth 0 + 10 * 1.0001^0 = 10. With the distribution
     * weight of both shares set according to a gauge-specific tick, we do not
     * distribute more or less rewards according to the relative location of
     * liquidity within the gauge's tick range, freeing users to place liquidity
     * whereever they deem most profitable in the gauge's range and still equally
     * qualify for rewards.
     */
    pricing_tick: Long;
}
/**
 * QueryCondition describes a set of staked LP positions that a gauge is
 * configured to distribute to. LP tokens qualifying for a given QueryCondition
 * must have both tick-fee and tick+fee fall within the range [startTick, endTick],
 * such that all of the tradable liquidity for the pool is within that range.
 */
export interface QueryCondition {
    /** pairID is the token pair which should be distributed to. */
    pairID: PairID;
    /**
     * start_tick is the inclusive lower bound on the location of LP tokens that
     * qualify for a gauge's distribution.
     */
    startTick: Long;
    /**
     * end_tick is the inclusive upper bound on the location of LP tokens that
     * qualify for a gauge's distribution.
     */
    endTick: Long;
}
export declare const Gauge: {
    encode(message: Gauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Gauge;
    fromJSON(object: any): Gauge;
    fromPartial(object: DeepPartial<Gauge>): Gauge;
};
export declare const QueryCondition: {
    encode(message: QueryCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCondition;
    fromJSON(object: any): QueryCondition;
    fromPartial(object: DeepPartial<QueryCondition>): QueryCondition;
};
