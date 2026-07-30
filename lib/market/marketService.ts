export interface MarketQuote {
  symbol: string;
  ltp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export async function getMarketQuote(): Promise<MarketQuote> {
  return {
    symbol: "NIFTY",
    ltp: 25240,
    open: 25180,
    high: 25290,
    low: 25120,
    close: 25210,
    volume: 1200000,
  };
}
