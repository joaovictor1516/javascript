const botao = document.getElementById("botao");

    const tr_abaixo_do_peso = document.getElementById("tr_abaixo_do_peso"),
    tr_peso_ideal = document.getElementById("tr_peso_ideal"),
    tr_sobre_peso = document.getElementById("tr_sobre_peso"),
    tr_obesidade_1 = document.getElementById("tr_obesidade_1"),
    tr_obesidade_2 = document.getElementById("tr_obesidade_2"),
    tr_obesidade_3 = document.getElementById("tr_obesidade_3");

function calcular() {
    const input_altura = document.getElementById("input_altura"),
        input_peso = document.getElementById("input_peso"),
        p_imc = document.getElementById("p_imc"),
        link_abaixo_do_peso = document.getElementById("link_abaixo_do_peso"),
        link_peso_ideal = document.getElementById("link_peso_ideal"),
        link_sobre_peso = document.getElementById("link_sobre_peso"),
        link_obesidade_1 = document.getElementById("link_obesidade_1"),
        link_obesidade_2 = document.getElementById("link_obesidade_2"),
        link_obesidade_3 = document.getElementById("link_obesidade_3");
        
        altura = Number(input_altura.value),
        peso = Number(input_peso.value),
        calculo = peso / (altura * altura);
    
    if(input_altura.value.length === 0 || input_peso.value.length === 0){
        alert("Por favor preencha os campos nescessários");
    }
    else{
        p_imc.innerHTML = "Seu IMC é: ";
       
        tabelaBranca();
        
        if(altura <= 0 || peso <= 0){
            alert("Por favor adicione somente valores maiores que 0");
        }
        else{
            if(calculo > 0 && calculo < 18.5){
                p_imc.innerHTML += `${calculo.toFixed(2)} `;
                tr_abaixo_do_peso.style.backgroundColor = "#00BFFF";
                link_abaixo_do_peso.href = "https://www.tuasaude.com/dieta-para-engordar/";
            }
            else if(calculo >= 18.5 && calculo <= 24.5){
                p_imc.innerHTML += `${calculo.toFixed(2)}`;
                tr_peso_ideal.style.backgroundColor = "#7CFC00";
                link_peso_ideal.href = "https://www.tuasaude.com/dieta-para-perder-3kg-em-10-dias/"
            }
            else if(calculo >= 25 && calculo <= 29.9){
                p_imc.innerHTML += `${calculo.toFixed(2)}`;
                tr_sobre_peso.style.backgroundColor = "#F0E68C";
                link_sobre_peso.href = "https://www.tuasaude.com/dieta-para-engordar/";
            }
            else if(calculo >= 30 && calculo <= 34.9){
                p_imc.innerHTML += `${calculo.toFixed(2)}`;
                tr_obesidade_1.style.backgroundColor = "#FFA500";
                link_obesidade_1.href = "https://www.tuasaude.com/dieta-para-engordar/";
            }
            else if(calculo >= 35 && calculo <= 40){
                p_imc.innerHTML += `${calculo.toFixed(2)}`;
                tr_obesidade_2.style.backgroundColor = "#FF6347";
                link_obesidade_2.href = "https://www.tuasaude.com/dieta-para-engordar/";
            }
            else{
                p_imc.innerHTML += `${calculo.toFixed(2)}`;
                tr_obesidade_3.style.backgroundColor = "#FF0000";
                link_obesidade_3.href = "https://www.tuasaude.com/dieta-para-engordar/";
            }
        }
    }
}

function tabelaBranca(){
    const lista = [
    tr_abaixo_do_peso.style.backgroundColor = "white", 
    tr_peso_ideal.style.backgroundColor = "white", 
    tr_sobre_peso.style.backgroundColor = "white", 
    tr_obesidade_1.style.backgroundColor = "white",
    tr_obesidade_2.style.backgroundColor = "white", 
    tr_obesidade_3.style.backgroundColor = "white"];

    return lista;
}

botao.addEventListener("click", calcular);