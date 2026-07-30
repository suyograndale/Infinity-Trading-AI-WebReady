export interface ScoreInput {

  ema: boolean;

  rsi: boolean;

  macd: boolean;

  vwap: boolean;

  supertrend: boolean;

  volume: boolean;

  ict: boolean;

}

export interface ScoreResult {

  score: number;

  confidence: number;

  rating: string;

}

export function calculateScore(

  input: ScoreInput

): ScoreResult {

  let score = 0;

  if (input.ema) score += 15;

  if (input.rsi) score += 10;

  if (input.macd) score += 20;

  if (input.vwap) score += 10;

  if (input.supertrend) score += 20;

  if (input.volume) score += 10;

  if (input.ict) score += 15;

  let rating = "Very Weak";

  if (score >= 90) {

    rating = "Excellent";

  } else if (score >= 75) {

    rating = "Strong";

  } else if (score >= 60) {

    rating = "Good";

  } else if (score >= 40) {

    rating = "Average";

  }

  return {

    score,

    confidence: score,

    rating,

  };

}
