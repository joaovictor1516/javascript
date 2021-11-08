import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Condicionais extends React.Component{

    render(){
        //vetor
        let cores = ['azul', 'amarelo', 'laranja', 'vermelho', 'verde', 'violeta'];
        
        const css = {
            color: 'MediumOrchid',
            margin: '2px 0'
        }

        //lista
        let lista = cores.map((cor, index) => {
            return <li key = {index} style = {css}>{index} - {cor}</li>
        }) // cor vai receber o valor da vetor, por exemplo, em cores[0] cor = azul. O index vai mostrar o indice da vetor.

        return(
            <ul style = {{backgroundColor:'LightBlue', borderRadius:'5px', width:'7%', margin: '0 0 0 50%'}}>
                {lista}
            </ul>
        );
    }
} 

ReactDOM.render(<Condicionais/>, document.getElementById("root"));