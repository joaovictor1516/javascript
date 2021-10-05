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
       lista.push(Number(input_numero.value));
       let elemento = document.createElement('option');
       elemento.text = `${input_numero.value} Foi listado.`;
       select_lista.appendChild(elemento);
    } 
    else if(input_numero.value.length === 0){
        alert('Por favor digite um valor entre 1 e 100.');
    } 
    else if(confereLista(input_numero.value, lista)){
        alert('Esse número já foi listado, por favor digite outro.');
    }
    else{
        alert('Número menor que 1 ou maior que 100.');
    }
    input_numero.value = '';
    input_numero.focus();
    mostra_resultado.innerText = '';
    mostra_resultado.focus();
}

function remover(){
    if(confereIntervalo(input_numero.value) && confereLista(input_numero.value, lista)){
        lista.splice(lista.indexOf(Number(input_numero.value)),1);
        let elemento = document.createElement('option');
        elemento.text = `${input_numero.value} Foi removido.`;
        select_lista.appendChild(elemento);
     } 
     else if(input_numero.value.length === 0){
         alert('Por favor digite um valor entre 1 e 100.');
     } 
     else {
         alert('Esse número não está listado.');
     }
    input_numero.value = '';
    input_numero.focus();
    mostra_resultado.innerText = '';
    mostra_resultado.focus();
}

function finalizar(){
    if(select_lista.length === 0 || lista.length === 0){
        alert('A lista está vazia.');
    } else{
        let mostra_resultado = document.querySelector('div#mostra_resultado');
        mostra_resultado.innerHTML = `Tamanho da lista: ${lista.length}`;
        mostra_resultado.innerHTML += `<br>Elementos da lista: ${lista}`;  
        mostra_resultado.innerHTML += `<br>Maior elemento da lista: ${Math.min(...lista)}`;
        mostra_resultado.innerHTML += `<br>Menor elemento da lista: ${Math.min(...lista)}`;
    }
}