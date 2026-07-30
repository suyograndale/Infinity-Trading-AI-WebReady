export interface MarketCandle {

  time: string;

  open: number;

  high: number;

  low: number;

  close: number;

  volume: number;

}

export interface LiveMarketData {

  symbol: string;

  exchange: string;

  ltp: number;

  change: number;

  changePercent: number;

  candles: MarketCandle[];

}
