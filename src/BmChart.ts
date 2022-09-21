export type BmChart = {
  timestamp: number;
  ptxid: string;
  value: { quote: number; token: number; lp: number };
  volume: { quote: number; token: number };
  price: number;
  lpFeeTier: number;
};
