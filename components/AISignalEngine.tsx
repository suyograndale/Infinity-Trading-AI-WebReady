"use client";
import { getLiveIndicators } from "@/lib/market/liveIndicators";
import { generateSignal } from "@/lib/ai/signalEngine";

export default function AISignalEngine() {

  const result = generateSignal({


const market = getLiveIndicators();

const result = generateSignal(market);


  

let signal = result.signal;

let confidence = result.confidence;

let color = "#facc15";

if (signal === "BUY CE") {
  color = "#22c55e";
}

if (signal === "BUY PE") {
  color = "#ef4444";
}

  return (
    <div
      style={{
        marginTop:40,
        background:"#1f2937",
        padding:25,
        borderRadius:15,
        color:"white"
      }}
    >

      <h2>🤖 AI Decision Engine</h2>

      <h1
        style={{
          color,
          fontSize:50,
          marginTop:20
        }}
      >
        {signal}
      </h1>

      <h3>Confidence : {confidence}%</h3>

      <hr />

      <h3>Reason</h3>

      <ul>

        <li>Price : {market.price}</li>

<li>EMA20 : {market.ema20}</li>

<li>EMA50 : {market.ema50}</li>

<li>RSI : {market.rsi}</li>

<li>MACD : {market.macd}</li>

<li>Volume : {market.volume}</li>

      </ul>

    </div>
  );

}
