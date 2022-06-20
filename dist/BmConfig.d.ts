import { BmValue } from "./BmValue";
export declare type BmConfig = {
    minRemainingSupply: number;
    minTokenValue: number;
    baseFee: BmValue;
    serviceFee: BmValue;
    commitmentTxFee: BmValue;
    defaultOrderingFee: BmValue;
    innerPublicKey: string;
    recipientValueMinus: number;
};
