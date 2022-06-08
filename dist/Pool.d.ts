import { BmBlockInfo } from "./BmBlockInfo";
import { BmTxInfo } from "./BmTxInfo";
import { ChartData } from "./ChartData";
import { PAsset } from "./PAsset";
/**
 * worker looks before creating new pool tx:
 * if(synced && lastSentPtx === undefined && exist(new_ctx))
 */
export declare type Pool = {
    /**
     * pool assets, values
     */
    id: string;
    quote: PAsset;
    token: PAsset;
    lp: PAsset;
    /**
     * pool creation tx info
     */
    initialTx: BmTxInfo;
    /**
     * last worker checked block info
     */
    lastSyncedBlock: BmBlockInfo;
    /**
     * recent block height on network
     */
    bestBlockHeight: number;
    /**
     * lastSyncedBlock.height === bestBlockHeight
     * (if true worker can create pool tx else pass creation pool tx)
     */
    synced: boolean;
    /**
     * recent worker found pool tx (it may be spent, validate "synced")
     */
    unspentTx?: BmTxInfo;
    /**
     * if worker broadcast one tx, save here.
     * when it confirmed (worker found new ptx is equal to this), delete for new creation pool tx
     */
    lastSentPtx: string | undefined;
    /**
     * pool is active
     */
    active: boolean;
    usdPrice: number;
    tvl: {
        value: number;
        rate: {
            value: string;
            direction: string;
        };
    };
    volume: {
        value: number;
        rate: {
            value: string;
            direction: string;
        };
    };
    fees: {
        value: number;
        rate: {
            value: string;
            direction: string;
        };
    };
    price: {
        value: number;
        rate: {
            value: string;
            direction: string;
        };
        allPriceData: ChartData[];
    };
};
