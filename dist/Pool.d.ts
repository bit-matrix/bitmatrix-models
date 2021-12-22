import { BmBlockInfo } from "./BmBlockInfo";
import { BmTxInfo } from "./BmTxInfo";
import { PAsset } from "./PAsset";
export declare type Pool = {
    /**
     * worker looks before creating new pool tx:
     * if(synced && lastSentPtx === undefined && exist(new_ctx))
     */
    id: string;
    quote: PAsset;
    token: PAsset;
    lp: PAsset;
    initialTx: BmTxInfo;
    lastSyncedBlock: BmBlockInfo;
    bestBlockHeight: number;
    synced: boolean;
    lastUnspentTx: BmTxInfo;
    lastSentPtx: string | undefined;
    active: boolean;
};
