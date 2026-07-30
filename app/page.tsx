import Sidebar from "@/components/dashboard/Sidebar";
import MarketOverview from "@/components/dashboard/MarketOverview";
import Watchlist from "@/components/dashboard/Watchlist";
import TopGainers from "@/components/dashboard/TopGainers";
import TopLosers from "@/components/dashboard/TopLosers";
import EconomicCalendar from "@/components/dashboard/EconomicCalendar";
import NewsPanel from "@/components/dashboard/NewsPanel";
import FiiDiiPanel from "@/components/dashboard/FiiDiiPanel";

import AIAnalysis from "@/components/AIAnalysis";
import AISignalEngine from "@/components/AISignalEngine";
import ICTPanel from "@/components/ICTPanel";


export default function Home() {
  return (

<div
style={{
display:"flex",
background:"#0f172a",
minHeight:"100vh"
}}
>

<Sidebar/>

<div
style={{
flex:1,
padding:20
}}
>

<MarketOverview/>

<div
style={{
display:"grid",
gridTemplateColumns:"2fr 1fr",
gap:20,
marginTop:20
}}
>

<div>

<AISignalEngine/>

<AIAnalysis/>

<ICTPanel/>

</div>

<div>

<Watchlist/>

<div style={{marginTop:20}}>
<TopGainers/>
</div>

<div style={{marginTop:20}}>
<TopLosers/>
</div>

<div style={{marginTop:20}}>
<FiiDiiPanel/>
</div>

</div>

</div>

<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:20,
marginTop:20
}}
>

<NewsPanel/>

<EconomicCalendar/>

</div>

</div>

</div>

);
}
