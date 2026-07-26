// ==========================
// JARVIS v2.0
// Command System
// ==========================

const commands = {

   "google": function () {
    window.open("https://www.google.com");
    },
    "YouTube": function () {
    window.open("https://www.youtube.com");
    },
    
    "วันที่": function () {
        addMessage("JARVIS", new Date().toLocaleDateString());
    },
  
    "สวัสดี": function () {
        addMessage("JARVIS", "สวัสดีครับ");
    },

    "เวลา": function () {
        addMessage("JARVIS", new Date().toLocaleTimeString());
    },

    "ชื่อฉันคืออะไร": function () {

        let name = localStorage.getItem("jarvis_name");

        if (name) {

            addMessage("JARVIS", "คุณชื่อ " + name);

        } else {

            addMessage("JARVIS", "คุณยังไม่ได้บอกชื่อ");

        }

    },

    "ลบความจำ": function () {

        localStorage.removeItem("jarvis_name");

        addMessage("JARVIS", "ลบข้อมูลเรียบร้อย");

    }

};

function startJarvis() {

    document.getElementById("status").innerHTML = "STATUS : ONLINE";

    let name = localStorage.getItem("jarvis_name");

    if (name) {

        addMessage("JARVIS", "ยินดีต้อนรับกลับ " + name);

    } else {

        addMessage("JARVIS", "สวัสดีครับ ผมคือ JARVIS");

    }

}

function sendMessage() {

    let input = document.getElementById("message");

    let text = input.value.trim();

    if (text == "") return;

    addMessage("คุณ", text);

    process(text);

    input.value = "";

}

function process(text) {

    if (text.startsWith("ฉันชื่อ ")) {

        let name = text.substring(8);

        localStorage.setItem("jarvis_name", name);

        addMessage("JARVIS", "ยินดีที่ได้รู้จัก " + name);

        return;

    }

    if (commands[text]) {

        commands[text]();

    } else {

        addMessage("JARVIS", "ไม่พบคำสั่งนี้");

    }

}

function addMessage(name, text) {

    let chat = document.getElementById("chat");

    chat.innerHTML += "<p><b>" + name + " :</b> " + text + "</p>";

    chat.scrollTop = chat.scrollHeight;

}
