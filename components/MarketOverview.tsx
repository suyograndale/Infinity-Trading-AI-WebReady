"use client";
import { useMarketQuote } from "@/hooks/useMarketQuote";
const cards = [
  { title: "NIFTY 50", value: "25,245.80", change: "+0.82%" },
  { title: "BANKNIFTY", value: "58,310.20", change: "+1.12%" },
  { title: "SENSEX", value: "82,950.40", change: "+0.74%" },
  { title: "INDIA VIX", value: "13.52", change: "-2.11%" },
];

export default function MarketOverview() {
  const quote = useMarketQuote();
  if (!quote) {
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
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "#1f2937",
            padding: 20,
            borderRadius: 12,
            color: "white",
          }}
        >
          <h3>{card.title}</h3>

          <h1>{card.value}</h1>

          <p
            style={{
              color: card.change.startsWith("+")
                ? "#22c55e"
                : "#ef4444",
            }}
          >
            {card.change}
          </p>
        </div>
      ))}
    </div>
  );
}
