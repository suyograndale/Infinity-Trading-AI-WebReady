export interface VWAPCandle {
  high: number;
  low: number;
  close: number;
  volume: number;
}

export function calculateVWAP(
  candles: VWAPCandle[]
): number[] {

  const vwap: number[] = [];

  let cumulativeTPV = 0;
  let cumulativeVolume = 0;

  for (const candle of candles) {

    const typicalPrice =
      (candle.high + candle.low + candle.close) / 3;

    cumulativeTPV +=
      typicalPrice * candle.volume;

    cumulativeVolume += candle.volume;

    vwap.push(
      cumulativeTPV / cumulativeVolume
    );

  }

  return vwap;

}
