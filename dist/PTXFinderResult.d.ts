import { CTXPTXResult } from "./CTXPTXResult";
import { Pool } from "./Pool";
import { PTXOutput } from "./PTXOutput";
export declare type PTXFinderResult = {
    method: string;
    pool_pair_1_liquidity: number;
    pool_pair_2_liquidity: number;
    commitmentOutput2AssetId?: string;
    pair_1_asset_id: string;
    pair_2_asset_id: string;
    pair_1_pool_supply: number;
    pair_2_pool_supply: number;
    pair_1_coefficient: number;
    pair_2_coefficient: number;
    pool_pair_1_liquidity_downgraded: number;
    pool_pair_2_liquidity_downgraded: number;
    pool_constant: number;
    result: CTXPTXResult;
    lp_asset_id: string;
    leafCount: number;
    poolData: Pool;
    output: PTXOutput;
    case3outputs: {
        ouuput1: PTXOutput;
        ouuput2: PTXOutput;
    };
    case4outputs: {
        ouuput1: PTXOutput;
        ouuput2: PTXOutput;
    };
};
