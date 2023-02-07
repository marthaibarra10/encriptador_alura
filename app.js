function encriptar(){ 
    var texto = document.querySelector("#input-texto").value; 
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("mensajes").value = textoCifrado.toLowerCase();
    texto.value = "";
    mensajes.style.backgroundImage = "none";
}

function desencriptar(){ 
    var texto = document.querySelector("#input-texto").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("mensajes").value = textoCifrado.toLowerCase();
    texto.value = "";
    mensajes.style.backgroundImage = "none";
}

function copiarPortapapeles(){
    var copiado = document.getElementById("mensajes");
    mensajes.select();
    mensajes.setSelectionRange(0, 99999);
    document.execCommand("copy");
}