//importando módulos
import React from 'react';
import ReactDOM from 'react-dom';
import Componente01 from './Componente01';
import Componente02 from './Componente02';

//componentes
class PrimeiroComponente extends React.Component{

    //construtor
    constructor(props){
        super(props);
        this.state = {cargo: 'estagiário'};
    }

    render(){
        return(
        <div> 
            <Componente02/>
            <h1>{this.state.cargo}</h1>
            <h1>{this.props.sobre.nome}</h1> 
            <h1>{this.props.sobre.idade}</h1>
            <Componente01/>
        </div>);//os dois ultimos h1 são props e o outro h1 é state.
    }

}

//json:
const dados = {nome: "jão", idade:25}

//render no caso nome é o primeiro promp
ReactDOM.render(<PrimeiroComponente sobre = {dados}/>, document.getElementById("root"));