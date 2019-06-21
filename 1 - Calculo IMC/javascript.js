function calcula_imc(){
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var generoM = document.getElementById("generoM").checked;
    var generoF = document.getElementById("generoF").checked;

    if(altura=="" || peso==""){
        alert("Informe os dados");
    }

    else{
        var calculo = (peso/(altura*altura));

        if(generoM==true){
            if(calculo<19.1){
                alert("^-^ Você está magro com esse indice: " + calculo + " ^-^");
            }
            else if(calculo>=19.1 && calculo<25.8){
                alert("^-^ Você está normal com esse indice: " + calculo + " ^-^");
            }  
            else if(calculo>=25.8 && calculo<27.3) {
                alert("^-^ Você está com sobre peso com esse indice: " + calculo + " ^-^");
            }
            else if(calculo>=27.3 && calculo<32.3) {
                alert("^-^ Você está com obesidade com esse indice: " + calculo + " ^-^");
            }
            else{
                alert("^-^ Você está com obesidade grave com esse indice: " + calculo + " ^-^");
            }
        }
        else if(generoF==true){
            if(calculo<20.7){
                alert("*-* Você está magra com esse indice: " + calculo + " *-*");
            }
            else if(calculo>=20.7 && calculo<26.4){
                alert("*-* Você está normal com esse indice: " + calculo + " *-*");
            }  
            else if(calculo>=26.4 && calculo<27.8) {
                alert("*-* Você está com sobre peso com esse indice: " + calculo + " *-*");
            }
            else if(calculo>=27.8 && calculo<31.1) {
                alert("*-* Você está com obesidade com esse indice: " + calculo + " *-*");
            }
            else{
                alert("*-* Você está com obesidade grave com esse indice: " + calculo + " *-*");
            }
        }
    }
    
}    