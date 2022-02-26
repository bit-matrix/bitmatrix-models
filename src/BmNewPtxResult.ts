import { BmCtxNew } from "./BmCtxNew";

export type BmNewPtxResult = {
  ctxsResult: { bmCtxNew: BmCtxNew; isOutOfSlippage: boolean; error?: string | undefined }[];
  poolTx?: string | undefined;
};
