"use client";

const events = [
  {
    country: "🇺🇸 USA",
    event: "CPI",
    impact: "High"
  },
  {
    country: "🇮🇳 India",
    event: "RBI Policy",
    impact: "High"
  },
  {
    country: "🇺🇸 USA",
    event: "Non Farm Payroll",
    impact: "High"
  },
  {
    country: "🇪🇺 Europe",
    event: "ECB Rate Decision",
    impact: "Medium"
  },
  {
    country: "🇯🇵 Japan",
    event: "BOJ Meeting",
    impact: "Medium"
  }
];

export default function EconomicCalendar() {
  return (
    <div
      style={{
        background:"#1f2937",
        padding:20,
        borderRadius:12,
        color:"white"
      }}
    >

      <h2>📅 Economic Calendar</h2>

      {events.map((event,index)=>(

        <div
          key={index}
          style={{
            marginTop:15,
            borderBottom:"1px solid #374151",
            paddingBottom:10
          }}
        >

          <strong>{event.country}</strong>

          <br/>

          {event.event}

          <br/>

          Impact :
          <span
            style={{
              color:event.impact==="High"
              ? "#ef4444"
              : "#facc15"
            }}
          >
            {" "}
            {event.impact}
          </span>

        </div>

      ))}

    </div>
  );
}
