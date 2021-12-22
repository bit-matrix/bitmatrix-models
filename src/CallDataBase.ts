import { CALL_METHOD } from "./CALL_METHOD";

export type CallDataBase = {
  method: CALL_METHOD;
  recipientPublicKey: string;
  slippageTolerance: string;
  orderingFee: number;
};
