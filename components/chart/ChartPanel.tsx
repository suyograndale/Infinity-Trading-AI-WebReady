"use client";

import { useMarket } from "@/hooks/useMarket";

export default function ChartPanel() {

  const { market, loading } = useMarket();

  if (loading) {

    return (

      <div
        style={{
          background:"#1f2937",
          padding:20,
          borderRadius:12,
          color:"white",
          marginTop:20
        }}
      >

        Loading Chart...

      </div>

    );

  }

  return (

    <div
      style={{
        background:"#1f2937",
        padding:20,
        borderRadius:12,
        color:"white",
        marginTop:20,
        minHeight:500
      }}
    >

      <h2>📈 Live Market Chart</h2>

      <hr/>

      <h3>

        Symbol :

        {" "}

        {market?.symbol}

      </h3>

      <h3>

        Exchange :

        {" "}

        {market?.exchange}

      </h3>

      <h1>

        ₹ {market?.ltp}

      </h1>

      <p>

        Change :

        {" "}

        {market?.change}

        {" ("}

        {market?.changePercent}%

        {")"}

      </p>

      <div
        style={{
          marginTop:30,
          height:300,
          border:"2px dashed #374151",
          borderRadius:10,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          fontSize:22
        }}
      >

        TradingView Chart Coming Soon...

      </div>

    </div>

  );

}
