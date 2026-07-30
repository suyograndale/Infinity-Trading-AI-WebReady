"use client";

import { useEffect, useState } from "react";

import { getMarketData } from "@/lib/market/service";

import { LiveMarketData } from "@/lib/market/types";

export function useMarket() {

  const [market, setMarket] =
    useState<LiveMarketData | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function loadData() {

    try {

      const data = await getMarketData();

      setMarket(data);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadData();

    const timer = setInterval(() => {

      loadData();

    }, 5000);

    return () => clearInterval(timer);

  }, []);

  return {

    market,

    loading,

    refresh: loadData,

  };

}
