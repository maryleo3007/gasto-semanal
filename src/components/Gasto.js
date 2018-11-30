import React,{Component} from 'react';

class Gasto extends Component {
    
    render() {
        const {cantidad, nombre} = this.props.gasto;

        return (
            <li className="gastos">
                <p>{nombre}
                <span className="gasto"> $ {cantidad}</span>
                </p>
            </li>
        );
    }
}

export default Gasto