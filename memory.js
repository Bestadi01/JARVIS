function saveName(name){

    localStorage.setItem("jarvis_name",name);

}

function getName(){

    return localStorage.getItem("jarvis_name");

}

function clearMemory(){

    localStorage.removeItem("jarvis_name");

}
