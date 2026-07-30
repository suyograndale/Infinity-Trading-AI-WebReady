"use client";

const news = [

"Federal Reserve may keep rates unchanged",

"RBI policy meeting this week",

"Gold prices rise",

"Crude Oil falls",

"USDINR remains stable"

];

export default function NewsPanel(){

return(

<div

style={{

background:"#1f2937",

padding:20,

borderRadius:12,

color:"white"

}}

>

<h2>📰 Market News</h2>

{news.map((item,index)=>(

<p

key={index}

style={{

marginTop:12

}}

>

• {item}

</p>

))}

</div>

);

}
