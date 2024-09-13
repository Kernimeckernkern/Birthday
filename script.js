const pw = document.getElementById("pw");
const current = document.getElementById("current");
const submit = document.getElementById("submit");
const ghost = document.getElementById("ghost");

//document.getElementById("intro").style.visibility = "hidden";
  //      document.getElementById("main").style.visibility = "visible";
pw.onkeyup = function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
    login();
}else{
    document.getElementById("ghost").innerHTML = "buh";
}
};

submit.onclick =  login;
ghost.onclick = function(){
    document.getElementById("buhja").play();
}
document.getElementById("hexe").onclick = function(){
    document.getElementById("musik_hexe").play();
}
async function login() {
    let p = await hash(pw.value);
    if(p == "b95b6b40298036e16f7b5ab183c6446649cf0377926ff8ce618691f52eb0f4eb"){
        document.getElementById("hi").innerHTML = "woop woop";
        const link = "https://chat.whatsapp.com/HlzV31UCe2M5SG0tf2c" + pw.value.slice(-3);
        document.getElementById("hi").innerHTML = "<a href="+link+">"+link+"<a>";
        document.getElementById("bg").style.visibility = "hidden";
        document.getElementById("main").style.visibility = "visible";
        
        document.getElementById("musik").play();
    }
    else{
        document.getElementById("ans").innerHTML = "Das Passwort ist falsch";
    }
}

    
const hash = async (input) => {
        const textAsBuffer = new TextEncoder().encode(input);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hash = hashArray
          .map((item) => item.toString(16).padStart(2, "0"))
          .join("");
        return hash;
      };
