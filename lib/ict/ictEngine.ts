import { ICTResult } from "./types";

export function calculateICT(): ICTResult {
  return {
    bos: true,
    choch: false,
    fvg: true,
    orderBlock: true,
    liquiditySweep: false,
  };
}
