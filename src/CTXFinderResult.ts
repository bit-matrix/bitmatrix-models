import WizData from "@script-wiz/wiz-data";
import { ChangeOutputFinal } from "./ChangeOutputFinal";
import { Pool } from "./Pool";
import { SeperatedChangeOutputs } from "./SeperatedChangeOutputs";
import { TxDetail } from "./TxDetail";
import { TxVOutRPC } from "./TxVOutRPC";

export type CTXFinderResult = {
  outputs: TxVOutRPC[];
  nsequenceValue: string;
  cmtTxInOutpoints: { index: number; data: string }[];
  cmtOutput1Value: string;
  output2PairValue: string;
  cmtOutput2Value: string;
  cmtOutput3Value?: string;
  cmtOutputFeeHexValue: string;
  cmtOutput3PairValue: string;
  cmtOutput3Asset?: string;
  changeOutputFinal: ChangeOutputFinal[];
  seperatedChangeOutputs: SeperatedChangeOutputs[];
  methodCall: string;
  slippageTolerance: string;
  orderingFee: string;
  tapTweakedResultPrefix: string;
  cmtOutput2DecimalValue: number;
  poolId: string;
  pool: Pool;
  transaction: TxDetail;
  cmtTxLocktimeByteLength: string;
  outputCount: WizData;
  inputCount: WizData;
};
