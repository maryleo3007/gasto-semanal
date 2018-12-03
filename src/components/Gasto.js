import React,{Component} from 'react';
import PropTypes from 'prop-types';

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

Gasto.propTypes = {
    cantidad: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired
}

export default Gasto