"use client";

import { useEffect, useRef } from "react";
import {
  createChart,
  ColorType,
} from "lightweight-charts";

export default function TradingChart() {

  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!chartRef.current) return;

    const chart = createChart(chartRef.current, {

      width: chartRef.current.clientWidth,

      height: 500,

      layout: {

        background: {
          type: ColorType.Solid,
          color: "#111827",
        },

        textColor: "#ffffff",

      },

      grid: {

        vertLines: {
          color: "#374151",
        },

        horzLines: {
          color: "#374151",
        },

      },

    });

   
import {
  createChart,
  ColorType,
  CandlestickSeries
} from "lightweight-charts";
    candleSeries.setData([
      {
        time: "2026-07-01",
        open: 25000,
        high: 25060,
        low: 24980,
        close: 25030,
      },
      {
        time: "2026-07-02",
        open: 25030,
        high: 25120,
        low: 25010,
        close: 25090,
      },
      {
        time: "2026-07-03",
        open: 25090,
        high: 25150,
        low: 25070,
        close: 25130,
      },
    ]);

    chart.timeScale().fitContent();

    return () => {

      chart.remove();

    };

  }, []);

  return (

    <div

      ref={chartRef}

      style={{

        width: "100%",

        height: "500px",

      }}

    />

  );

}
