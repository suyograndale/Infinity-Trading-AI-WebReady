"use client";

import { useEffect, useState } from "react";
import {
  getMarketQuotes,
  MarketQuote,
} from "@/lib/market/marketService";

export function useMarketQuote() {
  const [quotes, setQuotes] = useState<MarketQuote[]>([]);

  useEffect(() => {
    getMarketQuotes().then(setQuotes);
  }, []);

  return quotes;
}
