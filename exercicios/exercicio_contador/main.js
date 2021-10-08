function contar(){
    let input_inicio = document.getElementById("inicio");
    let input_fim = document.getElementById("fim");
    let input_passo = document.getElementById("passo");
    let resultado = document.getElementById("resultado");
    let inicio = Number(input_inicio.value);
    let fim = Number(input_fim.value);
    let passo = Number(input_passo.value);


    if(input_inicio.value.length === 0){
        window.alert("Por favor preencha o espaço do inicio");
    } 
    else if(input_fim.value.length === 0){
        window.alert("Por favor preencha o espaço do fim");
    } 
    else {

        if(input_passo.value.length === 0){
            window.alert("O espaço de passo está vázio, logo foi considerado como 1");
            passo = 1; 
        }

        resultado.innerText = "";

        if (inicio < fim){

            for(let numero = inicio; numero <= fim; numero += passo){
            
                if(numero === fim){ 
                    resultado.innerHTML += `${numero} 🏁`;
                }  
                else{
                resultado.innerHTML += `${numero} 👉`;
                }
            }
        }
        
        if(inicio > fim){

            for (let numero = inicio; numero >= fim; numero -= passo){
                
                if(numero === fim){
                    resultado.innerHTML += `${numero} 🏁`;
                } 
                else{
                    resultado.innerHTML += `${numero} 👉`;                
                }
            }
        }

        if(inicio === fim){
            window.alert("Os números de inicio e fim são iguais, por favor altere os valor do inicio ou do fim.");
            resultado.innerHTML = "";
        }

        if(passo < 0){
            window.alert("Porfavor coloque um nnumero maior ou igual a zero");
        }
    }
}