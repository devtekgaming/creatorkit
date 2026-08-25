function clean(s){return s.trim() || "your topic"}

function generateTitles(){
 const t=clean(document.getElementById("titleTopic").value);
 const arr=[
  `🔥 ${t} — You Won't Believe This!`,
  `${t}: Everything You Need to Know`,
  `I Tried ${t}... Here's What Happened`,
  `The BEST ${t} Guide for Beginners`,
  `Before You Try ${t}, Watch This!`
 ];
 document.getElementById("titleResult").textContent=arr.join("\n");
}

function generateHashtags(){
 const t=clean(document.getElementById("hashTopic").value).toLowerCase();
 const words=t.replace(/[^a-z0-9 ]/g,"").split(" ").filter(Boolean);
 const base=words.join("");
 const tags=["#contentcreator","#creator","#youtube","#instagram","#shorts","#viral","#trending","#reels","#gaming","#creatorlife"];
 const custom=words.map(w=>"#"+w);
 document.getElementById("hashResult").textContent=[...new Set([...custom,"#"+base,...tags])].slice(0,15).join(" ");
}

function generateUsernames(){
 const t=clean(document.getElementById("userTopic").value).toLowerCase().replace(/[^a-z0-9]/g,"");
 const arr=[t+"hq",t+"official",t+"x", "its"+t, t+"studio", t+"hub", t+"verse", "the"+t, t+"plays", t+"zone"];
 document.getElementById("userResult").textContent=arr.join("\n");
}

function countWords(){
 const v=document.getElementById("wordText").value;
 const words=v.trim()?v.trim().split(/\s+/).length:0;
 document.getElementById("wordResult").textContent=`Words: ${words} · Characters: ${v.length}`;
}
