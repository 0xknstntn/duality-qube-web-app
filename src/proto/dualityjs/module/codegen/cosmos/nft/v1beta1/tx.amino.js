export const AminoConverter = {
  "/cosmos.nft.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgNFTSend",
    toAmino: ({
      class_id,
      id,
      sender,
      receiver
    }) => {
      return {
        class_id,
        id,
        sender,
        receiver
      };
    },
    fromAmino: ({
      class_id,
      id,
      sender,
      receiver
    }) => {
      return {
        class_id,
        id,
        sender,
        receiver
      };
    }
  }
};