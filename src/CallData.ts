import { CALL_METHOD } from "./CALL_METHOD";

export type CallData = {
    method: CALL_METHOD;
    recipientPublicKey: string;
    slippageTolerance: string; // number; TODO
    orderingFee: number; // number; TODO
    value: {
      quote: number;
      token: number;
      lp: number;
    };
  };