import { BmBlockInfo } from "./BmBlockInfo";
import { BmTxInfo } from "./BmTxInfo";
import { PAsset } from "./PAsset";
export declare type Pool = {
    id: string;
    quote: PAsset;
    token: PAsset;
    lp: PAsset;
    createdTx: BmTxInfo;
    unspentTx: BmTxInfo;
    synced: boolean;
    syncedBlock: BmBlockInfo;
    recentBlock: BmBlockInfo;
    active: boolean;
};
