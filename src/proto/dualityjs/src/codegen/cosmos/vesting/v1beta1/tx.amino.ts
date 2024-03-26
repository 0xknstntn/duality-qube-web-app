import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
export interface MsgCreateVestingAccountAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateVestingAccount";
  value: {
    from_address: string;
    to_address: string;
    amount: {
      denom: string;
      amount: string;
    }[];
    end_time: string;
    delayed: boolean;
  };
}
export interface MsgCreatePermanentLockedAccountAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreatePermLockedAccount";
  value: {
    from_address: string;
    to_address: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgCreatePeriodicVestingAccountAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreatePeriodicVestingAccount";
  value: {
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
}
export const AminoConverter = {
  "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    toAmino: ({
      from_address,
      to_address,
      amount,
      end_time,
      delayed
    }: MsgCreateVestingAccount): MsgCreateVestingAccountAminoType["value"] => {
      return {
        from_address,
        to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        end_time: end_time.toString(),
        delayed
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      amount,
      end_time,
      delayed
    }: MsgCreateVestingAccountAminoType["value"]): MsgCreateVestingAccount => {
      return {
        from_address,
        to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        end_time: Long.fromString(end_time),
        delayed
      };
    }
  },
  "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
    aminoType: "cosmos-sdk/MsgCreatePermLockedAccount",
    toAmino: ({
      from_address,
      to_address,
      amount
    }: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountAminoType["value"] => {
      return {
        from_address,
        to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      amount
    }: MsgCreatePermanentLockedAccountAminoType["value"]): MsgCreatePermanentLockedAccount => {
      return {
        from_address,
        to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
    toAmino: ({
      from_address,
      to_address,
      start_time,
      vesting_periods
    }: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountAminoType["value"] => {
      return {
        from_address,
        to_address,
        start_time: start_time.toString(),
        vesting_periods: vesting_periods.map(el0 => ({
          length: el0.length.toString(),
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      start_time,
      vesting_periods
    }: MsgCreatePeriodicVestingAccountAminoType["value"]): MsgCreatePeriodicVestingAccount => {
      return {
        from_address,
        to_address,
        start_time: Long.fromString(start_time),
        vesting_periods: vesting_periods.map(el0 => ({
          length: Long.fromString(el0.length),
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    }
  }
};