import React from 'react';
import Formulario from './Formulario';
import Tabela from './Tabela';

class Principal extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            nome: '', 
            idade: '',
            vetor: []
        };
    }

    pegaDados = (dado)=>{
        this.setState({[dado.target.name]:dado.target.value});
    }

    mostraDados = (botao)=>{
        botao.preventDefault();
        let copiaVetor = [...this.state.vetor];
        
        copiaVetor.push({
            "nome": this.state.nome,
            "idade": this.state.idade
        });
        
        this.setState({vetor: copiaVetor});
        this.setState({
            nome: '',
            idade: ''});
    }

    render(){
        return(
        <div>
        <Formulario campoNome = {this.state.nome} campoIdade = {this.state.idade} funcaoBotao = {this.mostraDados} funcaoCampo = {this.pegaDados}/>
        <Tabela dados = {this.state.vetor}/>
        </div>)
    }
}

export default Principal;