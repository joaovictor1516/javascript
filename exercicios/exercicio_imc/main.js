const botao = document.getElementById("botao");

function calcular() {
    const input_altura = document.getElementById("input_altura"),
        input_peso = document.getElementById("input_peso"),
        p_imc = document.getElementById("p_imc"),

        altura = Number(input_altura.value),
        peso = Number(input_peso.value),
        calculo = peso / (altura * altura);
    
    if(input_altura.value.length === 0 || input_peso.value.length === 0){
        alert("Por favor preencha os campos nescessários");
    }
    else{
        p_imc.innerHTML = "Seu IMC é: ";

        if(altura <= 0 || peso <= 0){
            alert("Por favor adicione somente valores maiores que 0");
        }
        else{
            if(calculo > 0 && calculo < 18.5){
                p_imc.innerHTML += `${calculo.toFixed(2)} Você está abaixo do peso`;
            }
            else if(calculo >= 18.5 && calculo <= 24.5){
                p_imc.innerHTML += `${calculo.toFixed(2)} Você tem o peso normal`;
            }
            else if(calculo >= 25 && calculo <= 29.9){
                p_imc.innerHTML += `${calculo.toFixed(2)} Você ta com sobrepeso`;
            }
            else if(calculo >= 30 && calculo <= 34.9){
                p_imc.innerHTML += `${calculo.toFixed(2)} Você tem Obesidade Grau I`;
            }
            else if(calculo >= 35 && calculo <= 40){
                p_imc.innerHTML += `${calculo.toFixed(2)} Você tem Obesidade Grau II`;
            }
            else{
                p_imc.innerHTML += `${calculo.toFixed(2)} Você tem Obesidade Grau III`;
            }
        }
    }
}

botao.addEventListener("click", calcular);