export interface LoginResponse {

  jwtToken: string;

  refreshToken: string;

  feedToken: string;

}

export interface Candle {

  time: string;

  open: number;

  high: number;

  low: number;

  close: number;

  volume: number;

}
