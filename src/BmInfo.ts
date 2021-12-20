import { BmBlockInfo } from "./BmBlockInfo";

export type BmTxInfo = BmBlockInfo & {
  txid: string;
};
