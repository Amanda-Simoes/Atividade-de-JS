function maiusculo(){
    var frase = document.getElementById("frase").value;
    var fraseMaiuscula  = frase.toUpperCase();
    document.getElementById("modificado").value = fraseMaiuscula;
}
function minusculo(){
    var frase = document.getElementById("frase").value;
    var fraseMinuscula = frase.toLowerCase();
    document.getElementById("modificado").value = fraseMinuscula;
}
function ContarCaracters(){
    var frase = document.getElementById("frase").value;
    var tamanho = frase.length;
    document.getElementById("modificado").value = tamanho;
}
function ContarPalavras(){ 
    var frase = document.getElementById("frase").value;
    var dividir = frase.split(" ");
    var total = dividir.length;
    document.getElementById("modificado").value = total;
}