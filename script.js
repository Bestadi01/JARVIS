// =========================
// JARVIS v2.0
// Voice + Chat
// =========================

let recognition;

function startJarvis(){

    document.getElementById("status").innerHTML="สถานะ : Online";

    speak("JARVIS พร้อมทำงาน");

    if(localStorage.getItem("username")){

        addMessage("JARVIS","ยินดีต้อนรับ "+localStorage.getItem("username"));

    }else{

        addMessage("JARVIS","สวัสดีครับ");

    }

}

function sendMessage(){

    let input=document.getElementById("userInput");

    let text=input.value.trim();

    if(text=="") return;

    addMessage("คุณ",text);

    input.value="";

    process(text);

}

function process(text){

    let msg=text.toLowerCase();

    let reply="";

    if(msg.startsWith("ฉันชื่อ ")){

        let name=text.substring(8);

        localStorage.setItem("username",name);

        reply="ยินดีที่ได้รู้จัก "+name;

    }

    else if(msg=="ชื่อฉันคืออะไร"){

        let name=localStorage.getItem("username");

        reply=name ? "คุณชื่อ "+name : "คุณยังไม่ได้บอกชื่อ";

    }

    else if(msg=="เวลา"){

        reply=new Date().toLocaleTimeString();

    }

    else if(msg=="วันที่"){

        reply=new Date().toLocaleDateString();

    }

    else if(msg=="สวัสดี"){

        reply="สวัสดีครับ";

    }

    else{

        reply="ผมยังไม่เข้าใจคำสั่งนี้";

    }

    addMessage("JARVIS",reply);

    speak(reply);

}

function addMessage(sender,message){

    let chat=document.getElementById("chatBox");

    chat.innerHTML += "<p><b>"+sender+" :</b> "+message+"</p>";

    chat.scrollTop=chat.scrollHeight;

}

function speak(text){

    let speech=new SpeechSynthesisUtterance(text);

    speech.lang="th-TH";

    speech.rate=1;

    speech.pitch=1;

    speechSynthesis.speak(speech);

}

function startListening(){

    const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;

    if(!SpeechRecognition){

        alert("เบราว์เซอร์นี้ไม่รองรับการฟังเสียง");

        return;

    }

    recognition=new SpeechRecognition();

    recognition.lang="th-TH";

    recognition.start();

    recognition.onresult=function(event){

        let text=event.results[0][0].transcript;

        document.getElementById("userInput").value=text;

        sendMessage();

    }

}
