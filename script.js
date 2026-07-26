function startJarvis(){

document.getElementById("status").innerHTML="สถานะ : Online";

alert("JARVIS พร้อมใช้งาน");

}

function sendMessage(){

let input=document.getElementById("userInput");

let text=input.value;

if(text=="") return;

let chat=document.getElementById("chatBox");

chat.innerHTML+="<p><b>คุณ :</b> "+text+"</p>";

let reply="";

switch(text.toLowerCase()){

case "สวัสดี":

reply="สวัสดีครับ ผมคือ JARVIS";

break;

case "ชื่ออะไร":

reply="ผมชื่อ JARVIS";

break;

case "เวลา":

reply=new Date().toLocaleTimeString();

break;

case "วันนี้วันที่":

reply=new Date().toLocaleDateString();

break;

default:

reply="ขออภัย ผมยังไม่เข้าใจคำสั่งนี้";

}

chat.innerHTML+="<p style='color:cyan'><b>JARVIS :</b> "+reply+"</p>";

input.value="";

chat.scrollTop=chat.scrollHeight;

}
