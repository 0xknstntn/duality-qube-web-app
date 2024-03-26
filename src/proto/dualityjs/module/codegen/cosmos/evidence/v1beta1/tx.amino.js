export const AminoConverter = {
  "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
    aminoType: "cosmos-sdk/MsgSubmitEvidence",
    toAmino: ({
      submitter,
      evidence
    }) => {
      return {
        submitter,
        evidence: {
          type_url: evidence.type_url,
          value: evidence.value
        }
      };
    },
    fromAmino: ({
      submitter,
      evidence
    }) => {
      return {
        submitter,
        evidence: {
          type_url: evidence.type_url,
          value: evidence.value
        }
      };
    }
  }
};