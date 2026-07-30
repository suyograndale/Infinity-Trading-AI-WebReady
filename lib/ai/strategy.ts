import { calculateScore } from "./score";
import { calculateAISignal } from "./decision";
import { calculateRisk } from "./risk";

export interface StrategyInput {

  ema: boolean;

  rsi: boolean;

  macd: boolean;

  vwap: boolean;

  supertrend: boolean;

  volume: boolean;

  ict: boolean;

  entry: number;

  atr: number;

}

export function generateStrategy(

  input: StrategyInput

) {

  const score = calculateScore({

    ema: input.ema,

    rsi: input.rsi,

    macd: input.macd,

    vwap: input.vwap,

    supertrend: input.supertrend,

    volume: input.volume,

    ict: input.ict,

  });

  const signal = calculateAISignal({

    emaBullish: input.ema,

    rsiBullish: input.rsi,

    macdBullish: input.macd,

    vwapBullish: input.vwap,

    supertrendBullish: input.supertrend,

    volumeBullish: input.volume,

    ictBullish: input.ict,

  });

  const risk = calculateRisk({

    entry: input.entry,

    atr: input.atr,

  });

  return {

    signal: signal.signal,

    confidence: signal.confidence,

    score: score.score,

    rating: score.rating,

    entry: risk.entry,

    stopLoss: risk.stopLoss,

    target1: risk.target1,

    target2: risk.target2,

    riskReward: risk.riskReward,

  };

}
