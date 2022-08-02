import { ChartData } from "./ChartData";

export type ChartSummary = {
  poolId: string;

  tvl: {
    todayValue: number;
    rate: { value: string; direction: string };
    allTvlData?: ChartData[];
  };

  volume: {
    todayValue: number;
    rate: { value: string; direction: string };
    allVolumeData?: ChartData[];
  };

  fees: {
    todayValue: number;
    rate: { value: string; direction: string };
    allFeesData?: ChartData[];
  };

  price: {
    todayValue: number;
    rate: { value: string; direction: string };
    allPriceData: ChartData[];
  };
};
