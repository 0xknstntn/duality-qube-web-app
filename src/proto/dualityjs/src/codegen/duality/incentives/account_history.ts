import { Coin } from '../../cosmos/base/v1beta1/coin';
import * as _m0 from 'protobufjs/minimal';
import { isSet, DeepPartial } from '../../helpers';
/** Describes the total distributions to an account over time */
export interface AccountHistory {
  /** the address of this account */
  account: string;
  /** coins describes the total amount of coins that have been distributed to this user over time */
  coins: Coin[];
}
function createBaseAccountHistory(): AccountHistory {
  return {
    account: '',
    coins: []
  };
}
export const AccountHistory = {
  encode(message: AccountHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AccountHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountHistory {
    return {
      account: isSet(object.account) ? String(object.account) : '',
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: DeepPartial<AccountHistory>): AccountHistory {
    const message = createBaseAccountHistory();
    message.account = object.account ?? '';
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};