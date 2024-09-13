const pw = document.getElementById("pw");
const current = document.getElementById("current");
const submit = document.getElementById("submit");

//document.getElementById("intro").style.visibility = "hidden";
  //      document.getElementById("main").style.visibility = "visible";
pw.onkeyup = function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
    login();
}else{
    document.getElementById("hi").innerHTML = "ahha";
}
};

submit.onclick =  login;

async function login() {
    let p = await hash(pw.value);
    if(p == "65fa4ada77dfbe7a3a4e3ed31d5ecc85f9605f69a97f2a08ea319cf6b545793a"){
        document.getElementById("hi").innerHTML = "woop woop";
        const link = "https://chat.whatsapp.com/" + pw.value.slice(-3);
        document.getElementById("hi").innerHTML = "<a href="+link+">"+link+"<a>";
        document.getElementById("intro").style.visibility = "hidden";
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
