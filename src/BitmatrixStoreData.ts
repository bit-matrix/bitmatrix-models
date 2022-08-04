import { CTXFinderResult } from "./CTXFinderResult";
import { poolTxInfo } from "./PoolTxInfo";

export type BitmatrixStoreData = {
  commitmentData: CTXFinderResult;
  poolTxInfo?: poolTxInfo;
};
