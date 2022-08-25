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

  /**
   * pool is active
   */
  active: boolean;

  /**
   * token price opposite to quote price
   */
  tokenPrice: number;

  leafCount: number;

  pair1_coefficient: { hex: string; number: number };
  lpFeeTierIndex: {
    hex: string;
    number: number;
  };

  version: string;

  lastStateTxId: string;
};
