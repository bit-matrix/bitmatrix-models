import { BmCtxNew } from "./BmCtxNew";
import { BmTxInfo } from "./BmTxInfo";

export type BmPtx = BmCtxNew & {
  poolTx: BmTxInfo;
  isOutOfSlippage: boolean;
};
