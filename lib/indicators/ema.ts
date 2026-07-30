export function calculateEMA(
  prices: number[],
  period: number
): number[] {

  if (prices.length < period) {
    return [];
  }

  const multiplier = 2 / (period + 1);

  const ema: number[] = [];

  let sma = 0;

  for (let i = 0; i < period; i++) {
    sma += prices[i];
  }

  sma = sma / period;

  ema.push(sma);

  for (let i = period; i < prices.length; i++) {

    const value =
      (prices[i] - ema[ema.length - 1]) * multiplier +
      ema[ema.length - 1];

    ema.push(value);

  }

  return ema;

}
