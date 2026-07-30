export interface StrategyResult {
  signal: "BUY CE" | "BUY PE" | "NO TRADE";
  confidence: number;
  entry: number;
  stopLoss: number;
  target1: number;
  target2: number;
  riskReward: string;
}

export function generateStrategy(): StrategyResult {
  return {
    signal: "NO TRADE",
    confidence: 0,
    entry: 0,
    stopLoss: 0,
    target1: 0,
    target2: 0,
    riskReward: "0:0",
  };
}
