const { createHash } = require('crypto');
const pw = document.getElementById("pw");
const current = document.getElementById("current");

pw.oninput = function () {
    current.textContent = pw.value;
    document.getElementById("hi").innerHTML = hash(pw.value);
};


function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
            .map((bytes) => bytes.toString(16).padStart(2, '0'))
            .join('');
        return hashHex;
    });
}
