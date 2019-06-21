function Conversor(){
    var decimal = document.getElementById("decimal").value;

    if(decimal==""){
        alert("Informe o Valor em decimal, Por Favor!");
    }
    else{
        var numero = parseInt(decimal);
        var ValorBinario  = numero.toString(2);
        var ValorOctal = numero.toString(8);
        var ValorHexadecimal = numero.toString(16);
    
        document.getElementById("binario").value = ValorBinario;
        document.getElementById("hexadecimal").value = ValorHexadecimal;
        document.getElementById("octal").value = ValorOctal;
    }
}