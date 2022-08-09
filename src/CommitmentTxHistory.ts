import { CALL_METHOD } from "./CALL_METHOD";

export type CommitmentTxHistory = {
  poolId: string;
  method: CALL_METHOD;
  txId: string;
  isSuccess: boolean;
  failReasons?: string[];
  timestamp?: number;
};
