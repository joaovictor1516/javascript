let input_numero = document.querySelector('input#numero');
let select_lista = document.querySelector('select#select_lista');
let lista = [];

function confereIntervalo(numero){
    if(Number(numero) >= 1 && Number(numero) <= 100){
       return true;
    } else {
       return false;
    }
}

function confereLista(numero, lista){
    if(lista.indexOf(Number(numero)) != -1){
        return true;
    } else{
        return false;
    }
}

function adicionar(){
    if(confereIntervalo(input_numero.value) && !confereLista(input_numero.value, lista)){
       lista.push(input_numero.value);
       alert('foi');
       alert(lista);
       let elemento = document.createElement('object');
       elemento.text = input_numero.value;
       select_lista.appendChild(elemento);
    } else{
        alert('não foi');
    }
}

function finalizar(){
    let mostra_resultado = document.querySelector('div#mostra_resultado');
    mostra_resultado.innerText = `Tamanho da lista: ${lista.length}`;
    mostra_resultado.innerText = `Elementos da lista: ${lista}`;
}