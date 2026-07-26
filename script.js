// =========================
// JARVIS v1.1
// =========================

function startJarvis(){

    document.getElementById("status").innerHTML="สถานะ : Online";

    let name=localStorage.getItem("username");

    if(name){

        addMessage("JARVIS","ยินดีต้อนรับกลับ "+name);

    }else{

        addMessage("JARVIS","สวัสดี ผมคือ JARVIS");

    }

}

function sendMessage(){

    let input=document.getElementById("userInput");

    let text=input.value.trim();

    if(text=="") return;

    addMessage("คุณ",text);

    reply(text);

    input.value="";

}

function reply(text){

    let msg=text.toLowerCase();

    if(msg.startsWith("ฉันชื่อ ")){

        let name=text.substring(8);

        localStorage.setItem("username",name);

        addMessage("JARVIS","ยินดีที่ได้รู้จัก "+name);

        return;

    }

    if(msg=="ชื่อฉันคืออะไร"){

        let name=localStorage.getItem("username");

        if(name){

            addMessage("JARVIS","คุณชื่อ "+name);

        }else{

            addMessage("JARVIS","คุณยังไม่ได้บอกชื่อ");

        }

        return;

    }

    if(msg=="ลบความจำ"){

        localStorage.clear();

        addMessage("JARVIS","ลบข้อมูลเรียบร้อย");

        return;

    }

    if(msg=="เวลา"){

        addMessage("JARVIS",new Date().toLocaleTimeString());

        return;

    }

    if(msg=="วันที่"){

        addMessage("JARVIS",new Date().toLocaleDateString());

        return;

    }

    if(msg=="สวัสดี"){

        addMessage("JARVIS","สวัสดีครับ");

        return;

    }

    addMessage("JARVIS","ขออภัย ผมยังไม่เข้าใจ");
}

function addMessage(sender,message){

    let chat=document.getElementById("chatBox");

    chat.innerHTML += "<p><b>"+sender+" :</b> "+message+"</p>";

    chat.scrollTop=chat.scrollHeight;

}
