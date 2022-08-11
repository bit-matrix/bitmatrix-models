import { TX_STATUS } from "./TX_STATUS";

export type TxStatus = {
  txId: string;
  poolTxId: string;
  status: TX_STATUS;
  errorMessages?: string;
};
