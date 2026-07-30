"use client";

import { useMarketQuote } from "@/hooks/useMarketQuote";

export default function MarketOverview() {
  const quotes = useMarketQuote();

  if (quotes.length === 0) {
    return (
      <div
        style={{
          background: "#1f2937",
          color: "white",
          padding: 20,
          borderRadius: 10,
        }}
      >
        Loading Market...
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: 20,
        marginTop: 25,
      }}
    >
      {quotes.map((quote) => (
        <div
          key={quote.symbol}
          style={{
            background: "#1f2937",
            padding: 20,
            borderRadius: 12,
            color: "white",
          }}
        >
          <h3>{quote.symbol}</h3>

          <h1>{quote.ltp}</h1>

          <p
  style={{
    color:
      quote.ltp > quote.close
        ? "#22c55e"
        : quote.ltp < quote.close
        ? "#ef4444"
        : "#facc15",

    fontWeight: "bold",
    fontSize: 18,
  }}
>
  {quote.ltp > quote.close
    ? "▲ Bullish"
    : quote.ltp < quote.close
    ? "▼ Bearish"
    : "▬ Neutral"}
</p>

          <hr style={{ margin: "10px 0", borderColor: "#374151" }} />

          <p>Open: {quote.open}</p>
          <p>High: {quote.high}</p>
          <p>Low: {quote.low}</p>
          <p>Close: {quote.close}</p>
          <p>Volume: {quote.volume}</p>
        </div>
      ))}
    </div>
  );
}
