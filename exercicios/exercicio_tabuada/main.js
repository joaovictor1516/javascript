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
        }
    }
}