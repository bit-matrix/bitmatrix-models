export type TxStatus = {
  txId: string;
  poolTxId: string;
  status: TxStatus;
  errorMessages?: string;
};
