"use client";
import CandleChart from "./CandleChart";
import { demoCandles } from "@/lib/chart/demoData";

export default function TradingChart() {

  return (

    <div
      style={{
        width: "100%",
        minHeight: 500,
        background: "#111827",
        border: "1px solid #374151",
        borderRadius: 10,
        padding: 20,
        color: "white"
      }}
    >

      <h2>📈 Trading Chart Engine</h2>

      <hr />

      <h3>Total Candles : {demoCandles.length}</h3>

      <br />

      {demoCandles.map((candle, index) => (

        <div
          key={index}
          style={{
            padding: 10,
            marginBottom: 10,
            borderBottom: "1px solid #374151"
          }}
        >

          <b>{candle.time}</b>

          <br />

          O : {candle.open}

          <br />

          H : {candle.high}

          <br />

          L : {candle.low}

          <br />

          C : {candle.close}

          <br />

          V : {candle.volume}

        </div>

      ))}  <div style={{ marginTop: 30 }}>
  <CandleChart />
</div>

    </div>

  );

}
