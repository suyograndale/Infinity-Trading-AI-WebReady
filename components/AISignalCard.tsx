"use client";

interface Props {
  signal: string;
  confidence: number;
}

export default function AISignalCard({
  signal,
  confidence,
}: Props) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: 20,
        borderRadius: 12,
        marginTop: 20,
      }}
    >
      <h2>🤖 AI Signal</h2>

      <h1>{signal}</h1>

      <p>Confidence : {confidence}%</p>
    </div>
  );
}
