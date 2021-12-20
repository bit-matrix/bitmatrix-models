import { BmCtxNew } from "./BmCtxNew";

export type BmCtxMempool = BmCtxNew & {
    poolTxid: string;
};