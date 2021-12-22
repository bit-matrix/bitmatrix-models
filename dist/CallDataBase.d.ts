import { CALL_METHOD } from "./CALL_METHOD";
export declare type CallDataBase = {
    method: CALL_METHOD;
    recipientPublicKey: string;
    slippageTolerance: string;
    orderingFee: number;
};
