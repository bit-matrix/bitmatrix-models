import { BmTxInfo } from "./BmTxInfo";
import { CallData } from "./CallData";

export type BmCtxNew = {
    callData: CallData;
    commitmentTx: BmTxInfo;
};