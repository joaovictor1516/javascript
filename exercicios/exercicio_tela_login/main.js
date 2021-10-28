class Conta{
    login(){
        if(this.recebeDados()){
            window.location.href = "curriculo.html";
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