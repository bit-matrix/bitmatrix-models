import { BmBlockInfo } from "./BmBlockInfo";
import { BmTxInfo } from "./BmTxInfo";
import { ChartData } from "./ChartData";
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
   * recent worker found pool tx (it may be spent, validate "synced")
   */
  unspentTx?: BmTxInfo;

  /**
   * if worker broadcast one tx, save here.
   * when it confirmed (worker found new ptx is equal to this), delete for new creation pool tx
   */
  lastSentPtx: string | undefined;

  /**
   * pool is active
   */
  active: boolean;

  /**
   * token price opposite to quote price
   */
  tokenPrice?: number;

  holderCovenant: {
    scriptpubkey: { main: string; token: string; lp: string };
    controlBlockPrefix: { main: string; token: string; lp: string };
  };

  mainCovenantScript: string[];

  maxLeaf: number;

  leafCount: number;
};
