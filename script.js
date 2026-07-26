// ==========================
// JARVIS v3.0
// Command System
// ==========================

const commands = {

    "สวัสดี": function () {
        addMessage("JARVIS", "สวัสดีครับ");
    },

    "เวลา": function () {
        addMessage("JARVIS", new Date().toLocaleTimeString());
    },

    "วันที่": function () {
        addMessage("JARVIS", new Date().toLocaleDateString());
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

    },

    "เปิด google": function () {

        window.open("https://www.google.com", "_blank");

        addMessage("JARVIS", "กำลังเปิด Google");

    },

    "เปิด youtube": function () {

        window.open("https://www.youtube.com", "_blank");

        addMessage("JARVIS", "กำลังเปิด YouTube");

    },

    "เปิด github": function () {

        window.open("https://github.com", "_blank");

        addMessage("JARVIS", "กำลังเปิด GitHub");

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

    if (text.startsWith("ค้นหา ")) {

        let keyword = text.substring(6);

        window.open(
            "https://www.google.com/search?q=" +
            encodeURIComponent(keyword),
            "_blank"
        );

        addMessage("JARVIS", "กำลังค้นหา " + keyword);

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
