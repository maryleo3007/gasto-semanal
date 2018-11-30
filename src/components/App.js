import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import FormularioGasto from './Formulario';
import Listado from './Listado';

class App extends Component {

  //crear el state -> se puede crear con un constructor y pasarle los props
  state = {
    presupuesto:'',
    restante:'',
    gastos: {}
  }
  crearGasto = gasto => {
    //tomar una copia del state actual
    //spread crea una copia de state actual
    const gastos = {...this.state.gastos}

    //agregar al gasto al state
    gastos[`gasto${Date.now()}`] = gasto;

    this.setState({
      gastos
    })

    //ponerlo en el state

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
              </div>
            </div>
          </div>
      </div>
      
    );
  }
}

export default App;
