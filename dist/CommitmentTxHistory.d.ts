import { CALL_METHOD } from "./CALL_METHOD";
export declare type CommitmentTxHistory = {
    poolId: string;
    method: CALL_METHOD;
    txId: string;
    isSuccess: boolean;
    timestamp: number;
    failReasons?: string;
};
