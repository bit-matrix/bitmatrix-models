import { BmValue } from "./BmValue";
export declare type BmConfig = {
    id: string;
    minRemainingSupply: number;
    minTokenValue: number;
    baseFee: BmValue;
    serviceFee: BmValue;
    commitmentTxFee: BmValue;
    defaultOrderingFee: BmValue;
    fundingOutputAddress: string;
    innerPublicKey: string;
};
