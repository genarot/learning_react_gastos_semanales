
import React,{Component} from 'react';

export default class Gasto extends Component {
    render() {
        const {cantidadGasto, nombreGasto} = this.props.gasto;
        return (
            <li>
                <p>
                    {nombreGasto}
                    <span className="gasto"> $ {cantidadGasto}</span>
                </p>
            </li>
        );
    }
}