export interface ATRCandle {
  high: number;
  low: number;
  close: number;
}

export function calculateATR(
  candles: ATRCandle[],
  period: number = 14
): number[] {

  if (candles.length <= period) {
    return [];
  }

  const trueRanges: number[] = [];

  for (let i = 1; i < candles.length; i++) {

    const current = candles[i];
    const previous = candles[i - 1];

    const highLow =
      current.high - current.low;

    const highClose =
      Math.abs(current.high - previous.close);

    const lowClose =
      Math.abs(current.low - previous.close);

    const trueRange = Math.max(
      highLow,
      highClose,
      lowClose
    );

    trueRanges.push(trueRange);

  }

  const atr: number[] = [];

  let sum = 0;

  for (let i = 0; i < period; i++) {
    sum += trueRanges[i];
  }

  let average = sum / period;

  atr.push(average);

  for (let i = period; i < trueRanges.length; i++) {

    average =
      (
        (average * (period - 1))
        + trueRanges[i]
      ) / period;

    atr.push(average);

  }

  return atr;

}
