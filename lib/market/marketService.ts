export interface MarketQuote {
  symbol: string;
  ltp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export async function getMarketQuotes(): Promise<MarketQuote[]> {
  return [
    {
      symbol: "NIFTY 50",
      ltp: 25240,
      open: 25180,
      high: 25290,
      low: 25120,
      close: 25210,
      volume: 1200000,
    },

    {
      symbol: "BANKNIFTY",
      ltp: 58310,
      open: 58150,
      high: 58450,
      low: 58080,
      close: 58240,
      volume: 860000,
    },

    {
      symbol: "SENSEX",
      ltp: 82950,
      open: 82720,
      high: 83040,
      low: 82650,
      close: 82810,
      volume: 950000,
    },

    {
      symbol: "INDIA VIX",
      ltp: 13.52,
      open: 13.60,
      high: 13.82,
      low: 13.20,
      close: 13.80,
      volume: 300000,
    },
  ];
}
