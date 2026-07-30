"use client";
import { probability } from "@/lib/ai/probability";
export default function AISignalEngine() {

  const rsi = 64;
  const macd = true;
  const ema = true;

  const score = 82;

const result = probability(score);

let signal = result.signal;

let confidence = result.confidence;

let color = "#facc15";

if (signal === "BUY") {
  color = "#22c55e";
}

if (signal === "SELL") {
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

        <li>RSI : {rsi}</li>

        <li>MACD : {macd ? "Bullish" : "Bearish"}</li>

        <li>EMA : {ema ? "Bullish" : "Bearish"}</li>

      </ul>

    </div>
  );

}
