function process(text){

    if(text.startsWith("ฉันชื่อ ")){

        let name=text.substring(8);

        saveName(name);

        addMessage("JARVIS","ยินดีที่ได้รู้จัก "+name);

        speak("ยินดีที่ได้รู้จัก");

        return;

    }

    if(commands[text]){

        commands[text]();

        return;

    }

    addMessage("JARVIS","ผมยังไม่เข้าใจ");

}
