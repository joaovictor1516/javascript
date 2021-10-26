class Conta{
    constructor(){
        this.id = 0;
        this.lista = [];
    }
    
    login(){
        if(this.recebeDados()){
            window.location.href = "oi.html";
        }
    }

    recebeDados(){
        let email = document.getElementById("email");
        let senha = document.getElementById("senha");
        let mensagem = '';

        if(email.value.length === 0 ){
            mensagem += 'Por favor preencha o campo de email\n';
        }

        if(senha.value.length === 0){
            mensagem += 'Por favor preencha o campo de senha\n';   
        }

        if(mensagem != ''){
            alert(mensagem);
            return false;
        }

        return true;
    }
}

let teste = new Conta();