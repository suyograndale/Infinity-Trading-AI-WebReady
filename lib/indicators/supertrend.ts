import { calculateATR } from "./atr";

export interface SupertrendCandle {
  high: number;
  low: number;
  close: number;
}

export interface SupertrendResult {
  upperBand: number[];
  lowerBand: number[];
  trend: ("BUY" | "SELL")[];
}

export function calculateSupertrend(
  candles: SupertrendCandle[],
  period: number = 10,
  multiplier: number = 3
): SupertrendResult {

  const atr = calculateATR(candles, period);

  const upperBand: number[] = [];
  const lowerBand: number[] = [];
  const trend: ("BUY" | "SELL")[] = [];

  const offset = candles.length - atr.length;

  for (let i = offset; i < candles.length; i++) {

    const candle = candles[i];

    const atrValue = atr[i - offset];

    const hl2 =
      (candle.high + candle.low) / 2;

    const upper =
      hl2 + multiplier * atrValue;

    const lower =
      hl2 - multiplier * atrValue;

    upperBand.push(upper);

    lowerBand.push(lower);

    if (candle.close >= upper) {

      trend.push("BUY");

    } else if (candle.close <= lower) {

      trend.push("SELL");

    } else {

      if (trend.length === 0) {

        trend.push("BUY");

      } else {

        trend.push(
          trend[trend.length - 1]
        );

      }

    }

  }

  return {

    upperBand,

    lowerBand,

    trend,

  };

}
