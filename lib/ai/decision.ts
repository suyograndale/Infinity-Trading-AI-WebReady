export interface AIInput {

  emaBullish: boolean;

  rsiBullish: boolean;

  macdBullish: boolean;

  vwapBullish: boolean;

  supertrendBullish: boolean;

  volumeBullish: boolean;

  ictBullish: boolean;

}

export interface AIResult {

  signal: "BUY" | "SELL" | "WAIT";

  confidence: number;

  score: number;

}

export function calculateAISignal(

  input: AIInput

): AIResult {

  let score = 0;

  if (input.emaBullish) score += 15;

  if (input.rsiBullish) score += 10;

  if (input.macdBullish) score += 20;

  if (input.vwapBullish) score += 10;

  if (input.supertrendBullish) score += 20;

  if (input.volumeBullish) score += 10;

  if (input.ictBullish) score += 15;

  let signal: "BUY" | "SELL" | "WAIT" = "WAIT";

  if (score >= 80) {

    signal = "BUY";

  } else if (score <= 30) {

    signal = "SELL";

  }

  return {

    signal,

    confidence: score,

    score,

  };

}
