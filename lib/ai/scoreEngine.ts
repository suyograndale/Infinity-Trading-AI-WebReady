export interface IndicatorScore {

    ema:number;

    rsi:number;

    macd:number;

    volume:number;

    trend:number;

}

export function calculateScore(data:IndicatorScore){

    let total=0;

    total+=data.ema;

    total+=data.rsi;

    total+=data.macd;

    total+=data.volume;

    total+=data.trend;

    return total;

}
