"use client";

const gainers = [
  { name: "RELIANCE", change: "+3.21%" },
  { name: "TCS", change: "+2.18%" },
  { name: "ICICIBANK", change: "+1.92%" }
];

export default function TopGainers() {
  return (
    <div
      style={{
        background:"#1f2937",
        padding:20,
        borderRadius:12,
        color:"white"
      }}
    >
      <h2>📈 Top Gainers</h2>

      {gainers.map(stock=>(

        <p key={stock.name}>

          {stock.name} {stock.change}

        </p>

      ))}

    </div>
  );
}
