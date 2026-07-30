import { Candle } from "./candle";
import { ICTResult } from "./types";

export function calculateICT(candles: Candle[]): ICTResult {

  let bos = false;

  if (candles.length >= 2) {

    const previous = candles[candles.length - 2];

    const current = candles[candles.length - 1];

    if (current.high > previous.high) {
      bos = true;
    }

  }

  return {

    bos,

    choch: false,

    fvg: false,

    orderBlock: false,

    liquiditySweep: false,

  };

}
