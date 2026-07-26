// ==========================
// JARVIS v1.0
// ==========================

function startJarvis() {

    document.getElementById("status").innerHTML = "STATUS : ONLINE";

    let name = localStorage.getItem("jarvis_name");

    if (name) {

        addMessage("JARVIS", "ยินดีต้อนรับกลับ " + name);

    } else {

        addMessage("JARVIS", "สวัสดีครับ ผมคือ JARVIS");

        addMessage("JARVIS", "พิมพ์ : ฉันชื่อ ...");

    }

}

function sendMessage() {

    let input = document.getElementById("message");

    let text = input.value.trim();

    if (text == "") return;

    addMessage("คุณ", text);

    reply(text);

    input.value = "";

}

function reply(text) {

    let msg = text.toLowerCase();

    // จำชื่อ
    if (msg.startsWith("ฉันชื่อ ")) {

        let name = text.substring(8);

        localStorage.setItem("jarvis_name", name);

        addMessage("JARVIS", "ยินดีที่ได้รู้จัก " + name);

        return;

    }

    // ถามชื่อ
    if (msg == "ชื่อฉันคืออะไร") {

        let name = localStorage.getItem("jarvis_name");

        if (name) {

            addMessage("JARVIS", "คุณชื่อ " + name);

        } else {

            addMessage("JARVIS", "คุณยังไม่ได้บอกชื่อ");

        }

        return;

    }

    // ลบข้อมูล
    if (msg == "ลบความจำ") {

        localStorage.removeItem("jarvis_name");

        addMessage("JARVIS", "ลบข้อมูลเรียบร้อย");

        return;

    }

    // เวลา
    if (msg == "เวลา") {

        addMessage("JARVIS", new Date().toLocaleTimeString());

        return;

    }

    // ทักทาย
    if (msg == "สวัสดี") {

        addMessage("JARVIS", "สวัสดีครับ");

        return;

    }

    addMessage("JARVIS", "ผมยังไม่เข้าใจคำสั่งนี้");

}

function addMessage(name, text) {

    let chat = document.getElementById("chat");

    chat.innerHTML += "<p><b>" + name + " :</b> " + text + "</p>";

    chat.scrollTop = chat.scrollHeight;

}
