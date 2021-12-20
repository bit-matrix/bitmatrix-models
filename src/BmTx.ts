import { BmTxInfo } from "./BmInfo";

export enum CALL_METHOD {
  SWAP_QUOTE_FOR_TOKEN = "01",
  SWAP_TOKEN_FOR_QUOTE = "02",
  ADD_LIQUIDITY = "03",
  REMOVE_LIQUIDITY = "04",
}

export type CallData = {
  method: CALL_METHOD;
  recipientPublicKey: string;
  slippageTolerance: string; // number; TODO
  orderingFee: number; // number; TODO
  value: {
    quote: number;
    token: number;
    lp: number;
  };
};

export type BmCtxNew = {
  callData: CallData;
  commitmentTx: BmTxInfo;
};

export type BmCtxMempool = BmCtxNew & {
  poolTxid: string;
};

export type BmPtxCtx = {
  poolTxid: string;
  commitmentTxs: string[];
};

export type BmPtx = BmCtxNew & {
  poolTx: BmTxInfo;
};

/**
 *
 *
 * ### STAGE 0 ###
 *
 *    1. PUT (create)
 *    pools
 * value: Pool = {
 *   id: string;
 *   quote: PAsset;
 *   token: PAsset;
 *   lp: PAsset;
 *   createdTx: BmTxInfo;
 *   unspentTx: BmTxInfo;
 *   synced: boolean;
 *   syncedBlock: BmBlockInfo;
 *   recentBlock: BmBlockInfo;
 *   active: boolean;
 * }
 * key: value.id
 *
 *
 *
 *  ### STAGE 1 ###
 *
 *    1. PUT (create)
 *    ctx_new
 * value: BmCtx = {
 *   callData: CallData;
 *   commitmentTx: BmTxInfo;
 * }
 * key: value.commitmentTx.txid
 *
 *
 *
 *  ### STAGE 2 ###
 *
 *    1. PUT (create)
 *    ctx_mempool
 * value: BmCtxMempool = {
 *   callData: CallData;
 *   commitmentTx: BmTxInfo;
 *   poolTxid: string;
 * }
 * key: value.commitmentTx.txid
 *
 *    2. PUT (create)
 *    ptx_ctx
 * value: BmPtxCtx;
 * key: value.poolTxid
 *
 *
 *  ### STAGE 3 ###
 *
 *    1. PUT (create)
 *    ptx
 * value: BmPtx = {
 *   callData: CallData;
 *   commitmentTx: BmTxInfo;
 *   poolTx: BmTxInfo;
 * }
 * key: value.commitmentTx.txid
 *
 *    2. DEL (delete)
 *    ctx_mempool
 * key value..commitmentTx.txid
 *
 *
 */
