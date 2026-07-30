export interface MarketData {
  price: number;
  ema20: number;
  ema50: number;
  rsi: number;
  macd: number;
  volume: number;
}

export interface SignalResult {
  signal: "BUY CE" | "BUY PE" | "WAIT";
  confidence: number;
}

export function generateSignal(data: MarketData): SignalResult {
  let score = 0;

  if (data.price > data.ema20) score += 20;

  if (data.ema20 > data.ema50) score += 20;

  if (data.rsi > 55) score += 15;

  if (data.macd > 0) score += 20;

  if (data.volume > 100000) score += 15;

  if (score >= 70) {
    return {
      signal: "BUY CE",
      confidence: score
    };
  }

  if (score <= 30) {
    return {
      signal: "BUY PE",
      confidence: 100 - score
    };
  }

  return {
    signal: "WAIT",
    confidence: score
  };
}
