import { Asset } from "./Asset";
import { BmTxInfo } from "./BmTxInfo";
/**
 * worker looks before creating new pool tx:
 * if(synced && lastSentPtx === undefined && exist(new_ctx))
 */
export declare type Pool = {
    /**
     * pool assets, values
     */
    id: string;
    quote: Asset;
    token: Asset;
    lp: Asset;
    /**
     * pool creation tx info
     */
    initialTx: BmTxInfo;
    /**
     * pool is active
     */
    active: boolean;
    leafCount: number;
    pair1_coefficient: {
        hex: string;
        number: number;
    };
    lpFeeTierIndex: {
        hex: string;
        number: number;
    };
    version: string;
    lastStateTxId: string;
};
