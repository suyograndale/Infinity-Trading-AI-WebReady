"use client";

export default function AIAnalysis() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <Card title="📈 Market Trend" value="BULLISH 🟢" sub="Strength : 82%" />

      <Card title="📊 RSI" value="64.20" sub="Neutral" />

      <Card title="📉 MACD" value="Bullish Cross" sub="Positive Momentum" />

      <Card title="📊 EMA" value="EMA20 > EMA50" sub="Uptrend" />

      <Card title="🎯 UP Probability" value="74%" sub="AI Prediction" />

      <Card title="🎯 DOWN Probability" value="26%" sub="AI Prediction" />
    </div>
  );
}

function Card({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div
      style={{
        background: "#1f2937",
        padding: "20px",
        borderRadius: "15px",
        color: "white",
      }}
    >
      <h3>{title}</h3>

      <h1
        style={{
          color: "#22c55e",
          marginTop: "10px",
        }}
      >
        {value}
      </h1>

      <p>{sub}</p>
    </div>
  );
}
