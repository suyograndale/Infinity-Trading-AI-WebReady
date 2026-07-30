"use client";

import { useEffect, useRef } from "react";

export default function TradingViewChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NSE:NIFTY",
      interval: "5",
      timezone: "Asia/Kolkata",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      hide_top_toolbar: false,
      allow_symbol_change: true,
      save_image: true,
      container_id: "tradingview_chart"
    });

    if (chartRef.current) {
      chartRef.current.innerHTML = "";
      chartRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        borderRadius: "12px",
        overflow: "hidden"
      }}
    >
      <div
        ref={chartRef}
        className="tradingview-widget-container"
        style={{ width: "100%", height: "100%" }}
      >
        <div
          id="tradingview_chart"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
