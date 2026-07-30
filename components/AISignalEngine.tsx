"use client";

export default function AISignalEngine() {

  const rsi = 64;
  const macd = true;
  const ema = true;

  let signal = "WAIT";
  let color = "#facc15";
  let confidence = 55;

  if (rsi > 60 && macd && ema) {
    signal = "BUY";
    color = "#22c55e";
    confidence = 91;
  }

  if (rsi < 40 && !macd && !ema) {
    signal = "SELL";
    color = "#ef4444";
    confidence = 90;
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
