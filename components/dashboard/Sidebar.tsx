"use client";

const menu = [
  "🏠 Dashboard",
  "📈 Market",
  "🤖 AI Signals",
  "📊 Option Chain",
  "🧠 ICT Analysis",
  "📅 Economic Calendar",
  "📰 News",
  "⚙ Settings"
];

export default function Sidebar() {
  return (
    <div
      style={{
        width: 240,
        background: "#111827",
        minHeight: "100vh",
        color: "white",
        padding: 20
      }}
    >
      <h2>Infinity AI</h2>

      {menu.map(item => (
        <div
          key={item}
          style={{
            padding: 12,
            marginTop: 10,
            background: "#1f2937",
            borderRadius: 8,
            cursor: "pointer"
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
