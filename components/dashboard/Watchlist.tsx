"use client";

const stocks = [
  "NIFTY",
  "BANKNIFTY",
  "SENSEX",
  "RELIANCE",
  "TCS",
  "HDFCBANK"
];

export default function Watchlist() {

  return (

    <div
      style={{
        background:"#1f2937",
        padding:20,
        borderRadius:12,
        color:"white"
      }}
    >

      <h2>⭐ Watchlist</h2>

      {stocks.map(stock=>(

        <p key={stock}>{stock}</p>

      ))}

    </div>

  );

}
