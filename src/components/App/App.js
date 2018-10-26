import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FormularioGastos from '../Formulario';
import Listado from '../Listado';
import {validarPresupuesto} from '../../assets/helpers'
import ControlPresupuesto from '../ControlPresupuesto';

class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      gastos: {},
      presupuesto: null,
      restante:null
    }
  }

  componentDidMount() {
      this.obtenerPresupuesto();
  }

  obtenerPresupuesto() {
    let presupuesto = Number(prompt('Cual es el presupuesto?'))

    if ( validarPresupuesto( presupuesto ) ) {
      this.setState({
        presupuesto: Number(presupuesto),
        restante: Number(presupuesto)
      })
    } else {
      this.obtenerPresupuesto();
    }
    console.log(isNaN(presupuesto));
  }
  //Agergar un nuevo gasto al state
  agregarGasto = ( gasto ) => {
    let gastos = { ...this.state.gastos};

    console.log('Se agrego el gasto');
    //Agregamos el gasto al state
    gastos[`gasto${Date.now()}`] = gasto;

    
    this.restarPresupuesto( gasto.cantidadGasto );
    this.setState({ gastos })
  }

  restarPresupuesto = cantidad => {
    let restar = Number(cantidad);

    let restante = this.state.restante;

    restante -= restar;

    this.setState({
      restante: restante
    })
  }
  render() {
    return (
      <div className="App container">
        <Header titulo='Gasto Semanal'></Header>
        <div className='contenido-principal contenido'>
            <div className="row">
              <div className="one-half column">
                <FormularioGastos agregarGasto={this.agregarGasto}/>
              </div>
              
              <div className="one-half column">
                <Listado gastos={this.state.gastos} />
                <ControlPresupuesto presupuesto={this.state.presupuesto} restante={this.state.restante} />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
