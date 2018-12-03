import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import FormularioGasto from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from '.././helper.js';

class App extends Component {

  //crear el state -> se puede crear con un constructor y pasarle los props
  state = {
    presupuesto:'',
    restante:'',
    gastos: {}
  }

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto(){
    let presupuesto = prompt("");
    let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
     this.setState({
      presupuesto:presupuesto,
      restante:presupuesto 
     })
    } else {
      this.obtenerPresupuesto()
    }
  }


  crearGasto = gasto => {
    //tomar una copia del state actual
    //spread crea una copia de state actual
    const gastos = {...this.state.gastos}

    //agregar al gasto al state
    gastos[`gasto${Date.now()}`] = gasto;

    //setear el gasto restante

    this.restarPresupuesto(gasto.cantidad)

    this.setState({
      gastos
    })

    //ponerlo en el state

  }

  restarPresupuesto =  cantidad => {
    let restar = Number(cantidad);
    let restante =  this.state.restante;
    restante -= restar;
    this.setState({restante:restante})
  }

  render() {
    return (
      <div className="App container">
        <Header titulo="Gasto semanal"/>
          <div className="contenido-principal contenido">
            <div className="row">
              <div className="one-half column">
                <FormularioGasto 
                  crearGasto = {this.crearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos = {this.state.gastos}
                />
                <ControlPresupuesto
                  presupuesto = {this.state.presupuesto}
                  restante = {this.state.restante}
                />
              </div>
            </div>
          </div>
      </div>
      
    );
  }
}

export default App;
