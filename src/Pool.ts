import { BmBlockInfo } from "./BmBlockInfo";
import { BmTxInfo } from "./BmTxInfo";
import { PAsset } from "./PAsset";

/**
 * worker looks before creating new pool tx:
 * if(synced && lastSentPtx === undefined && exist(new_ctx))
 */
export type Pool = {
  /**
   * pool assets, values
   */
  id: string;
  quote: PAsset;
  token: PAsset;
  lp: PAsset;

  /**
   * pool creation tx info
   */
  initialTx: BmTxInfo;

  lastStateTxId: string;

  /**
   * pool is active
   */
  active: boolean;
  /**
   * token price opposite to quote price
   */
  tokenPrice?: number;
};
