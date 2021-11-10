import React from 'react';

class Formulario extends React.Component{
    render(){
        return(
            <form onSubmit = {this.props.funcaoBotao} className = 'estilo'>
                <input type = 'text' value = {this.props.campoNome} placeholder = 'Nome' name = 'nome' className = 'form-control' onChange = {this.props.funcaoCampo}/>

                <input type = 'number' value = {this.props.campoIdade} placeholder = 'Idade' name = 'idade' min = '0' className = 'form-control' onChange = {this.props.funcaoCampo}/>

                <input type = 'submit' value = 'Cadastrar' className = 'btn btn-primary'/>
            </form>
        )
    }
}

//exportando
export default Formulario;