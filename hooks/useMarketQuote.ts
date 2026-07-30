"use client";

import { useEffect, useState } from "react";
import {
  getMarketQuotes,
  MarketQuote,
} from "@/lib/market/marketService";

export function useMarketQuote() {
  const [quotes, setQuotes] = useState<MarketQuote[]>([]);

  useEffect(() => {

  async function loadMarket() {

    const data = await getMarketQuotes();

    setQuotes(data);

  }

  loadMarket();

  const interval = setInterval(() => {

    loadMarket();

  }, 2000);

  return () => clearInterval(interval);

}, []);

  return quotes;
}
