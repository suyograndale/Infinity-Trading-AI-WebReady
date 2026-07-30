"use client";

import { useEffect, useRef } from "react";
import {
  createChart,
  ColorType
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

    const candleSeries = chart.addCandlestickSeries();

    candleSeries.setData([
      {
        time: "2026-07-01",
        open: 25000,
        high: 25050,
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
        high: 25160,
        low: 25070,
        close: 25140,
      },
      {
        time: "2026-07-04",
        open: 25140,
        high: 25210,
        low: 25110,
        close: 25190,
      },
      {
        time: "2026-07-05",
        open: 25190,
        high: 25280,
        low: 25170,
        close: 25260,
      },
    ]);

    chart.timeScale().fitContent();

    const handleResize = () => {
      if (chartRef.current) {
        chart.applyOptions({
          width: chartRef.current.clientWidth,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
