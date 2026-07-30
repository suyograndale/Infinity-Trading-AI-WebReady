"use client";

const losers = [
  { name: "INFY", change: "-2.14%" },
  { name: "HCLTECH", change: "-1.86%" },
  { name: "WIPRO", change: "-1.32%" }
];

export default function TopLosers() {
  return (
    <div
      style={{
        background: "#1f2937",
        padding: 20,
        borderRadius: 12,
        color: "white"
      }}
    >
      <h2>📉 Top Losers</h2>

      {losers.map(stock => (
        <p key={stock.name}>
          {stock.name}{" "}
          <span style={{ color: "#ef4444" }}>
            {stock.change}
          </span>
        </p>
      ))}
    </div>
  );
}
