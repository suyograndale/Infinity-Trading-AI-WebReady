import { CandlestickData } from "lightweight-charts";

export function getDemoCandles(): CandlestickData[] {
  return [
    {
      time: "2026-07-01",
      open: 25000,
      high: 25060,
      low: 24980,
      close: 25030,
    },
    {
      time: "2026-07-02",
      open: 25030,
      high: 25120,
      low: 25010,
      close: 25090,
    },
    {
      time: "2026-07-03",
      open: 25090,
      high: 25150,
      low: 25070,
      close: 25130,
    },
    {
      time: "2026-07-04",
      open: 25130,
      high: 25210,
      low: 25100,
      close: 25190,
    },
    {
      time: "2026-07-05",
      open: 25190,
      high: 25280,
      low: 25170,
      close: 25260,
    }
  ];
}
