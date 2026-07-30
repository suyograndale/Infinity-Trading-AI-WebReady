import ICTPanel from "@/components/ICTPanel";
import AISignalEngine from "@/components/AISignalEngine";
import AIAnalysis from "@/components/AIAnalysis";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <>
      <Dashboard />
      <AIAnalysis />
      <AISignalEngine />
      <ICTPanel />
    </>
  );
}
