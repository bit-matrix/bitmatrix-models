import WizData from "@script-wiz/wiz-data";
import { TxDetail } from "./TxDetail";
import { TxVInRPC } from "./TxVInRPC";
import { TxVOutRPC } from "./TxVOutRPC";

export type CTXFinderResult = {
  tweakKeyPrefix: string;
  part1: string;
  part2: string;
  part3: string;
  locktimeHex: string;
  outputCount: WizData;
  inputs: TxVInRPC[];
  outputs: TxVOutRPC[];
  poolId: string;
  methodCall: string;
  publicKey: string;
  slippageTolerance: string;
  orderingFee: string;
  cmtOutput1: TxVOutRPC;
  cmtOutput2: TxVOutRPC;
  cmtOutput3?: TxVOutRPC;
  transaction: TxDetail;
};
