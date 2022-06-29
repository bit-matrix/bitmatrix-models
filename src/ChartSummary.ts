import { ChartData } from "./ChartData";

export type ChartSummary = {
  tvl: {
    value: number;
    rate: { value: string; direction: string };
    allTvlData?: ChartData[];
  };

  volume: {
    value: number;
    rate: { value: string; direction: string };
    allVolumeData?: ChartData[];
  };

  fees: {
    value: number;
    rate: { value: string; direction: string };
    allFeesData?: ChartData[];
  };

  price: {
    value: number;
    rate: { value: string; direction: string };
    allPriceData: ChartData[];
  };
};
