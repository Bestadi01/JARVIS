function startJarvis(){

document.getElementById("status").innerHTML="STATUS : ONLINE";

addMessage("JARVIS","ระบบออนไลน์แล้ว");

}

function sendMessage(){

let input=document.getElementById("message");

let text=input.value.trim();

if(text=="") return;

addMessage("คุณ",text);

reply(text);

input.value="";

}

function reply(text){

let answer="ผมยังไม่เข้าใจ";

if(text=="สวัสดี"){

answer="สวัสดีครับ";

}

else if(text=="ชื่ออะไร"){

answer="ผมคือ JARVIS";

}

else if(text=="เวลา"){

answer=new Date().toLocaleTimeString();

}

addMessage("JARVIS",answer);

}

function addMessage(name,text){

let chat=document.getElementById("chat");

chat.innerHTML += "<p><b>"+name+" :</b> "+text+"</p>";

chat.scrollTop=chat.scrollHeight;

}
