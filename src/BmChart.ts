export type BmChart = {
  time: number;
  ptxid: string;
  value: { quote: number; token: number; lp: number };
  price: number;
  lpFeeTier: number;
};
