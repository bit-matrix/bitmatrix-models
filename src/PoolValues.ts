import { BmTxInfo } from "./BmTxInfo";

export type PoolValues = {
  quote: string;
  token: string;
  lp: string;
  unspentTx?: BmTxInfo;
};
