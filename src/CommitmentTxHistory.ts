export type CommitmentTxHistory = {
  poolId: string;
  method: string;
  txId: string;
  isSuccess: boolean;
  failReason?: string;
};
