import TradingViewChart from "./TradingViewChart";
export default function Dashboard() {
  return (
    <main
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >
      <h1>Infinity Trading AI Dashboard</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
        marginTop: "30px"
      }}>

        <div style={{background:"#1e293b",padding:"20px",borderRadius:"12px"}}>
          <h3>NIFTY 50</h3>
          <p>Loading...</p>
        </div>

        <div style={{background:"#1e293b",padding:"20px",borderRadius:"12px"}}>
          <h3>BANKNIFTY</h3>
          <p>Loading...</p>
        </div>

        <div style={{background:"#1e293b",padding:"20px",borderRadius:"12px"}}>
          <h3>SENSEX</h3>
          <p>Loading...</p>
        </div>
<div style={{ marginTop: "30px" }}>
  <TradingViewChart />
</div>
      </div>
    </main>
  );
}
