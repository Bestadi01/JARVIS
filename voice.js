function speak(text){

    if(!("speechSynthesis" in window)) return;

    let speech=new SpeechSynthesisUtterance(text);

    speech.lang="th-TH";

    speechSynthesis.speak(speech);

}
