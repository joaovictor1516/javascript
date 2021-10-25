class conta{
    constructor(){
        this.id = 0;
    }
    
    criarConta(){
        alert('foi');
    }
}

let teste = new conta;
let botao = document.getElementById("botao");
botao.addEventListener("click", teste.criarConta());