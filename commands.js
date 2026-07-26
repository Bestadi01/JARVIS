const commands = {

    "สวัสดี": () => {

        addMessage("JARVIS","สวัสดีครับ");

    },

    "เวลา": () => {

        addMessage("JARVIS",new Date().toLocaleTimeString());

    },

    "วันที่": () => {

        addMessage("JARVIS",new Date().toLocaleDateString());

    },

    "เปิด google": () => {

        window.open("https://www.google.com","_blank");

        addMessage("JARVIS","กำลังเปิด Google");

    },

    "เปิด youtube": () => {

        window.open("https://www.youtube.com","_blank");

        addMessage("JARVIS","กำลังเปิด YouTube");

    }

};
