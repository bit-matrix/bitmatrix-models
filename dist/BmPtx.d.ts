import { BmCtxNew } from "./BmCtxNew";
import { BmTxInfo } from "./BmTxInfo";
export declare type BmPtx = BmCtxNew & {
    poolTx: BmTxInfo;
    isOutOfSlippage: boolean;
};
