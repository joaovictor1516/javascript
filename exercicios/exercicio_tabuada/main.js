function calcular(){
    let input_numero = document.getElementById("input_numero");
    let numero = Number(input_numero.value);
    let select_resultado = document.getElementById("select_resultado");

    if(input_numero.value.length === 0){
        window.alert("Por favor insira um número.");
    } else{
        select_resultado.innerText = "";
        for(let constante = 0; constante <= 10; constante++){
            let resultado = document.createElement('option');
            resultado.text = `${constante} x ${numero} = ${constante*numero}`;
            select_resultado.appendChild(resultado);
            resultado.addEventListener("click",calculo(constante, numero));
        }
    }
}

function calculo(n1,n2){
    let calculo = [];
    let multiplicacao = n1*n2;
    while(n1 <= multiplicacao){
        if(n1 === n1 || soma === multiplicacao){
            calculo.push(n1);
        } else { 
            calculo.push(" + " + n1 + " + ");
        }
        n1 =+ n1;
    } 
    //return mostra_calculo.innerText = calculo;
}