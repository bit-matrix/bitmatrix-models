import { BmCtxNew } from "./BmCtxNew";
export declare type BmNewPtxResult = {
    ctxsResult: {
        bmCtxNew: BmCtxNew;
        isOutOfSlippage: boolean;
        error?: string | undefined;
    }[];
    poolTx?: string | undefined;
};
