export function calculateRSI(
  prices: number[],
  period: number = 14
): number[] {

  if (prices.length <= period) {
    return [];
  }

  const rsi: number[] = [];

  let gain = 0;
  let loss = 0;

  for (let i = 1; i <= period; i++) {

    const change = prices[i] - prices[i - 1];

    if (change > 0) {
      gain += change;
    } else {
      loss -= change;
    }

  }

  let avgGain = gain / period;
  let avgLoss = loss / period;

  let rs = avgLoss === 0 ? 100 : avgGain / avgLoss;

  rsi.push(100 - (100 / (1 + rs)));

  for (let i = period + 1; i < prices.length; i++) {

    const change = prices[i] - prices[i - 1];

    let currentGain = 0;
    let currentLoss = 0;

    if (change > 0) {
      currentGain = change;
    } else {
      currentLoss = -change;
    }

    avgGain =
      ((avgGain * (period - 1)) + currentGain) / period;

    avgLoss =
      ((avgLoss * (period - 1)) + currentLoss) / period;

    rs = avgLoss === 0 ? 100 : avgGain / avgLoss;

    rsi.push(
      100 - (100 / (1 + rs))
    );

  }

  return rsi;

}
