import * as _116 from './dex/deposit_record';
import * as _117 from './dex/genesis';
import * as _118 from './dex/limit_order_expiration';
import * as _119 from './dex/limit_order_tranche_user';
import * as _120 from './dex/limit_order_tranche';
import * as _121 from './dex/pair_id';
import * as _122 from './dex/params';
import * as _123 from './dex/pool_metadata';
import * as _124 from './dex/pool_reserves';
import * as _125 from './dex/pool';
import * as _126 from './dex/query';
import * as _127 from './dex/tick_liquidity';
import * as _128 from './dex/trade_pair_id';
import * as _129 from './dex/tx';
import * as _130 from './epochs/genesis';
import * as _131 from './epochs/query';
import * as _132 from './incentives/account_history';
import * as _133 from './incentives/gauge';
import * as _134 from './incentives/genesis';
import * as _135 from './incentives/params';
import * as _136 from './incentives/query';
import * as _137 from './incentives/stake';
import * as _138 from './incentives/tx';
import * as _285 from './dex/tx.amino';
import * as _286 from './incentives/tx.amino';
import * as _287 from './dex/tx.registry';
import * as _288 from './incentives/tx.registry';
import * as _289 from './dex/query.lcd';
import * as _290 from './epochs/query.lcd';
import * as _291 from './incentives/query.lcd';
import * as _292 from './dex/query.rpc.Query';
import * as _293 from './epochs/query.rpc.Query';
import * as _294 from './incentives/query.rpc.Query';
import * as _295 from './dex/tx.rpc.msg';
import * as _296 from './incentives/tx.rpc.msg';
import * as _321 from './lcd';
import * as _322 from './rpc.query';
import * as _323 from './rpc.tx';
export namespace duality {
  export const dex = {
    ..._116,
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._127,
    ..._128,
    ..._129,
    ..._285,
    ..._287,
    ..._289,
    ..._292,
    ..._295
  };
  export const epochs = {
    ..._130,
    ..._131,
    ..._290,
    ..._293
  };
  export const incentives = {
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._136,
    ..._137,
    ..._138,
    ..._286,
    ..._288,
    ..._291,
    ..._294,
    ..._296
  };
  export const ClientFactory = {
    ..._321,
    ..._322,
    ..._323
  };
}