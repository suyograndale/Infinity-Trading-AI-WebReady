"use client";

import { calculateICT } from "@/lib/ict/ictEngine";

export default function ICTPanel() {

  const candles = [
    {
      open: 25000,
      high: 25040,
      low: 24980,
      close: 25020,
    },
    {
      open: 25020,
      high: 25090,
      low: 25010,
      close: 25080,
    },
  ];

  const ict = calculateICT(candles);

  return (
    <div
      style={{
        background: "#1f2937",
        padding: 20,
        borderRadius: 15,
        color: "white",
        marginTop: 25,
      }}
    >
      <h2>🧠 ICT Analysis</h2>

      <p>BOS : {ict.bos ? "✅" : "❌"}</p>

      <p>CHOCH : {ict.choch ? "✅" : "❌"}</p>

      <p>FVG : {ict.fvg ? "✅" : "❌"}</p>

      <p>Order Block : {ict.orderBlock ? "✅" : "❌"}</p>

      <p>Liquidity Sweep : {ict.liquiditySweep ? "✅" : "❌"}</p>
    </div>
  );
}
