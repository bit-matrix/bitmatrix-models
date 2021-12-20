import { CALL_METHOD } from "./CALL_METHOD";
export declare type CallData = {
    method: CALL_METHOD;
    recipientPublicKey: string;
    slippageTolerance: string;
    orderingFee: number;
    value: {
        quote: number;
        token: number;
        lp: number;
    };
};
