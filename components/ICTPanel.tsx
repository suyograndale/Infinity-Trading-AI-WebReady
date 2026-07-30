"use client";

import { calculateICT } from "@/lib/ict/ictEngine";

export default function ICTPanel() {

  const ict = calculateICT();

  return (
    <div
      style={{
        background:"#1f2937",
        padding:20,
        borderRadius:15,
        color:"white",
        marginTop:25
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
