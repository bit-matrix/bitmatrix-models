import { BmValue } from "./BmValue";
export declare type BmConfig = {
    id: string;
    minRemainingSupply: number;
    minTokenValue: number;
    baseFee: BmValue;
    serviceFee: BmValue;
    commitmentTxFee: BmValue;
    defaultOrderingFee: BmValue;
    innerPublicKey: string;
    recipientValueMinus: number;
    holderCovenant: {
        scriptpubkey: {
            main: string;
            token: string;
            lp: string;
        };
        controlBlockPrefix: {
            main: string;
            token: string;
            lp: string;
        };
    };
    mainCovenantScript: string[];
    maxLeaf: number;
};
