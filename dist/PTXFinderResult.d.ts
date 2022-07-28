import WizData from "@script-wiz/wiz-data";
import { ChangeOutputFinal } from "./ChangeOutputFinal";
import { CTXPTXResult } from "./CTXPTXResult";
import { Pool } from "./Pool";
import { PTXOutput } from "./PTXOutput";
import { TxVOutRPC } from "./TxVOutRPC";

export declare type PTXFinderResult = {
  method: string;
  pool_pair_1_liquidity: number;
  pool_pair_2_liquidity: number;
  commitmentOutput2AssetId?: string;
  pair_1_asset_id: string;
  pair_2_asset_id: string;
  pair_1_pool_supply: number;
  pair_2_pool_supply: number;
  pair_1_coefficient: number;
  pair_2_coefficient: number;
  pool_pair_1_liquidity_downgraded: number;
  pool_pair_2_liquidity_downgraded: number;
  pool_constant: number;
  result: CTXPTXResult;
  lp_asset_id: string;
  leafCount: number;
  poolData: Pool;
  output: PTXOutput;
  case3outputs: {
    output1: PTXOutput;
    output2: PTXOutput;
  };
  case4outputs: {
    output1: PTXOutput;
    output2: PTXOutput;
  };
  cmtOutput1?: TxVOutRPC;
  cmtOutput2?: TxVOutRPC;
  cmtOutput3?: TxVOutRPC;
  outputCount?: WizData;
  publicKey?: string;
  poolId?: string;
  tapTweakedResultPrefix?: string;
  changeOutputFinal?: ChangeOutputFinal[];
  cmtOutput1Value?: string;
  cmtOutput2Value?: string;
  cmtOutput3Value?: string;
  orderingFee?: string;
  slippageTolerance?: string;
  methodCall?: string;
  cmtTxInOutpoints?: {
    index: number;
    data: string;
  }[];
  output2PairValue?: string;
  inputCount?: WizData;
  cmtOutput3PairValue?: string;
  cmtOutputFeeHexValue?: string;
};
