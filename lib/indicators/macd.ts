import { calculateEMA } from "./ema";

export interface MACDResult {
  macd: number[];
  signal: number[];
  histogram: number[];
}

export function calculateMACD(
  prices: number[]
): MACDResult {

  const ema12 = calculateEMA(prices, 12);
  const ema26 = calculateEMA(prices, 26);

  if (ema12.length === 0 || ema26.length === 0) {
    return {
      macd: [],
      signal: [],
      histogram: [],
    };
  }

  const offset = ema12.length - ema26.length;

  const macd: number[] = [];

  for (let i = 0; i < ema26.length; i++) {
    macd.push(
      ema12[i + offset] - ema26[i]
    );
  }

  const signal = calculateEMA(macd, 9);

  const histogram: number[] = [];

  const signalOffset = macd.length - signal.length;

  for (let i = 0; i < signal.length; i++) {
    histogram.push(
      macd[i + signalOffset] - signal[i]
    );
  }

  return {
    macd,
    signal,
    histogram,
  };

}
