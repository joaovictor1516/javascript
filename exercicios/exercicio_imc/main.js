function calcular(){
    let input_altura = document.getElementById("input_altura"),
    input_peso = document.getElementById("input_peso"),
    div_imc = document.getElementById("div_imc");

    let altura = Number(input_altura.value),
    peso = Number(input_peso.value);

    div_imc.innerHTML = `<p>${peso/(altura*altura)}</p>`;
}