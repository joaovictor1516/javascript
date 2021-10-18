const botao = document.getElementById("botao");

function calcular() {
    const input_altura = document.getElementById("input_altura"),
        input_peso = document.getElementById("input_peso"),
        p_imc = document.getElementById("p_imc"),

        tr_abaixo_do_peso = document.getElementById("tr_abaixo_do_peso"),
        tr_peso_ideal = document.getElementById("tr_peso_ideal"),
        tr_sobre_peso = document.getElementById("tr_sobre_peso"),
        tr_obesidade_1 = document.getElementById("tr_obesidade_1"),
        tr_obesidade_2 = document.getElementById("tr_obesidade_2"),
        tr_obesidade_3 = document.getElementById("tr_obesidade_3"),

        altura = Number(input_altura.value),
        peso = Number(input_peso.value),
        calculo = peso / (altura * altura);
    
    if(input_altura.value.length === 0 || input_peso.value.length === 0){
        alert("Por favor preencha os campos nescessários");
    }
    else{
        p_imc.innerHTML = "Seu IMC é: ";
        tr_abaixo_do_peso.style.backgroundColor = "white";
        tr_peso_ideal.style.backgroundColor = "white";
        tr_sobre_peso.style.backgroundColor = "white";
        tr_obesidade_1.style.backgroundColor = "white";
        tr_obesidade_2.style.backgroundColor = "white";
        tr_obesidade_3.style.backgroundColor = "white";

        if(altura <= 0 || peso <= 0){
            alert("Por favor adicione somente valores maiores que 0");
        }
        else{
            if(calculo > 0 && calculo < 18.5){
                p_imc.innerHTML += `${calculo.toFixed(2)} `;
                tr_abaixo_do_peso.style.backgroundColor = "#00BFFF";
            }
            else if(calculo >= 18.5 && calculo <= 24.5){
                p_imc.innerHTML += `${calculo.toFixed(2)}`;
                tr_peso_ideal.style.backgroundColor = "#7CFC00";
            }
            else if(calculo >= 25 && calculo <= 29.9){
                p_imc.innerHTML += `${calculo.toFixed(2)}`;
                tr_sobre_peso.style.backgroundColor = "#F0E68C";
            }
            else if(calculo >= 30 && calculo <= 34.9){
                p_imc.innerHTML += `${calculo.toFixed(2)}`;
                tr_obesidade_1.style.backgroundColor = "#FFA500";
            }
            else if(calculo >= 35 && calculo <= 40){
                p_imc.innerHTML += `${calculo.toFixed(2)}`;
                tr_obesidade_2.style.backgroundColor = "#FF6347";
            }
            else{
                p_imc.innerHTML += `${calculo.toFixed(2)}`;
                tr_obesidade_3.style.backgroundColor = "#FF0000";
            }
        }
    }
}

botao.addEventListener("click", calcular);