class Produtos{
    constructor(){
        this.id = 1;
        this.lista = [];
    }

    salvar(){
        const produto = this.lerDados();
        
        
        if(this.verificaCampos(produto)){
            this.adicionar(produto);
        }
        this.tabela();
    }

    adicionar(produto){
        const lista = this.lista.push(produto);
        this.id++;
        return lista;
    }

    tabela(){
        const tb_corpo = document.getElementById("tb_corpo");
        tb_corpo.innerText = "";

        for(let i = 0; i < this.lista.length; i++){
        
            const tr = tb_corpo.insertRow(),
            td_id = tr.insertCell(),
            td_produto = tr.insertCell(),
            td_preco = tr.insertCell(),
            td_acao = tr.insertCell(),
            td_quantidade = tr.insertCell();
               

            td_id.innerText = this.lista[i].id;
            td_produto.innerText = this.lista[i].nome;
            td_preco.innerText = this.lista[i].preco;
            
            for(let i = 1; i <= 10; i++){
                const quantidade = document.createElement("object");
                quantidade.innerText = i;
                td_quantidade.appendChild(quantidade);
            }

            let botao_remover = document.createElement('img');
            botao_remover.setAttribute("src","https://image.flaticon.com/icons/png/512/18/18297.png");

            let handle_click = () => {tb_corpo.deleteRow(i); 
            this.lista.splice(i);
            td_id.value--;};
            
            td_acao.appendChild(botao_remover);
            botao_remover.addEventListener("click", handle_click);
            console.log(this.lista);
        }
    }

    lerDados(){
        let dado = {};
        dado.id = this.id,
        dado.nome = document.getElementById("produto").value,
        dado.preco = document.getElementById("preco").value;
        dado.quantidade = document.createElement("select");
        return dado;
    }

    verificaCampos(produto){
        let mensagem = '';
        if(produto.nome === ''){
            mensagem += "Por favor digite o nome do produto\n";
        }

        if(produto.preco === ''){
            mensagem += "Por favor digite o preço do produto\n";
        }

        if(produto.preco < 0){
            mensagem += "Por favor digite o preço maior que 0\n";
        }

        if(mensagem != ''){
            alert(mensagem);
            return false;
        }

        return true;
    }

    remover(){
        alert("removido");
    }
}

let produto = new Produtos();