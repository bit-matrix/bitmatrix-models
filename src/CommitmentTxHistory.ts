import { CALL_METHOD } from "./CALL_METHOD";

export type CommitmentTxHistory = {
  poolId: string;
  method: CALL_METHOD;
  txId: string;
  isSuccess: boolean;
  timestamp: number;
  failReasons?: string;
  value: string;
  poolTxId?:string
};
