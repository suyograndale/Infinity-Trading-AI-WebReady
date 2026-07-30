"use client";

import { useEffect, useState } from "react";
import { getMarketQuote, MarketQuote } from "@/lib/market/marketService";

export function useMarketQuote() {
  const [quote, setQuote] = useState<MarketQuote | null>(null);

  useEffect(() => {
    getMarketQuote().then(setQuote);
  }, []);

  return quote;
}
