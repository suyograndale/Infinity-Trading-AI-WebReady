"use client";
import { generateSignal } from "@/lib/ai/signalEngine";

export default function AISignalEngine() {

  const result = generateSignal({

  price: 25240,

  ema20: 25200,

  ema50: 25160,

  rsi: 62,

  macd: 18,

  volume: 250000,

});
  

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

        <li>Price : 25240</li>

<li>EMA20 : 25200</li>

<li>EMA50 : 25160</li>

<li>RSI : 62</li>

<li>MACD : 18</li>

<li>Volume : 250000</li>

      </ul>

    </div>
  );

}
