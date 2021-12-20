import { BmTxInfo } from "./BmInfo";
import { CallData } from "./CallData";

export type BmCtxNew = {
    callData: CallData;
    commitmentTx: BmTxInfo;
};