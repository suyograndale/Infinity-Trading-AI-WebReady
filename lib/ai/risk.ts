export interface RiskInput {

  entry: number;

  atr: number;

  riskMultiplier?: number;

  rewardMultiplier?: number;

}

export interface RiskResult {

  entry: number;

  stopLoss: number;

  target1: number;

  target2: number;

  riskReward: string;

}

export function calculateRisk(

  input: RiskInput

): RiskResult {

  const riskMultiplier = input.riskMultiplier ?? 1.5;

  const rewardMultiplier = input.rewardMultiplier ?? 2;

  const stopLoss =
    input.entry - (input.atr * riskMultiplier);

  const target1 =
    input.entry + (input.atr * rewardMultiplier);

  const target2 =
    input.entry + (input.atr * rewardMultiplier * 2);

  return {

    entry: input.entry,

    stopLoss,

    target1,

    target2,

    riskReward: "1 : 2",

  };

}
