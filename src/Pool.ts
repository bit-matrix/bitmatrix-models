import { BmBlockInfo } from "./BmBlockInfo";
import { BmTxInfo } from "./BmInfo";
import { PAsset } from "./PAsset";

export type Pool = {
  id: string;
  quote: PAsset;
  token: PAsset;
  lp: PAsset;
  createdTx: BmTxInfo;
  unspentTx: BmTxInfo;
  synced: boolean;
  syncedBlock: BmBlockInfo;
  recentBlock: BmBlockInfo;
  active: boolean;
};
