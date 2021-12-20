export type PAsset = { ticker: string; name: string; asset: string; value: string };

export type BmValue = {
  number: string;
  hex: string;
};
export type BmConfig = {
  id: string;
  minRemainingSupply: string;
  minTokenValue: string;
  baseFee: BmValue;
  serviceFee: BmValue;
  commitmentTxFee: BmValue;
  defaultOrderingFee: BmValue;
  fundingOutputAddress: string;
  innerPublicKey: string;
};

/* const bmConfig: BmConfig = {
  id: "43a2f4ef8ce286e57ab3e39e6da3741382ba542854a1b28231a7a5b8ba337fcd",
  minRemainingSupply: "1000",
  minTokenValue: "50000000",
  baseFee: { number: "650", hex: "" },
  serviceFee: { number: "1200", hex: "" },
  commitmentTxFee: { number: "100", hex: "0000000000000064" },
  defaultOrderingFee: { number: "1", hex: "01000000" },
  fundingOutputAddress: "tex1qft5p2uhsdcdc3l2ua4ap5qqfg4pjaqlp250x7us7a8qqhrxrxfsqh7creg",
  innerPublicKey: "1dae61a4a8f841952be3a511502d4f56e889ffa0685aa0098773ea2d4309f624",
}; */
