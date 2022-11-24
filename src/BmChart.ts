import { PAsset } from "./PAsset";

export type BmChart = {
  time: number;
  ptxid: string;
  quote: PAsset;
  token: PAsset;
  lp: PAsset;
  lpFeeTier: number;
};
