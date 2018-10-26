import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class FormularioGastos extends Component {

    constructor( props ) {
        super(props);
    }
    //refs para los campos del formulario
    nombreRef = React.createRef();
    cantidadRef = React.createRef();

    crearGasto = (e) => {
        e.preventDefault();

        const gasto = {
            nombreGasto: this.nombreRef.current.value,
            cantidadGasto: this.cantidadRef.current.value
        }

        console.log(gasto);
        
        this.props.agregarGasto( gasto );
        e.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" ref={this.nombreRef}  type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input className="u-full-width" ref={this.cantidadRef} type="number" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

FormularioGastos.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}