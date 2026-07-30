import { LiveMarketData } from "./types";

export async function getMarketData(): Promise<LiveMarketData> {

  return {

    symbol: "NIFTY",

    exchange: "NSE",

    ltp: 25240,

    change: 145,

    changePercent: 0.62,

    candles: [],

  };

}
