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
async function process(text){

    addMessage("JARVIS","กำลังคิด...");

    try{

        let response = await fetch(CONFIG.API_URL,{

            method:"POST",

            headers:{

                "Content-Type":"application/json",

                "Authorization":"Bearer "+CONFIG.API_KEY

            },

            body:JSON.stringify({

                message:text

            })

        });

        let data=await response.json();

        let reply=data.reply;

        addMessage("JARVIS",reply);

        speak(reply);

    }

    catch(error){

        addMessage("JARVIS","ไม่สามารถเชื่อมต่อ AI ได้");

    }

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
