import React,{Component} from 'react';
import PropTypes from 'prop-types';

 class FormularioGasto extends Component {
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();

    crearGasto =(e) => {
        //prevenir el default
        e.preventDefault();
        //crear el objeto
        const gastoObj = {
            nombre : this.nombreGastoRef.current.value,
            cantidad: this.cantidadGastoRef.current.value
        }
        //enviar el formulario por medio de props

        this.props.crearGasto(gastoObj);

        //resetear el formulario

    }
    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.nombreGastoRef} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidadGastoRef} className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

FormularioGasto.propTypes = {
    crearGasto: PropTypes.func.isRequired
}

export default FormularioGasto;