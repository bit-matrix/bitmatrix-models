import { BmTxInfo } from "./BmTxInfo";
import { CallData } from "./CallData";
import { CommitmentOutput } from "./CommitmentOutput";

export type BmCtxNew = {
  callData: CallData;
  output: CommitmentOutput;
  commitmentTx: BmTxInfo;
};
