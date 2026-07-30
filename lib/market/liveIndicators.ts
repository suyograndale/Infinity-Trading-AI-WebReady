export interface LiveIndicators {

  price: number;

  ema20: number;

  ema50: number;

  rsi: number;

  macd: number;

  volume: number;

}

export function getLiveIndicators(): LiveIndicators {

  return {

    price: 25240,

    ema20: 25200,

    ema50: 25160,

    rsi: 62,

    macd: 18,

    volume: 250000,

  };

}
