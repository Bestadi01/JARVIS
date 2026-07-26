function startJarvis(){

    document.getElementById("status").innerHTML="STATUS : ONLINE";

    let name=getName();

    if(name){

        addMessage("JARVIS","ยินดีต้อนรับกลับ "+name);

    }else{

        addMessage("JARVIS","สวัสดีครับ");

    }

}

function sendMessage(){

    let input=document.getElementById("message");

    let text=input.value.trim();

    if(text=="") return;

    addMessage("คุณ",text);

    process(text);

    input.value="";

}

function addMessage(name,text){

    let chat=document.getElementById("chat");

    chat.innerHTML+="<p><b>"+name+"</b> : "+text+"</p>";

    chat.scrollTop=chat.scrollHeight;

}
