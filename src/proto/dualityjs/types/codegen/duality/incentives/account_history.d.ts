import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** Describes the total distributions to an account over time */
export interface AccountHistory {
    /** the address of this account */
    account: string;
    /** coins describes the total amount of coins that have been distributed to this user over time */
    coins: Coin[];
}
export declare const AccountHistory: {
    encode(message: AccountHistory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountHistory;
    fromJSON(object: any): AccountHistory;
    fromPartial(object: DeepPartial<AccountHistory>): AccountHistory;
};
